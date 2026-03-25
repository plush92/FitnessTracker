// src/components/ui/Loader.tsx
import React from "react";

interface LoaderProps {
  size?: number; // size in pixels
  className?: string; // extra Tailwind classes
}

const Loader: React.FC<LoaderProps> = ({ size = 40, className = "" }) => {
  return (
    <div
      className={`flex justify-center items-center ${className}`}
      style={{ height: size, width: size }}
    >
      <div
        className="animate-spin rounded-full border-4 border-t-primary border-gray-200"
        style={{ height: size, width: size }}
      ></div>
    </div>
  );
};

export default Loader;