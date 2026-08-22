import React, { useState } from 'react';
import { Row, Col, Card, Tabs, Button, Steps, Timeline } from 'antd';
import {
  DownloadOutlined,
  WindowsOutlined,
  AppleOutlined,
  AndroidOutlined,
  SafetyCertificateOutlined,
  ThunderboltOutlined,
  LineChartOutlined,
  CustomerServiceOutlined,
  ArrowRightOutlined,
  ScanOutlined,
  CheckCircleOutlined,
} from '@ant-design/icons';
import {
  FadeInSection,
  PhoneMockup,
  DesktopMockup,
  PageDisclaimer,
} from '../components/site/SiteSections';
import '../styles/sitePages.css';

export default function AppDown() {
  const [activeTab, setActiveTab] = useState('mobile');

  const containerStyle = {
    background: '#F5F7FA',
    color: '#333333',
    width: '100%',
    minHeight: '100%',
  };

  // 1. 軟件下載節點信息 (已完全同步至 desonmetals.net 官方最新下載節點)
  const downloadNodes = {
    pc: [
      { name: '官方安全下載節點 A (高配物理節點)', version: 'v5.0.44', size: '3.4 MB', type: 'Windows EXE', url: 'desonpreciousmetals5setup.exe' },
      { name: '高速備份下載節點 B (多線CDN節點)', version: 'v5.0.44', size: '3.4 MB', type: 'Windows EXE', url: 'desonpreciousmetals5setup.exe' },
    ],
    ios: [
      { name: 'App Store 官方下載', version: 'v4.9.53', size: '24.1 MB', type: 'iOS', url: 'https://download.terminal.free/cdn/mobile/mt5/ios?server=DesonPreciousMetals-Trade' },
    ],
    android: [
      { name: '官方 APK 安裝包', version: 'v4.9.53', size: '32.8 MB', type: 'Android APK', url: 'metatrader5.apk' },
      { name: 'Google Play 官方下載', version: 'v4.9.53', size: '32.8 MB', type: 'Android', url: 'metatrader5.apk' },
    ]
  };

  return (
    <div className="site-page" style={containerStyle}>
      {/* =================【1. 尊貴深邃暗色 Hero Section】================= */}
      <section
        className="site-hero"
        style={{
          background: 'linear-gradient(135deg, #090e17 0%, #02060f 100%)',
          minHeight: '520px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          padding: '80px 20px',
        }}
      >
        <div className="site-hero-grid" />
        <div className="site-hero-content" style={{ zIndex: 10, maxWidth: '1200px', width: '100%', textAlign: 'left' }}>
          <Row gutter={[40, 40]} align="middle">
            <Col xs={24} lg={13}>
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
                德生貴金屬官方多元化交易終端
              </div>
              <h1
                style={{
                  fontSize: 'clamp(32px, 4.5vw, 48px)',
                  fontWeight: '800',
                  color: '#ffffff',
                  lineHeight: '1.2',
                  margin: '0 0 20px',
                }}
              >
                德生貴金屬 MT5 <br />
                <span style={{ color: '#f39800' }}>隨時隨地，極速交易</span>
              </h1>
              <p
                style={{
                  fontSize: '16px',
                  color: '#9ca3af',
                  maxWidth: '640px',
                  lineHeight: '1.7',
                  margin: '0 0 32px',
                }}
              >
                依托全球頂級金融技術和極速訂單清算引擎，全新上線 MetaTrader 5 (MT5) 客戶端。為您提供秒級行情、大師級圖表指標及100%獨立安全隔離保障。讓您不論在PC大屏還是掌上移動端，均能掌握全球交易先機。
              </p>

              {/* 官方極速下載入口 */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '24px',
                  flexWrap: 'wrap',
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  padding: '24px',
                  borderRadius: '12px',
                  backdropFilter: 'blur(10px)',
                  maxWidth: '560px',
                }}
              >
                <div style={{ flex: 1, minWidth: '240px' }}>
                  <div style={{ color: '#ffffff', fontSize: '16px', fontWeight: '700', marginBottom: '8px' }}>官方多平台客戶端極速下載</div>
                  <div style={{ color: '#9ca3af', fontSize: '13.5px', lineHeight: '1.6', marginBottom: '16px' }}>
                    免去應用商店繁瑣查找。直接選擇您的終端設備，點擊下方按鈕即可立即建立官方安全、原裝的高速下載任務。
                  </div>
                  <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                    <a href="/desonpreciousmetals5setup.exe" target="_blank" rel="noopener noreferrer" className="site-btn-primary" style={{ height: '38px', padding: '0 18px', fontSize: '13px', background: '#f39800', color: '#000', fontWeight: 'bold', display: 'inline-flex', alignItems: 'center', borderRadius: '4px' }}>
                      <WindowsOutlined style={{ marginRight: '6px' }} /> PC 電腦端下載
                    </a>
                    <a href="#download-tabs" className="site-btn-outline" style={{ height: '38px', padding: '0 18px', fontSize: '13px', border: '1px solid rgba(255,255,255,0.3)', color: '#fff', display: 'inline-flex', alignItems: 'center', borderRadius: '4px' }}>
                      移動手機端下載 <ArrowRightOutlined style={{ marginLeft: '6px' }} />
                    </a>
                  </div>
                </div>
              </div>
            </Col>

            <Col xs={24} lg={11} style={{ display: 'flex', justifyContent: 'center' }}>
              <FadeInSection>
                {/* 豪華 Mockup 設備展示 */}
                <div style={{ position: 'relative' }}>
                  <PhoneMockup price="2658.45" isUp={true} />
                  {/* 漂浮的榮譽或速度標簽 */}
                  <div
                    style={{
                      position: 'absolute',
                      top: '40px',
                      left: '-20px',
                      background: 'rgba(243, 152, 0, 0.9)',
                      color: '#000000',
                      padding: '8px 16px',
                      borderRadius: '8px',
                      fontWeight: '700',
                      fontSize: '13px',
                      boxShadow: '0 8px 24px rgba(243, 152, 0, 0.3)',
                      zIndex: 10,
                      backdropFilter: 'blur(4px)',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                    }}
                  >
                    🚀 毫秒級訂單秒成交
                  </div>
                  <div
                    style={{
                      position: 'absolute',
                      bottom: '60px',
                      right: '-20px',
                      background: 'rgba(9, 14, 23, 0.85)',
                      color: '#ffffff',
                      padding: '8px 16px',
                      borderRadius: '8px',
                      fontWeight: '600',
                      fontSize: '12px',
                      boxShadow: '0 8px 24px rgba(0, 0, 0, 0.5)',
                      zIndex: 10,
                      backdropFilter: 'blur(4px)',
                      border: '1px solid rgba(243, 152, 0, 0.3)',
                    }}
                  >
                    🔒 100% 資金獨立安全隔離
                  </div>
                </div>
              </FadeInSection>
            </Col>
          </Row>
        </div>
      </section>

      {/* =================【2. 仿金榮中國：4大核心特性（配圖 9, 10, 11, 7）】================= */}
      <section style={{ padding: '80px 20px', background: '#ffffff' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          {/* 欄目頭部 */}
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2 style={{ fontSize: '32px', fontWeight: '800', color: '#111827', margin: '0 0 12px', letterSpacing: '1px' }}>
              重塑交易標准 · 掌握全球廣度
            </h2>
            <p style={{ fontSize: '16px', color: '#6b7280', maxWidth: '720px', margin: '0 auto', lineHeight: '1.6' }}>
              德生官方將領先的電子撮合架構、嚴格的風險控制體系和極致的技術完美結合。以下四大模塊充分展示了德生貴金屬在移動端和桌面端的頂級專業配置。
            </p>
            <div style={{ width: '60px', height: '4px', background: '#f39800', margin: '16px auto 0', borderRadius: '2px' }} />
          </div>

          {/* 特性 1: 隨時隨地，掌握極速行情 (使用 9.webp) - 左右交替 */}
          <Row gutter={[48, 48]} align="middle" style={{ marginBottom: '80px' }}>
            <Col xs={24} md={12}>
              <FadeInSection>
                <div
                  style={{
                    position: 'relative',
                    borderRadius: '16px',
                    overflow: 'hidden',
                    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.08)',
                    border: '1px solid #e5e7eb',
                  }}
                >
                  <img
                    src="/9.webp"
                    alt="德生貴金屬移動APP"
                    style={{ width: '100%', height: 'auto', display: 'block', transition: 'transform 0.4s ease' }}
                    className="hover-scale-img"
                  />
                  {/* 水印標識 */}
                  <div
                    style={{
                      position: 'absolute',
                      top: '20px',
                      left: '20px',
                      background: 'rgba(0, 0, 0, 0.7)',
                      padding: '4px 12px',
                      borderRadius: '4px',
                      color: '#f39800',
                      fontSize: '12px',
                      fontWeight: '700',
                      letterSpacing: '1px',
                    }}
                  >
                    MOBILE CLIENT
                  </div>
                </div>
              </FadeInSection>
            </Col>
            <Col xs={24} md={12}>
              <FadeInSection>
                <div style={{ paddingLeft: '12px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                    <div style={{ width: '4px', height: '18px', background: '#f39800', borderRadius: '2px' }} />
                    <span style={{ color: '#f39800', fontSize: '14px', fontWeight: '700', letterSpacing: '1px' }}>急速交易體驗</span>
                  </div>
                  <h3 style={{ fontSize: '26px', fontWeight: '700', color: '#111827', margin: '0 0 16px' }}>
                    全新移動客戶端：毫秒級一鍵秒極速下單
                  </h3>
                  <div style={{ fontSize: '15px', color: '#4b5563', lineHeight: '1.8', display: 'flex', flexDirection: 'column', gap: '14px' }}>
                    <p style={{ margin: 0 }}>
                      依托頂級流動性中樞與強大的國際服務器網絡，<strong>德生自研移動APP（支持iOS與Android）</strong> 實現了全天候毫秒級行情即時同步。
                    </p>
                    <p style={{ margin: 0 }}>
                      用戶只需輕松一按，即可在劇烈波動的非農、央行利率決議等大行情下完成<strong>秒級開平倉，零延遲，無滑點風險</strong>。內置智能止損、追蹤止損，無論您身處何地，均可實現專業高效的現貨黃金、現貨白銀交易。
                    </p>
                    <ul style={{ paddingLeft: '20px', margin: '8px 0 0', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                      <li>⚡ 毫秒級訂單極速執行，搶佔行情價格最前沿</li>
                      <li>📈 深度直連國際一線清算行，點差透明，交易成本極低</li>
                      <li>🔔 智能離線價位報警，不遺漏任何重大突破機遇</li>
                    </ul>
                  </div>
                </div>
              </FadeInSection>
            </Col>
          </Row>

          {/* 特性 2: 電腦端 MT5，專業指標全解析 (使用 10.webp) - 左右交替 (文字在左，圖片在右) */}
          <Row gutter={[48, 48]} align="middle" style={{ marginBottom: '80px' }}>
            <Col xs={24} md={{ span: 12, order: 2 }}>
              <FadeInSection>
                <div
                  style={{
                    position: 'relative',
                    borderRadius: '16px',
                    overflow: 'hidden',
                    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.08)',
                    border: '1px solid #e5e7eb',
                  }}
                >
                  <img
                    src="/10.webp"
                    alt="德生電腦端MT5"
                    style={{ width: '100%', height: 'auto', display: 'block', transition: 'transform 0.4s ease' }}
                    className="hover-scale-img"
                  />
                  <div
                    style={{
                      position: 'absolute',
                      top: '20px',
                      left: '20px',
                      background: 'rgba(0, 0, 0, 0.7)',
                      padding: '4px 12px',
                      borderRadius: '4px',
                      color: '#f39800',
                      fontSize: '12px',
                      fontWeight: '700',
                      letterSpacing: '1px',
                    }}
                  >
                    PC TERMINAL (MT5)
                  </div>
                </div>
              </FadeInSection>
            </Col>
            <Col xs={24} md={{ span: 12, order: 1 }}>
              <FadeInSection>
                <div style={{ paddingRight: '12px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                    <div style={{ width: '4px', height: '18px', background: '#f39800', borderRadius: '2px' }} />
                    <span style={{ color: '#f39800', fontSize: '14px', fontWeight: '700', letterSpacing: '1px' }}>專業畫線分析</span>
                  </div>
                  <h3 style={{ fontSize: '26px', fontWeight: '700', color: '#111827', margin: '0 0 16px' }}>
                    電腦端 MetaTrader 5：大師級專業技術透視
                  </h3>
                  <div style={{ fontSize: '15px', color: '#4b5563', lineHeight: '1.8', display: 'flex', flexDirection: 'column', gap: '14px' }}>
                    <p style={{ margin: 0 }}>
                      最受全球專業技術流派、機構投資者信賴的經典旗艦終端 —— <strong>德生電腦端 MT5 系統</strong> 經過全面的中文定制與底層速度加速優化。
                    </p>
                    <p style={{ margin: 0 }}>
                      終端集成 <strong>30+ 種主流技術分析指標、24 種輔助趨勢畫線工具、以及多達 21 種 K 線時間分析周期</strong>。支持同屏多屏窗口任意排版、一鍵多單對鎖、市場深度 (DOM) 以及專業的 EA (Expert Advisor) 自動化策略腳本測試，為您開啟高維度分析視角。
                    </p>
                    <ul style={{ paddingLeft: '20px', margin: '8px 0 0', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                      <li>💻 完美支持 Windows 7/10/11 多分屏與高分辨率畫線分析</li>
                      <li>🎨 高度自由定制指標，極速載入歷史分鐘級數據</li>
                      <li>⚙️ 獨家支持智能自動化量化交易與量化策略精准歷史回测</li>
                    </ul>
                  </div>
                </div>
              </FadeInSection>
            </Col>
          </Row>

          {/* 特性 3: 權威正規平台，安全放心交易 (使用 7.webp) - 左右交替 (圖片在左，文字在右) */}
          <Row gutter={[48, 48]} align="middle" style={{ marginBottom: '80px' }}>
            <Col xs={24} md={12}>
              <FadeInSection>
                <div
                  style={{
                    position: 'relative',
                    borderRadius: '16px',
                    overflow: 'hidden',
                    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.08)',
                    border: '1px solid #e5e7eb',
                 
                  }}
                >
                  <img
                    src="/7.png"
                    alt="德生合規資質與安全保障"
                    style={{
                      width: '100%',
                      height: 'auto',
                      display: 'block',
                      transition: 'transform 0.4s ease',
                 
                    }}
                    className="hover-scale-img"
                  />
                  <div
                    style={{
                      position: 'absolute',
                      top: '20px',
                      left: '20px',
                      background: 'rgba(0, 0, 0, 0.7)',
                      padding: '4px 12px',
                      borderRadius: '4px',
                      color: '#f39800',
                      fontSize: '12px',
                      fontWeight: '700',
                      letterSpacing: '1px',
                    }}
                  >
                    SECURITY & COMPLIANCE
                  </div>
                </div>
              </FadeInSection>
            </Col>
            <Col xs={24} md={12}>
              <FadeInSection>
                <div style={{ paddingLeft: '12px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                    <div style={{ width: '4px', height: '18px', background: '#f39800', borderRadius: '2px' }} />
                    <span style={{ color: '#f39800', fontSize: '14px', fontWeight: '700', letterSpacing: '1px' }}>合規資產保障</span>
                  </div>
                  <h3 style={{ fontSize: '26px', fontWeight: '700', color: '#111827', margin: '0 0 16px' }}>
                    權威信譽合規：100% 客戶資金獨立安全隔離
                  </h3>
                  <div style={{ fontSize: '15px', color: '#4b5563', lineHeight: '1.8', display: 'flex', flexDirection: 'column', gap: '14px' }}>
                    <p style={{ margin: 0 }}>
                      作為金融合規的堅定擁護者，<strong>德生金業</strong> 秉承嚴格的行業最高公約標准運作。我們最核心的生命線是保障每一位客戶的資金存放安全。
                    </p>
                    <p style={{ margin: 0 }}>
                      平台所有客戶資金均存放在<strong>獨立的安全隔離信托賬戶中</strong>，安全保障率達到 100%。德生的公司運營資本和客戶資產完全隔離，不受任何外部債務影響，提供絕對安全、公平和完備合規的良性投資。
                    </p>
                    <ul style={{ paddingLeft: '20px', margin: '8px 0 0', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                      <li>🏦 獨立信托賬戶安全隔離，資金只可劃撥於對應投資者本人</li>
                      <li>📜 持有海關A類貴金屬進出口註冊以及完備的香港實體場所</li>
                      <li>🔍 定期接受多方權威機構獨立的合規性年度財務審計</li>
                    </ul>
                  </div>
                </div>
              </FadeInSection>
            </Col>
          </Row>

          {/* 特性 4: 7*24小時專屬，管家式金融支持 (使用 11.webp) - 左右交替 (文字在左，圖片在右) */}
          <Row gutter={[48, 48]} align="middle" style={{ marginBottom: '80px' }}>
            <Col xs={24} md={{ span: 12, order: 2 }}>
              <FadeInSection>
                <div
                  style={{
                    position: 'relative',
                    borderRadius: '16px',
                    overflow: 'hidden',
                    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.08)',
                    border: '1px solid #e5e7eb',
                  }}
                >
                  <img
                    src="/11.webp"
                    alt="德生全天候VIP支持"
                    style={{ width: '100%', height: 'auto', display: 'block', transition: 'transform 0.4s ease' }}
                    className="hover-scale-img"
                  />
                  <div
                    style={{
                      position: 'absolute',
                      top: '20px',
                      left: '20px',
                      background: 'rgba(0, 0, 0, 0.7)',
                      padding: '4px 12px',
                      borderRadius: '4px',
                      color: '#f39800',
                      fontSize: '12px',
                      fontWeight: '700',
                      letterSpacing: '1px',
                    }}
                  >
                    24/7 ELITE SUPPORT
                  </div>
                </div>
              </FadeInSection>
            </Col>
            <Col xs={24} md={{ span: 12, order: 1 }}>
              <FadeInSection>
                <div style={{ paddingRight: '12px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                    <div style={{ width: '4px', height: '18px', background: '#f39800', borderRadius: '2px' }} />
                    <span style={{ color: '#f39800', fontSize: '14px', fontWeight: '700', letterSpacing: '1px' }}>頂級溫情服務</span>
                  </div>
                  <h3 style={{ fontSize: '26px', fontWeight: '700', color: '#111827', margin: '0 0 16px' }}>
                    管家式專屬服務：全天候專業解答
                  </h3>
                  <div style={{ fontSize: '15px', color: '#4b5563', lineHeight: '1.8', display: 'flex', flexDirection: 'column', gap: '14px' }}>
                    <p style={{ margin: 0 }}>
                      我們深知，金融市場瞬息萬變，在任何時候獲得無縫解答是至關重要的。因此，德生為您配備了<strong>全天候多語言高級實戰客服專家</strong>。
                    </p>
                    <p style={{ margin: 0 }}>
                      無論您是對 MT5 的指標如何調出有疑問，還是面臨深夜資金調度及出入金支持，抑或是需要進行大額量化 API 對接，均可以通過電話、郵件及極速在線客服獲取<strong>即時、暖心專業解決方案</strong>。
                    </p>
                    <ul style={{ paddingLeft: '20px', margin: '8px 0 0', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                      <li>💬 專屬投資顧問 全天候多渠道隨時響應</li>
                      <li>🛠️ 提供詳盡的 PC / 手機端安裝包配置說明及新手輔導</li>
                      <li>📈 實時解析關鍵經濟指標釋放事件，協助規避交易風險</li>
                    </ul>
                  </div>
                </div>
              </FadeInSection>
            </Col>
          </Row>
        </div>
      </section>

      {/* =================【3. 分端下載專區與節點選擇 (Tabs 切換)】================= */}
      <section id="download-tabs" style={{ padding: '80px 20px', background: '#f0f3f6', borderTop: '1px solid #e2e8f0', borderBottom: '1px solid #e2e8f0' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <h2 style={{ fontSize: '28px', fontWeight: '800', color: '#111827', margin: '0 0 8px' }}>獲取官方原裝正品安裝包</h2>
            <p style={{ fontSize: '15px', color: '#4b5563', margin: 0 }}>為了保障您的交易密碼及資金安全，請務必在下方德生官方節點下載正規程序</p>
          </div>

          <div
            style={{
              background: '#ffffff',
              borderRadius: '16px',
              padding: '32px',
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.03)',
              border: '1px solid #e2e8f0',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', marginBottom: '32px' }}>
              {[
                { key: 'mobile', label: '手機客戶端 (iOS & Android)', icon: <AndroidOutlined /> },
                { key: 'pc', label: '電腦客戶端 (Windows 7/10/11)', icon: <WindowsOutlined /> },
              ].map((tab) => (
                <button
                  key={tab.key}
                  type="button"
                  onClick={() => setActiveTab(tab.key)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '12px 24px',
                    borderRadius: '30px',
                    border: activeTab === tab.key ? '2px solid #f39800' : '1px solid #cbd5e1',
                    background: activeTab === tab.key ? 'rgba(243, 152, 0, 0.05)' : '#ffffff',
                    color: activeTab === tab.key ? '#f39800' : '#4b5563',
                    fontSize: '15px',
                    fontWeight: '700',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                  }}
                >
                  {tab.icon}
                  {tab.label}
                </button>
              ))}
            </div>

            {/* 手機端 Tab 內容 */}
            {activeTab === 'mobile' && (
              <Row gutter={[40, 40]} align="middle" justify="center">
                <Col xs={24} md={16}>
                  <div style={{ padding: '8px' }}>
                    <div style={{ fontSize: '18px', fontWeight: '700', color: '#111827', marginBottom: '16px' }}>德生移動交易 APP 支持</div>
                    <p style={{ fontSize: '14px', color: '#4b5563', lineHeight: '1.6', marginBottom: '24px' }}>
                      支持 iPhone iOS 12+ 及各大主流安卓手機。集行情、交易、止損於一身。移動端能完全自動同步 PC 賬戶的一切持倉和掛單信息，是您掌上的黃金交易樞紐。
                    </p>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                      <div style={{ display: 'flex', justify: 'space-between', alignItems: 'center', padding: '12px 16px', background: '#F8FAFC', borderRadius: '8px', borderLeft: '3px solid #f39800' }}>
                        <div>
                          <div style={{ fontWeight: 'bold', color: '#111827', fontSize: '14px' }}>iOS 蘋果直達包</div>
                          <div style={{ fontSize: '12px', color: '#6b7280' }}>版本: {downloadNodes.ios[0].version} | 大小: {downloadNodes.ios[0].size}</div>
                        </div>
                        <div style={{ position: 'relative' }} className="qr-hover-container">
                          <Button type="primary" icon={<DownloadOutlined />} href={downloadNodes.ios[0].url} target="_blank" rel="noopener noreferrer" style={{ background: '#f39800', border: 'none', color: '#000', fontWeight: 'bold' }}>官方下載</Button>

                          {/* QR Code Popover */}
                          <div className="qr-popover" style={{
                            position: 'absolute',
                            bottom: '100%',
                            right: '0',
                            transform: 'translateY(-12px)',
                            background: '#ffffff',
                            border: '1px solid #cbd5e1',
                            borderRadius: '12px',
                            padding: '10px',
                            boxShadow: '0 12px 30px rgba(0,0,0,0.15)',
                            display: 'none',
                            zIndex: 100,
                            width: '140px',
                            height: '140px',
                            boxSizing: 'border-box'
                          }}>
                            <img src="ios.png" alt="iOS QR Code" style={{ width: '100%', height: '100%', objectFit: 'contain', display: 'block' }} />
                            {/* Popover Arrow */}
                            <div style={{
                              position: 'absolute',
                              top: '100%',
                              right: '30px',
                              width: '0',
                              height: '0',
                              borderLeft: '6px solid transparent',
                              borderRight: '6px solid transparent',
                              borderTop: '6px solid #ffffff'
                            }} />
                          </div>
                        </div>
                      </div>

                      <div style={{ display: 'flex', justify: 'space-between', alignItems: 'center', padding: '12px 16px', background: '#F8FAFC', borderRadius: '8px', borderLeft: '3px solid #f39800' }}>
                        <div>
                          <div style={{ fontWeight: 'bold', color: '#111827', fontSize: '14px' }}>Android 官方 APK 安裝包 (強烈推薦)</div>
                          <div style={{ fontSize: '12px', color: '#6b7280' }}>版本: {downloadNodes.android[0].version} | 大小: {downloadNodes.android[0].size}</div>
                        </div>
                        <div style={{ position: 'relative' }} className="qr-hover-container">
                          <Button type="primary" icon={<DownloadOutlined />} href={downloadNodes.android[0].url} target="_blank" rel="noopener noreferrer" style={{ background: '#f39800', border: 'none', color: '#000', fontWeight: 'bold' }}>本地下載</Button>

                          {/* QR Code Popover */}
                          <div className="qr-popover" style={{
                            position: 'absolute',
                            bottom: '100%',
                            right: '0',
                            transform: 'translateY(-12px)',
                            background: '#ffffff',
                            border: '1px solid #cbd5e1',
                            borderRadius: '12px',
                            padding: '10px',
                            boxShadow: '0 12px 30px rgba(0,0,0,0.15)',
                            display: 'none',
                            zIndex: 100,
                            width: '140px',
                            height: '140px',
                            boxSizing: 'border-box'
                          }}>
                            <img src="android.png" alt="Android QR Code" style={{ width: '100%', height: '100%', objectFit: 'contain', display: 'block' }} />
                            {/* Popover Arrow */}
                            <div style={{
                              position: 'absolute',
                              top: '100%',
                              right: '30px',
                              width: '0',
                              height: '0',
                              borderLeft: '6px solid transparent',
                              borderRight: '6px solid transparent',
                              borderTop: '6px solid #ffffff'
                            }} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            )}

            {/* 電腦端 Tab 內容 */}
            {activeTab === 'pc' && (
              <Row gutter={[40, 40]} align="middle">
                <Col xs={24} md={14}>
                  <div style={{ padding: '8px' }}>
                    <div style={{ fontSize: '18px', fontWeight: '700', color: '#111827', marginBottom: '16px' }}>德生電腦端 MT5 特色</div>
                    <p style={{ fontSize: '14px', color: '#4b5563', lineHeight: '1.6', marginBottom: '24px' }}>
                      完美契合 Windows 7/8/10/11 操作系統，全中文化深度定制。完美配置頂級網關。推薦使用 4K 分辨率或多監視器系統運行，從而獲得頂級高淨值用戶黃金技術分析體驗。
                    </p>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                      {downloadNodes.pc.map((node, index) => (
                        <div key={index} style={{ display: 'flex', justify: 'space-between', padding: '12px 16px', background: '#F8FAFC', borderRadius: '8px', borderLeft: '3px solid #f39800' }}>
                          <div>
                            <div style={{ fontWeight: 'bold', color: '#111827', fontSize: '14px' }}>{node.name}</div>
                            <div style={{ fontSize: '12px', color: '#6b7280' }}>版本: {node.version} | 大小: {node.size} | 支持: {node.type}</div>
                          </div>
                          <Button type="primary" icon={<WindowsOutlined />} href={node.url} target="_blank" rel="noopener noreferrer" style={{ background: '#f39800', border: 'none', color: '#000', fontWeight: 'bold' }}>立即下載</Button>
                        </div>
                      ))}
                    </div>
                  </div>
                </Col>

                <Col xs={24} md={10}>
                  <FadeInSection>
                    <div style={{ background: '#F8FAFC', border: '1px solid #e2e8f0', padding: '24px', borderRadius: '12px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                      <div style={{ fontSize: '14px', fontWeight: 'bold', color: '#111827' }}><CheckCircleOutlined style={{ color: '#22c55e', marginRight: '6px' }} /> 系統安裝要求：</div>
                      <div style={{ fontSize: '13px', color: '#4b5563', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                        <div>• 操作系統: Windows 10/11 (64位)</div>
                        <div>• 處理器: 雙核 Intel/AMD 2.0 GHz 以上</div>
                        <div>• 內存需求: 最低 4 GB RAM</div>
                        <div>• 剩余空間: 至少保留 500 MB 空間</div>
                      </div>
                    </div>
                  </FadeInSection>
                </Col>
              </Row>
            )}
          </div>
        </div>
      </section>

      {/* =================【4. 高效安裝與登入指引 (時間線Timeline方式)】================= */}
      <section style={{ padding: '80px 20px', background: '#ffffff' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <h2 style={{ fontSize: '28px', fontWeight: '800', color: '#111827', margin: '0 0 8px' }}>新手極速開始交易指引</h2>
            <p style={{ fontSize: '15px', color: '#6b7280', margin: 0 }}>只需三步，即可順利登入您的德生貴金屬真實或模擬賬戶並開始理財</p>
            <div style={{ width: '40px', height: '3px', background: '#f39800', margin: '12px auto 0', borderRadius: '1.5px' }} />
          </div>

          <Timeline
            mode="alternate"
            items={[
              {
                children: (
                  <div style={{ textAlign: 'left', background: '#F8FAFC', padding: '20px', borderRadius: '12px', border: '1px solid #e2e8f0', boxShadow: '0 4px 12px rgba(0,0,0,0.02)' }}>
                    <div style={{ color: '#f39800', fontWeight: 'bold', fontSize: '16px', marginBottom: '8px' }}>第一步：下載對應客戶端並安裝</div>
                    <div style={{ color: '#4b5563', fontSize: '13px', lineHeight: '1.6' }}>
                      根據您的常用設備（電腦或手機），在上方選擇對應的專屬下載鏈接進行下載。下載完成後，點擊運行，並根據屏幕彈出的安裝向導，一路點擊「下一步」並在 15 秒內極速完成程序配置。
                    </div>
                  </div>
                ),
              },
              {
                children: (
                  <div style={{ textAlign: 'left', background: '#F8FAFC', padding: '20px', borderRadius: '12px', border: '1px solid #e2e8f0', boxShadow: '0 4px 12px rgba(0,0,0,0.02)' }}>
                    <div style={{ color: '#f39800', fontWeight: 'bold', fontSize: '16px', marginBottom: '8px' }}>第二步：搜索選擇德生服務器</div>
                    <div style={{ color: '#4b5563', fontSize: '13px', lineHeight: '1.6' }}>
                      打開剛安裝好的 MT5 客戶端軟件。在登入賬戶或添加交易商窗口的輸入框中，輸入服務器全名 「<strong>deson precious metals</strong>」 或輸入中文 「<strong>德生金業</strong>」 或 「<strong>德生貴金屬</strong>」，點擊搜索，並選中我們的對應服務器。
                    </div>
                  </div>
                ),
              },
              {
                children: (
                  <div style={{ textAlign: 'left', background: '#F8FAFC', padding: '20px', borderRadius: '12px', border: '1px solid #e2e8f0', boxShadow: '0 4px 12px rgba(0,0,0,0.02)' }}>
                    <div style={{ color: '#f39800', fontWeight: 'bold', fontSize: '16px', marginBottom: '8px' }}>第三步：選擇輸入賬號密碼登入</div>
                    <div style={{ color: '#4b5563', fontSize: '13px', lineHeight: '1.6' }}>
                      服務器選定後，在下方輸入您的德生專用 6 位數至尊交易賬號、密碼（區分大小寫），服務器類型選擇：真實賬號選擇 <strong>deson precious metals</strong>，模擬訓練選擇 <strong>deson precious metals-Demo</strong>，點擊確定即可無縫連入頂級國際貴金屬交易海洋！
                    </div>
                  </div>
                ),
              },
            ]}
          />
        </div>
      </section>

      {/* =================【5. 底部嚴謹金融合規免責聲明】================= */}
      <section style={{ padding: '40px 20px', background: '#0a0f19', borderTop: '1px solid rgba(255, 255, 255, 0.05)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <PageDisclaimer />
        </div>
      </section>

      {/* 注入二維碼浮動顯示的 CSS 樣式 */}
      <style>{`
        .qr-hover-container {
          position: relative;
          display: inline-block;
        }
        .qr-hover-container:hover .qr-popover {
          display: block !important;
          animation: qrFadeIn 0.25s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        @keyframes qrFadeIn {
          from {
            opacity: 0;
            transform: translateY(-4px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(-12px) scale(1);
          }
        }
      `}</style>
    </div>
  );
}