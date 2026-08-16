import { Card, Row, Col, Dropdown } from 'antd';
import { Link } from 'react-router-dom';
import './menuConfig.css';
import {
  LaptopOutlined, LineChartOutlined, TabletOutlined,
  BookOutlined, CompassOutlined, SafetyCertificateOutlined, QuestionCircleOutlined,
  TeamOutlined, IdcardOutlined, HistoryOutlined, BarChartOutlined,
  HomeOutlined,
  SlidersOutlined,
  WalletOutlined,
} from '@ant-design/icons';

const overlayItemStyle = { padding: '12px', borderRadius: '6px', cursor: 'pointer', transition: 'all 0.3s', display: 'flex', alignItems: 'center' };

const platformOverlay = (
  <Card style={{ width: 550, boxShadow: '0 6px 16px 0 rgba(0, 0, 0, 0.08)', border: '1px solid #f0f0f0' }} styles={{ body: { padding: '8px' } }}>
    <Row gutter={[16, 8]}>
      <Col span={12}><div style={overlayItemStyle} className="hover-item"><TabletOutlined style={{ fontSize: '24px', color: '#1677ff', marginRight: '12px' }} /><div><div style={{ fontWeight: '600' }}>xx HD</div><div style={{ fontSize: '12px', color: '#8c8c8c' }}>解鎖Pad端新體驗</div></div></div></Col>
      <Col span={12}><div style={overlayItemStyle} className="hover-item"><LaptopOutlined style={{ fontSize: '24px', color: '#1677ff', marginRight: '12px' }} /><div><div style={{ fontWeight: '600' }}>xx桌面端</div><div style={{ fontSize: '12px', color: '#8c8c8c' }}>為專業投資者而生</div></div></div></Col>
      <Col span={12}><div style={overlayItemStyle} className="hover-item"><LineChartOutlined style={{ fontSize: '24px', color: '#52c41a', marginRight: '12px' }} /><div><div style={{ fontWeight: '600' }}>MetaTrader 4</div><div style={{ fontSize: '12px', color: '#8c8c8c' }}>國際主流交易平台</div></div></div></Col>
    </Row>
  </Card>
);

const exploreOverlay = (
  <Card style={{ width: 280, boxShadow: '0 6px 16px 0 rgba(0, 0, 0, 0.08)', border: '1px solid #f0f0f0' }} styles={{ body: { padding: '8px' } }}>
    <div style={overlayItemStyle} className="hover-item"><CompassOutlined style={{ fontSize: '18px', color: '#fa8c16', marginRight: '12px' }} /><div><div style={{ fontWeight: '600' }}>市場研究院</div></div></div>
    <div style={overlayItemStyle} className="hover-item"><BookOutlined style={{ fontSize: '18px', color: '#fa8c16', marginRight: '12px' }} /><div><div style={{ fontWeight: '600' }}>新手知識庫</div></div></div>
  </Card>
);

// =================== 官網前台導航菜單配置 ===================
export const getMenuItems = (isMobile, onLinkClick) => [
  { key: 'home', label: <Link to="/" onClick={onLinkClick} style={{ color: 'inherit', textDecoration: 'none', display: 'block', width: '100%' }}><span className="menu-label-text">首頁</span></Link> },
  { key: 'about', label: <Link to="/about" onClick={onLinkClick} style={{ color: 'inherit', textDecoration: 'none', display: 'block', width: '100%' }}><span className="menu-label-text">關於</span></Link> },
  { key: 'tradingrule', label: <Link to="/tradingrule" onClick={onLinkClick} style={{ color: 'inherit', textDecoration: 'none', display: 'block', width: '100%' }}><span className="menu-label-text">貴金屬合約交易</span></Link> },
  { key: 'appdown', label: <Link to="/appdown" onClick={onLinkClick} style={{ color: 'inherit', textDecoration: 'none', display: 'block', width: '100%' }}><span className="menu-label-text">電子交易平台</span></Link> },
  { key: 'contact', label: <Link to="/contact" onClick={onLinkClick} style={{ color: 'inherit', textDecoration: 'none', display: 'block', width: '100%' }}><span className="menu-label-text">聯系我們</span></Link> },
];

// =================== 🚀 扁平化重新設計的後台管理菜單（全外層平鋪） ===================
export const dashboardMenuItems = [
  // 客戶管理區塊
  { key: '/dashboard/broker', label: 'Broker用戶管理', icon: <TeamOutlined /> },
  { key: '/dashboard/trader', label: 'Trader用戶管理', icon: <IdcardOutlined /> },
  { type: 'divider' },
  // 核心業務區塊：總覽與持倉


  // 交易管理區塊
  { key: '/dashboard/accountlist', label: '我的交易賬號', icon: <SlidersOutlined /> },
  { key: '/dashboard/position', label: '我的持倉列表', icon: <HomeOutlined /> },
  { key: '/dashboard/tradehistory', label: '交易歷史記錄', icon: <HistoryOutlined /> },
  { type: 'divider' },

  // 資產與報表區塊
  { key: '/dashboard/fundrecords', label: '賬戶資金記錄', icon: <WalletOutlined /> },
  { key: '/dashboard/commissionreport', label: '傭金報表', icon: <BarChartOutlined /> },



  // ➖ 第一道視覺分割線：區分核心業務與通用工具（完全還原圖 2 節奏）

];