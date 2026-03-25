// src/components/ui/Loader.tsx
import React from "react";

interface LoaderProps {
  size?: number; // size in pixels
  className?: string; // extra CSS classes
}

const Loader: React.FC<LoaderProps> = ({ size = 40, className = "" }) => {
  const loaderStyle = {
    width: `${size}px`,
    height: `${size}px`,
    border: '4px solid #e5e7eb',
    borderTop: '4px solid #4f46e5',
    borderRadius: '50%',
    animation: 'spin 1s linear infinite'
  };

  return (
    <div
      style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: size, width: size }}
      className={className}
    >
      <div style={loaderStyle}></div>
    </div>
  );
};

export default Loader;