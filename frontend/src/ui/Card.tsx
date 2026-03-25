// src/components/ui/Card.tsx
import React, { ReactNode } from "react";

interface CardProps {
  title?: string;
  value?: string | number;
  children?: ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({ title, value, children, className }) => {
  return (
    <div
      className={`bg-white p-4 rounded-2xl shadow-md flex flex-col justify-between ${className}`}
    >
      {title && <div className="text-gray-500 font-medium mb-2">{title}</div>}

      {value !== undefined ? (
        <div className="text-2xl font-bold">{value}</div>
      ) : (
        children
      )}
    </div>
  );
};

export default Card;