import React from 'react';
import { Layout, Button, Space } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import { Link, useLocation } from 'react-router-dom';

const { Header: AntdHeader } = Layout;

export const GlobalHeader = ({ isMobile, setDrawerVisible }) => {
  const location = useLocation();
  const currentPath = location.pathname;

  const headerStyle = {
    display: 'flex',
    alignItems: 'center',
    background: 'rgba(17, 21, 28, 0.98)', 
    backdropFilter: 'blur(10px)',
    WebkitBackdropFilter: 'blur(10px)',
    padding: isMobile ? '0 16px' : '0 40px',
    height: '72px',
    lineHeight: '72px',
    width: '100%',
    boxSizing: 'border-box',
    flexShrink: 0,
    position: 'relative',
    zIndex: 2000,
    pointerEvents: 'auto',
    borderBottom: '1px solid rgba(255, 255, 255, 0.02)', 
    boxShadow: '0 4px 24px rgba(0, 0, 0, 0.4)'
  };

  return (
    <AntdHeader className="custom-global-header" style={headerStyle}>
      {/* 全局注入 Header 精细化动效与高级样式 */}
      <style>{`
        .pc-nav-container {
          display: flex;
          flex: 1;
          padding: 0 40px;
          gap: 48px; 
          height: 100%;
          align-items: center;
          justify-content: center; 
        }
        
        /* 🌟 导航默认状态：极致纯白、中黑字重、开启抗锯齿 */
        .pc-nav-item {
          color: #ffffff !important; 
          font-size: 16px !important; /* 字体加大一点点 */
          font-weight: 500 !important; /* 加粗到500，让白色更扎实更亮 */
          -webkit-font-smoothing: antialiased; /* 针对深色底的字体平滑优化 */
          -moz-osx-font-smoothing: grayscale;
          transition: all 0.3s ease !important;
          position: relative;
          padding: 0 4px;
          height: 100%;
          display: inline-flex;
          align-items: center;
          text-decoration: none !important;
          letter-spacing: 0.5px;
        }
        
        /* 🌟 悬浮 (Hover) 状态：文字变品牌金 */
        .pc-nav-item:hover {
          color: #f39800 !important; 
        }
        
        /* 🌟 选中 (Active) 状态：文字变品牌金 + 进一步加粗 */
        .pc-nav-item.active {
          color: #f39800 !important;
          font-weight: 600 !important;
        }
        
        /* 底部金色泛光效果 */
        .pc-nav-item::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 0;
          height: 2px;
          background: #f39800;
          border-radius: 4px 4px 0 0;
          transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.3s ease;
        }
        .pc-nav-item.active::after {
          width: 120%; 
          box-shadow: 0 -4px 12px 1px rgba(243, 152, 0, 0.65), 
                      0 0 4px rgba(243, 152, 0, 0.8);
          background: linear-gradient(90deg, rgba(243,152,0,0) 0%, #f39800 50%, rgba(243,152,0,0) 100%);
          height: 3px;
        }
        .pc-nav-item:hover:not(.active)::after {
          width: 40%;
          background: rgba(243, 152, 0, 0.5);
          box-shadow: none;
        }

        /* 登录文本按钮 (极致纯白) */
        .login-btn-custom {
          color: #ffffff !important;
          font-size: 15px;
          font-weight: 500;
          -webkit-font-smoothing: antialiased;
          text-decoration: none;
          transition: all 0.3s;
          padding: 0 10px;
        }
        .login-btn-custom:hover {
          color: #f39800 !important;
        }

        /* 🌟 开立账户 黄金胶囊按钮 */
        .register-btn-custom {
          background: #f5a623; 
          color: #000000 !important;
          font-size: 14.5px;
          font-weight: 700;
          height: 38px;
          padding: 0 28px;
          border-radius: 20px; 
          display: inline-flex;
          align-items: center;
          text-decoration: none !important;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
          border: 1px solid rgba(245, 166, 35, 0.8);
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
        }
        .register-btn-custom:hover {
          background: #ffb732; 
          transform: translateY(-2px); 
          box-shadow: 0 6px 16px rgba(245, 166, 35, 0.35); 
          border-color: #ffb732;
        }
        .register-btn-custom:active {
          transform: translateY(0);
          box-shadow: 0 2px 4px rgba(245, 166, 35, 0.2);
        }
      `}</style>

      {/* 1. 左侧：高品质金黄色徽章 Logo 区域 */}
      <Link to="/" style={{ display: 'flex', alignItems: 'center', height: '100%', textDecoration: 'none' }}>
        <div style={{
          width: '36px',
          height: '36px',
          borderRadius: '8px',
          background: 'linear-gradient(135deg, #162032 0%, #090e17 100%)',
          marginRight: '14px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          border: '1px solid rgba(243, 152, 0, 0.5)',
          boxShadow: '0 0 10px rgba(243, 152, 0, 0.2)',
          fontWeight: '800',
          color: '#f39800',
          fontSize: '15px',
          letterSpacing: '1px',
          fontFamily: "'Montserrat', sans-serif"
        }}>
          DS
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', lineHeight: '1.2' }}>
          <span style={{
            color: '#ffffff',
            fontSize: '16px',
            fontWeight: '700',
            letterSpacing: '2px',
            fontFamily: "'Montserrat', 'Inter', sans-serif",
            textTransform: 'uppercase',
            display: 'flex',
            alignItems: 'center',
            WebkitFontSmoothing: 'antialiased'
          }}>
            DESON&nbsp;<span style={{ color: '#f39800', fontWeight: '800' }}>METALS</span>
          </span>
          <span style={{
            color: '#f39800',
            fontSize: '10px',
            fontWeight: '500',
            letterSpacing: '4px',
            fontFamily: "'PingFang HK', 'Heiti TC', 'Microsoft JhengHei', sans-serif",
            marginTop: '2px',
            opacity: 0.9
          }}>
            德生貴金屬
          </span>
        </div>
      </Link>

      {/* 2. 中间：PC 端专属导航菜单容器 */}
      {!isMobile && (
        <div className="pc-nav-container">
          <Link to="/" className={`pc-nav-item ${currentPath === '/' ? 'active' : ''}`}>首頁</Link>
          <Link to="/about" className={`pc-nav-item ${currentPath === '/about' ? 'active' : ''}`}>關於</Link>
          <Link to="/tradingrule" className={`pc-nav-item ${currentPath === '/tradingrule' ? 'active' : ''}`}>貴金屬合約交易</Link>
          <Link to="/appdown" className={`pc-nav-item ${currentPath === '/appdown' ? 'active' : ''}`}>電子交易平台</Link>
          <Link to="/contact" className={`pc-nav-item ${currentPath === '/contact' ? 'active' : ''}`}>聯系我們</Link>
        </div>
      )}

      {/* 3. 右侧：操作区 */}
      <div style={{
        position: 'relative',
        zIndex: 20,
        display: 'flex',
        alignItems: 'center',
        height: '100%',
        marginLeft: 'auto',
        flexShrink: 0
      }}>
        <Space size={isMobile ? 12 : 24} style={{ display: 'flex', alignItems: 'center', flexWrap: 'nowrap' }}>

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
              className="register-btn-custom"
            >
              開立賬戶
            </a>
          )}

          {isMobile && (
            <Button
              type="text"
              icon={<MenuOutlined style={{ color: '#ffffff', fontSize: '22px' }} />}
              onClick={() => setDrawerVisible(true)}
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', padding: '0 8px' }}
            />
          )}

        </Space>
      </div>
    </AntdHeader>
  );
};