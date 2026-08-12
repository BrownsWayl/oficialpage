import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ThunderboltOutlined,
  SafetyCertificateOutlined,
  LineChartOutlined,
  WalletOutlined,
  MobileOutlined,
  DesktopOutlined,
  TabletOutlined,
  PhoneOutlined,
  MailOutlined,
  EnvironmentOutlined,
} from '@ant-design/icons';

export { PhoneOutlined, MailOutlined, EnvironmentOutlined };

export function FadeInSection({ children, className = '' }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.12 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`fade-in-section ${visible ? 'visible' : ''} ${className}`}>
      {children}
    </div>
  );
}

export function AnimatedCounter({ end, suffix = '', prefix = '', duration = 2000 }) {
  const [value, setValue] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const startTime = performance.now();
          const animate = (now) => {
            const progress = Math.min((now - startTime) / duration, 1);
            const eased = 1 - (1 - progress) ** 3;
            setValue(Math.floor(end * eased));
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [end, duration]);

  return (
    <span ref={ref}>
      {prefix}{value}{suffix}
    </span>
  );
}

export function MarketTicker() {
  const items = [
    { symbol: 'XAUUSD', price: '4408.21', change: '+2.39%', up: true },
    { symbol: 'XAGUSD', price: '65.85', change: '+5.15%', up: true },
    { symbol: 'EURUSD', price: '1.0842', change: '+0.0023', up: true },
    { symbol: 'GBPUSD', price: '1.2631', change: '-0.0015', up: false },
    { symbol: 'USDJPY', price: '149.82', change: '+0.35', up: true },
    { symbol: 'XAUUSD', price: '4408.21', change: '+2.39%', up: true },
    { symbol: 'XAGUSD', price: '65.85', change: '+5.15%', up: true },
    { symbol: 'EURUSD', price: '1.0842', change: '+0.0023', up: true },
  ];

  return (
    <div className="site-market-ticker">
      <div className="site-market-ticker-track">
        {[...items, ...items].map((item, i) => (
          <span key={i} className="site-market-ticker-item">
            {item.symbol} <strong>{item.price}</strong>
            <span className={item.up ? 'up' : 'down'}>{item.change}</span>
          </span>
        ))}
      </div>
    </div>
  );
}

export function ChartAnimation({ color = '#22c55e' }) {
  return (
    <div className="site-chart-area">
      <div className="site-chart-line">
        <svg viewBox="0 0 300 120" preserveAspectRatio="none">
          <defs>
            <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={color} stopOpacity="0.4" />
              <stop offset="100%" stopColor={color} stopOpacity="0" />
            </linearGradient>
          </defs>
          <path
            className="site-chart-fill"
            d="M0,80 L30,70 L60,75 L90,50 L120,55 L150,30 L180,40 L210,20 L240,35 L270,15 L300,25 L300,120 L0,120 Z"
          />
          <path
            className="site-chart-path"
            style={{ stroke: color }}
            d="M0,80 L30,70 L60,75 L90,50 L120,55 L150,30 L180,40 L210,20 L240,35 L270,15 L300,25"
          />
        </svg>
      </div>
    </div>
  );
}

export function PhoneMockup({ price = '2654.32', isUp = true }) {
  return (
    <div className="site-phone-mock">
      <div className="site-phone-notch" />
      <div className="site-phone-screen">
        <div className="site-phone-header">
          <span>XAUUSD</span>
          <span>实时</span>
        </div>
        <div className={`site-phone-price ${isUp ? '' : 'down'}`}>
          {price}
          <span style={{ fontSize: 14, marginLeft: 8 }}>{isUp ? '▲' : '▼'}</span>
        </div>
        <ChartAnimation color={isUp ? '#22c55e' : '#ef4444'} />
        <div className="site-ticker-row">
          {['买', '卖', '持仓', '历史'].map((t) => (
            <span key={t} className="site-ticker-item">{t}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

export function DesktopMockup() {
  return (
    <div className="site-desktop-mock" style={{ position: 'relative', width: '100%', maxWidth: '500px', borderRadius: '12px', border: '1px solid rgba(255, 255, 255, 0.15)', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.35)', background: '#111827' }}>
      <div className="site-desktop-titlebar" style={{ height: '36px', background: '#1f2937', display: 'flex', alignItems: 'center', padding: '0 12px', gap: '6px', borderBottom: '1px solid rgba(255, 255, 255, 0.05)' }}>
        <span className="site-desktop-dot" style={{ display: 'inline-block', width: '8px', height: '8px', borderRadius: '50%', background: '#ef4444' }} />
        <span className="site-desktop-dot" style={{ display: 'inline-block', width: '8px', height: '8px', borderRadius: '50%', background: '#f59e0b' }} />
        <span className="site-desktop-dot" style={{ display: 'inline-block', width: '8px', height: '8px', borderRadius: '50%', background: '#22c55e' }} />
        <span style={{ marginLeft: 8, fontSize: 12, color: '#9ca3af', fontWeight: '500' }}>MetaTrader 5 (MT5) 旗舰交易终端</span>
      </div>
      <div style={{ background: '#111827', width: '100%', height: 'auto', display: 'block', overflow: 'hidden' }}>
        <img 
          src="/10.jpg" 
          alt="MetaTrader 5 (MT5)" 
          style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover' }} 
        />
      </div>
    </div>
  );
}

export function HeroSection({ title, highlight, subtitle, badge, primaryLink = '/register', primaryText = '立即注册', secondaryLink = '/platform', secondaryText = '了解平台' }) {
  return (
    <section className="site-hero">
      <div className="site-hero-glow" />
      <div className="site-hero-grid" />
      <div className="site-hero-content">
        {badge && <div className="site-hero-badge">{badge}</div>}
        <h1 className="site-hero-title">
          {title}<span>{highlight}</span>
        </h1>
        <p className="site-hero-desc">{subtitle}</p>
        <div className="site-hero-actions">
          <Link to={primaryLink} className="site-btn-primary">{primaryText}</Link>
          <Link to={secondaryLink} className="site-btn-outline">{secondaryText}</Link>
        </div>
      </div>
    </section>
  );
}

export function StatsRow({ stats }) {
  return (
    <div className="site-stats-row">
      {stats.map((s) => (
        <div key={s.label} className="site-stat-card">
          <div className="site-stat-label">{s.label}</div>
          <div className="site-stat-value">
            <AnimatedCounter end={s.end} suffix={s.suffix} prefix={s.prefix} />
            {s.unit && <span className="unit">{s.unit}</span>}
          </div>
        </div>
      ))}
    </div>
  );
}

export function FeatureGrid({ features }) {
  const icons = [ThunderboltOutlined, LineChartOutlined, WalletOutlined, SafetyCertificateOutlined];
  return (
    <div className="site-feature-grid">
      {features.map((f, i) => {
        const Icon = icons[i % icons.length];
        return (
          <div key={f.title} className="site-feature-card">
            <div className="site-feature-icon"><Icon /></div>
            <h3 className="site-feature-title">{f.title}</h3>
            <p className="site-feature-desc">{f.desc}</p>
          </div>
        );
      })}
    </div>
  );
}

export function PricingGrid({ tiers }) {
  return (
    <div className="site-pricing-grid">
      {tiers.map((t) => (
        <div key={t.name} className={`site-pricing-card ${t.highlight ? 'highlight' : ''}`}>
          <div className="site-pricing-tier">{t.name}</div>
          <div className="site-pricing-amount"><small>$</small>{t.amount}</div>
          <div className="site-pricing-unit">{t.unit}</div>
          <p className="site-pricing-desc">{t.desc}</p>
        </div>
      ))}
    </div>
  );
}

export function PlatformShowcase() {
  const [activeTab, setActiveTab] = useState(0);
  const tabs = [
    { name: 'DS APP', icon: MobileOutlined, features: ['一键操作', '账户分析', '追踪止损', '技术分析'] },
    { name: 'DS HD', icon: TabletOutlined, features: ['交易提醒', '价格预警', '快捷平仓', '实时资讯'] },
    { name: '桌面端', icon: DesktopOutlined, features: ['技术指标', '一键平仓', '价格预警', '多屏互动'] },
  ];

  return (
    <div>
      <div className="site-tab-list">
        {tabs.map((tab, i) => (
          <button
            key={tab.name}
            type="button"
            className={`site-tab-btn ${activeTab === i ? 'active' : ''}`}
            onClick={() => setActiveTab(i)}
          >
            {tab.name}
          </button>
        ))}
      </div>
      <div className="site-showcase-row">
        <div>
          <ul className="site-tab-features">
            {tabs[activeTab].features.map((f) => (
              <li key={f}>{f}</li>
            ))}
          </ul>
          <div style={{ marginTop: 24 }}>
            <Link to="/register" className="site-btn-primary">下载 {tabs[activeTab].name}</Link>
          </div>
        </div>
        <PhoneMockup price={activeTab === 0 ? '2654.32' : activeTab === 1 ? '31.28' : '1.0842'} isUp={activeTab !== 1} />
      </div>
    </div>
  );
}

export function StepsRow({ steps }) {
  return (
    <div className="site-steps-row">
      {steps.map((s, i) => (
        <div key={s.title} className="site-step-card">
          <div className="site-step-num">{i + 1}</div>
          <h3 className="site-step-title">{s.title}</h3>
          <p className="site-step-desc">{s.desc}</p>
          <Link to={s.link} className="site-btn-outline" style={{ fontSize: 14, height: 40, padding: '0 24px' }}>
            {s.action}
          </Link>
        </div>
      ))}
    </div>
  );
}

export function SecuritySection({ items }) {
  return (
    <div className="site-security-row">
      <ul className="site-security-list">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <div className="site-shield-visual">
        <div className="site-shield-ring" />
        <div className="site-shield-ring" />
        <div className="site-shield-ring" />
        <SafetyCertificateOutlined className="site-shield-icon" />
      </div>
    </div>
  );
}

export function PageDisclaimer() {
  return (
    <div className="site-disclaimer">
      风险披露：在德生进行保证金交易涉及高风险，可能并不适合所有投资者。在进行任何融资融券交易前，您应仔细考虑您的投资目标、财务状况、要求和经验水平，并在必要时咨询独立的专业顾问。贵金属是杠杆产品，利润和损失都会被放大。本网站所提供的资料属一般性质，不包含任何个人财务建议。
    </div>
  );
}
