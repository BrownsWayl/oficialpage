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
  // 动态市场报价状态 (初始化为 desonmetals.net 官方当前的真实大盘金银现货价格，黄金对齐至 4408)
  const [prices, setPrices] = useState({
    goldBid: 4408.21,
    goldAsk: 4408.51,
    silverBid: 65.857,
    silverAsk: 65.887,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setPrices(prev => {
        const goldDiff = (Math.random() - 0.5) * 0.4; // +/- 20美分波动
        const newGoldBid = +(prev.goldBid + goldDiff).toFixed(2);
        const newGoldAsk = +(newGoldBid + 0.30).toFixed(2); // 维持 0.30 点差

        const silverDiff = (Math.random() - 0.5) * 0.04; // +/- 2美分波动
        const newSilverBid = +(prev.silverBid + silverDiff).toFixed(3);
        const newSilverAsk = +(newSilverBid + 0.030).toFixed(3); // 维持 0.030 点差

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

  // 1. 公司四大核心优势 (对应 3-1.png 到 3-4.png 完整的水平/垂直大图)
  const advantages = [
    {
      id: 1,
      image: '/3-1.png',
      icon: <SafetyCertificateOutlined style={{ color: '#f39800' }} />,
      title: '合规牌照与资金隔离安全',
      subtitle: '权威监管 · 100% 银行独立托管',
      desc: '严格遵守国际金融行业监管公约。德生贵金属客户所有注入资金全面存放于独立信托银行的隔离账户中，与平台运营资金完全剥离，出入金极速高效，保障每一分资金的安全与纯粹。',
      highlights: ['独立银行信托隔离托管', '国际权威标准规范运营', '资金秒级存取安全有据'],
    },
    {
      id: 2,
      image: '/3-2.png',
      icon: <ThunderboltOutlined style={{ color: '#f39800' }} />,
      title: '高精尖 MTL 智能交易系统',
      subtitle: '深厚流动性 · 毫秒级极速成交',
      desc: '自研高精尖风控引擎全面对接国际主流 MetaTrader 5 (MT5) 交易系统。提供 0.05 秒极速成交性能，彻底告别滑点与卡盘延迟，在急剧波动的行情中依然精准锁价。',
      highlights: ['0.05秒极速智能风控撮合', '直连国际顶级流动性供应商', '支持量化高频 EA 智能交易'],
    },
    {
      id: 3,
      image: '/3-3.png',
      icon: <PercentageOutlined style={{ color: '#f39800' }} />,
      title: '点差直降与零隐藏佣金成本',
      subtitle: '点差极低 · 投资利润摩擦大幅缩减',
      desc: '直接从多方流动性提供商获取即时最深报价，点差低至 0 起。德生不设任何隐藏收费或额外交易佣金，真正将高转化、低交易成本让利于每一位投资者。',
      highlights: ['伦敦金点差低至 0 起手', '零附加手续费与出入款费用', '提供丰厚新客赠金交易支持'],
    },
    {
      id: 4,
      image: '/3-4.png',
      icon: <TeamOutlined style={{ color: '#f39800' }} />,
      title: '一对一 24/7 专业顾问支持',
      subtitle: '多语言极速解答 · 全天候交易保障',
      desc: '汇聚多年贵金属国际风控与实战经验的专家级客服团队。为您提供 24 小时在线解答、交易技术协助、开户流程辅助等，让您的交易旅程始终稳健前行。',
      highlights: ['多语言客服团队全天在线', '专家风控指导与投顾支持', '一对一专属大客户VIP服务'],
    },
  ];

  // 3. 仿金荣中国开户三步法
  const steps = [
    {
      title: '1. 提交资料极速注册',
      desc: '在线输入您的手机号码、邮箱，1分钟内即可自动生成专属实盘或模拟账号。',
      action: '立即注册',
      link: '/register',
    },
    {
      title: '2. 安全注资免手续费',
      desc: '支持网银、快捷钱包等多种合规安全通道，100%银行托管隔离，秒级到账。',
      action: '前往注资',
      link: '/login',
    },
    {
      title: '3. 连入MT5开启盈利',
      desc: '免费下载安装 MetaTrader 5，输入德生专用服务器，开启伦敦金/银智投之旅。',
      action: '下载平台',
      link: '/appdown',
    },
  ];

  // 行情报价表数据 (伦敦金、伦敦银)
  const columns = [
    { title: '交易品种', dataIndex: 'name', key: 'name', render: (text, record) => <span><strong>{text}</strong> <small style={{ color: '#8c8c8c' }}>({record.symbol})</small></span> },
    { title: '最新买价 (Bid)', dataIndex: 'bid', key: 'bid', render: (text) => <span style={{ color: '#22c55e', fontWeight: 'bold' }}>{text}</span> },
    { title: '最新卖价 (Ask)', dataIndex: 'ask', key: 'ask', render: (text) => <span style={{ color: '#ef4444', fontWeight: 'bold' }}>{text}</span> },
    { title: '最低点差 (Spread)', dataIndex: 'spread', key: 'spread', render: (text) => <span style={{ color: '#f39800', fontWeight: 'bold' }}>{text}</span> },
    { title: '最高杠杆', dataIndex: 'leverage', key: 'leverage' },
    { title: '产品优势', dataIndex: 'advantage', key: 'advantage' },
  ];

  const marketData = [
    { key: '1', name: '伦敦金', symbol: 'XAUUSD', bid: prices.goldBid.toFixed(2), ask: prices.goldAsk.toFixed(2), spread: '$0.30 / 免佣金', leverage: '1:100 - 1:500', advantage: '波动活跃 · 投资避险神品' },
    { key: '2', name: '伦敦银', symbol: 'XAGUSD', bid: prices.silverBid.toFixed(3), ask: prices.silverAsk.toFixed(3), spread: '$0.030 / 免佣金', leverage: '1:100 - 1:200', advantage: '双向获利 · 小资金撬动大盈利' },
  ];

  return (
    <div className="site-page" style={{ background: '#F5F7FA', color: '#333333' }}>
      {/* =================【1. 尊邃黑金奢华首屏 Hero Section】================= */}
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
              🏆 香港金银业贸易场权威规范标准运营品牌
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
              德生贵金属 <span style={{ color: '#f39800' }}>伦敦金 / 伦敦银</span> <br />
              全球权威一站式电子交易平台
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
              直连国际顶级 MetaTrader 5 交易系统，提供极速 0.05 秒订单成交体验与 100% 银行独立信托账户隔离托管，以极低点差成本与全天候贴心咨询，倾力打造无可匹敌的安全投资环境。
            </p>

            {/* 首屏行动按键 */}
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
                  立即开立交易账号 <ArrowRightOutlined />
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
                  免费下载交易终端
                </Button>
              </Link>
            </div>

            {/* 首屏四大计数器 (仿金荣数据面板) */}
            <Row gutter={[16, 16]} style={{ maxWidth: '720px', margin: '0 auto' }}>
              {[
                { label: '服务全球客户数', end: 1000000, suffix: '人+', prefix: '' },
                { label: '平均订单延迟', end: 0, suffix: '秒', prefix: '0.05' },
                { label: '平台隐藏交易费', end: 0, suffix: '元', prefix: '0' },
                { label: '客户资金托管率', end: 100, suffix: '%', prefix: '' },
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

      {/* =================【2. 实时行情滚动条 Market Ticker】================= */}
      <MarketTicker />

      {/* =================【3. 独立大图版块：伦敦金与伦敦银产品指南 (插入 1.png 完整原图，带纯白背景色)】================= */}
      <section className="site-section" style={{ background: '#ffffff', padding: isMobile ? '48px 16px' : '72px 20px' }}>
        <div className="site-section-inner">
          <FadeInSection>
            <h2 className="site-section-title" style={{ color: '#090e17' }}>
              国际主流交易产品：伦敦金 & 伦敦银
            </h2>
            <p className="site-section-subtitle" style={{ color: '#6b7280', maxWidth: '750px', margin: '0 auto 40px' }}>
              伦敦金、伦敦银为全球投资者首选的双向杠杆避险工具。德生贵金属提供全天候公正行情，直连国际一级柜台成交。
            </p>
          </FadeInSection>

          <Row gutter={[32, 32]} align="middle">
            {/* 左侧：PNG产品大图，带专门的白色背景色并保持 height: 'auto' 避免文字和内容被裁剪 */}
            <Col xs={24} lg={14}>
              <FadeInSection>
                <div
                  style={{
                    background: '#ffffff', // 关键点：给 PNG 图片一个纯白底色
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
                    alt="伦敦金 / 伦敦银 交易特点"
                    style={{
                      width: '100%',
                      height: 'auto', // 关键点：自适应比例，无任何高宽限制，确保图片内的文字和图表绝对完整不裁剪
                      display: 'block',
                      objectFit: 'contain',
                    }}
                  />
                </div>
              </FadeInSection>
            </Col>

            {/* 右侧：产品解析文案 */}
            <Col xs={24} lg={10}>
              <FadeInSection>
                <div style={{ padding: isMobile ? '0' : '0 12px' }}>
                  <Tag color="rgba(243, 152, 0, 0.1)" style={{ color: '#f39800', border: 'none', fontWeight: 'bold', fontSize: '12px', marginBottom: '12px' }}>
                    SPOT CONTRACT DETAILS
                  </Tag>
                  <h3 style={{ fontSize: '24px', fontWeight: 'bold', color: '#090e17', marginBottom: '16px' }}>
                    极简智能机制，双向博弈商机
                  </h3>
                  <p style={{ fontSize: '14px', color: '#6b7280', lineHeight: '1.7', marginBottom: '20px' }}>
                    如上图所示，伦敦金与伦敦银采用双向保证金T+0机制。无论行情上涨或是走低，只要方向研判正确，即有盈利商机。在德生，一笔交易最低只需 0.01 手即可建仓，让您以轻量级资金稳妥把握全球大宗商品风口。
                  </p>

                  <div style={{ background: '#f8fafc', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #f39800', marginBottom: '24px' }}>
                    <h4 style={{ fontSize: '15px', fontWeight: 'bold', color: '#090e17', margin: '0 0 6px' }}>💡 德生零息持仓政策：</h4>
                    <p style={{ fontSize: '12px', color: '#6b7280', margin: 0, lineHeight: '1.5' }}>
                      对比其他收取高额过夜息的交易所，德生提供灵活低息持仓待遇，全方位呵护您的中长线波段套利单。
                    </p>
                  </div>

                  <div style={{ display: 'flex', gap: '16px' }}>
                    <Link to="/register">
                      <Button type="primary" size="large" style={{ background: '#090e17', borderColor: '#090e17', borderRadius: '8px', fontWeight: 'bold', fontSize: '14px' }}>
                        立即开户体验
                      </Button>
                    </Link>
                    <Link to="/about">
                      <Button size="large" style={{ borderRadius: '8px', fontWeight: 'bold', fontSize: '14px' }}>
                        产品机制详释
                      </Button>
                    </Link>
                  </div>
                </div>
              </FadeInSection>
            </Col>
          </Row>
        </div>
      </section>

      {/* =================【4. 德生四大优势重新设计 (2列卡片布局，带纯白背景色PNG，宽展视野文字不裁剪)】================= */}
      <section className="site-section" style={{ background: '#F5F7FA', padding: isMobile ? '48px 16px' : '72px 20px', borderTop: '1px solid #e5e7eb', borderBottom: '1px solid #e5e7eb' }}>
        <div className="site-section-inner">
          <FadeInSection>
            <h2 className="site-section-title" style={{ color: '#090e17' }}>
              德生贵金属 4 大中枢价值
            </h2>
            <p className="site-section-subtitle" style={{ color: '#6b7280', maxWidth: '750px', margin: '0 auto 48px' }}>
              我们重新规划了优势卡片的设计。采用高清晰度的 **双列大宽度布局** 且完全取消高度裁剪，配合 **纯白 PNG 背景色**，确保图片内的所有关键文字在任何终端都清晰呈现。
            </p>
          </FadeInSection>

          {/* 优势列表：重新设计为 电脑端 2 列、手机端 1 列，大幅扩增宽度让 banner 文字显示更饱满 */}
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
                      {/* 上半部分：完整的优势 PNG 架构图片，设置 pure white 背景色、100% 宽度和 height: 'auto' */}
                      <Col xs={24}>
                        <div
                          style={{
                            background: '#ffffff', // 关键点 1：给 PNG 精美原图一个白色背景色
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
                              height: 'auto', // 关键点 2：高度完全自适应，无裁剪，确保图片包含的文字和架构图原汁原味显示
                              display: 'block',
                              objectFit: 'contain',
                              borderRadius: '8px',
                            }}
                          />
                        </div>
                      </Col>

                      {/* 下半部分：文本说明区 */}
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

                          {/* 核心特点精梳 */}
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

      {/* =================【5. 实时报价参数与交易要素表】================= */}
      <section className="site-section" style={{ background: '#ffffff', padding: isMobile ? '48px 16px' : '72px 20px' }}>
        <div className="site-section-inner">
          <FadeInSection>
            <h2 className="site-section-title" style={{ color: '#090e17' }}>
              规范透明的实时交易行情
            </h2>
            <p className="site-section-subtitle" style={{ color: '#6b7280', maxWidth: '750px', margin: '0 auto 40px' }}>
              拒绝后台黑箱，直通国际最权威的金银报价大盘，买卖点差全面公开。
            </p>
          </FadeInSection>

          {/* 报价表格展示 */}
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
                <h3 style={{ fontSize: '18px', fontWeight: 'bold', margin: '8px 0 12px', color: '#090e17' }}>伦敦金（Spot Gold）投资契机</h3>
                <p style={{ fontSize: '13px', color: '#6b7280', lineHeight: '1.6', margin: 0 }}>
                  伦敦金作为全球交易最广的硬通货衍生品，在规避通胀、平息局势风险上具有独特的战略价值。德生提供 1:100 起的浮动交易杠杆，仅需 100 美元即可参与波动、随时兑换利润。
                </p>
              </div>
            </Col>
            <Col xs={24} md={12}>
              <div style={{ background: '#f8fafc', border: '1px solid #e5e7eb', borderRadius: '12px', padding: '24px' }}>
                <span style={{ color: '#f39800', fontWeight: 'bold', fontSize: '13px', textTransform: 'uppercase' }}>Silver Advantage</span>
                <h3 style={{ fontSize: '18px', fontWeight: 'bold', margin: '8px 0 12px', color: '#090e17' }}>伦敦银（Spot Silver）投资契机</h3>
                <p style={{ fontSize: '13px', color: '#6b7280', lineHeight: '1.6', margin: 0 }}>
                  白银波动单价更亲民，但日振幅百分比大，具有极好的短线波段爆发力。德生无附加点差加佣政策，极大程度呵护量化交易和多空交叉平仓。
                </p>
              </div>
            </Col>
          </Row>
        </div>
      </section>

      {/* =================【7. 极致交易引擎与软件下载 MetaTrader 5】================= */}
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
            {/* 左边：下载介绍与按键 */}
            <Col xs={24} md={12}>
              <div>
                <Tag color="rgba(243, 152, 0, 0.15)" style={{ color: '#f39800', border: 'none', fontWeight: 'bold', marginBottom: '16px' }}>
                  ⚡ INTERNATIONAL TRADING TERMINAL
                </Tag>
                <h2 style={{ fontSize: isMobile ? '28px' : '36px', fontWeight: 'bold', color: '#ffffff', margin: '0 0 16px' }}>
                  配备国际主流交易终端 <br />
                  <span style={{ color: '#f39800' }}>MetaTrader 5 (MT5)</span>
                </h2>
                <p style={{ color: '#9ca3af', fontSize: '14px', lineHeight: '1.6', marginBottom: '32px' }}>
                  德生贵金属全面深度接入全球公认顶级的电子交易商平台 MT5。该平台以深厚的图表分析指标、极速的限价单成交模式和出色的高频量化 EA 自动投资支持而享誉世界。不管是电脑端专业多屏交互、还是移动端随时随地跟单，德生服务器皆可做到完美直连。
                </p>

                {/* 各终端下载按钮群 */}
                <Row gutter={[12, 12]} style={{ marginBottom: '24px' }}>
                  <Col xs={12} sm={8}>
                    <a href="https://download.mql5.com/cdn/web/metaquotes.software.corp/mt5/mt5setup.exe" target="_blank" rel="noopener noreferrer">
                      <Button block icon={<WindowsOutlined />} style={{ height: '46px', background: 'rgba(255,255,255,0.05)', color: '#fff', borderColor: 'rgba(255,255,255,0.15)', borderRadius: '6px' }}>
                        Windows 客户端
                      </Button>
                    </a>
                  </Col>
                  <Col xs={12} sm={8}>
                    <Link to="/appdown">
                      <Button block icon={<AndroidOutlined />} style={{ height: '46px', background: 'rgba(255,255,255,0.05)', color: '#fff', borderColor: 'rgba(255,255,255,0.15)', borderRadius: '6px' }}>
                        Android 下载
                      </Button>
                    </Link>
                  </Col>
                  <Col xs={24} sm={8}>
                    <Link to="/appdown">
                      <Button block icon={<AppleOutlined />} style={{ height: '46px', background: 'rgba(255,255,255,0.05)', color: '#fff', borderColor: 'rgba(255,255,255,0.15)', borderRadius: '6px' }}>
                        iOS 专属版
                      </Button>
                    </Link>
                  </Col>
                </Row>

                <div style={{ background: 'rgba(243, 152, 0, 0.05)', borderLeft: '3px solid #f39800', padding: '12px 16px', borderRadius: '4px' }}>
                  <div style={{ fontSize: '13px', color: '#f39800', fontWeight: 'bold' }}>🔍 连入德生专用服务器：</div>
                  <div style={{ fontSize: '12px', color: '#9ca3af', marginTop: '4px' }}>
                    在 MT5 中添加交易商搜索：<strong style={{ color: '#fff' }}>Deson Metals</strong>。真实账户选择服务器 <strong style={{ color: '#fff' }}>DesonMetals-Live</strong>。
                  </div>
                </div>
              </div>
            </Col>

            {/* 右边：MT5 电脑大屏交互 3D Mockup 动画 */}
            <Col xs={24} md={12}>
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <DesktopMockup />
              </div>
            </Col>
          </Row>
        </div>
      </section>

      {/* =================【8. 三步开户指引 —— 仿金荣中国开户中枢】================= */}
      <section className="site-section" style={{ background: '#ffffff', padding: isMobile ? '48px 16px' : '72px 20px' }}>
        <div className="site-section-inner">
          <FadeInSection>
            <h2 className="site-section-title" style={{ color: '#090e17' }}>
              只需 3 步 · 即刻开启尊贵智投之旅
            </h2>
            <p className="site-section-subtitle" style={{ color: '#6b7280', maxWidth: '750px', margin: '0 auto 48px' }}>
              开户简单、注资高效、秒速交易，为投资者打通极简出金和高效入金的尊贵坦途。
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
                    {/* 数字圆圈 */}
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

      {/* =================【9. 安全资质监管与承诺】================= */}
      <section className="site-section" style={{ background: '#F5F7FA', padding: isMobile ? '48px 16px' : '72px 20px', borderTop: '1px solid #e5e7eb' }}>
        <div className="site-section-inner">
          <Row gutter={[40, 40]} align="middle">
            <Col xs={24} md={12}>
              <FadeInSection>
                <Tag color="rgba(34, 197, 94, 0.1)" style={{ color: '#22c55e', border: 'none', fontWeight: 'bold', marginBottom: '16px' }}>
                  🛡️ FUND SAFETY AND COMPLIANCE
                </Tag>
                <h2 style={{ fontSize: '28px', fontWeight: 'bold', color: '#090e17', margin: '0 0 16px' }}>
                  资金隔离与金融风控安全
                </h2>
                <p style={{ color: '#6b7280', fontSize: '14px', lineHeight: '1.6', marginBottom: '24px' }}>
                  在德生，合规安全与透明公开始终被摆在首要位置。平台不触碰客户投资本金。所有客户出入资金独立隔离存放在大型托管商业银行信托独立账户中。德生接受行业权威自律与合规内审，全方位确保大资金交易和日常小资金存取款在秒级安全通道内畅通流转。
                </p>

                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {[
                    '独立托管：客户本金与交易商运营流水100%隔离',
                    '合规经营：秉持最严格的国际与香港行业内控规约',
                    '极速存取：多通道快速存取款方案，日内出款秒级核算',
                    '银行级加密：网站数据及传输渠道皆由 SSL 256位高级加密保护',
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
                {/* 盾牌动态图形展示 */}
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
                    {/* 同心旋转光环 */}
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

      {/* =================【10. 页尾统一免责申明】================= */}
      <section style={{ background: '#111111', padding: '40px 20px', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <div className="site-section-inner">
          <PageDisclaimer />
        </div>
      </section>

      {/* 内联注入全局微动效样式，无需额外修改CSS文件即可实现悬浮和旋转效果 */}
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
