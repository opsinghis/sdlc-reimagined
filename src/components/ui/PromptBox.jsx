import React from 'react';

export const PromptBox = ({ label, children, className = '' }) => {
  return (
    <div className={`prompt-box ${className}`}>
      {label && <div className="prompt-label">{label}</div>}
      <code>{children}</code>
    </div>
  );
};

export default PromptBox;
