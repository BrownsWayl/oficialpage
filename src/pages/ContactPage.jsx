import { useState } from 'react';
import { Form, Input, Button, message, Row, Col, Card, Grid } from 'antd';
import {
  CustomerServiceOutlined,
  MailOutlined,
  EnvironmentOutlined,
  ClockCircleOutlined,
  CopyOutlined,
  SafetyCertificateOutlined,
} from '@ant-design/icons';
import { FadeInSection, PageDisclaimer } from '../components/site/SiteSections';
import '../styles/sitePages.css';

const { TextArea } = Input;
const { useBreakpoint } = Grid;

export default function ContactPage() {
  const [form] = Form.useForm();
  const [submitting, setSubmitting] = useState(false);
  const screens = useBreakpoint();

  // 当屏幕小于 md (768px) 时判定为移动端布局
  const isMobile = screens.md === false;

  const containerStyle = {
    background: '#F5F7FA',
    color: '#333333',
    width: '100%',
    minHeight: '100%',
  };

  const onFinish = (values) => {
    setSubmitting(true);
    // 模拟提交留言的网络请求
    setTimeout(() => {
      setSubmitting(false);
      message.success('您的留言已成功提交，德生客户经理将在 1 个工作日内给予您答复！');
      console.log('留言提交数据:', values);
      form.resetFields();
    }, 1200);
  };

  return (
    <div className="site-page" style={containerStyle}>
      {/* =================【1. 尊贵深邃暗色 Hero Section】================= */}
      <section
        className="site-hero"
        style={{
          background: 'linear-gradient(135deg, #090e17 0%, #000000 100%)',
          minHeight: '400px',
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
            联系我们
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
            联系我们 <span style={{ color: '#f39800', background: 'none', WebkitTextFillColor: 'initial', textFillColor: 'initial' }}>Contact Us</span>
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
            德生贵金属秉承至诚态度，为您提供全天候 24 小时的金融投资服务支持。不论是关于 MT5 交易系统、账户开立、出入金操作还是商务合作，我们随时在此为您解答。
          </p>
        </div>
      </section>

      {/* =================【2. 四列极速联系通道卡片（仿 jrjr 核心卡片组）】================= */}
      <section className="site-section" style={{ background: '#F5F7FA', padding: '64px 20px 32px' }}>
        <div className="site-section-inner" style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <Row gutter={[24, 24]}>
            {/* 卡片 1: 在线客服 */}
            <Col xs={24} sm={12} lg={6}>
              <FadeInSection>
                <Card
                  hoverable
                  style={{
                    height: '240px',
                    borderRadius: '12px',
                    border: '1px solid #e5e7eb',
                    background: '#ffffff',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.015)',
                  }}
                  styles={{ body: { padding: '24px', display: 'flex', flexDirection: 'column', height: '240px', justifyContent: 'space-between', boxSizing: 'border-box' } }}
                >
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
                      <div style={{ background: 'rgba(243, 152, 0, 0.1)', padding: '10px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <CustomerServiceOutlined style={{ fontSize: '22px', color: '#f39800' }} />
                      </div>
                      <span style={{ fontSize: '17px', fontWeight: '700', color: '#111827' }}>24/7 在线客服</span>
                    </div>
                    <p style={{ fontSize: '13.5px', color: '#4b5563', margin: 0, lineHeight: '1.6' }}>
                      极速解答您的账户开立、资金存取、以及交易执行中的任何紧急疑问。
                    </p>
                  </div>
                  <Button
                    type="primary"
                    shape="round"
                    size="middle"
                    style={{
                      background: '#f39800',
                      borderColor: '#f39800',
                      fontWeight: '600',
                      width: '100%',
                      marginTop: '12px'
                    }}
                    onClick={() => message.info('正在为您连接德生专属 24/7 在线客服系统...')}
                  >
                    开始对话
                  </Button>
                </Card>
              </FadeInSection>
            </Col>

            {/* 卡片 2: 客服邮箱 */}
            <Col xs={24} sm={12} lg={6}>
              <FadeInSection>
                <Card
                  hoverable
                  style={{
                    height: '240px',
                    borderRadius: '12px',
                    border: '1px solid #e5e7eb',
                    background: '#ffffff',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.015)',
                  }}
                  styles={{ body: { padding: '24px', display: 'flex', flexDirection: 'column', height: '240px', justifyContent: 'space-between', boxSizing: 'border-box' } }}
                >
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
                      <div style={{ background: 'rgba(243, 152, 0, 0.1)', padding: '10px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <MailOutlined style={{ fontSize: '22px', color: '#f39800' }} />
                      </div>
                      <span style={{ fontSize: '17px', fontWeight: '700', color: '#111827' }}>官方客服邮箱</span>
                    </div>
                    <p style={{ fontSize: '13.5px', color: '#4b5563', margin: 0, lineHeight: '1.6' }}>
                      适合非紧急的技术疑问、合规咨询、大型机构或渠道商商务合作。
                    </p>
                  </div>
                  <div style={{ display: 'flex', gap: '8px', width: '100%', marginTop: '12px' }}>
                    <Button
                      type="default"
                      shape="round"
                      style={{
                        flex: 1,
                        fontWeight: '600',
                        borderColor: '#f39800',
                        color: '#f39800',
                      }}
                      href="mailto:cs@desonmetals.com"
                    >
                      发送邮件
                    </Button>
                    <Button
                      type="dashed"
                      shape="circle"
                      icon={<CopyOutlined />}
                      style={{ flexShrink: 0 }}
                      onClick={() => {
                        navigator.clipboard.writeText('cs@desonmetals.com');
                        message.success('客服邮箱 (cs@desonmetals.com) 已成功复制！');
                      }}
                    />
                  </div>
                </Card>
              </FadeInSection>
            </Col>

            {/* 卡片 3: 公司资质 */}
            <Col xs={24} sm={12} lg={6}>
              <FadeInSection>
                <Card
                  hoverable
                  style={{
                    height: '240px',
                    borderRadius: '12px',
                    border: '1px solid #e5e7eb',
                    background: '#ffffff',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.015)',
                  }}
                  styles={{ body: { padding: '24px', display: 'flex', flexDirection: 'column', height: '240px', justifyContent: 'space-between', boxSizing: 'border-box' } }}
                >
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
                      <div style={{ background: 'rgba(243, 152, 0, 0.1)', padding: '10px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <SafetyCertificateOutlined style={{ fontSize: '22px', color: '#f39800' }} />
                      </div>
                      <span style={{ fontSize: '17px', fontWeight: '700', color: '#111827' }}>官方合规资质</span>
                    </div>
                    <p style={{ fontSize: '14px', color: '#111827', margin: '0 0 6px', fontWeight: '700' }}>
                      德生貴金屬有限公司
                    </p>
                    <p style={{ fontSize: '13px', color: '#6b7280', margin: 0, lineHeight: '1.5' }}>
                      香港注册编号：77592183<br />
                      秉持国际金融公约的高标准合规运作，资金安全有保障。
                    </p>
                  </div>
                  <div style={{ fontSize: '12px', color: '#9ca3af', borderTop: '1px solid #f3f4f6', paddingTop: '8px', marginTop: '12px' }}>
                    通过香港法定标准注册审计
                  </div>
                </Card>
              </FadeInSection>
            </Col>

            {/* 卡片 4: 客户服务时间 */}
            <Col xs={24} sm={12} lg={6}>
              <FadeInSection>
                <Card
                  hoverable
                  style={{
                    height: '240px',
                    borderRadius: '12px',
                    border: '1px solid #e5e7eb',
                    background: '#ffffff',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.015)',
                  }}
                  styles={{ body: { padding: '24px', display: 'flex', flexDirection: 'column', height: '240px', justifyContent: 'space-between', boxSizing: 'border-box' } }}
                >
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
                      <div style={{ background: 'rgba(243, 152, 0, 0.1)', padding: '10px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <ClockCircleOutlined style={{ fontSize: '22px', color: '#f39800' }} />
                      </div>
                      <span style={{ fontSize: '17px', fontWeight: '700', color: '#111827' }}>客服支持时间</span>
                    </div>
                    <p style={{ fontSize: '13.5px', color: '#4b5563', margin: '0 0 6px', lineHeight: '1.6' }}>
                      <strong>网络在线客服时间：</strong><br />
                      交易日 24 小时全天候无休
                    </p>
                    <p style={{ fontSize: '12.5px', color: '#6b7280', margin: 0 }}>
                      （北京时间 周一 07:00 - 周六 03:00）
                    </p>
                  </div>
                  <div style={{ fontSize: '12px', color: '#9ca3af', borderTop: '1px solid #f3f4f6', paddingTop: '8px', marginTop: '12px' }}>
                    周末及法定节假日特设值班服务
                  </div>
                </Card>
              </FadeInSection>
            </Col>
          </Row>
        </div>
      </section>

      {/* =================【3. 双列联动（留言表单 + 物理位置/香港总部大厦图）】================= */}
      <section className="site-section" style={{ background: '#ffffff', padding: '32px 20px 64px' }}>
        <div className="site-section-inner" style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <Row gutter={[40, 40]}>
            {/* 左侧：留言反馈表单 */}
            <Col xs={24} md={12}>
              <FadeInSection>
                <div
                  style={{
                    background: '#ffffff',
                    padding: isMobile ? '24px' : '40px',
                    borderRadius: '12px',
                    border: '1px solid #e2e8f0',
                    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.02)',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                    <div style={{ width: '4px', height: '22px', background: '#f39800', borderRadius: '2px' }} />
                    <span style={{ fontSize: '22px', fontWeight: '800', color: '#111827' }}>在线留言反馈</span>
                  </div>
                  <p style={{ fontSize: '14px', color: '#6b7280', marginBottom: '28px', lineHeight: '1.6' }}>
                    如果您对我们的贵金属现货交易、合作方案有任何的疑问或建议，欢迎填表留下您的联系方式，专业的客户经理会在第一时间与您沟通。
                  </p>

                  <Form
                    form={form}
                    layout="vertical"
                    onFinish={onFinish}
                    requiredMark={false}
                  >
                    <Form.Item
                      label={<span style={{ fontWeight: '600', color: '#4b5563', fontSize: '13.5px' }}>名字 (Name)</span>}
                      name="name"
                      rules={[{ required: true, message: '请输入您的尊姓大名' }]}
                    >
                      <Input placeholder="请填写您的姓名" size="large" style={{ borderRadius: '8px' }} />
                    </Form.Item>

                    <Form.Item
                      label={<span style={{ fontWeight: '600', color: '#4b5563', fontSize: '13.5px' }}>电子邮箱 (Email)</span>}
                      name="email"
                      rules={[
                        { required: true, message: '请输入您的电子邮箱' },
                        { type: 'email', message: '请输入有效的邮箱地址，以便我们答复' }
                      ]}
                    >
                      <Input placeholder="name@example.com" size="large" style={{ borderRadius: '8px' }} />
                    </Form.Item>

                    <Form.Item
                      label={<span style={{ fontWeight: '600', color: '#4b5563', fontSize: '13.5px' }}>留言主题 (Subject)</span>}
                      name="subject"
                      rules={[{ required: true, message: '请写明您留言的主要内容分类' }]}
                    >
                      <Input placeholder="如：开户疑问、MT5配置、代理合作等" size="large" style={{ borderRadius: '8px' }} />
                    </Form.Item>

                    <Form.Item
                      label={<span style={{ fontWeight: '600', color: '#4b5563', fontSize: '13.5px' }}>留言内容 (Message)</span>}
                      name="message"
                      rules={[{ required: true, message: '请填写留言的详细内容' }]}
                    >
                      <TextArea
                        rows={4}
                        placeholder="请输入您的建议、反馈或者合作疑问，德生倾听您的每一个声音..."
                        size="large"
                        style={{ borderRadius: '8px', resize: 'none' }}
                      />
                    </Form.Item>

                    <Form.Item style={{ marginBottom: 0, marginTop: '28px' }}>
                      <Button
                        type="primary"
                        htmlType="submit"
                        loading={submitting}
                        size="large"
                        shape="round"
                        style={{
                          background: '#f39800',
                          borderColor: '#f39800',
                          fontWeight: '700',
                          width: '100%',
                          height: '48px',
                          fontSize: '15px',
                        }}
                      >
                        提交留言
                      </Button>
                    </Form.Item>
                  </Form>
                </div>
              </FadeInSection>
            </Col>

            {/* 右侧：物理位置 + 香港永安广场办公大楼美图 (6-2.jpg) */}
            <Col xs={24} md={12}>
              <FadeInSection>
                <div
                  style={{
                    background: '#ffffff',
                    padding: isMobile ? '24px' : '40px',
                    borderRadius: '12px',
                    border: '1px solid #e2e8f0',
                    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.02)',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                  }}
                >
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
                      <div style={{ width: '4px', height: '22px', background: '#f39800', borderRadius: '2px' }} />
                      <span style={{ fontSize: '22px', fontWeight: '800', color: '#111827' }}>德生香港总部</span>
                    </div>

                    <p style={{ fontSize: '14.5px', color: '#4b5563', lineHeight: '1.8', marginBottom: '24px' }}>
                      德生贵金属物理办公地点坐落于香港核心金融商业圈——尖沙咀尖东么地道永安广场（Wing On Plaza），办公环境优雅，紧邻维多利亚港，交通便捷。
                    </p>

                    <div style={{ display: 'flex', gap: '12px', marginBottom: '24px' }}>
                      <EnvironmentOutlined style={{ fontSize: '20px', color: '#f39800', marginTop: '4px', flexShrink: 0 }} />
                      <div>
                        <div style={{ fontWeight: '700', color: '#111827', fontSize: '15px' }}>
                          法定注册 & 办公地址 (Registered & Office Address)
                        </div>
                        <div style={{ color: '#4b5563', fontSize: '14px', marginTop: '6px', lineHeight: '1.6' }}>
                          Room 1205B, 12/F, Wing On Plaza, 62 Mody Road, Tsim Sha Tsui, Hong Kong<br />
                          <span style={{ color: '#6b7280' }}>（香港尖沙咀麼地道62號永安廣場12樓1205B室）</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* 插入 6-2.jpg 并在底部添加精美的悬浮暗色信息 */}
                  <div
                    style={{
                      borderRadius: '10px',
                      overflow: 'hidden',
                      boxShadow: '0 8px 24px rgba(0, 0, 0, 0.08)',
                      position: 'relative',
                      marginTop: '16px',
                    }}
                    className="hover-scale-img-container"
                  >
                    <img
                      src="/6-2.jpg"
                      alt="德生贵金属办公大楼 - 香港尖东永安广场"
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
                        bottom: 0,
                        left: 0,
                        right: 0,
                        background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.4) 60%, rgba(0,0,0,0) 100%)',
                        padding: '20px',
                        color: '#ffffff',
                      }}
                    >
                      <div style={{ fontWeight: '800', fontSize: '16px', letterSpacing: '0.5px' }}>
                        香港尖沙咀永安广场 (Wing On Plaza)
                      </div>
                      <div style={{ fontSize: '12.5px', opacity: 0.85, marginTop: '4px' }}>
                        国际金融枢纽实体办公场地 · 隔离独立信托账户 · 安全放心之选
                      </div>
                    </div>
                  </div>
                </div>
              </FadeInSection>
            </Col>
          </Row>
        </div>
      </section>

      {/* =================【4. 底部严谨金融合规免责声明】================= */}
      <section style={{ padding: '48px 20px', background: '#0a0f19', borderTop: '1px solid rgba(255, 255, 255, 0.05)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <PageDisclaimer />
        </div>
      </section>
    </div>
  );
}
