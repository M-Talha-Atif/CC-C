import { Loader } from "lucide-react";
import React from "react";

const DataTable = ({
  columns,
  data,
  onRowClick,
  loading = false,
  emptyMessage = "No data available",
  className = "",
}) => {
  if (loading) {
    return (
      <div className="rounded-lg overflow-hidden">
        <div className="flex items-center justify-center h-64">
          <div className="flex items-center space-x-2 text-gray-400">
            <Loader className="h-5 w-5 animate-spin" />
            <span>Loading...</span>
          </div>
        </div>
      </div>
    );
  }

  if (data.length === 0) {
    return (
      <div className="rounded-lg overflow-hidden">
        <div className="flex items-center justify-center h-64">
          <div className="text-gray-500 text-sm">{emptyMessage}</div>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`border-none rounded-lg overflow-visible shadow-md ${className}`}
    >
      <div className="overflow-visible">
        <table className="min-w-full">
          <thead className="bg-gray-200 border-b border-gray-100">
            <tr>
              {columns.map((column, index) => (
                <th
                  key={index}
                  className="px-6 py-4 text-left text-xs font-medium uppercase tracking-wider"
                >
                  {column.header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-300">
            {data.map((row, rowIndex) => (
              <tr
                key={rowIndex}
                className={`transition-colors ${
                  onRowClick ? "cursor-pointer hover:bg-gray-50" : ""
                }`}
                onClick={() => onRowClick && onRowClick(row)}
              >
                {columns.map((column, colIndex) => (
                  <td key={colIndex} className="px-6 py-4 text-sm">
                    {column.render
                      ? column.render(row, rowIndex)
                      : row[column.key]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default DataTable;
