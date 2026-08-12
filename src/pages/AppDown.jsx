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

  // 1. 软件下载节点信息
  const downloadNodes = {
    pc: [
      { name: '官方安全下载节点 A (高配物理节点)', version: 'v5.0.44', size: '3.4 MB', type: 'Windows EXE', url: 'https://download.mql5.com/cdn/web/metaquotes.software.corp/mt5/mt5setup.exe' },
      { name: '高速备份下载节点 B (多线CDN节点)', version: 'v5.0.44', size: '3.4 MB', type: 'Windows EXE', url: 'https://www.metatrader5.com/zh/download' },
    ],
    ios: [
      { name: 'App Store 官方下载', version: 'v4.9.53', size: '24.1 MB', type: 'iOS', url: 'https://download.mql5.com/cdn/mobile/mt5/ios?utm_source=www.metatrader5.com' },
    ],
    android: [
      { name: '官方 APK 安装包', version: 'v4.9.53', size: '32.8 MB', type: 'Android APK', url: 'https://download.mql5.com/cdn/mobile/mt5/android' },
      { name: 'Google Play 官方下载', version: 'v4.9.53', size: '32.8 MB', type: 'Android', url: 'https://download.mql5.com/cdn/mobile/mt5/android?utm_source=www.metatrader5.com' },
    ]
  };

  return (
    <div className="site-page" style={containerStyle}>
      {/* =================【1. 尊贵深邃暗色 Hero Section】================= */}
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
                德生贵金属官方多元化交易终端
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
                德生贵金属 MT5 <br />
                <span style={{ color: '#f39800' }}>随时随地，极速交易</span>
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
                依托全球顶级金融技术和极速订单清算引擎，全新上线 MetaTrader 5 (MT5) 客户端。为您提供秒级行情、大师级图表指标及100%银行隔离信托保障。让您不论在PC大屏还是掌上移动端，均能掌握全球交易先机。
              </p>

              {/* 官方极速下载入口 */}
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
                  <div style={{ color: '#ffffff', fontSize: '16px', fontWeight: '700', marginBottom: '8px' }}>官方多平台客户端极速下载</div>
                  <div style={{ color: '#9ca3af', fontSize: '13.5px', lineHeight: '1.6', marginBottom: '16px' }}>
                    免去应用商店繁琐查找。直接选择您的终端设备，点击下方按钮即可立即建立官方安全、原装的高速下载任务。
                  </div>
                  <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                    <a href="https://download.mql5.com/cdn/web/metaquotes.software.corp/mt5/mt5setup.exe" target="_blank" rel="noopener noreferrer" className="site-btn-primary" style={{ height: '38px', padding: '0 18px', fontSize: '13px', background: '#f39800', color: '#000', fontWeight: 'bold', display: 'inline-flex', alignItems: 'center', borderRadius: '4px' }}>
                      <WindowsOutlined style={{ marginRight: '6px' }} /> PC 电脑端下载
                    </a>
                    <a href="#download-tabs" className="site-btn-outline" style={{ height: '38px', padding: '0 18px', fontSize: '13px', border: '1px solid rgba(255,255,255,0.3)', color: '#fff', display: 'inline-flex', alignItems: 'center', borderRadius: '4px' }}>
                      移动手机端下载 <ArrowRightOutlined style={{ marginLeft: '6px' }} />
                    </a>
                  </div>
                </div>
              </div>
            </Col>

            <Col xs={24} lg={11} style={{ display: 'flex', justifyContent: 'center' }}>
              <FadeInSection>
                {/* 豪华 Mockup 设备展示 */}
                <div style={{ position: 'relative' }}>
                  <PhoneMockup price="2658.45" isUp={true} />
                  {/* 漂浮的荣誉或速度标签 */}
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
                    🚀 毫秒级订单秒成交
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
                    🔒 100% 资金独立隔离托管
                  </div>
                </div>
              </FadeInSection>
            </Col>
          </Row>
        </div>
      </section>

      {/* =================【2. 仿金荣中国：4大核心特性（配图 9, 10, 11, 7）】================= */}
      <section style={{ padding: '80px 20px', background: '#ffffff' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          {/* 栏目头部 */}
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2 style={{ fontSize: '32px', fontWeight: '800', color: '#111827', margin: '0 0 12px', letterSpacing: '1px' }}>
              重塑交易标准 · 掌握全球广度
            </h2>
            <p style={{ fontSize: '16px', color: '#6b7280', margin: 0, maxWidth: '720px', margin: '0 auto', lineHeight: '1.6' }}>
              德生官方将领先的电子撮合架构、严格的风险控制体系和极致的技术完美结合。以下四大模块充分展示了德生贵金属在移动端和桌面端的顶级专业配置。
            </p>
            <div style={{ width: '60px', height: '4px', background: '#f39800', margin: '16px auto 0', borderRadius: '2px' }} />
          </div>

          {/* 特性 1: 随时随地，掌握极速行情 (使用 9.jpg) - 左右交替 */}
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
                    src="/9.jpg"
                    alt="德生贵金属移动APP"
                    style={{ width: '100%', height: 'auto', display: 'block', transition: 'transform 0.4s ease' }}
                    className="hover-scale-img"
                  />
                  {/* 水印标识 */}
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
                    <span style={{ color: '#f39800', fontSize: '14px', fontWeight: '700', letterSpacing: '1px' }}>急速交易体验</span>
                  </div>
                  <h3 style={{ fontSize: '26px', fontWeight: '700', color: '#111827', margin: '0 0 16px' }}>
                    全新移动客户端：毫秒级一键秒极速下单
                  </h3>
                  <div style={{ fontSize: '15px', color: '#4b5563', lineHeight: '1.8', display: 'flex', flexDirection: 'column', gap: '14px' }}>
                    <p style={{ margin: 0 }}>
                      依托顶级流动性中枢与强大的国际服务器网络，<strong>德生自研移动APP（支持iOS与Android）</strong> 实现了全天候毫秒级行情即时同步。
                    </p>
                    <p style={{ margin: 0 }}>
                      用户只需轻松一按，即可在剧烈波动的非农、央行利率决议等大行情下完成<strong>秒级开平仓，零延迟，无滑点风险</strong>。内置智能止损、追踪止损，无论您身处何地，均可实现专业高效的现货黄金、现货白银交易。
                    </p>
                    <ul style={{ paddingLeft: '20px', margin: '8px 0 0', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                      <li>⚡ 毫秒级订单极速执行，抢占行情价格最前沿</li>
                      <li>📈 深度直连国际一线清算行，点差透明，交易成本极低</li>
                      <li>🔔 智能离线价位报警，不遗漏任何重大突破机遇</li>
                    </ul>
                  </div>
                </div>
              </FadeInSection>
            </Col>
          </Row>

          {/* 特性 2: 电脑端 MT5，专业指标全解析 (使用 10.jpg) - 左右交替 (文字在左，图片在右) */}
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
                    src="/10.jpg"
                    alt="德生电脑端MT5"
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
                    <span style={{ color: '#f39800', fontSize: '14px', fontWeight: '700', letterSpacing: '1px' }}>专业画线分析</span>
                  </div>
                  <h3 style={{ fontSize: '26px', fontWeight: '700', color: '#111827', margin: '0 0 16px' }}>
                    电脑端 MetaTrader 5：大师级专业技术透视
                  </h3>
                  <div style={{ fontSize: '15px', color: '#4b5563', lineHeight: '1.8', display: 'flex', flexDirection: 'column', gap: '14px' }}>
                    <p style={{ margin: 0 }}>
                      最受全球专业技术流派、机构投资者信赖的经典旗舰终端 —— <strong>德生电脑端 MT5 系统</strong> 经过全面的中文定制与底层速度加速优化。
                    </p>
                    <p style={{ margin: 0 }}>
                      终端集成 <strong>30+ 种主流技术分析指标、24 种辅助趋势画线工具、以及多达 21 种 K 线时间分析周期</strong>。支持同屏多屏窗口任意排版、一键多单对锁、市场深度 (DOM) 以及专业的 EA (Expert Advisor) 自动化策略脚本测试，为您开启高维度分析视角。
                    </p>
                    <ul style={{ paddingLeft: '20px', margin: '8px 0 0', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                      <li>💻 完美支持 Windows 7/10/11 多分屏与高分辨率画线分析</li>
                      <li>🎨 高度自由定制指标，极速载入历史分钟级数据</li>
                      <li>⚙️ 独家支持智能自动化量化交易与量化策略精准历史回测</li>
                    </ul>
                  </div>
                </div>
              </FadeInSection>
            </Col>
          </Row>

          {/* 特性 3: 权威正规平台，安全放心交易 (使用 7.jpg) - 左右交替 (图片在左，文字在右) */}
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
                    src="/7.jpg"
                    alt="德生合规资质与安全保障"
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
                    <span style={{ color: '#f39800', fontSize: '14px', fontWeight: '700', letterSpacing: '1px' }}>合规资产保障</span>
                  </div>
                  <h3 style={{ fontSize: '26px', fontWeight: '700', color: '#111827', margin: '0 0 16px' }}>
                    权威信誉合规：100% 客户资金独立托管
                  </h3>
                  <div style={{ fontSize: '15px', color: '#4b5563', lineHeight: '1.8', display: 'flex', flexDirection: 'column', gap: '14px' }}>
                    <p style={{ margin: 0 }}>
                      作为金融合规的坚定拥护者，<strong>德生金業</strong> 秉承严格的行业最高公约标准运作。我们最核心的生命线是保障每一位客户的资金存放安全。
                    </p>
                    <p style={{ margin: 0 }}>
                      平台所有客户资金均存放在<strong>独立的商业信托银行隔离托管账户中</strong>，托管率达到 100%。德生的公司运营资本和客户资产完全隔离，不受任何外部债务影响，提供绝对安全、公平和完备合规的良性投资。
                    </p>
                    <ul style={{ paddingLeft: '20px', margin: '8px 0 0', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                      <li>🏦 大型信托托管银行清算隔离，资金只可划拨于对应投资者本人</li>
                      <li>📜 持有海关A类贵金属进出口注册以及完备的香港实体场所</li>
                      <li>🔍 定期接受多方权威机构独立的合规性年度财务审计</li>
                    </ul>
                  </div>
                </div>
              </FadeInSection>
            </Col>
          </Row>

          {/* 特性 4: 7*24小时专属，管家式金融支持 (使用 11.jpg) - 左右交替 (文字在左，图片在右) */}
          <Row gutter={[48, 48]} align="middle">
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
                    src="/11.jpg"
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
                    <span style={{ color: '#f39800', fontSize: '14px', fontWeight: '700', letterSpacing: '1px' }}>顶级温情服务</span>
                  </div>
                  <h3 style={{ fontSize: '26px', fontWeight: '700', color: '#111827', margin: '0 0 16px' }}>
                    管家式专属服务：7×24 小时一对一专业解答
                  </h3>
                  <div style={{ fontSize: '15px', color: '#4b5563', lineHeight: '1.8', display: 'flex', flexDirection: 'column', gap: '14px' }}>
                    <p style={{ margin: 0 }}>
                      我们深知，金融市场瞬息万变，在任何时候获得无缝解答是至关重要的。因此，德生为您配备了<strong>全天候多语言高级实战客服专家</strong>。
                    </p>
                    <p style={{ margin: 0 }}>
                      无论您是对 MT5 的指标如何调出有疑问，还是面临深夜资金调度及出入金支持，抑或是需要进行大额量化 API 对接，均可以通过电话、邮件及极速在线客服获取<strong>即时、暖心的一对一专业解决方案</strong>。
                    </p>
                    <ul style={{ paddingLeft: '20px', margin: '8px 0 0', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                      <li>💬 专属投资顾问 24 小时全天候多渠道随时响应</li>
                      <li>🛠️ 提供详尽的 PC / 手机端安装包配置说明及新手辅导</li>
                      <li>📈 实时解析关键经济指标释放事件，协助规避交易风险</li>
                    </ul>
                  </div>
                </div>
              </FadeInSection>
            </Col>
          </Row>
        </div>
      </section>

      {/* =================【3. 分端下载专区与节点选择 (Tabs 切换)】================= */}
      <section id="download-tabs" style={{ padding: '80px 20px', background: '#f0f3f6', borderTop: '1px solid #e2e8f0', borderBottom: '1px solid #e2e8f0' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <h2 style={{ fontSize: '28px', fontWeight: '800', color: '#111827', margin: '0 0 8px' }}>获取官方原装正品安装包</h2>
            <p style={{ fontSize: '15px', color: '#4b5563', margin: 0 }}>为了保障您的交易密码及资金安全，请务必在下方德生官方节点下载正规程序</p>
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
                { key: 'mobile', label: '手机客户端 (iOS & Android)', icon: <AndroidOutlined /> },
                { key: 'pc', label: '电脑客户端 (Windows 7/10/11)', icon: <WindowsOutlined /> },
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

            {/* 手机端 Tab 内容 */}
            {activeTab === 'mobile' && (
              <Row gutter={[40, 40]} align="middle" justify="center">
                <Col xs={24} md={16}>
                  <div style={{ padding: '8px' }}>
                    <div style={{ fontSize: '18px', fontWeight: '700', color: '#111827', marginBottom: '16px' }}>德生移动交易 APP 支持</div>
                    <p style={{ fontSize: '14px', color: '#4b5563', lineHeight: '1.6', marginBottom: '24px' }}>
                      支持 iPhone iOS 12+ 及各大主流安卓手机。集行情、交易、止损于一身。移动端能完全自动同步 PC 账户的一切持仓和挂单信息，是您掌上的黄金交易枢纽。
                    </p>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                      <div style={{ display: 'flex', justify: 'space-between', padding: '12px 16px', background: '#F8FAFC', borderRadius: '8px', borderLeft: '3px solid #f39800' }}>
                        <div>
                          <div style={{ fontWeight: 'bold', color: '#111827', fontSize: '14px' }}>iOS 苹果直达包</div>
                          <div style={{ fontSize: '12px', color: '#6b7280' }}>版本: {downloadNodes.ios[0].version} | 大小: {downloadNodes.ios[0].size}</div>
                        </div>
                        <Button type="primary" icon={<DownloadOutlined />} href={downloadNodes.ios[0].url} target="_blank" rel="noopener noreferrer" style={{ background: '#f39800', border: 'none', color: '#000', fontWeight: 'bold' }}>官方下载</Button>
                      </div>

                      <div style={{ display: 'flex', justify: 'space-between', padding: '12px 16px', background: '#F8FAFC', borderRadius: '8px', borderLeft: '3px solid #f39800' }}>
                        <div>
                          <div style={{ fontWeight: 'bold', color: '#111827', fontSize: '14px' }}>Android 官方 APK 安装包 (强烈推荐)</div>
                          <div style={{ fontSize: '12px', color: '#6b7280' }}>版本: {downloadNodes.android[0].version} | 大小: {downloadNodes.android[0].size}</div>
                        </div>
                        <Button type="primary" icon={<DownloadOutlined />} href={downloadNodes.android[0].url} target="_blank" rel="noopener noreferrer" style={{ background: '#f39800', border: 'none', color: '#000', fontWeight: 'bold' }}>本地下载</Button>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            )}

            {/* 电脑端 Tab 内容 */}
            {activeTab === 'pc' && (
              <Row gutter={[40, 40]} align="middle">
                <Col xs={24} md={14}>
                  <div style={{ padding: '8px' }}>
                    <div style={{ fontSize: '18px', fontWeight: '700', color: '#111827', marginBottom: '16px' }}>德生电脑端 MT5 特色</div>
                    <p style={{ fontSize: '14px', color: '#4b5563', lineHeight: '1.6', marginBottom: '24px' }}>
                      完美契合 Windows 7/8/10/11 操作系统，全中文化深度定制。完美配置顶级网关。推荐使用 4K 分辨率或多监视器系统运行，从而获得顶级高净值用户黄金技术分析体验。
                    </p>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                      {downloadNodes.pc.map((node, index) => (
                        <div key={index} style={{ display: 'flex', justify: 'space-between', padding: '12px 16px', background: '#F8FAFC', borderRadius: '8px', borderLeft: '3px solid #f39800' }}>
                          <div>
                            <div style={{ fontWeight: 'bold', color: '#111827', fontSize: '14px' }}>{node.name}</div>
                            <div style={{ fontSize: '12px', color: '#6b7280' }}>版本: {node.version} | 大小: {node.size} | 支持: {node.type}</div>
                          </div>
                          <Button type="primary" icon={<WindowsOutlined />} href={node.url} target="_blank" rel="noopener noreferrer" style={{ background: '#f39800', border: 'none', color: '#000', fontWeight: 'bold' }}>立即下载</Button>
                        </div>
                      ))}
                    </div>
                  </div>
                </Col>

                <Col xs={24} md={10}>
                  <FadeInSection>
                    <div style={{ background: '#F8FAFC', border: '1px solid #e2e8f0', padding: '24px', borderRadius: '12px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                      <div style={{ fontSize: '14px', fontWeight: 'bold', color: '#111827' }}><CheckCircleOutlined style={{ color: '#22c55e', marginRight: '6px' }} /> 系统安装要求：</div>
                      <div style={{ fontSize: '13px', color: '#4b5563', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                        <div>• 操作系统: Windows 10/11 (64位)</div>
                        <div>• 处理器: 双核 Intel/AMD 2.0 GHz 以上</div>
                        <div>• 内存需求: 最低 4 GB RAM</div>
                        <div>• 剩余空间: 至少保留 500 MB 空间</div>
                      </div>
                    </div>
                  </FadeInSection>
                </Col>
              </Row>
            )}
          </div>
        </div>
      </section>

      {/* =================【4. 高效安装与登录指引 (时间线Timeline方式)】================= */}
      <section style={{ padding: '80px 20px', background: '#ffffff' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <h2 style={{ fontSize: '28px', fontWeight: '800', color: '#111827', margin: '0 0 8px' }}>新手极速开始交易指引</h2>
            <p style={{ fontSize: '15px', color: '#6b7280', margin: 0 }}>只需三步，即可顺利登录您的德生贵金属真实或模拟账户并开始理财</p>
            <div style={{ width: '40px', height: '3px', background: '#f39800', margin: '12px auto 0', borderRadius: '1.5px' }} />
          </div>

          <Timeline
            mode="alternate"
            items={[
              {
                children: (
                  <div style={{ textAlign: 'left', background: '#F8FAFC', padding: '20px', borderRadius: '12px', border: '1px solid #e2e8f0', boxShadow: '0 4px 12px rgba(0,0,0,0.02)' }}>
                    <div style={{ color: '#f39800', fontWeight: 'bold', fontSize: '16px', marginBottom: '8px' }}>第一步：下载对应客户端并安装</div>
                    <div style={{ color: '#4b5563', fontSize: '13px', lineHeight: '1.6' }}>
                      根据您的常用设备（电脑或手机），在上方选择对应的专属下载链接进行下载。下载完成后，点击运行，并根据屏幕弹出的安装向导，一路点击“下一步”并在 15 秒内极速完成程序配置。
                    </div>
                  </div>
                ),
              },
              {
                children: (
                  <div style={{ textAlign: 'left', background: '#F8FAFC', padding: '20px', borderRadius: '12px', border: '1px solid #e2e8f0', boxShadow: '0 4px 12px rgba(0,0,0,0.02)' }}>
                    <div style={{ color: '#f39800', fontWeight: 'bold', fontSize: '16px', marginBottom: '8px' }}>第二步：搜索选择德生服务器</div>
                    <div style={{ color: '#4b5563', fontSize: '13px', lineHeight: '1.6' }}>
                      打开刚安装好的 MT5 客户端软件。在登录账户或添加交易商窗口的输入框中，输入服务器全名 “<strong>Deson Metals</strong>” 或输入中文 “<strong>德生金業</strong>” 或 “<strong>德生贵金属</strong>”，点击搜索，并选中我们的对应服务器。
                    </div>
                  </div>
                ),
              },
              {
                children: (
                  <div style={{ textAlign: 'left', background: '#F8FAFC', padding: '20px', borderRadius: '12px', border: '1px solid #e2e8f0', boxShadow: '0 4px 12px rgba(0,0,0,0.02)' }}>
                    <div style={{ color: '#f39800', fontWeight: 'bold', fontSize: '16px', marginBottom: '8px' }}>第三步：选择输入账号密码登录</div>
                    <div style={{ color: '#4b5563', fontSize: '13px', lineHeight: '1.6' }}>
                      服务器选定后，在下方输入您的德生专用 6 位数至尊交易账号、密码（区分大小写），服务器类型选择：真实账号选择 <strong>DesonMetals-Live</strong>，模拟训练选择 <strong>DesonMetals-Demo</strong>，点击确定即可无缝连入顶级国际贵金属交易海洋！
                    </div>
                  </div>
                ),
              },
            ]}
          />
        </div>
      </section>

      {/* =================【5. 底部严谨金融合规免责声明】================= */}
      <section style={{ padding: '40px 20px', background: '#0a0f19', borderTop: '1px solid rgba(255, 255, 255, 0.05)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <PageDisclaimer />
        </div>
      </section>
    </div>
  );
}
