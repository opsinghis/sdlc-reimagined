import React from 'react';

export const Tabs = ({ children, className = '' }) => {
  return (
    <div className={`tabs-container ${className}`}>
      {children}
    </div>
  );
};

export const TabList = ({ children, className = '' }) => {
  return (
    <div className={`tabs ${className}`} style={{
      display: 'flex',
      gap: '5px',
      marginBottom: '20px',
      borderBottom: '1px solid var(--border)',
      paddingBottom: '10px'
    }}>
      {children}
    </div>
  );
};

export const Tab = ({ children, active = false, onClick, className = '' }) => {
  return (
    <button
      className={`tab ${active ? 'active' : ''} ${className}`}
      onClick={onClick}
      style={{
        padding: '10px 20px',
        borderRadius: '8px',
        cursor: 'pointer',
        fontSize: '0.9rem',
        color: active ? 'white' : 'var(--text-secondary)',
        transition: 'all 0.2s',
        background: active ? 'var(--accent-blue)' : 'transparent',
        border: 'none'
      }}
    >
      {children}
    </button>
  );
};

export const TabPanel = ({ children, active = false, className = '' }) => {
  if (!active) return null;

  return (
    <div className={`tab-panel ${className}`}>
      {children}
    </div>
  );
};

export default Tabs;
