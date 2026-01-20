import React from 'react';

const badgeStyles = {
  keep: { background: 'rgba(74, 222, 128, 0.2)', color: 'var(--accent-green)' },
  evolve: { background: 'rgba(251, 146, 60, 0.2)', color: 'var(--accent-orange)' },
  replace: { background: 'rgba(248, 113, 113, 0.2)', color: 'var(--accent-red)' },
  transformed: { background: 'rgba(74, 222, 128, 0.2)', color: 'var(--accent-green)' },
  eliminated: { background: 'rgba(248, 113, 113, 0.2)', color: 'var(--accent-red)' },
  optimized: { background: 'rgba(251, 146, 60, 0.2)', color: 'var(--accent-orange)' },
  default: { background: 'var(--bg-elevated)', color: 'var(--text-secondary)' },
};

export const Badge = ({ variant = 'default', children, className = '' }) => {
  const style = badgeStyles[variant] || badgeStyles.default;

  return (
    <span
      className={`badge ${className}`}
      style={{
        display: 'inline-block',
        padding: '4px 12px',
        borderRadius: '20px',
        fontSize: '0.75rem',
        fontWeight: '600',
        ...style
      }}
    >
      {children}
    </span>
  );
};

export const TransformationBadge = ({ type }) => {
  const styles = {
    'COLLAPSE': { bg: 'rgba(139, 92, 246, 0.2)', color: '#a78bfa', label: 'COLLAPSE PHASES' },
    'AUTOMATE': { bg: 'rgba(34, 211, 238, 0.2)', color: '#22d3ee', label: 'FULLY AUTOMATE' },
    'ACCELERATE': { bg: 'rgba(74, 222, 128, 0.2)', color: '#4ade80', label: 'ACCELERATE 10X' },
    'REVOLUTIONIZE': { bg: 'rgba(251, 146, 60, 0.2)', color: '#fb923c', label: 'REVOLUTIONIZE' },
    'ELIMINATE': { bg: 'rgba(248, 113, 113, 0.2)', color: '#f87171', label: 'ELIMINATE' },
    'CONTINUOUS': { bg: 'rgba(96, 165, 250, 0.2)', color: '#60a5fa', label: 'MAKE CONTINUOUS' },
    'AUTONOMOUS': { bg: 'rgba(244, 114, 182, 0.2)', color: '#f472b6', label: 'MAKE AUTONOMOUS' }
  };

  const s = styles[type] || styles['ACCELERATE'];

  return (
    <span style={{
      display: 'inline-block',
      padding: '6px 16px',
      background: s.bg,
      color: s.color,
      borderRadius: '20px',
      fontSize: '0.75rem',
      fontWeight: '700',
      letterSpacing: '1px'
    }}>
      {s.label}
    </span>
  );
};

export default Badge;
