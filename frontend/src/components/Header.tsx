// src/components/Header.tsx
import React from "react";

interface HeaderProps {
  title?: string;
  subtitle?: string;
}

const Header: React.FC<HeaderProps> = ({ title = "Fitness Dashboard", subtitle }) => {
  return (
    <header className="header">
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '1rem 1.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div>
          <h1 style={{ fontSize: '1.5rem', fontWeight: '700', color: '#111827' }}>{title}</h1>
          {subtitle && <p style={{ color: '#6b7280', marginTop: '0.25rem' }}>{subtitle}</p>}
        </div>
        {/* Placeholder for right-side actions like user menu, settings, etc. */}
        <div style={{ marginTop: '1rem' }}>
          {/* Example: future buttons or profile avatar */}
        </div>
      </div>
    </header>
  );
};

export default Header;