import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import { Menu, X } from 'lucide-react';

const Layout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="app-container">
      {/* Mobile menu button */}
      <button
        className="mobile-menu-btn"
        onClick={() => setSidebarOpen(!sidebarOpen)}
        style={{
          position: 'fixed',
          top: '20px',
          left: '20px',
          zIndex: 60,
          background: 'var(--bg-card)',
          border: '1px solid var(--border)',
          borderRadius: '8px',
          padding: '10px',
          cursor: 'pointer',
          color: 'var(--text-primary)',
          display: 'none' // Will be shown via media query
        }}
      >
        {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <main className="main-content">
        <Outlet />
      </main>

      <style>{`
        @media (max-width: 1024px) {
          .mobile-menu-btn {
            display: block !important;
          }
          .sidebar {
            transform: translateX(-100%);
          }
          .sidebar.open {
            transform: translateX(0);
          }
          .sidebar-overlay {
            display: block !important;
          }
          .main-content {
            margin-left: 0 !important;
          }
        }
      `}</style>
    </div>
  );
};

export default Layout;
