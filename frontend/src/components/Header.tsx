// src/components/Header.tsx
import React from "react";

interface HeaderProps {
  title?: string;
  subtitle?: string;
}

const Header: React.FC<HeaderProps> = ({ title = "Fitness Dashboard", subtitle }) => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-start md:items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">{title}</h1>
          {subtitle && <p className="text-gray-500 mt-1">{subtitle}</p>}
        </div>
        {/* Placeholder for right-side actions like user menu, settings, etc. */}
        <div className="mt-4 md:mt-0">
          {/* Example: future buttons or profile avatar */}
        </div>
      </div>
    </header>
  );
};

export default Header;