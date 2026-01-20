import React from 'react';
import { NavLink } from 'react-router-dom';
import { getGroupedNavigation } from '../../data/navigation';

const Sidebar = ({ isOpen, onClose }) => {
  const groupedNav = getGroupedNavigation();

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="sidebar-overlay"
          onClick={onClose}
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0,0,0,0.5)',
            zIndex: 40,
            display: 'none'
          }}
        />
      )}

      <aside
        className={`sidebar ${isOpen ? 'open' : ''}`}
        style={{
          width: '280px',
          background: 'var(--bg-secondary)',
          borderRight: '1px solid var(--border)',
          padding: '20px 0',
          position: 'fixed',
          height: '100vh',
          overflowY: 'auto',
          zIndex: 50,
          transition: 'transform 0.3s ease'
        }}
      >
        {/* Logo */}
        <div style={{
          padding: '0 20px 20px',
          borderBottom: '1px solid var(--border)',
          marginBottom: '20px'
        }}>
          <h1 style={{
            fontSize: '1.3rem',
            fontWeight: '600',
            background: 'linear-gradient(135deg, var(--accent-blue), var(--accent-purple))',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            SDLC Reimagined
          </h1>
          <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
            AI-Native Development Framework
          </span>
        </div>

        {/* Navigation */}
        {Object.entries(groupedNav).map(([section, items]) => (
          <div key={section} style={{ marginBottom: '25px' }}>
            <div style={{
              fontSize: '0.7rem',
              textTransform: 'uppercase',
              letterSpacing: '1px',
              color: 'var(--text-muted)',
              padding: '0 20px',
              marginBottom: '10px'
            }}>
              {section}
            </div>
            {items.map(item => {
              const Icon = item.icon;
              return (
                <NavLink
                  key={item.id}
                  to={item.path}
                  onClick={onClose}
                  className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
                  style={({ isActive }) => ({
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    padding: '12px 20px',
                    cursor: 'pointer',
                    transition: 'all 0.2s',
                    borderLeft: `3px solid ${isActive ? 'var(--accent-blue)' : 'transparent'}`,
                    color: isActive ? 'var(--accent-blue)' : 'var(--text-secondary)',
                    fontSize: '0.9rem',
                    textDecoration: 'none',
                    background: isActive ? 'var(--bg-card)' : 'transparent'
                  })}
                >
                  <Icon size={18} />
                  <span>{item.label}</span>
                </NavLink>
              );
            })}
          </div>
        ))}

        {/* Footer */}
        <div style={{
          padding: '20px',
          borderTop: '1px solid var(--border)',
          marginTop: 'auto'
        }}>
          <div style={{
            fontSize: '0.75rem',
            color: 'var(--text-muted)',
            textAlign: 'center'
          }}>
            Powered by AI Agents
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
