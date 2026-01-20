import React from 'react';

export const Card = ({ children, className = '', ...props }) => {
  return (
    <div className={`card ${className}`} {...props}>
      {children}
    </div>
  );
};

export const CardHeader = ({ children, className = '' }) => {
  return (
    <div className={`card-header ${className}`} style={{ marginBottom: '15px' }}>
      {children}
    </div>
  );
};

export const CardTitle = ({ children, icon, className = '' }) => {
  return (
    <h2 className={className} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
      {icon && <span>{icon}</span>}
      {children}
    </h2>
  );
};

export const CardContent = ({ children, className = '' }) => {
  return (
    <div className={`card-content ${className}`}>
      {children}
    </div>
  );
};

export default Card;
