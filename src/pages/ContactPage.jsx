import { useState } from 'react';
import { Form, Input, Button, message, Row, Col, Card, Grid } from 'antd';
import {
  CustomerServiceOutlined,
  MailOutlined,
  EnvironmentOutlined,
  ClockCircleOutlined,
  CopyOutlined,
  SafetyCertificateOutlined,
  TeamOutlined,
} from '@ant-design/icons';
import { FadeInSection, PageDisclaimer } from '../components/site/SiteSections';
import '../styles/sitePages.css';

const { TextArea } = Input;
const { useBreakpoint } = Grid;

export default function ContactPage() {
  const [form] = Form.useForm();
  const [submitting, setSubmitting] = useState(false);
  const screens = useBreakpoint();

  // 當屏幕小於 md (768px) 時判定為移動端布局
  const isMobile = screens.md === false;

  const containerStyle = {
    background: '#F5F7FA',
    color: '#333333',
    width: '100%',
    minHeight: '100%',
  };

  const onFinish = (values) => {
    setSubmitting(true);
    // 模擬提交留言的網絡請求
    setTimeout(() => {
      setSubmitting(false);
      message.success('您的留言已成功提交，德生客戶經理將在 3 個工作日內給予您答復！');
      console.log('留言提交數據:', values);
      form.resetFields();
    }, 1200);
  };

  return (
    <div className="site-page" style={containerStyle}>
      {/* =================【1. 尊貴深邃暗色 Hero Section】================= */}
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
            聯系我們
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
            聯系我們 <span style={{ color: '#f39800', background: 'none', WebkitTextFillColor: 'initial', textFillColor: 'initial' }}>Contact Us</span>
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
            德生貴金屬秉承至誠態度，為您提供全天候 24 小時的金融投資服務支持。不論是關於 MT5 交易系統、賬戶開立、出入金操作還是商務合作，我們隨時在此為您解答。
          </p>
        </div>
      </section>

      {/* =================【2. 四列極速聯系通道卡片（仿 jrjr 核心卡片組）】================= */}
      <section className="site-section" style={{ background: '#F5F7FA', padding: '64px 20px 32px' }}>
        <div className="site-section-inner" style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <Row gutter={[24, 24]}>
            {/* 卡片 1: 代理商合作 */}
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
                        <TeamOutlined style={{ fontSize: '22px', color: '#f39800' }} />
                      </div>
                      <span style={{ fontSize: '17px', fontWeight: '700', color: '#111827' }}>全球代理合作</span>
                    </div>
                    <p style={{ fontSize: '13.5px', color: '#4b5563', margin: 0, lineHeight: '1.6' }}>
                      德生金業特設豐厚合伙人機制，提供業內極具競爭力的返傭與高速風控管理後台。
                    </p>
                  </div>
                  <Button
                    type="primary"
                    shape="round"
                    size="middle"
                    style={{
                      background: '#090e17',
                      borderColor: '#090e17',
                      fontWeight: '600',
                      width: '100%',
                      marginTop: '12px',
                      color: '#ffffff'
                    }}
                    onClick={() => {
                      form.setFieldsValue({
                        subject: '全球 IB 代理合作咨詢',
                        message: '你好，我對德生貴金屬的全球 IB 代理合作計劃非常感興趣，希望能了解具體的返傭細則、後台配置支持以及流動性方案。請安排專門的渠道經理與我聯系。'
                      });
                      message.success('已自動為您在下方填寫代理合作留言模板，請完善姓名與郵箱後提交！');
                      document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    立即咨詢合作
                  </Button>
                </Card>
              </FadeInSection>
            </Col>

            {/* 卡片 2: 客服郵箱 */}
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
                      <span style={{ fontSize: '17px', fontWeight: '700', color: '#111827' }}>官方客服郵箱</span>
                    </div>
                    <p style={{ fontSize: '13.5px', color: '#4b5563', margin: 0, lineHeight: '1.6' }}>
                      適合非緊急的技術疑問、合規咨詢、大型機構或渠道商商務合作。
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
                      發送郵件
                    </Button>
                    <Button
                      type="dashed"
                      shape="circle"
                      icon={<CopyOutlined />}
                      style={{ flexShrink: 0 }}
                      onClick={() => {
                        navigator.clipboard.writeText('cs@desonmetals.com');
                        message.success('客服郵箱 (cs@desonmetals.com) 已成功復制！');
                      }}
                    />
                  </div>
                </Card>
              </FadeInSection>
            </Col>

            {/* 卡片 3: 公司資質 */}
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
                      <span style={{ fontSize: '17px', fontWeight: '700', color: '#111827' }}>官方合規資質</span>
                    </div>
                    <p style={{ fontSize: '14px', color: '#111827', margin: '0 0 6px', fontWeight: '700' }}>
                      德生貴金屬有限公司
                    </p>
                    <p style={{ fontSize: '13px', color: '#6b7280', margin: 0, lineHeight: '1.5' }}>
                      香港註冊編號：77592183<br />
                      秉持國際金融公約的高標准合規運作，資金安全有保障。
                    </p>
                  </div>
                  <div style={{ fontSize: '12px', color: '#9ca3af', borderTop: '1px solid #f3f4f6', paddingTop: '8px', marginTop: '12px' }}>
                    通過香港法定標准註冊審計
                  </div>
                </Card>
              </FadeInSection>
            </Col>

            {/* 卡片 4: 客戶服務時間 */}
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
                      <span style={{ fontSize: '17px', fontWeight: '700', color: '#111827' }}>客服支持時間</span>
                    </div>
                    <p style={{ fontSize: '13.5px', color: '#4b5563', margin: '0 0 6px', lineHeight: '1.6' }}>
                      <strong>網絡在線客服時間：</strong><br />
                      交易日 24 小時全天候無休
                    </p>
                    <p style={{ fontSize: '12.5px', color: '#6b7280', margin: 0 }}>
                      （北京時間 周一 07:00 - 周六 03:00）
                    </p>
                  </div>
                  <div style={{ fontSize: '12px', color: '#9ca3af', borderTop: '1px solid #f3f4f6', paddingTop: '8px', marginTop: '12px' }}>
                    周末及法定節假日特設值班服務
                  </div>
                </Card>
              </FadeInSection>
            </Col>
          </Row>
        </div>
      </section>

      {/* =================【3. 雙列聯動（留言表單 + 物理位置/香港總部大廈圖）】================= */}
      <section className="site-section" style={{ background: '#ffffff', padding: '32px 20px 64px' }}>
        <div className="site-section-inner" style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <Row gutter={[40, 40]}>
            {/* 左側：留言反饋表單 */}
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
                    <span style={{ fontSize: '22px', fontWeight: '800', color: '#111827' }}>在線留言反饋</span>
                  </div>
                  <p style={{ fontSize: '14px', color: '#6b7280', marginBottom: '28px', lineHeight: '1.6' }}>
                    如果您對我們的貴金屬現貨交易、合作方案有任何的疑問或建議，歡迎填表留下您的聯系方式，專業的客戶經理會在第一時間與您溝通。
                  </p>

                  <Form
                    id="contact-form"
                    form={form}
                    layout="vertical"
                    onFinish={onFinish}
                    requiredMark={false}
                  >
                    <Form.Item
                      label={<span style={{ fontWeight: '600', color: '#4b5563', fontSize: '13.5px' }}>名字 (Name)</span>}
                      name="name"
                      rules={[{ required: true, message: '請輸入您的尊姓大名' }]}
                    >
                      <Input placeholder="請填寫您的姓名" size="large" style={{ borderRadius: '8px' }} />
                    </Form.Item>

                    <Form.Item
                      label={<span style={{ fontWeight: '600', color: '#4b5563', fontSize: '13.5px' }}>電子郵箱 (Email)</span>}
                      name="email"
                      rules={[
                        { required: true, message: '請輸入您的電子郵箱' },
                        { type: 'email', message: '請輸入有效的郵箱地址，以便我們答復' }
                      ]}
                    >
                      <Input placeholder="name@example.com" size="large" style={{ borderRadius: '8px' }} />
                    </Form.Item>

                    <Form.Item
                      label={<span style={{ fontWeight: '600', color: '#4b5563', fontSize: '13.5px' }}>留言主題 (Subject)</span>}
                      name="subject"
                      rules={[{ required: true, message: '請寫明您留言的主要內容分類' }]}
                    >
                      <Input placeholder="如：開戶疑問、MT5配置、代理合作等" size="large" style={{ borderRadius: '8px' }} />
                    </Form.Item>

                    <Form.Item
                      label={<span style={{ fontWeight: '600', color: '#4b5563', fontSize: '13.5px' }}>留言內容 (Message)</span>}
                      name="message"
                      rules={[{ required: true, message: '請填寫留言的詳細內容' }]}
                    >
                      <TextArea
                        rows={4}
                        placeholder="請輸入您的建議、反饋或者合作疑問，德生傾聽您的每一個聲音..."
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

            {/* 右側：物理位置 + 香港永安廣場辦公大樓美圖 (6-2.jpg) */}
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
                      <span style={{ fontSize: '22px', fontWeight: '800', color: '#111827' }}>德生香港總部</span>
                    </div>

                    <p style={{ fontSize: '14.5px', color: '#4b5563', lineHeight: '1.8', marginBottom: '24px' }}>
                      德生貴金屬物理辦公地點坐落於香港核心金融商業圈——尖沙咀尖東麼地道永安廣場（Wing On Plaza），辦公環境優雅，緊鄰維多利亞港，交通便捷。
                    </p>

                    <div style={{ display: 'flex', gap: '12px', marginBottom: '24px' }}>
                      <EnvironmentOutlined style={{ fontSize: '20px', color: '#f39800', marginTop: '4px', flexShrink: 0 }} />
                      <div>
                        <div style={{ fontWeight: '700', color: '#111827', fontSize: '15px' }}>
                          法定註冊 & 辦公地址 (Registered & Office Address)
                        </div>
                        <div style={{ color: '#4b5563', fontSize: '14px', marginTop: '6px', lineHeight: '1.6' }}>
                          Room 1205B, 12/F, Wing On Plaza, 62 Mody Road, Tsim Sha Tsui, Hong Kong<br />
                          <span style={{ color: '#6b7280' }}>（香港尖沙咀麼地道62號永安廣場12樓1205B室）</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* 插入 6-2.jpg 並在底部添加精美的懸浮暗色信息 */}
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
                      alt="德生貴金屬辦公大樓 - 香港尖東永安廣場"
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
                        香港尖沙咀永安廣場 (Wing On Plaza)
                      </div>
                      <div style={{ fontSize: '12.5px', opacity: 0.85, marginTop: '4px' }}>
                        國際金融樞紐實體辦公場地 · 隔離獨立信托賬戶 · 安全放心之選
                      </div>
                    </div>
                  </div>
                </div>
              </FadeInSection>
            </Col>
          </Row>
        </div>
      </section>

      {/* =================【4. 底部嚴謹金融合規免責聲明】================= */}
      <section style={{ padding: '48px 20px', background: '#0a0f19', borderTop: '1px solid rgba(255, 255, 255, 0.05)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <PageDisclaimer />
        </div>
      </section>
    </div>
  );
}
