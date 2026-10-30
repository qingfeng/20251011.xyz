// Generated from data/exchange-incidents.json by scripts/update_btc_history.py
window.EXCHANGE_INCIDENTS = {
  "schemaVersion": 1,
  "asOf": "2026-10-30",
  "coverage": "2014–2026 年全球中心化交易所及交易平台关联收益产品的重大公开事件，并增补已核实的硬件钱包安全事件；钱包部分目前收录 Ledger／CryptoBilis 2026 年事件。优先收录千万美元级安全事件、破产、长期停提，以及有代表性的交易异常。非全球全部事故登记。",
  "exclusions": "不含独立 DeFi 协议、跨链桥、一般非托管软件钱包、纯借贷机构及一般监管罚款；同一平台的不同事件分别列示。硬件钱包记录按实际机制标记，不代表该品牌所有设备均受影响。",
  "events": [
    {
      "id": "binance-2026",
      "date": "2026-10-29",
      "dateLabel": "2026-10-29 / 30 披露",
      "name": "Binance 币安 · 未经授权的提现",
      "region": "国际平台",
      "market": "全球",
      "type": "hack",
      "metric": "≈ $63 亿",
      "scope": "平台初步估计的受影响资产规模 · 非最终净损失",
      "rankUsd": 6300000000,
      "paragraphs": [
        "币安官方新闻账号于 10 月 30 日转述公告：事件估计涉及约 63 亿美元资产，已与合作方冻结链上资产约 30 亿美元。美联社亦于 10 月 29 日报道了平台披露的金额。",
        "平台初步调查称，攻击可能始于一名 DevOps 工程师的电脑被入侵，攻击者随后通过服务容器提交未经授权的提现。平台称暂未发现钱包私钥泄露证据，并表示将以 SAFU 基金及自有资金承担损失。原因仍待完整调查确认，赔付承诺不等于赔付已经完成。"
      ],
      "sources": [
        {
          "label": "币安官方新闻账号 · 2026-10-30",
          "url": "https://www.binance.com/en/square/post/10-30-2026-binance-stated-that-the-security-incident-affected-approximately-6-3-billion-with-about-3-billion-frozen-382718598048399"
        },
        {
          "label": "美联社 · 2026-10-29",
          "url": "https://apnews.com/article/39cda8ceb8095e036334a18549d3d20d"
        }
      ],
      "btcDate": "2026-10-29",
      "verifiedAt": "2026-10-30"
    },
    {
      "id": "ledger-cryptobilis-2026",
      "date": "2026-10-09",
      "dateLabel": "2026-10-09 披露／集中盗币",
      "name": "Ledger／CryptoBilis · 硬件植入与助记词泄露",
      "region": "南亚与东南亚",
      "market": "马来西亚、印度尼西亚、菲律宾等经销渠道",
      "type": "hardware",
      "metric": "≈ $1.02 亿（链上估计）",
      "scope": "Bitquery 截至 2026-10-16 追踪估值；Ledger 未确认最终损失总额",
      "rankUsd": 102000000,
      "paragraphs": [
        "10 月 9 日，部分购买经销商 CryptoBilis 所售 Ledger 设备的用户报告资产被转走。Ledger 后续调查确认受影响设备中存在未经授权的硬件植入物；其可在初始化时读取屏幕显示的助记词，并通过蜂窝网络外传。",
        "Ledger 在 10 月 15 日更新中称，攻击发生于设备离开其控制后的经销环节，芯片、操作系统及服务器未被攻破。该说法是厂商调查结论，不能据此将所有 Ledger 设备或所有销售渠道列为受影响。",
        "Bitquery 截至 10 月 16 日追踪估计，335 个钱包地址跨六条链被转走约 1.02 亿美元。地址数不等于受害人数或设备数；这也不是 Ledger 确认的最终损失。早期约 8,600 万、9,300 万美元属于同一事件的不同统计版本，不重复累加。",
        "本条按硬件钱包经销渠道篡改事件收录，与交易所托管钱包被盗分开标记。BTC 统计锚点采用 10 月 9 日披露／集中盗币日；后续市场表现不能证明由该事件单独造成。"
      ],
      "sources": [
        {
          "label": "Ledger 官方调查回应（2026-10-15 更新）",
          "url": "https://support.ledger.com/ru/article/Ledger-s-Response-to-the-Hardware-Implant-Attack"
        },
        {
          "label": "Bitquery · 截至 2026-10-16 的链上估计",
          "url": "https://www.bitquery.io/investigations/ledger-cryptobilis-hack"
        },
        {
          "label": "The Record · 硬件植入机制及官方回应",
          "url": "https://therecord.media/ledger-cryptocurrency-wallet-implant-theft"
        }
      ],
      "btcDate": "2026-10-09",
      "verifiedAt": "2026-10-30"
    },
    {
      "id": "bitget-2026",
      "date": "2026-09-24",
      "dateLabel": "2026-09-24",
      "name": "Bitget · 热钱包与温钱包未经授权转账",
      "region": "国际平台",
      "market": "全球",
      "type": "hack",
      "metric": "≈ $3.88 亿",
      "scope": "平台 2026-10-20 更新的最终受影响金额",
      "rankUsd": 388000000.0,
      "paragraphs": [
        "Bitget 最新复盘将本次受影响金额确认约为 3.88 亿美元；此前 3.516 亿、3.875 亿美元是同一起事件的较早统计，不重复计数。",
        "平台称攻击涉及第三方安全产品漏洞及伪造提现指令，冷钱包未受影响；提现于 10 月 2 日分阶段恢复完成。资产追踪与恢复仍在继续。"
      ],
      "sources": [
        {
          "label": "Bitget 官方复盘（更新至 2026-10-20）",
          "url": "https://www.bitget.com/academy/bitget-security-incident-what-happened-timeline-impact-response"
        }
      ],
      "btcDate": "2026-09-24",
      "verifiedAt": "2026-10-30"
    },
    {
      "id": "orionx-2026",
      "date": "2026-09-03",
      "dateLabel": "2026-09-03",
      "name": "Orionx · 托管资产缺口与关停",
      "region": "拉美",
      "market": "智利",
      "type": "collapse",
      "metric": "> $700 万",
      "scope": "平台公告的托管资产异常流出规模",
      "rankUsd": 7000000.0,
      "paragraphs": [
        "Orionx 宣布启动永久关闭程序。平台称法证审计发现超过 700 万美元托管资产流向非公司管理的钱包，并已针对相关前高管提起刑事诉讼。",
        "该金额是公告披露的资产缺口，不等于所有客户最终净损失。"
      ],
      "sources": [
        {
          "label": "Orionx 官方状态公告",
          "url": "https://www.orionx.com/status"
        }
      ],
      "btcDate": "2026-09-03",
      "verifiedAt": "2026-10-30"
    },
    {
      "id": "exmo-2026",
      "date": "2026-07-16",
      "dateLabel": "2026-07-16",
      "name": "EXMO · 关停及账户余额折减",
      "region": "欧洲",
      "market": "英国及欧洲市场",
      "type": "collapse",
      "metric": "余额折减 29.4%",
      "scope": "账户折减比例；未披露可核实的美元总损失",
      "rankUsd": null,
      "paragraphs": [
        "EXMO 公告关闭业务，并将 29.4% 的账户资产转换为不可交易、不可提取的 USDRecover 债权记录。平台将缺口与历史攻击及服务商冻结资产相联系。",
        "本条为 2026 年关停事件，2020 年盗币单独记录；两者涉及的金额不作合计。"
      ],
      "sources": [
        {
          "label": "EXMO 官方关停公告",
          "url": "https://exmo.com/blog/en/notifications/exmo-com-is-closing-please-initiate-withdrawal-from-your-account"
        }
      ],
      "btcDate": "2026-07-16",
      "verifiedAt": "2026-10-30"
    },
    {
      "id": "knaken-2026",
      "date": "2026-07-16",
      "dateLabel": "2026-07-16",
      "name": "Knaken · 停提后被法院宣告破产",
      "region": "欧洲",
      "market": "荷兰",
      "type": "collapse",
      "metric": "美元损失未统一披露",
      "scope": "法院确认破产；不把媒体估算当最终客户损失",
      "rankUsd": null,
      "paragraphs": [
        "鹿特丹法院于 2026 年 7 月 16 日宣告 Knaken Cryptohandel B.V. 破产。荷兰检方此前已因资金覆盖缺口和服务停止申请破产，并提及 FIOD 调查。"
      ],
      "sources": [
        {
          "label": "鹿特丹法院公告",
          "url": "https://www.rechtspraak.nl/organisatie-en-contact/organisatie/rechtbanken/rechtbank-rotterdam/nieuws/2026/07/knaken-cryptohandel-b.v.-failliet-verklaard"
        },
        {
          "label": "荷兰检方公告",
          "url": "https://www.om.nl/actueel/nieuws/2026/06/30/om-verzoekt-faillissement-cryptocurrency-bedrijf-knaken"
        }
      ],
      "btcDate": "2026-07-16",
      "verifiedAt": "2026-10-30"
    },
    {
      "id": "grinex-2026",
      "date": "2026-04-16",
      "dateLabel": "2026-04-16",
      "name": "Grinex · 钱包攻击与服务暂停",
      "region": "中东与中亚",
      "market": "吉尔吉斯斯坦／俄罗斯市场",
      "type": "hack",
      "metric": "≈ $1,300 万",
      "scope": "平台披露约 10 亿卢布；报道的当时美元折算",
      "rankUsd": 13000000.0,
      "paragraphs": [
        "Grinex 在宣布遭攻击后暂停交易服务，称约 10 亿卢布资产被盗。不同链上分析口径约为 1,300 万至 1,500 万美元。",
        "平台对攻击者身份的指控尚不能作为独立确认的归因；本榜采用披露时约 1,300 万美元口径。"
      ],
      "sources": [
        {
          "label": "Decrypt · 2026-04-16",
          "url": "https://decrypt.co/364656/russian-crypto-exchange-grinex-halts-trading-13m-exploit?amp=1"
        }
      ],
      "btcDate": "2026-04-16",
      "verifiedAt": "2026-10-30"
    },
    {
      "id": "zondacrypto-2026",
      "date": "2026-04",
      "dateLabel": "2026-04 · 月度记录",
      "name": "Zondacrypto · 提款困难与流动性争议",
      "region": "欧洲",
      "market": "波兰／爱沙尼亚",
      "type": "freeze",
      "metric": "损失总额未统一确认",
      "scope": "提现投诉及监管调查；不将钱包余额争议直接当损失",
      "rankUsd": null,
      "paragraphs": [
        "2026 年 4 月出现提款延迟及储备争议，波兰媒体报道监管机构介入。平台曾否认资不抵债。",
        "公开报道对储备访问、资产缺口和后续处置的表述存在差异，本条保留争议状态，不编造美元损失和单日 BTC 涨跌。"
      ],
      "sources": [
        {
          "label": "波兰公共广播报道",
          "url": "https://www.polskieradio.pl/395/7786/artykul/3670455,zondacrypto-denies-liquidity-crisis-amid-reports-of-nearempty-bitcoin-reserves"
        },
        {
          "label": "Money.pl · 监管调查报道",
          "url": "https://www.money.pl/finanse/uokik-zbada-sprawe-zondacrypto-znacznie-powazniejsze-nieprawidlowosci-7277326258497888a.html"
        }
      ],
      "btcDate": null,
      "verifiedAt": "2026-10-30"
    },
    {
      "id": "bithumb-error-2026",
      "date": "2026-02-06",
      "dateLabel": "2026-02-06",
      "name": "Bithumb · 误记账 62 万 BTC",
      "region": "东亚",
      "market": "韩国",
      "type": "trading",
      "metric": "误记账 620,000 BTC",
      "scope": "平台内部错误发放数量；不是链上盗币或最终净损失",
      "rankUsd": null,
      "paragraphs": [
        "促销发奖时错误使用 BTC 单位，造成大规模账户误记账并引发站内价格异常。韩联社报道平台已追回约 99.7% 的错误发放。",
        "不把约 440 亿美元的误记账名义值放入损失金额榜。下方 BTC 表现来自 Coinbase，不是 Bithumb 站内瞬时价格。"
      ],
      "sources": [
        {
          "label": "韩联社 · 2026-02-07",
          "url": "https://en.yna.co.kr/view/AEN20260207001552320"
        }
      ],
      "btcDate": "2026-02-06",
      "verifiedAt": "2026-10-30"
    },
    {
      "id": "upbit-2025",
      "date": "2025-11-27",
      "dateLabel": "2025-11-27",
      "name": "Upbit · Solana 系资产异常转出",
      "region": "东亚",
      "market": "韩国",
      "type": "hack",
      "metric": "≈ $3,000 万",
      "scope": "媒体转述修订后的约 445 亿韩元规模",
      "rankUsd": 30000000.0,
      "paragraphs": [
        "Upbit 发现 Solana 网络相关资产流向未经授权钱包并暂停充提。早期报道使用约 540 亿韩元，后续修订报道约为 445 亿韩元（约 3,000 万美元）。",
        "本条采用修订口径，并与 2019 年 ETH 盗币区分。"
      ],
      "sources": [
        {
          "label": "Tom’s Hardware · 引用平台修订公告",
          "url": "https://www.tomshardware.com/tech-industry/cryptocurrency/south-korean-crypto-exchange-upbit-reports-usd30-million-theft-hack-discovered-hours-after-countrys-largest-search-engine-announced-usd10-billion-acquisition-of-crypto-platforms-parent-company"
        },
        {
          "label": "韩联社 · 早期金额口径",
          "url": "https://en.yna.co.kr/view/AEN20251127007651320"
        }
      ],
      "btcDate": "2025-11-27",
      "verifiedAt": "2026-10-30"
    },
    {
      "id": "tradeogre-2025",
      "date": "2025-09-18",
      "dateLabel": "2025-09-18",
      "name": "TradeOgre · 平台及资产被执法机关查扣",
      "region": "北美",
      "market": "加拿大执法行动／全球用户",
      "type": "freeze",
      "metric": "> C$5,600 万被查扣",
      "scope": "加拿大警方披露的查扣资产价值；不是已证实客户损失",
      "rankUsd": null,
      "paragraphs": [
        "加拿大皇家骑警宣布查扣 TradeOgre 平台及超过 5,600 万加元加密资产。用户服务和资产取回受到执法处置影响。",
        "本条记录 9 月 18 日公开披露，不将查扣资产自动称为盗币或最终用户损失。"
      ],
      "sources": [
        {
          "label": "加拿大皇家骑警官方公告",
          "url": "https://grc.ca/fr/nouvelles/2025/09/grc-procede-saisie-record-plus-56-millions-dollars-en-cryptomonnaies"
        }
      ],
      "btcDate": "2025-09-18",
      "verifiedAt": "2026-10-30"
    },
    {
      "id": "swissborg-2025",
      "date": "2025-09-08",
      "dateLabel": "2025-09-08",
      "name": "SwissBorg · SOL Earn 第三方服务被攻击",
      "region": "欧洲",
      "market": "瑞士",
      "type": "hack",
      "metric": "≈ $4,150 万",
      "scope": "约 192,600 SOL 的事发时估值；仅涉及该收益产品",
      "rankUsd": 41500000.0,
      "paragraphs": [
        "SwissBorg 的 SOL Earn 产品因第三方质押服务商 Kiln 相关安全问题受影响。公司公告提到超过 192,000 SOL，媒体估值约 4,150 万美元。",
        "这是交易平台的关联收益产品事件，不等于交易所全部钱包遭入侵。"
      ],
      "sources": [
        {
          "label": "SwissBorg 官方安全更新",
          "url": "https://swissborg.com/blog/swissborg-security-update-kiln-breach"
        },
        {
          "label": "CoinDesk · 金额估值",
          "url": "https://www.coindesk.com/tech/2025/09/09/swissborg-s-sol-earn-wallet-exploited-for-usd41-5m-after-partner-s-api-is-compromised"
        }
      ],
      "btcDate": "2025-09-08",
      "verifiedAt": "2026-10-30"
    },
    {
      "id": "btcturk-2025",
      "date": "2025-08-14",
      "dateLabel": "2025-08-14",
      "name": "BtcTurk · 再次出现热钱包异常流出",
      "region": "欧洲",
      "market": "土耳其",
      "type": "hack",
      "metric": "≈ $4,800 万",
      "scope": "Beosin 链上追踪估计；非平台公布的最终损失",
      "rankUsd": 48000000.0,
      "paragraphs": [
        "BtcTurk 出现多链热钱包异常资金流出，暂停加密资产充提。Beosin 估计相关资金规模约 4,800 万美元。",
        "本条与 2024 年攻击分开记录。"
      ],
      "sources": [
        {
          "label": "Beosin · 资金流分析",
          "url": "https://www.beosin.com/resources/fund-flow-analysis-of-btcturk-48-million-hack"
        }
      ],
      "btcDate": "2025-08-14",
      "verifiedAt": "2026-10-30"
    },
    {
      "id": "woox-2025",
      "date": "2025-07-24",
      "dateLabel": "2025-07-24",
      "name": "WOO X · 9 个账户未经授权提现",
      "region": "国际平台",
      "market": "全球",
      "type": "hack",
      "metric": "≈ $1,400 万",
      "scope": "平台复盘确认的未经授权提现规模",
      "rankUsd": 14000000.0,
      "paragraphs": [
        "WOO X 在复盘中确认 9 个用户账户发生未经授权的提现，合计约 1,400 万美元。事件被控制后平台开展恢复与补偿工作。"
      ],
      "sources": [
        {
          "label": "WOO X 官方事后复盘",
          "url": "https://woox.io/blog/july-24th-security-incident-post-mortem"
        }
      ],
      "btcDate": "2025-07-24",
      "verifiedAt": "2026-10-30"
    },
    {
      "id": "coindcx-2025",
      "date": "2025-07-19",
      "dateLabel": "2025-07-19",
      "name": "CoinDCX · 流动性运营账户被盗",
      "region": "南亚与东南亚",
      "market": "印度",
      "type": "hack",
      "metric": "≈ $4,400 万",
      "scope": "内部运营账户被盗金额；非客户钱包损失",
      "rankUsd": 44000000.0,
      "paragraphs": [
        "CoinDCX 官方事件报告确认，供合作交易所流动性使用的内部运营账户被入侵，约 4,400 万 USDT 被转走。",
        "平台称客户钱包与该运营账户隔离，本条按公司运营资产被盗记录。"
      ],
      "sources": [
        {
          "label": "CoinDCX 官方事件报告",
          "url": "https://coindcx.com/blog/announcements/incident-report-july-19-2025"
        }
      ],
      "btcDate": "2025-07-19",
      "verifiedAt": "2026-10-30"
    },
    {
      "id": "bigone-2025",
      "date": "2025-07-16",
      "dateLabel": "2025-07-16",
      "name": "BigONE · 生产系统与热钱包攻击",
      "region": "国际平台",
      "market": "全球",
      "type": "hack",
      "metric": "≈ $2,700 万",
      "scope": "平台公开估计的资产损失",
      "rankUsd": 27000000.0,
      "paragraphs": [
        "BigONE 披露生产系统遭攻击并出现未经授权转账，估计损失约 2,700 万美元。平台表示将承担损失并加强相关系统安全。"
      ],
      "sources": [
        {
          "label": "BigONE 官方事件披露",
          "url": "https://bigone.zendesk.com/hc/en-us/articles/48916067512345-BigONE-Security-Incident-Disclosure-and-Progress-Update-July-16"
        }
      ],
      "btcDate": "2025-07-16",
      "verifiedAt": "2026-10-30"
    },
    {
      "id": "nobitex-2025",
      "date": "2025-06-18",
      "dateLabel": "2025-06-18",
      "name": "Nobitex · 多链钱包被盗与销毁",
      "region": "中东与中亚",
      "market": "伊朗",
      "type": "hack",
      "metric": "> $9,000 万",
      "scope": "Chainalysis 统计的跨链被盗资产规模",
      "rankUsd": 90000000.0,
      "paragraphs": [
        "Chainalysis 记录 Nobitex 多链资产被攻击，损失超过 9,000 万美元。部分资金被送至难以访问的地址，事件具有破坏资产而非单纯套现的特征。"
      ],
      "sources": [
        {
          "label": "Chainalysis · Nobitex 事件分析",
          "url": "https://www.chainalysis.com/blog/nobitex-iranian-exchange-exploit-june-2025/"
        }
      ],
      "btcDate": "2025-06-18",
      "verifiedAt": "2026-10-30"
    },
    {
      "id": "coinbase-2025",
      "date": "2025-05-15",
      "dateLabel": "2025-05-15",
      "name": "Coinbase · 客服数据泄露与社工诈骗",
      "region": "北美",
      "market": "美国",
      "type": "data",
      "metric": "补救成本估计 $1.8–4 亿",
      "scope": "初步补救及自愿赔付预算；不是钱包被盗总额",
      "rankUsd": null,
      "paragraphs": [
        "Coinbase 披露有境外客服人员被收买，泄露部分客户资料，被用于冒充客服的诈骗。平台拒付赎金并承诺赔付符合条件的受害用户。",
        "SEC 文件中的 1.8 亿至 4 亿美元是初步补救及自愿赔付成本估计，不作为确定盗币规模参与排名。事件日采用公开披露日。"
      ],
      "sources": [
        {
          "label": "Coinbase 官方说明",
          "url": "https://www.coinbase.com/en-mx/blog/protecting-our-customers-standing-up-to-extortionists"
        },
        {
          "label": "美联社 · 预算口径",
          "url": "https://apnews.com/article/e3ef5297dfea296eb7b7320d8c58647e"
        }
      ],
      "btcDate": "2025-05-15",
      "verifiedAt": "2026-10-30"
    },
    {
      "id": "bitopro-2025",
      "date": "2025-05-08",
      "dateLabel": "2025-05-08",
      "name": "BitoPro · 热钱包安全事件",
      "region": "东亚",
      "market": "中国台湾",
      "type": "hack",
      "metric": "≈ $1,150 万",
      "scope": "链上研究者估值；事发日与公开确认日不同",
      "rankUsd": 11500000.0,
      "paragraphs": [
        "链上追踪将事件定位于 5 月 8 日，估计热钱包损失约 1,150 万美元。平台在后续声明中说明调查进度，事发日不等于公开确认日。"
      ],
      "sources": [
        {
          "label": "BitoPro 官方进度说明",
          "url": "https://www.bitopro.com/ns/en-US/announcements/1226"
        },
        {
          "label": "CoinDesk · 时间与金额",
          "url": "https://www.coindesk.com/tech/2025/06/02/taiwanese-crypto-exchange-bitopro-likely-hacked-for-usd11m-in-may-zachxbt-says"
        }
      ],
      "btcDate": "2025-05-08",
      "verifiedAt": "2026-10-30"
    },
    {
      "id": "bitget-voxel-2025",
      "date": "2025-04-20",
      "dateLabel": "2025-04-20",
      "name": "Bitget · VOXELUSDT 永续合约异常",
      "region": "国际平台",
      "market": "全球",
      "type": "trading",
      "metric": "总损失未披露",
      "scope": "官方公告未公布可比的损失或爆仓总额",
      "rankUsd": null,
      "paragraphs": [
        "Bitget 确认当日 08:00–08:30 UTC 发生异常成交量和价格波动。平台称部分账户可能涉及市场操纵，限制相关账户，并宣布回滚异常交易及为符合条件的亏损用户提供补偿。",
        "后续公告另列出价值 100 万 USDT 的 BGB 用户激励池；该预算不是事件总损失。本条按交易异常记录，不标为已证实的黑客盗币。"
      ],
      "sources": [
        {
          "label": "Bitget 事件公告",
          "url": "https://www.bitget.com/en-CA/support/articles/12560603825918"
        },
        {
          "label": "Bitget 后续激励公告",
          "url": "https://www.bitget.com/support/articles/12560603826039"
        }
      ],
      "btcDate": "2025-04-20",
      "verifiedAt": "2026-10-30"
    },
    {
      "id": "bybit-2025",
      "date": "2025-02-21",
      "dateLabel": "2025-02-21",
      "name": "Bybit · 约 15 亿美元加密资产被盗",
      "region": "国际平台",
      "market": "全球",
      "type": "hack",
      "metric": "≈ $15 亿",
      "scope": "事件发生时估算的被盗资产价值",
      "rankUsd": 1500000000,
      "paragraphs": [
        "FBI 于 2025 年 2 月 26 日发布公告，确认 Bybit 在 2 月 21 日前后被盗约 15 亿美元虚拟资产，并将攻击归因于朝鲜的 TraderTraitor 活动。",
        "按被盗资产口径纳入金额榜，与全市场合约爆仓采用不同口径，不作合计。"
      ],
      "sources": [
        {
          "label": "FBI 官方公告 · 2025-02-26",
          "url": "https://www.fbi.gov/investigate/cyber/alerts/2025/north-korea-responsible-for-1-5-billion-bybit-hack"
        }
      ],
      "btcDate": "2025-02-21",
      "verifiedAt": "2026-10-30"
    },
    {
      "id": "phemex-2025",
      "date": "2025-01-23",
      "dateLabel": "2025-01-23",
      "name": "Phemex · 多链热钱包攻击",
      "region": "国际平台",
      "market": "全球",
      "type": "hack",
      "metric": "> $6,900 万",
      "scope": "Immunefi 报告估值；不同追踪统计有差异",
      "rankUsd": 69000000.0,
      "paragraphs": [
        "Phemex 官方确认当日 11:30 UTC 发现热钱包异常，并暂停充提、分阶段恢复。Immunefi 一季度报告估算损失超过 6,900 万美元。",
        "其他追踪方曾给出更高估值，本榜固定使用已链接报告的口径，不把不同统计重复计数。"
      ],
      "sources": [
        {
          "label": "Phemex 官方事件时间线",
          "url": "https://phemex.com/announcements/phemex-hot-wallet-security-incident-update-and-timeline"
        },
        {
          "label": "Immunefi · 2025 Q1 报告",
          "url": "https://downloads.ctfassets.net/t3wqy70tc3bv/kicQd50NcNkEQyA1QmpOB/b365451e130c1b1c0cbe55c191a22d41/Immunefi_Crypto_Losses_In_Q1_2025.pdf"
        }
      ],
      "btcDate": "2025-01-23",
      "verifiedAt": "2026-10-30"
    },
    {
      "id": "m2-2024",
      "date": "2024-10-31",
      "dateLabel": "2024-10-31",
      "name": "M2 · BTC、ETH 与 SOL 热钱包被盗",
      "region": "中东与中亚",
      "market": "阿联酋",
      "type": "hack",
      "metric": "≈ $1,370 万",
      "scope": "平台披露的盗币规模",
      "rankUsd": 13700000.0,
      "paragraphs": [
        "M2 披露热钱包安全事件，涉及 BTC、ETH 和 SOL，金额约 1,370 万美元。平台表示使用自有资产恢复客户资金。",
        "记录平台采用的当地 10 月 31 日事件日作为统计锚点，不把恢复余额误称为从攻击者追回资金。"
      ],
      "sources": [
        {
          "label": "CryptoSlate · 引用平台声明",
          "url": "https://cryptoslate.com/uaes-m2-crypto-exchange-hacked-for-13-7m-assures-full-fund-recovery/"
        }
      ],
      "btcDate": "2024-10-31",
      "verifiedAt": "2026-10-30"
    },
    {
      "id": "bitget-bgb-2024",
      "date": "2024-10-07",
      "dateLabel": "2024-10-07",
      "name": "Bitget · BGB 异常波动与连锁清算",
      "region": "国际平台",
      "market": "全球",
      "type": "trading",
      "metric": "总损失未披露",
      "scope": "官方补偿公告未披露事件损失总额",
      "rankUsd": null,
      "paragraphs": [
        "Bitget 公告称，当日 02:53:00–02:58:59 UTC 的 BGB 异常波动，由连续的大额杠杆交易触发，并引起质押借贷、现货杠杆和合约头寸的连锁强平。",
        "平台公布了符合条件用户的补偿方案，但未披露损失总额，因此暂不参与金额排序。"
      ],
      "sources": [
        {
          "label": "Bitget 波动说明与补偿方案",
          "url": "https://www.bitgetapp.com/support/articles/12560603816501"
        }
      ],
      "btcDate": "2024-10-07",
      "verifiedAt": "2026-10-30"
    },
    {
      "id": "bingx-2024",
      "date": "2024-09-20",
      "dateLabel": "2024-09-20",
      "name": "BingX · 热钱包未经授权访问",
      "region": "国际平台",
      "market": "全球",
      "type": "hack",
      "metric": "≈ $4,500 万",
      "scope": "研究报告的事件损失估值",
      "rankUsd": 45000000.0,
      "paragraphs": [
        "BingX 确认部分热钱包遭未经授权入侵。日本金融厅发布的相关研究材料列出约 4,500 万美元损失。",
        "平台公告采用 UTC+8 的 9 月 20 日；BTC 窗口同样以所列 9 月 20 日作为统计锚点，不能代表精确攻击时刻。"
      ],
      "sources": [
        {
          "label": "BingX 官方事件 FAQ",
          "url": "https://bingxservice.zendesk.com/hc/en-001/articles/11258512659471-Hot-Wallet-Incident-FAQ"
        },
        {
          "label": "日本金融厅发布的研究材料",
          "url": "https://www.fsa.go.jp/policy/bgin/ResearchPaper_dtc_en.pdf"
        }
      ],
      "btcDate": "2024-09-20",
      "verifiedAt": "2026-10-30"
    },
    {
      "id": "indodax-2024",
      "date": "2024-09-11",
      "dateLabel": "2024-09-11",
      "name": "Indodax · 热钱包安全事件",
      "region": "南亚与东南亚",
      "market": "印度尼西亚",
      "type": "hack",
      "metric": "≈ $2,200 万",
      "scope": "安全公司及媒体估计的异常流出规模",
      "rankUsd": 22000000.0,
      "paragraphs": [
        "Indodax 确认安全事件并暂停服务；多家安全研究机构估算约 2,200 万美元资产流出。平台随后披露恢复进度。"
      ],
      "sources": [
        {
          "label": "Indodax 官方恢复说明",
          "url": "https://blog.indodax.com/?p=30518"
        },
        {
          "label": "The Record · 金额估计",
          "url": "https://therecord.media/indodax-crypto-exchange-pledges-to-reimburse-after-theft"
        }
      ],
      "btcDate": "2024-09-11",
      "verifiedAt": "2026-10-30"
    },
    {
      "id": "wazirx-2024",
      "date": "2024-07-18",
      "dateLabel": "2024-07-18",
      "name": "WazirX · 多签钱包被攻击",
      "region": "南亚与东南亚",
      "market": "印度",
      "type": "hack",
      "metric": "> $2.3 亿",
      "scope": "平台确认的被盗资产规模",
      "rankUsd": 230000000.0,
      "paragraphs": [
        "WazirX 官方确认一个多签钱包遭攻击，被盗数字资产超过 2.3 亿美元。事件导致提款受限及后续重组安排。",
        "本条采用官方公告的下限口径，不能把冻结提款余额全部算作盗币。"
      ],
      "sources": [
        {
          "label": "WazirX 官方事件说明",
          "url": "https://wazirx.com/blog/important-update-cyber-attack-incident-and-measures-to-protect-your-assets/"
        }
      ],
      "btcDate": "2024-07-18",
      "verifiedAt": "2026-10-30"
    },
    {
      "id": "btcturk-2024",
      "date": "2024-06-22",
      "dateLabel": "2024-06-22",
      "name": "BtcTurk · 热钱包攻击",
      "region": "欧洲",
      "market": "土耳其",
      "type": "hack",
      "metric": "≈ $5,500 万",
      "scope": "链上研究者估计；平台未公布最终美元总额",
      "rankUsd": 55000000.0,
      "paragraphs": [
        "BtcTurk 披露部分热钱包遭攻击。ZachXBT 追踪及媒体报道估计约 5,500 万美元，币安协助冻结约 500 万美元相关资金。",
        "冻结金额属于处置进展，不是应从本记录直接扣除的已追回款。"
      ],
      "sources": [
        {
          "label": "The Block · 事件与追踪报道",
          "url": "https://www.theblock.co/news/regulation/2024-06-22-binance-freezes-5-million-in-funds-looted-from-btcturk-after-alleged-54-million-hack-of-turkish-exchange-301340"
        }
      ],
      "btcDate": "2024-06-22",
      "verifiedAt": "2026-10-30"
    },
    {
      "id": "lykke-2024",
      "date": "2024-06-04",
      "dateLabel": "2024-06-04",
      "name": "Lykke · 企业网络入侵与资产被转走",
      "region": "欧洲",
      "market": "瑞士／英国",
      "type": "hack",
      "metric": "≈ $2,200 万",
      "scope": "管理层向媒体说明的被转出资产价值",
      "rankUsd": 22000000.0,
      "paragraphs": [
        "Lykke 管理层向媒体说明，攻击者入侵企业网络，诱使合作方转出约 2,200 万美元加密资产，平台服务受到影响。"
      ],
      "sources": [
        {
          "label": "SwissCybersecurity · 引述 Lykke 管理层",
          "url": "https://www.swisscybersecurity.net/news/2024-06-14/cyberkriminelle-stehlen-kryptoguthaben-von-zuger-blockchain-firma-lykke"
        }
      ],
      "btcDate": "2024-06-04",
      "verifiedAt": "2026-10-30"
    },
    {
      "id": "dmm-2024",
      "date": "2024-05-31",
      "dateLabel": "2024-05-31",
      "name": "DMM Bitcoin · 4,502.9 BTC 被盗",
      "region": "东亚",
      "market": "日本",
      "type": "hack",
      "metric": "≈ $3.08 亿",
      "scope": "FBI 等联合公告采用的事发时估值",
      "rankUsd": 308000000.0,
      "paragraphs": [
        "FBI、日本警方等联合公告确认 DMM Bitcoin 约 4,502.9 BTC 被盗，当时价值约 3.08 亿美元，并将事件归因于朝鲜相关攻击活动。"
      ],
      "sources": [
        {
          "label": "FBI／日本警方等联合公告",
          "url": "https://www.fbi.gov/news/press-releases/fbi-dc3-and-npa-identification-of-north-korean-cyber-actors-tracked-as-tradertraitor-responsible-for-theft-of-308-million-from-bitcoindmmcom"
        }
      ],
      "btcDate": "2024-05-31",
      "verifiedAt": "2026-10-30"
    },
    {
      "id": "rain-2024",
      "date": "2024-04-29",
      "dateLabel": "2024-04-29",
      "name": "Rain · 多币种钱包异常流出",
      "region": "中东与中亚",
      "market": "巴林／中东",
      "type": "hack",
      "metric": "≈ $1,480 万",
      "scope": "链上研究者追踪估计，非平台最终损失结算",
      "rankUsd": 14800000.0,
      "paragraphs": [
        "ZachXBT 追踪 Rain 的 BTC、ETH、SOL 和 XRP 钱包于 4 月 29 日出现异常流出，估计约 1,480 万美元；公开追踪报告在 5 月披露。"
      ],
      "sources": [
        {
          "label": "The Block · Rain 追踪报道",
          "url": "https://www.theblock.co/news/regulation/2024-05-13-crypto-exchange-rain-likely-exploited-for-14-8-million-zachxbt-294036"
        }
      ],
      "btcDate": "2024-04-29",
      "verifiedAt": "2026-10-30"
    },
    {
      "id": "bitforex-2024",
      "date": "2024-02-23",
      "dateLabel": "2024-02-23",
      "name": "BitForex · 长期停提及平台失联",
      "region": "国际平台",
      "market": "全球／香港监管关注",
      "type": "freeze",
      "metric": "客户损失总额未确认",
      "scope": "异常钱包流出不等于已证实盗币或用户净损失",
      "rankUsd": null,
      "paragraphs": [
        "BitForex 在 2 月下旬出现停止提款及网站失联，香港证监会随后发布涉嫌欺诈警告。平台后续称团队曾于 2 月 23 日被警方带走调查。",
        "不将第三方记录的钱包流出额直接记为已确认盗币损失。"
      ],
      "sources": [
        {
          "label": "香港证监会警告",
          "url": "https://apps.sfc.hk/edistributionWeb/gateway/EN/news-and-announcements/news/enforcement-news/doc?refNo=24PR40"
        },
        {
          "label": "CoinDesk／Yahoo · 平台后续说明",
          "url": "https://sg.finance.yahoo.com/news/bitforex-open-withdrawals-following-chinese-155749360.html"
        }
      ],
      "btcDate": "2024-02-23",
      "verifiedAt": "2026-10-30"
    },
    {
      "id": "fixedfloat-2024",
      "date": "2024-02-17",
      "dateLabel": "2024-02-17",
      "name": "FixedFloat · 即时兑换服务钱包被盗",
      "region": "国际平台",
      "market": "全球／即时兑换",
      "type": "hack",
      "metric": "≈ $2,610 万",
      "scope": "平台确认的运营钱包损失；非全部客户托管余额",
      "rankUsd": 26100000.0,
      "paragraphs": [
        "FixedFloat 官方复盘称攻击发生于 2 月 16–17 日夜间，被盗约 2,610 万美元。",
        "该服务自称非托管的中心化即时兑换服务；本条针对其运营基础设施被盗，不把它归类为智能合约 DEX 或长期客户托管账户。"
      ],
      "sources": [
        {
          "label": "FixedFloat 官方恢复说明",
          "url": "https://ff.io/pl/blog/news/ff-is-back"
        }
      ],
      "btcDate": "2024-02-17",
      "verifiedAt": "2026-10-30"
    },
    {
      "id": "htx-2023-nov",
      "date": "2023-11-22",
      "dateLabel": "2023-11-22",
      "name": "HTX · 交易所热钱包与 HECO 关联攻击",
      "region": "国际平台",
      "market": "全球",
      "type": "hack",
      "metric": "≈ $2,620 万",
      "scope": "CertiK 明确识别的 HTX Ethereum／TRON 部分；排除桥及未确认 BTC",
      "rankUsd": 26200000.0,
      "paragraphs": [
        "CertiK 记录同日 HECO 跨链桥及 HTX 钱包遭攻击，其中明确识别 HTX 的 Ethereum 部分约 1,360 万美元、TRON 部分约 1,260 万美元。此处仅将两项相加，记录约 2,620 万美元。",
        "HECO 桥约 8,700 万美元及尚未证实的 BTC 流出不计入本条；不重复收录关联攻击总额。"
      ],
      "sources": [
        {
          "label": "CertiK · HECO／HTX 事件分析",
          "url": "https://www.certik.com/blog/heco-bridge-exploit"
        }
      ],
      "btcDate": "2023-11-22",
      "verifiedAt": "2026-10-30"
    },
    {
      "id": "poloniex-2023",
      "date": "2023-11-10",
      "dateLabel": "2023-11-10",
      "name": "Poloniex · 多链热钱包被盗",
      "region": "国际平台",
      "market": "全球／美国起源",
      "type": "hack",
      "metric": "≈ $1.32 亿",
      "scope": "CertiK 复盘的跨链统计；非早期媒体估值",
      "rankUsd": 132000000.0,
      "paragraphs": [
        "CertiK 复盘确认 Ethereum、Tron 和 BTC 钱包被攻击，合计估值约 1.32 亿美元。早期报道金额较低，本条固定使用该复盘口径。"
      ],
      "sources": [
        {
          "label": "CertiK · Poloniex 复盘",
          "url": "https://www.certik.com/blog/poloniex-incident-analysis"
        }
      ],
      "btcDate": "2023-11-10",
      "verifiedAt": "2026-10-30"
    },
    {
      "id": "htx-2023-sep",
      "date": "2023-09-24",
      "dateLabel": "2023-09-24",
      "name": "HTX · 5,000 ETH 热钱包被盗",
      "region": "国际平台",
      "market": "全球",
      "type": "hack",
      "metric": "≈ $800 万",
      "scope": "事发时 5,000 ETH 的估值；后续归还不从初始值扣除",
      "rankUsd": 8000000.0,
      "paragraphs": [
        "HTX 热钱包被转走约 5,000 ETH，事发时约 800 万美元。平台后续称被盗资金已归还。",
        "本条与 11 月攻击分开记录，历史盗币规模不代表当前尚未追回余额。"
      ],
      "sources": [
        {
          "label": "Blockworks · 平台披露及事件日期",
          "url": "https://blockworks.com/news/htx-huobi-justin-sun-hack"
        }
      ],
      "btcDate": "2023-09-24",
      "verifiedAt": "2026-10-30"
    },
    {
      "id": "jpex-2023",
      "date": "2023-09-17",
      "dateLabel": "2023-09-17",
      "name": "JPEX · 提款限制与涉嫌欺诈",
      "region": "东亚",
      "market": "中国香港",
      "type": "collapse",
      "metric": "涉案约 HK$16.16 亿",
      "scope": "香港警方截至 2025-02-28 接报涉案金额；非已判定净损失",
      "rankUsd": null,
      "paragraphs": [
        "JPEX 出现提现限制并卷入涉嫌欺诈调查，香港证监会此前已发出警告。警方公开文件记录 2,636 宗相关报案，涉款约 16.16 亿港元。",
        "本条保留原币种与统计截止日，不将报案金额当作已确认最终损失参与美元排序。"
      ],
      "sources": [
        {
          "label": "香港证监会声明",
          "url": "https://apps.sfc.hk/edistributionWeb/gateway/EN/news-and-announcements/news/doc?refNo=23PR104"
        },
        {
          "label": "香港警方立法会书面答复",
          "url": "https://www.police.gov.hk/info/doc/fcq/2026/sfc_e.pdf"
        }
      ],
      "btcDate": "2023-09-17",
      "verifiedAt": "2026-10-30"
    },
    {
      "id": "coinex-2023",
      "date": "2023-09-12",
      "dateLabel": "2023-09-12",
      "name": "CoinEx · 多链热钱包私钥事件",
      "region": "国际平台",
      "market": "全球",
      "type": "hack",
      "metric": "≈ $7,000 万",
      "scope": "平台 2023-09-15 更新的估计损失",
      "rankUsd": 70000000.0,
      "paragraphs": [
        "CoinEx 官方更新将 9 月 12 日热钱包攻击的估计损失列为约 7,000 万美元，并承诺承担受影响用户资产损失。",
        "使用后续更新金额，避免保留早期 3,100 万等未完整统计。"
      ],
      "sources": [
        {
          "label": "CoinEx 官方更新",
          "url": "https://coinex.medium.com/coinex-updates-on-recent-hot-wallets-hack-780a600dc846"
        }
      ],
      "btcDate": "2023-09-12",
      "verifiedAt": "2026-10-30"
    },
    {
      "id": "fpg-2023",
      "date": "2023-06-11",
      "dateLabel": "2023-06-11",
      "name": "Floating Point Group · 攻击后暂停交易",
      "region": "北美",
      "market": "美国／机构经纪",
      "type": "hack",
      "metric": "估计 $1,500–2,000 万",
      "scope": "初步损失区间；未选取上限参与排序",
      "rankUsd": null,
      "paragraphs": [
        "机构加密经纪平台 Floating Point Group 遭攻击后暂停交易、存款及提款，初步估计损失在 1,500 万至 2,000 万美元。",
        "按交易经纪平台关联风险收录，不把区间上限当成精确损失。"
      ],
      "sources": [
        {
          "label": "Beosin · 2023 年 6 月事件报告",
          "url": "https://www.beosin.com/resources/blockchain-security-monthly-recap-of-june-9518m-lost-in-a"
        },
        {
          "label": "Blockworks · 经营影响及区间估值",
          "url": "https://blockworks.com/news/floating-point-up-against-wall"
        }
      ],
      "btcDate": "2023-06-11",
      "verifiedAt": "2026-10-30"
    },
    {
      "id": "hotbit-2023",
      "date": "2023-05-22",
      "dateLabel": "2023-05-22",
      "name": "Hotbit · 停止中心化交易所业务",
      "region": "国际平台",
      "market": "全球",
      "type": "collapse",
      "metric": "损失总额未统一披露",
      "scope": "经营终止与提款安排；并非本次确认盗币",
      "rankUsd": null,
      "paragraphs": [
        "Hotbit 宣布终止中心化交易所业务，并设定用户提取剩余资产的期限，理由包括经营环境与资金流恶化。",
        "关停记录不等于平台所有余额全部损失，也不与该平台历史安全事件合并。"
      ],
      "sources": [
        {
          "label": "Bloomberg · 关停公告报道",
          "url": "https://news.bloomberglaw.com/crypto/crypto-exchange-hotbit-halts-operations-cites-falling-cash-flow"
        }
      ],
      "btcDate": "2023-05-22",
      "verifiedAt": "2026-10-30"
    },
    {
      "id": "bittrex-2023",
      "date": "2023-05-08",
      "dateLabel": "2023-05-08",
      "name": "Bittrex 美国业务 · 退出市场与 Chapter 11",
      "region": "北美",
      "market": "美国",
      "type": "collapse",
      "metric": "不作为资产损失金额排序",
      "scope": "美国主体破产处置；不等于黑客盗币或所有客户资产损失",
      "rankUsd": null,
      "paragraphs": [
        "Bittrex 美国相关主体申请 Chapter 11。法院后续文件说明，符合条件的客户债权安排包括按币种提取账户对应资产。",
        "破产申请本身不能写成客户资金全部丢失；与全球其他主体的业务状态也应区分。"
      ],
      "sources": [
        {
          "label": "Bittrex 官方声明／Business Wire",
          "url": "https://www.barchart.com/story/news/16699841/bittrex-inc-statement-on-chapter-11-bankruptcy"
        },
        {
          "label": "美国破产法院文件",
          "url": "https://www.deb.uscourts.gov/sites/deb/files/opinions/Bittrex%20Ghader%20Opinion.pdf"
        }
      ],
      "btcDate": "2023-05-08",
      "verifiedAt": "2026-10-30"
    },
    {
      "id": "bitrue-2023",
      "date": "2023-04-14",
      "dateLabel": "2023-04-14",
      "name": "Bitrue · 热钱包被攻击",
      "region": "国际平台",
      "market": "全球",
      "type": "hack",
      "metric": "≈ $2,300 万",
      "scope": "平台披露的热钱包损失",
      "rankUsd": 23000000.0,
      "paragraphs": [
        "Bitrue 披露 07:18 UTC 一处热钱包被攻击，约 2,300 万美元 ETH 及代币被转走。平台表示受影响用户将得到全额补偿。"
      ],
      "sources": [
        {
          "label": "The Block · 引用平台披露",
          "url": "https://www.theblock.co/news/regulation/2023-04-14-bittrue-exploited-226401"
        }
      ],
      "btcDate": "2023-04-14",
      "verifiedAt": "2026-10-30"
    },
    {
      "id": "gdac-2023",
      "date": "2023-04-09",
      "dateLabel": "2023-04-09",
      "name": "GDAC · 热钱包被盗",
      "region": "东亚",
      "market": "韩国",
      "type": "hack",
      "metric": "≈ $1,300 万",
      "scope": "平台披露约占托管资产 23% 的事发时估值",
      "rankUsd": 13000000.0,
      "paragraphs": [
        "GDAC 披露 BTC、ETH、WEMIX 及 USDT 被转走，合计约 1,300 万美元，约占当时托管资产的 23%，并向有关部门报案。"
      ],
      "sources": [
        {
          "label": "CoinDesk · 引用 GDAC 公告",
          "url": "https://www.coindesk.com/tech/2023/04/10/s-korean-crypto-exchange-gdac-hacked-for-nearly-13m"
        }
      ],
      "btcDate": "2023-04-09",
      "verifiedAt": "2026-10-30"
    },
    {
      "id": "gemini-earn-2022",
      "date": "2022-11-16",
      "dateLabel": "2022-11-16",
      "name": "Gemini Earn／Genesis · 收益产品暂停赎回",
      "region": "北美",
      "market": "美国",
      "type": "freeze",
      "metric": "初始涉款约 $9 亿",
      "scope": "Gemini Earn 用户债权；不含 Gemini 现货钱包",
      "rankUsd": 900000000.0,
      "paragraphs": [
        "Genesis 暂停赎回后，Gemini Earn 用户资金受到影响。该事件涉及平台的借贷收益产品，不能写成 Gemini 现货交易所被黑。",
        "Gemini 后续公告称将以原资产形式归还 Earn 用户资产，2024 年 5 月首批归还约 97%。后期币价上涨后的返还美元价值不能当作初始冻结金额。"
      ],
      "sources": [
        {
          "label": "SEC · Gemini／Genesis Earn 起诉公告",
          "url": "https://www.sec.gov/newsroom/press-releases/2023-7"
        },
        {
          "label": "Gemini · 2024-05-29 返还公告",
          "url": "https://www.gemini.com/blog/gemini-earn-users-receive-usd2-18-billion-of-their-digital-assets-in-kind-a"
        }
      ],
      "btcDate": "2022-11-16",
      "verifiedAt": "2026-10-30"
    },
    {
      "id": "aax-2022",
      "date": "2022-11-13",
      "dateLabel": "2022-11-13",
      "name": "AAX · 长期停提与后续清盘",
      "region": "东亚",
      "market": "中国香港",
      "type": "collapse",
      "metric": "客户净损失总额未统一确认",
      "scope": "停提、清盘及涉嫌挪用调查；不使用交易量冒充损失",
      "rankUsd": null,
      "paragraphs": [
        "AAX 于 11 月 13 日暂停提款，最初称系统升级异常；后续进入清盘调查。法庭材料将 11 月 13 日列为停止客户提款的日期。",
        "不把平台历史交易量、钱包余额和不同阶段涉案金额混为最终客户净损失。"
      ],
      "sources": [
        {
          "label": "Bloomberg · 原始停提报道",
          "url": "https://news.bloomberglaw.com/crypto/crypto-exchange-aax-says-halting-withdrawals-for-at-least-a-week"
        },
        {
          "label": "法院清盘调查材料",
          "url": "https://files.lbr.cloud/public/2023-07/Atom%20Group%20provisional%20relief%20motion.pdf?VersionId=Ti1twzYrmZlhsKV9tIcBE.whHOKZ9Bjb"
        }
      ],
      "btcDate": "2022-11-13",
      "verifiedAt": "2026-10-30"
    },
    {
      "id": "ftx-hack-2022",
      "date": "2022-11-11",
      "dateLabel": "2022-11-11",
      "name": "FTX · 破产期间未经授权转账",
      "region": "北美",
      "market": "巴哈马／美国",
      "type": "hack",
      "metric": "≈ $4.77 亿",
      "scope": "Elliptic 区分内部转移后的可疑盗币估计",
      "rankUsd": 477000000.0,
      "paragraphs": [
        "FTX 申请破产前后发生异常转账，Elliptic 将其中约 4.77 亿美元识别为疑似盗币，而非把所有链上流出都计为被盗。",
        "本条与 FTX 客户资金挪用及破产相关联；相关资产范围可能重叠，两条金额不得相加。"
      ],
      "sources": [
        {
          "label": "Elliptic · FTX 资金追踪",
          "url": "https://www.elliptic.co/insights/the-477-million-ftx-hack-following-the-blockchain-trail/"
        }
      ],
      "btcDate": "2022-11-11",
      "verifiedAt": "2026-10-30"
    },
    {
      "id": "ftx-2022",
      "date": "2022-11-08",
      "dateLabel": "2022-11-08 停提 / 11-11 破产",
      "name": "FTX · 客户资金挪用、停提与破产",
      "region": "北美",
      "market": "巴哈马／美国",
      "type": "collapse",
      "metric": "> $80 亿",
      "scope": "美国司法部确认的被挪用客户资金规模；非最终未赔余额",
      "rankUsd": 8000000000.0,
      "paragraphs": [
        "FTX 于 11 月 8 日暂停客户提款，11 月 11 日申请破产。美国司法部在 SBF 判决公告中明确，被挪用的客户资金超过 80 亿美元。",
        "这不是普通市场爆仓。榜中原有 FTX 事件的 15 亿美元属于全市场清算口径，本次合并为 FTX 客户资金事件并保留区别说明；不与破产期间盗币金额相加。"
      ],
      "sources": [
        {
          "label": "美国司法部 · SBF 判决与客户资金规模",
          "url": "https://www.justice.gov/usao-sdny/pr/samuel-bankman-fried-sentenced-25-years-prison"
        },
        {
          "label": "SEC · FTX 时间线与停提",
          "url": "https://www.sec.gov/files/litigation/complaints/2022/comp-pr2022-219.pdf"
        }
      ],
      "btcDate": "2022-11-08",
      "verifiedAt": "2026-10-30"
    },
    {
      "id": "voyager-2022",
      "date": "2022-07-01",
      "dateLabel": "2022-07-01",
      "name": "Voyager Digital · 停止交易、提款及破产",
      "region": "北美",
      "market": "美国",
      "type": "collapse",
      "metric": "客户净损失未统一披露",
      "scope": "交易经纪／借贷平台；破产债务不等于客户最终损失",
      "rankUsd": null,
      "paragraphs": [
        "Voyager 于 7 月 1 日暂停交易、存款和提款，随后启动 Chapter 11 破产程序。该平台兼具交易经纪与借贷业务。",
        "不将法院申报的负债上限或关联机构违约金额直接当成用户最终损失。"
      ],
      "sources": [
        {
          "label": "美国佛蒙特州金融监管部门公告",
          "url": "https://dfr.vermont.gov/consumer-alert/voyager-digital-files-chapter-11-bankruptcy"
        }
      ],
      "btcDate": "2022-07-01",
      "verifiedAt": "2026-10-30"
    },
    {
      "id": "cryptocom-2022",
      "date": "2022-01-17",
      "dateLabel": "2022-01-17",
      "name": "Crypto.com · 绕过二步验证的未经授权提现",
      "region": "国际平台",
      "market": "全球／新加坡",
      "type": "hack",
      "metric": "≈ $3,400 万",
      "scope": "4,836.26 ETH、443.93 BTC 及其他资产的当时估值",
      "rankUsd": 34000000.0,
      "paragraphs": [
        "Crypto.com 确认 483 名用户账户受影响，出现未完成用户二步验证的提款。披露资产包括 4,836.26 ETH、443.93 BTC 和其他代币。"
      ],
      "sources": [
        {
          "label": "The Record · 引用平台事件报告",
          "url": "https://therecord.media/crypto-com-finally-confirms-major-hack-says-it-lost-34-million"
        }
      ],
      "btcDate": "2022-01-17",
      "verifiedAt": "2026-10-30"
    },
    {
      "id": "ascendex-2021",
      "date": "2021-12-11",
      "dateLabel": "2021-12-11",
      "name": "AscendEX · 多链热钱包被盗",
      "region": "国际平台",
      "market": "全球",
      "type": "hack",
      "metric": "≈ $7,770 万",
      "scope": "安全研究机构的多链估值",
      "rankUsd": 77700000.0,
      "paragraphs": [
        "AscendEX 确认热钱包出现未经授权转账，涉及 Ethereum、BSC 和 Polygon；研究者估计约 7,770 万美元。平台声明将承担受影响用户损失。"
      ],
      "sources": [
        {
          "label": "AscendEX 官方管理层答疑",
          "url": "https://ascendex.com/en/support/articles/62137-ascendex-twitter-spaces-ama-with-george-cao-ceo-and-shane-molidor"
        },
        {
          "label": "The Block · 金额估计",
          "url": "https://www.theblock.co/news/regulation/2021-12-12-crypto-exchange-ascendex-hacked-for-78-million-in-latest-swindle-127231"
        }
      ],
      "btcDate": "2021-12-11",
      "verifiedAt": "2026-10-30"
    },
    {
      "id": "bitmart-2021",
      "date": "2021-12-04",
      "dateLabel": "2021-12-04",
      "name": "BitMart · ETH 与 BSC 热钱包私钥泄露",
      "region": "国际平台",
      "market": "全球／开曼群岛",
      "type": "hack",
      "metric": "≈ $1.5 亿",
      "scope": "平台初步确认口径；外部追踪给出更高估值",
      "rankUsd": 150000000.0,
      "paragraphs": [
        "BitMart 初步确认两处热钱包被入侵，估计约 1.5 亿美元；外部追踪机构给出的估值更高。",
        "本条固定采用平台确认的初步口径，并注明差异，不把各机构估值累加。平台后续承诺覆盖受影响资产。"
      ],
      "sources": [
        {
          "label": "BitMart 官方后续说明",
          "url": "https://bitmart-exchange.medium.com/bitmart-bolster-security-and-restore-promptly-after-the-challenge-4e605f6d852d"
        },
        {
          "label": "CertiK · 平台初始金额及私钥事件",
          "url": "https://www.certik.com/blog/bitmart-hot-wallet-compromise"
        }
      ],
      "btcDate": "2021-12-04",
      "verifiedAt": "2026-10-30"
    },
    {
      "id": "bilaxy-2021",
      "date": "2021-08-28",
      "dateLabel": "2021-08-28",
      "name": "Bilaxy · ERC-20 热钱包被盗",
      "region": "国际平台",
      "market": "全球／塞舌尔",
      "type": "hack",
      "metric": "≈ $2,171 万",
      "scope": "慢雾事件库的估值；其他来源估值不同",
      "rankUsd": 21709378.0,
      "paragraphs": [
        "Bilaxy 的 ERC-20 热钱包被攻击，平台暂停服务。慢雾事件库列出的损失约 2,171 万美元。",
        "原始媒体曾出现明显不同的金额估计，本条使用注明来源的事件库统计，不叠加各版本。"
      ],
      "sources": [
        {
          "label": "慢雾 Exchange 事件库",
          "url": "https://hacked.slowmist.io/?c=Exchange&page=5"
        },
        {
          "label": "Distributed Networks Institute · 事件时间线",
          "url": "https://dn.institute/research/cyberattacks/incidents/2021-08-28-bilaxy/"
        }
      ],
      "btcDate": "2021-08-28",
      "verifiedAt": "2026-10-30"
    },
    {
      "id": "liquid-2021",
      "date": "2021-08-19",
      "dateLabel": "2021-08-19",
      "name": "Liquid · 钱包私钥被攻击",
      "region": "东亚",
      "market": "日本",
      "type": "hack",
      "metric": "≈ $9,700 万",
      "scope": "Elliptic 按平台标记的攻击者地址统计",
      "rankUsd": 97000000.0,
      "paragraphs": [
        "Liquid 钱包被攻击后公布相关攻击者地址。Elliptic 分析估计流入这些地址的加密资产超过 9,700 万美元。"
      ],
      "sources": [
        {
          "label": "Elliptic · Liquid 钱包追踪",
          "url": "https://www.elliptic.co/insights/liquid-exchange-hacked-94-million-stolen/"
        }
      ],
      "btcDate": "2021-08-19",
      "verifiedAt": "2026-10-30"
    },
    {
      "id": "thodex-2021",
      "date": "2021-04-21",
      "dateLabel": "2021-04-21",
      "name": "Thodex · 停止交易与欺诈案",
      "region": "欧洲",
      "market": "土耳其",
      "type": "collapse",
      "metric": "损失金额存在不同口径",
      "scope": "不使用广传的 20 亿美元数字作为已确认客户净损失",
      "rankUsd": null,
      "paragraphs": [
        "Thodex 停止交易后引发大规模欺诈调查，创始人离境，后被引渡回土耳其并受到判决。",
        "不同报道对涉案资产与已证明损失的估算差异较大，暂不以流传的 20 亿美元参与金额排序。"
      ],
      "sources": [
        {
          "label": "Reuters／Yahoo · 2021 年调查",
          "url": "https://finance.yahoo.com/news/turkey-jails-6-crypto-probe-093232433.html"
        },
        {
          "label": "CoinDesk · 案件判决报道",
          "url": "https://www.coindesk.com/policy/2023/09/08/11196-years-in-prison-for-faruk-ozer-ceo-of-collapsed-turkish-crypto-exchange-thodex"
        }
      ],
      "btcDate": "2021-04-21",
      "verifiedAt": "2026-10-30"
    },
    {
      "id": "exmo-2020",
      "date": "2020-12-21",
      "dateLabel": "2020-12-21",
      "name": "EXMO · 热钱包被盗",
      "region": "欧洲",
      "market": "英国及欧洲市场",
      "type": "hack",
      "metric": "≈ $1,050 万",
      "scope": "媒体跟踪的当时资产估值",
      "rankUsd": 10500000.0,
      "paragraphs": [
        "EXMO 披露部分热钱包出现未经授权转账，涉及 BTC、ETH 等资产。报道估计损失约 1,050 万美元。"
      ],
      "sources": [
        {
          "label": "The Block · 平台披露及链上估计",
          "url": "https://www.theblock.co/news/markets/2020-12-21-crypto-exchange-exmo-hacked-88692"
        }
      ],
      "btcDate": "2020-12-21",
      "verifiedAt": "2026-10-30"
    },
    {
      "id": "okex-2020",
      "date": "2020-10-16",
      "dateLabel": "2020-10-16",
      "name": "OKEx（现 OKX）· 私钥负责人失联后停提",
      "region": "国际平台",
      "market": "全球",
      "type": "freeze",
      "metric": "未披露盗币损失",
      "scope": "私钥操作与服务可用性风险；不记为资产被盗",
      "rankUsd": null,
      "paragraphs": [
        "OKEx 于 10 月 16 日暂停数字资产提款，称一名私钥持有人配合调查、暂时无法联系，导致授权流程无法完成。",
        "暂停持续数周，本条按停提风险收录，不把受托管的全部资产当成损失。"
      ],
      "sources": [
        {
          "label": "OKX 官方停提进度更新",
          "url": "https://www.okx.com/en-gb/help/update-on-the-suspension-of-withdrawals"
        }
      ],
      "btcDate": "2020-10-16",
      "verifiedAt": "2026-10-30"
    },
    {
      "id": "kucoin-2020",
      "date": "2020-09-25",
      "dateLabel": "2020-09-25 UTC / 09-26 UTC+8",
      "name": "KuCoin · 热钱包私钥泄露",
      "region": "国际平台",
      "market": "全球",
      "type": "hack",
      "metric": "≈ $2.85 亿",
      "scope": "平台按事发当日市价核算的受影响资产",
      "rankUsd": 285000000.0,
      "paragraphs": [
        "KuCoin 后续官方信披露共 154 种代币受影响，按事发当日市价约 2.85 亿美元；其公告使用 UTC+8 的 9 月 26 日，换算 UTC 为 9 月 25 日。",
        "平台称约 84% 资产通过各方协作追回，余下部分由公司及保险基金承担。榜中保留初始受影响资产，不表示当前未追回余额。"
      ],
      "sources": [
        {
          "label": "KuCoin 官方年度事件回顾",
          "url": "https://www.kucoin.com/announcement/a-letter-from-kucoin-ceo-2020-2021-and-beyond"
        },
        {
          "label": "KuCoin 最初事件公告",
          "url": "https://www.kucoin.com/blog/kucoin-security-incident-update"
        }
      ],
      "btcDate": "2020-09-25",
      "verifiedAt": "2026-10-30"
    },
    {
      "id": "fcoin-2020",
      "date": "2020-02-17",
      "dateLabel": "2020-02-17",
      "name": "FCoin · 停提与无法兑付",
      "region": "国际平台",
      "market": "全球／中国起源",
      "type": "collapse",
      "metric": "缺口 7,000–13,000 BTC",
      "scope": "平台披露的缺口范围；不以区间上限冒充确定美元损失",
      "rankUsd": null,
      "paragraphs": [
        "FCoin 创始人公开说明平台无法兑付的规模约为 7,000 至 13,000 BTC，当时报道约 6,700 万至 1.25 亿美元。",
        "保留原币种与区间，避免选用最高估算制造一个精确的美元损失排名。"
      ],
      "sources": [
        {
          "label": "The Block · 平台缺口披露",
          "url": "https://www.theblock.co/news/markets/2020-02-17-cryptocurrency-exchange-fcoin-expects-to-default-on-as-much-as-125m-of-users-bitcoin-56191"
        }
      ],
      "btcDate": "2020-02-17",
      "verifiedAt": "2026-10-30"
    },
    {
      "id": "upbit-2019",
      "date": "2019-11-27",
      "dateLabel": "2019-11-27",
      "name": "Upbit · ETH 热钱包被盗",
      "region": "东亚",
      "market": "韩国",
      "type": "hack",
      "metric": "≈ $4,850 万",
      "scope": "约 34.2 万 ETH 的事发时估值",
      "rankUsd": 48500000.0,
      "paragraphs": [
        "Upbit 的 ETH 热钱包遭未经授权转账，约 34.2 万 ETH 被转走，事发时约 4,850 万美元。",
        "与 2025 年 Solana 系资产事件分别记录。"
      ],
      "sources": [
        {
          "label": "CSIDB · Upbit 2019 年事件记录",
          "url": "https://www.csidb.net/csidb/incidents/869cc523-2b04-4b33-ae13-6479da018cf8/"
        }
      ],
      "btcDate": "2019-11-27",
      "verifiedAt": "2026-10-30"
    },
    {
      "id": "einstein-2019",
      "date": "2019-11-01",
      "dateLabel": "2019-11-01",
      "name": "Einstein Exchange · 接管与客户债权",
      "region": "北美",
      "market": "加拿大",
      "type": "collapse",
      "metric": "客户债权估计 US$800–1,000 万",
      "scope": "接管人转述管理层估计；并非已结算净损失",
      "rankUsd": null,
      "paragraphs": [
        "加拿大不列颠哥伦比亚证券委员会申请法院接管 Einstein Exchange。接管人后续报告转述管理层称欠客户约 800 万至 1,000 万美元。",
        "此数字是债权估计区间，资产追回与用户最终损失不能由此直接推定。"
      ],
      "sources": [
        {
          "label": "BCSC · 接管结论公告",
          "url": "https://www.bcsc.bc.ca/about/media-room/news-releases/2019/73-courtappointed-receiver-of-einstein-exchange-concludes-its-duties"
        }
      ],
      "btcDate": "2019-11-01",
      "verifiedAt": "2026-10-30"
    },
    {
      "id": "bitpoint-2019",
      "date": "2019-07-12",
      "dateLabel": "2019-07-12",
      "name": "BITPoint · 多币种热钱包被盗",
      "region": "东亚",
      "market": "日本",
      "type": "hack",
      "metric": "≈ $2,800 万",
      "scope": "平台后续公布的盗币规模；含客户及公司资金",
      "rankUsd": 28000000.0,
      "paragraphs": [
        "BITPoint 热钱包被攻击后修订损失统计约为 2,800 万美元，平台说明其中含客户及公司资产，并公布按币补偿安排。"
      ],
      "sources": [
        {
          "label": "CoinDesk · 平台修订及补偿报道",
          "url": "https://www.coindesk.com/markets/2019/07/17/hacked-bitpoint-exchange-to-refund-50000-affected-users-in-crypto"
        }
      ],
      "btcDate": "2019-07-12",
      "verifiedAt": "2026-10-30"
    },
    {
      "id": "binance-2019",
      "date": "2019-05-07",
      "dateLabel": "2019-05-07",
      "name": "Binance · 7,000 BTC 热钱包被盗",
      "region": "国际平台",
      "market": "全球",
      "type": "hack",
      "metric": "≈ $4,000 万",
      "scope": "事发时 7,000 BTC 估值",
      "rankUsd": 40000000.0,
      "paragraphs": [
        "币安确认 7,000 BTC 在一笔交易中从热钱包被转走，事发时约 4,000 万美元，并宣布由 SAFU 基金承担。",
        "这与 2026 年事件是不同攻击，不以今日 BTC 价格回算历史损失。"
      ],
      "sources": [
        {
          "label": "Binance 官方事件公告",
          "url": "https://www.binance.com/en-AU/support/announcement/detail/360028031711"
        },
        {
          "label": "Chainalysis · 事发时估值",
          "url": "https://www.chainalysis.com/blog/all-eyes-on-binance-stolen-funds/"
        }
      ],
      "btcDate": "2019-05-07",
      "verifiedAt": "2026-10-30"
    },
    {
      "id": "bitfinex-2019",
      "date": "2019-04-25",
      "dateLabel": "2019-04-25",
      "name": "Bitfinex／Crypto Capital · 资产缺口披露",
      "region": "国际平台",
      "market": "全球／纽约监管调查",
      "type": "freeze",
      "metric": "≈ $8.5 亿",
      "scope": "纽约检方披露失去访问的客户及公司混合资产",
      "rankUsd": 850000000.0,
      "paragraphs": [
        "纽约州检方披露 Bitfinex 在支付处理商 Crypto Capital 的约 8.5 亿美元客户及公司混合资金失去访问，并指控其掩盖缺口。",
        "这不是热钱包盗币，不等于全部客户最终损失；与 2016 年 Bitfinex 黑客事件分开记录。"
      ],
      "sources": [
        {
          "label": "纽约州检方原始披露",
          "url": "https://bn.ag.ny.gov/press-release/2019/attorney-general-james-announces-court-order-against-crypto-currency-company"
        },
        {
          "label": "纽约州检方和解文件",
          "url": "https://ag.ny.gov/sites/default/files/2021.02.17_-_settlement_agreement_-_execution_version.b-t_signed-c2_oag_signed.pdf"
        }
      ],
      "btcDate": "2019-04-25",
      "verifiedAt": "2026-10-30"
    },
    {
      "id": "bithumb-2019",
      "date": "2019-03-29",
      "dateLabel": "2019-03-29",
      "name": "Bithumb · EOS 与 XRP 资产被盗",
      "region": "东亚",
      "market": "韩国",
      "type": "hack",
      "metric": "≈ $1,900 万",
      "scope": "当时报道的 EOS／XRP 资产估值",
      "rankUsd": 19000000.0,
      "paragraphs": [
        "Bithumb 再次遭资产异常转出，涉及 EOS 与 XRP，报道估计约 1,900 万美元。平台称为公司资产并怀疑内部人员参与；该说法与司法确认需区分。"
      ],
      "sources": [
        {
          "label": "The Block · 2019 年事件",
          "url": "https://www.theblock.co/news/markets/2019-03-30-bithumb-hacked-for-20-million-funds-already-sent-to-exchanges-17815"
        }
      ],
      "btcDate": "2019-03-29",
      "verifiedAt": "2026-10-30"
    },
    {
      "id": "coinbin-2019",
      "date": "2019-02-20",
      "dateLabel": "2019-02-20",
      "name": "Coinbin · 资产缺口后申请破产",
      "region": "东亚",
      "market": "韩国",
      "type": "collapse",
      "metric": "≈ $2,600 万",
      "scope": "平台报告的整体损失规模；非单笔已证实盗币",
      "rankUsd": 26000000.0,
      "paragraphs": [
        "Coinbin 宣布准备破产，报告约 293 亿韩元、即 2,600 万美元损失，并声称存在员工挪用。",
        "其曾接手 Youbit，但此处记录 2019 年的新破产事件，不把平台名称变化当作同一笔攻击重复计数。"
      ],
      "sources": [
        {
          "label": "韩联社系 Newsis · 2019-02-20",
          "url": "https://www.newsis.com/view/NISX20190220_0000564849"
        },
        {
          "label": "The Block · 美元估值",
          "url": "https://www.theblock.co/news/regulation/2019-02-24-south-korea-crypto-exchange-files-for-bankruptcy-after-employee-embezzlement-26m-in-losses-13297"
        }
      ],
      "btcDate": "2019-02-20",
      "verifiedAt": "2026-10-30"
    },
    {
      "id": "quadriga-2019",
      "date": "2019-01-31",
      "dateLabel": "2019-01-31",
      "name": "QuadrigaCX · 资产缺口与欺诈",
      "region": "北美",
      "market": "加拿大",
      "type": "collapse",
      "metric": "C$1.69 亿缺口",
      "scope": "安大略证券委员会核算的加元资产缺口",
      "rankUsd": null,
      "paragraphs": [
        "QuadrigaCX 停止运营并进入债权人保护及破产程序。安大略证券委员会调查确认约 1.69 亿加元资产缺口，多数与创始人的欺诈交易有关。",
        "不把事件简单描述为创始人死亡导致私钥遗失，也不将加元直接当成美元排序。"
      ],
      "sources": [
        {
          "label": "安大略证券委员会调查报告",
          "url": "https://www.osc.gov.on.ca/quadrigacxreport/how-we-conducted-our-review.html"
        }
      ],
      "btcDate": "2019-01-31",
      "verifiedAt": "2026-10-30"
    },
    {
      "id": "cryptopia-2019",
      "date": "2019-01-14",
      "dateLabel": "2019-01-14",
      "name": "Cryptopia · 黑客攻击后清算",
      "region": "大洋洲",
      "market": "新西兰",
      "type": "hack",
      "metric": "≈ NZ$3,000 万",
      "scope": "法院材料采用的新西兰元事发时估值",
      "rankUsd": null,
      "paragraphs": [
        "新西兰警方确认 1 月 13–14 日出现未经授权转账。后续法院文件记录约 3,000 万新西兰元资产被盗，平台于同年 5 月进入清算。",
        "保留原币种，避免与后期清算分配时的币价或美元金额混淆。"
      ],
      "sources": [
        {
          "label": "新西兰警方事件公告",
          "url": "https://www.police.govt.nz/news/release/police-making-progress-crypto-currency-investigation"
        },
        {
          "label": "法院判决／清算人公开材料",
          "url": "https://www.grantthornton.co.nz/globalassets/1.-member-firms/new-zealand/pdfs/cryptopia/civ-2019-409-000544---ruscoe-and-moore-v-cryptopia-limited-in-liquidation.pdf"
        }
      ],
      "btcDate": "2019-01-14",
      "verifiedAt": "2026-10-30"
    },
    {
      "id": "zaif-2018",
      "date": "2018-09-14",
      "dateLabel": "2018-09-14",
      "name": "Zaif · 热钱包被盗",
      "region": "东亚",
      "market": "日本",
      "type": "hack",
      "metric": "≈ $6,200 万",
      "scope": "运营商在后续更新中估计的盗币价值",
      "rankUsd": 62000000.0,
      "paragraphs": [
        "Zaif 运营商披露 9 月中旬发生安全事件，后续将被盗资产估值修订约为 6,200 万美元。",
        "采用运营商后续估计，不将最初的约 6,000 万美元作为另一笔事故。"
      ],
      "sources": [
        {
          "label": "Reuters · 运营商修订金额",
          "url": "https://www.business-standard.com/article/reuters/japan-s-hacked-crypto-exchange-says-62-million-worth-of-coins-stolen-118092100742_1.html"
        }
      ],
      "btcDate": "2018-09-14",
      "verifiedAt": "2026-10-30"
    },
    {
      "id": "bithumb-2018",
      "date": "2018-06-20",
      "dateLabel": "2018-06-20",
      "name": "Bithumb · 热钱包被攻击",
      "region": "东亚",
      "market": "韩国",
      "type": "hack",
      "metric": "≈ $3,150 万",
      "scope": "平台当时初步披露的 350 亿韩元估值",
      "rankUsd": 31500000.0,
      "paragraphs": [
        "Bithumb 披露在 6 月 19 日夜间至 20 日凌晨遭攻击，初步估计约 350 亿韩元、即 3,150 万美元资产被盗。",
        "该数字为初始盗币规模，后续冻结、追回或补偿不代表最初没有发生损失事件。"
      ],
      "sources": [
        {
          "label": "韩联社 · 平台初步披露",
          "url": "https://en.yna.co.kr/view/AEN20180620003500320"
        }
      ],
      "btcDate": "2018-06-20",
      "verifiedAt": "2026-10-30"
    },
    {
      "id": "coinrail-2018",
      "date": "2018-06-10",
      "dateLabel": "2018-06-10",
      "name": "Coinrail · 多种代币被盗",
      "region": "东亚",
      "market": "韩国",
      "type": "hack",
      "metric": "≈ $4,000 万",
      "scope": "研究材料采用的事发时估值",
      "rankUsd": 40000000.0,
      "paragraphs": [
        "Coinrail 遭多种代币盗取，CFTC 技术咨询委员会公开网络安全材料列出约 4,000 万美元规模。"
      ],
      "sources": [
        {
          "label": "CFTC 公开网络安全材料",
          "url": "https://www.cftc.gov/sites/default/files/2018-11/tac100518_Cybersecurity.pdf"
        }
      ],
      "btcDate": "2018-06-10",
      "verifiedAt": "2026-10-30"
    },
    {
      "id": "bitgrail-2018",
      "date": "2018-02-09",
      "dateLabel": "2018-02-09",
      "name": "BitGrail · NANO 资产缺口",
      "region": "欧洲",
      "market": "意大利",
      "type": "collapse",
      "metric": "≈ $1.7 亿",
      "scope": "披露时约 1,700 万 NANO 的估值",
      "rankUsd": 170000000.0,
      "paragraphs": [
        "BitGrail 披露约 1,700 万 NANO 缺口，当时估值约 1.7 亿美元。"
      ],
      "sources": [
        {
          "label": "TechCrunch · 缺口披露报道",
          "url": "https://techcrunch.com/2018/02/12/bitgrail-hack-nano/"
        }
      ],
      "btcDate": "2018-02-09",
      "verifiedAt": "2026-10-30"
    },
    {
      "id": "coincheck-2018",
      "date": "2018-01-26",
      "dateLabel": "2018-01-26",
      "name": "Coincheck · NEM 热钱包被盗",
      "region": "东亚",
      "market": "日本",
      "type": "hack",
      "metric": "≈ $5.3 亿",
      "scope": "事发时媒体估值；不等于后续日元赔付总额",
      "rankUsd": 530000000.0,
      "paragraphs": [
        "Coincheck 披露约 5.23 亿 XEM 被转走，事发时媒体估值约 5.3 亿美元。平台另行公布日元补偿价格与方案。",
        "赔付采用的日元金额与攻击时美元估值属于不同口径，不互相替代。"
      ],
      "sources": [
        {
          "label": "Coincheck 官方补偿公告",
          "url": "https://corporate.coincheck.com/press/dG-nDV-c"
        },
        {
          "label": "CoinDesk／Yahoo · 事件规模与赔付区别",
          "url": "https://finance.yahoo.com/news/japanese-exchange-coincheck-begins-jpy-122316666.html"
        }
      ],
      "btcDate": "2018-01-26",
      "verifiedAt": "2026-10-30"
    },
    {
      "id": "youbit-2017",
      "date": "2017-12-19",
      "dateLabel": "2017-12-19",
      "name": "Youbit · 二次攻击后申请破产",
      "region": "东亚",
      "market": "韩国",
      "type": "collapse",
      "metric": "损失约占总资产 17%",
      "scope": "平台披露比例；未统一换算为美元",
      "rankUsd": null,
      "paragraphs": [
        "Youbit 在同年第二次黑客攻击后宣布关停及申请破产，平台称约 17% 资产受损。",
        "该比例不是客户最终回收率，不能与其他事件的美元金额直接排序。"
      ],
      "sources": [
        {
          "label": "Reuters · 关停与破产报道",
          "url": "https://www.investing.com/news/cryptocurrency-news/south-korean-cryptocurrency-exchange-to-file-for-bankruptcy-after-hacking-1007490"
        }
      ],
      "btcDate": "2017-12-19",
      "verifiedAt": "2026-10-30"
    },
    {
      "id": "bitfinex-2016",
      "date": "2016-08-02",
      "dateLabel": "2016-08-02",
      "name": "Bitfinex · 约 12 万 BTC 被盗",
      "region": "国际平台",
      "market": "全球／香港起源",
      "type": "hack",
      "metric": "≈ $7,200 万",
      "scope": "被盗 BTC 的事发时估值；不是后期查扣时估值",
      "rankUsd": 72000000.0,
      "paragraphs": [
        "Bitfinex 确认安全入侵并暂停交易及充提。美国司法部后续案件说明确认约 12 万 BTC 被盗。",
        "当时估值约 7,200 万美元，不使用多年后 BTC 升值产生的数十亿美元查扣金额回填历史排名。"
      ],
      "sources": [
        {
          "label": "Bitfinex 原始安全公告",
          "url": "https://blog.bitfinex.com/announcements/security-breach/"
        },
        {
          "label": "美国司法部案件说明",
          "url": "https://www.justice.gov/usao-dc/2016-bitfinex-hack"
        },
        {
          "label": "TIME · 事发时 7,200 万美元估值",
          "url": "https://time.com/6146749/cryptocurrency-laundering-bitfinex-hack/"
        }
      ],
      "btcDate": "2016-08-02",
      "verifiedAt": "2026-10-30"
    },
    {
      "id": "cryptsy-2016",
      "date": "2016-01",
      "dateLabel": "2016-01",
      "name": "Cryptsy · 停业、接管及资金挪用案",
      "region": "北美",
      "market": "美国",
      "type": "collapse",
      "metric": "客户损失总额未统一确认",
      "scope": "司法案件涉及资产挪用、记录销毁等；非单纯外部黑客叙事",
      "rankUsd": null,
      "paragraphs": [
        "Cryptsy 在长期提款困难后停业并进入接管。美国司法部后续起诉其负责人，案件涉及挪用客户资金、洗钱和销毁记录等指控。",
        "月份级记录不指定单日 BTC 价格；不将创始人对历史黑客的说法直接等同于全部资金损失原因。"
      ],
      "sources": [
        {
          "label": "美国司法部 · Cryptsy 案件公告",
          "url": "https://www.justice.gov/usao-sdfl/pr/ceo-major-online-cryptocurrency-exchange-company-indicted-defrauding-company-s"
        }
      ],
      "btcDate": null,
      "verifiedAt": "2026-10-30"
    },
    {
      "id": "bitstamp-2015",
      "date": "2015-01-04",
      "dateLabel": "2015-01-04",
      "name": "Bitstamp · 热钱包被盗并暂停服务",
      "region": "欧洲",
      "market": "斯洛文尼亚／欧洲",
      "type": "hack",
      "metric": "≈ $500 万",
      "scope": "约 19,000 BTC 的事发时估值",
      "rankUsd": 5000000.0,
      "paragraphs": [
        "Bitstamp 热钱包约 19,000 BTC 被盗并暂停服务。平台随后恢复交易并说明账户资金保护安排。",
        "该事件早于 Coinbase BTC/USD 当前使用的连续历史行情，BTC 栏注明缺失而不拼接其他来源。"
      ],
      "sources": [
        {
          "label": "Bitstamp 官方重启 FAQ",
          "url": "https://blog.bitstamp.net/post/relaunch-faq/"
        },
        {
          "label": "西班牙国家网络安全部门事件通报",
          "url": "https://www.ccn-cert.cni.es/es/comunicacion-eventos/comunicados-ccn-cert/1182-roban-cinco-millones-de-dolares-en-bitcoins.html"
        }
      ],
      "btcDate": "2015-01-04",
      "verifiedAt": "2026-10-30"
    },
    {
      "id": "mtgox-2014",
      "date": "2014-02-28",
      "dateLabel": "2014-02-28",
      "name": "Mt. Gox · 资产缺口与破产",
      "region": "东亚",
      "market": "日本",
      "type": "collapse",
      "metric": "≈ $4.8 亿（初报）",
      "scope": "最初披露 85 万 BTC 缺口的当时估值；含平台及客户币",
      "rankUsd": 480000000.0,
      "paragraphs": [
        "Mt. Gox 申请破产时披露约 85 万 BTC 缺口，其中约 75 万 BTC 为客户资产；当时报道估值约 4.8 亿美元。后续找回约 20 万 BTC，初报缺口不能当最终净损失。",
        "本条是破产披露日，不代表攻击在当天一次发生。早期事件缺少同源 BTC/USD 日线，不伪造其价格回调。"
      ],
      "sources": [
        {
          "label": "Reuters · 2014-02-28 原始披露",
          "url": "https://finance.yahoo.com/news/mt-gox-files-bankruptcy-protection-094811743.html"
        },
        {
          "label": "TIME · 后续找回约 20 万 BTC",
          "url": "https://time.com/33270/bitcoin-mt-gox-wallet/"
        }
      ],
      "btcDate": "2014-02-28",
      "verifiedAt": "2026-10-30"
    }
  ]
};
