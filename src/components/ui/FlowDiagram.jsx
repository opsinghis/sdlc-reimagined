import React from 'react';
import { ArrowRight } from 'lucide-react';

export const FlowContainer = ({ children, className = '' }) => {
  return (
    <div className={`flow-container ${className}`}>
      {children}
    </div>
  );
};

export const FlowStep = ({ icon, title, subtitle, aiDriven = false, className = '' }) => {
  return (
    <div className={`flow-step ${aiDriven ? 'ai-driven' : ''} ${className}`}>
      <div className="step-icon">{icon}</div>
      <div className="step-title">{title}</div>
      {subtitle && <div className="step-subtitle">{subtitle}</div>}
    </div>
  );
};

export const FlowArrow = () => {
  return (
    <div className="flow-arrow">
      <ArrowRight size={24} />
    </div>
  );
};

export const FlowDiagram = ({ steps, className = '' }) => {
  return (
    <FlowContainer className={className}>
      {steps.map((step, index) => (
        <React.Fragment key={index}>
          <FlowStep {...step} />
          {index < steps.length - 1 && <FlowArrow />}
        </React.Fragment>
      ))}
    </FlowContainer>
  );
};

export default FlowDiagram;
