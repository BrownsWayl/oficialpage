import React from 'react';
import { Card, Row, Col, Timeline, Space, Tag } from 'antd';
import {
  SafetyCertificateOutlined,
  ThunderboltOutlined,
  GlobalOutlined,
  TeamOutlined,
  TrophyOutlined,
  AimOutlined,
  EyeOutlined,
  HeartOutlined,
  EnvironmentOutlined,
  PhoneOutlined,
  MailOutlined,
} from '@ant-design/icons';
import { FadeInSection, PageDisclaimer } from '../components/site/SiteSections';
import '../styles/sitePages.css';

export default function AboutPage() {
  const containerStyle = {
    background: '#F5F7FA',
    color: '#333333',
    width: '100%',
    minHeight: '100%',
  };

  // 1. 公司核心數據
  const stats = [
    { label: '累計服務全球客戶', value: '1,000,000', suffix: '+' },
    { label: '訂單極速執行時間', value: '0.05', suffix: '秒' },
    { label: '全天候專業客服支持', value: '24/7', suffix: '' },
    { label: '資金安全隔離存放', value: '100', suffix: '%' },
  ];

  // 2. 德生核心優勢 (Why Choose Us)
  const advantages = [
    {
      icon: <SafetyCertificateOutlined style={{ color: '#f39800' }} />,
      title: '權威牌照與合規監管',
      desc: '我們嚴格遵守國際金融行業監管體系，在相關法律框架和行業公約指導下合法經營，確保平台的合規性與權威信譽。',
    },
    {
      icon: <ThunderboltOutlined style={{ color: '#f39800' }} />,
      title: '極速交易引擎 (MT5)',
      desc: '采用全球領先的 MetaTrader 5 (MT5) 交易系統，極速成交，零延遲、零滑點，全方位保障每一筆投資訂單。',
    },
    {
      icon: <GlobalOutlined style={{ color: '#f39800' }} />,
      title: '海量流動性與極低價差',
      desc: '直接對接國際一線流提供商，提供深厚的市場深度、超低點差以及透明的價格環境，大幅降低用戶的交易成本。',
    },
    {
      icon: <TeamOutlined style={{ color: '#f39800' }} />,
      title: '一對一 24/7 專屬服務',
      desc: '具備多年金融實戰經驗的顧問和多語言客服團隊，24小時在線提供無死角的技術支持和一對一投資咨詢。',
    },
  ];

  // 3. 企業裡程碑
  const milestones = [
    {
      year: '2025',
      title: '品牌成立 & 技術騰飛',
      desc: '德生金業有限公司德生貴金屬 / Deson Metals）正式在香港成立。推出自研智能風控管理系統，全面對接國際頂級 MetaTrader 5 (MT5) 交易系統。',
    },
    {
      year: '2025',
      title: '深耕亞太 & 會員資質',
      desc: '合規化運營體系日臻健全，秉持香港金銀業貿易場等權威標准，客戶資金全面實現獨立銀行托管，托管率達 100%。',
    },
    {
      year: '2026',
      title: '邁向全球 & 卓越之選',
      desc: '業務向全球多地輻射，累計為超百萬用戶提供全天候貴金屬（倫敦金、倫敦銀）電子化差價合約交易服務，致力於成為行業信譽典范。',
    },
  ];

  return (
    <div className="site-page" style={containerStyle}>
      {/* =================【1. 尊貴深邃暗色 Hero Section】================= */}
      <section
        className="site-hero"
        style={{
          background: 'linear-gradient(135deg, #090e17 0%, #000000 100%)',
          minHeight: '440px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
        }}
      >
        <div className="site-hero-grid" />
        <div className="site-hero-content" style={{ zIndex: 10 }}>
          <div
            style={{
              display: 'inline-block',
              padding: '4px 16px',
              borderRadius: '20px',
              border: '1px solid rgba(243, 152, 0, 0.4)',
              background: 'rgba(243, 152, 0, 0.08)',
              color: '#f39800',
              fontSize: '13px',
              fontWeight: '600',
              marginBottom: '16px',
            }}
          >
            關於德生貴金屬
          </div>
          <h1
            className="site-hero-title"
            style={{
              fontSize: 'clamp(28px, 4.5vw, 48px)',
              fontWeight: '800',
              color: '#ffffff',
              lineHeight: '1.2',
              margin: '0 0 16px',
            }}
          >
            德生貴金屬 <span style={{ color: '#f39800', background: 'none', WebkitTextFillColor: 'initial', textFillColor: 'initial' }}>Deson Metals</span>
          </h1>
          <p
            className="site-hero-desc"
            style={{
              fontSize: '16px',
              color: '#9ca3af',
              maxWidth: '720px',
              margin: '0 auto',
              lineHeight: '1.6',
            }}
          >
            全球數百萬投資者信賴的貴金屬交易平台。依托香港作為世界金融樞紐的法律和行業合規規范，為全球投資者提供公開透明、安全隔離存放的現貨黃金、現貨白銀線上極速投資環境。
          </p>
        </div>
      </section>

      {/* =================【2. 公司簡介（雙列布局仿 jrjr）】================= */}
      <section className="site-section" style={{ background: '#ffffff', padding: '64px 20px' }}>
        <div className="site-section-inner" style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <Row gutter={[40, 40]} align="middle">
            <Col xs={24} md={11}>
              <FadeInSection>
                <div style={{ position: 'relative', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 16px 40px rgba(0, 0, 0, 0.08)' }}>
                  <img
                    src="/12.jpg"
                    alt="德生貴金屬黃金交易環境"
                    style={{ width: '100%', height: 'auto', display: 'block', transition: 'transform 0.4s ease' }}
                    className="hover-scale-img"
                  />
                  {/* 圖片上的尊貴水印卡片 */}
                  <div
                    style={{
                      position: 'absolute',
                      bottom: '20px',
                      left: '20px',
                      right: '20px',
                      background: 'rgba(0, 0, 0, 0.75)',
                      backdropFilter: 'blur(10px)',
                      padding: '16px 20px',
                      borderRadius: '8px',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                    }}
                  >
                    <div style={{ color: '#f39800', fontWeight: '700', fontSize: '15px', marginBottom: '4px' }}>
                      德生金業有限公司
                    </div>
                    <div style={{ color: '#ffffff', fontSize: '12px', opacity: 0.8, lineHeight: '1.4' }}>
                      註冊編號: 77592183 | 香港實體辦公場所保障客戶每一筆資金的安全與公正。
                    </div>
                  </div>
                </div>
              </FadeInSection>
            </Col>

            <Col xs={24} md={13}>
              <FadeInSection>
                <div style={{ paddingLeft: '8px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                    <div style={{ width: '4px', height: '20px', background: '#f39800', borderRadius: '2px' }} />
                    <span style={{ color: '#f39800', fontSize: '15px', fontWeight: '700', letterSpacing: '1px' }}>COMPANY PROFILE</span>
                  </div>
                  <h2 style={{ fontSize: '28px', fontWeight: '700', color: '#111827', margin: '0 0 20px', lineHeight: '1.3' }}>
                    德生貴金屬 —— 全球高標准貴金屬交易機構
                  </h2>
                  <div style={{ fontSize: '15px', color: '#4b5563', lineHeight: '1.8', display: 'flex', flexDirection: 'column', gap: '14px' }}>
                    <p style={{ margin: 0 }}>
                      德生金業有限公司（簡稱「<strong>德生貴金屬</strong>」 / 「<strong>Deson Metals</strong>」）總部位於國際三大金融中心之一的香港。我們是一家由資深金融風控、國際極速訂單結算技術及貴金屬現貨交收專家聯合打造的頂級電子交易商。
                    </p>
                    <p style={{ margin: 0 }}>
                      自成立起，公司始終秉持「<strong>至誠經營、合規風控、安全合規</strong>」的發展方針。平台重點提供現貨黃金（倫敦金）、現貨白銀（倫敦銀）電子化合約交易，嚴格根據香港完善的金融法律規范及相關行業貿易場公約運作。我們以極度透明的實時報價和全方位的槓桿交易工具，助力全球零售投資者與專業機構靈活管理資產。
                    </p>
                    <p style={{ margin: 0 }}>
                      我們全天候采用備受好評的 <strong>MetaTrader 5 (MT5)</strong> 旗艦系統。通過強大的硬件數據中心和低延時網關，直連國際一線清算行，大幅壓縮點差，確保在行情波動劇烈的非農等重要財經時間，客戶訂單均能實現極速穩定成交。
                    </p>
                  </div>
                </div>
              </FadeInSection>
            </Col>
          </Row>
        </div>
      </section>

      {/* =================【3. 權威證書與行業資質（榮譽資質 + 海關證明）】================= */}
      <section className="site-section" style={{ background: '#F5F7FA', padding: '64px 20px', borderTop: '1px solid #e5e7eb', borderBottom: '1px solid #e5e7eb' }}>
        <div className="site-section-inner" style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '44px' }}>
            <h2 style={{ fontSize: '28px', fontWeight: '700', color: '#111827', margin: '0 0 8px' }}>合規資質與行業證書</h2>
            <p style={{ fontSize: '15px', color: '#6b7280', margin: 0 }}>迪生貴金屬經過多重合規審計，持有官方認證牌照，為客戶提供100%合規與穩健的交易保障</p>
            <div style={{ width: '50px', height: '3px', background: '#f39800', margin: '12px auto 0' }} />
          </div>

          <Row gutter={[32, 32]} justify="center">
            <Col xs={24} md={12}>
              <FadeInSection>
                <div
                  style={{
                    background: '#ffffff',
                    padding: '28px',
                    borderRadius: '12px',
                    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.04)',
                    border: '1px solid #e5e7eb',
                    textAlign: 'center',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between'
                  }}
                >
                  <div style={{ overflow: 'hidden', borderRadius: '8px', marginBottom: '20px', border: '1px solid #f0f0f0' }}>
                    <img
                      src="/cgse.jpg"
                      alt="榮譽資質"
                      style={{ width: '100%', height: 'auto', display: 'block' }}
                      className="hover-scale-img"
                    />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '18px', fontWeight: '700', color: '#111827', margin: '0 0 8px' }}>榮譽資質證書</h3>
                    <p style={{ fontSize: '14px', color: '#6b7280', margin: 0, lineHeight: '1.6' }}>
                      迪生貴金屬榮獲行業頒發的「卓越貴金屬交易商」及「誠信金融服務商」等合規資質和榮譽，代表了業界對我們服務、風控及信譽的廣泛認可。
                    </p>
                  </div>
                </div>
              </FadeInSection>
            </Col>

            <Col xs={24} md={12}>
              <FadeInSection>
                <div
                  style={{
                    background: '#ffffff',
                    padding: '28px',
                    borderRadius: '12px',
                    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.04)',
                    border: '1px solid #e5e7eb',
                    textAlign: 'center',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between'
                  }}
                >
                  <div style={{ overflow: 'hidden', borderRadius: '8px', marginBottom: '20px', border: '1px solid #f0f0f0' }}>
                    <img
                      src="/customs.png"
                      alt="海關A類貴金屬註冊證明"
                      style={{ width: '100%', height: 'auto', display: 'block' }}
                      className="hover-scale-img"
                    />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '18px', fontWeight: '700', color: '#111827', margin: '0 0 8px' }}>海關A類貴金屬註冊證明</h3>
                    <p style={{ fontSize: '14px', color: '#6b7280', margin: 0, lineHeight: '1.6' }}>
                      迪生貴金屬持有海關A類貴金屬及金銀進出口註冊登記證明，保障線下現貨交割、進出口實物黃金交收以及線上電子合約交易在法律公理框架下的合法完備。
                    </p>
                  </div>
                </div>
              </FadeInSection>
            </Col>
          </Row>
        </div>
      </section>

      {/* =================【4. 品牌使命與願景（仿 jrjr 卡片化）】================= */}
      <section className="site-section" style={{ background: '#F5F7FA', padding: '64px 20px' }}>
        <div className="site-section-inner" style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '44px' }}>
            <h2 style={{ fontSize: '28px', fontWeight: '700', color: '#111827', margin: '0 0 8px' }}>企業理念與品牌精神</h2>
            <div style={{ width: '50px', height: '3px', background: '#f39800', margin: '0 auto' }} />
          </div>

          <Row gutter={[24, 24]}>
            <Col xs={24} md={8}>
              <FadeInSection>
                <div
                  style={{
                    background: '#ffffff',
                    padding: '36px 28px',
                    borderRadius: '12px',
                    boxShadow: '0 4px 18px rgba(0, 0, 0, 0.03)',
                    border: '1px solid #e5e7eb',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                  }}
                >
                  <div style={{ width: '56px', height: '56px', background: 'rgba(243, 152, 0, 0.1)', color: '#f39800', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px', marginBottom: '20px' }}>
                    <AimOutlined />
                  </div>
                  <h3 style={{ fontSize: '18px', fontWeight: '700', color: '#111827', margin: '0 0 12px' }}>品牌使命</h3>
                  <p style={{ fontSize: '14px', color: '#6b7280', lineHeight: '1.6', margin: 0 }}>
                    為全球貴金屬投資者提供最公平透明、超低門檻、極速撮合的電子交易平台。通過技術迭代，讓每個人都能安全、自主地參與國際金融市場交易。
                  </p>
                </div>
              </FadeInSection>
            </Col>

            <Col xs={24} md={8}>
              <FadeInSection>
                <div
                  style={{
                    background: '#ffffff',
                    padding: '36px 28px',
                    borderRadius: '12px',
                    boxShadow: '0 4px 18px rgba(0, 0, 0, 0.03)',
                    border: '1px solid #e5e7eb',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                  }}
                >
                  <div style={{ width: '56px', height: '56px', background: 'rgba(243, 152, 0, 0.1)', color: '#f39800', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px', marginBottom: '20px' }}>
                    <EyeOutlined />
                  </div>
                  <h3 style={{ fontSize: '18px', fontWeight: '700', color: '#111827', margin: '0 0 12px' }}>品牌願景</h3>
                  <p style={{ fontSize: '14px', color: '#6b7280', lineHeight: '1.6', margin: 0 }}>
                    深耕現貨黃金交易服務領域，不斷探索金融科技前沿，將安全系數、交易流動性與服務滿意度做到行業第一，打造最具影響力的國際貴金屬經紀商。
                  </p>
                </div>
              </FadeInSection>
            </Col>

            <Col xs={24} md={8}>
              <FadeInSection>
                <div
                  style={{
                    background: '#ffffff',
                    padding: '36px 28px',
                    borderRadius: '12px',
                    boxShadow: '0 4px 18px rgba(0, 0, 0, 0.03)',
                    border: '1px solid #e5e7eb',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                  }}
                >
                  <div style={{ width: '56px', height: '56px', background: 'rgba(243, 152, 0, 0.1)', color: '#f39800', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px', marginBottom: '20px' }}>
                    <HeartOutlined />
                  </div>
                  <h3 style={{ fontSize: '18px', fontWeight: '700', color: '#111827', margin: '0 0 12px' }}>核心價值觀</h3>
                  <p style={{ fontSize: '14px', color: '#6b7280', lineHeight: '1.6', margin: 0 }}>
                    <strong>至誠守信</strong>：絕無虛假報價，無隱性費用。<br />
                    <strong>合規自律</strong>：自願接受超高標准監管，客戶資金獨立托管。<br />
                    <strong>客戶至上</strong>：全天候專人一對一高效解答。
                  </p>
                </div>
              </FadeInSection>
            </Col>
          </Row>
        </div>
      </section>

      {/* =================【4. 數據看板】================= */}
      <section className="site-section" style={{ background: '#ffffff', padding: '56px 20px' }}>
        <div className="site-section-inner" style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <Row gutter={[24, 24]}>
            {stats.map((s, idx) => (
              <Col xs={12} md={6} key={idx}>
                <div style={{ textAlign: 'center', padding: '16px' }}>
                  <div style={{ fontSize: '13px', color: '#6b7280', marginBottom: '6px' }}>{s.label}</div>
                  <div style={{ fontSize: 'clamp(24px, 3.5vw, 36px)', fontWeight: '800', color: '#111827', display: 'flex', justifyContent: 'center', alignItems: 'baseline' }}>
                    <span style={{ color: '#f39800' }}>{s.value}</span>
                    <span style={{ fontSize: '16px', color: '#f39800', marginLeft: '2px', fontWeight: '600' }}>{s.suffix}</span>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </section>

      {/* =================【5. 四大優勢（仿 jrjr 優勢排版）】================= */}
      <section className="site-section" style={{ background: '#F5F7FA', padding: '64px 20px' }}>
        <div className="site-section-inner" style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '44px' }}>
            <h2 style={{ fontSize: '28px', fontWeight: '700', color: '#111827', margin: '0 0 8px' }}>四大核心交易保障</h2>
            <p style={{ fontSize: '15px', color: '#6b7280', margin: 0 }}>專業級的交易要素配置，助力您穩健捕捉全球黃金市場行情</p>
            <div style={{ width: '50px', height: '3px', background: '#f39800', margin: '12px auto 0' }} />
          </div>

          <Row gutter={[24, 24]}>
            {advantages.map((adv, idx) => (
              <Col xs={24} sm={12} key={idx}>
                <FadeInSection>
                  <div
                    style={{
                      background: '#ffffff',
                      padding: '28px',
                      borderRadius: '10px',
                      boxShadow: '0 4px 12px rgba(0,0,0,0.02)',
                      border: '1px solid #e5e7eb',
                      height: '100%',
                      display: 'flex',
                      gap: '16px',
                    }}
                  >
                    <div style={{ fontSize: '28px', flexShrink: 0, marginTop: '2px' }}>
                      {adv.icon}
                    </div>
                    <div>
                      <h3 style={{ fontSize: '17px', fontWeight: '700', color: '#111827', margin: '0 0 8px' }}>{adv.title}</h3>
                      <p style={{ fontSize: '14px', color: '#6b7280', lineHeight: '1.6', margin: 0 }}>{adv.desc}</p>
                    </div>
                  </div>
                </FadeInSection>
              </Col>
            ))}
          </Row>
        </div>
      </section>

      {/* =================【6. 發展裡程碑時間軸（仿 jrjr 精美軸線）】================= */}
      <section className="site-section" style={{ background: '#ffffff', padding: '64px 20px' }}>
        <div className="site-section-inner" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <h2 style={{ fontSize: '28px', fontWeight: '700', color: '#111827', margin: '0 0 8px' }}>品牌發展歷程</h2>
            <div style={{ width: '50px', height: '3px', background: '#f39800', margin: '0 auto' }} />
          </div>

          <FadeInSection>
            <Timeline
              mode="left"
              items={milestones.map((m) => ({
                label: (
                  <span style={{ fontSize: '20px', fontWeight: '800', color: '#f39800', marginRight: '8px' }}>
                    {m.year}
                  </span>
                ),
                color: '#f39800',
                children: (
                  <div style={{ paddingBottom: '24px', paddingLeft: '8px' }}>
                    <h3 style={{ fontSize: '16px', fontWeight: '700', color: '#111827', margin: '0 0 6px' }}>{m.title}</h3>
                    <p style={{ fontSize: '14px', color: '#6b7280', lineHeight: '1.6', margin: 0 }}>{m.desc}</p>
                  </div>
                ),
              }))}
            />
          </FadeInSection>
        </div>
      </section>

      {/* =================【7. 聯系方式卡片】================= */}
      <section className="site-section" style={{ background: '#F5F7FA', padding: '60px 20px' }}>
        <div className="site-section-inner" style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <Row gutter={[24, 24]}>
            <Col xs={24} md={8}>
              <div style={{ background: '#ffffff', padding: '24px', borderRadius: '10px', border: '1px solid #e5e7eb', textAlign: 'center', height: '100%' }}>
                <EnvironmentOutlined style={{ fontSize: '28px', color: '#f39800', marginBottom: '12px' }} />
                <div style={{ fontSize: '13px', color: '#6b7280', marginBottom: '4px' }}>總部辦公場所</div>
                <div style={{ fontSize: '14px', fontWeight: '600', color: '#111827', lineHeight: '1.4' }}>
                  香港九龍尖沙咀麼地道62號永安廣場12樓1205B室
                </div>
              </div>
            </Col>
            <Col xs={24} md={8}>
              <div style={{ background: '#ffffff', padding: '24px', borderRadius: '10px', border: '1px solid #e5e7eb', textAlign: 'center', height: '100%' }}>
                <PhoneOutlined style={{ fontSize: '28px', color: '#f39800', marginBottom: '12px' }} />
                <div style={{ fontSize: '13px', color: '#6b7280', marginBottom: '4px' }}>官方聯系熱線</div>
                <div style={{ fontSize: '16px', fontWeight: '700', color: '#111827' }}>
                  +852 2882 9868
                </div>
              </div>
            </Col>
            <Col xs={24} md={8}>
              <div style={{ background: '#ffffff', padding: '24px', borderRadius: '10px', border: '1px solid #e5e7eb', textAlign: 'center', height: '100%' }}>
                <MailOutlined style={{ fontSize: '28px', color: '#f39800', marginBottom: '12px' }} />
                <div style={{ fontSize: '13px', color: '#6b7280', marginBottom: '4px' }}>企業客服郵箱</div>
                <div style={{ fontSize: '15px', fontWeight: '600', color: '#111827' }}>
                  cs@desonmetals.com
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </section>

      {/* =================【8. 風險披露條款】================= */}
      <PageDisclaimer />
    </div>
  );
}
