import React from 'react';
import { Lightbulb, AlertTriangle, CheckCircle, Info } from 'lucide-react';

const icons = {
  insight: Lightbulb,
  warning: AlertTriangle,
  success: CheckCircle,
  info: Info
};

export const InfoBox = ({ variant = 'info', title, children, className = '' }) => {
  const Icon = icons[variant] || icons.info;

  return (
    <div className={`info-box ${variant} ${className}`}>
      <h4>
        <Icon size={18} />
        {title}
      </h4>
      {typeof children === 'string' ? <p>{children}</p> : children}
    </div>
  );
};

export default InfoBox;
