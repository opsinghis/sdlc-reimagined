import React from 'react';

export const PageHeader = ({ title, description, className = '' }) => {
  return (
    <div className={`page-header ${className}`}>
      <h1>{title}</h1>
      {description && <p>{description}</p>}
    </div>
  );
};

export default PageHeader;
