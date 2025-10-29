interface TableColumn {
  header: string;
  width?: string;
  align?: 'left' | 'center' | 'right';
}

interface TableRow {
  cells: (string | React.ReactNode)[];
  isHeader?: boolean;
}

interface NoticeTableProps {
  columns: TableColumn[];
  rows: TableRow[];
  className?: string;
  'aria-label'?: string;
}

export default function NoticeTable({
  columns,
  rows,
  className = '',
  'aria-label': ariaLabel,
}: NoticeTableProps) {
  return (
    <div className="overflow-x-auto my-3 -mx-2 sm:mx-0">
      <table
        className={`w-full border-collapse text-xs sm:text-sm ${className}`}
        role="table"
        aria-label={ariaLabel}
      >
        <thead>
          <tr>
            {columns.map((column, index) => (
              <th
                key={index}
                scope="col"
                className={`border border-gray-300 dark:border-gray-600 p-2 sm:p-3 bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-300 font-semibold ${
                  column.align === 'center'
                    ? 'text-center'
                    : column.align === 'right'
                      ? 'text-right'
                      : 'text-left'
                }`}
                style={column.width ? { width: column.width } : undefined}
              >
                {column.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.cells.map((cell, cellIndex) => {
                const column = columns[cellIndex];
                const CellComponent = row.isHeader ? 'th' : 'td';

                return (
                  <CellComponent
                    key={cellIndex}
                    scope={row.isHeader ? 'row' : undefined}
                    className={`border border-gray-300 dark:border-gray-600 p-2 sm:p-3 ${
                      row.isHeader
                        ? 'bg-gray-50 dark:bg-gray-800 font-semibold text-gray-900 dark:text-white'
                        : 'bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300'
                    } ${
                      column.align === 'center'
                        ? 'text-center'
                        : column.align === 'right'
                          ? 'text-right'
                          : 'text-left'
                    }`}
                  >
                    {cell}
                  </CellComponent>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
