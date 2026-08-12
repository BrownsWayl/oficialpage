import React, { useState } from 'react';
import { Layout, Menu, Button, Space, Drawer, Grid, Card, ConfigProvider } from 'antd';
import { GlobalOutlined, MenuOutlined } from '@ant-design/icons';

import { getMenuItems } from './menuConfig';
import { BrowserRouter as Router, Routes, Route, Navigate, Link } from 'react-router-dom';
import HomeContent from './HomeContent';
import { GlobalHeader } from './components/Header';
import AboutPage from './pages/AboutPage';
import AppDown from './pages/AppDown';
import ContactPage from './pages/ContactPage';

const { Header: AntdHeader, Content, Footer } = Layout;
const { useBreakpoint } = Grid;

export default function App() {
  const screens = useBreakpoint();
  const [drawerVisible, setDrawerVisible] = useState(false);

  // 當屏幕小於 md (768px) 時判定為移動手機端
  const isMobile = screens.md === false;

  // --- 樣式配置中心 ---
  const layoutStyle = {
    width: '100%',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
    background: '#F5F7FA'
  };

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#f39800',
        },
      }}
    >
      <Router>
        <Layout style={{ ...layoutStyle, background: '#F5F7FA' }}>
          <GlobalHeader isMobile={isMobile} setDrawerVisible={setDrawerVisible} />

          <Drawer
            placement="right"
            onClose={() => setDrawerVisible(false)}
            open={drawerVisible}
            size='large'
            closable={false}
            styles={{
              body: { padding: 0, background: '#02040a' },
              header: {
                background: '#000000',
                borderBottom: 'none',
                padding: '16px 16px 24px 16px',
              }
            }}
            title={
              <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {/* 第一行：Logo 與關閉鍵 */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <div style={{ width: '24px', height: '24px', background: '#f39800', borderRadius: '50%', marginRight: '8px' }} />
                    <span style={{ color: '#fff', fontWeight: 'bold', fontSize: '18px' }}>DS</span>
                  </div>
                  <span
                    style={{ color: '#fff', fontSize: '24px', cursor: 'pointer', fontWeight: '300', lineHeight: 1 }}
                    onClick={() => setDrawerVisible(false)}
                  >
                    ×
                  </span>
                </div>

                {/* 第二行：並排等寬線框與實心膠囊按鈕群 */}
                <div style={{ display: 'flex', gap: '16px', width: '100%' }}>
                  <a
                    href="https://client.desonmetals.net/index/auth/login.html"
                    onClick={() => setDrawerVisible(false)}
                    style={{
                      flex: 1, height: '40px', lineHeight: '38px', textAlign: 'center',
                      borderRadius: '20px', border: '1px solid #ffffff', color: '#ffffff',
                      fontWeight: '600', textDecoration: 'none', display: 'block', boxSizing: 'border-box'
                    }}
                  >
                    登入
                  </a>

                  <a
                    href="https://client.desonmetals.net/index/Auth/register.html?link_type=2&mt_server=51&superior_code=1Z4L&link_code=R*Zx9wj@&r=&langs=zh"
                    onClick={() => setDrawerVisible(false)}
                    style={{
                      flex: 1, height: '40px', lineHeight: '40px', textAlign: 'center',
                      borderRadius: '20px', background: '#f39800', color: '#ffffff',
                      fontWeight: '600', textDecoration: 'none', display: 'block', boxSizing: 'border-box'
                    }}
                  >
                    開立賬號
                  </a>
                </div>
              </div>
            }
          >
            <Menu
              mode="inline"
              theme="dark"
              defaultSelectedKeys={['home']}
              items={getMenuItems(isMobile, () => setDrawerVisible(false))}
              style={{ background: 'transparent', borderRight: 0 }}
              className="mobile-dark-menu"
            />
          </Drawer>
          <Content style={{
            display: 'flex',
            flexDirection: 'column',
            flex: 1,
            width: '100%',
            padding: '0',
            background: '#F5F7FA',
            overflowY: 'auto',
            overflowX: 'hidden',
            WebkitOverflowScrolling: 'touch',
            boxSizing: 'border-box'
          }}>
            <div style={{ width: '100%', display: 'flex', flexDirection: 'column', flex: 1, background: '#F5F7FA' }}>
              <Routes>
                <Route path="/" element={<HomeContent isMobile={isMobile} />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path='/appdown' element={<AppDown />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/login" element={<div>登入</div>} />
                <Route path="/register" element={<div>註冊</div>} />
              </Routes>
            </div>
          </Content>

          {/* =================【4. 統一底部】================= */}
          <Footer style={{ textAlign: 'center', background: '#1A1A1A', color: '#cccccc', height: '48px', padding: 0, lineHeight: '48px', flexShrink: 0 }}>
            DS Upway China ©2026
          </Footer>

        </Layout>
      </Router>
    </ConfigProvider>
  );
}