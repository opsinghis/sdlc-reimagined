import React from 'react';

export const Timeline = ({ children, className = '' }) => {
  return (
    <div className={`timeline ${className}`}>
      {children}
    </div>
  );
};

export const TimelineItem = ({ title, children, className = '' }) => {
  return (
    <div className={`timeline-item ${className}`}>
      <h4>{title}</h4>
      {typeof children === 'string' ? <p>{children}</p> : children}
    </div>
  );
};

export default Timeline;
