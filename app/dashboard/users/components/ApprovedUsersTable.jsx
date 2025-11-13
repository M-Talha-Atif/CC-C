import { useState } from "react";

export function ApprovedUsersTable({ data, columns, className = "" }) {
  const [sortConfig, setSortConfig] = useState(null);

  const handleSort = (key) => {
    let direction = "asc";
    if (sortConfig && sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key, direction });
  };

  const sortedData = [...data].sort((a, b) => {
    if (!sortConfig) return 0;

    const aValue = a[sortConfig.key];
    const bValue = b[sortConfig.key];

    if (aValue < bValue) return sortConfig.direction === "asc" ? -1 : 1;
    if (aValue > bValue) return sortConfig.direction === "asc" ? 1 : -1;
    return 0;
  });

  const getColumnWidth = (column) => {
    switch (column.key) {
      case "actions":
        return "w-32";
      case "status":
        return "w-20";
      case "points":
        return "w-24";
      case "referralCode":
        return "w-32";
      case "createdAt":
      case "joined":
        return "w-18";
      case "email":
        return "w-60";
      case "name":
        return "min-w-[10rem]";
      case "businessName":
        return "min-w-[11rem]";
      case "website":
      case "instagram":
        return "w-50";
      default:
        return "w-10";
    }
  };

  return (
    <div className={`overflow-hidden ${className}`}>
      <div className="w-full">
        <table className="w-full border-collapse table-fixed">
          <thead>
            <tr className="border-b border-gray-200 bg-gray-50">
              {columns.map((column) => (
                <th
                  key={column.key}
                  className={`${getColumnWidth(
                    column
                  )} px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider ${
                    column.sortable !== false
                      ? "cursor-pointer hover:bg-gray-100"
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
            {sortedData.length === 0 ? (
              <tr>
                <td
                  colSpan={columns.length}
                  className="px-4 py-8 text-center text-gray-500"
                >
                  No users found
                </td>
              </tr>
            ) : (
              sortedData.map((item) => (
                <tr key={item.id} className="hover:bg-gray-50 transition-colors">
                  {columns.map((column) => (
                    <td
                      key={column.key}
                      className={`${getColumnWidth(column)} px-4 py-3 align-top break-words`}
                    >
                      <div className={column.key === "actions" ? "" : "truncate"}>
                        {column.render(item)}
                      </div>
                    </td>
                  ))}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      <div className="bg-gray-50 px-4 py-3 border-t border-gray-200">
        <div className="flex items-center justify-between">
          <div className="text-sm text-gray-600">
            Showing {data.length} user{data.length !== 1 ? "s" : ""}
          </div>
          <div className="text-sm text-gray-600">
            Total: {data.length} approved users
          </div>
        </div>
      </div>
    </div>
  );
}
