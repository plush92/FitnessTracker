// src/components/ui/Table.tsx
import React from "react";

interface Column<T> {
  key: keyof T;
  header: string;
  className?: string; // optional per-column styling
}

interface TableProps<T> {
  columns: Column<T>[];
  data: T[];
  className?: string; // extra table-level styles
}

function Table<T extends object>({ columns, data, className }: TableProps<T>) {
  return (
    <div className={`table-container ${className || ''}`} style={{ overflowX: 'auto' }}>
      <table className="table">
        <thead>
          <tr>
            {columns.map((col) => (
              <th key={String(col.key)} className={col.className}>
                {col.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={i}>
              {columns.map((col) => (
                <td key={String(col.key)} className={col.className}>
                  {row[col.key] as React.ReactNode}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;