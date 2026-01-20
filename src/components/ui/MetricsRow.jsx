import React from 'react';

export const MetricsRow = ({ children, className = '' }) => {
  return (
    <div className={`metrics-row ${className}`}>
      {children}
    </div>
  );
};

export const Metric = ({ value, label, color = 'var(--accent-green)' }) => {
  return (
    <div className="metric">
      <div className="value" style={{ color }}>{value}</div>
      <div className="label">{label}</div>
    </div>
  );
};

export const MetricCard = ({ metrics, className = '' }) => {
  return (
    <MetricsRow className={className}>
      {metrics.map((metric, index) => (
        <Metric key={index} {...metric} />
      ))}
    </MetricsRow>
  );
};

export default MetricsRow;
