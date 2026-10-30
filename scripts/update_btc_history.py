#!/usr/bin/env python3
"""Fetch auditable UTC BTC-USD daily candles and build the static page snapshot."""
import argparse
import concurrent.futures
import datetime as dt
import json
from pathlib import Path
import urllib.parse
import urllib.request

LIQUIDATION_DATES = [
    '2025-10-10', '2026-10-29', '2021-05-19', '2020-03-12',
    '2025-02-03', '2022-05-12', '2025-09-22', '2024-12-10',
    '2022-11-08', '2025-02-21', '2024-08-05', '2023-08-18',
    '2025-04-20', '2024-10-07',
]
API = 'https://api.exchange.coinbase.com/products/BTC-USD/candles'
ROOT = Path(__file__).resolve().parents[1]
ARCHIVE_PATH = ROOT / 'data/exchange-incidents.json'


def fetch_event(event_date, as_of):
    day = dt.date.fromisoformat(event_date)
    baseline_day = day - dt.timedelta(days=1)
    # UTC daily candles are final only once the next UTC day has begun.
    end = min(day + dt.timedelta(days=31), as_of)
    params = {'granularity': 86400, 'start': baseline_day.isoformat() + 'T00:00:00Z',
              'end': end.isoformat() + 'T00:00:00Z'}
    url = API + '?' + urllib.parse.urlencode(params)
    req = urllib.request.Request(url, headers={'User-Agent': '20251011-research/1.0'})
    with urllib.request.urlopen(req, timeout=30) as response:
        raw = json.load(response)
    if not isinstance(raw, list):
        raise ValueError(f'{event_date}: unexpected response')
    candles = []
    for row in raw:
        stamp = dt.datetime.fromtimestamp(row[0], dt.timezone.utc)
        candle_day = stamp.date()
        if baseline_day <= candle_day <= day + dt.timedelta(days=30) and candle_day < as_of:
            if stamp.hour or stamp.minute or stamp.second or len(row) != 6:
                raise ValueError(f'{event_date}: invalid candle schema')
            _, low, high, opening, close, volume = row
            if not (0 < low <= min(opening, close) <= max(opening, close) <= high):
                raise ValueError(f'{event_date}: invalid OHLC values')
            candles.append({'date': candle_day.isoformat(), 'low': low, 'high': high,
                            'open': opening, 'close': close, 'volume': volume})
    candles.sort(key=lambda row: row['date'])
    by_date = {row['date']: row for row in candles}
    baseline = by_date.get(baseline_day.isoformat())
    if baseline is None:
        return event_date, {'eventDate': event_date, 'status': 'unavailable',
                            'unavailableReason': 'Coinbase BTC/USD 未提供该日期的完整基准日线；不拼接其他行情源。',
                            'sourceUrl': url, 'candles': candles}
    base = baseline['close']
    changes = {}
    for offset in (0, 7, 30):
        target_day = day + dt.timedelta(days=offset)
        candle = by_date.get(target_day.isoformat())
        status = 'pending' if target_day >= as_of else ('complete' if candle else 'missing')
        changes[str(offset)] = {'date': target_day.isoformat(), 'status': status,
                               'close': candle['close'] if candle else None,
                               'pct': (candle['close'] / base - 1) * 100 if candle else None}
    window_end = min(day + dt.timedelta(days=30), as_of - dt.timedelta(days=1))
    expected_days = (window_end - day).days + 1
    window = [row for row in candles if day.isoformat() <= row['date'] <= window_end.isoformat()]
    complete_window = len(window) == expected_days
    lowest = min(window, key=lambda row: row['low']) if window and complete_window else None
    return event_date, {
        'eventDate': event_date, 'baselineDate': baseline_day.isoformat(), 'baselineClose': base,
        'changes': changes, 'windowEnd': window_end.isoformat(),
        'windowComplete': day + dt.timedelta(days=30) < as_of,
        'lowStatus': 'complete' if lowest else 'missing',
        'lowDate': lowest['date'] if lowest else None,
        'low': lowest['low'] if lowest else None,
        # Zero means the price never fell below the baseline, not missing data.
        'dipPct': min(0, (lowest['low'] / base - 1) * 100) if lowest else None,
        'sourceUrl': url, 'candles': candles,
    }


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument('--as-of', default=dt.datetime.now(dt.timezone.utc).date().isoformat(),
                        help='UTC date; exclude this day and all later candles')
    args = parser.parse_args()
    as_of = dt.date.fromisoformat(args.as_of)
    archive = json.loads(ARCHIVE_PATH.read_text()) if ARCHIVE_PATH.exists() else None
    dates = set(LIQUIDATION_DATES)
    if archive:
        dates.update(event['btcDate'] for event in archive['events'] if event.get('btcDate'))
    cache_path = ROOT / 'data/btc-event-history.json'
    cached = json.loads(cache_path.read_text()) if cache_path.exists() else {}
    records = dict(cached.get('events', {})) if cached.get('asOf') == as_of.isoformat() else {}
    pending_dates = sorted(dates - records.keys())
    with concurrent.futures.ThreadPoolExecutor(max_workers=3) as pool:
        records.update(dict(pool.map(lambda date: fetch_event(date, as_of), pending_dates)))
    records = {date: records[date] for date in sorted(dates)}
    snapshot = {'schemaVersion': 1, 'asOf': as_of.isoformat(), 'product': 'Coinbase BTC-USD',
                'timezone': 'UTC', 'sourceDocs': 'https://docs.cdp.coinbase.com/api-reference/exchange-api/rest-api/products/get-product-candles',
                'events': records}
    encoded = json.dumps(snapshot, ensure_ascii=False, indent=2, allow_nan=False)
    # Keep JSON separately for source review; the script works from file:// as well as HTTP.
    (ROOT / 'data').mkdir(exist_ok=True)
    (ROOT / 'data/btc-event-history.json').write_text(encoded + '\n')
    (ROOT / 'data/btc-event-history.js').write_text(
        '// Generated by scripts/update_btc_history.py; prices are not live.\n'
        'window.BTC_EVENT_HISTORY = ' + encoded + ';\n')
    if archive:
        archive_encoded = json.dumps(archive, ensure_ascii=False, indent=2, allow_nan=False)
        (ROOT / 'data/exchange-incidents.js').write_text(
            '// Generated from data/exchange-incidents.json by scripts/update_btc_history.py\n'
            'window.EXCHANGE_INCIDENTS = ' + archive_encoded + ';\n')
    for date, item in records.items():
        if item.get('status') == 'unavailable':
            print(date, item['unavailableReason'])
            continue
        display = lambda value: 'pending' if value is None else f'{value:+.2f}%'
        print(date, ' / '.join(display(item['changes'][str(n)]['pct']) for n in (0, 7, 30)),
              'dip', display(item['dipPct']))


if __name__ == '__main__':
    main()
