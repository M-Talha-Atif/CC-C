import { useState } from "react";

export function DataTable({
  data,
  columns,
  selectedRows,
  onSelectAll,
  onSelectRow,
  className = "",
}) {
  const [sortConfig, setSortConfig] = useState(null);

  const isAllSelected = data.length > 0 && selectedRows.length === data.length;
  const isIndeterminate =
    selectedRows.length > 0 && selectedRows.length < data.length;

  const handleSort = (key) => {
    let direction = "asc";
    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === "asc"
    ) {
      direction = "desc";
    }
    setSortConfig({ key, direction });
  };

  const sortedData = [...data].sort((a, b) => {
    if (!sortConfig) return 0;

    const aValue = a[sortConfig.key];
    const bValue = b[sortConfig.key];

    if (aValue < bValue) {
      return sortConfig.direction === "asc" ? -1 : 1;
    }
    if (aValue > bValue) {
      return sortConfig.direction === "asc" ? 1 : -1;
    }
    return 0;
  });

  // Helper function to get column width classes
  const getColumnWidth = (column) => {
    switch (column.key) {
      case "actions":
        return "w-24 flex-shrink-0 sticky right-0 z-10 bg-white";
      case "status":
        return "w-20 flex-shrink-0"; // Fixed width for status badges
      case "date":
      case "created":
      case "updated":
        return "w-32"; // Compact date columns
      case "id":
        return "w-16"; // Very narrow for IDs
      case "email":
        return "min-w-48"; // Flexible but min width for emails
      case "name":
      case "username":
        return "min-w-40"; // Flexible but min width for names
      default:
        return "min-w-32"; // Default flexible width
    }
  };

  return (
    <div className={`overflow-hidden ${className}`}>
      <div className="overflow-x-auto">
        <table className="w-full min-w-max">
          <thead>
            <tr className="border-b border-gray-200 bg-gray-50">
              <th className="w-12 px-4 py-3 text-left">
                <input
                  type="checkbox"
                  checked={isAllSelected}
                  ref={(el) => {
                    if (el) el.indeterminate = isIndeterminate;
                  }}
                  onChange={(e) => onSelectAll(e.target.checked)}
                  className="h-4 w-4 rounded border-gray-300 text-black focus:ring-2 focus:ring-black"
                />
              </th>
              {columns.map((column) => (
                <th
                  key={column.key}
                  className={`${getColumnWidth(
                    column
                  )} px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider ${
                    column.sortable !== false
                      ? "cursor-pointer hover:bg-gray-100"
                      : ""
                  } ${
                    column.key === "actions"
                      ? "sticky right-0 z-10 bg-gray-50"
                      : ""
                  }`}
                  onClick={() =>
                    column.sortable !== false && handleSort(column.key)
                  }
                >
                  <div className="flex items-center space-x-1">
                    <span className="truncate">{column.header}</span>
                    {column.sortable !== false &&
                      sortConfig?.key === column.key && (
                        <span className="text-black text-sm">
                          {sortConfig.direction === "asc" ? "↑" : "↓"}
                        </span>
                      )}
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {sortedData.map((item) => (
              <tr
                key={item.id}
                className={`hover:bg-gray-50 transition-colors ${
                  selectedRows.includes(item.id) ? "bg-gray-50" : ""
                }`}
              >
                <td className="px-4 py-3">
                  <input
                    type="checkbox"
                    checked={selectedRows.includes(item.id)}
                    onChange={(e) => onSelectRow(item.id, e.target.checked)}
                    className="h-4 w-4 rounded border-gray-300 text-black focus:ring-2 focus:ring-black"
                  />
                </td>
                {columns.map((column) => (
                  <td
                    key={column.key}
                    className={`${getColumnWidth(column)} px-4 py-3 ${
                      column.key === "actions"
                        ? "sticky right-0 z-10 bg-white"
                        : ""
                    }`}
                  >
                    <div className={column.key === "actions" ? "" : "truncate"}>
                      {column.render(item)}
                    </div>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Table Footer */}
      <div className="bg-gray-50 px-4 py-3 border-t border-gray-200">
        <div className="flex items-center justify-between">
          <div className="text-sm text-gray-600">
            Showing {data.length} user{data.length !== 1 ? "s" : ""}
            {selectedRows.length > 0 && (
              <span className="ml-2 font-medium">
                ({selectedRows.length} selected)
              </span>
            )}
          </div>
          <div className="text-sm text-gray-600">
            Total: {data.length} pending users
          </div>
        </div>
      </div>
    </div>
  );
}
