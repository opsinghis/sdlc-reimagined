import React, { useState } from 'react';
import { Copy, Check, Download } from 'lucide-react';

export const CodeBlock = ({ title, language, children, filename }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(children);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    const blob = new Blob([children], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename || 'file.txt';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div style={{
      background: '#0a0a0f',
      borderRadius: '10px',
      marginBottom: '20px',
      border: '1px solid var(--border)',
      overflow: 'hidden'
    }}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px 15px',
        background: '#12121a',
        borderBottom: '1px solid var(--border)'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span style={{ fontSize: '0.75rem', color: 'var(--accent-cyan)' }}>{language}</span>
          {title && <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>{title}</span>}
        </div>
        <div style={{ display: 'flex', gap: '8px' }}>
          <button
            onClick={handleCopy}
            style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--border)',
              borderRadius: '5px',
              padding: '5px 12px',
              color: 'var(--text-secondary)',
              cursor: 'pointer',
              fontSize: '0.75rem',
              display: 'flex',
              alignItems: 'center',
              gap: '5px'
            }}
          >
            {copied ? <Check size={14} /> : <Copy size={14} />}
            {copied ? 'Copied' : 'Copy'}
          </button>
          {filename && (
            <button
              onClick={handleDownload}
              style={{
                background: 'var(--accent-blue)',
                border: 'none',
                borderRadius: '5px',
                padding: '5px 12px',
                color: 'white',
                cursor: 'pointer',
                fontSize: '0.75rem',
                display: 'flex',
                alignItems: 'center',
                gap: '5px'
              }}
            >
              <Download size={14} />
              Download
            </button>
          )}
        </div>
      </div>
      <pre style={{
        padding: '15px',
        overflow: 'auto',
        fontSize: '0.8rem',
        lineHeight: '1.5',
        color: '#e8e8f0',
        margin: 0
      }}>
        <code>{children}</code>
      </pre>
    </div>
  );
};

export default CodeBlock;
