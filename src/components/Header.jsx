import React from 'react';
import { Layout, Button, Space } from 'antd';
import { MenuOutlined, GlobalOutlined } from '@ant-design/icons';
import { getMenuItems } from '../menuConfig';
import { Link, useLocation } from 'react-router-dom';

const { Header: AntdHeader } = Layout;

export const GlobalHeader = ({ isMobile, setDrawerVisible }) => {
  const location = useLocation();
  const currentPath = location.pathname;

  const headerStyle = {
    display: 'flex',
    alignItems: 'center',
    background: '#000000',
    padding: isMobile ? '0 16px' : '0 40px',
    height: '68px',
    lineHeight: '68px',
    width: '100%',
    boxSizing: 'border-box',
    flexShrink: 0,
    borderBottom: '1px solid #111111',
    position: 'relative',
    zIndex: 2000,
    pointerEvents: 'auto'
  };

  return (
    <AntdHeader className="custom-global-header" style={headerStyle}>

      {/* 1. 左侧：Logo 区域 */}
      <div style={{ display: 'flex', alignItems: 'center', height: '100%', flexShrink: 0, zIndex: 10 }}>
        <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: '#f39800', marginRight: '12px' }}></div>
        <span style={{ color: '#fff', fontSize: '18px', fontWeight: 'bold', letterSpacing: '1px' }}>DS</span>
      </div>

      {/* 2. 中间：PC 端专属导航菜单容器 */}
      {!isMobile && (
        <div className="pc-nav-container" style={{ display: 'flex', flex: 1, padding: '0 20px', gap: '32px' }}>
          <Link to="/" className={`pc-nav-item ${currentPath === '/' ? 'active' : ''}`} style={{ textDecoration: 'none' }}><span className="menu-label-text">首页</span></Link>
          <Link to="/about" className={`pc-nav-item ${currentPath === '/about' ? 'active' : ''}`} style={{ textDecoration: 'none' }}><span className="menu-label-text">关于</span></Link>
          <Link to="/appdown" className={`pc-nav-item ${currentPath === '/appdown' ? 'active' : ''}`} style={{ textDecoration: 'none' }}><span className="menu-label-text">电子交易平台</span></Link>
          <Link to="/contact" className={`pc-nav-item ${currentPath === '/contact' ? 'active' : ''}`} style={{ textDecoration: 'none' }}><span className="menu-label-text">联系我们</span></Link>
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
        <Space size={isMobile ? 8 : 16} style={{ display: 'flex', alignItems: 'center', flexWrap: 'nowrap' }}>

          {!isMobile && (
            <Link
              to="/login"
              style={{
                color: '#fff',
                fontSize: '15px',
                fontWeight: '700',
                marginRight: '16px',
                cursor: 'pointer',
                display: 'inline-block'
              }}
            >
              登录
            </Link>
          )}

          {!isMobile && (
            <Link
              to="/register"
              style={{
                borderRadius: '16px',
                background: '#f39800',
                color: '#ffffff',
                fontSize: '14px',
                height: '36px',
                padding: '0 20px',
                fontWeight: '600',
                display: 'inline-flex',
                alignItems: 'center',
                textDecoration: 'none',
                cursor: 'pointer'
              }}
            >
              开立账号
            </Link>
          )}

          {!isMobile && <GlobalOutlined style={{ color: '#fff', fontSize: '16px' }} />}

          {isMobile && (
            <Button
              type="text"
              icon={<MenuOutlined style={{ color: '#fff', fontSize: '20px' }} />}
              onClick={() => setDrawerVisible(true)}
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}
            />
          )}

        </Space>
      </div>
    </AntdHeader>
  );
};