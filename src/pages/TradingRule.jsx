import { Row, Col, Table, Tag, Button } from 'antd';
import {
  SafetyCertificateOutlined,
  ThunderboltOutlined,
  DollarOutlined,
  DashboardOutlined,
  InfoCircleOutlined,
  PieChartOutlined,
  TeamOutlined,
  ArrowRightOutlined,
} from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { FadeInSection, PageDisclaimer } from '../components/site/SiteSections';
import '../styles/sitePages.css';

export default function TradingRule() {
  const containerStyle = {
    background: '#F5F7FA',
    color: '#333333',
    width: '100%',
    minHeight: '100%',
  };

  // 交易細則數據源 (來自 12.doc 表格，並與用戶最新點差 0.24 / 0.04 規格完美融合)
  const rulesColumns = [
    {
      title: '交易細則項目',
      dataIndex: 'ruleName',
      key: 'ruleName',
      width: '30%',
      render: (text) => <strong>{text}</strong>,
    },
    {
      title: '現貨黃金 (XAU/USD)',
      dataIndex: 'goldVal',
      key: 'goldVal',
      width: '35%',
      render: (text, record) => (
        <span style={record.highlight ? { color: '#f39800', fontWeight: 'bold' } : {}}>
          {text}
        </span>
      ),
    },
    {
      title: '現貨白銀 (XAG/USD)',
      dataIndex: 'silverVal',
      key: 'silverVal',
      width: '35%',
      render: (text, record) => (
        <span style={record.highlight ? { color: '#f39800', fontWeight: 'bold' } : {}}>
          {text}
        </span>
      ),
    },
  ];

  const rulesData = [
    { key: '1', ruleName: '合約單位（手）', goldVal: '100 盎司', silverVal: '5000 盎司' },
    { key: '2', ruleName: '點差計算', goldVal: '最低 24 美元', silverVal: '最低 4 美元', highlight: true },
    { key: '3', ruleName: '單手交易保證金', goldVal: '1500 美元', silverVal: '1500 美元' },
    { key: '4', ruleName: '單筆最小波幅', goldVal: '0.01 美元', silverVal: '0.01 美元' },
    { key: '5', ruleName: 'MT5單筆交易量限制', goldVal: '標準帳戶：最小 0.01 手，最大 20 手', silverVal: '標準帳戶：最小 0.01 手，最大 20 手' },
    { key: '6', ruleName: '過夜利率 (買入 / 賣出)', goldVal: '買入 1.25%（年利率）\n賣出 0.75%（年利率）\n買賣均須支付利息 \n 周五三倍利息', silverVal: '買入 1.25%（年利率）\n賣出 0.75%（年利率）\n買賣均須支付利息 \n 周三三倍利息',highlight: true },
    { key: '7', ruleName: '掛單距離限制', goldVal: '至少距離市價 200 點', silverVal: '至少距離市價 200 點' },
    { key: '8', ruleName: '夏令時交易時間 (北京時間)', goldVal: '週一 06:05 至週六 04:50\n(法定節假日及國際休市除外)', silverVal: '週一 06:05 至週六 04:50\n(法定節假日及國際休市除外)' },
    { key: '9', ruleName: '冬令時交易時間 (北京時間)', goldVal: '週一 07:05 至週六 05:50\n(法定節假日及國際休市除外)', silverVal: '週一 07:05 至週六 05:50\n(法定節假日及國際休市除外)' },
    { key: '10', ruleName: '強制平倉機制 (爆倉比例)', goldVal: '平日預付款比例 ≤ 20%\n週末預付款比例 ≤ 200%', silverVal: '平日預付款比例 ≤ 20%\n週末預付款比例 ≤ 200%', highlight: true },
  ];

  // 優勢網格數據
  const whyUsData = [
    { icon: <SafetyCertificateOutlined style={{ color: '#f39800', fontSize: '24px' }} />, title: '直連國際市場', desc: '德生直連國際頂級流動性提供商，保障市場成交的絕對公平與透明。' },
    { icon: <ThunderboltOutlined style={{ color: '#f39800', fontSize: '24px' }} />, title: '0.05秒毫秒級成交', desc: '依託頂尖服務器網絡與流動性專線，在行情劇烈波動時亦能實現 0.05 秒內快速撮合成交。' },
    { icon: <DollarOutlined style={{ color: '#f39800', fontSize: '24px' }} />, title: '0額外佣金費率', desc: '我們承諾除點差以外不加收任何額外的平台交易佣金，幫助投資者將交易持倉成本降到最低。' },
    { icon: <DashboardOutlined style={{ color: '#f39800', fontSize: '24px' }} />, title: '1:100起靈活槓桿', desc: '提供極具競爭力的貴金屬合約保證金比例，以高資金利用效率靈活放大投資機會與回報。' },
    { icon: <PieChartOutlined style={{ color: '#f39800', fontSize: '24px' }} />, title: '資金安全隔離存儲', desc: '客戶資金存放在獨立安全賬戶中，與公司運營賬戶完全隔離，全天候保障資產純粹安全。' },
    { icon: <TeamOutlined style={{ color: '#f39800', fontSize: '24px' }} />, title: '1對1 24/7 專屬服務', desc: '配備經驗豐沛的多語言資深客服導師，24小時極速解答交易規則、平台操作等一切疑惑。' },
  ];

  return (
    <div className="site-page" style={containerStyle}>
      {/* =================【1. 尊貴深邃暗色 Hero Section】================= */}
      <section
        className="site-hero"
        style={{
          background: 'linear-gradient(135deg, #090e17 0%, #000000 100%)',
          padding: '60px 20px',
          textAlign: 'center',
          position: 'relative',
        }}
      >
        <div className="site-hero-grid" style={{ opacity: 0.1 }} />
        <div className="site-hero-glow" style={{ background: 'radial-gradient(circle, rgba(243, 152, 0, 0.1) 0%, transparent 70%)' }} />

        <div className="site-section-inner" style={{ zIndex: 10 }}>
          <Tag color="#f39800" style={{ color: '#000000', fontWeight: 'bold', borderRadius: '12px', padding: '2px 14px', marginBottom: '16px' }}>
            CONTRACT SPECIFICATIONS
          </Tag>
          <h1 style={{ fontSize: '36px', fontWeight: '800', color: '#ffffff', margin: '0 0 16px' }}>
            貴金屬合約交易細則
          </h1>
          <p style={{ fontSize: '15px', color: '#9ca3af', maxWidth: '680px', margin: '0 auto', lineHeight: '1.6' }}>
            德生貴金屬秉承規范、透明、合規的發展理念，在此向所有投資者公示現貨黃金（倫敦金）及現貨白銀（倫敦銀）交易合約細則，確保每一筆委託交易公平公正。
          </p>
        </div>
      </section>

      {/* =================【2. 合約細則表格核心板塊 (仿金榮中國卡片封裝)】================= */}
      <section className="site-section" style={{ background: '#ffffff', padding: '56px 20px' }}>
        <div className="site-section-inner" style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <FadeInSection>
            <div style={{ textAlign: 'center', marginBottom: '40px' }}>
              <Tag color="rgba(243, 152, 0, 0.1)" style={{ color: '#f39800', fontWeight: 'bold', border: 'none', marginBottom: '12px' }}>
                TRADING PARAMETERS
              </Tag>
              <h2 style={{ fontSize: '28px', fontWeight: 'bold', color: '#090e17', margin: '0' }}>
                標準帳戶合約細則
              </h2>
              <p style={{ color: '#6b7280', fontSize: '14px', marginTop: '8px' }}>
                德生保證所有點差、保證金比例及過夜利息均公開透明，無任何隱性費用。
              </p>
            </div>

            {/* 表格容器 */}
            <div
              style={{
                boxShadow: '0 12px 40px rgba(0, 0, 0, 0.05)',
                borderRadius: '16px',
                border: '1px solid #e5e7eb',
                overflow: 'hidden',
                background: '#ffffff',
              }}
            >
              <Table
                columns={rulesColumns}
                dataSource={rulesData}
                pagination={false}
                bordered
                style={{ whiteSpace: 'pre-line' }}
                className="trading-rules-table"
              />
            </div>


          </FadeInSection>
        </div>
      </section>

      {/* =================【3. 為什麼選擇德生貴金屬板塊】================= */}
      <section className="site-section" style={{ background: '#F5F7FA', padding: '64px 20px', borderTop: '1px solid #e5e7eb', borderBottom: '1px solid #e5e7eb' }}>
        <div className="site-section-inner" style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <FadeInSection>
            <div style={{ textAlign: 'center', marginBottom: '48px' }}>
              <h2 style={{ fontSize: '28px', fontWeight: 'bold', color: '#090e17', margin: '0 0 8px' }}>
                為什麼選擇德生貴金屬交易？
              </h2>
              <p style={{ color: '#6b7280', fontSize: '14px', maxWidth: '600px', margin: '0 auto' }}>
                秉持國際高標準合規運營體系，為您提供無可挑剔的專業貴金屬電子合約交易服務。
              </p>
            </div>

            {/* 6格優勢網格 */}
            <Row gutter={[24, 24]}>
              {whyUsData.map((item, idx) => (
                <Col xs={24} sm={12} md={8} key={idx}>
                  <div
                    style={{
                      background: '#ffffff',
                      border: '1px solid #e5e7eb',
                      borderRadius: '16px',
                      padding: '28px 24px',
                      height: '100%',
                      boxShadow: '0 4px 20px rgba(0,0,0,0.01)',
                      transition: 'all 0.3s ease',
                    }}
                    className="site-advantage-card-hover"
                  >
                    <div
                      style={{
                        width: '48px',
                        height: '48px',
                        borderRadius: '12px',
                        background: 'rgba(243, 152, 0, 0.08)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginBottom: '16px',
                      }}
                    >
                      {item.icon}
                    </div>
                    <h3 style={{ fontSize: '16.5px', fontWeight: 'bold', color: '#090e17', marginBottom: '8px' }}>
                      {item.title}
                    </h3>
                    <p style={{ fontSize: '13px', color: '#6b7280', lineHeight: '1.65', margin: 0 }}>
                      {item.desc}
                    </p>
                  </div>
                </Col>
              ))}
            </Row>
          </FadeInSection>
        </div>
      </section>

      {/* =================【4. 呼籲行動 CTA 開戶轉化】================= */}
      <section
        className="site-section"
        style={{
          background: 'linear-gradient(135deg, #090e17 0%, #02060f 100%)',
          color: '#ffffff',
          padding: '64px 20px',
          textAlign: 'center',
          position: 'relative',
        }}
      >
        <div className="site-hero-grid" style={{ opacity: 0.08 }} />
        <div className="site-section-inner" style={{ zIndex: 10, position: 'relative' }}>
          <FadeInSection>
            <h2 style={{ fontSize: '28px', fontWeight: 'bold', color: '#ffffff', margin: '0 0 16px' }}>
              只需幾分鐘，即可在全球最大市場開立頭寸
            </h2>
            <p style={{ color: '#9ca3af', fontSize: '14.5px', maxWidth: '600px', margin: '0 auto 32px', lineHeight: '1.6' }}>
              德生提供免費的模擬交易賬號以及流暢的實盤開戶通道。即刻登陸頂尖 MT5 交易終端，開啟您的貴金屬合約智投之旅。
            </p>

            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/register">
                <Button
                  type="primary"
                  size="large"
                  style={{
                    height: '48px',
                    padding: '0 28px',
                    borderRadius: '24px',
                    fontSize: '15px',
                    fontWeight: 'bold',
                    background: '#f39800',
                    color: '#000000',
                    border: 'none',
                    boxShadow: '0 4px 15px rgba(243, 152, 0, 0.3)',
                  }}
                >
                  立即開立實盤賬戶 <ArrowRightOutlined />
                </Button>
              </Link>
              <Link to="/appdown">
                <Button
                  ghost
                  size="large"
                  style={{
                    height: '48px',
                    padding: '0 28px',
                    borderRadius: '24px',
                    fontSize: '15px',
                    fontWeight: 'bold',
                    color: '#ffffff',
                    borderColor: 'rgba(255,255,255,0.3)',
                  }}
                >
                  下載 MT5 電子終端
                </Button>
              </Link>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* =================【5. 免責聲明】================= */}
      <section style={{ background: '#111111', padding: '40px 20px' }}>
        <div className="site-section-inner">
          <PageDisclaimer />
        </div>
      </section>
    </div>
  );
}
