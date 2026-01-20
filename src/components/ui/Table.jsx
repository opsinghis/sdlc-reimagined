import React from 'react';

export const Table = ({ children, className = '' }) => {
  return (
    <table className={`data-table ${className}`}>
      {children}
    </table>
  );
};

export const TableHead = ({ children }) => {
  return <thead>{children}</thead>;
};

export const TableBody = ({ children }) => {
  return <tbody>{children}</tbody>;
};

export const TableRow = ({ children, highlight = false, className = '' }) => {
  return (
    <tr
      className={className}
      style={highlight ? { fontWeight: 'bold', background: 'var(--bg-elevated)' } : {}}
    >
      {children}
    </tr>
  );
};

export const TableHeader = ({ children, className = '' }) => {
  return <th className={className}>{children}</th>;
};

export const TableCell = ({ children, color, className = '' }) => {
  return (
    <td className={className} style={color ? { color } : {}}>
      {children}
    </td>
  );
};

export default Table;
