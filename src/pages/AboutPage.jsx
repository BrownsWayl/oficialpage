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

  // 1. 公司核心数据
  const stats = [
    { label: '累计服务全球客户', value: '1,000,000', suffix: '+' },
    { label: '订单极速执行时间', value: '0.05', suffix: '秒' },
    { label: '全天候专业客服支持', value: '24/7', suffix: '' },
    { label: '资金安全隔离存放', value: '100', suffix: '%' },
  ];

  // 2. 德生核心优势 (Why Choose Us)
  const advantages = [
    {
      icon: <SafetyCertificateOutlined style={{ color: '#f39800' }} />,
      title: '权威牌照与合规监管',
      desc: '我们严格遵守国际金融行业监管体系，在相关法律框架和行业公约指导下合法经营，确保平台的合规性与权威信誉。',
    },
    {
      icon: <ThunderboltOutlined style={{ color: '#f39800' }} />,
      title: '极速交易引擎 (MT5)',
      desc: '采用全球领先的 MetaTrader 5 (MT5) 交易系统，极速成交，零延迟、零滑点，全方位保障每一笔投资订单。',
    },
    {
      icon: <GlobalOutlined style={{ color: '#f39800' }} />,
      title: '海量流动性与极低价差',
      desc: '直接对接国际一线流提供商，提供深厚的市场深度、超低点差以及透明的价格环境，大幅降低用户的交易成本。',
    },
    {
      icon: <TeamOutlined style={{ color: '#f39800' }} />,
      title: '一对一 24/7 专属服务',
      desc: '具备多年金融实战经验的顾问和多语言客服团队，24小时在线提供无死角的技术支持和一对一投资咨询。',
    },
  ];

  // 3. 企业里程碑
  const milestones = [
    {
      year: '2025',
      title: '品牌成立 & 技术腾飞',
      desc: '德生金業有限公司德生贵金属 / Deson Metals）正式在香港成立。推出自研智能风控管理系统，全面对接国际顶级 MetaTrader 5 (MT5) 交易系统。',
    },
    {
      year: '2025',
      title: '深耕亚太 & 会员资质',
      desc: '合规化运营体系日臻健全，秉持香港金银业贸易场等权威标准，客户资金全面实现独立银行托管，托管率达 100%。',
    },
    {
      year: '2026',
      title: '迈向全球 & 卓越之选',
      desc: '业务向全球多地辐射，累计为超百万用户提供全天候贵金属（伦敦金、伦敦银）电子化差价合约交易服务，致力于成为行业信誉典范。',
    },
  ];

  return (
    <div className="site-page" style={containerStyle}>
      {/* =================【1. 尊贵深邃暗色 Hero Section】================= */}
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
            关于德生贵金属
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
            德生贵金属 <span style={{ color: '#f39800', background: 'none', WebkitTextFillColor: 'initial', textFillColor: 'initial' }}>Deson Metals</span>
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
            全球数百万投资者信赖的贵金属交易平台。依托香港作为世界金融枢纽的法律和行业合规规范，为全球投资者提供公开透明、安全隔离存放的现货黄金、现货白银线上极速投资环境。
          </p>
        </div>
      </section>

      {/* =================【2. 公司简介（双列布局仿 jrjr）】================= */}
      <section className="site-section" style={{ background: '#ffffff', padding: '64px 20px' }}>
        <div className="site-section-inner" style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <Row gutter={[40, 40]} align="middle">
            <Col xs={24} md={11}>
              <FadeInSection>
                <div style={{ position: 'relative', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 16px 40px rgba(0, 0, 0, 0.08)' }}>
                  <img
                    src="/12.jpg"
                    alt="德生贵金属黄金交易环境"
                    style={{ width: '100%', height: 'auto', display: 'block', transition: 'transform 0.4s ease' }}
                    className="hover-scale-img"
                  />
                  {/* 图片上的尊贵水印卡片 */}
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
                      注册编号: 77592183 | 香港实体办公场所保障客户每一笔资金的安全与公正。
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
                    德生贵金属 —— 全球高标准贵金属交易机构
                  </h2>
                  <div style={{ fontSize: '15px', color: '#4b5563', lineHeight: '1.8', display: 'flex', flexDirection: 'column', gap: '14px' }}>
                    <p style={{ margin: 0 }}>
                      德生金業有限公司（简称“<strong>德生贵金属</strong>” / “<strong>Deson Metals</strong>”）总部位于国际三大金融中心之一的香港。我们是一家由资深金融风控、国际极速订单结算技术及贵金属现货交收专家联合打造的顶级电子交易商。
                    </p>
                    <p style={{ margin: 0 }}>
                      自成立起，公司始终秉持“<strong>至诚经营、合规风控、安全合规</strong>”的发展方针。平台重点提供现货黄金（伦敦金）、现货白银（伦敦银）电子化合约交易，严格根据香港完善的金融法律规范及相关行业贸易场公约运作。我们以极度透明的实时报价和全方位的杠杆交易工具，助力全球零售投资者与专业机构灵活管理资产。
                    </p>
                    <p style={{ margin: 0 }}>
                      我们全天候采用备受好评的 <strong>MetaTrader 5 (MT5)</strong> 旗舰系统。通过强大的硬件数据中心和低延时网关，直连国际一线清算行，大幅压缩点差，确保在行情波动剧烈的非农等重要财经时间，客户订单均能实现极速稳定成交。
                    </p>
                  </div>
                </div>
              </FadeInSection>
            </Col>
          </Row>
        </div>
      </section>

      {/* =================【3. 权威证书与行业资质（荣誉资质 + 海关证明）】================= */}
      <section className="site-section" style={{ background: '#F5F7FA', padding: '64px 20px', borderTop: '1px solid #e5e7eb', borderBottom: '1px solid #e5e7eb' }}>
        <div className="site-section-inner" style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '44px' }}>
            <h2 style={{ fontSize: '28px', fontWeight: '700', color: '#111827', margin: '0 0 8px' }}>合规资质与行业证书</h2>
            <p style={{ fontSize: '15px', color: '#6b7280', margin: 0 }}>迪生贵金属经过多重合规审计，持有官方认证牌照，为客户提供100%合规与稳健的交易保障</p>
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
                      alt="荣誉资质"
                      style={{ width: '100%', height: 'auto', display: 'block' }}
                      className="hover-scale-img"
                    />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '18px', fontWeight: '700', color: '#111827', margin: '0 0 8px' }}>荣誉资质证书</h3>
                    <p style={{ fontSize: '14px', color: '#6b7280', margin: 0, lineHeight: '1.6' }}>
                      迪生贵金属荣获行业颁发的“卓越贵金属交易商”及“诚信金融服务商”等合规资质和荣誉，代表了业界对我们服务、风控及信誉的广泛认可。
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
                      alt="海关A类贵金属注册证明"
                      style={{ width: '100%', height: 'auto', display: 'block' }}
                      className="hover-scale-img"
                    />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '18px', fontWeight: '700', color: '#111827', margin: '0 0 8px' }}>海关A类贵金属注册证明</h3>
                    <p style={{ fontSize: '14px', color: '#6b7280', margin: 0, lineHeight: '1.6' }}>
                      迪生贵金属持有海关A类贵金属及金银进出口注册登记证明，保障线下现货交割、进出口实物黄金交收以及线上电子合约交易在法律公理框架下的合法完备。
                    </p>
                  </div>
                </div>
              </FadeInSection>
            </Col>
          </Row>
        </div>
      </section>

      {/* =================【4. 品牌使命与愿景（仿 jrjr 卡片化）】================= */}
      <section className="site-section" style={{ background: '#F5F7FA', padding: '64px 20px' }}>
        <div className="site-section-inner" style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '44px' }}>
            <h2 style={{ fontSize: '28px', fontWeight: '700', color: '#111827', margin: '0 0 8px' }}>企业理念与品牌精神</h2>
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
                    为全球贵金属投资者提供最公平透明、超低门槛、极速撮合的电子交易平台。通过技术迭代，让每个人都能安全、自主地参与国际金融市场交易。
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
                  <h3 style={{ fontSize: '18px', fontWeight: '700', color: '#111827', margin: '0 0 12px' }}>品牌愿景</h3>
                  <p style={{ fontSize: '14px', color: '#6b7280', lineHeight: '1.6', margin: 0 }}>
                    深耕现货黄金交易服务领域，不断探索金融科技前沿，将安全系数、交易流动性与服务满意度做到行业第一，打造最具影响力的国际贵金属经纪商。
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
                  <h3 style={{ fontSize: '18px', fontWeight: '700', color: '#111827', margin: '0 0 12px' }}>核心价值观</h3>
                  <p style={{ fontSize: '14px', color: '#6b7280', lineHeight: '1.6', margin: 0 }}>
                    <strong>至诚守信</strong>：绝无虚假报价，无隐性费用。<br />
                    <strong>合规自律</strong>：自愿接受超高标准监管，客户资金独立托管。<br />
                    <strong>客户至上</strong>：全天候专人一对一高效解答。
                  </p>
                </div>
              </FadeInSection>
            </Col>
          </Row>
        </div>
      </section>

      {/* =================【4. 数据看板】================= */}
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

      {/* =================【5. 四大优势（仿 jrjr 优势排版）】================= */}
      <section className="site-section" style={{ background: '#F5F7FA', padding: '64px 20px' }}>
        <div className="site-section-inner" style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '44px' }}>
            <h2 style={{ fontSize: '28px', fontWeight: '700', color: '#111827', margin: '0 0 8px' }}>四大核心交易保障</h2>
            <p style={{ fontSize: '15px', color: '#6b7280', margin: 0 }}>专业级的交易要素配置，助力您稳健捕捉全球黄金市场行情</p>
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

      {/* =================【6. 发展里程碑时间轴（仿 jrjr 精美轴线）】================= */}
      <section className="site-section" style={{ background: '#ffffff', padding: '64px 20px' }}>
        <div className="site-section-inner" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <h2 style={{ fontSize: '28px', fontWeight: '700', color: '#111827', margin: '0 0 8px' }}>品牌发展历程</h2>
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

      {/* =================【7. 联系方式卡片】================= */}
      <section className="site-section" style={{ background: '#F5F7FA', padding: '60px 20px' }}>
        <div className="site-section-inner" style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <Row gutter={[24, 24]}>
            <Col xs={24} md={8}>
              <div style={{ background: '#ffffff', padding: '24px', borderRadius: '10px', border: '1px solid #e5e7eb', textAlign: 'center', height: '100%' }}>
                <EnvironmentOutlined style={{ fontSize: '28px', color: '#f39800', marginBottom: '12px' }} />
                <div style={{ fontSize: '13px', color: '#6b7280', marginBottom: '4px' }}>总部办公场所</div>
                <div style={{ fontSize: '14px', fontWeight: '600', color: '#111827', lineHeight: '1.4' }}>
                  香港九龙尖沙咀么地道62号永安广场12楼1205B室
                </div>
              </div>
            </Col>
            <Col xs={24} md={8}>
              <div style={{ background: '#ffffff', padding: '24px', borderRadius: '10px', border: '1px solid #e5e7eb', textAlign: 'center', height: '100%' }}>
                <PhoneOutlined style={{ fontSize: '28px', color: '#f39800', marginBottom: '12px' }} />
                <div style={{ fontSize: '13px', color: '#6b7280', marginBottom: '4px' }}>官方联系热线</div>
                <div style={{ fontSize: '16px', fontWeight: '700', color: '#111827' }}>
                  +852 2882 9868
                </div>
              </div>
            </Col>
            <Col xs={24} md={8}>
              <div style={{ background: '#ffffff', padding: '24px', borderRadius: '10px', border: '1px solid #e5e7eb', textAlign: 'center', height: '100%' }}>
                <MailOutlined style={{ fontSize: '28px', color: '#f39800', marginBottom: '12px' }} />
                <div style={{ fontSize: '13px', color: '#6b7280', marginBottom: '4px' }}>企业客服邮箱</div>
                <div style={{ fontSize: '15px', fontWeight: '600', color: '#111827' }}>
                  cs@desonmetals.com
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </section>

      {/* =================【8. 风险披露条款】================= */}
      <PageDisclaimer />
    </div>
  );
}
