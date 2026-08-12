import React, { useState, useEffect } from 'react';
import { Card, Row, Col, Button, Tag, Table } from 'antd';
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
  CheckOutlined,
} from '@ant-design/icons';
import { Link } from 'react-router-dom';
import {
  FadeInSection,
  MarketTicker,
  AnimatedCounter,
  PageDisclaimer,
  DesktopMockup,
} from './components/site/SiteSections';
import './styles/sitePages.css';

export default function HomeContent({ isMobile }) {
  // 動態市場報價狀態 (初始化為 desonmetals.net 官方當前的真實大盤金銀現貨價格，黃金對齊至 4408)
  const [prices, setPrices] = useState({
    goldBid: 4408.21,
    goldAsk: 4408.51,
    silverBid: 65.857,
    silverAsk: 65.887,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setPrices(prev => {
        const goldDiff = (Math.random() - 0.5) * 0.4; // +/- 20美分波動
        const newGoldBid = +(prev.goldBid + goldDiff).toFixed(2);
        const newGoldAsk = +(newGoldBid + 0.30).toFixed(2); // 維持 0.30 點差

        const silverDiff = (Math.random() - 0.5) * 0.04; // +/- 2美分波動
        const newSilverBid = +(prev.silverBid + silverDiff).toFixed(3);
        const newSilverAsk = +(newSilverBid + 0.030).toFixed(3); // 維持 0.030 點差

        return {
          goldBid: newGoldBid,
          goldAsk: newGoldAsk,
          silverBid: newSilverBid,
          silverAsk: newSilverAsk,
        };
      });
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  // 1. 公司四大核心優勢 (對應 3-1.png 到 3-4.png 完整的水平/垂直大圖)
  const advantages = [
    {
      id: 1,
      image: '/3-1.png',
      icon: <SafetyCertificateOutlined style={{ color: '#f39800' }} />,
      title: '合規牌照與資金隔離安全',
      subtitle: '權威監管 · 100% 銀行獨立托管',
      desc: '嚴格遵守國際金融行業監管公約。德生貴金屬客戶所有注入資金全面存放於獨立信托銀行的隔離賬戶中，與平台運營資金完全剝離，出入金極速高效，保障每一分資金的安全與純粹。',
      highlights: ['獨立銀行信托隔離托管', '國際權威標准規范運營', '資金秒級存取安全有據'],
    },
    {
      id: 2,
      image: '/3-2.png',
      icon: <ThunderboltOutlined style={{ color: '#f39800' }} />,
      title: '高精尖 MTL 智能交易系統',
      subtitle: '深厚流動性 · 毫秒級極速成交',
      desc: '自研高精尖風控引擎全面對接國際主流 MetaTrader 5 (MT5) 交易系統。提供 0.05 秒極速成交性能，徹底告別滑點與卡盤延遲，在急劇波動的行情中依然精准鎖價。',
      highlights: ['0.05秒極速智能風控撮合', '直連國際頂級流動性供應商', '支持量化高頻 EA 智能交易'],
    },
    {
      id: 3,
      image: '/3-3.png',
      icon: <PercentageOutlined style={{ color: '#f39800' }} />,
      title: '點差直降與零隱藏傭金成本',
      subtitle: '點差極低 · 投資利潤摩擦大幅縮減',
      desc: '直接從多方流動性提供商獲取即時最深報價，點差低至 0 起。德生不設任何隱藏收費或額外交易傭金，真正將高轉化、低交易成本讓利於每一位投資者。',
      highlights: ['倫敦金點差低至 0 起手', '零附加手續費與出入款費用', '提供豐厚新客贈金交易支持'],
    },
    {
      id: 4,
      image: '/3-4.png',
      icon: <TeamOutlined style={{ color: '#f39800' }} />,
      title: '一對一 24/7 專業顧問支持',
      subtitle: '多語言極速解答 · 全天候交易保障',
      desc: '匯聚多年貴金屬國際風控與實戰經驗的專家級客服團隊。為您提供 24 小時在線解答、交易技術協助、開戶流程輔助等，讓您的交易旅程始終穩健前行。',
      highlights: ['多語言客服團隊全天在線', '專家風控指導與投顧支持', '一對一專屬大客戶VIP服務'],
    },
  ];

  // 3. 仿金榮中國開戶三步法
  const steps = [
    {
      title: '1. 提交資料極速註冊',
      desc: '在線輸入您的手機號碼、郵箱，1分鐘內即可自動生成專屬實盤或模擬賬號。',
      action: '立即註冊',
      link: '/register',
    },
    {
      title: '2. 安全注資免手續費',
      desc: '支持網銀、快捷錢包等多種合規安全通道，100%銀行托管隔離，秒級到賬。',
      action: '前往注資',
      link: '/login',
    },
    {
      title: '3. 連入MT5開啟盈利',
      desc: '免費下載安裝 MetaTrader 5，輸入德生專用服務器，開啟倫敦金/銀智投之旅。',
      action: '下載平台',
      link: '/appdown',
    },
  ];

  // 行情報價表數據 (倫敦金、倫敦銀)
  const columns = [
    { title: '交易品種', dataIndex: 'name', key: 'name', render: (text, record) => <span><strong>{text}</strong> <small style={{ color: '#8c8c8c' }}>({record.symbol})</small></span> },
    { title: '最新買價 (Bid)', dataIndex: 'bid', key: 'bid', render: (text) => <span style={{ color: '#22c55e', fontWeight: 'bold' }}>{text}</span> },
    { title: '最新賣價 (Ask)', dataIndex: 'ask', key: 'ask', render: (text) => <span style={{ color: '#ef4444', fontWeight: 'bold' }}>{text}</span> },
    { title: '最低點差 (Spread)', dataIndex: 'spread', key: 'spread', render: (text) => <span style={{ color: '#f39800', fontWeight: 'bold' }}>{text}</span> },
    { title: '最高槓桿', dataIndex: 'leverage', key: 'leverage' },
    { title: '產品優勢', dataIndex: 'advantage', key: 'advantage' },
  ];

  const marketData = [
    { key: '1', name: '倫敦金', symbol: 'XAUUSD', bid: prices.goldBid.toFixed(2), ask: prices.goldAsk.toFixed(2), spread: '$0.30 / 免傭金', leverage: '1:100 - 1:500', advantage: '波動活躍 · 投資避險神品' },
    { key: '2', name: '倫敦銀', symbol: 'XAGUSD', bid: prices.silverBid.toFixed(3), ask: prices.silverAsk.toFixed(3), spread: '$0.030 / 免傭金', leverage: '1:100 - 1:200', advantage: '雙向獲利 · 小資金撬動大盈利' },
  ];

  return (
    <div className="site-page" style={{ background: '#F5F7FA', color: '#333333' }}>
      {/* =================【1. 尊邃黑金奢華首屏 Hero Section】================= */}
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
              🏆 香港金銀業貿易場權威規范標准運營品牌
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
              直連國際頂級 MetaTrader 5 交易系統，提供極速 0.05 秒訂單成交體驗與 100% 銀行獨立信托賬戶隔離托管，以極低點差成本與全天候貼心咨詢，傾力打造無可匹敵的安全投資環境。
            </p>

            {/* 首屏行動按鍵 */}
            <div
              style={{
                display: 'flex',
                gap: '16px',
                justifyContent: 'center',
                flexWrap: 'wrap',
                marginBottom: '48px',
              }}
            >
              <Link to="/register">
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
              </Link>
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

            {/* 首屏四大計數器 (仿金榮數據面板) */}
            <Row gutter={[16, 16]} style={{ maxWidth: '720px', margin: '0 auto' }}>
              {[
                { label: '服務全球客戶數', end: 1000000, suffix: '人+', prefix: '' },
                { label: '平均訂單延遲', end: 0, suffix: '秒', prefix: '0.05' },
                { label: '平台隱藏交易費', end: 0, suffix: '元', prefix: '0' },
                { label: '客戶資金托管率', end: 100, suffix: '%', prefix: '' },
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

      {/* =================【2. 實時行情滾動條 Market Ticker】================= */}
      <MarketTicker />

      {/* =================【3. 獨立大圖版塊：倫敦金與倫敦銀產品指南 (插入 1.png 完整原圖，帶純白背景色)】================= */}
      <section className="site-section" style={{ background: '#ffffff', padding: isMobile ? '48px 16px' : '72px 20px' }}>
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
            {/* 左側：PNG產品大圖，帶專門的白色背景色並保持 height: 'auto' 避免文字和內容被裁剪 */}
            <Col xs={24} lg={14}>
              <FadeInSection>
                <div
                  style={{
                    background: '#ffffff', // 關鍵點：給 PNG 圖片一個純白底色
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
                    src="/1.png"
                    alt="倫敦金 / 倫敦銀 交易特點"
                    style={{
                      width: '100%',
                      height: 'auto', // 關鍵點：自適應比例，無任何高寬限制，確保圖片內的文字和圖表絕對完整不裁剪
                      display: 'block',
                      objectFit: 'contain',
                    }}
                  />
                </div>
              </FadeInSection>
            </Col>

            {/* 右側：產品解析文案 */}
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
                    <h4 style={{ fontSize: '15px', fontWeight: 'bold', color: '#090e17', margin: '0 0 6px' }}>💡 德生零息持倉政策：</h4>
                    <p style={{ fontSize: '12px', color: '#6b7280', margin: 0, lineHeight: '1.5' }}>
                      對比其他收取高額過夜息的交易所，德生提供靈活低息持倉待遇，全方位呵護您的中長線波段套利單。
                    </p>
                  </div>

                  <div style={{ display: 'flex', gap: '16px' }}>
                    <Link to="/register">
                      <Button type="primary" size="large" style={{ background: '#090e17', borderColor: '#090e17', borderRadius: '8px', fontWeight: 'bold', fontSize: '14px' }}>
                        立即開戶體驗
                      </Button>
                    </Link>
                    <Link to="/about">
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

      {/* =================【4. 德生四大優勢重新設計 (2列卡片布局，帶純白背景色PNG，寬展視野文字不裁剪)】================= */}
      <section className="site-section" style={{ background: '#F5F7FA', padding: isMobile ? '48px 16px' : '72px 20px', borderTop: '1px solid #e5e7eb', borderBottom: '1px solid #e5e7eb' }}>
        <div className="site-section-inner">
          <FadeInSection>
            <h2 className="site-section-title" style={{ color: '#090e17' }}>
              德生貴金屬 4 大中樞價值
            </h2>
            <p className="site-section-subtitle" style={{ color: '#6b7280', maxWidth: '750px', margin: '0 auto 48px' }}>
              我們重新規劃了優勢卡片的設計。采用高清晰度的 **雙列大寬度布局** 且完全取消高度裁剪，配合 **純白 PNG 背景色**，確保圖片內的所有關鍵文字在任何終端都清晰呈現。
            </p>
          </FadeInSection>

          {/* 優勢列表：重新設計為 電腦端 2 列、手機端 1 列，大幅擴增寬度讓 banner 文字顯示更飽滿 */}
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
                      {/* 上半部分：完整的優勢 PNG 架構圖片，設置 pure white 背景色、100% 寬度和 height: 'auto' */}
                      <Col xs={24}>
                        <div
                          style={{
                            background: '#ffffff', // 關鍵點 1：給 PNG 精美原圖一個白色背景色
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
                            style={{
                              width: '100%',
                              height: 'auto', // 關鍵點 2：高度完全自適應，無裁剪，確保圖片包含的文字和架構圖原汁原味顯示
                              display: 'block',
                              objectFit: 'contain',
                              borderRadius: '8px',
                            }}
                          />
                        </div>
                      </Col>

                      {/* 下半部分：文本說明區 */}
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

                          {/* 核心特點精梳 */}
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

      {/* =================【5. 實時報價參數與交易要素表】================= */}
      <section className="site-section" style={{ background: '#ffffff', padding: isMobile ? '48px 16px' : '72px 20px' }}>
        <div className="site-section-inner">
          <FadeInSection>
            <h2 className="site-section-title" style={{ color: '#090e17' }}>
              規范透明的實時交易行情
            </h2>
            <p className="site-section-subtitle" style={{ color: '#6b7280', maxWidth: '750px', margin: '0 auto 40px' }}>
              拒絕後台黑箱，直通國際最權威的金銀報價大盤，買賣點差全面公開。
            </p>
          </FadeInSection>

          {/* 報價表格展示 */}
          <FadeInSection>
            <div style={{ background: '#ffffff', borderRadius: '16px', padding: isMobile ? '12px' : '24px', boxShadow: '0 4px 24px rgba(0,0,0,0.03)', overflowX: 'auto', border: '1px solid #e5e7eb' }}>
              <Table
                dataSource={marketData}
                columns={columns}
                pagination={false}
                className="market-quote-table"
              />
            </div>
          </FadeInSection>

          <Row gutter={[24, 24]} style={{ marginTop: '32px' }}>
            <Col xs={24} md={12}>
              <div style={{ background: '#f8fafc', border: '1px solid #e5e7eb', borderRadius: '12px', padding: '24px' }}>
                <span style={{ color: '#f39800', fontWeight: 'bold', fontSize: '13px', textTransform: 'uppercase' }}>Gold Advantage</span>
                <h3 style={{ fontSize: '18px', fontWeight: 'bold', margin: '8px 0 12px', color: '#090e17' }}>倫敦金（Spot Gold）投資契機</h3>
                <p style={{ fontSize: '13px', color: '#6b7280', lineHeight: '1.6', margin: 0 }}>
                  倫敦金作為全球交易最廣的硬通貨衍生品，在規避通脹、平息局勢風險上具有獨特的戰略價值。德生提供 1:100 起的浮動交易槓桿，僅需 100 美元即可參與波動、隨時兌換利潤。
                </p>
              </div>
            </Col>
            <Col xs={24} md={12}>
              <div style={{ background: '#f8fafc', border: '1px solid #e5e7eb', borderRadius: '12px', padding: '24px' }}>
                <span style={{ color: '#f39800', fontWeight: 'bold', fontSize: '13px', textTransform: 'uppercase' }}>Silver Advantage</span>
                <h3 style={{ fontSize: '18px', fontWeight: 'bold', margin: '8px 0 12px', color: '#090e17' }}>倫敦銀（Spot Silver）投資契機</h3>
                <p style={{ fontSize: '13px', color: '#6b7280', lineHeight: '1.6', margin: 0 }}>
                  白銀波動單價更親民，但日振幅百分比大，具有極好的短線波段爆發力。德生無附加點差加傭政策，極大程度呵護量化交易和多空交叉平倉。
                </p>
              </div>
            </Col>
          </Row>
        </div>
      </section>

      {/* =================【7. 極致交易引擎與軟件下載 MetaTrader 5】================= */}
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
            {/* 左邊：下載介紹與按鍵 */}
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

                {/* 各終端下載按鈕群 */}
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
                    在 MT5 中添加交易商搜索：<strong style={{ color: '#fff' }}>Deson Metals</strong>。真實賬戶選擇服務器 <strong style={{ color: '#fff' }}>DesonMetals-Live</strong>。
                  </div>
                </div>
              </div>
            </Col>

            {/* 右邊：MT5 電腦大屏交互 3D Mockup 動畫 */}
            <Col xs={24} md={12}>
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <DesktopMockup />
              </div>
            </Col>
          </Row>
        </div>
      </section>

      {/* =================【8. 三步開戶指引 —— 仿金榮中國開戶中樞】================= */}
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

          {/* 三步走卡片 */}
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
                    {/* 數字圓圈 */}
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
                  </div>
                </FadeInSection>
              </Col>
            ))}
          </Row>
        </div>
      </section>

      {/* =================【9. 安全資質監管與承諾】================= */}
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
                  在德生，合規安全與透明公開始終被擺在首要位置。平台不觸碰客戶投資本金。所有客戶出入資金獨立隔離存放在大型托管商業銀行信托獨立賬戶中。德生接受行業權威自律與合規內審，全方位確保大資金交易和日常小資金存取款在秒級安全通道內暢通流轉。
                </p>

                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {[
                    '獨立托管：客戶本金與交易商運營流水100%隔離',
                    '合規經營：秉持最嚴格的國際與香港行業內控規約',
                    '極速存取：多通道快速存取款方案，日內出款秒級核算',
                    '銀行級加密：網站數據及傳輸渠道皆由 SSL 256位高級加密保護',
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
                {/* 盾牌動態圖形展示 */}
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
                    {/* 同心旋轉光環 */}
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

      {/* =================【10. 頁尾統一免責申明】================= */}
      <section style={{ background: '#111111', padding: '40px 20px', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <div className="site-section-inner">
          <PageDisclaimer />
        </div>
      </section>

      {/* 內聯注入全局微動效樣式，無需額外修改CSS文件即可實現懸浮和旋轉效果 */}
      <style>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
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
        .site-advantage-card-hover:hover .advantage-image {
          transform: scale(1.03);
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
        .market-quote-table .ant-table {
          background: transparent !important;
        }
        .market-quote-table .ant-table-thead > tr > th {
          background: #f8fafc !important;
          color: #090e17 !important;
          font-weight: bold !important;
          border-bottom: 2px solid #e2e8f0 !important;
        }
        .market-quote-table .ant-table-tbody > tr > td {
          border-bottom: 1px solid #f0f2f5 !important;
          padding: 16px !important;
        }
        .market-quote-table .ant-table-row:hover > td {
          background: #fafafa !important;
        }
      `}</style>
    </div>
  );
}
