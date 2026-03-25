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
      className={`summary-card ${className || ''}`}
    >
      {title && <div style={{ color: '#6b7280', fontWeight: '500', marginBottom: '0.5rem' }}>{title}</div>}

      {value !== undefined ? (
        <div style={{ fontSize: '1.5rem', fontWeight: '700' }}>{value}</div>
      ) : (
        children
      )}
    </div>
  );
};

export default Card;