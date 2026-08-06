import { Card, Row, Col, Dropdown } from 'antd';
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
      <Col span={12}><div style={overlayItemStyle} className="hover-item"><TabletOutlined style={{ fontSize: '24px', color: '#1677ff', marginRight: '12px' }} /><div><div style={{ fontWeight: '600' }}>xx HD</div><div style={{ fontSize: '12px', color: '#8c8c8c' }}>解锁Pad端新体验</div></div></div></Col>
      <Col span={12}><div style={overlayItemStyle} className="hover-item"><LaptopOutlined style={{ fontSize: '24px', color: '#1677ff', marginRight: '12px' }} /><div><div style={{ fontWeight: '600' }}>xx桌面端</div><div style={{ fontSize: '12px', color: '#8c8c8c' }}>为专业投资者而生</div></div></div></Col>
      <Col span={12}><div style={overlayItemStyle} className="hover-item"><LineChartOutlined style={{ fontSize: '24px', color: '#52c41a', marginRight: '12px' }} /><div><div style={{ fontWeight: '600' }}>MetaTrader 4</div><div style={{ fontSize: '12px', color: '#8c8c8c' }}>国际主流交易平台</div></div></div></Col>
    </Row>
  </Card>
);

const exploreOverlay = (
  <Card style={{ width: 280, boxShadow: '0 6px 16px 0 rgba(0, 0, 0, 0.08)', border: '1px solid #f0f0f0' }} styles={{ body: { padding: '8px' } }}>
    <div style={overlayItemStyle} className="hover-item"><CompassOutlined style={{ fontSize: '18px', color: '#fa8c16', marginRight: '12px' }} /><div><div style={{ fontWeight: '600' }}>市场研究院</div></div></div>
    <div style={overlayItemStyle} className="hover-item"><BookOutlined style={{ fontSize: '18px', color: '#fa8c16', marginRight: '12px' }} /><div><div style={{ fontWeight: '600' }}>新手知识库</div></div></div>
  </Card>
);

// =================== 官网前台导航菜单配置 ===================
export const getMenuItems = (isMobile) => [
  { key: 'home', label: <span className="menu-label-text">首页</span> },
  { key: 'about', label: <span className="menu-label-text">关于</span> },
  { key: 'appdown', label: <span className="menu-label-text">电子交易平台</span> },
  { key: 'contact', label: <span className="menu-label-text">联系我们</span> },
];

// =================== 🚀 扁平化重新设计的后台管理菜单（全外层平铺） ===================
export const dashboardMenuItems = [
  // 客户管理区块
  { key: '/dashboard/broker', label: 'Broker用户管理', icon: <TeamOutlined /> },
  { key: '/dashboard/trader', label: 'Trader用户管理', icon: <IdcardOutlined /> },
  { type: 'divider' },
  // 核心业务区块：总览与持仓


  // 交易管理区块
  { key: '/dashboard/accountlist', label: '我的交易账号', icon: <SlidersOutlined /> },
  { key: '/dashboard/position', label: '我的持仓列表', icon: <HomeOutlined /> },
  { key: '/dashboard/tradehistory', label: '交易历史记录', icon: <HistoryOutlined /> },
  { type: 'divider' },

  // 资产与报表区块
  { key: '/dashboard/fundrecords', label: '账户资金记录', icon: <WalletOutlined /> },
  { key: '/dashboard/commissionreport', label: '佣金报表', icon: <BarChartOutlined /> },



  // ➖ 第一道视觉分割线：区分核心业务与通用工具（完全还原图 2 节奏）

];