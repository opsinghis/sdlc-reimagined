import React from 'react';

export const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  disabled = false,
  onClick,
  className = '',
  ...props
}) => {
  const baseStyles = {
    padding: size === 'sm' ? '8px 16px' : size === 'lg' ? '14px 28px' : '10px 20px',
    borderRadius: '8px',
    fontSize: size === 'sm' ? '0.8rem' : size === 'lg' ? '1rem' : '0.9rem',
    cursor: disabled ? 'not-allowed' : 'pointer',
    transition: 'all 0.2s',
    border: 'none',
    fontWeight: '500',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    opacity: disabled ? 0.5 : 1,
  };

  const variantStyles = {
    primary: {
      background: 'var(--accent-purple)',
      color: 'white',
    },
    secondary: {
      background: 'var(--bg-card)',
      border: '1px solid var(--border)',
      color: 'var(--text-secondary)',
    },
    ghost: {
      background: 'transparent',
      color: 'var(--text-secondary)',
    },
    danger: {
      background: 'var(--accent-red)',
      color: 'white',
    },
    success: {
      background: 'var(--accent-green)',
      color: 'white',
    }
  };

  return (
    <button
      className={`btn btn-${variant} ${className}`}
      style={{ ...baseStyles, ...variantStyles[variant] }}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
