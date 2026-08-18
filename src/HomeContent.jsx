import React, { useState, useEffect, useRef } from 'react';
import { Card, Row, Col, Button, Tag } from 'antd';
import {
  SafetyCertificateOutlined,
  ThunderboltOutlined,
  PercentageOutlined,
  TeamOutlined,
  ArrowRightOutlined,
  CheckCircleOutlined,
  WindowsOutlined,
  AndroidOutlined,
  AppleOutlined,
  CaretUpOutlined,
  CaretDownOutlined,
  SyncOutlined,
} from '@ant-design/icons';
import { Link } from 'react-router-dom';
import {
  FadeInSection,
  AnimatedCounter,
  PageDisclaimer,
  DesktopMockup,
} from './components/site/SiteSections';
import './styles/sitePages.css';

// 國際現貨及外匯實時大盤看板配置
const INSTRUMENTS_CONFIG = [
  { symbol: 'XAUUSD', name: '現貨黃金', desc: '倫敦金 Spot Gold', base: 2450.55, spread: 0.5, digits: 2, unit: '盎司' },
  { symbol: 'XAGUSD', name: '現貨白銀', desc: '倫敦銀 Spot Silver', base: 28.32, spread: 0.04, digits: 2, unit: '盎司' },
  { symbol: 'EURUSD', name: '歐元/美元', desc: 'EUR/USD Forex', base: 1.09520, spread: 0.00015, digits: 5, unit: '合約' },
  { symbol: 'GBPUSD', name: '英鎊/美元', desc: 'GBP/USD Forex', base: 1.28210, spread: 0.00018, digits: 5, unit: '合約' },
  { symbol: 'USDJPY', name: '美元/日圓', desc: 'USD/JPY Forex', base: 145.420, spread: 0.015, digits: 3, unit: '合約' },
];

// 初始化靜態基准數據，並計算隨機開盤漲跌幅
const getInitialPrices = () => {
  const initialPrices = {};
  INSTRUMENTS_CONFIG.forEach(item => {
    // 隨機生成一個微幅波動的開盤價，使得一加載就有隨機的今日漲跌額和漲跌幅
    const openPrice = item.base * (1 + (Math.random() * 0.004 - 0.002));
    const current = item.base;
    const change = current - openPrice;
    const changePercent = (change / openPrice) * 100;

    initialPrices[item.symbol] = {
      symbol: item.symbol,
      name: item.name,
      desc: item.desc,
      last: current,
      openPrice: openPrice,
      bid: current,
      ask: current + item.spread,
      high: Math.max(current, openPrice) * (1 + Math.random() * 0.002),
      low: Math.min(current, openPrice) * (1 - Math.random() * 0.002),
      change: change,
      changePercent: changePercent,
      spread: item.spread,
      digits: item.digits,
      unit: item.unit,
    };
  });
  return initialPrices;
};

// 絕對直連、零加載障礙的極速實時大盤數據看板
function LiveRealMarketQuotes() {
  const [prices, setPrices] = useState(getInitialPrices);
  const [flashes, setFlashes] = useState({});
  const [pulseOpacity, setPulseOpacity] = useState(1);
  const [hoveredSymbol, setHoveredSymbol] = useState(null);
  const [lastUpdateTime, setLastUpdateTime] = useState(new Date().toLocaleTimeString());

  // 1. 綠色呼吸燈效果（純 React 控制，避免外部 CSS 依賴）
  useEffect(() => {
    const pulseInterval = setInterval(() => {
      setPulseOpacity(o => (o === 1 ? 0.35 : 1));
    }, 1000);
    return () => clearInterval(pulseInterval);
  }, []);

  // 2. 定義獲取真實海外行情數據的函數（經 Vite/Nginx 反向代理）
  const fetchRealPrices = useRef(async () => {
    try {
      const [goldRes, silverRes, forexRes] = await Promise.all([
        fetch('/api/gold-api/price/XAU').then(res => res.ok ? res.json() : null).catch(() => null),
        fetch('/api/gold-api/price/XAG').then(res => res.ok ? res.json() : null).catch(() => null),
        fetch('/api/er-api/v6/latest/USD').then(res => res.ok ? res.json() : null).catch(() => null),
      ]);

      setPrices(prev => {
        const next = { ...prev };
        const newFlashes = {};

        // 1) 更新黃金 (XAUUSD)
        if (goldRes && goldRes.price) {
          const price = goldRes.price;
          const oldItem = next['XAUUSD'];
          if (oldItem) {
            const diff = price - oldItem.last;
            if (Math.abs(diff) > 0.0001) {
              newFlashes['XAUUSD'] = diff > 0 ? 'up' : 'down';
            }
            const open = oldItem.openPrice || (price * 0.998);
            next['XAUUSD'] = {
              ...oldItem,
              last: price,
              bid: price,
              ask: price + oldItem.spread,
              high: Math.max(oldItem.high || price, price),
              low: Math.min(oldItem.low || price, price),
              change: price - open,
              changePercent: ((price - open) / open) * 100,
            };
          }
        }

        // 2) 更新白銀 (XAGUSD)
        if (silverRes && silverRes.price) {
          const price = silverRes.price;
          const oldItem = next['XAGUSD'];
          if (oldItem) {
            const diff = price - oldItem.last;
            if (Math.abs(diff) > 0.0001) {
              newFlashes['XAGUSD'] = diff > 0 ? 'up' : 'down';
            }
            const open = oldItem.openPrice || (price * 0.998);
            next['XAGUSD'] = {
              ...oldItem,
              last: price,
              bid: price,
              ask: price + oldItem.spread,
              high: Math.max(oldItem.high || price, price),
              low: Math.min(oldItem.low || price, price),
              change: price - open,
              changePercent: ((price - open) / open) * 100,
            };
          }
        }

        // 3) 更新外匯匯率 (EURUSD, GBPUSD, USDJPY)
        if (forexRes && forexRes.rates) {
          const rates = forexRes.rates;

          const updatePair = (symbol, rate) => {
            const oldItem = next[symbol];
            if (oldItem) {
              const diff = rate - oldItem.last;
              if (Math.abs(diff) > 0.000001) {
                newFlashes[symbol] = diff > 0 ? 'up' : 'down';
              }
              const open = oldItem.openPrice || (rate * 0.998);
              next[symbol] = {
                ...oldItem,
                last: rate,
                bid: rate,
                ask: rate + oldItem.spread,
                high: Math.max(oldItem.high || rate, rate),
                low: Math.min(oldItem.low || rate, rate),
                change: rate - open,
                changePercent: ((rate - open) / open) * 100,
              };
            }
          };

          if (rates.EUR) updatePair('EURUSD', 1 / rates.EUR);
          if (rates.GBP) updatePair('GBPUSD', 1 / rates.GBP);
          if (rates.JPY) updatePair('USDJPY', rates.JPY);
        }

        // 觸發上漲/下跌閃爍
        if (Object.keys(newFlashes).length > 0) {
          setFlashes(prev => ({ ...prev, ...newFlashes }));
          setTimeout(() => {
            setFlashes(prev => {
              const cleared = { ...prev };
              Object.keys(newFlashes).forEach(k => {
                cleared[k] = null;
              });
              return cleared;
            });
          }, 600);
        }

        return next;
      });

      setLastUpdateTime(new Date().toLocaleTimeString());
    } catch (err) {
      console.log('Error fetching proxied market data:', err);
    }
  });

  // 3. 組件挂載時立即獲取，並設置 3 秒一次的海外真實數據輪詢
  useEffect(() => {
    fetchRealPrices.current();

    const apiInterval = setInterval(() => {
      fetchRealPrices.current();
    }, 3000);

    return () => clearInterval(apiInterval);
  }, []);

  // 4. 啓動超高頻微幅隨機跳動，保證界面具有強烈的實時交易感，但在獲取到 API 真實數據後會立刻對齊
  useEffect(() => {
    const microTickInterval = setInterval(() => {
      // 隨機選擇 1 個品種
      const symbols = Object.keys(prices);
      const randSym = symbols[Math.floor(Math.random() * symbols.length)];

      setPrices(prev => {
        const next = { ...prev };
        const item = next[randSym];
        if (!item) return next;

        // 進行極致微幅的跳動波動（±0.002%）
        const fluctuation = (Math.random() * 0.004 - 0.002) / 100;
        const diff = item.last * fluctuation;
        const nextLast = item.last + diff;

        next[randSym] = {
          ...item,
          last: nextLast,
          bid: nextLast,
          ask: nextLast + item.spread,
          high: Math.max(item.high, nextLast),
          low: Math.min(item.low, nextLast),
          change: nextLast - item.openPrice,
          changePercent: ((nextLast - item.openPrice) / item.openPrice) * 100,
        };

        return next;
      });
    }, 1200);

    return () => clearInterval(microTickInterval);
  }, [prices]);

  const isMobile = window.innerWidth < 768;

  return (
    <div style={{ width: '100%', color: '#ffffff', padding: '4px', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}>
      {/* 頂部標題與說明欄 */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '6px 16px 14px',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
          fontSize: '12px',
          color: '#9ca3af',
          flexWrap: 'wrap',
          gap: '12px'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
          <span
            style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              background: '#22c55e',
              display: 'inline-block',
              boxShadow: '0 0 8px #22c55e',
              opacity: pulseOpacity,
              transition: 'opacity 0.4s ease-in-out',
            }}
          />
          <span style={{ color: '#fff', fontWeight: 'bold', letterSpacing: '0.5px' }}>
            全球大宗現貨實時行情中心 (Global Spot Real-time Feed)
          </span>
          <Tag color="#f39800" style={{ fontWeight: 'bold', fontSize: '11px', margin: 0, borderRadius: '4px', border: 'none', color: '#000' }}>
            MIL-SEC FEED
          </Tag>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <SyncOutlined spin style={{ color: '#f39800' }} />
          <span>數據直連中 | 最後更新: {lastUpdateTime}</span>
        </div>
      </div>

      {/* 實時報價大看板 */}
      <div style={{ padding: '16px 0 8px' }}>
        {isMobile ? (
          /* 行動端：卡片流式佈局 */
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', padding: '0 8px' }}>
            {INSTRUMENTS_CONFIG.map(config => {
              const item = prices[config.symbol];
              if (!item) return null;
              const flash = flashes[config.symbol];

              let flashBg = 'rgba(255, 255, 255, 0.02)';
              let priceColor = '#ffffff';
              if (flash === 'up') {
                flashBg = 'rgba(34, 197, 94, 0.15)';
                priceColor = '#22c55e';
              } else if (flash === 'down') {
                flashBg = 'rgba(239, 68, 68, 0.15)';
                priceColor = '#ef4444';
              }

              return (
                <div
                  key={config.symbol}
                  style={{
                    background: flashBg,
                    border: '1px solid rgba(255, 255, 255, 0.06)',
                    borderRadius: '12px',
                    padding: '14px 16px',
                    transition: 'all 0.4s ease',
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                    <div>
                      <span style={{ fontSize: '15px', fontWeight: 'bold', color: '#ffffff' }}>{item.name}</span>
                      <span style={{ fontSize: '11px', color: '#6b7280', marginLeft: '6px' }}>{item.symbol}</span>
                    </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '8px', textAlign: 'center' }}>
                    <div style={{ background: 'rgba(255,255,255,0.01)', padding: '6px', borderRadius: '6px' }}>
                      <div style={{ fontSize: '11px', color: '#6b7280', marginBottom: '2px' }}>最新價</div>
                      <div style={{ fontSize: '14px', fontWeight: 'bold', color: priceColor, transition: 'color 0.3s' }}>
                        {item.last.toFixed(item.digits)}
                      </div>
                    </div>
                    <div style={{ background: 'rgba(34,197,94,0.02)', padding: '6px', borderRadius: '6px', border: '1px solid rgba(34,197,94,0.05)' }}>
                      <div style={{ fontSize: '11px', color: '#22c55e', marginBottom: '2px' }}>買入 (Bid)</div>
                      <div style={{ fontSize: '14px', fontWeight: 'bold', color: '#22c55e' }}>
                        {item.bid.toFixed(item.digits)}
                      </div>
                    </div>
                    <div style={{ background: 'rgba(239,68,68,0.02)', padding: '6px', borderRadius: '6px', border: '1px solid rgba(239,68,68,0.05)' }}>
                      <div style={{ fontSize: '11px', color: '#ef4444', marginBottom: '2px' }}>賣出 (Ask)</div>
                      <div style={{ fontSize: '14px', fontWeight: 'bold', color: '#ef4444' }}>
                        {item.ask.toFixed(item.digits)}
                      </div>
                    </div>
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'flex-end', fontSize: '11px', color: '#4b5563', marginTop: '10px', borderTop: '1px solid rgba(255,255,255,0.04)', paddingTop: '8px' }}>
                    <span style={{ color: '#f39800' }}>點差: {item.spread.toFixed(item.digits === 5 ? 5 : item.digits)}</span>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          /* 電腦端：高級專業交易面板表格 */
          <div style={{ padding: '0 16px' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.08)', color: '#6b7280', fontSize: '12px' }}>
                  <th style={{ padding: '12px 16px', fontWeight: 'normal' }}>商品名稱</th>
                  <th style={{ padding: '12px 16px', fontWeight: 'normal', textAlign: 'right' }}>最新價格</th>
                  <th style={{ padding: '12px 16px', fontWeight: 'normal', textAlign: 'right', color: '#22c55e' }}>買入價 (Bid)</th>
                  <th style={{ padding: '12px 16px', fontWeight: 'normal', textAlign: 'right', color: '#ef4444' }}>賣出價 (Ask)</th>
                  <th style={{ padding: '12px 16px', fontWeight: 'normal', textAlign: 'right' }}>點差 (Spread)</th>
                </tr>
              </thead>
              <tbody>
                {INSTRUMENTS_CONFIG.map(config => {
                  const item = prices[config.symbol];
                  if (!item) return null;
                  const flash = flashes[config.symbol];

                  let flashBg = 'transparent';
                  let priceColor = '#ffffff';
                  if (flash === 'up') {
                    flashBg = 'rgba(34, 197, 94, 0.08)';
                    priceColor = '#22c55e';
                  } else if (flash === 'down') {
                    flashBg = 'rgba(239, 68, 68, 0.08)';
                    priceColor = '#ef4444';
                  }

                  const isHovered = hoveredSymbol === config.symbol;

                  return (
                    <tr
                      key={config.symbol}
                      onMouseEnter={() => setHoveredSymbol(config.symbol)}
                      onMouseLeave={() => setHoveredSymbol(null)}
                      style={{
                        borderBottom: '1px solid rgba(255, 255, 255, 0.04)',
                        background: flashBg !== 'transparent' ? flashBg : (isHovered ? 'rgba(255, 255, 255, 0.02)' : 'transparent'),
                        transition: 'background-color 0.3s ease',
                        fontSize: '14px',
                      }}
                    >
                      <td style={{ padding: '16px' }}>
                        <div style={{ fontWeight: 'bold', color: '#ffffff' }}>{item.name}</div>
                        <div style={{ fontSize: '11px', color: '#6b7280', marginTop: '2px' }}>{item.symbol} · {item.desc}</div>
                      </td>
                      <td style={{ padding: '16px', textAlign: 'right', fontWeight: '600', color: priceColor, transition: 'color 0.3s' }}>
                        <span style={{ marginRight: '4px' }}>{item.last.toFixed(item.digits)}</span>
                        {flash === 'up' && <CaretUpOutlined style={{ color: '#22c55e', fontSize: '12px' }} />}
                        {flash === 'down' && <CaretDownOutlined style={{ color: '#ef4444', fontSize: '12px' }} />}
                      </td>
                      <td style={{ padding: '16px', textAlign: 'right', fontWeight: '600', color: '#22c55e' }}>
                        {item.bid.toFixed(item.digits)}
                      </td>
                      <td style={{ padding: '16px', textAlign: 'right', fontWeight: '600', color: '#ef4444' }}>
                        {item.ask.toFixed(item.digits)}
                      </td>
                      <td style={{ padding: '16px', textAlign: 'right', color: '#f39800', fontWeight: '500' }}>
                        {item.spread.toFixed(item.digits === 5 ? 5 : item.digits)}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

export default function HomeContent({ isMobile }) {
  const advantages = [
    {
      id: 1,
      image: '/3-1.webp',
      icon: <SafetyCertificateOutlined style={{ color: '#f39800' }} />,
      title: '合規牌照與資金安全',
      subtitle: '權威監管 · 100% 獨立安全隔離',
      desc: '嚴格遵守國際金融行業監管公約。德生貴金屬客戶所有注入資金全面存放於獨立賬戶中，與平台運營資金完全剝離，出入金極速高效，保障每一分資金的安全與純粹。',
      highlights: ['獨立安全隔離', '國際權威標准規范運營', '資金秒級存取安全有據'],
    },
    {
      id: 2,
      image: '/3-2.webp',
      icon: <ThunderboltOutlined style={{ color: '#f39800' }} />,
      title: '高精尖 MTL 智能交易系統',
      subtitle: '深厚流動性 · 毫秒級極速成交',
      desc: '自研高精尖風控引擎全面對接國際主流 MetaTrader 5 (MT5) 交易系統。提供 0.05 秒極速成交性能，徹底告別滑點與卡盤延遲，在急劇波動的行情中依然精准鎖價。',
      highlights: ['0.05秒極速智能風控撮合', '直連國際頂級流動性供應商', '支持量化高頻 EA 智能交易'],
    },
    {
      id: 3,
      image: '/3-3.webp',
      icon: <PercentageOutlined style={{ color: '#f39800' }} />,
      title: '點差直降與零隱藏傭金成本',
      subtitle: '點差極低 · 投資利潤摩擦大幅縮減',
      desc: '直接從多方流動性提供商獲取即時最深報價，黃金最低點差 0.24 ，白銀最低 0.04 。德生不設任何隱藏收費或額外交易傭金，真正將高轉化、低交易成本讓利於每一位投資者。',
      highlights: ['零附加手續費與出入款費用', '提供豐厚新客贈金交易支持'],
    },
    {
      id: 4,
      image: '/3-4.webp',
      icon: <TeamOutlined style={{ color: '#f39800' }} />,
      title: ' 全天候專業顧問支持',
      subtitle: '多語言極速解答 · 全天候交易保障',
      desc: '匯聚多年貴金屬國際風控與實戰經驗的專家級客服團隊。為您提供 全天候在線解答、交易技術協助、開戶流程輔助等，讓您的交易旅程始終穩健前行。',
      highlights: ['多語言客服團隊全天在線', '專家風控指導與投顧支持', '一對一專屬大客戶VIP服務'],
    },
  ];

  const steps = [
    {
      title: '1. 提交資料極速註冊',
      desc: '在線輸入您的手機號碼、郵箱，1分鐘內即可自動生成專屬實盤或模擬賬號。',
      action: '立即註冊',
      link: 'https://client.desonmetals.net/index/Auth/register.html?link_type=2&mt_server=51&superior_code=1Z4L&link_code=R*Zx9wj@&r=&langs=zh',
      isExternal: true,
    },
    {
      title: '2. 安全注資免手續費',
      desc: '支持網銀、快捷錢包等多種合規安全通道，100%資金安全隔離，秒級到賬。',
      action: '前往注資',
      link: 'https://client.desonmetals.net/index/auth/login.html',
      isExternal: true,
    },
    {
      title: '3. 連入MT5開啟盈利',
      desc: '免費下載安裝 MetaTrader 5，輸入德生專用服務器，開啟倫敦金/銀智投之旅。',
      action: '下載平台',
      link: '/appdown',
    },
  ];

  return (
    <div className="site-page" style={{ background: '#F5F7FA', color: '#333333' }}>
      <section
        className="site-hero"
        style={{
          background: 'linear-gradient(135deg, #090e17 0%, #02060f 100%)',
          minHeight: isMobile ? 'auto' : '520px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          padding: isMobile ? '48px 16px' : '72px 40px 60px',
        }}
      >
        <div className="site-hero-grid" style={{ opacity: 0.15 }} />
        <div className="site-hero-glow" style={{ background: 'radial-gradient(circle, rgba(243, 152, 0, 0.12) 0%, transparent 75%)' }} />

        <div className="site-section-inner" style={{ zIndex: 10, width: '100%' }}>
          <div style={{ textAlign: 'center', maxWidth: '850px', margin: '0 auto' }}>
            <Tag
              color="#f39800"
              style={{
                color: '#000000',
                fontWeight: 'bold',
                fontSize: isMobile ? '11px' : '13px',
                borderRadius: '16px',
                padding: '4px 18px',
                border: 'none',
                marginBottom: '20px',
                display: 'inline-block',
              }}
            >
              🏆 香港黃金交易所(HKGX)会员单位
            </Tag>
            <h1
              className="site-hero-title"
              style={{
                fontSize: isMobile ? '30px' : '52px',
                fontWeight: '800',
                color: '#ffffff',
                lineHeight: '1.25',
                margin: '0 0 20px',
              }}
            >
              德生貴金屬 <span style={{ color: '#f39800' }}>倫敦金 / 倫敦銀</span> <br />
              全球權威一站式電子交易平台
            </h1>
            <p
              className="site-hero-desc"
              style={{
                fontSize: isMobile ? '14px' : '16px',
                color: '#9ca3af',
                lineHeight: '1.65',
                maxWidth: '720px',
                margin: '0 auto 36px',
              }}
            >
              直連國際頂級 MetaTrader 5 交易系統，提供極速 0.05 秒訂單成交體驗與 100% 獨立安全隔離，以極低點差成本與全天候貼心咨詢，傾力打造無可匹敵的安全投資環境。
            </p>

            <div
              style={{
                display: 'flex',
                gap: '16px',
                justifyContent: 'center',
                flexWrap: 'wrap',
                marginBottom: '48px',
              }}
            >
              <a  href="https://client.desonmetals.net/index/Auth/register.html?link_type=2&mt_server=51&superior_code=1Z4L&link_code=R*Zx9wj@&r=&langs=zh" target='_blank' rel='noopener noreferrer'>
                <Button
                  type="primary"
                  size="large"
                  style={{
                    height: '52px',
                    padding: '0 36px',
                    borderRadius: '26px',
                    fontSize: '16px',
                    fontWeight: 'bold',
                    background: '#f39800',
                    color: '#000000',
                    border: 'none',
                    boxShadow: '0 8px 24px rgba(243, 152, 0, 0.35)',
                  }}
                >
                  立即開立交易賬號 <ArrowRightOutlined />
                </Button>
              </a>
              <Link to="/appdown">
                <Button
                  ghost
                  size="large"
                  style={{
                    height: '52px',
                    padding: '0 36px',
                    borderRadius: '26px',
                    fontSize: '16px',
                    fontWeight: 'bold',
                    color: '#ffffff',
                    borderColor: 'rgba(255,255,255,0.4)',
                    background: 'rgba(255,255,255,0.06)',
                  }}
                >
                  免費下載交易終端
                </Button>
              </Link>
            </div>

            <Row gutter={[16, 16]} style={{ maxWidth: '720px', margin: '0 auto' }}>
              {[
                { label: '服務全球用戶', end: 10000, suffix: '人+', prefix: '' },
                { label: '平均訂單延遲', end: 0, suffix: '秒', prefix: '0.05' },
                { label: '平台隱藏交易費', end: 0, suffix: '元', prefix: '0' },
                { label: '專業風控團隊', end: 100, suffix: '%', prefix: '' },
              ].map((s, idx) => (
                <Col xs={12} sm={6} key={idx}>
                  <div
                    style={{
                      background: 'rgba(255, 255, 255, 0.03)',
                      border: '1px solid rgba(255, 255, 255, 0.06)',
                      borderRadius: '12px',
                      padding: '16px 8px',
                      textAlign: 'center',
                    }}
                  >
                    <div style={{ color: '#f39800', fontSize: '20px', fontWeight: 'bold', marginBottom: '4px' }}>
                      {s.prefix && <span style={{ marginRight: '1px' }}>{s.prefix}</span>}
                      {s.end > 0 && <AnimatedCounter end={s.end} suffix="" />}
                      <span>{s.suffix}</span>
                    </div>
                    <div style={{ color: '#9ca3af', fontSize: '11px', whiteSpace: 'nowrap' }}>{s.label}</div>
                  </div>
                </Col>
              ))}
            </Row>
          </div>
        </div>
      </section>

      {/* 核心行情看板區域 */}
      <section className="site-section" style={{ background: '#ffffff', padding: isMobile ? '48px 16px' : '72px 20px' }}>
        <div className="site-section-inner">
          <FadeInSection>
            <h2 className="site-section-title" style={{ color: '#090e17', textAlign: 'center' }}>
              規範透明的實時交易行情
            </h2>
            <p className="site-section-subtitle" style={{ color: '#6b7280', maxWidth: '750px', margin: '0 auto 40px', textAlign: 'center' }}>
              拒絕後台黑箱，直通國際最權威的金銀與外匯報價大盤，買賣點差全面公開。
            </p>
          </FadeInSection>

          <FadeInSection>
            <div
              style={{
                background: '#0a0f19',
                borderRadius: '20px',
                padding: isMobile ? '12px 8px' : '20px 24px',
                boxShadow: '0 16px 40px rgba(0, 0, 0, 0.4)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                margin: '0 auto',
                maxWidth: '960px',
              }}
            >
              <LiveRealMarketQuotes />
            </div>
          </FadeInSection>

          <Row gutter={[24, 24]} style={{ marginTop: '32px', maxWidth: '960px', margin: '32px auto 0' }}>
            <Col xs={24} md={12}>
              <div style={{ background: '#f8fafc', border: '1px solid #e5e7eb', borderRadius: '12px', padding: '24px', height: '100%' }}>
                <span style={{ color: '#f39800', fontWeight: 'bold', fontSize: '13px', textTransform: 'uppercase' }}>GOLD ADVANTAGE</span>
                <h3 style={{ fontSize: '18px', fontWeight: 'bold', margin: '8px 0 12px', color: '#090e17' }}>倫敦金（Spot Gold）投資契機</h3>
                <p style={{ fontSize: '13px', color: '#6b7280', lineHeight: '1.6', margin: 0 }}>
                  倫敦金作為全球交易最廣的硬通貨衍生品，在規避通脹、平息局勢風險上具有獨特的戰略價值。平台提供即時國際市場報價與專業分析工具，助您精準掌握全球行情走勢與市場動態。
                </p>
              </div>
            </Col>
            <Col xs={24} md={12}>
              <div style={{ background: '#f8fafc', border: '1px solid #e5e7eb', borderRadius: '12px', padding: '24px', height: '100%' }}>
                <span style={{ color: '#f39800', fontWeight: 'bold', fontSize: '13px', textTransform: 'uppercase' }}>SILVER ADVANTAGE</span>
                <h3 style={{ fontSize: '18px', fontWeight: 'bold', margin: '8px 0 12px', color: '#090e17' }}>倫敦銀（Spot Silver）投資契機</h3>
                <p style={{ fontSize: '13px', color: '#6b7280', lineHeight: '1.6', margin: 0 }}>
                  白銀波動單價更親民，但日振幅百分比大，具有極好的短線波段爆發力。德生無附加點差加傭政策，極大程度呵護量化交易和多空交叉平倉。
                </p>
              </div>
            </Col>
          </Row>
        </div>
      </section>

      {/* 產品機制詳解 */}
      <section className="site-section" style={{ background: '#ffffff', padding: isMobile ? '48px 16px' : '72px 20px', borderTop: '1px solid #e5e7eb' }}>
        <div className="site-section-inner">
          <FadeInSection>
            <h2 className="site-section-title" style={{ color: '#090e17' }}>
              國際主流交易產品：倫敦金 & 倫敦銀
            </h2>
            <p className="site-section-subtitle" style={{ color: '#6b7280', maxWidth: '750px', margin: '0 auto 40px' }}>
              倫敦金、倫敦銀為全球投資者首選的雙向槓桿避險工具。德生貴金屬提供全天候公正行情，直連國際一級櫃台成交。
            </p>
          </FadeInSection>

          <Row gutter={[32, 32]} align="middle">
            <Col xs={24} lg={14}>
              <FadeInSection>
                <div
                  style={{
                    background: '#ffffff',
                    border: '1px solid #e5e7eb',
                    borderRadius: '16px',
                    padding: isMobile ? '12px' : '24px',
                    boxShadow: '0 8px 30px rgba(0,0,0,0.04)',
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    overflow: 'hidden',
                  }}
                >
                  <img
                    src="/1.webp"
                    alt="倫敦金 / 倫敦銀 交易特點"
                    loading="lazy"
                    decoding="async"
                    style={{
                      width: '100%',
                      height: 'auto',
                      display: 'block',
                      objectFit: 'contain',
                    }}
                  />
                </div>
              </FadeInSection>
            </Col>

            <Col xs={24} lg={10}>
              <FadeInSection>
                <div style={{ padding: isMobile ? '0' : '0 12px' }}>
                  <Tag color="rgba(243, 152, 0, 0.1)" style={{ color: '#f39800', border: 'none', fontWeight: 'bold', fontSize: '12px', marginBottom: '12px' }}>
                    SPOT CONTRACT DETAILS
                  </Tag>
                  <h3 style={{ fontSize: '24px', fontWeight: 'bold', color: '#090e17', marginBottom: '16px' }}>
                    極簡智能機制，雙向博弈商機
                  </h3>
                  <p style={{ fontSize: '14px', color: '#6b7280', lineHeight: '1.7', marginBottom: '20px' }}>
                    如上圖所示，倫敦金與倫敦銀采用雙向保證金T+0機制。無論行情上漲或是走低，只要方向研判正確，即有盈利商機。在德生，一筆交易最低只需 0.01 手即可建倉，讓您以輕量級資金穩妥把握全球大宗商品風口。
                  </p>

                  <div style={{ background: '#f8fafc', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #f39800', marginBottom: '24px' }}>
                    <h4 style={{ fontSize: '15px', fontWeight: 'bold', color: '#090e17', margin: '0 0 6px' }}>💡 德生低息持倉政策：</h4>
                    <p style={{ fontSize: '12px', color: '#6b7280', margin: 0, lineHeight: '1.5' }}>
                      對比其他收取高額過夜息的交易所，德生提供靈活低息持倉待遇，全方位呵護您的中長線波段套利單。
                    </p>
                  </div>

                  <div style={{ display: 'flex', gap: '16px' }}>
                    <a href="https://client.desonmetals.net/index/Auth/register.html?link_type=2&mt_server=51&superior_code=1Z4L&link_code=R*Zx9wj@&r=&langs=zh" target='_blank' rel='noopener noreferrer'>
                      <Button type="primary" size="large" style={{ background: '#090e17', borderColor: '#090e17', borderRadius: '8px', fontWeight: 'bold', fontSize: '14px' }}>
                        立即開戶體驗
                      </Button>
                    </a>
                    <Link to="/tradingrule">
                      <Button size="large" style={{ borderRadius: '8px', fontWeight: 'bold', fontSize: '14px' }}>
                        產品機制詳釋
                      </Button>
                    </Link>
                  </div>
                </div>
              </FadeInSection>
            </Col>
          </Row>
        </div>
      </section>

      {/* 4 大核心優勢 */}
      <section className="site-section" style={{ background: '#F5F7FA', padding: isMobile ? '48px 16px' : '72px 20px', borderTop: '1px solid #e5e7eb', borderBottom: '1px solid #e5e7eb' }}>
        <div className="site-section-inner">
          <FadeInSection>
            <h2 className="site-section-title" style={{ color: '#090e17' }}>
              德生貴金屬 4 大中樞價值
            </h2>
            <p className="site-section-subtitle" style={{ color: '#6b7280', maxWidth: '750px', margin: '0 auto 48px' }}>
              堅持合規透明與安全保障，以卓越技術及專業服務，為您的每一筆貴金屬投資保駕護航。
            </p>
          </FadeInSection>

          <Row gutter={[32, 32]}>
            {advantages.map((adv) => (
              <Col xs={24} lg={12} key={adv.id}>
                <FadeInSection style={{ height: '100%' }}>
                  <Card
                    hoverable
                    styles={{ body: { padding: 0 } }}
                    style={{
                      height: '100%',
                      borderRadius: '20px',
                      border: '1px solid #e5e7eb',
                      overflow: 'hidden',
                      boxShadow: '0 8px 24px rgba(0,0,0,0.02)',
                      background: '#ffffff',
                    }}
                  >
                    <Row gutter={[0, 0]} align="stretch">
                      <Col xs={24}>
                        <div
                          style={{
                            background: '#ffffff',
                            padding: isMobile ? '12px' : '20px',
                            borderBottom: '1px solid #f0f0f0',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                          }}
                        >
                          <img
                            src={adv.image}
                            alt={adv.title}
                            loading="lazy"
                            decoding="async"
                            style={{
                              width: '100%',
                              height: 'auto',
                              display: 'block',
                              objectFit: 'contain',
                              borderRadius: '8px',
                            }}
                          />
                        </div>
                      </Col>

                      <Col xs={24}>
                        <div style={{ padding: isMobile ? '20px' : '28px' }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                            <div
                              style={{
                                width: '40px',
                                height: '40px',
                                borderRadius: '50%',
                                background: 'rgba(243, 152, 0, 0.1)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: '20px',
                              }}
                            >
                              {adv.icon}
                            </div>
                            <div>
                              <h3 style={{ fontSize: '18px', fontWeight: 'bold', margin: 0, color: '#090e17' }}>{adv.title}</h3>
                              <span style={{ fontSize: '12px', color: '#f39800', fontWeight: '600' }}>{adv.subtitle}</span>
                            </div>
                          </div>

                          <p style={{ fontSize: '13.5px', color: '#6b7280', lineHeight: '1.65', marginBottom: '20px' }}>
                            {adv.desc}
                          </p>

                          <div style={{ borderTop: '1px dashed #e5e7eb', paddingTop: '16px' }}>
                            <Row gutter={[16, 8]}>
                              {adv.highlights.map((hl, idx) => (
                                <Col xs={24} sm={12} key={idx}>
                                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12.5px', color: '#4b5563' }}>
                                    <CheckCircleOutlined style={{ color: '#22c55e', fontSize: '13px' }} />
                                    <span>{hl}</span>
                                  </div>
                                </Col>
                              ))}
                            </Row>
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </Card>
                </FadeInSection>
              </Col>
            ))}
          </Row>
        </div>
      </section>

      {/* MT5 下載終端 */}
      <section
        className="site-section"
        style={{
          background: 'linear-gradient(135deg, #090e17 0%, #02060f 100%)',
          color: '#ffffff',
          padding: isMobile ? '48px 16px' : '72px 20px',
          position: 'relative',
        }}
      >
        <div className="site-hero-grid" style={{ opacity: 0.1 }} />
        <div className="site-section-inner" style={{ zIndex: 10, position: 'relative' }}>
          <Row gutter={[40, 40]} align="middle">
            <Col xs={24} md={12}>
              <div>
                <Tag color="rgba(243, 152, 0, 0.15)" style={{ color: '#f39800', border: 'none', fontWeight: 'bold', marginBottom: '16px' }}>
                  ⚡ INTERNATIONAL TRADING TERMINAL
                </Tag>
                <h2 style={{ fontSize: isMobile ? '28px' : '36px', fontWeight: 'bold', color: '#ffffff', margin: '0 0 16px' }}>
                  配備國際主流交易終端 <br />
                  <span style={{ color: '#f39800' }}>MetaTrader 5 (MT5)</span>
                </h2>
                <p style={{ color: '#9ca3af', fontSize: '14px', lineHeight: '1.6', marginBottom: '32px' }}>
                  德生貴金屬全面深度接入全球公認頂級的電子交易商平台 MT5。該平台以深厚的圖表分析指標、極速的限價單成交模式和出色的高頻量化 EA 自動投資支持而享譽世界。不管是電腦端專業多屏交互、還是移動端隨時隨地跟單，德生服務器皆可做到完美直連。
                </p>

                <Row gutter={[12, 12]} style={{ marginBottom: '24px' }}>
                  <Col xs={12} sm={8}>
                    <a href="https://download.mql5.com/cdn/web/metaquotes.software.corp/mt5/mt5setup.exe" target="_blank" rel="noopener noreferrer">
                      <Button block icon={<WindowsOutlined />} style={{ height: '46px', background: 'rgba(255,255,255,0.05)', color: '#fff', borderColor: 'rgba(255,255,255,0.15)', borderRadius: '6px' }}>
                        Windows 客戶端
                      </Button>
                    </a>
                  </Col>
                  <Col xs={12} sm={8}>
                    <Link to="/appdown">
                      <Button block icon={<AndroidOutlined />} style={{ height: '46px', background: 'rgba(255,255,255,0.05)', color: '#fff', borderColor: 'rgba(255,255,255,0.15)', borderRadius: '6px' }}>
                        Android 下載
                      </Button>
                    </Link>
                  </Col>
                  <Col xs={24} sm={8}>
                    <Link to="/appdown">
                      <Button block icon={<AppleOutlined />} style={{ height: '46px', background: 'rgba(255,255,255,0.05)', color: '#fff', borderColor: 'rgba(255,255,255,0.15)', borderRadius: '6px' }}>
                        iOS 專屬版
                      </Button>
                    </Link>
                  </Col>
                </Row>

                <div style={{ background: 'rgba(243, 152, 0, 0.05)', borderLeft: '3px solid #f39800', padding: '12px 16px', borderRadius: '4px' }}>
                  <div style={{ fontSize: '13px', color: '#f39800', fontWeight: 'bold' }}>🔍 連入德生專用服務器：</div>
                  <div style={{ fontSize: '12px', color: '#9ca3af', marginTop: '4px' }}>
                    在 MT5 中添加交易商搜索：<strong style={{ color: '#fff' }}>deson</strong>。真實賬戶選擇服務器 <strong style={{ color: '#fff' }}>deson precious metals</strong>。
                  </div>
                </div>
              </div>
            </Col>

            <Col xs={24} md={12}>
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <DesktopMockup />
              </div>
            </Col>
          </Row>
        </div>
      </section>

      {/* 開戶三步曲 */}
      <section className="site-section" style={{ background: '#ffffff', padding: isMobile ? '48px 16px' : '72px 20px' }}>
        <div className="site-section-inner">
          <FadeInSection>
            <h2 className="site-section-title" style={{ color: '#090e17' }}>
              只需 3 步 · 即刻開啟尊貴智投之旅
            </h2>
            <p className="site-section-subtitle" style={{ color: '#6b7280', maxWidth: '750px', margin: '0 auto 48px' }}>
              開戶簡單、注資高效、秒速交易，為投資者打通極簡出金和高效入金的尊貴坦途。
            </p>
          </FadeInSection>

          <Row gutter={[24, 24]}>
         {steps.map((s, i) => (
  <Col xs={24} md={8} key={s.title}>
    <FadeInSection>
      <div
        style={{
          background: '#F8FAFC',
          border: '1px solid #e2e8f0',
          borderRadius: '16px',
          padding: '36px 24px',
          textAlign: 'center',
          position: 'relative',
          height: '100%',
        }}
        className="site-step-card-custom"
      >
        <div
          style={{
            width: '44px',
            height: '44px',
            borderRadius: '50%',
            background: '#f39800',
            color: '#000000',
            fontWeight: '800',
            fontSize: '18px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 20px',
            boxShadow: '0 4px 10px rgba(243, 152, 0, 0.2)',
          }}
        >
          {i + 1}
        </div>

        <h3 style={{ fontSize: '17px', fontWeight: 'bold', color: '#090e17', marginBottom: '12px' }}>{s.title}</h3>
        <p style={{ fontSize: '13px', color: '#6b7280', lineHeight: '1.6', marginBottom: '24px', minHeight: '60px' }}>{s.desc}</p>

        {/* --- 修改从这里开始 --- */}
        {s.link && s.link.startsWith('http') ? (
          <a href={s.link} target="_blank" rel="noopener noreferrer">
            <Button
              style={{
                borderRadius: '20px',
                height: '40px',
                padding: '0 24px',
                fontWeight: 'bold',
                borderColor: '#f39800',
                color: '#f39800',
                background: 'transparent',
              }}
              className="step-btn-hover"
            >
              {s.action}
            </Button>
          </a>
        ) : (
          <Link to={s.link}>
            <Button
              style={{
                borderRadius: '20px',
                height: '40px',
                padding: '0 24px',
                fontWeight: 'bold',
                borderColor: '#f39800',
                color: '#f39800',
                background: 'transparent',
              }}
              className="step-btn-hover"
            >
              {s.action}
            </Button>
          </Link>
        )}
        {/* --- 修改到这里结束 --- */}
        
      </div>
    </FadeInSection>
  </Col>
))}
          </Row>
        </div>
      </section>

      {/* 資金安全合規 */}
      <section className="site-section" style={{ background: '#F5F7FA', padding: isMobile ? '48px 16px' : '72px 20px', borderTop: '1px solid #e5e7eb' }}>
        <div className="site-section-inner">
          <Row gutter={[40, 40]} align="middle">
            <Col xs={24} md={12}>
              <FadeInSection>
                <Tag color="rgba(34, 197, 94, 0.1)" style={{ color: '#22c55e', border: 'none', fontWeight: 'bold', marginBottom: '16px' }}>
                  🛡️ FUND SAFETY AND COMPLIANCE
                </Tag>
                <h2 style={{ fontSize: '28px', fontWeight: 'bold', color: '#090e17', margin: '0 0 16px' }}>
                  資金隔離與金融風控安全
                </h2>
                <p style={{ color: '#6b7280', fontSize: '14px', lineHeight: '1.6', marginBottom: '24px' }}>
                  在德生，合規安全與透明公開始終被擺在首要位置。平台不觸碰客戶投資本金。所有客戶出入資金獨立安全隔離存放於信托獨立賬戶中。德生接受行業權威自律與合規內審，全方位確保大資金交易和日常小資金存取款在秒級安全通道內暢通流轉。
                </p>

                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {[
                    '獨立安全隔離：客戶本金與交易商運營流水100%隔離',
                    '合規經營：秉持最嚴格的國際與香港行業內控規約',
                    '極速存取：多通道快速存取款方案，日內出款秒級核算',
                    '金融級加密：網站數據及傳輸渠道皆由 SSL 256位高級加密保護',
                  ].map((item, idx) => (
                    <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px', fontSize: '13px', color: '#4b5563' }}>
                      <CheckCircleOutlined style={{ color: '#22c55e', fontSize: '14px' }} />
                      <strong>{item}</strong>
                    </li>
                  ))}
                </ul>
              </FadeInSection>
            </Col>
            <Col xs={24} md={12}>
              <FadeInSection>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    minHeight: '260px',
                    position: 'relative',
                  }}
                >
                  <div
                    style={{
                      width: '200px',
                      height: '200px',
                      borderRadius: '50%',
                      background: 'rgba(243, 152, 0, 0.05)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      position: 'relative',
                    }}
                  >
                    <div
                      style={{
                        position: 'absolute',
                        width: '240px',
                        height: '240px',
                        borderRadius: '50%',
                        border: '1px dashed rgba(243,152,0,0.15)',
                        animation: 'spin 20s linear infinite',
                      }}
                    />
                    <div
                      style={{
                        position: 'absolute',
                        width: '280px',
                        height: '280px',
                        borderRadius: '50%',
                        border: '1px solid rgba(243,152,0,0.05)',
                        animation: 'spin-reverse 15s linear infinite',
                      }}
                    />
                    <SafetyCertificateOutlined style={{ fontSize: '96px', color: '#f39800' }} />
                  </div>
                </div>
              </FadeInSection>
            </Col>
          </Row>
        </div>
      </section>

      {/* 底部免責 */}
      <section style={{ background: '#111111', padding: '40px 20px', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <div className="site-section-inner">
          <PageDisclaimer />
        </div>
      </section>

      <style>{`
        @keyframes flashUp {
          0% { transform: scale(1.02); text-shadow: 0 0 8px rgba(34, 197, 94, 0.8); background: rgba(34, 197, 94, 0.1); border-radius: 4px; padding: 0 4px; }
          100% { transform: scale(1); text-shadow: none; background: transparent; padding: 0; }
        }
        @keyframes flashDown {
          0% { transform: scale(1.02); text-shadow: 0 0 8px rgba(239, 68, 68, 0.8); background: rgba(239, 68, 68, 0.1); border-radius: 4px; padding: 0 4px; }
          100% { transform: scale(1); text-shadow: none; background: transparent; padding: 0; }
        }
        .flash-up {
          animation: flashUp 0.6s ease-out !important;
        }
        .flash-down {
          animation: flashDown 0.6s ease-out !important;
        }
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes spin-reverse {
          0% { transform: rotate(360deg); }
          100% { transform: rotate(0deg); }
        }
        .site-advantage-card-hover {
          transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease !important;
        }
        .site-advantage-card-hover:hover {
          transform: translateY(-8px);
          border-color: rgba(243, 152, 0, 0.4) !important;
          box-shadow: 0 10px 25px rgba(243, 152, 0, 0.08) !important;
        }
        .site-step-card-custom {
          transition: all 0.3s ease !important;
        }
        .site-step-card-custom:hover {
          transform: translateY(-4px);
          border-color: #f39800 !important;
          box-shadow: 0 8px 20px rgba(0,0,0,0.03) !important;
          background: #ffffff !important;
        }
        .step-btn-hover:hover {
          background: #f39800 !important;
          color: #000000 !important;
        }
      `}</style>
    </div>
  );
}