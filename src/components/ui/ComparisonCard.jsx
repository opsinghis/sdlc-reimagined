import React from 'react';

export const ComparisonGrid = ({ children, className = '' }) => {
  return (
    <div className={`comparison-grid ${className}`}>
      {children}
    </div>
  );
};

export const ComparisonCard = ({ variant = 'traditional', title, children, className = '' }) => {
  const isTraditional = variant === 'traditional';

  return (
    <div className={`comparison-card ${variant} ${className}`}>
      <h4>{isTraditional ? '❌' : '✅'} {title}</h4>
      {children}
    </div>
  );
};

export const ComparisonList = ({ items }) => {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
};

export default ComparisonCard;
