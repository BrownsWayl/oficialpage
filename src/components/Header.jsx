import React from 'react';
import { Layout, Button, Space } from 'antd';
import { MenuOutlined, GlobalOutlined } from '@ant-design/icons';
import { Link, useLocation } from 'react-router-dom';

const { Header: AntdHeader } = Layout;

export const GlobalHeader = ({ isMobile, setDrawerVisible }) => {
  const location = useLocation();
  const currentPath = location.pathname;

  const headerStyle = {
    display: 'flex',
    alignItems: 'center',
    background: 'rgba(9, 14, 23, 0.88)',
    backdropFilter: 'blur(16px)',
    WebkitBackdropFilter: 'blur(16px)',
    padding: isMobile ? '0 16px' : '0 40px',
    height: '72px',
    lineHeight: '72px',
    width: '100%',
    boxSizing: 'border-box',
    flexShrink: 0,
    borderBottom: '1px solid rgba(243, 152, 0, 0.15)', // 金色微光底邊
    position: 'relative',
    zIndex: 2000,
    pointerEvents: 'auto',
    boxShadow: '0 4px 30px rgba(0, 0, 0, 0.3)'
  };

  return (
    <AntdHeader className="custom-global-header" style={headerStyle}>
      {/* 全局注入 Header 微調動效與高級樣式 */}
      <style>{`
        .pc-nav-container {
          display: flex;
          flex: 1;
          padding: 0 40px;
          gap: 36px;
          height: 100%;
          align-items: center;
        }
        .pc-nav-item {
          color: #9ca3af !important;
          font-size: 14.5px !important;
          font-weight: 500 !important;
          transition: all 0.3s ease !important;
          position: relative;
          padding: 0 4px;
          height: 100%;
          display: inline-flex;
          align-items: center;
          text-decoration: none !important;
        }
        .pc-nav-item:hover {
          color: #f39800 !important;
        }
        .pc-nav-item.active {
          color: #ffffff !important;
          font-weight: 700 !important;
        }
        .pc-nav-item::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 2px;
          background: linear-gradient(90deg, transparent, #f39800, transparent);
          transform: scaleX(0);
          transition: transform 0.3s ease;
        }
        .pc-nav-item.active::after, .pc-nav-item:hover::after {
          transform: scaleX(1);
        }
        .login-btn-custom {
          color: #9ca3af !important;
          font-size: 14.5px;
          font-weight: 500;
          text-decoration: none;
          transition: all 0.3s;
        }
        .login-btn-custom:hover {
          color: #ffffff !important;
        }
      `}</style>

      {/* 1. 左側：高品質金黃色徽章 Logo 區域 */}
      <Link to="/" style={{ display: 'flex', alignItems: 'center', height: '100%', textDecoration: 'none' }}>
        <div style={{
          width: '34px',
          height: '34px',
          borderRadius: '8px',
          background: 'linear-gradient(135deg, #111b2d 0%, #050811 100%)',
          marginRight: '12px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          border: '1px solid rgba(243, 152, 0, 0.65)',
          boxShadow: '0 0 12px rgba(243, 152, 0, 0.3)',
          fontWeight: '800',
          color: '#f39800',
          fontSize: '14px',
          letterSpacing: '1px',
          fontFamily: "'Montserrat', sans-serif"
        }}>
          DS
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', lineHeight: '1.15' }}>
          <span style={{
            color: '#ffffff',
            fontSize: '15.5px',
            fontWeight: '600',
            letterSpacing: '2.5px',
            fontFamily: "'Montserrat', 'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
            textTransform: 'uppercase',
            display: 'flex',
            alignItems: 'center'
          }}>
            DESON&nbsp;<span style={{ color: '#f39800', fontWeight: '800' }}>METALS</span>
          </span>
          <span style={{
            color: '#f39800',
            fontSize: '9.5px',
            fontWeight: '500',
            letterSpacing: '4px',
            fontFamily: "'PingFang HK', 'Heiti TC', 'Microsoft JhengHei', sans-serif",
            marginTop: '3px'
          }}>
            德生貴金屬
          </span>
        </div>
      </Link>

      {/* 2. 中間：PC 端專屬導航菜單容器 */}
      {!isMobile && (
        <div className="pc-nav-container">
          <Link to="/" className={`pc-nav-item ${currentPath === '/' ? 'active' : ''}`}>首頁</Link>
          <Link to="/about" className={`pc-nav-item ${currentPath === '/about' ? 'active' : ''}`}>關於</Link>
          <Link to="/tradingrule" className={`pc-nav-item ${currentPath === '/tradingrule' ? 'active' : ''}`}>貴金屬合約交易</Link>
          <Link to="/appdown" className={`pc-nav-item ${currentPath === '/appdown' ? 'active' : ''}`}>電子交易平台</Link>
          <Link to="/contact" className={`pc-nav-item ${currentPath === '/contact' ? 'active' : ''}`}>聯系我們</Link>
        </div>
      )}

      {/* 3. 右側：操作區 */}
      <div style={{
        position: 'relative',
        zIndex: 20,
        display: 'flex',
        alignItems: 'center',
        height: '100%',
        marginLeft: 'auto',
        flexShrink: 0
      }}>
        <Space size={isMobile ? 8 : 16} style={{ display: 'flex', alignItems: 'center', flexWrap: 'nowrap' }}>

          {!isMobile && (
            <a href="https://client.desonmetals.net/index/auth/login.html" target="_blank" rel="noopener noreferrer" className="login-btn-custom">
              登入
            </a>
          )}

          {!isMobile && (
            <a
              href="https://client.desonmetals.net/index/Auth/register.html?link_type=2&mt_server=51&superior_code=1Z4L&link_code=R*Zx9wj@&r=&langs=zh"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                borderRadius: '20px',
                background: 'linear-gradient(135deg, #f39800 0%, #ffb833 100%)',
                boxShadow: '0 4px 15px rgba(243, 152, 0, 0.3)',
                color: '#000000',
                fontSize: '13.5px',
                height: '38px',
                padding: '0 22px',
                fontWeight: '700',
                display: 'inline-flex',
                alignItems: 'center',
                textDecoration: 'none',
                cursor: 'pointer',
                border: 'none',
                transition: 'all 0.3s'
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-1px)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'none'}
            >
              開立賬戶
            </a>
          )}

          {isMobile && (
            <Button
              type="text"
              icon={<MenuOutlined style={{ color: '#ffffff', fontSize: '20px' }} />}
              onClick={() => setDrawerVisible(true)}
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}
            />
          )}

        </Space>
      </div>
    </AntdHeader>
  );
};