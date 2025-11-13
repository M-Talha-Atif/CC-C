(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/app/dashboard/users/components/DataTable.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "DataTable": (()=>DataTable)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
function DataTable({ data, columns, selectedRows, onSelectAll, onSelectRow, className = "" }) {
    _s();
    const [sortConfig, setSortConfig] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const isAllSelected = data.length > 0 && selectedRows.length === data.length;
    const isIndeterminate = selectedRows.length > 0 && selectedRows.length < data.length;
    const handleSort = (key)=>{
        let direction = "asc";
        if (sortConfig && sortConfig.key === key && sortConfig.direction === "asc") {
            direction = "desc";
        }
        setSortConfig({
            key,
            direction
        });
    };
    const sortedData = [
        ...data
    ].sort((a, b)=>{
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
    const getColumnWidth = (column)=>{
        switch(column.key){
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `overflow-hidden ${className}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "overflow-x-auto",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                    className: "w-full min-w-max",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                className: "border-b border-gray-200 bg-gray-50",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "w-12 px-4 py-3 text-left",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "checkbox",
                                            checked: isAllSelected,
                                            ref: (el)=>{
                                                if (el) el.indeterminate = isIndeterminate;
                                            },
                                            onChange: (e)=>onSelectAll(e.target.checked),
                                            className: "h-4 w-4 rounded border-gray-300 text-black focus:ring-2 focus:ring-black"
                                        }, void 0, false, {
                                            fileName: "[project]/app/dashboard/users/components/DataTable.jsx",
                                            lineNumber: 74,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/users/components/DataTable.jsx",
                                        lineNumber: 73,
                                        columnNumber: 15
                                    }, this),
                                    columns.map((column)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: `${getColumnWidth(column)} px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider ${column.sortable !== false ? "cursor-pointer hover:bg-gray-100" : ""} ${column.key === "actions" ? "sticky right-0 z-10 bg-gray-50" : ""}`,
                                            onClick: ()=>column.sortable !== false && handleSort(column.key),
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center space-x-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "truncate",
                                                        children: column.header
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/users/components/DataTable.jsx",
                                                        lineNumber: 103,
                                                        columnNumber: 21
                                                    }, this),
                                                    column.sortable !== false && sortConfig?.key === column.key && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-black text-sm",
                                                        children: sortConfig.direction === "asc" ? "↑" : "↓"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/users/components/DataTable.jsx",
                                                        lineNumber: 106,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/dashboard/users/components/DataTable.jsx",
                                                lineNumber: 102,
                                                columnNumber: 19
                                            }, this)
                                        }, column.key, false, {
                                            fileName: "[project]/app/dashboard/users/components/DataTable.jsx",
                                            lineNumber: 85,
                                            columnNumber: 17
                                        }, this))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/dashboard/users/components/DataTable.jsx",
                                lineNumber: 72,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/dashboard/users/components/DataTable.jsx",
                            lineNumber: 71,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                            className: "bg-white divide-y divide-gray-200",
                            children: sortedData.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                    className: `hover:bg-gray-50 transition-colors ${selectedRows.includes(item.id) ? "bg-gray-50" : ""}`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "px-4 py-3",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "checkbox",
                                                checked: selectedRows.includes(item.id),
                                                onChange: (e)=>onSelectRow(item.id, e.target.checked),
                                                className: "h-4 w-4 rounded border-gray-300 text-black focus:ring-2 focus:ring-black"
                                            }, void 0, false, {
                                                fileName: "[project]/app/dashboard/users/components/DataTable.jsx",
                                                lineNumber: 124,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/dashboard/users/components/DataTable.jsx",
                                            lineNumber: 123,
                                            columnNumber: 17
                                        }, this),
                                        columns.map((column)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: `${getColumnWidth(column)} px-4 py-3 ${column.key === "actions" ? "sticky right-0 z-10 bg-white" : ""}`,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: column.key === "actions" ? "" : "truncate",
                                                    children: column.render(item)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/dashboard/users/components/DataTable.jsx",
                                                    lineNumber: 140,
                                                    columnNumber: 21
                                                }, this)
                                            }, column.key, false, {
                                                fileName: "[project]/app/dashboard/users/components/DataTable.jsx",
                                                lineNumber: 132,
                                                columnNumber: 19
                                            }, this))
                                    ]
                                }, item.id, true, {
                                    fileName: "[project]/app/dashboard/users/components/DataTable.jsx",
                                    lineNumber: 117,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/app/dashboard/users/components/DataTable.jsx",
                            lineNumber: 115,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/dashboard/users/components/DataTable.jsx",
                    lineNumber: 70,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/dashboard/users/components/DataTable.jsx",
                lineNumber: 69,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-gray-50 px-4 py-3 border-t border-gray-200",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-sm text-gray-600",
                            children: [
                                "Showing ",
                                data.length,
                                " user",
                                data.length !== 1 ? "s" : "",
                                selectedRows.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "ml-2 font-medium",
                                    children: [
                                        "(",
                                        selectedRows.length,
                                        " selected)"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/dashboard/users/components/DataTable.jsx",
                                    lineNumber: 157,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/dashboard/users/components/DataTable.jsx",
                            lineNumber: 154,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-sm text-gray-600",
                            children: [
                                "Total: ",
                                data.length,
                                " pending users"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/dashboard/users/components/DataTable.jsx",
                            lineNumber: 162,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/dashboard/users/components/DataTable.jsx",
                    lineNumber: 153,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/dashboard/users/components/DataTable.jsx",
                lineNumber: 152,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/dashboard/users/components/DataTable.jsx",
        lineNumber: 68,
        columnNumber: 5
    }, this);
}
_s(DataTable, "t+H25Ov8TeTOdJ+5hvG3/kTJUA4=");
_c = DataTable;
var _c;
__turbopack_context__.k.register(_c, "DataTable");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/dashboard/users/components/BulkActions.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "BulkActions": (()=>BulkActions)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
function BulkActions({ selectedCount, onBulkApprove, onBulkReject, loading }) {
    _s();
    const [showConfirmation, setShowConfirmation] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null); // 'approve' | 'reject'
    const handleConfirmAction = ()=>{
        if (showConfirmation === "approve") {
            onBulkApprove();
        } else if (showConfirmation === "reject") {
            onBulkReject();
        }
        setShowConfirmation(null);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-gray-50 border border-gray-200 rounded-lg p-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center space-x-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-sm font-medium text-gray-900",
                                    children: [
                                        selectedCount,
                                        " user",
                                        selectedCount !== 1 ? "s" : "",
                                        " selected"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/dashboard/users/components/BulkActions.jsx",
                                    lineNumber: 25,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "h-4 w-px bg-gray-300"
                                }, void 0, false, {
                                    fileName: "[project]/app/dashboard/users/components/BulkActions.jsx",
                                    lineNumber: 28,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex space-x-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setShowConfirmation("approve"),
                                            disabled: loading,
                                            className: "inline-flex items-center px-3 py-1.5 border border-black text-sm font-medium rounded-md text-black bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors",
                                            children: [
                                                loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-4 h-4 border-2 border-gray-300 border-t-black rounded-full animate-spin mr-2"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/dashboard/users/components/BulkActions.jsx",
                                                    lineNumber: 36,
                                                    columnNumber: 19
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    className: "w-4 h-4 mr-2",
                                                    fill: "none",
                                                    stroke: "currentColor",
                                                    viewBox: "0 0 24 24",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        strokeLinecap: "round",
                                                        strokeLinejoin: "round",
                                                        strokeWidth: 2,
                                                        d: "M5 13l4 4L19 7"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/users/components/BulkActions.jsx",
                                                        lineNumber: 44,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/dashboard/users/components/BulkActions.jsx",
                                                    lineNumber: 38,
                                                    columnNumber: 19
                                                }, this),
                                                "Bulk Approve"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/dashboard/users/components/BulkActions.jsx",
                                            lineNumber: 30,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setShowConfirmation("reject"),
                                            disabled: loading,
                                            className: "inline-flex items-center px-3 py-1.5 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors",
                                            children: [
                                                loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-4 h-4 border-2 border-gray-300 border-t-gray-700 rounded-full animate-spin mr-2"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/dashboard/users/components/BulkActions.jsx",
                                                    lineNumber: 60,
                                                    columnNumber: 19
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    className: "w-4 h-4 mr-2",
                                                    fill: "none",
                                                    stroke: "currentColor",
                                                    viewBox: "0 0 24 24",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        strokeLinecap: "round",
                                                        strokeLinejoin: "round",
                                                        strokeWidth: 2,
                                                        d: "M6 18L18 6M6 6l12 12"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/users/components/BulkActions.jsx",
                                                        lineNumber: 68,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/dashboard/users/components/BulkActions.jsx",
                                                    lineNumber: 62,
                                                    columnNumber: 19
                                                }, this),
                                                "Bulk Reject"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/dashboard/users/components/BulkActions.jsx",
                                            lineNumber: 54,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/dashboard/users/components/BulkActions.jsx",
                                    lineNumber: 29,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/dashboard/users/components/BulkActions.jsx",
                            lineNumber: 24,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-xs text-gray-500",
                            children: "Select users to perform bulk actions"
                        }, void 0, false, {
                            fileName: "[project]/app/dashboard/users/components/BulkActions.jsx",
                            lineNumber: 80,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/dashboard/users/components/BulkActions.jsx",
                    lineNumber: 23,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/dashboard/users/components/BulkActions.jsx",
                lineNumber: 22,
                columnNumber: 7
            }, this),
            showConfirmation && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 bg-[#000000a0] bg-opacity-50 flex items-center justify-center z-50",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white rounded-lg p-6 max-w-md w-full mx-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center mb-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `w-8 h-8 rounded-full flex items-center justify-center mr-3 ${showConfirmation === "approve" ? "bg-green-100" : "bg-red-100"}`,
                                    children: showConfirmation === "approve" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        className: "w-5 h-5 text-green-600",
                                        fill: "none",
                                        stroke: "currentColor",
                                        viewBox: "0 0 24 24",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            strokeWidth: 2,
                                            d: "M5 13l4 4L19 7"
                                        }, void 0, false, {
                                            fileName: "[project]/app/dashboard/users/components/BulkActions.jsx",
                                            lineNumber: 103,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/users/components/BulkActions.jsx",
                                        lineNumber: 97,
                                        columnNumber: 19
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        className: "w-5 h-5 text-red-600",
                                        fill: "none",
                                        stroke: "currentColor",
                                        viewBox: "0 0 24 24",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            strokeWidth: 2,
                                            d: "M6 18L18 6M6 6l12 12"
                                        }, void 0, false, {
                                            fileName: "[project]/app/dashboard/users/components/BulkActions.jsx",
                                            lineNumber: 117,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/users/components/BulkActions.jsx",
                                        lineNumber: 111,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/dashboard/users/components/BulkActions.jsx",
                                    lineNumber: 91,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-lg font-medium text-gray-900",
                                    children: [
                                        "Confirm Bulk",
                                        " ",
                                        showConfirmation === "approve" ? "Approval" : "Rejection"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/dashboard/users/components/BulkActions.jsx",
                                    lineNumber: 126,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/dashboard/users/components/BulkActions.jsx",
                            lineNumber: 90,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm text-gray-600 mb-6",
                            children: [
                                "Are you sure you want to ",
                                showConfirmation,
                                " ",
                                selectedCount,
                                " user",
                                selectedCount !== 1 ? "s" : "",
                                "? This action cannot be undone."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/dashboard/users/components/BulkActions.jsx",
                            lineNumber: 131,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-end space-x-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setShowConfirmation(null),
                                    className: "px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2",
                                    children: "Cancel"
                                }, void 0, false, {
                                    fileName: "[project]/app/dashboard/users/components/BulkActions.jsx",
                                    lineNumber: 136,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: handleConfirmAction,
                                    className: `px-4 py-2 text-sm font-medium text-white rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 ${showConfirmation === "approve" ? "bg-green-600 hover:bg-green-700 focus:ring-green-500" : "bg-red-600 hover:bg-red-700 focus:ring-red-500"}`,
                                    children: [
                                        showConfirmation === "approve" ? "Approve" : "Reject",
                                        " Users"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/dashboard/users/components/BulkActions.jsx",
                                    lineNumber: 142,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/dashboard/users/components/BulkActions.jsx",
                            lineNumber: 135,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/dashboard/users/components/BulkActions.jsx",
                    lineNumber: 89,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/dashboard/users/components/BulkActions.jsx",
                lineNumber: 88,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true);
}
_s(BulkActions, "a8K+Kz+A5cKfz6dGYkSdTtK7c6Q=");
_c = BulkActions;
var _c;
__turbopack_context__.k.register(_c, "BulkActions");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/dashboard/users/components/StatusBadge.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "StatusBadge": (()=>StatusBadge)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
function StatusBadge({ status }) {
    const getStatusStyles = ()=>{
        switch(status){
            case 'pending':
                return 'bg-yellow-100 text-yellow-800 border-yellow-200';
            case 'approved':
                return 'bg-green-100 text-green-800 border-green-200';
            case 'rejected':
                return 'bg-red-100 text-red-800 border-red-200';
            default:
                return 'bg-gray-100 text-gray-800 border-gray-200';
        }
    };
    const getStatusIcon = ()=>{
        switch(status){
            case 'pending':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    className: "w-3 h-3 mr-1",
                    fill: "none",
                    stroke: "currentColor",
                    viewBox: "0 0 24 24",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: 2,
                        d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    }, void 0, false, {
                        fileName: "[project]/app/dashboard/users/components/StatusBadge.jsx",
                        lineNumber: 20,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/dashboard/users/components/StatusBadge.jsx",
                    lineNumber: 19,
                    columnNumber: 11
                }, this);
            case 'approved':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    className: "w-3 h-3 mr-1",
                    fill: "none",
                    stroke: "currentColor",
                    viewBox: "0 0 24 24",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: 2,
                        d: "M5 13l4 4L19 7"
                    }, void 0, false, {
                        fileName: "[project]/app/dashboard/users/components/StatusBadge.jsx",
                        lineNumber: 26,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/dashboard/users/components/StatusBadge.jsx",
                    lineNumber: 25,
                    columnNumber: 11
                }, this);
            case 'rejected':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    className: "w-3 h-3 mr-1",
                    fill: "none",
                    stroke: "currentColor",
                    viewBox: "0 0 24 24",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: 2,
                        d: "M6 18L18 6M6 6l12 12"
                    }, void 0, false, {
                        fileName: "[project]/app/dashboard/users/components/StatusBadge.jsx",
                        lineNumber: 32,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/dashboard/users/components/StatusBadge.jsx",
                    lineNumber: 31,
                    columnNumber: 11
                }, this);
            default:
                return null;
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: `inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${getStatusStyles()}`,
        children: [
            getStatusIcon(),
            status.charAt(0).toUpperCase() + status.slice(1)
        ]
    }, void 0, true, {
        fileName: "[project]/app/dashboard/users/components/StatusBadge.jsx",
        lineNumber: 41,
        columnNumber: 5
    }, this);
}
_c = StatusBadge;
var _c;
__turbopack_context__.k.register(_c, "StatusBadge");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/dashboard/users/components/ActionButtons.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "ActionButtons": (()=>ActionButtons)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
;
const LoadingDots = ({ className = "" })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `flex space-x-1 ${className}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-1 h-1 bg-current rounded-full animate-pulse",
                style: {
                    animationDelay: "0ms"
                }
            }, void 0, false, {
                fileName: "[project]/app/dashboard/users/components/ActionButtons.jsx",
                lineNumber: 5,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-1 h-1 bg-current rounded-full animate-pulse",
                style: {
                    animationDelay: "150ms"
                }
            }, void 0, false, {
                fileName: "[project]/app/dashboard/users/components/ActionButtons.jsx",
                lineNumber: 9,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-1 h-1 bg-current rounded-full animate-pulse",
                style: {
                    animationDelay: "300ms"
                }
            }, void 0, false, {
                fileName: "[project]/app/dashboard/users/components/ActionButtons.jsx",
                lineNumber: 13,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/dashboard/users/components/ActionButtons.jsx",
        lineNumber: 4,
        columnNumber: 3
    }, this);
_c = LoadingDots;
function ActionButtons({ onApprove, onReject, onBlock, onDelete, showApproveReject = false, showBlockDelete = false, showDeleteOnly = false, loading = false, approveLoading = false, rejectLoading = false, blockLoading = false, deleteLoading = false }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex space-x-2",
        children: [
            showApproveReject && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onApprove,
                        disabled: approveLoading || loading,
                        className: "px-3 py-1 text-xs font-medium text-green-700 bg-green-100 border border-green-300 rounded-md hover:bg-green-200 focus:outline-none focus:ring-2 focus:ring-green-500 disabled:opacity-50 disabled:cursor-not-allowed min-w-[70px] flex items-center justify-center",
                        children: approveLoading || loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LoadingDots, {}, void 0, false, {
                            fileName: "[project]/app/dashboard/users/components/ActionButtons.jsx",
                            lineNumber: 43,
                            columnNumber: 42
                        }, this) : "✔️"
                    }, void 0, false, {
                        fileName: "[project]/app/dashboard/users/components/ActionButtons.jsx",
                        lineNumber: 38,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onReject,
                        disabled: rejectLoading || loading,
                        className: "px-3 py-1 text-xs font-medium text-red-700 bg-red-100 border border-red-300 rounded-md hover:bg-red-200 focus:outline-none focus:ring-2 focus:ring-red-500 disabled:opacity-50 disabled:cursor-not-allowed min-w-[60px] flex items-center justify-center",
                        children: rejectLoading || loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LoadingDots, {}, void 0, false, {
                            fileName: "[project]/app/dashboard/users/components/ActionButtons.jsx",
                            lineNumber: 50,
                            columnNumber: 41
                        }, this) : "❌"
                    }, void 0, false, {
                        fileName: "[project]/app/dashboard/users/components/ActionButtons.jsx",
                        lineNumber: 45,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true),
            showBlockDelete && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onBlock,
                        disabled: blockLoading || loading,
                        className: "px-3 py-1 text-xs font-medium text-orange-700 bg-orange-100 border border-orange-300 rounded-md hover:bg-orange-200 focus:outline-none focus:ring-2 focus:ring-orange-500 disabled:opacity-50 disabled:cursor-not-allowed min-w-[60px] flex items-center justify-center",
                        children: blockLoading || loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LoadingDots, {}, void 0, false, {
                            fileName: "[project]/app/dashboard/users/components/ActionButtons.jsx",
                            lineNumber: 63,
                            columnNumber: 40
                        }, this) : "Block"
                    }, void 0, false, {
                        fileName: "[project]/app/dashboard/users/components/ActionButtons.jsx",
                        lineNumber: 58,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onDelete,
                        disabled: deleteLoading || loading,
                        className: "px-3 py-1 text-xs font-medium text-red-700 bg-red-100 border border-red-300 rounded-md hover:bg-red-200 focus:outline-none focus:ring-2 focus:ring-red-500 disabled:opacity-50 disabled:cursor-not-allowed min-w-[60px] flex items-center justify-center",
                        children: deleteLoading || loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LoadingDots, {}, void 0, false, {
                            fileName: "[project]/app/dashboard/users/components/ActionButtons.jsx",
                            lineNumber: 70,
                            columnNumber: 41
                        }, this) : "Delete"
                    }, void 0, false, {
                        fileName: "[project]/app/dashboard/users/components/ActionButtons.jsx",
                        lineNumber: 65,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true),
            showDeleteOnly && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: onDelete,
                disabled: deleteLoading || loading,
                className: "px-3 py-1 text-xs font-medium text-red-700 bg-red-100 border border-red-300 rounded-md hover:bg-red-200 focus:outline-none focus:ring-2 focus:ring-red-500 disabled:opacity-50 disabled:cursor-not-allowed min-w-[60px] flex items-center justify-center",
                children: deleteLoading || loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LoadingDots, {}, void 0, false, {
                    fileName: "[project]/app/dashboard/users/components/ActionButtons.jsx",
                    lineNumber: 81,
                    columnNumber: 39
                }, this) : "Delete"
            }, void 0, false, {
                fileName: "[project]/app/dashboard/users/components/ActionButtons.jsx",
                lineNumber: 76,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/dashboard/users/components/ActionButtons.jsx",
        lineNumber: 35,
        columnNumber: 5
    }, this);
}
_c1 = ActionButtons;
var _c, _c1;
__turbopack_context__.k.register(_c, "LoadingDots");
__turbopack_context__.k.register(_c1, "ActionButtons");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/LoadingSpinner.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "LoadingSpinner": (()=>LoadingSpinner)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
function LoadingSpinner({ size = "md", text = "Loading..." }) {
    const getSizeClasses = ()=>{
        switch(size){
            case "sm":
                return "w-4 h-4";
            case "md":
                return "w-8 h-8";
            case "lg":
                return "w-12 h-12";
            default:
                return "w-8 h-8";
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col items-center justify-center py-12",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `${getSizeClasses()} border-4 border-gray-200 border-t-black rounded-full animate-spin mb-4`
            }, void 0, false, {
                fileName: "[project]/components/LoadingSpinner.jsx",
                lineNumber: 17,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-sm text-gray-600",
                children: text
            }, void 0, false, {
                fileName: "[project]/components/LoadingSpinner.jsx",
                lineNumber: 20,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/LoadingSpinner.jsx",
        lineNumber: 16,
        columnNumber: 5
    }, this);
}
_c = LoadingSpinner;
var _c;
__turbopack_context__.k.register(_c, "LoadingSpinner");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/dashboard/users/components/EmptyState.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "EmptyState": (()=>EmptyState)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
function EmptyState({ title, description, icon, action }) {
    const defaultIcon = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: "w-12 h-12 text-gray-400",
        fill: "none",
        stroke: "currentColor",
        viewBox: "0 0 24 24",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: 1,
            d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
        }, void 0, false, {
            fileName: "[project]/app/dashboard/users/components/EmptyState.jsx",
            lineNumber: 9,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/dashboard/users/components/EmptyState.jsx",
        lineNumber: 3,
        columnNumber: 5
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "text-center py-16",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-center mb-4",
                children: icon || defaultIcon
            }, void 0, false, {
                fileName: "[project]/app/dashboard/users/components/EmptyState.jsx",
                lineNumber: 20,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "text-lg font-medium text-gray-900 mb-2",
                children: title
            }, void 0, false, {
                fileName: "[project]/app/dashboard/users/components/EmptyState.jsx",
                lineNumber: 21,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-sm text-gray-600 max-w-md mx-auto mb-6",
                children: description
            }, void 0, false, {
                fileName: "[project]/app/dashboard/users/components/EmptyState.jsx",
                lineNumber: 22,
                columnNumber: 7
            }, this),
            action && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-center",
                children: action
            }, void 0, false, {
                fileName: "[project]/app/dashboard/users/components/EmptyState.jsx",
                lineNumber: 25,
                columnNumber: 18
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/dashboard/users/components/EmptyState.jsx",
        lineNumber: 19,
        columnNumber: 5
    }, this);
}
_c = EmptyState;
var _c;
__turbopack_context__.k.register(_c, "EmptyState");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/dashboard/users/components/SearchBar.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "SearchBar": (()=>SearchBar)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
function SearchBar({ value, onChange, placeholder, className = "" }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `relative ${className}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    className: "h-5 w-5 text-gray-400",
                    fill: "none",
                    stroke: "currentColor",
                    viewBox: "0 0 24 24",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: 2,
                        d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    }, void 0, false, {
                        fileName: "[project]/app/dashboard/users/components/SearchBar.jsx",
                        lineNumber: 11,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/dashboard/users/components/SearchBar.jsx",
                    lineNumber: 5,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/dashboard/users/components/SearchBar.jsx",
                lineNumber: 4,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                type: "text",
                value: value,
                onChange: (e)=>onChange(e.target.value),
                placeholder: placeholder,
                className: "block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-black focus:border-black"
            }, void 0, false, {
                fileName: "[project]/app/dashboard/users/components/SearchBar.jsx",
                lineNumber: 19,
                columnNumber: 7
            }, this),
            value && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>onChange(''),
                className: "absolute inset-y-0 right-0 pr-3 flex items-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    className: "h-5 w-5 text-gray-400 hover:text-gray-600",
                    fill: "none",
                    stroke: "currentColor",
                    viewBox: "0 0 24 24",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: 2,
                        d: "M6 18L18 6M6 6l12 12"
                    }, void 0, false, {
                        fileName: "[project]/app/dashboard/users/components/SearchBar.jsx",
                        lineNumber: 37,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/dashboard/users/components/SearchBar.jsx",
                    lineNumber: 31,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/dashboard/users/components/SearchBar.jsx",
                lineNumber: 27,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/dashboard/users/components/SearchBar.jsx",
        lineNumber: 3,
        columnNumber: 5
    }, this);
}
_c = SearchBar;
var _c;
__turbopack_context__.k.register(_c, "SearchBar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/data:8b111f [app-client] (ecmascript) <text/javascript>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
/* __next_internal_action_entry_do_not_use__ [{"7fca85de0f604c5ae92a80abf071d0306631d57522":"approveUser"},"action.js",""] */ __turbopack_context__.s({
    "approveUser": (()=>approveUser)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
"use turbopack no side effects";
;
var approveUser = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("7fca85de0f604c5ae92a80abf071d0306631d57522", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "approveUser"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYWN0aW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHNlcnZlclwiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IHsgY29va2llcyB9IGZyb20gXCJuZXh0L2hlYWRlcnNcIjtcbmltcG9ydCB7IHJlZGlyZWN0IH0gZnJvbSBcIm5leHQvbmF2aWdhdGlvblwiO1xuXG4vLyBBdXRoZW50aWNhdGlvblxuZXhwb3J0IGNvbnN0IGxvZ2luID0gYXN5bmMgKHsgZW1haWwsIHBhc3N3b3JkIH0pID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBvc3QoXG4gICAgICBgJHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19CQVNFX1VSTH1hcGkvYXV0aC9sb2dpbj9hZG1pbj10cnVlYCxcbiAgICAgIHsgZW1haWwsIHBhc3N3b3JkIH0sXG4gICAgICB7XG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgfSxcbiAgICAgIH1cbiAgICApO1xuXG4gICAgY29uc3QgeyBkYXRhIH0gPSByZXNwb25zZTtcblxuICAgIC8vIEV4dHJhY3QgYW5kIG1hbnVhbGx5IHNldCBjb29raWVzIGZyb20gcmVzcG9uc2VcbiAgICBjb25zdCBzZXRDb29raWVIZWFkZXIgPSByZXNwb25zZS5oZWFkZXJzW1wic2V0LWNvb2tpZVwiXTtcblxuICAgIGlmIChzZXRDb29raWVIZWFkZXIgJiYgQXJyYXkuaXNBcnJheShzZXRDb29raWVIZWFkZXIpKSB7XG4gICAgICBjb25zdCBjb29raWVTdG9yZSA9IGF3YWl0IGNvb2tpZXMoKTtcblxuICAgICAgc2V0Q29va2llSGVhZGVyLmZvckVhY2goKGNvb2tpZSkgPT4ge1xuICAgICAgICAvLyBQYXJzZSBjb29raWUgc3RyaW5nXG4gICAgICAgIGNvbnN0IHBhcnRzID0gY29va2llLnNwbGl0KFwiO1wiKVswXTtcbiAgICAgICAgY29uc3QgW25hbWUsIC4uLnZhbHVlUGFydHNdID0gcGFydHMuc3BsaXQoXCI9XCIpO1xuICAgICAgICBjb25zdCB2YWx1ZSA9IHZhbHVlUGFydHMuam9pbihcIj1cIik7XG5cbiAgICAgICAgaWYgKG5hbWUgJiYgdmFsdWUpIHtcbiAgICAgICAgICAvLyBTZXQgY29va2llIHdpdGggaHR0cE9ubHkgYW5kIHNlY3VyZSBmbGFnc1xuICAgICAgICAgIGNvb2tpZVN0b3JlLnNldChuYW1lLnRyaW0oKSwgdmFsdWUudHJpbSgpLCB7XG4gICAgICAgICAgICBodHRwT25seTogdHJ1ZSxcbiAgICAgICAgICAgIHNlY3VyZTogcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiLFxuICAgICAgICAgICAgc2FtZVNpdGU6IFwibGF4XCIsXG4gICAgICAgICAgICBwYXRoOiBcIi9cIixcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gT24gc3VjY2Vzc2Z1bCBsb2dpbiwgcmVkaXJlY3QgdG8gYWRtaW4gZGFzaGJvYXJkXG4gICAgcmVkaXJlY3QoXCIvZGFzaGJvYXJkL292ZXJ2aWV3XCIpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIC8vIElmIGl0J3MgYSByZWRpcmVjdCwgcmUtdGhyb3cgaXRcbiAgICBpZiAoXG4gICAgICBlcnJvci5tZXNzYWdlID09PSBcIk5FWFRfUkVESVJFQ1RcIiB8fFxuICAgICAgZXJyb3IuZGlnZXN0Py5zdGFydHNXaXRoKFwiTkVYVF9SRURJUkVDVFwiKVxuICAgICkge1xuICAgICAgdGhyb3cgZXJyb3I7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgbWVzc2FnZTogZXJyb3IucmVzcG9uc2U/LmRhdGE/Lm1lc3NhZ2UgfHwgXCJMb2dpbiBmYWlsZWRcIixcbiAgICB9O1xuICB9XG59O1xuXG5leHBvcnQgY29uc3QgbG9nb3V0ID0gYXN5bmMgKCkgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IGNvb2tpZVN0b3JlID0gYXdhaXQgY29va2llcygpO1xuICAgIGNvb2tpZVN0b3JlLmRlbGV0ZShcInRva2VuXCIpO1xuICAgIGNvb2tpZVN0b3JlLmRlbGV0ZShcInJlZnJlc2hUb2tlblwiKTtcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UgfTtcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IHJlZnJlc2hUb2tlblNlcnZlciA9IGFzeW5jICgpID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGF4aW9zLnBvc3QoXG4gICAgICBgJHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19CQVNFX1VSTH1hcGkvYXV0aC9yZWZyZXNoLXRva2VuYCxcbiAgICAgIHt9LFxuICAgICAge1xuICAgICAgICB3aXRoQ3JlZGVudGlhbHM6IHRydWUsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICBDb29raWU6IChhd2FpdCBjb29raWVzKCkpLnRvU3RyaW5nKCksIC8vIEZvcndhcmQgYWxsIGNvb2tpZXNcbiAgICAgICAgfSxcbiAgICAgIH1cbiAgICApO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIHN1Y2Nlc3M6IHRydWUsXG4gICAgICBkYXRhOiBkYXRhLmRhdGEsXG4gICAgICBtZXNzYWdlOiBcIlRva2VuIHJlZnJlc2hlZCBzdWNjZXNzZnVsbHlcIixcbiAgICB9O1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJTZXJ2ZXIgdG9rZW4gcmVmcmVzaCBlcnJvcjpcIiwgZXJyb3IpO1xuICAgIHJldHVybiB7XG4gICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgIG1lc3NhZ2U6IGVycm9yLnJlc3BvbnNlPy5kYXRhPy5tZXNzYWdlIHx8IFwiVG9rZW4gcmVmcmVzaCBmYWlsZWRcIixcbiAgICB9O1xuICB9XG59O1xuXG5jb25zdCBtYWtlQXV0aGVudGljYXRlZFJlcXVlc3QgPSBhc3luYyAodXJsLCBvcHRpb25zID0ge30pID0+IHtcbiAgY29uc3QgY29va2llU3RvcmUgPSBhd2FpdCBjb29raWVzKCk7XG5cbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zKHtcbiAgICAgIHVybCxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgQ29va2llOiBjb29raWVTdG9yZS50b1N0cmluZygpLFxuICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgLi4ub3B0aW9ucy5oZWFkZXJzLFxuICAgICAgfSxcbiAgICAgIHRpbWVvdXQ6IDMwMDAwLFxuICAgICAgd2l0aENyZWRlbnRpYWxzOiB0cnVlLFxuICAgICAgLi4ub3B0aW9ucyxcbiAgICB9KTtcblxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IHJlc3BvbnNlLmRhdGEgfTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAvLyBJZiA0MDEgYW5kIHdlIGhhdmVuJ3QgcmV0cmllZCB5ZXQsIHRyeSB0byByZWZyZXNoXG4gICAgaWYgKGVycm9yLnJlc3BvbnNlPy5zdGF0dXMgPT09IDQwMSAmJiAhb3B0aW9ucy5za2lwUmVmcmVzaCkge1xuICAgICAgY29uc29sZS5sb2coXCJUb2tlbiBleHBpcmVkLCBhdHRlbXB0aW5nIHJlZnJlc2guLi5cIik7XG5cbiAgICAgIGNvbnN0IHJlZnJlc2hSZXN1bHQgPSBhd2FpdCByZWZyZXNoVG9rZW5TZXJ2ZXIoKTtcblxuICAgICAgaWYgKHJlZnJlc2hSZXN1bHQuc3VjY2Vzcykge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGNvbnN0IHJldHJ5UmVzcG9uc2UgPSBhd2FpdCBheGlvcyh7XG4gICAgICAgICAgICB1cmwsXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgIENvb2tpZTogKGF3YWl0IGNvb2tpZXMoKSkudG9TdHJpbmcoKSxcbiAgICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgICAgICAgIC4uLm9wdGlvbnMuaGVhZGVycyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0aW1lb3V0OiAzMDAwMCxcbiAgICAgICAgICAgIHdpdGhDcmVkZW50aWFsczogdHJ1ZSxcbiAgICAgICAgICAgIC4uLm9wdGlvbnMsXG4gICAgICAgICAgICBza2lwUmVmcmVzaDogdHJ1ZSxcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IHJldHJ5UmVzcG9uc2UuZGF0YSB9O1xuICAgICAgICB9IGNhdGNoIChyZXRyeUVycm9yKSB7XG4gICAgICAgICAgLy8gVGhyb3cgYXhpb3MgZXJyb3IgYXMtaXMgc28gcmVzcG9uc2UgZGF0YSBpcyBwcmVzZXJ2ZWRcbiAgICAgICAgICB0aHJvdyByZXRyeUVycm9yO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gVGhyb3cgYXhpb3MgZXJyb3IgYXMtaXMgc28gcmVzcG9uc2UgZGF0YSBpcyBwcmVzZXJ2ZWRcbiAgICB0aHJvdyBlcnJvcjtcbiAgfVxufTtcbi8vIEdldCByZWZlcnJhbCBjb2RlcyB3aXRoIGZpbHRlcnNcbmV4cG9ydCBjb25zdCBnZXRSZWZlcnJhbENvZGVzID0gYXN5bmMgKHtcbiAgcGFnZSA9IDEsXG4gIGxpbWl0ID0gMTAsXG4gIGlzQWN0aXZlLFxuICBhc3NpZ25lZFN0YXR1cyxcbiAgc2VhcmNoLFxufSA9IHt9KSA9PiB7XG4gIGNvbnN0IHF1ZXJ5UGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcyh7XG4gICAgcGFnZTogcGFnZS50b1N0cmluZygpLFxuICAgIGxpbWl0OiBsaW1pdC50b1N0cmluZygpLFxuICAgIC4uLihpc0FjdGl2ZSAhPT0gdW5kZWZpbmVkICYmIHsgaXNBY3RpdmU6IGlzQWN0aXZlLnRvU3RyaW5nKCkgfSksXG4gICAgLi4uKGFzc2lnbmVkU3RhdHVzICYmIHsgYXNzaWduZWRTdGF0dXMgfSksXG4gICAgLi4uKHNlYXJjaCAmJiB7IHNlYXJjaCB9KSxcbiAgfSk7XG5cbiAgY29uc3QgcmVzdWx0ID0gYXdhaXQgbWFrZUF1dGhlbnRpY2F0ZWRSZXF1ZXN0KFxuICAgIGAke1xuICAgICAgcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQkFTRV9VUkxcbiAgICB9YXBpL2FkbWluL3JlZmVycmFsLWNvZGVzPyR7cXVlcnlQYXJhbXMudG9TdHJpbmcoKX1gLFxuICAgIHtcbiAgICAgIG1ldGhvZDogXCJHRVRcIixcbiAgICB9XG4gICk7XG5cbiAgaWYgKHJlc3VsdC5zdWNjZXNzKSB7XG4gICAgcmV0dXJuIHJlc3VsdC5kYXRhO1xuICB9XG5cbiAgdGhyb3cgbmV3IEVycm9yKFwiRmFpbGVkIHRvIGdldCByZWZlcnJhbCBjb2Rlc1wiKTtcbn07XG5cbi8vIEdldCB1c2VycyBmb3IgZHJvcGRvd24gc2VsZWN0aW9uXG5leHBvcnQgY29uc3QgZ2V0VXNlcnMgPSBhc3luYyAoe1xuICBwYWdlID0gMSxcbiAgbGltaXQgPSAxMDAsIC8vIEdldCBtb3JlIHVzZXJzIGZvciBkcm9wZG93blxuICB1c2VyVHlwZSxcbiAgc2VhcmNoLFxufSA9IHt9KSA9PiB7XG4gIGNvbnN0IHF1ZXJ5UGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcyh7XG4gICAgcGFnZTogcGFnZS50b1N0cmluZygpLFxuICAgIGxpbWl0OiBsaW1pdC50b1N0cmluZygpLFxuICAgIC4uLih1c2VyVHlwZSAmJiB7IHVzZXJUeXBlIH0pLFxuICAgIC4uLihzZWFyY2ggJiYgeyBzZWFyY2ggfSksXG4gIH0pO1xuXG4gIGNvbnN0IHJlc3VsdCA9IGF3YWl0IG1ha2VBdXRoZW50aWNhdGVkUmVxdWVzdChcbiAgICBgJHtcbiAgICAgIHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0JBU0VfVVJMXG4gICAgfWFwaS9hZG1pbi91c2Vycz8ke3F1ZXJ5UGFyYW1zLnRvU3RyaW5nKCl9YCxcbiAgICB7XG4gICAgICBtZXRob2Q6IFwiR0VUXCIsXG4gICAgfVxuICApO1xuXG4gIGlmIChyZXN1bHQuc3VjY2Vzcykge1xuICAgIHJldHVybiByZXN1bHQuZGF0YTtcbiAgfVxuXG4gIHRocm93IG5ldyBFcnJvcihcIkZhaWxlZCB0byBnZXQgdXNlcnNcIik7XG59O1xuXG4vLyBDcmVhdGUgbmV3IHJlZmVycmFsIGNvZGVcbmV4cG9ydCBjb25zdCBjcmVhdGVSZWZlcnJhbENvZGUgPSBhc3luYyAoe1xuICBjb2RlLFxuICBkZXNjcmlwdGlvbixcbiAgZXhwaXJlc0F0LFxuICBhc3NpZ25lZFRvVXNlcklkLFxufSkgPT4ge1xuICBjb25zdCByZXN1bHQgPSBhd2FpdCBtYWtlQXV0aGVudGljYXRlZFJlcXVlc3QoXG4gICAgYCR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQkFTRV9VUkx9YXBpL2FkbWluL3JlZmVycmFsLWNvZGVzYCxcbiAgICB7XG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgZGF0YToge1xuICAgICAgICBjb2RlLFxuICAgICAgICBkZXNjcmlwdGlvbixcbiAgICAgICAgZXhwaXJlc0F0LFxuICAgICAgICBhc3NpZ25lZFRvVXNlcklkOlxuICAgICAgICAgIGFzc2lnbmVkVG9Vc2VySWQgPT09IFwiYWRtaW5cIiA/IG51bGwgOiBhc3NpZ25lZFRvVXNlcklkLFxuICAgICAgfSxcbiAgICB9XG4gICk7XG5cbiAgaWYgKHJlc3VsdC5zdWNjZXNzKSB7XG4gICAgcmV0dXJuIHJlc3VsdC5kYXRhO1xuICB9XG5cbiAgdGhyb3cgbmV3IEVycm9yKFwiRmFpbGVkIHRvIGNyZWF0ZSByZWZlcnJhbCBjb2RlXCIpO1xufTtcblxuLy8gVXBkYXRlIHJlZmVycmFsIGNvZGVcbmV4cG9ydCBjb25zdCB1cGRhdGVSZWZlcnJhbENvZGUgPSBhc3luYyAoe1xuICBpZCxcbiAgY29kZSxcbiAgZGVzY3JpcHRpb24sXG4gIGV4cGlyZXNBdCxcbiAgaXNBY3RpdmUsXG59KSA9PiB7XG4gIGNvbnN0IHJlc3VsdCA9IGF3YWl0IG1ha2VBdXRoZW50aWNhdGVkUmVxdWVzdChcbiAgICBgJHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19CQVNFX1VSTH1hcGkvYWRtaW4vcmVmZXJyYWwtY29kZXMvJHtpZH1gLFxuICAgIHtcbiAgICAgIG1ldGhvZDogXCJQVVRcIixcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgY29kZSxcbiAgICAgICAgZGVzY3JpcHRpb24sXG4gICAgICAgIGV4cGlyZXNBdCxcbiAgICAgICAgaXNBY3RpdmUsXG4gICAgICB9LFxuICAgIH1cbiAgKTtcblxuICBpZiAocmVzdWx0LnN1Y2Nlc3MpIHtcbiAgICByZXR1cm4gcmVzdWx0LmRhdGE7XG4gIH1cblxuICB0aHJvdyBuZXcgRXJyb3IoXCJGYWlsZWQgdG8gdXBkYXRlIHJlZmVycmFsIGNvZGVcIik7XG59O1xuXG4vLyBEZWxldGUgcmVmZXJyYWwgY29kZVxuZXhwb3J0IGNvbnN0IGRlbGV0ZVJlZmVycmFsQ29kZSA9IGFzeW5jIChpZCkgPT4ge1xuICBjb25zdCByZXN1bHQgPSBhd2FpdCBtYWtlQXV0aGVudGljYXRlZFJlcXVlc3QoXG4gICAgYCR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQkFTRV9VUkx9YXBpL2FkbWluL3JlZmVycmFsLWNvZGVzLyR7aWR9YCxcbiAgICB7XG4gICAgICBtZXRob2Q6IFwiREVMRVRFXCIsXG4gICAgfVxuICApO1xuXG4gIGlmIChyZXN1bHQuc3VjY2Vzcykge1xuICAgIHJldHVybiByZXN1bHQuZGF0YTtcbiAgfVxuXG4gIHRocm93IG5ldyBFcnJvcihcIkZhaWxlZCB0byBkZWxldGUgcmVmZXJyYWwgY29kZVwiKTtcbn07XG5cbi8vIEFzc2lnbiByZWZlcnJhbCBjb2RlIHRvIHVzZXJcbmV4cG9ydCBjb25zdCBhc3NpZ25SZWZlcnJhbENvZGUgPSBhc3luYyAoeyBpZCwgdXNlcklkIH0pID0+IHtcbiAgdHJ5IHtcbiAgICBpZiAoIWlkIHx8ICF1c2VySWQpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgICBtZXNzYWdlOiBcIlJlZmVycmFsIGNvZGUgSUQgYW5kIHVzZXIgSUQgYXJlIHJlcXVpcmVkXCIsXG4gICAgICB9O1xuICAgIH1cblxuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IG1ha2VBdXRoZW50aWNhdGVkUmVxdWVzdChcbiAgICAgIGAke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0JBU0VfVVJMfWFwaS9hZG1pbi9yZWZlcnJhbC1jb2Rlcy8ke2lkfS9hc3NpZ25gLFxuICAgICAge1xuICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICBkYXRhOiB7IHVzZXJJZDogdXNlcklkLnRvU3RyaW5nKCkgfSwgLy8gRW5zdXJlIHVzZXJJZCBpcyBzdHJpbmdcbiAgICAgICAgdGltZW91dDogMTAwMDAsXG4gICAgICB9XG4gICAgKTtcblxuICAgIGlmIChyZXN1bHQuc3VjY2Vzcykge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgc3VjY2VzczogdHJ1ZSxcbiAgICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXG4gICAgICB9O1xuICAgIH1cblxuICAgIHRocm93IG5ldyBFcnJvcihcIkZhaWxlZCB0byBhc3NpZ24gcmVmZXJyYWwgY29kZVwiKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgaW4gYXNzaWduUmVmZXJyYWxDb2RlIEFQSTpcIiwgZXJyb3IpO1xuXG4gICAgbGV0IG1lc3NhZ2UgPSBcIkFuIHVuZXhwZWN0ZWQgZXJyb3Igb2NjdXJyZWRcIjtcblxuICAgIGlmIChlcnJvci5yZXNwb25zZSkge1xuICAgICAgbWVzc2FnZSA9XG4gICAgICAgIGVycm9yLnJlc3BvbnNlLmRhdGE/Lm1lc3NhZ2UgfHxcbiAgICAgICAgYFJlcXVlc3QgZmFpbGVkIHdpdGggc3RhdHVzICR7ZXJyb3IucmVzcG9uc2Uuc3RhdHVzfWA7XG4gICAgfSBlbHNlIGlmIChlcnJvci5yZXF1ZXN0KSB7XG4gICAgICBtZXNzYWdlID0gXCJOZXR3b3JrIGVycm9yLiBQbGVhc2UgY2hlY2sgeW91ciBjb25uZWN0aW9uIGFuZCB0cnkgYWdhaW4uXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIG1lc3NhZ2UgPSBlcnJvci5tZXNzYWdlIHx8IFwiQW4gdW5leHBlY3RlZCBlcnJvciBvY2N1cnJlZFwiO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgIG1lc3NhZ2UsXG4gICAgfTtcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IHVuYXNzaWduUmVmZXJyYWxDb2RlID0gYXN5bmMgKGlkKSA9PiB7XG4gIHRyeSB7XG4gICAgaWYgKCFpZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiUmVmZXJyYWwgY29kZSBJRCBpcyByZXF1aXJlZFwiKTtcbiAgICB9XG5cbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBtYWtlQXV0aGVudGljYXRlZFJlcXVlc3QoXG4gICAgICBgJHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19CQVNFX1VSTH1hcGkvYWRtaW4vcmVmZXJyYWwtY29kZXMvJHtpZH0vdW5hc3NpZ25gLFxuICAgICAge1xuICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICBkYXRhOiB7fSxcbiAgICAgICAgdGltZW91dDogMTAwMDAsXG4gICAgICB9XG4gICAgKTtcblxuICAgIGlmIChyZXN1bHQuc3VjY2Vzcykge1xuICAgICAgcmV0dXJuIHJlc3VsdC5kYXRhO1xuICAgIH1cblxuICAgIHRocm93IG5ldyBFcnJvcihcIkZhaWxlZCB0byB1bmFzc2lnbiByZWZlcnJhbCBjb2RlXCIpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBpbiB1bmFzc2lnblJlZmVycmFsQ29kZSBBUEk6XCIsIGVycm9yKTtcblxuICAgIGlmIChlcnJvci5yZXNwb25zZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBlcnJvci5yZXNwb25zZS5kYXRhPy5tZXNzYWdlIHx8IFwiRmFpbGVkIHRvIHVuYXNzaWduIHJlZmVycmFsIGNvZGVcIlxuICAgICAgKTtcbiAgICB9IGVsc2UgaWYgKGVycm9yLnJlcXVlc3QpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgXCJOZXR3b3JrIGVycm9yLiBQbGVhc2UgY2hlY2sgeW91ciBjb25uZWN0aW9uIGFuZCB0cnkgYWdhaW4uXCJcbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihlcnJvci5tZXNzYWdlIHx8IFwiQW4gdW5leHBlY3RlZCBlcnJvciBvY2N1cnJlZFwiKTtcbiAgICB9XG4gIH1cbn07XG5cbi8vIEdldCByZWZlcnJhbCBjb2RlIGJ5IElEXG5leHBvcnQgY29uc3QgZ2V0UmVmZXJyYWxDb2RlQnlJZCA9IGFzeW5jIChpZCkgPT4ge1xuICBjb25zdCByZXN1bHQgPSBhd2FpdCBtYWtlQXV0aGVudGljYXRlZFJlcXVlc3QoXG4gICAgYCR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQkFTRV9VUkx9YXBpL2FkbWluL3JlZmVycmFsLWNvZGVzLyR7aWR9YCxcbiAgICB7XG4gICAgICBtZXRob2Q6IFwiR0VUXCIsXG4gICAgfVxuICApO1xuXG4gIGlmIChyZXN1bHQuc3VjY2Vzcykge1xuICAgIHJldHVybiByZXN1bHQuZGF0YTtcbiAgfVxuXG4gIHRocm93IG5ldyBFcnJvcihcIkZhaWxlZCB0byBnZXQgcmVmZXJyYWwgY29kZVwiKTtcbn07XG5cbi8vIEdldCByZWZlcnJhbCBhbmFseXRpY3NcbmV4cG9ydCBjb25zdCBnZXRSZWZlcnJhbEFuYWx5dGljcyA9IGFzeW5jICh7XG4gIHN0YXJ0RGF0ZSxcbiAgZW5kRGF0ZSxcbiAgYWRtaW5JZCxcbn0gPSB7fSkgPT4ge1xuICBjb25zdCBxdWVyeVBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoe1xuICAgIC4uLihzdGFydERhdGUgJiYgeyBzdGFydERhdGUgfSksXG4gICAgLi4uKGVuZERhdGUgJiYgeyBlbmREYXRlIH0pLFxuICAgIC4uLihhZG1pbklkICYmIHsgYWRtaW5JZCB9KSxcbiAgfSk7XG5cbiAgY29uc3QgcmVzdWx0ID0gYXdhaXQgbWFrZUF1dGhlbnRpY2F0ZWRSZXF1ZXN0KFxuICAgIGAke1xuICAgICAgcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQkFTRV9VUkxcbiAgICB9YXBpL2FkbWluL3JlZmVycmFsLWFuYWx5dGljcz8ke3F1ZXJ5UGFyYW1zLnRvU3RyaW5nKCl9YCxcbiAgICB7XG4gICAgICBtZXRob2Q6IFwiR0VUXCIsXG4gICAgfVxuICApO1xuXG4gIGlmIChyZXN1bHQuc3VjY2Vzcykge1xuICAgIHJldHVybiByZXN1bHQuZGF0YTtcbiAgfVxuXG4gIHRocm93IG5ldyBFcnJvcihcIkZhaWxlZCB0byBnZXQgcmVmZXJyYWwgYW5hbHl0aWNzXCIpO1xufTtcblxuLy8gR2V0IHJlZmVycmFsIHVzYWdlIGRhdGFcbmV4cG9ydCBjb25zdCBnZXRSZWZlcnJhbFVzYWdlID0gYXN5bmMgKHtcbiAgcGFnZSA9IDEsXG4gIGxpbWl0ID0gMTAsXG4gIHJlZmVycmFsQ29kZSxcbiAgdXNlcklkLFxufSA9IHt9KSA9PiB7XG4gIGNvbnN0IHF1ZXJ5UGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcyh7XG4gICAgcGFnZTogcGFnZS50b1N0cmluZygpLFxuICAgIGxpbWl0OiBsaW1pdC50b1N0cmluZygpLFxuICAgIC4uLihyZWZlcnJhbENvZGUgJiYgeyByZWZlcnJhbENvZGUgfSksXG4gICAgLi4uKHVzZXJJZCAmJiB7IHVzZXJJZCB9KSxcbiAgfSk7XG5cbiAgY29uc3QgcmVzdWx0ID0gYXdhaXQgbWFrZUF1dGhlbnRpY2F0ZWRSZXF1ZXN0KFxuICAgIGAke1xuICAgICAgcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQkFTRV9VUkxcbiAgICB9YXBpL2FkbWluL3JlZmVycmFsLXVzYWdlPyR7cXVlcnlQYXJhbXMudG9TdHJpbmcoKX1gLFxuICAgIHtcbiAgICAgIG1ldGhvZDogXCJHRVRcIixcbiAgICB9XG4gICk7XG5cbiAgaWYgKHJlc3VsdC5zdWNjZXNzKSB7XG4gICAgcmV0dXJuIHJlc3VsdC5kYXRhO1xuICB9XG5cbiAgdGhyb3cgbmV3IEVycm9yKFwiRmFpbGVkIHRvIGdldCByZWZlcnJhbCB1c2FnZVwiKTtcbn07XG5cbi8vIEdldCB1c2VyIGJ5IElEXG5leHBvcnQgY29uc3QgZ2V0VXNlckJ5SWQgPSBhc3luYyAoaWQpID0+IHtcbiAgY29uc3QgcmVzdWx0ID0gYXdhaXQgbWFrZUF1dGhlbnRpY2F0ZWRSZXF1ZXN0KFxuICAgIGAke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0JBU0VfVVJMfWFwaS9hZG1pbi91c2Vycy8ke2lkfWAsXG4gICAge1xuICAgICAgbWV0aG9kOiBcIkdFVFwiLFxuICAgIH1cbiAgKTtcblxuICBpZiAocmVzdWx0LnN1Y2Nlc3MpIHtcbiAgICByZXR1cm4gcmVzdWx0LmRhdGE7XG4gIH1cblxuICB0aHJvdyBuZXcgRXJyb3IoXCJGYWlsZWQgdG8gZ2V0IHVzZXJcIik7XG59O1xuXG4vLyBVcGRhdGUgdXNlciBwb2ludHNcbmV4cG9ydCBjb25zdCB1cGRhdGVVc2VyUG9pbnRzID0gYXN5bmMgKHsgaWQsIGFtb3VudCwgdHlwZSwgZGVzY3JpcHRpb24gfSkgPT4ge1xuICBjb25zdCByZXN1bHQgPSBhd2FpdCBtYWtlQXV0aGVudGljYXRlZFJlcXVlc3QoXG4gICAgYCR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQkFTRV9VUkx9YXBpL2FkbWluL3VzZXJzLyR7aWR9L3BvaW50c2AsXG4gICAge1xuICAgICAgbWV0aG9kOiBcIlBVVFwiLFxuICAgICAgZGF0YToge1xuICAgICAgICBhbW91bnQsXG4gICAgICAgIHR5cGUsXG4gICAgICAgIGRlc2NyaXB0aW9uLFxuICAgICAgfSxcbiAgICB9XG4gICk7XG5cbiAgaWYgKHJlc3VsdC5zdWNjZXNzKSB7XG4gICAgcmV0dXJuIHJlc3VsdC5kYXRhO1xuICB9XG5cbiAgdGhyb3cgbmV3IEVycm9yKFwiRmFpbGVkIHRvIHVwZGF0ZSB1c2VyIHBvaW50c1wiKTtcbn07XG5cbi8vIEJ1bGsgY3JlYXRlIHJlZmVycmFsIGNvZGVzXG5leHBvcnQgY29uc3QgYnVsa0NyZWF0ZVJlZmVycmFsQ29kZXMgPSBhc3luYyAoY29kZXMpID0+IHtcbiAgY29uc3QgcmVzdWx0ID0gYXdhaXQgbWFrZUF1dGhlbnRpY2F0ZWRSZXF1ZXN0KFxuICAgIGAke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0JBU0VfVVJMfWFwaS9hZG1pbi9yZWZlcnJhbC1jb2Rlcy9idWxrLWNyZWF0ZWAsXG4gICAge1xuICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgIGRhdGE6IHsgY29kZXMgfSxcbiAgICB9XG4gICk7XG5cbiAgaWYgKHJlc3VsdC5zdWNjZXNzKSB7XG4gICAgcmV0dXJuIHJlc3VsdC5kYXRhO1xuICB9XG5cbiAgdGhyb3cgbmV3IEVycm9yKFwiRmFpbGVkIHRvIGJ1bGsgY3JlYXRlIHJlZmVycmFsIGNvZGVzXCIpO1xufTtcblxuLy8gQnVsayBhc3NpZ24gcmVmZXJyYWwgY29kZXNcbmV4cG9ydCBjb25zdCBidWxrQXNzaWduUmVmZXJyYWxDb2RlcyA9IGFzeW5jIChhc3NpZ25tZW50cykgPT4ge1xuICBjb25zdCByZXN1bHQgPSBhd2FpdCBtYWtlQXV0aGVudGljYXRlZFJlcXVlc3QoXG4gICAgYCR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQkFTRV9VUkx9YXBpL2FkbWluL3JlZmVycmFsLWNvZGVzL2J1bGstYXNzaWduYCxcbiAgICB7XG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgZGF0YTogeyBhc3NpZ25tZW50cyB9LFxuICAgIH1cbiAgKTtcblxuICBpZiAocmVzdWx0LnN1Y2Nlc3MpIHtcbiAgICByZXR1cm4gcmVzdWx0LmRhdGE7XG4gIH1cblxuICB0aHJvdyBuZXcgRXJyb3IoXCJGYWlsZWQgdG8gYnVsayBhc3NpZ24gcmVmZXJyYWwgY29kZXNcIik7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0UGVuZGluZ1VzZXJzID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCByZXN1bHQgPSBhd2FpdCBtYWtlQXV0aGVudGljYXRlZFJlcXVlc3QoXG4gICAgYCR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQkFTRV9VUkx9YXBpL2FkbWluL3BlbmRpbmcvdXNlcnNgLFxuICAgIHtcbiAgICAgIG1ldGhvZDogXCJHRVRcIixcbiAgICB9XG4gICk7XG5cbiAgaWYgKHJlc3VsdC5zdWNjZXNzKSB7XG4gICAgcmV0dXJuIHJlc3VsdC5kYXRhO1xuICB9XG5cbiAgdGhyb3cgbmV3IEVycm9yKFwiRmFpbGVkIHRvIGdldCBwZW5kaW5nIHVzZXJzXCIpO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldEFwcHJvdmVkVXNlcnMgPSBhc3luYyAoe1xuICBwYWdlID0gMSxcbiAgbGltaXQgPSAxMCxcbiAgc2VhcmNoID0gXCJcIixcbn0gPSB7fSkgPT4ge1xuICBjb25zdCBwYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHtcbiAgICBwYWdlOiBwYWdlLnRvU3RyaW5nKCksXG4gICAgbGltaXQ6IGxpbWl0LnRvU3RyaW5nKCksXG4gICAgLi4uKHNlYXJjaCAmJiB7IHNlYXJjaCB9KSxcbiAgfSk7XG5cbiAgY29uc3QgcmVzdWx0ID0gYXdhaXQgbWFrZUF1dGhlbnRpY2F0ZWRSZXF1ZXN0KFxuICAgIGAke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0JBU0VfVVJMfWFwaS9hZG1pbi9hcHByb3ZlZC91c2Vycz8ke3BhcmFtc31gLFxuICAgIHtcbiAgICAgIG1ldGhvZDogXCJHRVRcIixcbiAgICB9XG4gICk7XG5cbiAgaWYgKHJlc3VsdC5zdWNjZXNzKSB7XG4gICAgcmV0dXJuIHJlc3VsdC5kYXRhO1xuICB9XG5cbiAgdGhyb3cgbmV3IEVycm9yKFwiRmFpbGVkIHRvIGdldCBhcHByb3ZlZCB1c2Vyc1wiKTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRVc2VyUmVmZXJyYWxVc2FnZSA9IGFzeW5jICh7XG4gIHVzZXJJZCxcbiAgcGFnZSA9IDEsXG4gIGxpbWl0ID0gNTAsXG59ID0ge30pID0+IHtcbiAgY29uc3QgcGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcyh7XG4gICAgcGFnZTogcGFnZS50b1N0cmluZygpLFxuICAgIGxpbWl0OiBsaW1pdC50b1N0cmluZygpLFxuICB9KTtcblxuICBjb25zdCByZXN1bHQgPSBhd2FpdCBtYWtlQXV0aGVudGljYXRlZFJlcXVlc3QoXG4gICAgYCR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQkFTRV9VUkx9YXBpL2FkbWluL3VzZXJzLyR7dXNlcklkfS9yZWZlcnJhbC11c2FnZT8ke3BhcmFtc31gLFxuICAgIHtcbiAgICAgIG1ldGhvZDogXCJHRVRcIixcbiAgICB9XG4gICk7XG5cbiAgaWYgKHJlc3VsdC5zdWNjZXNzKSB7XG4gICAgcmV0dXJuIHJlc3VsdC5kYXRhO1xuICB9XG5cbiAgdGhyb3cgbmV3IEVycm9yKFwiRmFpbGVkIHRvIGdldCB1c2VyIHJlZmVycmFsIHVzYWdlXCIpO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldFJlamVjdGVkVXNlcnMgPSBhc3luYyAoe1xuICBwYWdlID0gMSxcbiAgbGltaXQgPSAxMCxcbiAgc2VhcmNoID0gXCJcIixcbiAgc3RhdHVzID0gXCJhbGxcIixcbn0gPSB7fSkgPT4ge1xuICBjb25zdCBwYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHtcbiAgICBwYWdlOiBwYWdlLnRvU3RyaW5nKCksXG4gICAgbGltaXQ6IGxpbWl0LnRvU3RyaW5nKCksXG4gICAgc3RhdHVzLFxuICAgIC4uLihzZWFyY2ggJiYgeyBzZWFyY2ggfSksXG4gIH0pO1xuXG4gIGNvbnN0IHJlc3VsdCA9IGF3YWl0IG1ha2VBdXRoZW50aWNhdGVkUmVxdWVzdChcbiAgICBgJHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19CQVNFX1VSTH1hcGkvYWRtaW4vcmVqZWN0ZWQtdXNlcnM/JHtwYXJhbXN9YCxcbiAgICB7XG4gICAgICBtZXRob2Q6IFwiR0VUXCIsXG4gICAgfVxuICApO1xuXG4gIGlmIChyZXN1bHQuc3VjY2Vzcykge1xuICAgIHJldHVybiByZXN1bHQuZGF0YTtcbiAgfVxuXG4gIHRocm93IG5ldyBFcnJvcihcIkZhaWxlZCB0byBnZXQgcmVqZWN0ZWQgdXNlcnNcIik7XG59O1xuXG4vLyBHRVQgYWxsIHVzZXJzIHdpdGggc3RhdHVzXG5leHBvcnQgY29uc3QgZ2V0QWxsVXNlcnNXaXRoU3RhdHVzID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCByZXN1bHQgPSBhd2FpdCBtYWtlQXV0aGVudGljYXRlZFJlcXVlc3QoXG4gICAgYCR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQkFTRV9VUkx9YXBpL2FkbWluL3VzZXJzL3N0YXR1cy9hbGxgLFxuICAgIHtcbiAgICAgIG1ldGhvZDogXCJHRVRcIixcbiAgICB9XG4gICk7XG5cbiAgaWYgKHJlc3VsdC5zdWNjZXNzKSB7XG4gICAgcmV0dXJuIHJlc3VsdC5kYXRhO1xuICB9XG5cbiAgdGhyb3cgbmV3IEVycm9yKFwiRmFpbGVkIHRvIGdldCBhbGwgdXNlcnMgd2l0aCBzdGF0dXNcIik7XG59O1xuXG5leHBvcnQgY29uc3QgYXBwcm92ZVVzZXIgPSBhc3luYyAodXNlcklkKSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgbWFrZUF1dGhlbnRpY2F0ZWRSZXF1ZXN0KFxuICAgICAgYCR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQkFTRV9VUkx9YXBpL2FkbWluL3VzZXJzLyR7dXNlcklkfS9hcHByb3ZlYCxcbiAgICAgIHtcbiAgICAgICAgbWV0aG9kOiBcIlBBVENIXCIsXG4gICAgICAgIGRhdGE6IHt9LFxuICAgICAgfVxuICAgICk7XG5cbiAgICAvLyBJZiBzdWNjZXNzZnVsLCByZXR1cm4gdGhlIHJlc3VsdFxuICAgIHJldHVybiByZXN1bHQ7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5sb2coXCJSYXcgZXJyb3IgaW4gYXBwcm92ZVVzZXI6XCIsIGVycm9yKTtcbiAgICBjb25zb2xlLmxvZyhcIkF4aW9zIHJlc3BvbnNlOlwiLCBlcnJvci5yZXNwb25zZSk7XG4gICAgY29uc29sZS5sb2coXCJBeGlvcyByZXNwb25zZSBkYXRhOlwiLCBlcnJvci5yZXNwb25zZT8uZGF0YSk7XG5cbiAgICAvLyBBeGlvcyBlcnJvcnMgaGF2ZSB0aGUgcmVzcG9uc2UgaW4gZXJyb3IucmVzcG9uc2VcbiAgICAvLyBXZSBuZWVkIHRvIHRocm93IGFuIGVycm9yIHRoYXQgcHJlc2VydmVzIHRoaXMgc3RydWN0dXJlXG4gICAgY29uc3QgZW5oYW5jZWRFcnJvciA9IG5ldyBFcnJvcihcbiAgICAgIGVycm9yLnJlc3BvbnNlPy5kYXRhPy5tZXNzYWdlIHx8IGVycm9yLm1lc3NhZ2UgfHwgXCJGYWlsZWQgdG8gYXBwcm92ZSB1c2VyXCJcbiAgICApO1xuXG4gICAgLy8gUHJlc2VydmUgdGhlIGF4aW9zIHJlc3BvbnNlIHN0cnVjdHVyZVxuICAgIGVuaGFuY2VkRXJyb3IucmVzcG9uc2UgPSBlcnJvci5yZXNwb25zZTtcblxuICAgIHRocm93IGVuaGFuY2VkRXJyb3I7XG4gIH1cbn07XG5cbi8vIFBBVENIIHJlamVjdCBzaW5nbGUgdXNlclxuZXhwb3J0IGNvbnN0IHJlamVjdFVzZXIgPSBhc3luYyAodXNlcklkKSA9PiB7XG4gIGNvbnN0IHJlc3VsdCA9IGF3YWl0IG1ha2VBdXRoZW50aWNhdGVkUmVxdWVzdChcbiAgICBgJHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19CQVNFX1VSTH1hcGkvYWRtaW4vdXNlcnMvJHt1c2VySWR9L3JlamVjdGAsXG4gICAge1xuICAgICAgbWV0aG9kOiBcIlBBVENIXCIsXG4gICAgICBkYXRhOiB7fSxcbiAgICB9XG4gICk7XG5cbiAgaWYgKHJlc3VsdC5zdWNjZXNzKSB7XG4gICAgcmV0dXJuIHJlc3VsdC5kYXRhO1xuICB9XG5cbiAgdGhyb3cgbmV3IEVycm9yKFwiRmFpbGVkIHRvIHJlamVjdCB1c2VyXCIpO1xufTtcblxuLy8gUEFUQ0ggYnVsayB1cGRhdGUgdXNlciBzdGF0dXNcbmV4cG9ydCBjb25zdCBidWxrVXBkYXRlVXNlclN0YXR1cyA9IGFzeW5jICh7IHVzZXJJZHMsIHN0YXR1cyB9KSA9PiB7XG4gIGNvbnN0IHJlc3VsdCA9IGF3YWl0IG1ha2VBdXRoZW50aWNhdGVkUmVxdWVzdChcbiAgICBgJHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19CQVNFX1VSTH1hcGkvYWRtaW4vdXNlcnMvYnVsay11cGRhdGUtc3RhdHVzYCxcbiAgICB7XG4gICAgICBtZXRob2Q6IFwiUEFUQ0hcIixcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgdXNlcklkcyxcbiAgICAgICAgc3RhdHVzLFxuICAgICAgfSxcbiAgICB9XG4gICk7XG5cbiAgaWYgKHJlc3VsdC5zdWNjZXNzKSB7XG4gICAgcmV0dXJuIHJlc3VsdC5kYXRhO1xuICB9XG5cbiAgdGhyb3cgbmV3IEVycm9yKFwiRmFpbGVkIHRvIGJ1bGsgdXBkYXRlIHVzZXIgc3RhdHVzXCIpO1xufTtcblxuZXhwb3J0IGNvbnN0IGRlbGV0ZVVzZXIgPSBhc3luYyAodXNlcklkKSA9PiB7XG4gIGNvbnN0IHJlc3VsdCA9IGF3YWl0IG1ha2VBdXRoZW50aWNhdGVkUmVxdWVzdChcbiAgICBgJHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19CQVNFX1VSTH1hcGkvYWRtaW4vdXNlcnMvZGVsZXRlLyR7dXNlcklkfWAsXG4gICAge1xuICAgICAgbWV0aG9kOiBcIkRFTEVURVwiLFxuICAgIH1cbiAgKTtcblxuICBpZiAocmVzdWx0LnN1Y2Nlc3MpIHtcbiAgICByZXR1cm4gcmVzdWx0LmRhdGE7XG4gIH1cblxuICB0aHJvdyBuZXcgRXJyb3IoXCJGYWlsZWQgdG8gZGVsZXRlIHVzZXJcIik7XG59O1xuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI4UUErbUJhIn0=
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/data:fa6f72 [app-client] (ecmascript) <text/javascript>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
/* __next_internal_action_entry_do_not_use__ [{"7fadcf3ba5f81b4fdda32309ce34eb5db0e14d0707":"bulkUpdateUserStatus"},"action.js",""] */ __turbopack_context__.s({
    "bulkUpdateUserStatus": (()=>bulkUpdateUserStatus)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
"use turbopack no side effects";
;
var bulkUpdateUserStatus = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("7fadcf3ba5f81b4fdda32309ce34eb5db0e14d0707", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "bulkUpdateUserStatus"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYWN0aW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHNlcnZlclwiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IHsgY29va2llcyB9IGZyb20gXCJuZXh0L2hlYWRlcnNcIjtcbmltcG9ydCB7IHJlZGlyZWN0IH0gZnJvbSBcIm5leHQvbmF2aWdhdGlvblwiO1xuXG4vLyBBdXRoZW50aWNhdGlvblxuZXhwb3J0IGNvbnN0IGxvZ2luID0gYXN5bmMgKHsgZW1haWwsIHBhc3N3b3JkIH0pID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBvc3QoXG4gICAgICBgJHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19CQVNFX1VSTH1hcGkvYXV0aC9sb2dpbj9hZG1pbj10cnVlYCxcbiAgICAgIHsgZW1haWwsIHBhc3N3b3JkIH0sXG4gICAgICB7XG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgfSxcbiAgICAgIH1cbiAgICApO1xuXG4gICAgY29uc3QgeyBkYXRhIH0gPSByZXNwb25zZTtcblxuICAgIC8vIEV4dHJhY3QgYW5kIG1hbnVhbGx5IHNldCBjb29raWVzIGZyb20gcmVzcG9uc2VcbiAgICBjb25zdCBzZXRDb29raWVIZWFkZXIgPSByZXNwb25zZS5oZWFkZXJzW1wic2V0LWNvb2tpZVwiXTtcblxuICAgIGlmIChzZXRDb29raWVIZWFkZXIgJiYgQXJyYXkuaXNBcnJheShzZXRDb29raWVIZWFkZXIpKSB7XG4gICAgICBjb25zdCBjb29raWVTdG9yZSA9IGF3YWl0IGNvb2tpZXMoKTtcblxuICAgICAgc2V0Q29va2llSGVhZGVyLmZvckVhY2goKGNvb2tpZSkgPT4ge1xuICAgICAgICAvLyBQYXJzZSBjb29raWUgc3RyaW5nXG4gICAgICAgIGNvbnN0IHBhcnRzID0gY29va2llLnNwbGl0KFwiO1wiKVswXTtcbiAgICAgICAgY29uc3QgW25hbWUsIC4uLnZhbHVlUGFydHNdID0gcGFydHMuc3BsaXQoXCI9XCIpO1xuICAgICAgICBjb25zdCB2YWx1ZSA9IHZhbHVlUGFydHMuam9pbihcIj1cIik7XG5cbiAgICAgICAgaWYgKG5hbWUgJiYgdmFsdWUpIHtcbiAgICAgICAgICAvLyBTZXQgY29va2llIHdpdGggaHR0cE9ubHkgYW5kIHNlY3VyZSBmbGFnc1xuICAgICAgICAgIGNvb2tpZVN0b3JlLnNldChuYW1lLnRyaW0oKSwgdmFsdWUudHJpbSgpLCB7XG4gICAgICAgICAgICBodHRwT25seTogdHJ1ZSxcbiAgICAgICAgICAgIHNlY3VyZTogcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiLFxuICAgICAgICAgICAgc2FtZVNpdGU6IFwibGF4XCIsXG4gICAgICAgICAgICBwYXRoOiBcIi9cIixcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gT24gc3VjY2Vzc2Z1bCBsb2dpbiwgcmVkaXJlY3QgdG8gYWRtaW4gZGFzaGJvYXJkXG4gICAgcmVkaXJlY3QoXCIvZGFzaGJvYXJkL292ZXJ2aWV3XCIpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIC8vIElmIGl0J3MgYSByZWRpcmVjdCwgcmUtdGhyb3cgaXRcbiAgICBpZiAoXG4gICAgICBlcnJvci5tZXNzYWdlID09PSBcIk5FWFRfUkVESVJFQ1RcIiB8fFxuICAgICAgZXJyb3IuZGlnZXN0Py5zdGFydHNXaXRoKFwiTkVYVF9SRURJUkVDVFwiKVxuICAgICkge1xuICAgICAgdGhyb3cgZXJyb3I7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgbWVzc2FnZTogZXJyb3IucmVzcG9uc2U/LmRhdGE/Lm1lc3NhZ2UgfHwgXCJMb2dpbiBmYWlsZWRcIixcbiAgICB9O1xuICB9XG59O1xuXG5leHBvcnQgY29uc3QgbG9nb3V0ID0gYXN5bmMgKCkgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IGNvb2tpZVN0b3JlID0gYXdhaXQgY29va2llcygpO1xuICAgIGNvb2tpZVN0b3JlLmRlbGV0ZShcInRva2VuXCIpO1xuICAgIGNvb2tpZVN0b3JlLmRlbGV0ZShcInJlZnJlc2hUb2tlblwiKTtcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UgfTtcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IHJlZnJlc2hUb2tlblNlcnZlciA9IGFzeW5jICgpID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGF4aW9zLnBvc3QoXG4gICAgICBgJHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19CQVNFX1VSTH1hcGkvYXV0aC9yZWZyZXNoLXRva2VuYCxcbiAgICAgIHt9LFxuICAgICAge1xuICAgICAgICB3aXRoQ3JlZGVudGlhbHM6IHRydWUsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICBDb29raWU6IChhd2FpdCBjb29raWVzKCkpLnRvU3RyaW5nKCksIC8vIEZvcndhcmQgYWxsIGNvb2tpZXNcbiAgICAgICAgfSxcbiAgICAgIH1cbiAgICApO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIHN1Y2Nlc3M6IHRydWUsXG4gICAgICBkYXRhOiBkYXRhLmRhdGEsXG4gICAgICBtZXNzYWdlOiBcIlRva2VuIHJlZnJlc2hlZCBzdWNjZXNzZnVsbHlcIixcbiAgICB9O1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJTZXJ2ZXIgdG9rZW4gcmVmcmVzaCBlcnJvcjpcIiwgZXJyb3IpO1xuICAgIHJldHVybiB7XG4gICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgIG1lc3NhZ2U6IGVycm9yLnJlc3BvbnNlPy5kYXRhPy5tZXNzYWdlIHx8IFwiVG9rZW4gcmVmcmVzaCBmYWlsZWRcIixcbiAgICB9O1xuICB9XG59O1xuXG5jb25zdCBtYWtlQXV0aGVudGljYXRlZFJlcXVlc3QgPSBhc3luYyAodXJsLCBvcHRpb25zID0ge30pID0+IHtcbiAgY29uc3QgY29va2llU3RvcmUgPSBhd2FpdCBjb29raWVzKCk7XG5cbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zKHtcbiAgICAgIHVybCxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgQ29va2llOiBjb29raWVTdG9yZS50b1N0cmluZygpLFxuICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgLi4ub3B0aW9ucy5oZWFkZXJzLFxuICAgICAgfSxcbiAgICAgIHRpbWVvdXQ6IDMwMDAwLFxuICAgICAgd2l0aENyZWRlbnRpYWxzOiB0cnVlLFxuICAgICAgLi4ub3B0aW9ucyxcbiAgICB9KTtcblxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IHJlc3BvbnNlLmRhdGEgfTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAvLyBJZiA0MDEgYW5kIHdlIGhhdmVuJ3QgcmV0cmllZCB5ZXQsIHRyeSB0byByZWZyZXNoXG4gICAgaWYgKGVycm9yLnJlc3BvbnNlPy5zdGF0dXMgPT09IDQwMSAmJiAhb3B0aW9ucy5za2lwUmVmcmVzaCkge1xuICAgICAgY29uc29sZS5sb2coXCJUb2tlbiBleHBpcmVkLCBhdHRlbXB0aW5nIHJlZnJlc2guLi5cIik7XG5cbiAgICAgIGNvbnN0IHJlZnJlc2hSZXN1bHQgPSBhd2FpdCByZWZyZXNoVG9rZW5TZXJ2ZXIoKTtcblxuICAgICAgaWYgKHJlZnJlc2hSZXN1bHQuc3VjY2Vzcykge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGNvbnN0IHJldHJ5UmVzcG9uc2UgPSBhd2FpdCBheGlvcyh7XG4gICAgICAgICAgICB1cmwsXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgIENvb2tpZTogKGF3YWl0IGNvb2tpZXMoKSkudG9TdHJpbmcoKSxcbiAgICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgICAgICAgIC4uLm9wdGlvbnMuaGVhZGVycyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0aW1lb3V0OiAzMDAwMCxcbiAgICAgICAgICAgIHdpdGhDcmVkZW50aWFsczogdHJ1ZSxcbiAgICAgICAgICAgIC4uLm9wdGlvbnMsXG4gICAgICAgICAgICBza2lwUmVmcmVzaDogdHJ1ZSxcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IHJldHJ5UmVzcG9uc2UuZGF0YSB9O1xuICAgICAgICB9IGNhdGNoIChyZXRyeUVycm9yKSB7XG4gICAgICAgICAgLy8gVGhyb3cgYXhpb3MgZXJyb3IgYXMtaXMgc28gcmVzcG9uc2UgZGF0YSBpcyBwcmVzZXJ2ZWRcbiAgICAgICAgICB0aHJvdyByZXRyeUVycm9yO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gVGhyb3cgYXhpb3MgZXJyb3IgYXMtaXMgc28gcmVzcG9uc2UgZGF0YSBpcyBwcmVzZXJ2ZWRcbiAgICB0aHJvdyBlcnJvcjtcbiAgfVxufTtcbi8vIEdldCByZWZlcnJhbCBjb2RlcyB3aXRoIGZpbHRlcnNcbmV4cG9ydCBjb25zdCBnZXRSZWZlcnJhbENvZGVzID0gYXN5bmMgKHtcbiAgcGFnZSA9IDEsXG4gIGxpbWl0ID0gMTAsXG4gIGlzQWN0aXZlLFxuICBhc3NpZ25lZFN0YXR1cyxcbiAgc2VhcmNoLFxufSA9IHt9KSA9PiB7XG4gIGNvbnN0IHF1ZXJ5UGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcyh7XG4gICAgcGFnZTogcGFnZS50b1N0cmluZygpLFxuICAgIGxpbWl0OiBsaW1pdC50b1N0cmluZygpLFxuICAgIC4uLihpc0FjdGl2ZSAhPT0gdW5kZWZpbmVkICYmIHsgaXNBY3RpdmU6IGlzQWN0aXZlLnRvU3RyaW5nKCkgfSksXG4gICAgLi4uKGFzc2lnbmVkU3RhdHVzICYmIHsgYXNzaWduZWRTdGF0dXMgfSksXG4gICAgLi4uKHNlYXJjaCAmJiB7IHNlYXJjaCB9KSxcbiAgfSk7XG5cbiAgY29uc3QgcmVzdWx0ID0gYXdhaXQgbWFrZUF1dGhlbnRpY2F0ZWRSZXF1ZXN0KFxuICAgIGAke1xuICAgICAgcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQkFTRV9VUkxcbiAgICB9YXBpL2FkbWluL3JlZmVycmFsLWNvZGVzPyR7cXVlcnlQYXJhbXMudG9TdHJpbmcoKX1gLFxuICAgIHtcbiAgICAgIG1ldGhvZDogXCJHRVRcIixcbiAgICB9XG4gICk7XG5cbiAgaWYgKHJlc3VsdC5zdWNjZXNzKSB7XG4gICAgcmV0dXJuIHJlc3VsdC5kYXRhO1xuICB9XG5cbiAgdGhyb3cgbmV3IEVycm9yKFwiRmFpbGVkIHRvIGdldCByZWZlcnJhbCBjb2Rlc1wiKTtcbn07XG5cbi8vIEdldCB1c2VycyBmb3IgZHJvcGRvd24gc2VsZWN0aW9uXG5leHBvcnQgY29uc3QgZ2V0VXNlcnMgPSBhc3luYyAoe1xuICBwYWdlID0gMSxcbiAgbGltaXQgPSAxMDAsIC8vIEdldCBtb3JlIHVzZXJzIGZvciBkcm9wZG93blxuICB1c2VyVHlwZSxcbiAgc2VhcmNoLFxufSA9IHt9KSA9PiB7XG4gIGNvbnN0IHF1ZXJ5UGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcyh7XG4gICAgcGFnZTogcGFnZS50b1N0cmluZygpLFxuICAgIGxpbWl0OiBsaW1pdC50b1N0cmluZygpLFxuICAgIC4uLih1c2VyVHlwZSAmJiB7IHVzZXJUeXBlIH0pLFxuICAgIC4uLihzZWFyY2ggJiYgeyBzZWFyY2ggfSksXG4gIH0pO1xuXG4gIGNvbnN0IHJlc3VsdCA9IGF3YWl0IG1ha2VBdXRoZW50aWNhdGVkUmVxdWVzdChcbiAgICBgJHtcbiAgICAgIHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0JBU0VfVVJMXG4gICAgfWFwaS9hZG1pbi91c2Vycz8ke3F1ZXJ5UGFyYW1zLnRvU3RyaW5nKCl9YCxcbiAgICB7XG4gICAgICBtZXRob2Q6IFwiR0VUXCIsXG4gICAgfVxuICApO1xuXG4gIGlmIChyZXN1bHQuc3VjY2Vzcykge1xuICAgIHJldHVybiByZXN1bHQuZGF0YTtcbiAgfVxuXG4gIHRocm93IG5ldyBFcnJvcihcIkZhaWxlZCB0byBnZXQgdXNlcnNcIik7XG59O1xuXG4vLyBDcmVhdGUgbmV3IHJlZmVycmFsIGNvZGVcbmV4cG9ydCBjb25zdCBjcmVhdGVSZWZlcnJhbENvZGUgPSBhc3luYyAoe1xuICBjb2RlLFxuICBkZXNjcmlwdGlvbixcbiAgZXhwaXJlc0F0LFxuICBhc3NpZ25lZFRvVXNlcklkLFxufSkgPT4ge1xuICBjb25zdCByZXN1bHQgPSBhd2FpdCBtYWtlQXV0aGVudGljYXRlZFJlcXVlc3QoXG4gICAgYCR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQkFTRV9VUkx9YXBpL2FkbWluL3JlZmVycmFsLWNvZGVzYCxcbiAgICB7XG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgZGF0YToge1xuICAgICAgICBjb2RlLFxuICAgICAgICBkZXNjcmlwdGlvbixcbiAgICAgICAgZXhwaXJlc0F0LFxuICAgICAgICBhc3NpZ25lZFRvVXNlcklkOlxuICAgICAgICAgIGFzc2lnbmVkVG9Vc2VySWQgPT09IFwiYWRtaW5cIiA/IG51bGwgOiBhc3NpZ25lZFRvVXNlcklkLFxuICAgICAgfSxcbiAgICB9XG4gICk7XG5cbiAgaWYgKHJlc3VsdC5zdWNjZXNzKSB7XG4gICAgcmV0dXJuIHJlc3VsdC5kYXRhO1xuICB9XG5cbiAgdGhyb3cgbmV3IEVycm9yKFwiRmFpbGVkIHRvIGNyZWF0ZSByZWZlcnJhbCBjb2RlXCIpO1xufTtcblxuLy8gVXBkYXRlIHJlZmVycmFsIGNvZGVcbmV4cG9ydCBjb25zdCB1cGRhdGVSZWZlcnJhbENvZGUgPSBhc3luYyAoe1xuICBpZCxcbiAgY29kZSxcbiAgZGVzY3JpcHRpb24sXG4gIGV4cGlyZXNBdCxcbiAgaXNBY3RpdmUsXG59KSA9PiB7XG4gIGNvbnN0IHJlc3VsdCA9IGF3YWl0IG1ha2VBdXRoZW50aWNhdGVkUmVxdWVzdChcbiAgICBgJHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19CQVNFX1VSTH1hcGkvYWRtaW4vcmVmZXJyYWwtY29kZXMvJHtpZH1gLFxuICAgIHtcbiAgICAgIG1ldGhvZDogXCJQVVRcIixcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgY29kZSxcbiAgICAgICAgZGVzY3JpcHRpb24sXG4gICAgICAgIGV4cGlyZXNBdCxcbiAgICAgICAgaXNBY3RpdmUsXG4gICAgICB9LFxuICAgIH1cbiAgKTtcblxuICBpZiAocmVzdWx0LnN1Y2Nlc3MpIHtcbiAgICByZXR1cm4gcmVzdWx0LmRhdGE7XG4gIH1cblxuICB0aHJvdyBuZXcgRXJyb3IoXCJGYWlsZWQgdG8gdXBkYXRlIHJlZmVycmFsIGNvZGVcIik7XG59O1xuXG4vLyBEZWxldGUgcmVmZXJyYWwgY29kZVxuZXhwb3J0IGNvbnN0IGRlbGV0ZVJlZmVycmFsQ29kZSA9IGFzeW5jIChpZCkgPT4ge1xuICBjb25zdCByZXN1bHQgPSBhd2FpdCBtYWtlQXV0aGVudGljYXRlZFJlcXVlc3QoXG4gICAgYCR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQkFTRV9VUkx9YXBpL2FkbWluL3JlZmVycmFsLWNvZGVzLyR7aWR9YCxcbiAgICB7XG4gICAgICBtZXRob2Q6IFwiREVMRVRFXCIsXG4gICAgfVxuICApO1xuXG4gIGlmIChyZXN1bHQuc3VjY2Vzcykge1xuICAgIHJldHVybiByZXN1bHQuZGF0YTtcbiAgfVxuXG4gIHRocm93IG5ldyBFcnJvcihcIkZhaWxlZCB0byBkZWxldGUgcmVmZXJyYWwgY29kZVwiKTtcbn07XG5cbi8vIEFzc2lnbiByZWZlcnJhbCBjb2RlIHRvIHVzZXJcbmV4cG9ydCBjb25zdCBhc3NpZ25SZWZlcnJhbENvZGUgPSBhc3luYyAoeyBpZCwgdXNlcklkIH0pID0+IHtcbiAgdHJ5IHtcbiAgICBpZiAoIWlkIHx8ICF1c2VySWQpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgICBtZXNzYWdlOiBcIlJlZmVycmFsIGNvZGUgSUQgYW5kIHVzZXIgSUQgYXJlIHJlcXVpcmVkXCIsXG4gICAgICB9O1xuICAgIH1cblxuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IG1ha2VBdXRoZW50aWNhdGVkUmVxdWVzdChcbiAgICAgIGAke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0JBU0VfVVJMfWFwaS9hZG1pbi9yZWZlcnJhbC1jb2Rlcy8ke2lkfS9hc3NpZ25gLFxuICAgICAge1xuICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICBkYXRhOiB7IHVzZXJJZDogdXNlcklkLnRvU3RyaW5nKCkgfSwgLy8gRW5zdXJlIHVzZXJJZCBpcyBzdHJpbmdcbiAgICAgICAgdGltZW91dDogMTAwMDAsXG4gICAgICB9XG4gICAgKTtcblxuICAgIGlmIChyZXN1bHQuc3VjY2Vzcykge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgc3VjY2VzczogdHJ1ZSxcbiAgICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXG4gICAgICB9O1xuICAgIH1cblxuICAgIHRocm93IG5ldyBFcnJvcihcIkZhaWxlZCB0byBhc3NpZ24gcmVmZXJyYWwgY29kZVwiKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgaW4gYXNzaWduUmVmZXJyYWxDb2RlIEFQSTpcIiwgZXJyb3IpO1xuXG4gICAgbGV0IG1lc3NhZ2UgPSBcIkFuIHVuZXhwZWN0ZWQgZXJyb3Igb2NjdXJyZWRcIjtcblxuICAgIGlmIChlcnJvci5yZXNwb25zZSkge1xuICAgICAgbWVzc2FnZSA9XG4gICAgICAgIGVycm9yLnJlc3BvbnNlLmRhdGE/Lm1lc3NhZ2UgfHxcbiAgICAgICAgYFJlcXVlc3QgZmFpbGVkIHdpdGggc3RhdHVzICR7ZXJyb3IucmVzcG9uc2Uuc3RhdHVzfWA7XG4gICAgfSBlbHNlIGlmIChlcnJvci5yZXF1ZXN0KSB7XG4gICAgICBtZXNzYWdlID0gXCJOZXR3b3JrIGVycm9yLiBQbGVhc2UgY2hlY2sgeW91ciBjb25uZWN0aW9uIGFuZCB0cnkgYWdhaW4uXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIG1lc3NhZ2UgPSBlcnJvci5tZXNzYWdlIHx8IFwiQW4gdW5leHBlY3RlZCBlcnJvciBvY2N1cnJlZFwiO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgIG1lc3NhZ2UsXG4gICAgfTtcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IHVuYXNzaWduUmVmZXJyYWxDb2RlID0gYXN5bmMgKGlkKSA9PiB7XG4gIHRyeSB7XG4gICAgaWYgKCFpZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiUmVmZXJyYWwgY29kZSBJRCBpcyByZXF1aXJlZFwiKTtcbiAgICB9XG5cbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBtYWtlQXV0aGVudGljYXRlZFJlcXVlc3QoXG4gICAgICBgJHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19CQVNFX1VSTH1hcGkvYWRtaW4vcmVmZXJyYWwtY29kZXMvJHtpZH0vdW5hc3NpZ25gLFxuICAgICAge1xuICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICBkYXRhOiB7fSxcbiAgICAgICAgdGltZW91dDogMTAwMDAsXG4gICAgICB9XG4gICAgKTtcblxuICAgIGlmIChyZXN1bHQuc3VjY2Vzcykge1xuICAgICAgcmV0dXJuIHJlc3VsdC5kYXRhO1xuICAgIH1cblxuICAgIHRocm93IG5ldyBFcnJvcihcIkZhaWxlZCB0byB1bmFzc2lnbiByZWZlcnJhbCBjb2RlXCIpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBpbiB1bmFzc2lnblJlZmVycmFsQ29kZSBBUEk6XCIsIGVycm9yKTtcblxuICAgIGlmIChlcnJvci5yZXNwb25zZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBlcnJvci5yZXNwb25zZS5kYXRhPy5tZXNzYWdlIHx8IFwiRmFpbGVkIHRvIHVuYXNzaWduIHJlZmVycmFsIGNvZGVcIlxuICAgICAgKTtcbiAgICB9IGVsc2UgaWYgKGVycm9yLnJlcXVlc3QpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgXCJOZXR3b3JrIGVycm9yLiBQbGVhc2UgY2hlY2sgeW91ciBjb25uZWN0aW9uIGFuZCB0cnkgYWdhaW4uXCJcbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihlcnJvci5tZXNzYWdlIHx8IFwiQW4gdW5leHBlY3RlZCBlcnJvciBvY2N1cnJlZFwiKTtcbiAgICB9XG4gIH1cbn07XG5cbi8vIEdldCByZWZlcnJhbCBjb2RlIGJ5IElEXG5leHBvcnQgY29uc3QgZ2V0UmVmZXJyYWxDb2RlQnlJZCA9IGFzeW5jIChpZCkgPT4ge1xuICBjb25zdCByZXN1bHQgPSBhd2FpdCBtYWtlQXV0aGVudGljYXRlZFJlcXVlc3QoXG4gICAgYCR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQkFTRV9VUkx9YXBpL2FkbWluL3JlZmVycmFsLWNvZGVzLyR7aWR9YCxcbiAgICB7XG4gICAgICBtZXRob2Q6IFwiR0VUXCIsXG4gICAgfVxuICApO1xuXG4gIGlmIChyZXN1bHQuc3VjY2Vzcykge1xuICAgIHJldHVybiByZXN1bHQuZGF0YTtcbiAgfVxuXG4gIHRocm93IG5ldyBFcnJvcihcIkZhaWxlZCB0byBnZXQgcmVmZXJyYWwgY29kZVwiKTtcbn07XG5cbi8vIEdldCByZWZlcnJhbCBhbmFseXRpY3NcbmV4cG9ydCBjb25zdCBnZXRSZWZlcnJhbEFuYWx5dGljcyA9IGFzeW5jICh7XG4gIHN0YXJ0RGF0ZSxcbiAgZW5kRGF0ZSxcbiAgYWRtaW5JZCxcbn0gPSB7fSkgPT4ge1xuICBjb25zdCBxdWVyeVBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoe1xuICAgIC4uLihzdGFydERhdGUgJiYgeyBzdGFydERhdGUgfSksXG4gICAgLi4uKGVuZERhdGUgJiYgeyBlbmREYXRlIH0pLFxuICAgIC4uLihhZG1pbklkICYmIHsgYWRtaW5JZCB9KSxcbiAgfSk7XG5cbiAgY29uc3QgcmVzdWx0ID0gYXdhaXQgbWFrZUF1dGhlbnRpY2F0ZWRSZXF1ZXN0KFxuICAgIGAke1xuICAgICAgcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQkFTRV9VUkxcbiAgICB9YXBpL2FkbWluL3JlZmVycmFsLWFuYWx5dGljcz8ke3F1ZXJ5UGFyYW1zLnRvU3RyaW5nKCl9YCxcbiAgICB7XG4gICAgICBtZXRob2Q6IFwiR0VUXCIsXG4gICAgfVxuICApO1xuXG4gIGlmIChyZXN1bHQuc3VjY2Vzcykge1xuICAgIHJldHVybiByZXN1bHQuZGF0YTtcbiAgfVxuXG4gIHRocm93IG5ldyBFcnJvcihcIkZhaWxlZCB0byBnZXQgcmVmZXJyYWwgYW5hbHl0aWNzXCIpO1xufTtcblxuLy8gR2V0IHJlZmVycmFsIHVzYWdlIGRhdGFcbmV4cG9ydCBjb25zdCBnZXRSZWZlcnJhbFVzYWdlID0gYXN5bmMgKHtcbiAgcGFnZSA9IDEsXG4gIGxpbWl0ID0gMTAsXG4gIHJlZmVycmFsQ29kZSxcbiAgdXNlcklkLFxufSA9IHt9KSA9PiB7XG4gIGNvbnN0IHF1ZXJ5UGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcyh7XG4gICAgcGFnZTogcGFnZS50b1N0cmluZygpLFxuICAgIGxpbWl0OiBsaW1pdC50b1N0cmluZygpLFxuICAgIC4uLihyZWZlcnJhbENvZGUgJiYgeyByZWZlcnJhbENvZGUgfSksXG4gICAgLi4uKHVzZXJJZCAmJiB7IHVzZXJJZCB9KSxcbiAgfSk7XG5cbiAgY29uc3QgcmVzdWx0ID0gYXdhaXQgbWFrZUF1dGhlbnRpY2F0ZWRSZXF1ZXN0KFxuICAgIGAke1xuICAgICAgcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQkFTRV9VUkxcbiAgICB9YXBpL2FkbWluL3JlZmVycmFsLXVzYWdlPyR7cXVlcnlQYXJhbXMudG9TdHJpbmcoKX1gLFxuICAgIHtcbiAgICAgIG1ldGhvZDogXCJHRVRcIixcbiAgICB9XG4gICk7XG5cbiAgaWYgKHJlc3VsdC5zdWNjZXNzKSB7XG4gICAgcmV0dXJuIHJlc3VsdC5kYXRhO1xuICB9XG5cbiAgdGhyb3cgbmV3IEVycm9yKFwiRmFpbGVkIHRvIGdldCByZWZlcnJhbCB1c2FnZVwiKTtcbn07XG5cbi8vIEdldCB1c2VyIGJ5IElEXG5leHBvcnQgY29uc3QgZ2V0VXNlckJ5SWQgPSBhc3luYyAoaWQpID0+IHtcbiAgY29uc3QgcmVzdWx0ID0gYXdhaXQgbWFrZUF1dGhlbnRpY2F0ZWRSZXF1ZXN0KFxuICAgIGAke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0JBU0VfVVJMfWFwaS9hZG1pbi91c2Vycy8ke2lkfWAsXG4gICAge1xuICAgICAgbWV0aG9kOiBcIkdFVFwiLFxuICAgIH1cbiAgKTtcblxuICBpZiAocmVzdWx0LnN1Y2Nlc3MpIHtcbiAgICByZXR1cm4gcmVzdWx0LmRhdGE7XG4gIH1cblxuICB0aHJvdyBuZXcgRXJyb3IoXCJGYWlsZWQgdG8gZ2V0IHVzZXJcIik7XG59O1xuXG4vLyBVcGRhdGUgdXNlciBwb2ludHNcbmV4cG9ydCBjb25zdCB1cGRhdGVVc2VyUG9pbnRzID0gYXN5bmMgKHsgaWQsIGFtb3VudCwgdHlwZSwgZGVzY3JpcHRpb24gfSkgPT4ge1xuICBjb25zdCByZXN1bHQgPSBhd2FpdCBtYWtlQXV0aGVudGljYXRlZFJlcXVlc3QoXG4gICAgYCR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQkFTRV9VUkx9YXBpL2FkbWluL3VzZXJzLyR7aWR9L3BvaW50c2AsXG4gICAge1xuICAgICAgbWV0aG9kOiBcIlBVVFwiLFxuICAgICAgZGF0YToge1xuICAgICAgICBhbW91bnQsXG4gICAgICAgIHR5cGUsXG4gICAgICAgIGRlc2NyaXB0aW9uLFxuICAgICAgfSxcbiAgICB9XG4gICk7XG5cbiAgaWYgKHJlc3VsdC5zdWNjZXNzKSB7XG4gICAgcmV0dXJuIHJlc3VsdC5kYXRhO1xuICB9XG5cbiAgdGhyb3cgbmV3IEVycm9yKFwiRmFpbGVkIHRvIHVwZGF0ZSB1c2VyIHBvaW50c1wiKTtcbn07XG5cbi8vIEJ1bGsgY3JlYXRlIHJlZmVycmFsIGNvZGVzXG5leHBvcnQgY29uc3QgYnVsa0NyZWF0ZVJlZmVycmFsQ29kZXMgPSBhc3luYyAoY29kZXMpID0+IHtcbiAgY29uc3QgcmVzdWx0ID0gYXdhaXQgbWFrZUF1dGhlbnRpY2F0ZWRSZXF1ZXN0KFxuICAgIGAke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0JBU0VfVVJMfWFwaS9hZG1pbi9yZWZlcnJhbC1jb2Rlcy9idWxrLWNyZWF0ZWAsXG4gICAge1xuICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgIGRhdGE6IHsgY29kZXMgfSxcbiAgICB9XG4gICk7XG5cbiAgaWYgKHJlc3VsdC5zdWNjZXNzKSB7XG4gICAgcmV0dXJuIHJlc3VsdC5kYXRhO1xuICB9XG5cbiAgdGhyb3cgbmV3IEVycm9yKFwiRmFpbGVkIHRvIGJ1bGsgY3JlYXRlIHJlZmVycmFsIGNvZGVzXCIpO1xufTtcblxuLy8gQnVsayBhc3NpZ24gcmVmZXJyYWwgY29kZXNcbmV4cG9ydCBjb25zdCBidWxrQXNzaWduUmVmZXJyYWxDb2RlcyA9IGFzeW5jIChhc3NpZ25tZW50cykgPT4ge1xuICBjb25zdCByZXN1bHQgPSBhd2FpdCBtYWtlQXV0aGVudGljYXRlZFJlcXVlc3QoXG4gICAgYCR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQkFTRV9VUkx9YXBpL2FkbWluL3JlZmVycmFsLWNvZGVzL2J1bGstYXNzaWduYCxcbiAgICB7XG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgZGF0YTogeyBhc3NpZ25tZW50cyB9LFxuICAgIH1cbiAgKTtcblxuICBpZiAocmVzdWx0LnN1Y2Nlc3MpIHtcbiAgICByZXR1cm4gcmVzdWx0LmRhdGE7XG4gIH1cblxuICB0aHJvdyBuZXcgRXJyb3IoXCJGYWlsZWQgdG8gYnVsayBhc3NpZ24gcmVmZXJyYWwgY29kZXNcIik7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0UGVuZGluZ1VzZXJzID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCByZXN1bHQgPSBhd2FpdCBtYWtlQXV0aGVudGljYXRlZFJlcXVlc3QoXG4gICAgYCR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQkFTRV9VUkx9YXBpL2FkbWluL3BlbmRpbmcvdXNlcnNgLFxuICAgIHtcbiAgICAgIG1ldGhvZDogXCJHRVRcIixcbiAgICB9XG4gICk7XG5cbiAgaWYgKHJlc3VsdC5zdWNjZXNzKSB7XG4gICAgcmV0dXJuIHJlc3VsdC5kYXRhO1xuICB9XG5cbiAgdGhyb3cgbmV3IEVycm9yKFwiRmFpbGVkIHRvIGdldCBwZW5kaW5nIHVzZXJzXCIpO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldEFwcHJvdmVkVXNlcnMgPSBhc3luYyAoe1xuICBwYWdlID0gMSxcbiAgbGltaXQgPSAxMCxcbiAgc2VhcmNoID0gXCJcIixcbn0gPSB7fSkgPT4ge1xuICBjb25zdCBwYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHtcbiAgICBwYWdlOiBwYWdlLnRvU3RyaW5nKCksXG4gICAgbGltaXQ6IGxpbWl0LnRvU3RyaW5nKCksXG4gICAgLi4uKHNlYXJjaCAmJiB7IHNlYXJjaCB9KSxcbiAgfSk7XG5cbiAgY29uc3QgcmVzdWx0ID0gYXdhaXQgbWFrZUF1dGhlbnRpY2F0ZWRSZXF1ZXN0KFxuICAgIGAke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0JBU0VfVVJMfWFwaS9hZG1pbi9hcHByb3ZlZC91c2Vycz8ke3BhcmFtc31gLFxuICAgIHtcbiAgICAgIG1ldGhvZDogXCJHRVRcIixcbiAgICB9XG4gICk7XG5cbiAgaWYgKHJlc3VsdC5zdWNjZXNzKSB7XG4gICAgcmV0dXJuIHJlc3VsdC5kYXRhO1xuICB9XG5cbiAgdGhyb3cgbmV3IEVycm9yKFwiRmFpbGVkIHRvIGdldCBhcHByb3ZlZCB1c2Vyc1wiKTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRVc2VyUmVmZXJyYWxVc2FnZSA9IGFzeW5jICh7XG4gIHVzZXJJZCxcbiAgcGFnZSA9IDEsXG4gIGxpbWl0ID0gNTAsXG59ID0ge30pID0+IHtcbiAgY29uc3QgcGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcyh7XG4gICAgcGFnZTogcGFnZS50b1N0cmluZygpLFxuICAgIGxpbWl0OiBsaW1pdC50b1N0cmluZygpLFxuICB9KTtcblxuICBjb25zdCByZXN1bHQgPSBhd2FpdCBtYWtlQXV0aGVudGljYXRlZFJlcXVlc3QoXG4gICAgYCR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQkFTRV9VUkx9YXBpL2FkbWluL3VzZXJzLyR7dXNlcklkfS9yZWZlcnJhbC11c2FnZT8ke3BhcmFtc31gLFxuICAgIHtcbiAgICAgIG1ldGhvZDogXCJHRVRcIixcbiAgICB9XG4gICk7XG5cbiAgaWYgKHJlc3VsdC5zdWNjZXNzKSB7XG4gICAgcmV0dXJuIHJlc3VsdC5kYXRhO1xuICB9XG5cbiAgdGhyb3cgbmV3IEVycm9yKFwiRmFpbGVkIHRvIGdldCB1c2VyIHJlZmVycmFsIHVzYWdlXCIpO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldFJlamVjdGVkVXNlcnMgPSBhc3luYyAoe1xuICBwYWdlID0gMSxcbiAgbGltaXQgPSAxMCxcbiAgc2VhcmNoID0gXCJcIixcbiAgc3RhdHVzID0gXCJhbGxcIixcbn0gPSB7fSkgPT4ge1xuICBjb25zdCBwYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHtcbiAgICBwYWdlOiBwYWdlLnRvU3RyaW5nKCksXG4gICAgbGltaXQ6IGxpbWl0LnRvU3RyaW5nKCksXG4gICAgc3RhdHVzLFxuICAgIC4uLihzZWFyY2ggJiYgeyBzZWFyY2ggfSksXG4gIH0pO1xuXG4gIGNvbnN0IHJlc3VsdCA9IGF3YWl0IG1ha2VBdXRoZW50aWNhdGVkUmVxdWVzdChcbiAgICBgJHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19CQVNFX1VSTH1hcGkvYWRtaW4vcmVqZWN0ZWQtdXNlcnM/JHtwYXJhbXN9YCxcbiAgICB7XG4gICAgICBtZXRob2Q6IFwiR0VUXCIsXG4gICAgfVxuICApO1xuXG4gIGlmIChyZXN1bHQuc3VjY2Vzcykge1xuICAgIHJldHVybiByZXN1bHQuZGF0YTtcbiAgfVxuXG4gIHRocm93IG5ldyBFcnJvcihcIkZhaWxlZCB0byBnZXQgcmVqZWN0ZWQgdXNlcnNcIik7XG59O1xuXG4vLyBHRVQgYWxsIHVzZXJzIHdpdGggc3RhdHVzXG5leHBvcnQgY29uc3QgZ2V0QWxsVXNlcnNXaXRoU3RhdHVzID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCByZXN1bHQgPSBhd2FpdCBtYWtlQXV0aGVudGljYXRlZFJlcXVlc3QoXG4gICAgYCR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQkFTRV9VUkx9YXBpL2FkbWluL3VzZXJzL3N0YXR1cy9hbGxgLFxuICAgIHtcbiAgICAgIG1ldGhvZDogXCJHRVRcIixcbiAgICB9XG4gICk7XG5cbiAgaWYgKHJlc3VsdC5zdWNjZXNzKSB7XG4gICAgcmV0dXJuIHJlc3VsdC5kYXRhO1xuICB9XG5cbiAgdGhyb3cgbmV3IEVycm9yKFwiRmFpbGVkIHRvIGdldCBhbGwgdXNlcnMgd2l0aCBzdGF0dXNcIik7XG59O1xuXG5leHBvcnQgY29uc3QgYXBwcm92ZVVzZXIgPSBhc3luYyAodXNlcklkKSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgbWFrZUF1dGhlbnRpY2F0ZWRSZXF1ZXN0KFxuICAgICAgYCR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQkFTRV9VUkx9YXBpL2FkbWluL3VzZXJzLyR7dXNlcklkfS9hcHByb3ZlYCxcbiAgICAgIHtcbiAgICAgICAgbWV0aG9kOiBcIlBBVENIXCIsXG4gICAgICAgIGRhdGE6IHt9LFxuICAgICAgfVxuICAgICk7XG5cbiAgICAvLyBJZiBzdWNjZXNzZnVsLCByZXR1cm4gdGhlIHJlc3VsdFxuICAgIHJldHVybiByZXN1bHQ7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5sb2coXCJSYXcgZXJyb3IgaW4gYXBwcm92ZVVzZXI6XCIsIGVycm9yKTtcbiAgICBjb25zb2xlLmxvZyhcIkF4aW9zIHJlc3BvbnNlOlwiLCBlcnJvci5yZXNwb25zZSk7XG4gICAgY29uc29sZS5sb2coXCJBeGlvcyByZXNwb25zZSBkYXRhOlwiLCBlcnJvci5yZXNwb25zZT8uZGF0YSk7XG5cbiAgICAvLyBBeGlvcyBlcnJvcnMgaGF2ZSB0aGUgcmVzcG9uc2UgaW4gZXJyb3IucmVzcG9uc2VcbiAgICAvLyBXZSBuZWVkIHRvIHRocm93IGFuIGVycm9yIHRoYXQgcHJlc2VydmVzIHRoaXMgc3RydWN0dXJlXG4gICAgY29uc3QgZW5oYW5jZWRFcnJvciA9IG5ldyBFcnJvcihcbiAgICAgIGVycm9yLnJlc3BvbnNlPy5kYXRhPy5tZXNzYWdlIHx8IGVycm9yLm1lc3NhZ2UgfHwgXCJGYWlsZWQgdG8gYXBwcm92ZSB1c2VyXCJcbiAgICApO1xuXG4gICAgLy8gUHJlc2VydmUgdGhlIGF4aW9zIHJlc3BvbnNlIHN0cnVjdHVyZVxuICAgIGVuaGFuY2VkRXJyb3IucmVzcG9uc2UgPSBlcnJvci5yZXNwb25zZTtcblxuICAgIHRocm93IGVuaGFuY2VkRXJyb3I7XG4gIH1cbn07XG5cbi8vIFBBVENIIHJlamVjdCBzaW5nbGUgdXNlclxuZXhwb3J0IGNvbnN0IHJlamVjdFVzZXIgPSBhc3luYyAodXNlcklkKSA9PiB7XG4gIGNvbnN0IHJlc3VsdCA9IGF3YWl0IG1ha2VBdXRoZW50aWNhdGVkUmVxdWVzdChcbiAgICBgJHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19CQVNFX1VSTH1hcGkvYWRtaW4vdXNlcnMvJHt1c2VySWR9L3JlamVjdGAsXG4gICAge1xuICAgICAgbWV0aG9kOiBcIlBBVENIXCIsXG4gICAgICBkYXRhOiB7fSxcbiAgICB9XG4gICk7XG5cbiAgaWYgKHJlc3VsdC5zdWNjZXNzKSB7XG4gICAgcmV0dXJuIHJlc3VsdC5kYXRhO1xuICB9XG5cbiAgdGhyb3cgbmV3IEVycm9yKFwiRmFpbGVkIHRvIHJlamVjdCB1c2VyXCIpO1xufTtcblxuLy8gUEFUQ0ggYnVsayB1cGRhdGUgdXNlciBzdGF0dXNcbmV4cG9ydCBjb25zdCBidWxrVXBkYXRlVXNlclN0YXR1cyA9IGFzeW5jICh7IHVzZXJJZHMsIHN0YXR1cyB9KSA9PiB7XG4gIGNvbnN0IHJlc3VsdCA9IGF3YWl0IG1ha2VBdXRoZW50aWNhdGVkUmVxdWVzdChcbiAgICBgJHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19CQVNFX1VSTH1hcGkvYWRtaW4vdXNlcnMvYnVsay11cGRhdGUtc3RhdHVzYCxcbiAgICB7XG4gICAgICBtZXRob2Q6IFwiUEFUQ0hcIixcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgdXNlcklkcyxcbiAgICAgICAgc3RhdHVzLFxuICAgICAgfSxcbiAgICB9XG4gICk7XG5cbiAgaWYgKHJlc3VsdC5zdWNjZXNzKSB7XG4gICAgcmV0dXJuIHJlc3VsdC5kYXRhO1xuICB9XG5cbiAgdGhyb3cgbmV3IEVycm9yKFwiRmFpbGVkIHRvIGJ1bGsgdXBkYXRlIHVzZXIgc3RhdHVzXCIpO1xufTtcblxuZXhwb3J0IGNvbnN0IGRlbGV0ZVVzZXIgPSBhc3luYyAodXNlcklkKSA9PiB7XG4gIGNvbnN0IHJlc3VsdCA9IGF3YWl0IG1ha2VBdXRoZW50aWNhdGVkUmVxdWVzdChcbiAgICBgJHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19CQVNFX1VSTH1hcGkvYWRtaW4vdXNlcnMvZGVsZXRlLyR7dXNlcklkfWAsXG4gICAge1xuICAgICAgbWV0aG9kOiBcIkRFTEVURVwiLFxuICAgIH1cbiAgKTtcblxuICBpZiAocmVzdWx0LnN1Y2Nlc3MpIHtcbiAgICByZXR1cm4gcmVzdWx0LmRhdGE7XG4gIH1cblxuICB0aHJvdyBuZXcgRXJyb3IoXCJGYWlsZWQgdG8gZGVsZXRlIHVzZXJcIik7XG59O1xuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJ1UkErcEJhIn0=
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/data:0b96f0 [app-client] (ecmascript) <text/javascript>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
/* __next_internal_action_entry_do_not_use__ [{"7fcc76b31d08b05a4156f910b46f92525464ba44c6":"getPendingUsers"},"action.js",""] */ __turbopack_context__.s({
    "getPendingUsers": (()=>getPendingUsers)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
"use turbopack no side effects";
;
var getPendingUsers = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("7fcc76b31d08b05a4156f910b46f92525464ba44c6", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "getPendingUsers"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYWN0aW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHNlcnZlclwiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IHsgY29va2llcyB9IGZyb20gXCJuZXh0L2hlYWRlcnNcIjtcbmltcG9ydCB7IHJlZGlyZWN0IH0gZnJvbSBcIm5leHQvbmF2aWdhdGlvblwiO1xuXG4vLyBBdXRoZW50aWNhdGlvblxuZXhwb3J0IGNvbnN0IGxvZ2luID0gYXN5bmMgKHsgZW1haWwsIHBhc3N3b3JkIH0pID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBvc3QoXG4gICAgICBgJHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19CQVNFX1VSTH1hcGkvYXV0aC9sb2dpbj9hZG1pbj10cnVlYCxcbiAgICAgIHsgZW1haWwsIHBhc3N3b3JkIH0sXG4gICAgICB7XG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgfSxcbiAgICAgIH1cbiAgICApO1xuXG4gICAgY29uc3QgeyBkYXRhIH0gPSByZXNwb25zZTtcblxuICAgIC8vIEV4dHJhY3QgYW5kIG1hbnVhbGx5IHNldCBjb29raWVzIGZyb20gcmVzcG9uc2VcbiAgICBjb25zdCBzZXRDb29raWVIZWFkZXIgPSByZXNwb25zZS5oZWFkZXJzW1wic2V0LWNvb2tpZVwiXTtcblxuICAgIGlmIChzZXRDb29raWVIZWFkZXIgJiYgQXJyYXkuaXNBcnJheShzZXRDb29raWVIZWFkZXIpKSB7XG4gICAgICBjb25zdCBjb29raWVTdG9yZSA9IGF3YWl0IGNvb2tpZXMoKTtcblxuICAgICAgc2V0Q29va2llSGVhZGVyLmZvckVhY2goKGNvb2tpZSkgPT4ge1xuICAgICAgICAvLyBQYXJzZSBjb29raWUgc3RyaW5nXG4gICAgICAgIGNvbnN0IHBhcnRzID0gY29va2llLnNwbGl0KFwiO1wiKVswXTtcbiAgICAgICAgY29uc3QgW25hbWUsIC4uLnZhbHVlUGFydHNdID0gcGFydHMuc3BsaXQoXCI9XCIpO1xuICAgICAgICBjb25zdCB2YWx1ZSA9IHZhbHVlUGFydHMuam9pbihcIj1cIik7XG5cbiAgICAgICAgaWYgKG5hbWUgJiYgdmFsdWUpIHtcbiAgICAgICAgICAvLyBTZXQgY29va2llIHdpdGggaHR0cE9ubHkgYW5kIHNlY3VyZSBmbGFnc1xuICAgICAgICAgIGNvb2tpZVN0b3JlLnNldChuYW1lLnRyaW0oKSwgdmFsdWUudHJpbSgpLCB7XG4gICAgICAgICAgICBodHRwT25seTogdHJ1ZSxcbiAgICAgICAgICAgIHNlY3VyZTogcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiLFxuICAgICAgICAgICAgc2FtZVNpdGU6IFwibGF4XCIsXG4gICAgICAgICAgICBwYXRoOiBcIi9cIixcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gT24gc3VjY2Vzc2Z1bCBsb2dpbiwgcmVkaXJlY3QgdG8gYWRtaW4gZGFzaGJvYXJkXG4gICAgcmVkaXJlY3QoXCIvZGFzaGJvYXJkL292ZXJ2aWV3XCIpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIC8vIElmIGl0J3MgYSByZWRpcmVjdCwgcmUtdGhyb3cgaXRcbiAgICBpZiAoXG4gICAgICBlcnJvci5tZXNzYWdlID09PSBcIk5FWFRfUkVESVJFQ1RcIiB8fFxuICAgICAgZXJyb3IuZGlnZXN0Py5zdGFydHNXaXRoKFwiTkVYVF9SRURJUkVDVFwiKVxuICAgICkge1xuICAgICAgdGhyb3cgZXJyb3I7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgbWVzc2FnZTogZXJyb3IucmVzcG9uc2U/LmRhdGE/Lm1lc3NhZ2UgfHwgXCJMb2dpbiBmYWlsZWRcIixcbiAgICB9O1xuICB9XG59O1xuXG5leHBvcnQgY29uc3QgbG9nb3V0ID0gYXN5bmMgKCkgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IGNvb2tpZVN0b3JlID0gYXdhaXQgY29va2llcygpO1xuICAgIGNvb2tpZVN0b3JlLmRlbGV0ZShcInRva2VuXCIpO1xuICAgIGNvb2tpZVN0b3JlLmRlbGV0ZShcInJlZnJlc2hUb2tlblwiKTtcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UgfTtcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IHJlZnJlc2hUb2tlblNlcnZlciA9IGFzeW5jICgpID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGF4aW9zLnBvc3QoXG4gICAgICBgJHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19CQVNFX1VSTH1hcGkvYXV0aC9yZWZyZXNoLXRva2VuYCxcbiAgICAgIHt9LFxuICAgICAge1xuICAgICAgICB3aXRoQ3JlZGVudGlhbHM6IHRydWUsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICBDb29raWU6IChhd2FpdCBjb29raWVzKCkpLnRvU3RyaW5nKCksIC8vIEZvcndhcmQgYWxsIGNvb2tpZXNcbiAgICAgICAgfSxcbiAgICAgIH1cbiAgICApO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIHN1Y2Nlc3M6IHRydWUsXG4gICAgICBkYXRhOiBkYXRhLmRhdGEsXG4gICAgICBtZXNzYWdlOiBcIlRva2VuIHJlZnJlc2hlZCBzdWNjZXNzZnVsbHlcIixcbiAgICB9O1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJTZXJ2ZXIgdG9rZW4gcmVmcmVzaCBlcnJvcjpcIiwgZXJyb3IpO1xuICAgIHJldHVybiB7XG4gICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgIG1lc3NhZ2U6IGVycm9yLnJlc3BvbnNlPy5kYXRhPy5tZXNzYWdlIHx8IFwiVG9rZW4gcmVmcmVzaCBmYWlsZWRcIixcbiAgICB9O1xuICB9XG59O1xuXG5jb25zdCBtYWtlQXV0aGVudGljYXRlZFJlcXVlc3QgPSBhc3luYyAodXJsLCBvcHRpb25zID0ge30pID0+IHtcbiAgY29uc3QgY29va2llU3RvcmUgPSBhd2FpdCBjb29raWVzKCk7XG5cbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zKHtcbiAgICAgIHVybCxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgQ29va2llOiBjb29raWVTdG9yZS50b1N0cmluZygpLFxuICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgLi4ub3B0aW9ucy5oZWFkZXJzLFxuICAgICAgfSxcbiAgICAgIHRpbWVvdXQ6IDMwMDAwLFxuICAgICAgd2l0aENyZWRlbnRpYWxzOiB0cnVlLFxuICAgICAgLi4ub3B0aW9ucyxcbiAgICB9KTtcblxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IHJlc3BvbnNlLmRhdGEgfTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAvLyBJZiA0MDEgYW5kIHdlIGhhdmVuJ3QgcmV0cmllZCB5ZXQsIHRyeSB0byByZWZyZXNoXG4gICAgaWYgKGVycm9yLnJlc3BvbnNlPy5zdGF0dXMgPT09IDQwMSAmJiAhb3B0aW9ucy5za2lwUmVmcmVzaCkge1xuICAgICAgY29uc29sZS5sb2coXCJUb2tlbiBleHBpcmVkLCBhdHRlbXB0aW5nIHJlZnJlc2guLi5cIik7XG5cbiAgICAgIGNvbnN0IHJlZnJlc2hSZXN1bHQgPSBhd2FpdCByZWZyZXNoVG9rZW5TZXJ2ZXIoKTtcblxuICAgICAgaWYgKHJlZnJlc2hSZXN1bHQuc3VjY2Vzcykge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGNvbnN0IHJldHJ5UmVzcG9uc2UgPSBhd2FpdCBheGlvcyh7XG4gICAgICAgICAgICB1cmwsXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgIENvb2tpZTogKGF3YWl0IGNvb2tpZXMoKSkudG9TdHJpbmcoKSxcbiAgICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgICAgICAgIC4uLm9wdGlvbnMuaGVhZGVycyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0aW1lb3V0OiAzMDAwMCxcbiAgICAgICAgICAgIHdpdGhDcmVkZW50aWFsczogdHJ1ZSxcbiAgICAgICAgICAgIC4uLm9wdGlvbnMsXG4gICAgICAgICAgICBza2lwUmVmcmVzaDogdHJ1ZSxcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IHJldHJ5UmVzcG9uc2UuZGF0YSB9O1xuICAgICAgICB9IGNhdGNoIChyZXRyeUVycm9yKSB7XG4gICAgICAgICAgLy8gVGhyb3cgYXhpb3MgZXJyb3IgYXMtaXMgc28gcmVzcG9uc2UgZGF0YSBpcyBwcmVzZXJ2ZWRcbiAgICAgICAgICB0aHJvdyByZXRyeUVycm9yO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gVGhyb3cgYXhpb3MgZXJyb3IgYXMtaXMgc28gcmVzcG9uc2UgZGF0YSBpcyBwcmVzZXJ2ZWRcbiAgICB0aHJvdyBlcnJvcjtcbiAgfVxufTtcbi8vIEdldCByZWZlcnJhbCBjb2RlcyB3aXRoIGZpbHRlcnNcbmV4cG9ydCBjb25zdCBnZXRSZWZlcnJhbENvZGVzID0gYXN5bmMgKHtcbiAgcGFnZSA9IDEsXG4gIGxpbWl0ID0gMTAsXG4gIGlzQWN0aXZlLFxuICBhc3NpZ25lZFN0YXR1cyxcbiAgc2VhcmNoLFxufSA9IHt9KSA9PiB7XG4gIGNvbnN0IHF1ZXJ5UGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcyh7XG4gICAgcGFnZTogcGFnZS50b1N0cmluZygpLFxuICAgIGxpbWl0OiBsaW1pdC50b1N0cmluZygpLFxuICAgIC4uLihpc0FjdGl2ZSAhPT0gdW5kZWZpbmVkICYmIHsgaXNBY3RpdmU6IGlzQWN0aXZlLnRvU3RyaW5nKCkgfSksXG4gICAgLi4uKGFzc2lnbmVkU3RhdHVzICYmIHsgYXNzaWduZWRTdGF0dXMgfSksXG4gICAgLi4uKHNlYXJjaCAmJiB7IHNlYXJjaCB9KSxcbiAgfSk7XG5cbiAgY29uc3QgcmVzdWx0ID0gYXdhaXQgbWFrZUF1dGhlbnRpY2F0ZWRSZXF1ZXN0KFxuICAgIGAke1xuICAgICAgcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQkFTRV9VUkxcbiAgICB9YXBpL2FkbWluL3JlZmVycmFsLWNvZGVzPyR7cXVlcnlQYXJhbXMudG9TdHJpbmcoKX1gLFxuICAgIHtcbiAgICAgIG1ldGhvZDogXCJHRVRcIixcbiAgICB9XG4gICk7XG5cbiAgaWYgKHJlc3VsdC5zdWNjZXNzKSB7XG4gICAgcmV0dXJuIHJlc3VsdC5kYXRhO1xuICB9XG5cbiAgdGhyb3cgbmV3IEVycm9yKFwiRmFpbGVkIHRvIGdldCByZWZlcnJhbCBjb2Rlc1wiKTtcbn07XG5cbi8vIEdldCB1c2VycyBmb3IgZHJvcGRvd24gc2VsZWN0aW9uXG5leHBvcnQgY29uc3QgZ2V0VXNlcnMgPSBhc3luYyAoe1xuICBwYWdlID0gMSxcbiAgbGltaXQgPSAxMDAsIC8vIEdldCBtb3JlIHVzZXJzIGZvciBkcm9wZG93blxuICB1c2VyVHlwZSxcbiAgc2VhcmNoLFxufSA9IHt9KSA9PiB7XG4gIGNvbnN0IHF1ZXJ5UGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcyh7XG4gICAgcGFnZTogcGFnZS50b1N0cmluZygpLFxuICAgIGxpbWl0OiBsaW1pdC50b1N0cmluZygpLFxuICAgIC4uLih1c2VyVHlwZSAmJiB7IHVzZXJUeXBlIH0pLFxuICAgIC4uLihzZWFyY2ggJiYgeyBzZWFyY2ggfSksXG4gIH0pO1xuXG4gIGNvbnN0IHJlc3VsdCA9IGF3YWl0IG1ha2VBdXRoZW50aWNhdGVkUmVxdWVzdChcbiAgICBgJHtcbiAgICAgIHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0JBU0VfVVJMXG4gICAgfWFwaS9hZG1pbi91c2Vycz8ke3F1ZXJ5UGFyYW1zLnRvU3RyaW5nKCl9YCxcbiAgICB7XG4gICAgICBtZXRob2Q6IFwiR0VUXCIsXG4gICAgfVxuICApO1xuXG4gIGlmIChyZXN1bHQuc3VjY2Vzcykge1xuICAgIHJldHVybiByZXN1bHQuZGF0YTtcbiAgfVxuXG4gIHRocm93IG5ldyBFcnJvcihcIkZhaWxlZCB0byBnZXQgdXNlcnNcIik7XG59O1xuXG4vLyBDcmVhdGUgbmV3IHJlZmVycmFsIGNvZGVcbmV4cG9ydCBjb25zdCBjcmVhdGVSZWZlcnJhbENvZGUgPSBhc3luYyAoe1xuICBjb2RlLFxuICBkZXNjcmlwdGlvbixcbiAgZXhwaXJlc0F0LFxuICBhc3NpZ25lZFRvVXNlcklkLFxufSkgPT4ge1xuICBjb25zdCByZXN1bHQgPSBhd2FpdCBtYWtlQXV0aGVudGljYXRlZFJlcXVlc3QoXG4gICAgYCR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQkFTRV9VUkx9YXBpL2FkbWluL3JlZmVycmFsLWNvZGVzYCxcbiAgICB7XG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgZGF0YToge1xuICAgICAgICBjb2RlLFxuICAgICAgICBkZXNjcmlwdGlvbixcbiAgICAgICAgZXhwaXJlc0F0LFxuICAgICAgICBhc3NpZ25lZFRvVXNlcklkOlxuICAgICAgICAgIGFzc2lnbmVkVG9Vc2VySWQgPT09IFwiYWRtaW5cIiA/IG51bGwgOiBhc3NpZ25lZFRvVXNlcklkLFxuICAgICAgfSxcbiAgICB9XG4gICk7XG5cbiAgaWYgKHJlc3VsdC5zdWNjZXNzKSB7XG4gICAgcmV0dXJuIHJlc3VsdC5kYXRhO1xuICB9XG5cbiAgdGhyb3cgbmV3IEVycm9yKFwiRmFpbGVkIHRvIGNyZWF0ZSByZWZlcnJhbCBjb2RlXCIpO1xufTtcblxuLy8gVXBkYXRlIHJlZmVycmFsIGNvZGVcbmV4cG9ydCBjb25zdCB1cGRhdGVSZWZlcnJhbENvZGUgPSBhc3luYyAoe1xuICBpZCxcbiAgY29kZSxcbiAgZGVzY3JpcHRpb24sXG4gIGV4cGlyZXNBdCxcbiAgaXNBY3RpdmUsXG59KSA9PiB7XG4gIGNvbnN0IHJlc3VsdCA9IGF3YWl0IG1ha2VBdXRoZW50aWNhdGVkUmVxdWVzdChcbiAgICBgJHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19CQVNFX1VSTH1hcGkvYWRtaW4vcmVmZXJyYWwtY29kZXMvJHtpZH1gLFxuICAgIHtcbiAgICAgIG1ldGhvZDogXCJQVVRcIixcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgY29kZSxcbiAgICAgICAgZGVzY3JpcHRpb24sXG4gICAgICAgIGV4cGlyZXNBdCxcbiAgICAgICAgaXNBY3RpdmUsXG4gICAgICB9LFxuICAgIH1cbiAgKTtcblxuICBpZiAocmVzdWx0LnN1Y2Nlc3MpIHtcbiAgICByZXR1cm4gcmVzdWx0LmRhdGE7XG4gIH1cblxuICB0aHJvdyBuZXcgRXJyb3IoXCJGYWlsZWQgdG8gdXBkYXRlIHJlZmVycmFsIGNvZGVcIik7XG59O1xuXG4vLyBEZWxldGUgcmVmZXJyYWwgY29kZVxuZXhwb3J0IGNvbnN0IGRlbGV0ZVJlZmVycmFsQ29kZSA9IGFzeW5jIChpZCkgPT4ge1xuICBjb25zdCByZXN1bHQgPSBhd2FpdCBtYWtlQXV0aGVudGljYXRlZFJlcXVlc3QoXG4gICAgYCR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQkFTRV9VUkx9YXBpL2FkbWluL3JlZmVycmFsLWNvZGVzLyR7aWR9YCxcbiAgICB7XG4gICAgICBtZXRob2Q6IFwiREVMRVRFXCIsXG4gICAgfVxuICApO1xuXG4gIGlmIChyZXN1bHQuc3VjY2Vzcykge1xuICAgIHJldHVybiByZXN1bHQuZGF0YTtcbiAgfVxuXG4gIHRocm93IG5ldyBFcnJvcihcIkZhaWxlZCB0byBkZWxldGUgcmVmZXJyYWwgY29kZVwiKTtcbn07XG5cbi8vIEFzc2lnbiByZWZlcnJhbCBjb2RlIHRvIHVzZXJcbmV4cG9ydCBjb25zdCBhc3NpZ25SZWZlcnJhbENvZGUgPSBhc3luYyAoeyBpZCwgdXNlcklkIH0pID0+IHtcbiAgdHJ5IHtcbiAgICBpZiAoIWlkIHx8ICF1c2VySWQpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgICBtZXNzYWdlOiBcIlJlZmVycmFsIGNvZGUgSUQgYW5kIHVzZXIgSUQgYXJlIHJlcXVpcmVkXCIsXG4gICAgICB9O1xuICAgIH1cblxuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IG1ha2VBdXRoZW50aWNhdGVkUmVxdWVzdChcbiAgICAgIGAke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0JBU0VfVVJMfWFwaS9hZG1pbi9yZWZlcnJhbC1jb2Rlcy8ke2lkfS9hc3NpZ25gLFxuICAgICAge1xuICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICBkYXRhOiB7IHVzZXJJZDogdXNlcklkLnRvU3RyaW5nKCkgfSwgLy8gRW5zdXJlIHVzZXJJZCBpcyBzdHJpbmdcbiAgICAgICAgdGltZW91dDogMTAwMDAsXG4gICAgICB9XG4gICAgKTtcblxuICAgIGlmIChyZXN1bHQuc3VjY2Vzcykge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgc3VjY2VzczogdHJ1ZSxcbiAgICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXG4gICAgICB9O1xuICAgIH1cblxuICAgIHRocm93IG5ldyBFcnJvcihcIkZhaWxlZCB0byBhc3NpZ24gcmVmZXJyYWwgY29kZVwiKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgaW4gYXNzaWduUmVmZXJyYWxDb2RlIEFQSTpcIiwgZXJyb3IpO1xuXG4gICAgbGV0IG1lc3NhZ2UgPSBcIkFuIHVuZXhwZWN0ZWQgZXJyb3Igb2NjdXJyZWRcIjtcblxuICAgIGlmIChlcnJvci5yZXNwb25zZSkge1xuICAgICAgbWVzc2FnZSA9XG4gICAgICAgIGVycm9yLnJlc3BvbnNlLmRhdGE/Lm1lc3NhZ2UgfHxcbiAgICAgICAgYFJlcXVlc3QgZmFpbGVkIHdpdGggc3RhdHVzICR7ZXJyb3IucmVzcG9uc2Uuc3RhdHVzfWA7XG4gICAgfSBlbHNlIGlmIChlcnJvci5yZXF1ZXN0KSB7XG4gICAgICBtZXNzYWdlID0gXCJOZXR3b3JrIGVycm9yLiBQbGVhc2UgY2hlY2sgeW91ciBjb25uZWN0aW9uIGFuZCB0cnkgYWdhaW4uXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIG1lc3NhZ2UgPSBlcnJvci5tZXNzYWdlIHx8IFwiQW4gdW5leHBlY3RlZCBlcnJvciBvY2N1cnJlZFwiO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgIG1lc3NhZ2UsXG4gICAgfTtcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IHVuYXNzaWduUmVmZXJyYWxDb2RlID0gYXN5bmMgKGlkKSA9PiB7XG4gIHRyeSB7XG4gICAgaWYgKCFpZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiUmVmZXJyYWwgY29kZSBJRCBpcyByZXF1aXJlZFwiKTtcbiAgICB9XG5cbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBtYWtlQXV0aGVudGljYXRlZFJlcXVlc3QoXG4gICAgICBgJHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19CQVNFX1VSTH1hcGkvYWRtaW4vcmVmZXJyYWwtY29kZXMvJHtpZH0vdW5hc3NpZ25gLFxuICAgICAge1xuICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICBkYXRhOiB7fSxcbiAgICAgICAgdGltZW91dDogMTAwMDAsXG4gICAgICB9XG4gICAgKTtcblxuICAgIGlmIChyZXN1bHQuc3VjY2Vzcykge1xuICAgICAgcmV0dXJuIHJlc3VsdC5kYXRhO1xuICAgIH1cblxuICAgIHRocm93IG5ldyBFcnJvcihcIkZhaWxlZCB0byB1bmFzc2lnbiByZWZlcnJhbCBjb2RlXCIpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBpbiB1bmFzc2lnblJlZmVycmFsQ29kZSBBUEk6XCIsIGVycm9yKTtcblxuICAgIGlmIChlcnJvci5yZXNwb25zZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBlcnJvci5yZXNwb25zZS5kYXRhPy5tZXNzYWdlIHx8IFwiRmFpbGVkIHRvIHVuYXNzaWduIHJlZmVycmFsIGNvZGVcIlxuICAgICAgKTtcbiAgICB9IGVsc2UgaWYgKGVycm9yLnJlcXVlc3QpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgXCJOZXR3b3JrIGVycm9yLiBQbGVhc2UgY2hlY2sgeW91ciBjb25uZWN0aW9uIGFuZCB0cnkgYWdhaW4uXCJcbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihlcnJvci5tZXNzYWdlIHx8IFwiQW4gdW5leHBlY3RlZCBlcnJvciBvY2N1cnJlZFwiKTtcbiAgICB9XG4gIH1cbn07XG5cbi8vIEdldCByZWZlcnJhbCBjb2RlIGJ5IElEXG5leHBvcnQgY29uc3QgZ2V0UmVmZXJyYWxDb2RlQnlJZCA9IGFzeW5jIChpZCkgPT4ge1xuICBjb25zdCByZXN1bHQgPSBhd2FpdCBtYWtlQXV0aGVudGljYXRlZFJlcXVlc3QoXG4gICAgYCR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQkFTRV9VUkx9YXBpL2FkbWluL3JlZmVycmFsLWNvZGVzLyR7aWR9YCxcbiAgICB7XG4gICAgICBtZXRob2Q6IFwiR0VUXCIsXG4gICAgfVxuICApO1xuXG4gIGlmIChyZXN1bHQuc3VjY2Vzcykge1xuICAgIHJldHVybiByZXN1bHQuZGF0YTtcbiAgfVxuXG4gIHRocm93IG5ldyBFcnJvcihcIkZhaWxlZCB0byBnZXQgcmVmZXJyYWwgY29kZVwiKTtcbn07XG5cbi8vIEdldCByZWZlcnJhbCBhbmFseXRpY3NcbmV4cG9ydCBjb25zdCBnZXRSZWZlcnJhbEFuYWx5dGljcyA9IGFzeW5jICh7XG4gIHN0YXJ0RGF0ZSxcbiAgZW5kRGF0ZSxcbiAgYWRtaW5JZCxcbn0gPSB7fSkgPT4ge1xuICBjb25zdCBxdWVyeVBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoe1xuICAgIC4uLihzdGFydERhdGUgJiYgeyBzdGFydERhdGUgfSksXG4gICAgLi4uKGVuZERhdGUgJiYgeyBlbmREYXRlIH0pLFxuICAgIC4uLihhZG1pbklkICYmIHsgYWRtaW5JZCB9KSxcbiAgfSk7XG5cbiAgY29uc3QgcmVzdWx0ID0gYXdhaXQgbWFrZUF1dGhlbnRpY2F0ZWRSZXF1ZXN0KFxuICAgIGAke1xuICAgICAgcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQkFTRV9VUkxcbiAgICB9YXBpL2FkbWluL3JlZmVycmFsLWFuYWx5dGljcz8ke3F1ZXJ5UGFyYW1zLnRvU3RyaW5nKCl9YCxcbiAgICB7XG4gICAgICBtZXRob2Q6IFwiR0VUXCIsXG4gICAgfVxuICApO1xuXG4gIGlmIChyZXN1bHQuc3VjY2Vzcykge1xuICAgIHJldHVybiByZXN1bHQuZGF0YTtcbiAgfVxuXG4gIHRocm93IG5ldyBFcnJvcihcIkZhaWxlZCB0byBnZXQgcmVmZXJyYWwgYW5hbHl0aWNzXCIpO1xufTtcblxuLy8gR2V0IHJlZmVycmFsIHVzYWdlIGRhdGFcbmV4cG9ydCBjb25zdCBnZXRSZWZlcnJhbFVzYWdlID0gYXN5bmMgKHtcbiAgcGFnZSA9IDEsXG4gIGxpbWl0ID0gMTAsXG4gIHJlZmVycmFsQ29kZSxcbiAgdXNlcklkLFxufSA9IHt9KSA9PiB7XG4gIGNvbnN0IHF1ZXJ5UGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcyh7XG4gICAgcGFnZTogcGFnZS50b1N0cmluZygpLFxuICAgIGxpbWl0OiBsaW1pdC50b1N0cmluZygpLFxuICAgIC4uLihyZWZlcnJhbENvZGUgJiYgeyByZWZlcnJhbENvZGUgfSksXG4gICAgLi4uKHVzZXJJZCAmJiB7IHVzZXJJZCB9KSxcbiAgfSk7XG5cbiAgY29uc3QgcmVzdWx0ID0gYXdhaXQgbWFrZUF1dGhlbnRpY2F0ZWRSZXF1ZXN0KFxuICAgIGAke1xuICAgICAgcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQkFTRV9VUkxcbiAgICB9YXBpL2FkbWluL3JlZmVycmFsLXVzYWdlPyR7cXVlcnlQYXJhbXMudG9TdHJpbmcoKX1gLFxuICAgIHtcbiAgICAgIG1ldGhvZDogXCJHRVRcIixcbiAgICB9XG4gICk7XG5cbiAgaWYgKHJlc3VsdC5zdWNjZXNzKSB7XG4gICAgcmV0dXJuIHJlc3VsdC5kYXRhO1xuICB9XG5cbiAgdGhyb3cgbmV3IEVycm9yKFwiRmFpbGVkIHRvIGdldCByZWZlcnJhbCB1c2FnZVwiKTtcbn07XG5cbi8vIEdldCB1c2VyIGJ5IElEXG5leHBvcnQgY29uc3QgZ2V0VXNlckJ5SWQgPSBhc3luYyAoaWQpID0+IHtcbiAgY29uc3QgcmVzdWx0ID0gYXdhaXQgbWFrZUF1dGhlbnRpY2F0ZWRSZXF1ZXN0KFxuICAgIGAke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0JBU0VfVVJMfWFwaS9hZG1pbi91c2Vycy8ke2lkfWAsXG4gICAge1xuICAgICAgbWV0aG9kOiBcIkdFVFwiLFxuICAgIH1cbiAgKTtcblxuICBpZiAocmVzdWx0LnN1Y2Nlc3MpIHtcbiAgICByZXR1cm4gcmVzdWx0LmRhdGE7XG4gIH1cblxuICB0aHJvdyBuZXcgRXJyb3IoXCJGYWlsZWQgdG8gZ2V0IHVzZXJcIik7XG59O1xuXG4vLyBVcGRhdGUgdXNlciBwb2ludHNcbmV4cG9ydCBjb25zdCB1cGRhdGVVc2VyUG9pbnRzID0gYXN5bmMgKHsgaWQsIGFtb3VudCwgdHlwZSwgZGVzY3JpcHRpb24gfSkgPT4ge1xuICBjb25zdCByZXN1bHQgPSBhd2FpdCBtYWtlQXV0aGVudGljYXRlZFJlcXVlc3QoXG4gICAgYCR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQkFTRV9VUkx9YXBpL2FkbWluL3VzZXJzLyR7aWR9L3BvaW50c2AsXG4gICAge1xuICAgICAgbWV0aG9kOiBcIlBVVFwiLFxuICAgICAgZGF0YToge1xuICAgICAgICBhbW91bnQsXG4gICAgICAgIHR5cGUsXG4gICAgICAgIGRlc2NyaXB0aW9uLFxuICAgICAgfSxcbiAgICB9XG4gICk7XG5cbiAgaWYgKHJlc3VsdC5zdWNjZXNzKSB7XG4gICAgcmV0dXJuIHJlc3VsdC5kYXRhO1xuICB9XG5cbiAgdGhyb3cgbmV3IEVycm9yKFwiRmFpbGVkIHRvIHVwZGF0ZSB1c2VyIHBvaW50c1wiKTtcbn07XG5cbi8vIEJ1bGsgY3JlYXRlIHJlZmVycmFsIGNvZGVzXG5leHBvcnQgY29uc3QgYnVsa0NyZWF0ZVJlZmVycmFsQ29kZXMgPSBhc3luYyAoY29kZXMpID0+IHtcbiAgY29uc3QgcmVzdWx0ID0gYXdhaXQgbWFrZUF1dGhlbnRpY2F0ZWRSZXF1ZXN0KFxuICAgIGAke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0JBU0VfVVJMfWFwaS9hZG1pbi9yZWZlcnJhbC1jb2Rlcy9idWxrLWNyZWF0ZWAsXG4gICAge1xuICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgIGRhdGE6IHsgY29kZXMgfSxcbiAgICB9XG4gICk7XG5cbiAgaWYgKHJlc3VsdC5zdWNjZXNzKSB7XG4gICAgcmV0dXJuIHJlc3VsdC5kYXRhO1xuICB9XG5cbiAgdGhyb3cgbmV3IEVycm9yKFwiRmFpbGVkIHRvIGJ1bGsgY3JlYXRlIHJlZmVycmFsIGNvZGVzXCIpO1xufTtcblxuLy8gQnVsayBhc3NpZ24gcmVmZXJyYWwgY29kZXNcbmV4cG9ydCBjb25zdCBidWxrQXNzaWduUmVmZXJyYWxDb2RlcyA9IGFzeW5jIChhc3NpZ25tZW50cykgPT4ge1xuICBjb25zdCByZXN1bHQgPSBhd2FpdCBtYWtlQXV0aGVudGljYXRlZFJlcXVlc3QoXG4gICAgYCR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQkFTRV9VUkx9YXBpL2FkbWluL3JlZmVycmFsLWNvZGVzL2J1bGstYXNzaWduYCxcbiAgICB7XG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgZGF0YTogeyBhc3NpZ25tZW50cyB9LFxuICAgIH1cbiAgKTtcblxuICBpZiAocmVzdWx0LnN1Y2Nlc3MpIHtcbiAgICByZXR1cm4gcmVzdWx0LmRhdGE7XG4gIH1cblxuICB0aHJvdyBuZXcgRXJyb3IoXCJGYWlsZWQgdG8gYnVsayBhc3NpZ24gcmVmZXJyYWwgY29kZXNcIik7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0UGVuZGluZ1VzZXJzID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCByZXN1bHQgPSBhd2FpdCBtYWtlQXV0aGVudGljYXRlZFJlcXVlc3QoXG4gICAgYCR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQkFTRV9VUkx9YXBpL2FkbWluL3BlbmRpbmcvdXNlcnNgLFxuICAgIHtcbiAgICAgIG1ldGhvZDogXCJHRVRcIixcbiAgICB9XG4gICk7XG5cbiAgaWYgKHJlc3VsdC5zdWNjZXNzKSB7XG4gICAgcmV0dXJuIHJlc3VsdC5kYXRhO1xuICB9XG5cbiAgdGhyb3cgbmV3IEVycm9yKFwiRmFpbGVkIHRvIGdldCBwZW5kaW5nIHVzZXJzXCIpO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldEFwcHJvdmVkVXNlcnMgPSBhc3luYyAoe1xuICBwYWdlID0gMSxcbiAgbGltaXQgPSAxMCxcbiAgc2VhcmNoID0gXCJcIixcbn0gPSB7fSkgPT4ge1xuICBjb25zdCBwYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHtcbiAgICBwYWdlOiBwYWdlLnRvU3RyaW5nKCksXG4gICAgbGltaXQ6IGxpbWl0LnRvU3RyaW5nKCksXG4gICAgLi4uKHNlYXJjaCAmJiB7IHNlYXJjaCB9KSxcbiAgfSk7XG5cbiAgY29uc3QgcmVzdWx0ID0gYXdhaXQgbWFrZUF1dGhlbnRpY2F0ZWRSZXF1ZXN0KFxuICAgIGAke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0JBU0VfVVJMfWFwaS9hZG1pbi9hcHByb3ZlZC91c2Vycz8ke3BhcmFtc31gLFxuICAgIHtcbiAgICAgIG1ldGhvZDogXCJHRVRcIixcbiAgICB9XG4gICk7XG5cbiAgaWYgKHJlc3VsdC5zdWNjZXNzKSB7XG4gICAgcmV0dXJuIHJlc3VsdC5kYXRhO1xuICB9XG5cbiAgdGhyb3cgbmV3IEVycm9yKFwiRmFpbGVkIHRvIGdldCBhcHByb3ZlZCB1c2Vyc1wiKTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRVc2VyUmVmZXJyYWxVc2FnZSA9IGFzeW5jICh7XG4gIHVzZXJJZCxcbiAgcGFnZSA9IDEsXG4gIGxpbWl0ID0gNTAsXG59ID0ge30pID0+IHtcbiAgY29uc3QgcGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcyh7XG4gICAgcGFnZTogcGFnZS50b1N0cmluZygpLFxuICAgIGxpbWl0OiBsaW1pdC50b1N0cmluZygpLFxuICB9KTtcblxuICBjb25zdCByZXN1bHQgPSBhd2FpdCBtYWtlQXV0aGVudGljYXRlZFJlcXVlc3QoXG4gICAgYCR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQkFTRV9VUkx9YXBpL2FkbWluL3VzZXJzLyR7dXNlcklkfS9yZWZlcnJhbC11c2FnZT8ke3BhcmFtc31gLFxuICAgIHtcbiAgICAgIG1ldGhvZDogXCJHRVRcIixcbiAgICB9XG4gICk7XG5cbiAgaWYgKHJlc3VsdC5zdWNjZXNzKSB7XG4gICAgcmV0dXJuIHJlc3VsdC5kYXRhO1xuICB9XG5cbiAgdGhyb3cgbmV3IEVycm9yKFwiRmFpbGVkIHRvIGdldCB1c2VyIHJlZmVycmFsIHVzYWdlXCIpO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldFJlamVjdGVkVXNlcnMgPSBhc3luYyAoe1xuICBwYWdlID0gMSxcbiAgbGltaXQgPSAxMCxcbiAgc2VhcmNoID0gXCJcIixcbiAgc3RhdHVzID0gXCJhbGxcIixcbn0gPSB7fSkgPT4ge1xuICBjb25zdCBwYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHtcbiAgICBwYWdlOiBwYWdlLnRvU3RyaW5nKCksXG4gICAgbGltaXQ6IGxpbWl0LnRvU3RyaW5nKCksXG4gICAgc3RhdHVzLFxuICAgIC4uLihzZWFyY2ggJiYgeyBzZWFyY2ggfSksXG4gIH0pO1xuXG4gIGNvbnN0IHJlc3VsdCA9IGF3YWl0IG1ha2VBdXRoZW50aWNhdGVkUmVxdWVzdChcbiAgICBgJHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19CQVNFX1VSTH1hcGkvYWRtaW4vcmVqZWN0ZWQtdXNlcnM/JHtwYXJhbXN9YCxcbiAgICB7XG4gICAgICBtZXRob2Q6IFwiR0VUXCIsXG4gICAgfVxuICApO1xuXG4gIGlmIChyZXN1bHQuc3VjY2Vzcykge1xuICAgIHJldHVybiByZXN1bHQuZGF0YTtcbiAgfVxuXG4gIHRocm93IG5ldyBFcnJvcihcIkZhaWxlZCB0byBnZXQgcmVqZWN0ZWQgdXNlcnNcIik7XG59O1xuXG4vLyBHRVQgYWxsIHVzZXJzIHdpdGggc3RhdHVzXG5leHBvcnQgY29uc3QgZ2V0QWxsVXNlcnNXaXRoU3RhdHVzID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCByZXN1bHQgPSBhd2FpdCBtYWtlQXV0aGVudGljYXRlZFJlcXVlc3QoXG4gICAgYCR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQkFTRV9VUkx9YXBpL2FkbWluL3VzZXJzL3N0YXR1cy9hbGxgLFxuICAgIHtcbiAgICAgIG1ldGhvZDogXCJHRVRcIixcbiAgICB9XG4gICk7XG5cbiAgaWYgKHJlc3VsdC5zdWNjZXNzKSB7XG4gICAgcmV0dXJuIHJlc3VsdC5kYXRhO1xuICB9XG5cbiAgdGhyb3cgbmV3IEVycm9yKFwiRmFpbGVkIHRvIGdldCBhbGwgdXNlcnMgd2l0aCBzdGF0dXNcIik7XG59O1xuXG5leHBvcnQgY29uc3QgYXBwcm92ZVVzZXIgPSBhc3luYyAodXNlcklkKSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgbWFrZUF1dGhlbnRpY2F0ZWRSZXF1ZXN0KFxuICAgICAgYCR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQkFTRV9VUkx9YXBpL2FkbWluL3VzZXJzLyR7dXNlcklkfS9hcHByb3ZlYCxcbiAgICAgIHtcbiAgICAgICAgbWV0aG9kOiBcIlBBVENIXCIsXG4gICAgICAgIGRhdGE6IHt9LFxuICAgICAgfVxuICAgICk7XG5cbiAgICAvLyBJZiBzdWNjZXNzZnVsLCByZXR1cm4gdGhlIHJlc3VsdFxuICAgIHJldHVybiByZXN1bHQ7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5sb2coXCJSYXcgZXJyb3IgaW4gYXBwcm92ZVVzZXI6XCIsIGVycm9yKTtcbiAgICBjb25zb2xlLmxvZyhcIkF4aW9zIHJlc3BvbnNlOlwiLCBlcnJvci5yZXNwb25zZSk7XG4gICAgY29uc29sZS5sb2coXCJBeGlvcyByZXNwb25zZSBkYXRhOlwiLCBlcnJvci5yZXNwb25zZT8uZGF0YSk7XG5cbiAgICAvLyBBeGlvcyBlcnJvcnMgaGF2ZSB0aGUgcmVzcG9uc2UgaW4gZXJyb3IucmVzcG9uc2VcbiAgICAvLyBXZSBuZWVkIHRvIHRocm93IGFuIGVycm9yIHRoYXQgcHJlc2VydmVzIHRoaXMgc3RydWN0dXJlXG4gICAgY29uc3QgZW5oYW5jZWRFcnJvciA9IG5ldyBFcnJvcihcbiAgICAgIGVycm9yLnJlc3BvbnNlPy5kYXRhPy5tZXNzYWdlIHx8IGVycm9yLm1lc3NhZ2UgfHwgXCJGYWlsZWQgdG8gYXBwcm92ZSB1c2VyXCJcbiAgICApO1xuXG4gICAgLy8gUHJlc2VydmUgdGhlIGF4aW9zIHJlc3BvbnNlIHN0cnVjdHVyZVxuICAgIGVuaGFuY2VkRXJyb3IucmVzcG9uc2UgPSBlcnJvci5yZXNwb25zZTtcblxuICAgIHRocm93IGVuaGFuY2VkRXJyb3I7XG4gIH1cbn07XG5cbi8vIFBBVENIIHJlamVjdCBzaW5nbGUgdXNlclxuZXhwb3J0IGNvbnN0IHJlamVjdFVzZXIgPSBhc3luYyAodXNlcklkKSA9PiB7XG4gIGNvbnN0IHJlc3VsdCA9IGF3YWl0IG1ha2VBdXRoZW50aWNhdGVkUmVxdWVzdChcbiAgICBgJHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19CQVNFX1VSTH1hcGkvYWRtaW4vdXNlcnMvJHt1c2VySWR9L3JlamVjdGAsXG4gICAge1xuICAgICAgbWV0aG9kOiBcIlBBVENIXCIsXG4gICAgICBkYXRhOiB7fSxcbiAgICB9XG4gICk7XG5cbiAgaWYgKHJlc3VsdC5zdWNjZXNzKSB7XG4gICAgcmV0dXJuIHJlc3VsdC5kYXRhO1xuICB9XG5cbiAgdGhyb3cgbmV3IEVycm9yKFwiRmFpbGVkIHRvIHJlamVjdCB1c2VyXCIpO1xufTtcblxuLy8gUEFUQ0ggYnVsayB1cGRhdGUgdXNlciBzdGF0dXNcbmV4cG9ydCBjb25zdCBidWxrVXBkYXRlVXNlclN0YXR1cyA9IGFzeW5jICh7IHVzZXJJZHMsIHN0YXR1cyB9KSA9PiB7XG4gIGNvbnN0IHJlc3VsdCA9IGF3YWl0IG1ha2VBdXRoZW50aWNhdGVkUmVxdWVzdChcbiAgICBgJHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19CQVNFX1VSTH1hcGkvYWRtaW4vdXNlcnMvYnVsay11cGRhdGUtc3RhdHVzYCxcbiAgICB7XG4gICAgICBtZXRob2Q6IFwiUEFUQ0hcIixcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgdXNlcklkcyxcbiAgICAgICAgc3RhdHVzLFxuICAgICAgfSxcbiAgICB9XG4gICk7XG5cbiAgaWYgKHJlc3VsdC5zdWNjZXNzKSB7XG4gICAgcmV0dXJuIHJlc3VsdC5kYXRhO1xuICB9XG5cbiAgdGhyb3cgbmV3IEVycm9yKFwiRmFpbGVkIHRvIGJ1bGsgdXBkYXRlIHVzZXIgc3RhdHVzXCIpO1xufTtcblxuZXhwb3J0IGNvbnN0IGRlbGV0ZVVzZXIgPSBhc3luYyAodXNlcklkKSA9PiB7XG4gIGNvbnN0IHJlc3VsdCA9IGF3YWl0IG1ha2VBdXRoZW50aWNhdGVkUmVxdWVzdChcbiAgICBgJHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19CQVNFX1VSTH1hcGkvYWRtaW4vdXNlcnMvZGVsZXRlLyR7dXNlcklkfWAsXG4gICAge1xuICAgICAgbWV0aG9kOiBcIkRFTEVURVwiLFxuICAgIH1cbiAgKTtcblxuICBpZiAocmVzdWx0LnN1Y2Nlc3MpIHtcbiAgICByZXR1cm4gcmVzdWx0LmRhdGE7XG4gIH1cblxuICB0aHJvdyBuZXcgRXJyb3IoXCJGYWlsZWQgdG8gZGVsZXRlIHVzZXJcIik7XG59O1xuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJrUkFvZ0JhIn0=
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/data:418943 [app-client] (ecmascript) <text/javascript>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
/* __next_internal_action_entry_do_not_use__ [{"7f4f50219cd21575d54d9bc68743302ec4e599d211":"getUserReferralUsage"},"action.js",""] */ __turbopack_context__.s({
    "getUserReferralUsage": (()=>getUserReferralUsage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
"use turbopack no side effects";
;
var getUserReferralUsage = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("7f4f50219cd21575d54d9bc68743302ec4e599d211", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "getUserReferralUsage"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYWN0aW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHNlcnZlclwiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IHsgY29va2llcyB9IGZyb20gXCJuZXh0L2hlYWRlcnNcIjtcbmltcG9ydCB7IHJlZGlyZWN0IH0gZnJvbSBcIm5leHQvbmF2aWdhdGlvblwiO1xuXG4vLyBBdXRoZW50aWNhdGlvblxuZXhwb3J0IGNvbnN0IGxvZ2luID0gYXN5bmMgKHsgZW1haWwsIHBhc3N3b3JkIH0pID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBvc3QoXG4gICAgICBgJHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19CQVNFX1VSTH1hcGkvYXV0aC9sb2dpbj9hZG1pbj10cnVlYCxcbiAgICAgIHsgZW1haWwsIHBhc3N3b3JkIH0sXG4gICAgICB7XG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgfSxcbiAgICAgIH1cbiAgICApO1xuXG4gICAgY29uc3QgeyBkYXRhIH0gPSByZXNwb25zZTtcblxuICAgIC8vIEV4dHJhY3QgYW5kIG1hbnVhbGx5IHNldCBjb29raWVzIGZyb20gcmVzcG9uc2VcbiAgICBjb25zdCBzZXRDb29raWVIZWFkZXIgPSByZXNwb25zZS5oZWFkZXJzW1wic2V0LWNvb2tpZVwiXTtcblxuICAgIGlmIChzZXRDb29raWVIZWFkZXIgJiYgQXJyYXkuaXNBcnJheShzZXRDb29raWVIZWFkZXIpKSB7XG4gICAgICBjb25zdCBjb29raWVTdG9yZSA9IGF3YWl0IGNvb2tpZXMoKTtcblxuICAgICAgc2V0Q29va2llSGVhZGVyLmZvckVhY2goKGNvb2tpZSkgPT4ge1xuICAgICAgICAvLyBQYXJzZSBjb29raWUgc3RyaW5nXG4gICAgICAgIGNvbnN0IHBhcnRzID0gY29va2llLnNwbGl0KFwiO1wiKVswXTtcbiAgICAgICAgY29uc3QgW25hbWUsIC4uLnZhbHVlUGFydHNdID0gcGFydHMuc3BsaXQoXCI9XCIpO1xuICAgICAgICBjb25zdCB2YWx1ZSA9IHZhbHVlUGFydHMuam9pbihcIj1cIik7XG5cbiAgICAgICAgaWYgKG5hbWUgJiYgdmFsdWUpIHtcbiAgICAgICAgICAvLyBTZXQgY29va2llIHdpdGggaHR0cE9ubHkgYW5kIHNlY3VyZSBmbGFnc1xuICAgICAgICAgIGNvb2tpZVN0b3JlLnNldChuYW1lLnRyaW0oKSwgdmFsdWUudHJpbSgpLCB7XG4gICAgICAgICAgICBodHRwT25seTogdHJ1ZSxcbiAgICAgICAgICAgIHNlY3VyZTogcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiLFxuICAgICAgICAgICAgc2FtZVNpdGU6IFwibGF4XCIsXG4gICAgICAgICAgICBwYXRoOiBcIi9cIixcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gT24gc3VjY2Vzc2Z1bCBsb2dpbiwgcmVkaXJlY3QgdG8gYWRtaW4gZGFzaGJvYXJkXG4gICAgcmVkaXJlY3QoXCIvZGFzaGJvYXJkL292ZXJ2aWV3XCIpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIC8vIElmIGl0J3MgYSByZWRpcmVjdCwgcmUtdGhyb3cgaXRcbiAgICBpZiAoXG4gICAgICBlcnJvci5tZXNzYWdlID09PSBcIk5FWFRfUkVESVJFQ1RcIiB8fFxuICAgICAgZXJyb3IuZGlnZXN0Py5zdGFydHNXaXRoKFwiTkVYVF9SRURJUkVDVFwiKVxuICAgICkge1xuICAgICAgdGhyb3cgZXJyb3I7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgbWVzc2FnZTogZXJyb3IucmVzcG9uc2U/LmRhdGE/Lm1lc3NhZ2UgfHwgXCJMb2dpbiBmYWlsZWRcIixcbiAgICB9O1xuICB9XG59O1xuXG5leHBvcnQgY29uc3QgbG9nb3V0ID0gYXN5bmMgKCkgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IGNvb2tpZVN0b3JlID0gYXdhaXQgY29va2llcygpO1xuICAgIGNvb2tpZVN0b3JlLmRlbGV0ZShcInRva2VuXCIpO1xuICAgIGNvb2tpZVN0b3JlLmRlbGV0ZShcInJlZnJlc2hUb2tlblwiKTtcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UgfTtcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IHJlZnJlc2hUb2tlblNlcnZlciA9IGFzeW5jICgpID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGF4aW9zLnBvc3QoXG4gICAgICBgJHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19CQVNFX1VSTH1hcGkvYXV0aC9yZWZyZXNoLXRva2VuYCxcbiAgICAgIHt9LFxuICAgICAge1xuICAgICAgICB3aXRoQ3JlZGVudGlhbHM6IHRydWUsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICBDb29raWU6IChhd2FpdCBjb29raWVzKCkpLnRvU3RyaW5nKCksIC8vIEZvcndhcmQgYWxsIGNvb2tpZXNcbiAgICAgICAgfSxcbiAgICAgIH1cbiAgICApO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIHN1Y2Nlc3M6IHRydWUsXG4gICAgICBkYXRhOiBkYXRhLmRhdGEsXG4gICAgICBtZXNzYWdlOiBcIlRva2VuIHJlZnJlc2hlZCBzdWNjZXNzZnVsbHlcIixcbiAgICB9O1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJTZXJ2ZXIgdG9rZW4gcmVmcmVzaCBlcnJvcjpcIiwgZXJyb3IpO1xuICAgIHJldHVybiB7XG4gICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgIG1lc3NhZ2U6IGVycm9yLnJlc3BvbnNlPy5kYXRhPy5tZXNzYWdlIHx8IFwiVG9rZW4gcmVmcmVzaCBmYWlsZWRcIixcbiAgICB9O1xuICB9XG59O1xuXG5jb25zdCBtYWtlQXV0aGVudGljYXRlZFJlcXVlc3QgPSBhc3luYyAodXJsLCBvcHRpb25zID0ge30pID0+IHtcbiAgY29uc3QgY29va2llU3RvcmUgPSBhd2FpdCBjb29raWVzKCk7XG5cbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zKHtcbiAgICAgIHVybCxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgQ29va2llOiBjb29raWVTdG9yZS50b1N0cmluZygpLFxuICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgLi4ub3B0aW9ucy5oZWFkZXJzLFxuICAgICAgfSxcbiAgICAgIHRpbWVvdXQ6IDMwMDAwLFxuICAgICAgd2l0aENyZWRlbnRpYWxzOiB0cnVlLFxuICAgICAgLi4ub3B0aW9ucyxcbiAgICB9KTtcblxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IHJlc3BvbnNlLmRhdGEgfTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAvLyBJZiA0MDEgYW5kIHdlIGhhdmVuJ3QgcmV0cmllZCB5ZXQsIHRyeSB0byByZWZyZXNoXG4gICAgaWYgKGVycm9yLnJlc3BvbnNlPy5zdGF0dXMgPT09IDQwMSAmJiAhb3B0aW9ucy5za2lwUmVmcmVzaCkge1xuICAgICAgY29uc29sZS5sb2coXCJUb2tlbiBleHBpcmVkLCBhdHRlbXB0aW5nIHJlZnJlc2guLi5cIik7XG5cbiAgICAgIGNvbnN0IHJlZnJlc2hSZXN1bHQgPSBhd2FpdCByZWZyZXNoVG9rZW5TZXJ2ZXIoKTtcblxuICAgICAgaWYgKHJlZnJlc2hSZXN1bHQuc3VjY2Vzcykge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGNvbnN0IHJldHJ5UmVzcG9uc2UgPSBhd2FpdCBheGlvcyh7XG4gICAgICAgICAgICB1cmwsXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgIENvb2tpZTogKGF3YWl0IGNvb2tpZXMoKSkudG9TdHJpbmcoKSxcbiAgICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgICAgICAgIC4uLm9wdGlvbnMuaGVhZGVycyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0aW1lb3V0OiAzMDAwMCxcbiAgICAgICAgICAgIHdpdGhDcmVkZW50aWFsczogdHJ1ZSxcbiAgICAgICAgICAgIC4uLm9wdGlvbnMsXG4gICAgICAgICAgICBza2lwUmVmcmVzaDogdHJ1ZSxcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IHJldHJ5UmVzcG9uc2UuZGF0YSB9O1xuICAgICAgICB9IGNhdGNoIChyZXRyeUVycm9yKSB7XG4gICAgICAgICAgLy8gVGhyb3cgYXhpb3MgZXJyb3IgYXMtaXMgc28gcmVzcG9uc2UgZGF0YSBpcyBwcmVzZXJ2ZWRcbiAgICAgICAgICB0aHJvdyByZXRyeUVycm9yO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gVGhyb3cgYXhpb3MgZXJyb3IgYXMtaXMgc28gcmVzcG9uc2UgZGF0YSBpcyBwcmVzZXJ2ZWRcbiAgICB0aHJvdyBlcnJvcjtcbiAgfVxufTtcbi8vIEdldCByZWZlcnJhbCBjb2RlcyB3aXRoIGZpbHRlcnNcbmV4cG9ydCBjb25zdCBnZXRSZWZlcnJhbENvZGVzID0gYXN5bmMgKHtcbiAgcGFnZSA9IDEsXG4gIGxpbWl0ID0gMTAsXG4gIGlzQWN0aXZlLFxuICBhc3NpZ25lZFN0YXR1cyxcbiAgc2VhcmNoLFxufSA9IHt9KSA9PiB7XG4gIGNvbnN0IHF1ZXJ5UGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcyh7XG4gICAgcGFnZTogcGFnZS50b1N0cmluZygpLFxuICAgIGxpbWl0OiBsaW1pdC50b1N0cmluZygpLFxuICAgIC4uLihpc0FjdGl2ZSAhPT0gdW5kZWZpbmVkICYmIHsgaXNBY3RpdmU6IGlzQWN0aXZlLnRvU3RyaW5nKCkgfSksXG4gICAgLi4uKGFzc2lnbmVkU3RhdHVzICYmIHsgYXNzaWduZWRTdGF0dXMgfSksXG4gICAgLi4uKHNlYXJjaCAmJiB7IHNlYXJjaCB9KSxcbiAgfSk7XG5cbiAgY29uc3QgcmVzdWx0ID0gYXdhaXQgbWFrZUF1dGhlbnRpY2F0ZWRSZXF1ZXN0KFxuICAgIGAke1xuICAgICAgcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQkFTRV9VUkxcbiAgICB9YXBpL2FkbWluL3JlZmVycmFsLWNvZGVzPyR7cXVlcnlQYXJhbXMudG9TdHJpbmcoKX1gLFxuICAgIHtcbiAgICAgIG1ldGhvZDogXCJHRVRcIixcbiAgICB9XG4gICk7XG5cbiAgaWYgKHJlc3VsdC5zdWNjZXNzKSB7XG4gICAgcmV0dXJuIHJlc3VsdC5kYXRhO1xuICB9XG5cbiAgdGhyb3cgbmV3IEVycm9yKFwiRmFpbGVkIHRvIGdldCByZWZlcnJhbCBjb2Rlc1wiKTtcbn07XG5cbi8vIEdldCB1c2VycyBmb3IgZHJvcGRvd24gc2VsZWN0aW9uXG5leHBvcnQgY29uc3QgZ2V0VXNlcnMgPSBhc3luYyAoe1xuICBwYWdlID0gMSxcbiAgbGltaXQgPSAxMDAsIC8vIEdldCBtb3JlIHVzZXJzIGZvciBkcm9wZG93blxuICB1c2VyVHlwZSxcbiAgc2VhcmNoLFxufSA9IHt9KSA9PiB7XG4gIGNvbnN0IHF1ZXJ5UGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcyh7XG4gICAgcGFnZTogcGFnZS50b1N0cmluZygpLFxuICAgIGxpbWl0OiBsaW1pdC50b1N0cmluZygpLFxuICAgIC4uLih1c2VyVHlwZSAmJiB7IHVzZXJUeXBlIH0pLFxuICAgIC4uLihzZWFyY2ggJiYgeyBzZWFyY2ggfSksXG4gIH0pO1xuXG4gIGNvbnN0IHJlc3VsdCA9IGF3YWl0IG1ha2VBdXRoZW50aWNhdGVkUmVxdWVzdChcbiAgICBgJHtcbiAgICAgIHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0JBU0VfVVJMXG4gICAgfWFwaS9hZG1pbi91c2Vycz8ke3F1ZXJ5UGFyYW1zLnRvU3RyaW5nKCl9YCxcbiAgICB7XG4gICAgICBtZXRob2Q6IFwiR0VUXCIsXG4gICAgfVxuICApO1xuXG4gIGlmIChyZXN1bHQuc3VjY2Vzcykge1xuICAgIHJldHVybiByZXN1bHQuZGF0YTtcbiAgfVxuXG4gIHRocm93IG5ldyBFcnJvcihcIkZhaWxlZCB0byBnZXQgdXNlcnNcIik7XG59O1xuXG4vLyBDcmVhdGUgbmV3IHJlZmVycmFsIGNvZGVcbmV4cG9ydCBjb25zdCBjcmVhdGVSZWZlcnJhbENvZGUgPSBhc3luYyAoe1xuICBjb2RlLFxuICBkZXNjcmlwdGlvbixcbiAgZXhwaXJlc0F0LFxuICBhc3NpZ25lZFRvVXNlcklkLFxufSkgPT4ge1xuICBjb25zdCByZXN1bHQgPSBhd2FpdCBtYWtlQXV0aGVudGljYXRlZFJlcXVlc3QoXG4gICAgYCR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQkFTRV9VUkx9YXBpL2FkbWluL3JlZmVycmFsLWNvZGVzYCxcbiAgICB7XG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgZGF0YToge1xuICAgICAgICBjb2RlLFxuICAgICAgICBkZXNjcmlwdGlvbixcbiAgICAgICAgZXhwaXJlc0F0LFxuICAgICAgICBhc3NpZ25lZFRvVXNlcklkOlxuICAgICAgICAgIGFzc2lnbmVkVG9Vc2VySWQgPT09IFwiYWRtaW5cIiA/IG51bGwgOiBhc3NpZ25lZFRvVXNlcklkLFxuICAgICAgfSxcbiAgICB9XG4gICk7XG5cbiAgaWYgKHJlc3VsdC5zdWNjZXNzKSB7XG4gICAgcmV0dXJuIHJlc3VsdC5kYXRhO1xuICB9XG5cbiAgdGhyb3cgbmV3IEVycm9yKFwiRmFpbGVkIHRvIGNyZWF0ZSByZWZlcnJhbCBjb2RlXCIpO1xufTtcblxuLy8gVXBkYXRlIHJlZmVycmFsIGNvZGVcbmV4cG9ydCBjb25zdCB1cGRhdGVSZWZlcnJhbENvZGUgPSBhc3luYyAoe1xuICBpZCxcbiAgY29kZSxcbiAgZGVzY3JpcHRpb24sXG4gIGV4cGlyZXNBdCxcbiAgaXNBY3RpdmUsXG59KSA9PiB7XG4gIGNvbnN0IHJlc3VsdCA9IGF3YWl0IG1ha2VBdXRoZW50aWNhdGVkUmVxdWVzdChcbiAgICBgJHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19CQVNFX1VSTH1hcGkvYWRtaW4vcmVmZXJyYWwtY29kZXMvJHtpZH1gLFxuICAgIHtcbiAgICAgIG1ldGhvZDogXCJQVVRcIixcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgY29kZSxcbiAgICAgICAgZGVzY3JpcHRpb24sXG4gICAgICAgIGV4cGlyZXNBdCxcbiAgICAgICAgaXNBY3RpdmUsXG4gICAgICB9LFxuICAgIH1cbiAgKTtcblxuICBpZiAocmVzdWx0LnN1Y2Nlc3MpIHtcbiAgICByZXR1cm4gcmVzdWx0LmRhdGE7XG4gIH1cblxuICB0aHJvdyBuZXcgRXJyb3IoXCJGYWlsZWQgdG8gdXBkYXRlIHJlZmVycmFsIGNvZGVcIik7XG59O1xuXG4vLyBEZWxldGUgcmVmZXJyYWwgY29kZVxuZXhwb3J0IGNvbnN0IGRlbGV0ZVJlZmVycmFsQ29kZSA9IGFzeW5jIChpZCkgPT4ge1xuICBjb25zdCByZXN1bHQgPSBhd2FpdCBtYWtlQXV0aGVudGljYXRlZFJlcXVlc3QoXG4gICAgYCR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQkFTRV9VUkx9YXBpL2FkbWluL3JlZmVycmFsLWNvZGVzLyR7aWR9YCxcbiAgICB7XG4gICAgICBtZXRob2Q6IFwiREVMRVRFXCIsXG4gICAgfVxuICApO1xuXG4gIGlmIChyZXN1bHQuc3VjY2Vzcykge1xuICAgIHJldHVybiByZXN1bHQuZGF0YTtcbiAgfVxuXG4gIHRocm93IG5ldyBFcnJvcihcIkZhaWxlZCB0byBkZWxldGUgcmVmZXJyYWwgY29kZVwiKTtcbn07XG5cbi8vIEFzc2lnbiByZWZlcnJhbCBjb2RlIHRvIHVzZXJcbmV4cG9ydCBjb25zdCBhc3NpZ25SZWZlcnJhbENvZGUgPSBhc3luYyAoeyBpZCwgdXNlcklkIH0pID0+IHtcbiAgdHJ5IHtcbiAgICBpZiAoIWlkIHx8ICF1c2VySWQpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgICBtZXNzYWdlOiBcIlJlZmVycmFsIGNvZGUgSUQgYW5kIHVzZXIgSUQgYXJlIHJlcXVpcmVkXCIsXG4gICAgICB9O1xuICAgIH1cblxuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IG1ha2VBdXRoZW50aWNhdGVkUmVxdWVzdChcbiAgICAgIGAke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0JBU0VfVVJMfWFwaS9hZG1pbi9yZWZlcnJhbC1jb2Rlcy8ke2lkfS9hc3NpZ25gLFxuICAgICAge1xuICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICBkYXRhOiB7IHVzZXJJZDogdXNlcklkLnRvU3RyaW5nKCkgfSwgLy8gRW5zdXJlIHVzZXJJZCBpcyBzdHJpbmdcbiAgICAgICAgdGltZW91dDogMTAwMDAsXG4gICAgICB9XG4gICAgKTtcblxuICAgIGlmIChyZXN1bHQuc3VjY2Vzcykge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgc3VjY2VzczogdHJ1ZSxcbiAgICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXG4gICAgICB9O1xuICAgIH1cblxuICAgIHRocm93IG5ldyBFcnJvcihcIkZhaWxlZCB0byBhc3NpZ24gcmVmZXJyYWwgY29kZVwiKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgaW4gYXNzaWduUmVmZXJyYWxDb2RlIEFQSTpcIiwgZXJyb3IpO1xuXG4gICAgbGV0IG1lc3NhZ2UgPSBcIkFuIHVuZXhwZWN0ZWQgZXJyb3Igb2NjdXJyZWRcIjtcblxuICAgIGlmIChlcnJvci5yZXNwb25zZSkge1xuICAgICAgbWVzc2FnZSA9XG4gICAgICAgIGVycm9yLnJlc3BvbnNlLmRhdGE/Lm1lc3NhZ2UgfHxcbiAgICAgICAgYFJlcXVlc3QgZmFpbGVkIHdpdGggc3RhdHVzICR7ZXJyb3IucmVzcG9uc2Uuc3RhdHVzfWA7XG4gICAgfSBlbHNlIGlmIChlcnJvci5yZXF1ZXN0KSB7XG4gICAgICBtZXNzYWdlID0gXCJOZXR3b3JrIGVycm9yLiBQbGVhc2UgY2hlY2sgeW91ciBjb25uZWN0aW9uIGFuZCB0cnkgYWdhaW4uXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIG1lc3NhZ2UgPSBlcnJvci5tZXNzYWdlIHx8IFwiQW4gdW5leHBlY3RlZCBlcnJvciBvY2N1cnJlZFwiO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgIG1lc3NhZ2UsXG4gICAgfTtcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IHVuYXNzaWduUmVmZXJyYWxDb2RlID0gYXN5bmMgKGlkKSA9PiB7XG4gIHRyeSB7XG4gICAgaWYgKCFpZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiUmVmZXJyYWwgY29kZSBJRCBpcyByZXF1aXJlZFwiKTtcbiAgICB9XG5cbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBtYWtlQXV0aGVudGljYXRlZFJlcXVlc3QoXG4gICAgICBgJHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19CQVNFX1VSTH1hcGkvYWRtaW4vcmVmZXJyYWwtY29kZXMvJHtpZH0vdW5hc3NpZ25gLFxuICAgICAge1xuICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICBkYXRhOiB7fSxcbiAgICAgICAgdGltZW91dDogMTAwMDAsXG4gICAgICB9XG4gICAgKTtcblxuICAgIGlmIChyZXN1bHQuc3VjY2Vzcykge1xuICAgICAgcmV0dXJuIHJlc3VsdC5kYXRhO1xuICAgIH1cblxuICAgIHRocm93IG5ldyBFcnJvcihcIkZhaWxlZCB0byB1bmFzc2lnbiByZWZlcnJhbCBjb2RlXCIpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBpbiB1bmFzc2lnblJlZmVycmFsQ29kZSBBUEk6XCIsIGVycm9yKTtcblxuICAgIGlmIChlcnJvci5yZXNwb25zZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBlcnJvci5yZXNwb25zZS5kYXRhPy5tZXNzYWdlIHx8IFwiRmFpbGVkIHRvIHVuYXNzaWduIHJlZmVycmFsIGNvZGVcIlxuICAgICAgKTtcbiAgICB9IGVsc2UgaWYgKGVycm9yLnJlcXVlc3QpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgXCJOZXR3b3JrIGVycm9yLiBQbGVhc2UgY2hlY2sgeW91ciBjb25uZWN0aW9uIGFuZCB0cnkgYWdhaW4uXCJcbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihlcnJvci5tZXNzYWdlIHx8IFwiQW4gdW5leHBlY3RlZCBlcnJvciBvY2N1cnJlZFwiKTtcbiAgICB9XG4gIH1cbn07XG5cbi8vIEdldCByZWZlcnJhbCBjb2RlIGJ5IElEXG5leHBvcnQgY29uc3QgZ2V0UmVmZXJyYWxDb2RlQnlJZCA9IGFzeW5jIChpZCkgPT4ge1xuICBjb25zdCByZXN1bHQgPSBhd2FpdCBtYWtlQXV0aGVudGljYXRlZFJlcXVlc3QoXG4gICAgYCR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQkFTRV9VUkx9YXBpL2FkbWluL3JlZmVycmFsLWNvZGVzLyR7aWR9YCxcbiAgICB7XG4gICAgICBtZXRob2Q6IFwiR0VUXCIsXG4gICAgfVxuICApO1xuXG4gIGlmIChyZXN1bHQuc3VjY2Vzcykge1xuICAgIHJldHVybiByZXN1bHQuZGF0YTtcbiAgfVxuXG4gIHRocm93IG5ldyBFcnJvcihcIkZhaWxlZCB0byBnZXQgcmVmZXJyYWwgY29kZVwiKTtcbn07XG5cbi8vIEdldCByZWZlcnJhbCBhbmFseXRpY3NcbmV4cG9ydCBjb25zdCBnZXRSZWZlcnJhbEFuYWx5dGljcyA9IGFzeW5jICh7XG4gIHN0YXJ0RGF0ZSxcbiAgZW5kRGF0ZSxcbiAgYWRtaW5JZCxcbn0gPSB7fSkgPT4ge1xuICBjb25zdCBxdWVyeVBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoe1xuICAgIC4uLihzdGFydERhdGUgJiYgeyBzdGFydERhdGUgfSksXG4gICAgLi4uKGVuZERhdGUgJiYgeyBlbmREYXRlIH0pLFxuICAgIC4uLihhZG1pbklkICYmIHsgYWRtaW5JZCB9KSxcbiAgfSk7XG5cbiAgY29uc3QgcmVzdWx0ID0gYXdhaXQgbWFrZUF1dGhlbnRpY2F0ZWRSZXF1ZXN0KFxuICAgIGAke1xuICAgICAgcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQkFTRV9VUkxcbiAgICB9YXBpL2FkbWluL3JlZmVycmFsLWFuYWx5dGljcz8ke3F1ZXJ5UGFyYW1zLnRvU3RyaW5nKCl9YCxcbiAgICB7XG4gICAgICBtZXRob2Q6IFwiR0VUXCIsXG4gICAgfVxuICApO1xuXG4gIGlmIChyZXN1bHQuc3VjY2Vzcykge1xuICAgIHJldHVybiByZXN1bHQuZGF0YTtcbiAgfVxuXG4gIHRocm93IG5ldyBFcnJvcihcIkZhaWxlZCB0byBnZXQgcmVmZXJyYWwgYW5hbHl0aWNzXCIpO1xufTtcblxuLy8gR2V0IHJlZmVycmFsIHVzYWdlIGRhdGFcbmV4cG9ydCBjb25zdCBnZXRSZWZlcnJhbFVzYWdlID0gYXN5bmMgKHtcbiAgcGFnZSA9IDEsXG4gIGxpbWl0ID0gMTAsXG4gIHJlZmVycmFsQ29kZSxcbiAgdXNlcklkLFxufSA9IHt9KSA9PiB7XG4gIGNvbnN0IHF1ZXJ5UGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcyh7XG4gICAgcGFnZTogcGFnZS50b1N0cmluZygpLFxuICAgIGxpbWl0OiBsaW1pdC50b1N0cmluZygpLFxuICAgIC4uLihyZWZlcnJhbENvZGUgJiYgeyByZWZlcnJhbENvZGUgfSksXG4gICAgLi4uKHVzZXJJZCAmJiB7IHVzZXJJZCB9KSxcbiAgfSk7XG5cbiAgY29uc3QgcmVzdWx0ID0gYXdhaXQgbWFrZUF1dGhlbnRpY2F0ZWRSZXF1ZXN0KFxuICAgIGAke1xuICAgICAgcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQkFTRV9VUkxcbiAgICB9YXBpL2FkbWluL3JlZmVycmFsLXVzYWdlPyR7cXVlcnlQYXJhbXMudG9TdHJpbmcoKX1gLFxuICAgIHtcbiAgICAgIG1ldGhvZDogXCJHRVRcIixcbiAgICB9XG4gICk7XG5cbiAgaWYgKHJlc3VsdC5zdWNjZXNzKSB7XG4gICAgcmV0dXJuIHJlc3VsdC5kYXRhO1xuICB9XG5cbiAgdGhyb3cgbmV3IEVycm9yKFwiRmFpbGVkIHRvIGdldCByZWZlcnJhbCB1c2FnZVwiKTtcbn07XG5cbi8vIEdldCB1c2VyIGJ5IElEXG5leHBvcnQgY29uc3QgZ2V0VXNlckJ5SWQgPSBhc3luYyAoaWQpID0+IHtcbiAgY29uc3QgcmVzdWx0ID0gYXdhaXQgbWFrZUF1dGhlbnRpY2F0ZWRSZXF1ZXN0KFxuICAgIGAke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0JBU0VfVVJMfWFwaS9hZG1pbi91c2Vycy8ke2lkfWAsXG4gICAge1xuICAgICAgbWV0aG9kOiBcIkdFVFwiLFxuICAgIH1cbiAgKTtcblxuICBpZiAocmVzdWx0LnN1Y2Nlc3MpIHtcbiAgICByZXR1cm4gcmVzdWx0LmRhdGE7XG4gIH1cblxuICB0aHJvdyBuZXcgRXJyb3IoXCJGYWlsZWQgdG8gZ2V0IHVzZXJcIik7XG59O1xuXG4vLyBVcGRhdGUgdXNlciBwb2ludHNcbmV4cG9ydCBjb25zdCB1cGRhdGVVc2VyUG9pbnRzID0gYXN5bmMgKHsgaWQsIGFtb3VudCwgdHlwZSwgZGVzY3JpcHRpb24gfSkgPT4ge1xuICBjb25zdCByZXN1bHQgPSBhd2FpdCBtYWtlQXV0aGVudGljYXRlZFJlcXVlc3QoXG4gICAgYCR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQkFTRV9VUkx9YXBpL2FkbWluL3VzZXJzLyR7aWR9L3BvaW50c2AsXG4gICAge1xuICAgICAgbWV0aG9kOiBcIlBVVFwiLFxuICAgICAgZGF0YToge1xuICAgICAgICBhbW91bnQsXG4gICAgICAgIHR5cGUsXG4gICAgICAgIGRlc2NyaXB0aW9uLFxuICAgICAgfSxcbiAgICB9XG4gICk7XG5cbiAgaWYgKHJlc3VsdC5zdWNjZXNzKSB7XG4gICAgcmV0dXJuIHJlc3VsdC5kYXRhO1xuICB9XG5cbiAgdGhyb3cgbmV3IEVycm9yKFwiRmFpbGVkIHRvIHVwZGF0ZSB1c2VyIHBvaW50c1wiKTtcbn07XG5cbi8vIEJ1bGsgY3JlYXRlIHJlZmVycmFsIGNvZGVzXG5leHBvcnQgY29uc3QgYnVsa0NyZWF0ZVJlZmVycmFsQ29kZXMgPSBhc3luYyAoY29kZXMpID0+IHtcbiAgY29uc3QgcmVzdWx0ID0gYXdhaXQgbWFrZUF1dGhlbnRpY2F0ZWRSZXF1ZXN0KFxuICAgIGAke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0JBU0VfVVJMfWFwaS9hZG1pbi9yZWZlcnJhbC1jb2Rlcy9idWxrLWNyZWF0ZWAsXG4gICAge1xuICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgIGRhdGE6IHsgY29kZXMgfSxcbiAgICB9XG4gICk7XG5cbiAgaWYgKHJlc3VsdC5zdWNjZXNzKSB7XG4gICAgcmV0dXJuIHJlc3VsdC5kYXRhO1xuICB9XG5cbiAgdGhyb3cgbmV3IEVycm9yKFwiRmFpbGVkIHRvIGJ1bGsgY3JlYXRlIHJlZmVycmFsIGNvZGVzXCIpO1xufTtcblxuLy8gQnVsayBhc3NpZ24gcmVmZXJyYWwgY29kZXNcbmV4cG9ydCBjb25zdCBidWxrQXNzaWduUmVmZXJyYWxDb2RlcyA9IGFzeW5jIChhc3NpZ25tZW50cykgPT4ge1xuICBjb25zdCByZXN1bHQgPSBhd2FpdCBtYWtlQXV0aGVudGljYXRlZFJlcXVlc3QoXG4gICAgYCR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQkFTRV9VUkx9YXBpL2FkbWluL3JlZmVycmFsLWNvZGVzL2J1bGstYXNzaWduYCxcbiAgICB7XG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgZGF0YTogeyBhc3NpZ25tZW50cyB9LFxuICAgIH1cbiAgKTtcblxuICBpZiAocmVzdWx0LnN1Y2Nlc3MpIHtcbiAgICByZXR1cm4gcmVzdWx0LmRhdGE7XG4gIH1cblxuICB0aHJvdyBuZXcgRXJyb3IoXCJGYWlsZWQgdG8gYnVsayBhc3NpZ24gcmVmZXJyYWwgY29kZXNcIik7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0UGVuZGluZ1VzZXJzID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCByZXN1bHQgPSBhd2FpdCBtYWtlQXV0aGVudGljYXRlZFJlcXVlc3QoXG4gICAgYCR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQkFTRV9VUkx9YXBpL2FkbWluL3BlbmRpbmcvdXNlcnNgLFxuICAgIHtcbiAgICAgIG1ldGhvZDogXCJHRVRcIixcbiAgICB9XG4gICk7XG5cbiAgaWYgKHJlc3VsdC5zdWNjZXNzKSB7XG4gICAgcmV0dXJuIHJlc3VsdC5kYXRhO1xuICB9XG5cbiAgdGhyb3cgbmV3IEVycm9yKFwiRmFpbGVkIHRvIGdldCBwZW5kaW5nIHVzZXJzXCIpO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldEFwcHJvdmVkVXNlcnMgPSBhc3luYyAoe1xuICBwYWdlID0gMSxcbiAgbGltaXQgPSAxMCxcbiAgc2VhcmNoID0gXCJcIixcbn0gPSB7fSkgPT4ge1xuICBjb25zdCBwYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHtcbiAgICBwYWdlOiBwYWdlLnRvU3RyaW5nKCksXG4gICAgbGltaXQ6IGxpbWl0LnRvU3RyaW5nKCksXG4gICAgLi4uKHNlYXJjaCAmJiB7IHNlYXJjaCB9KSxcbiAgfSk7XG5cbiAgY29uc3QgcmVzdWx0ID0gYXdhaXQgbWFrZUF1dGhlbnRpY2F0ZWRSZXF1ZXN0KFxuICAgIGAke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0JBU0VfVVJMfWFwaS9hZG1pbi9hcHByb3ZlZC91c2Vycz8ke3BhcmFtc31gLFxuICAgIHtcbiAgICAgIG1ldGhvZDogXCJHRVRcIixcbiAgICB9XG4gICk7XG5cbiAgaWYgKHJlc3VsdC5zdWNjZXNzKSB7XG4gICAgcmV0dXJuIHJlc3VsdC5kYXRhO1xuICB9XG5cbiAgdGhyb3cgbmV3IEVycm9yKFwiRmFpbGVkIHRvIGdldCBhcHByb3ZlZCB1c2Vyc1wiKTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRVc2VyUmVmZXJyYWxVc2FnZSA9IGFzeW5jICh7XG4gIHVzZXJJZCxcbiAgcGFnZSA9IDEsXG4gIGxpbWl0ID0gNTAsXG59ID0ge30pID0+IHtcbiAgY29uc3QgcGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcyh7XG4gICAgcGFnZTogcGFnZS50b1N0cmluZygpLFxuICAgIGxpbWl0OiBsaW1pdC50b1N0cmluZygpLFxuICB9KTtcblxuICBjb25zdCByZXN1bHQgPSBhd2FpdCBtYWtlQXV0aGVudGljYXRlZFJlcXVlc3QoXG4gICAgYCR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQkFTRV9VUkx9YXBpL2FkbWluL3VzZXJzLyR7dXNlcklkfS9yZWZlcnJhbC11c2FnZT8ke3BhcmFtc31gLFxuICAgIHtcbiAgICAgIG1ldGhvZDogXCJHRVRcIixcbiAgICB9XG4gICk7XG5cbiAgaWYgKHJlc3VsdC5zdWNjZXNzKSB7XG4gICAgcmV0dXJuIHJlc3VsdC5kYXRhO1xuICB9XG5cbiAgdGhyb3cgbmV3IEVycm9yKFwiRmFpbGVkIHRvIGdldCB1c2VyIHJlZmVycmFsIHVzYWdlXCIpO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldFJlamVjdGVkVXNlcnMgPSBhc3luYyAoe1xuICBwYWdlID0gMSxcbiAgbGltaXQgPSAxMCxcbiAgc2VhcmNoID0gXCJcIixcbiAgc3RhdHVzID0gXCJhbGxcIixcbn0gPSB7fSkgPT4ge1xuICBjb25zdCBwYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHtcbiAgICBwYWdlOiBwYWdlLnRvU3RyaW5nKCksXG4gICAgbGltaXQ6IGxpbWl0LnRvU3RyaW5nKCksXG4gICAgc3RhdHVzLFxuICAgIC4uLihzZWFyY2ggJiYgeyBzZWFyY2ggfSksXG4gIH0pO1xuXG4gIGNvbnN0IHJlc3VsdCA9IGF3YWl0IG1ha2VBdXRoZW50aWNhdGVkUmVxdWVzdChcbiAgICBgJHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19CQVNFX1VSTH1hcGkvYWRtaW4vcmVqZWN0ZWQtdXNlcnM/JHtwYXJhbXN9YCxcbiAgICB7XG4gICAgICBtZXRob2Q6IFwiR0VUXCIsXG4gICAgfVxuICApO1xuXG4gIGlmIChyZXN1bHQuc3VjY2Vzcykge1xuICAgIHJldHVybiByZXN1bHQuZGF0YTtcbiAgfVxuXG4gIHRocm93IG5ldyBFcnJvcihcIkZhaWxlZCB0byBnZXQgcmVqZWN0ZWQgdXNlcnNcIik7XG59O1xuXG4vLyBHRVQgYWxsIHVzZXJzIHdpdGggc3RhdHVzXG5leHBvcnQgY29uc3QgZ2V0QWxsVXNlcnNXaXRoU3RhdHVzID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCByZXN1bHQgPSBhd2FpdCBtYWtlQXV0aGVudGljYXRlZFJlcXVlc3QoXG4gICAgYCR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQkFTRV9VUkx9YXBpL2FkbWluL3VzZXJzL3N0YXR1cy9hbGxgLFxuICAgIHtcbiAgICAgIG1ldGhvZDogXCJHRVRcIixcbiAgICB9XG4gICk7XG5cbiAgaWYgKHJlc3VsdC5zdWNjZXNzKSB7XG4gICAgcmV0dXJuIHJlc3VsdC5kYXRhO1xuICB9XG5cbiAgdGhyb3cgbmV3IEVycm9yKFwiRmFpbGVkIHRvIGdldCBhbGwgdXNlcnMgd2l0aCBzdGF0dXNcIik7XG59O1xuXG5leHBvcnQgY29uc3QgYXBwcm92ZVVzZXIgPSBhc3luYyAodXNlcklkKSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgbWFrZUF1dGhlbnRpY2F0ZWRSZXF1ZXN0KFxuICAgICAgYCR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQkFTRV9VUkx9YXBpL2FkbWluL3VzZXJzLyR7dXNlcklkfS9hcHByb3ZlYCxcbiAgICAgIHtcbiAgICAgICAgbWV0aG9kOiBcIlBBVENIXCIsXG4gICAgICAgIGRhdGE6IHt9LFxuICAgICAgfVxuICAgICk7XG5cbiAgICAvLyBJZiBzdWNjZXNzZnVsLCByZXR1cm4gdGhlIHJlc3VsdFxuICAgIHJldHVybiByZXN1bHQ7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5sb2coXCJSYXcgZXJyb3IgaW4gYXBwcm92ZVVzZXI6XCIsIGVycm9yKTtcbiAgICBjb25zb2xlLmxvZyhcIkF4aW9zIHJlc3BvbnNlOlwiLCBlcnJvci5yZXNwb25zZSk7XG4gICAgY29uc29sZS5sb2coXCJBeGlvcyByZXNwb25zZSBkYXRhOlwiLCBlcnJvci5yZXNwb25zZT8uZGF0YSk7XG5cbiAgICAvLyBBeGlvcyBlcnJvcnMgaGF2ZSB0aGUgcmVzcG9uc2UgaW4gZXJyb3IucmVzcG9uc2VcbiAgICAvLyBXZSBuZWVkIHRvIHRocm93IGFuIGVycm9yIHRoYXQgcHJlc2VydmVzIHRoaXMgc3RydWN0dXJlXG4gICAgY29uc3QgZW5oYW5jZWRFcnJvciA9IG5ldyBFcnJvcihcbiAgICAgIGVycm9yLnJlc3BvbnNlPy5kYXRhPy5tZXNzYWdlIHx8IGVycm9yLm1lc3NhZ2UgfHwgXCJGYWlsZWQgdG8gYXBwcm92ZSB1c2VyXCJcbiAgICApO1xuXG4gICAgLy8gUHJlc2VydmUgdGhlIGF4aW9zIHJlc3BvbnNlIHN0cnVjdHVyZVxuICAgIGVuaGFuY2VkRXJyb3IucmVzcG9uc2UgPSBlcnJvci5yZXNwb25zZTtcblxuICAgIHRocm93IGVuaGFuY2VkRXJyb3I7XG4gIH1cbn07XG5cbi8vIFBBVENIIHJlamVjdCBzaW5nbGUgdXNlclxuZXhwb3J0IGNvbnN0IHJlamVjdFVzZXIgPSBhc3luYyAodXNlcklkKSA9PiB7XG4gIGNvbnN0IHJlc3VsdCA9IGF3YWl0IG1ha2VBdXRoZW50aWNhdGVkUmVxdWVzdChcbiAgICBgJHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19CQVNFX1VSTH1hcGkvYWRtaW4vdXNlcnMvJHt1c2VySWR9L3JlamVjdGAsXG4gICAge1xuICAgICAgbWV0aG9kOiBcIlBBVENIXCIsXG4gICAgICBkYXRhOiB7fSxcbiAgICB9XG4gICk7XG5cbiAgaWYgKHJlc3VsdC5zdWNjZXNzKSB7XG4gICAgcmV0dXJuIHJlc3VsdC5kYXRhO1xuICB9XG5cbiAgdGhyb3cgbmV3IEVycm9yKFwiRmFpbGVkIHRvIHJlamVjdCB1c2VyXCIpO1xufTtcblxuLy8gUEFUQ0ggYnVsayB1cGRhdGUgdXNlciBzdGF0dXNcbmV4cG9ydCBjb25zdCBidWxrVXBkYXRlVXNlclN0YXR1cyA9IGFzeW5jICh7IHVzZXJJZHMsIHN0YXR1cyB9KSA9PiB7XG4gIGNvbnN0IHJlc3VsdCA9IGF3YWl0IG1ha2VBdXRoZW50aWNhdGVkUmVxdWVzdChcbiAgICBgJHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19CQVNFX1VSTH1hcGkvYWRtaW4vdXNlcnMvYnVsay11cGRhdGUtc3RhdHVzYCxcbiAgICB7XG4gICAgICBtZXRob2Q6IFwiUEFUQ0hcIixcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgdXNlcklkcyxcbiAgICAgICAgc3RhdHVzLFxuICAgICAgfSxcbiAgICB9XG4gICk7XG5cbiAgaWYgKHJlc3VsdC5zdWNjZXNzKSB7XG4gICAgcmV0dXJuIHJlc3VsdC5kYXRhO1xuICB9XG5cbiAgdGhyb3cgbmV3IEVycm9yKFwiRmFpbGVkIHRvIGJ1bGsgdXBkYXRlIHVzZXIgc3RhdHVzXCIpO1xufTtcblxuZXhwb3J0IGNvbnN0IGRlbGV0ZVVzZXIgPSBhc3luYyAodXNlcklkKSA9PiB7XG4gIGNvbnN0IHJlc3VsdCA9IGF3YWl0IG1ha2VBdXRoZW50aWNhdGVkUmVxdWVzdChcbiAgICBgJHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19CQVNFX1VSTH1hcGkvYWRtaW4vdXNlcnMvZGVsZXRlLyR7dXNlcklkfWAsXG4gICAge1xuICAgICAgbWV0aG9kOiBcIkRFTEVURVwiLFxuICAgIH1cbiAgKTtcblxuICBpZiAocmVzdWx0LnN1Y2Nlc3MpIHtcbiAgICByZXR1cm4gcmVzdWx0LmRhdGE7XG4gIH1cblxuICB0aHJvdyBuZXcgRXJyb3IoXCJGYWlsZWQgdG8gZGVsZXRlIHVzZXJcIik7XG59O1xuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJ1UkE0aUJhIn0=
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/data:cd63d9 [app-client] (ecmascript) <text/javascript>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
/* __next_internal_action_entry_do_not_use__ [{"7f2811cc40e639d3b5cbf529c06b8c3b74c43b9e76":"rejectUser"},"action.js",""] */ __turbopack_context__.s({
    "rejectUser": (()=>rejectUser)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
"use turbopack no side effects";
;
var rejectUser = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("7f2811cc40e639d3b5cbf529c06b8c3b74c43b9e76", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "rejectUser"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYWN0aW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHNlcnZlclwiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IHsgY29va2llcyB9IGZyb20gXCJuZXh0L2hlYWRlcnNcIjtcbmltcG9ydCB7IHJlZGlyZWN0IH0gZnJvbSBcIm5leHQvbmF2aWdhdGlvblwiO1xuXG4vLyBBdXRoZW50aWNhdGlvblxuZXhwb3J0IGNvbnN0IGxvZ2luID0gYXN5bmMgKHsgZW1haWwsIHBhc3N3b3JkIH0pID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBvc3QoXG4gICAgICBgJHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19CQVNFX1VSTH1hcGkvYXV0aC9sb2dpbj9hZG1pbj10cnVlYCxcbiAgICAgIHsgZW1haWwsIHBhc3N3b3JkIH0sXG4gICAgICB7XG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgfSxcbiAgICAgIH1cbiAgICApO1xuXG4gICAgY29uc3QgeyBkYXRhIH0gPSByZXNwb25zZTtcblxuICAgIC8vIEV4dHJhY3QgYW5kIG1hbnVhbGx5IHNldCBjb29raWVzIGZyb20gcmVzcG9uc2VcbiAgICBjb25zdCBzZXRDb29raWVIZWFkZXIgPSByZXNwb25zZS5oZWFkZXJzW1wic2V0LWNvb2tpZVwiXTtcblxuICAgIGlmIChzZXRDb29raWVIZWFkZXIgJiYgQXJyYXkuaXNBcnJheShzZXRDb29raWVIZWFkZXIpKSB7XG4gICAgICBjb25zdCBjb29raWVTdG9yZSA9IGF3YWl0IGNvb2tpZXMoKTtcblxuICAgICAgc2V0Q29va2llSGVhZGVyLmZvckVhY2goKGNvb2tpZSkgPT4ge1xuICAgICAgICAvLyBQYXJzZSBjb29raWUgc3RyaW5nXG4gICAgICAgIGNvbnN0IHBhcnRzID0gY29va2llLnNwbGl0KFwiO1wiKVswXTtcbiAgICAgICAgY29uc3QgW25hbWUsIC4uLnZhbHVlUGFydHNdID0gcGFydHMuc3BsaXQoXCI9XCIpO1xuICAgICAgICBjb25zdCB2YWx1ZSA9IHZhbHVlUGFydHMuam9pbihcIj1cIik7XG5cbiAgICAgICAgaWYgKG5hbWUgJiYgdmFsdWUpIHtcbiAgICAgICAgICAvLyBTZXQgY29va2llIHdpdGggaHR0cE9ubHkgYW5kIHNlY3VyZSBmbGFnc1xuICAgICAgICAgIGNvb2tpZVN0b3JlLnNldChuYW1lLnRyaW0oKSwgdmFsdWUudHJpbSgpLCB7XG4gICAgICAgICAgICBodHRwT25seTogdHJ1ZSxcbiAgICAgICAgICAgIHNlY3VyZTogcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiLFxuICAgICAgICAgICAgc2FtZVNpdGU6IFwibGF4XCIsXG4gICAgICAgICAgICBwYXRoOiBcIi9cIixcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gT24gc3VjY2Vzc2Z1bCBsb2dpbiwgcmVkaXJlY3QgdG8gYWRtaW4gZGFzaGJvYXJkXG4gICAgcmVkaXJlY3QoXCIvZGFzaGJvYXJkL292ZXJ2aWV3XCIpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIC8vIElmIGl0J3MgYSByZWRpcmVjdCwgcmUtdGhyb3cgaXRcbiAgICBpZiAoXG4gICAgICBlcnJvci5tZXNzYWdlID09PSBcIk5FWFRfUkVESVJFQ1RcIiB8fFxuICAgICAgZXJyb3IuZGlnZXN0Py5zdGFydHNXaXRoKFwiTkVYVF9SRURJUkVDVFwiKVxuICAgICkge1xuICAgICAgdGhyb3cgZXJyb3I7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgbWVzc2FnZTogZXJyb3IucmVzcG9uc2U/LmRhdGE/Lm1lc3NhZ2UgfHwgXCJMb2dpbiBmYWlsZWRcIixcbiAgICB9O1xuICB9XG59O1xuXG5leHBvcnQgY29uc3QgbG9nb3V0ID0gYXN5bmMgKCkgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IGNvb2tpZVN0b3JlID0gYXdhaXQgY29va2llcygpO1xuICAgIGNvb2tpZVN0b3JlLmRlbGV0ZShcInRva2VuXCIpO1xuICAgIGNvb2tpZVN0b3JlLmRlbGV0ZShcInJlZnJlc2hUb2tlblwiKTtcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UgfTtcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IHJlZnJlc2hUb2tlblNlcnZlciA9IGFzeW5jICgpID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGF4aW9zLnBvc3QoXG4gICAgICBgJHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19CQVNFX1VSTH1hcGkvYXV0aC9yZWZyZXNoLXRva2VuYCxcbiAgICAgIHt9LFxuICAgICAge1xuICAgICAgICB3aXRoQ3JlZGVudGlhbHM6IHRydWUsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICBDb29raWU6IChhd2FpdCBjb29raWVzKCkpLnRvU3RyaW5nKCksIC8vIEZvcndhcmQgYWxsIGNvb2tpZXNcbiAgICAgICAgfSxcbiAgICAgIH1cbiAgICApO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIHN1Y2Nlc3M6IHRydWUsXG4gICAgICBkYXRhOiBkYXRhLmRhdGEsXG4gICAgICBtZXNzYWdlOiBcIlRva2VuIHJlZnJlc2hlZCBzdWNjZXNzZnVsbHlcIixcbiAgICB9O1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJTZXJ2ZXIgdG9rZW4gcmVmcmVzaCBlcnJvcjpcIiwgZXJyb3IpO1xuICAgIHJldHVybiB7XG4gICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgIG1lc3NhZ2U6IGVycm9yLnJlc3BvbnNlPy5kYXRhPy5tZXNzYWdlIHx8IFwiVG9rZW4gcmVmcmVzaCBmYWlsZWRcIixcbiAgICB9O1xuICB9XG59O1xuXG5jb25zdCBtYWtlQXV0aGVudGljYXRlZFJlcXVlc3QgPSBhc3luYyAodXJsLCBvcHRpb25zID0ge30pID0+IHtcbiAgY29uc3QgY29va2llU3RvcmUgPSBhd2FpdCBjb29raWVzKCk7XG5cbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zKHtcbiAgICAgIHVybCxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgQ29va2llOiBjb29raWVTdG9yZS50b1N0cmluZygpLFxuICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgLi4ub3B0aW9ucy5oZWFkZXJzLFxuICAgICAgfSxcbiAgICAgIHRpbWVvdXQ6IDMwMDAwLFxuICAgICAgd2l0aENyZWRlbnRpYWxzOiB0cnVlLFxuICAgICAgLi4ub3B0aW9ucyxcbiAgICB9KTtcblxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IHJlc3BvbnNlLmRhdGEgfTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAvLyBJZiA0MDEgYW5kIHdlIGhhdmVuJ3QgcmV0cmllZCB5ZXQsIHRyeSB0byByZWZyZXNoXG4gICAgaWYgKGVycm9yLnJlc3BvbnNlPy5zdGF0dXMgPT09IDQwMSAmJiAhb3B0aW9ucy5za2lwUmVmcmVzaCkge1xuICAgICAgY29uc29sZS5sb2coXCJUb2tlbiBleHBpcmVkLCBhdHRlbXB0aW5nIHJlZnJlc2guLi5cIik7XG5cbiAgICAgIGNvbnN0IHJlZnJlc2hSZXN1bHQgPSBhd2FpdCByZWZyZXNoVG9rZW5TZXJ2ZXIoKTtcblxuICAgICAgaWYgKHJlZnJlc2hSZXN1bHQuc3VjY2Vzcykge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGNvbnN0IHJldHJ5UmVzcG9uc2UgPSBhd2FpdCBheGlvcyh7XG4gICAgICAgICAgICB1cmwsXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgIENvb2tpZTogKGF3YWl0IGNvb2tpZXMoKSkudG9TdHJpbmcoKSxcbiAgICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgICAgICAgIC4uLm9wdGlvbnMuaGVhZGVycyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0aW1lb3V0OiAzMDAwMCxcbiAgICAgICAgICAgIHdpdGhDcmVkZW50aWFsczogdHJ1ZSxcbiAgICAgICAgICAgIC4uLm9wdGlvbnMsXG4gICAgICAgICAgICBza2lwUmVmcmVzaDogdHJ1ZSxcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IHJldHJ5UmVzcG9uc2UuZGF0YSB9O1xuICAgICAgICB9IGNhdGNoIChyZXRyeUVycm9yKSB7XG4gICAgICAgICAgLy8gVGhyb3cgYXhpb3MgZXJyb3IgYXMtaXMgc28gcmVzcG9uc2UgZGF0YSBpcyBwcmVzZXJ2ZWRcbiAgICAgICAgICB0aHJvdyByZXRyeUVycm9yO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gVGhyb3cgYXhpb3MgZXJyb3IgYXMtaXMgc28gcmVzcG9uc2UgZGF0YSBpcyBwcmVzZXJ2ZWRcbiAgICB0aHJvdyBlcnJvcjtcbiAgfVxufTtcbi8vIEdldCByZWZlcnJhbCBjb2RlcyB3aXRoIGZpbHRlcnNcbmV4cG9ydCBjb25zdCBnZXRSZWZlcnJhbENvZGVzID0gYXN5bmMgKHtcbiAgcGFnZSA9IDEsXG4gIGxpbWl0ID0gMTAsXG4gIGlzQWN0aXZlLFxuICBhc3NpZ25lZFN0YXR1cyxcbiAgc2VhcmNoLFxufSA9IHt9KSA9PiB7XG4gIGNvbnN0IHF1ZXJ5UGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcyh7XG4gICAgcGFnZTogcGFnZS50b1N0cmluZygpLFxuICAgIGxpbWl0OiBsaW1pdC50b1N0cmluZygpLFxuICAgIC4uLihpc0FjdGl2ZSAhPT0gdW5kZWZpbmVkICYmIHsgaXNBY3RpdmU6IGlzQWN0aXZlLnRvU3RyaW5nKCkgfSksXG4gICAgLi4uKGFzc2lnbmVkU3RhdHVzICYmIHsgYXNzaWduZWRTdGF0dXMgfSksXG4gICAgLi4uKHNlYXJjaCAmJiB7IHNlYXJjaCB9KSxcbiAgfSk7XG5cbiAgY29uc3QgcmVzdWx0ID0gYXdhaXQgbWFrZUF1dGhlbnRpY2F0ZWRSZXF1ZXN0KFxuICAgIGAke1xuICAgICAgcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQkFTRV9VUkxcbiAgICB9YXBpL2FkbWluL3JlZmVycmFsLWNvZGVzPyR7cXVlcnlQYXJhbXMudG9TdHJpbmcoKX1gLFxuICAgIHtcbiAgICAgIG1ldGhvZDogXCJHRVRcIixcbiAgICB9XG4gICk7XG5cbiAgaWYgKHJlc3VsdC5zdWNjZXNzKSB7XG4gICAgcmV0dXJuIHJlc3VsdC5kYXRhO1xuICB9XG5cbiAgdGhyb3cgbmV3IEVycm9yKFwiRmFpbGVkIHRvIGdldCByZWZlcnJhbCBjb2Rlc1wiKTtcbn07XG5cbi8vIEdldCB1c2VycyBmb3IgZHJvcGRvd24gc2VsZWN0aW9uXG5leHBvcnQgY29uc3QgZ2V0VXNlcnMgPSBhc3luYyAoe1xuICBwYWdlID0gMSxcbiAgbGltaXQgPSAxMDAsIC8vIEdldCBtb3JlIHVzZXJzIGZvciBkcm9wZG93blxuICB1c2VyVHlwZSxcbiAgc2VhcmNoLFxufSA9IHt9KSA9PiB7XG4gIGNvbnN0IHF1ZXJ5UGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcyh7XG4gICAgcGFnZTogcGFnZS50b1N0cmluZygpLFxuICAgIGxpbWl0OiBsaW1pdC50b1N0cmluZygpLFxuICAgIC4uLih1c2VyVHlwZSAmJiB7IHVzZXJUeXBlIH0pLFxuICAgIC4uLihzZWFyY2ggJiYgeyBzZWFyY2ggfSksXG4gIH0pO1xuXG4gIGNvbnN0IHJlc3VsdCA9IGF3YWl0IG1ha2VBdXRoZW50aWNhdGVkUmVxdWVzdChcbiAgICBgJHtcbiAgICAgIHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0JBU0VfVVJMXG4gICAgfWFwaS9hZG1pbi91c2Vycz8ke3F1ZXJ5UGFyYW1zLnRvU3RyaW5nKCl9YCxcbiAgICB7XG4gICAgICBtZXRob2Q6IFwiR0VUXCIsXG4gICAgfVxuICApO1xuXG4gIGlmIChyZXN1bHQuc3VjY2Vzcykge1xuICAgIHJldHVybiByZXN1bHQuZGF0YTtcbiAgfVxuXG4gIHRocm93IG5ldyBFcnJvcihcIkZhaWxlZCB0byBnZXQgdXNlcnNcIik7XG59O1xuXG4vLyBDcmVhdGUgbmV3IHJlZmVycmFsIGNvZGVcbmV4cG9ydCBjb25zdCBjcmVhdGVSZWZlcnJhbENvZGUgPSBhc3luYyAoe1xuICBjb2RlLFxuICBkZXNjcmlwdGlvbixcbiAgZXhwaXJlc0F0LFxuICBhc3NpZ25lZFRvVXNlcklkLFxufSkgPT4ge1xuICBjb25zdCByZXN1bHQgPSBhd2FpdCBtYWtlQXV0aGVudGljYXRlZFJlcXVlc3QoXG4gICAgYCR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQkFTRV9VUkx9YXBpL2FkbWluL3JlZmVycmFsLWNvZGVzYCxcbiAgICB7XG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgZGF0YToge1xuICAgICAgICBjb2RlLFxuICAgICAgICBkZXNjcmlwdGlvbixcbiAgICAgICAgZXhwaXJlc0F0LFxuICAgICAgICBhc3NpZ25lZFRvVXNlcklkOlxuICAgICAgICAgIGFzc2lnbmVkVG9Vc2VySWQgPT09IFwiYWRtaW5cIiA/IG51bGwgOiBhc3NpZ25lZFRvVXNlcklkLFxuICAgICAgfSxcbiAgICB9XG4gICk7XG5cbiAgaWYgKHJlc3VsdC5zdWNjZXNzKSB7XG4gICAgcmV0dXJuIHJlc3VsdC5kYXRhO1xuICB9XG5cbiAgdGhyb3cgbmV3IEVycm9yKFwiRmFpbGVkIHRvIGNyZWF0ZSByZWZlcnJhbCBjb2RlXCIpO1xufTtcblxuLy8gVXBkYXRlIHJlZmVycmFsIGNvZGVcbmV4cG9ydCBjb25zdCB1cGRhdGVSZWZlcnJhbENvZGUgPSBhc3luYyAoe1xuICBpZCxcbiAgY29kZSxcbiAgZGVzY3JpcHRpb24sXG4gIGV4cGlyZXNBdCxcbiAgaXNBY3RpdmUsXG59KSA9PiB7XG4gIGNvbnN0IHJlc3VsdCA9IGF3YWl0IG1ha2VBdXRoZW50aWNhdGVkUmVxdWVzdChcbiAgICBgJHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19CQVNFX1VSTH1hcGkvYWRtaW4vcmVmZXJyYWwtY29kZXMvJHtpZH1gLFxuICAgIHtcbiAgICAgIG1ldGhvZDogXCJQVVRcIixcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgY29kZSxcbiAgICAgICAgZGVzY3JpcHRpb24sXG4gICAgICAgIGV4cGlyZXNBdCxcbiAgICAgICAgaXNBY3RpdmUsXG4gICAgICB9LFxuICAgIH1cbiAgKTtcblxuICBpZiAocmVzdWx0LnN1Y2Nlc3MpIHtcbiAgICByZXR1cm4gcmVzdWx0LmRhdGE7XG4gIH1cblxuICB0aHJvdyBuZXcgRXJyb3IoXCJGYWlsZWQgdG8gdXBkYXRlIHJlZmVycmFsIGNvZGVcIik7XG59O1xuXG4vLyBEZWxldGUgcmVmZXJyYWwgY29kZVxuZXhwb3J0IGNvbnN0IGRlbGV0ZVJlZmVycmFsQ29kZSA9IGFzeW5jIChpZCkgPT4ge1xuICBjb25zdCByZXN1bHQgPSBhd2FpdCBtYWtlQXV0aGVudGljYXRlZFJlcXVlc3QoXG4gICAgYCR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQkFTRV9VUkx9YXBpL2FkbWluL3JlZmVycmFsLWNvZGVzLyR7aWR9YCxcbiAgICB7XG4gICAgICBtZXRob2Q6IFwiREVMRVRFXCIsXG4gICAgfVxuICApO1xuXG4gIGlmIChyZXN1bHQuc3VjY2Vzcykge1xuICAgIHJldHVybiByZXN1bHQuZGF0YTtcbiAgfVxuXG4gIHRocm93IG5ldyBFcnJvcihcIkZhaWxlZCB0byBkZWxldGUgcmVmZXJyYWwgY29kZVwiKTtcbn07XG5cbi8vIEFzc2lnbiByZWZlcnJhbCBjb2RlIHRvIHVzZXJcbmV4cG9ydCBjb25zdCBhc3NpZ25SZWZlcnJhbENvZGUgPSBhc3luYyAoeyBpZCwgdXNlcklkIH0pID0+IHtcbiAgdHJ5IHtcbiAgICBpZiAoIWlkIHx8ICF1c2VySWQpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgICBtZXNzYWdlOiBcIlJlZmVycmFsIGNvZGUgSUQgYW5kIHVzZXIgSUQgYXJlIHJlcXVpcmVkXCIsXG4gICAgICB9O1xuICAgIH1cblxuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IG1ha2VBdXRoZW50aWNhdGVkUmVxdWVzdChcbiAgICAgIGAke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0JBU0VfVVJMfWFwaS9hZG1pbi9yZWZlcnJhbC1jb2Rlcy8ke2lkfS9hc3NpZ25gLFxuICAgICAge1xuICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICBkYXRhOiB7IHVzZXJJZDogdXNlcklkLnRvU3RyaW5nKCkgfSwgLy8gRW5zdXJlIHVzZXJJZCBpcyBzdHJpbmdcbiAgICAgICAgdGltZW91dDogMTAwMDAsXG4gICAgICB9XG4gICAgKTtcblxuICAgIGlmIChyZXN1bHQuc3VjY2Vzcykge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgc3VjY2VzczogdHJ1ZSxcbiAgICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXG4gICAgICB9O1xuICAgIH1cblxuICAgIHRocm93IG5ldyBFcnJvcihcIkZhaWxlZCB0byBhc3NpZ24gcmVmZXJyYWwgY29kZVwiKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgaW4gYXNzaWduUmVmZXJyYWxDb2RlIEFQSTpcIiwgZXJyb3IpO1xuXG4gICAgbGV0IG1lc3NhZ2UgPSBcIkFuIHVuZXhwZWN0ZWQgZXJyb3Igb2NjdXJyZWRcIjtcblxuICAgIGlmIChlcnJvci5yZXNwb25zZSkge1xuICAgICAgbWVzc2FnZSA9XG4gICAgICAgIGVycm9yLnJlc3BvbnNlLmRhdGE/Lm1lc3NhZ2UgfHxcbiAgICAgICAgYFJlcXVlc3QgZmFpbGVkIHdpdGggc3RhdHVzICR7ZXJyb3IucmVzcG9uc2Uuc3RhdHVzfWA7XG4gICAgfSBlbHNlIGlmIChlcnJvci5yZXF1ZXN0KSB7XG4gICAgICBtZXNzYWdlID0gXCJOZXR3b3JrIGVycm9yLiBQbGVhc2UgY2hlY2sgeW91ciBjb25uZWN0aW9uIGFuZCB0cnkgYWdhaW4uXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIG1lc3NhZ2UgPSBlcnJvci5tZXNzYWdlIHx8IFwiQW4gdW5leHBlY3RlZCBlcnJvciBvY2N1cnJlZFwiO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgIG1lc3NhZ2UsXG4gICAgfTtcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IHVuYXNzaWduUmVmZXJyYWxDb2RlID0gYXN5bmMgKGlkKSA9PiB7XG4gIHRyeSB7XG4gICAgaWYgKCFpZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiUmVmZXJyYWwgY29kZSBJRCBpcyByZXF1aXJlZFwiKTtcbiAgICB9XG5cbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBtYWtlQXV0aGVudGljYXRlZFJlcXVlc3QoXG4gICAgICBgJHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19CQVNFX1VSTH1hcGkvYWRtaW4vcmVmZXJyYWwtY29kZXMvJHtpZH0vdW5hc3NpZ25gLFxuICAgICAge1xuICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICBkYXRhOiB7fSxcbiAgICAgICAgdGltZW91dDogMTAwMDAsXG4gICAgICB9XG4gICAgKTtcblxuICAgIGlmIChyZXN1bHQuc3VjY2Vzcykge1xuICAgICAgcmV0dXJuIHJlc3VsdC5kYXRhO1xuICAgIH1cblxuICAgIHRocm93IG5ldyBFcnJvcihcIkZhaWxlZCB0byB1bmFzc2lnbiByZWZlcnJhbCBjb2RlXCIpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBpbiB1bmFzc2lnblJlZmVycmFsQ29kZSBBUEk6XCIsIGVycm9yKTtcblxuICAgIGlmIChlcnJvci5yZXNwb25zZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBlcnJvci5yZXNwb25zZS5kYXRhPy5tZXNzYWdlIHx8IFwiRmFpbGVkIHRvIHVuYXNzaWduIHJlZmVycmFsIGNvZGVcIlxuICAgICAgKTtcbiAgICB9IGVsc2UgaWYgKGVycm9yLnJlcXVlc3QpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgXCJOZXR3b3JrIGVycm9yLiBQbGVhc2UgY2hlY2sgeW91ciBjb25uZWN0aW9uIGFuZCB0cnkgYWdhaW4uXCJcbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihlcnJvci5tZXNzYWdlIHx8IFwiQW4gdW5leHBlY3RlZCBlcnJvciBvY2N1cnJlZFwiKTtcbiAgICB9XG4gIH1cbn07XG5cbi8vIEdldCByZWZlcnJhbCBjb2RlIGJ5IElEXG5leHBvcnQgY29uc3QgZ2V0UmVmZXJyYWxDb2RlQnlJZCA9IGFzeW5jIChpZCkgPT4ge1xuICBjb25zdCByZXN1bHQgPSBhd2FpdCBtYWtlQXV0aGVudGljYXRlZFJlcXVlc3QoXG4gICAgYCR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQkFTRV9VUkx9YXBpL2FkbWluL3JlZmVycmFsLWNvZGVzLyR7aWR9YCxcbiAgICB7XG4gICAgICBtZXRob2Q6IFwiR0VUXCIsXG4gICAgfVxuICApO1xuXG4gIGlmIChyZXN1bHQuc3VjY2Vzcykge1xuICAgIHJldHVybiByZXN1bHQuZGF0YTtcbiAgfVxuXG4gIHRocm93IG5ldyBFcnJvcihcIkZhaWxlZCB0byBnZXQgcmVmZXJyYWwgY29kZVwiKTtcbn07XG5cbi8vIEdldCByZWZlcnJhbCBhbmFseXRpY3NcbmV4cG9ydCBjb25zdCBnZXRSZWZlcnJhbEFuYWx5dGljcyA9IGFzeW5jICh7XG4gIHN0YXJ0RGF0ZSxcbiAgZW5kRGF0ZSxcbiAgYWRtaW5JZCxcbn0gPSB7fSkgPT4ge1xuICBjb25zdCBxdWVyeVBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoe1xuICAgIC4uLihzdGFydERhdGUgJiYgeyBzdGFydERhdGUgfSksXG4gICAgLi4uKGVuZERhdGUgJiYgeyBlbmREYXRlIH0pLFxuICAgIC4uLihhZG1pbklkICYmIHsgYWRtaW5JZCB9KSxcbiAgfSk7XG5cbiAgY29uc3QgcmVzdWx0ID0gYXdhaXQgbWFrZUF1dGhlbnRpY2F0ZWRSZXF1ZXN0KFxuICAgIGAke1xuICAgICAgcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQkFTRV9VUkxcbiAgICB9YXBpL2FkbWluL3JlZmVycmFsLWFuYWx5dGljcz8ke3F1ZXJ5UGFyYW1zLnRvU3RyaW5nKCl9YCxcbiAgICB7XG4gICAgICBtZXRob2Q6IFwiR0VUXCIsXG4gICAgfVxuICApO1xuXG4gIGlmIChyZXN1bHQuc3VjY2Vzcykge1xuICAgIHJldHVybiByZXN1bHQuZGF0YTtcbiAgfVxuXG4gIHRocm93IG5ldyBFcnJvcihcIkZhaWxlZCB0byBnZXQgcmVmZXJyYWwgYW5hbHl0aWNzXCIpO1xufTtcblxuLy8gR2V0IHJlZmVycmFsIHVzYWdlIGRhdGFcbmV4cG9ydCBjb25zdCBnZXRSZWZlcnJhbFVzYWdlID0gYXN5bmMgKHtcbiAgcGFnZSA9IDEsXG4gIGxpbWl0ID0gMTAsXG4gIHJlZmVycmFsQ29kZSxcbiAgdXNlcklkLFxufSA9IHt9KSA9PiB7XG4gIGNvbnN0IHF1ZXJ5UGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcyh7XG4gICAgcGFnZTogcGFnZS50b1N0cmluZygpLFxuICAgIGxpbWl0OiBsaW1pdC50b1N0cmluZygpLFxuICAgIC4uLihyZWZlcnJhbENvZGUgJiYgeyByZWZlcnJhbENvZGUgfSksXG4gICAgLi4uKHVzZXJJZCAmJiB7IHVzZXJJZCB9KSxcbiAgfSk7XG5cbiAgY29uc3QgcmVzdWx0ID0gYXdhaXQgbWFrZUF1dGhlbnRpY2F0ZWRSZXF1ZXN0KFxuICAgIGAke1xuICAgICAgcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQkFTRV9VUkxcbiAgICB9YXBpL2FkbWluL3JlZmVycmFsLXVzYWdlPyR7cXVlcnlQYXJhbXMudG9TdHJpbmcoKX1gLFxuICAgIHtcbiAgICAgIG1ldGhvZDogXCJHRVRcIixcbiAgICB9XG4gICk7XG5cbiAgaWYgKHJlc3VsdC5zdWNjZXNzKSB7XG4gICAgcmV0dXJuIHJlc3VsdC5kYXRhO1xuICB9XG5cbiAgdGhyb3cgbmV3IEVycm9yKFwiRmFpbGVkIHRvIGdldCByZWZlcnJhbCB1c2FnZVwiKTtcbn07XG5cbi8vIEdldCB1c2VyIGJ5IElEXG5leHBvcnQgY29uc3QgZ2V0VXNlckJ5SWQgPSBhc3luYyAoaWQpID0+IHtcbiAgY29uc3QgcmVzdWx0ID0gYXdhaXQgbWFrZUF1dGhlbnRpY2F0ZWRSZXF1ZXN0KFxuICAgIGAke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0JBU0VfVVJMfWFwaS9hZG1pbi91c2Vycy8ke2lkfWAsXG4gICAge1xuICAgICAgbWV0aG9kOiBcIkdFVFwiLFxuICAgIH1cbiAgKTtcblxuICBpZiAocmVzdWx0LnN1Y2Nlc3MpIHtcbiAgICByZXR1cm4gcmVzdWx0LmRhdGE7XG4gIH1cblxuICB0aHJvdyBuZXcgRXJyb3IoXCJGYWlsZWQgdG8gZ2V0IHVzZXJcIik7XG59O1xuXG4vLyBVcGRhdGUgdXNlciBwb2ludHNcbmV4cG9ydCBjb25zdCB1cGRhdGVVc2VyUG9pbnRzID0gYXN5bmMgKHsgaWQsIGFtb3VudCwgdHlwZSwgZGVzY3JpcHRpb24gfSkgPT4ge1xuICBjb25zdCByZXN1bHQgPSBhd2FpdCBtYWtlQXV0aGVudGljYXRlZFJlcXVlc3QoXG4gICAgYCR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQkFTRV9VUkx9YXBpL2FkbWluL3VzZXJzLyR7aWR9L3BvaW50c2AsXG4gICAge1xuICAgICAgbWV0aG9kOiBcIlBVVFwiLFxuICAgICAgZGF0YToge1xuICAgICAgICBhbW91bnQsXG4gICAgICAgIHR5cGUsXG4gICAgICAgIGRlc2NyaXB0aW9uLFxuICAgICAgfSxcbiAgICB9XG4gICk7XG5cbiAgaWYgKHJlc3VsdC5zdWNjZXNzKSB7XG4gICAgcmV0dXJuIHJlc3VsdC5kYXRhO1xuICB9XG5cbiAgdGhyb3cgbmV3IEVycm9yKFwiRmFpbGVkIHRvIHVwZGF0ZSB1c2VyIHBvaW50c1wiKTtcbn07XG5cbi8vIEJ1bGsgY3JlYXRlIHJlZmVycmFsIGNvZGVzXG5leHBvcnQgY29uc3QgYnVsa0NyZWF0ZVJlZmVycmFsQ29kZXMgPSBhc3luYyAoY29kZXMpID0+IHtcbiAgY29uc3QgcmVzdWx0ID0gYXdhaXQgbWFrZUF1dGhlbnRpY2F0ZWRSZXF1ZXN0KFxuICAgIGAke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0JBU0VfVVJMfWFwaS9hZG1pbi9yZWZlcnJhbC1jb2Rlcy9idWxrLWNyZWF0ZWAsXG4gICAge1xuICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgIGRhdGE6IHsgY29kZXMgfSxcbiAgICB9XG4gICk7XG5cbiAgaWYgKHJlc3VsdC5zdWNjZXNzKSB7XG4gICAgcmV0dXJuIHJlc3VsdC5kYXRhO1xuICB9XG5cbiAgdGhyb3cgbmV3IEVycm9yKFwiRmFpbGVkIHRvIGJ1bGsgY3JlYXRlIHJlZmVycmFsIGNvZGVzXCIpO1xufTtcblxuLy8gQnVsayBhc3NpZ24gcmVmZXJyYWwgY29kZXNcbmV4cG9ydCBjb25zdCBidWxrQXNzaWduUmVmZXJyYWxDb2RlcyA9IGFzeW5jIChhc3NpZ25tZW50cykgPT4ge1xuICBjb25zdCByZXN1bHQgPSBhd2FpdCBtYWtlQXV0aGVudGljYXRlZFJlcXVlc3QoXG4gICAgYCR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQkFTRV9VUkx9YXBpL2FkbWluL3JlZmVycmFsLWNvZGVzL2J1bGstYXNzaWduYCxcbiAgICB7XG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgZGF0YTogeyBhc3NpZ25tZW50cyB9LFxuICAgIH1cbiAgKTtcblxuICBpZiAocmVzdWx0LnN1Y2Nlc3MpIHtcbiAgICByZXR1cm4gcmVzdWx0LmRhdGE7XG4gIH1cblxuICB0aHJvdyBuZXcgRXJyb3IoXCJGYWlsZWQgdG8gYnVsayBhc3NpZ24gcmVmZXJyYWwgY29kZXNcIik7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0UGVuZGluZ1VzZXJzID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCByZXN1bHQgPSBhd2FpdCBtYWtlQXV0aGVudGljYXRlZFJlcXVlc3QoXG4gICAgYCR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQkFTRV9VUkx9YXBpL2FkbWluL3BlbmRpbmcvdXNlcnNgLFxuICAgIHtcbiAgICAgIG1ldGhvZDogXCJHRVRcIixcbiAgICB9XG4gICk7XG5cbiAgaWYgKHJlc3VsdC5zdWNjZXNzKSB7XG4gICAgcmV0dXJuIHJlc3VsdC5kYXRhO1xuICB9XG5cbiAgdGhyb3cgbmV3IEVycm9yKFwiRmFpbGVkIHRvIGdldCBwZW5kaW5nIHVzZXJzXCIpO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldEFwcHJvdmVkVXNlcnMgPSBhc3luYyAoe1xuICBwYWdlID0gMSxcbiAgbGltaXQgPSAxMCxcbiAgc2VhcmNoID0gXCJcIixcbn0gPSB7fSkgPT4ge1xuICBjb25zdCBwYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHtcbiAgICBwYWdlOiBwYWdlLnRvU3RyaW5nKCksXG4gICAgbGltaXQ6IGxpbWl0LnRvU3RyaW5nKCksXG4gICAgLi4uKHNlYXJjaCAmJiB7IHNlYXJjaCB9KSxcbiAgfSk7XG5cbiAgY29uc3QgcmVzdWx0ID0gYXdhaXQgbWFrZUF1dGhlbnRpY2F0ZWRSZXF1ZXN0KFxuICAgIGAke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0JBU0VfVVJMfWFwaS9hZG1pbi9hcHByb3ZlZC91c2Vycz8ke3BhcmFtc31gLFxuICAgIHtcbiAgICAgIG1ldGhvZDogXCJHRVRcIixcbiAgICB9XG4gICk7XG5cbiAgaWYgKHJlc3VsdC5zdWNjZXNzKSB7XG4gICAgcmV0dXJuIHJlc3VsdC5kYXRhO1xuICB9XG5cbiAgdGhyb3cgbmV3IEVycm9yKFwiRmFpbGVkIHRvIGdldCBhcHByb3ZlZCB1c2Vyc1wiKTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRVc2VyUmVmZXJyYWxVc2FnZSA9IGFzeW5jICh7XG4gIHVzZXJJZCxcbiAgcGFnZSA9IDEsXG4gIGxpbWl0ID0gNTAsXG59ID0ge30pID0+IHtcbiAgY29uc3QgcGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcyh7XG4gICAgcGFnZTogcGFnZS50b1N0cmluZygpLFxuICAgIGxpbWl0OiBsaW1pdC50b1N0cmluZygpLFxuICB9KTtcblxuICBjb25zdCByZXN1bHQgPSBhd2FpdCBtYWtlQXV0aGVudGljYXRlZFJlcXVlc3QoXG4gICAgYCR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQkFTRV9VUkx9YXBpL2FkbWluL3VzZXJzLyR7dXNlcklkfS9yZWZlcnJhbC11c2FnZT8ke3BhcmFtc31gLFxuICAgIHtcbiAgICAgIG1ldGhvZDogXCJHRVRcIixcbiAgICB9XG4gICk7XG5cbiAgaWYgKHJlc3VsdC5zdWNjZXNzKSB7XG4gICAgcmV0dXJuIHJlc3VsdC5kYXRhO1xuICB9XG5cbiAgdGhyb3cgbmV3IEVycm9yKFwiRmFpbGVkIHRvIGdldCB1c2VyIHJlZmVycmFsIHVzYWdlXCIpO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldFJlamVjdGVkVXNlcnMgPSBhc3luYyAoe1xuICBwYWdlID0gMSxcbiAgbGltaXQgPSAxMCxcbiAgc2VhcmNoID0gXCJcIixcbiAgc3RhdHVzID0gXCJhbGxcIixcbn0gPSB7fSkgPT4ge1xuICBjb25zdCBwYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHtcbiAgICBwYWdlOiBwYWdlLnRvU3RyaW5nKCksXG4gICAgbGltaXQ6IGxpbWl0LnRvU3RyaW5nKCksXG4gICAgc3RhdHVzLFxuICAgIC4uLihzZWFyY2ggJiYgeyBzZWFyY2ggfSksXG4gIH0pO1xuXG4gIGNvbnN0IHJlc3VsdCA9IGF3YWl0IG1ha2VBdXRoZW50aWNhdGVkUmVxdWVzdChcbiAgICBgJHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19CQVNFX1VSTH1hcGkvYWRtaW4vcmVqZWN0ZWQtdXNlcnM/JHtwYXJhbXN9YCxcbiAgICB7XG4gICAgICBtZXRob2Q6IFwiR0VUXCIsXG4gICAgfVxuICApO1xuXG4gIGlmIChyZXN1bHQuc3VjY2Vzcykge1xuICAgIHJldHVybiByZXN1bHQuZGF0YTtcbiAgfVxuXG4gIHRocm93IG5ldyBFcnJvcihcIkZhaWxlZCB0byBnZXQgcmVqZWN0ZWQgdXNlcnNcIik7XG59O1xuXG4vLyBHRVQgYWxsIHVzZXJzIHdpdGggc3RhdHVzXG5leHBvcnQgY29uc3QgZ2V0QWxsVXNlcnNXaXRoU3RhdHVzID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCByZXN1bHQgPSBhd2FpdCBtYWtlQXV0aGVudGljYXRlZFJlcXVlc3QoXG4gICAgYCR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQkFTRV9VUkx9YXBpL2FkbWluL3VzZXJzL3N0YXR1cy9hbGxgLFxuICAgIHtcbiAgICAgIG1ldGhvZDogXCJHRVRcIixcbiAgICB9XG4gICk7XG5cbiAgaWYgKHJlc3VsdC5zdWNjZXNzKSB7XG4gICAgcmV0dXJuIHJlc3VsdC5kYXRhO1xuICB9XG5cbiAgdGhyb3cgbmV3IEVycm9yKFwiRmFpbGVkIHRvIGdldCBhbGwgdXNlcnMgd2l0aCBzdGF0dXNcIik7XG59O1xuXG5leHBvcnQgY29uc3QgYXBwcm92ZVVzZXIgPSBhc3luYyAodXNlcklkKSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgbWFrZUF1dGhlbnRpY2F0ZWRSZXF1ZXN0KFxuICAgICAgYCR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQkFTRV9VUkx9YXBpL2FkbWluL3VzZXJzLyR7dXNlcklkfS9hcHByb3ZlYCxcbiAgICAgIHtcbiAgICAgICAgbWV0aG9kOiBcIlBBVENIXCIsXG4gICAgICAgIGRhdGE6IHt9LFxuICAgICAgfVxuICAgICk7XG5cbiAgICAvLyBJZiBzdWNjZXNzZnVsLCByZXR1cm4gdGhlIHJlc3VsdFxuICAgIHJldHVybiByZXN1bHQ7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5sb2coXCJSYXcgZXJyb3IgaW4gYXBwcm92ZVVzZXI6XCIsIGVycm9yKTtcbiAgICBjb25zb2xlLmxvZyhcIkF4aW9zIHJlc3BvbnNlOlwiLCBlcnJvci5yZXNwb25zZSk7XG4gICAgY29uc29sZS5sb2coXCJBeGlvcyByZXNwb25zZSBkYXRhOlwiLCBlcnJvci5yZXNwb25zZT8uZGF0YSk7XG5cbiAgICAvLyBBeGlvcyBlcnJvcnMgaGF2ZSB0aGUgcmVzcG9uc2UgaW4gZXJyb3IucmVzcG9uc2VcbiAgICAvLyBXZSBuZWVkIHRvIHRocm93IGFuIGVycm9yIHRoYXQgcHJlc2VydmVzIHRoaXMgc3RydWN0dXJlXG4gICAgY29uc3QgZW5oYW5jZWRFcnJvciA9IG5ldyBFcnJvcihcbiAgICAgIGVycm9yLnJlc3BvbnNlPy5kYXRhPy5tZXNzYWdlIHx8IGVycm9yLm1lc3NhZ2UgfHwgXCJGYWlsZWQgdG8gYXBwcm92ZSB1c2VyXCJcbiAgICApO1xuXG4gICAgLy8gUHJlc2VydmUgdGhlIGF4aW9zIHJlc3BvbnNlIHN0cnVjdHVyZVxuICAgIGVuaGFuY2VkRXJyb3IucmVzcG9uc2UgPSBlcnJvci5yZXNwb25zZTtcblxuICAgIHRocm93IGVuaGFuY2VkRXJyb3I7XG4gIH1cbn07XG5cbi8vIFBBVENIIHJlamVjdCBzaW5nbGUgdXNlclxuZXhwb3J0IGNvbnN0IHJlamVjdFVzZXIgPSBhc3luYyAodXNlcklkKSA9PiB7XG4gIGNvbnN0IHJlc3VsdCA9IGF3YWl0IG1ha2VBdXRoZW50aWNhdGVkUmVxdWVzdChcbiAgICBgJHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19CQVNFX1VSTH1hcGkvYWRtaW4vdXNlcnMvJHt1c2VySWR9L3JlamVjdGAsXG4gICAge1xuICAgICAgbWV0aG9kOiBcIlBBVENIXCIsXG4gICAgICBkYXRhOiB7fSxcbiAgICB9XG4gICk7XG5cbiAgaWYgKHJlc3VsdC5zdWNjZXNzKSB7XG4gICAgcmV0dXJuIHJlc3VsdC5kYXRhO1xuICB9XG5cbiAgdGhyb3cgbmV3IEVycm9yKFwiRmFpbGVkIHRvIHJlamVjdCB1c2VyXCIpO1xufTtcblxuLy8gUEFUQ0ggYnVsayB1cGRhdGUgdXNlciBzdGF0dXNcbmV4cG9ydCBjb25zdCBidWxrVXBkYXRlVXNlclN0YXR1cyA9IGFzeW5jICh7IHVzZXJJZHMsIHN0YXR1cyB9KSA9PiB7XG4gIGNvbnN0IHJlc3VsdCA9IGF3YWl0IG1ha2VBdXRoZW50aWNhdGVkUmVxdWVzdChcbiAgICBgJHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19CQVNFX1VSTH1hcGkvYWRtaW4vdXNlcnMvYnVsay11cGRhdGUtc3RhdHVzYCxcbiAgICB7XG4gICAgICBtZXRob2Q6IFwiUEFUQ0hcIixcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgdXNlcklkcyxcbiAgICAgICAgc3RhdHVzLFxuICAgICAgfSxcbiAgICB9XG4gICk7XG5cbiAgaWYgKHJlc3VsdC5zdWNjZXNzKSB7XG4gICAgcmV0dXJuIHJlc3VsdC5kYXRhO1xuICB9XG5cbiAgdGhyb3cgbmV3IEVycm9yKFwiRmFpbGVkIHRvIGJ1bGsgdXBkYXRlIHVzZXIgc3RhdHVzXCIpO1xufTtcblxuZXhwb3J0IGNvbnN0IGRlbGV0ZVVzZXIgPSBhc3luYyAodXNlcklkKSA9PiB7XG4gIGNvbnN0IHJlc3VsdCA9IGF3YWl0IG1ha2VBdXRoZW50aWNhdGVkUmVxdWVzdChcbiAgICBgJHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19CQVNFX1VSTH1hcGkvYWRtaW4vdXNlcnMvZGVsZXRlLyR7dXNlcklkfWAsXG4gICAge1xuICAgICAgbWV0aG9kOiBcIkRFTEVURVwiLFxuICAgIH1cbiAgKTtcblxuICBpZiAocmVzdWx0LnN1Y2Nlc3MpIHtcbiAgICByZXR1cm4gcmVzdWx0LmRhdGE7XG4gIH1cblxuICB0aHJvdyBuZXcgRXJyb3IoXCJGYWlsZWQgdG8gZGVsZXRlIHVzZXJcIik7XG59O1xuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI2UUE4b0JhIn0=
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/Toast.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-alert.js [app-client] (ecmascript) <export default as AlertCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check-big.js [app-client] (ecmascript) <export default as CheckCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
const Toast = ({ message, type, onClose })=>{
    _s();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Toast.useEffect": ()=>{
            const timer = setTimeout(onClose, 3000);
            return ({
                "Toast.useEffect": ()=>clearTimeout(timer)
            })["Toast.useEffect"];
        }
    }["Toast.useEffect"], [
        onClose
    ]);
    const bgColor = type === "success" ? "bg-green-500" : type === "error" ? "bg-red-500" : "bg-blue-500";
    const Icon = type === "success" ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"] : type === "error" ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"] : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `fixed top-4 right-4 ${bgColor} text-white px-6 py-3 rounded-lg shadow-lg z-50 flex items-center space-x-2`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                className: "h-5 w-5"
            }, void 0, false, {
                fileName: "[project]/components/Toast.jsx",
                lineNumber: 27,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                children: message
            }, void 0, false, {
                fileName: "[project]/components/Toast.jsx",
                lineNumber: 28,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: onClose,
                className: "ml-2 hover:opacity-70",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                    className: "h-4 w-4"
                }, void 0, false, {
                    fileName: "[project]/components/Toast.jsx",
                    lineNumber: 30,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/Toast.jsx",
                lineNumber: 29,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Toast.jsx",
        lineNumber: 24,
        columnNumber: 5
    }, this);
};
_s(Toast, "OD7bBpZva5O2jO+Puf00hKivP7c=");
_c = Toast;
const __TURBOPACK__default__export__ = Toast;
var _c;
__turbopack_context__.k.register(_c, "Toast");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/dashboard/users/components/Popup.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
const SimplePopup = ({ message, buttonText = "OK", onClose })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white rounded-lg p-8 max-w-md w-full mx-4 shadow-xl",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-black text-center text-lg mb-6",
                    children: message
                }, void 0, false, {
                    fileName: "[project]/app/dashboard/users/components/Popup.jsx",
                    lineNumber: 6,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: onClose,
                    className: "w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition-colors",
                    children: buttonText
                }, void 0, false, {
                    fileName: "[project]/app/dashboard/users/components/Popup.jsx",
                    lineNumber: 7,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/dashboard/users/components/Popup.jsx",
            lineNumber: 5,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/dashboard/users/components/Popup.jsx",
        lineNumber: 4,
        columnNumber: 5
    }, this);
};
_c = SimplePopup;
const __TURBOPACK__default__export__ = SimplePopup;
var _c;
__turbopack_context__.k.register(_c, "SimplePopup");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/dashboard/referrals/components/Modal.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
;
;
const Modal = ({ isOpen, onClose, title, children, size = "md" })=>{
    if (!isOpen) return null;
    const sizeClasses = {
        sm: "max-w-sm",
        md: "max-w-md",
        lg: "max-w-lg",
        xl: "max-w-xl"
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 bg-[#0000004a] bg-opacity-75 flex items-center justify-center p-4 z-50",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: `bg-gray-200 rounded-lg shadow-2xl ${sizeClasses[size]} w-full`,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between mb-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-lg font-semibold",
                                children: title
                            }, void 0, false, {
                                fileName: "[project]/app/dashboard/referrals/components/Modal.jsx",
                                lineNumber: 21,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: onClose,
                                className: "hover:text-gray-300 transition-colors cursor-pointer",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                    className: "h-5 w-5"
                                }, void 0, false, {
                                    fileName: "[project]/app/dashboard/referrals/components/Modal.jsx",
                                    lineNumber: 26,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/dashboard/referrals/components/Modal.jsx",
                                lineNumber: 22,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/dashboard/referrals/components/Modal.jsx",
                        lineNumber: 20,
                        columnNumber: 11
                    }, this),
                    children
                ]
            }, void 0, true, {
                fileName: "[project]/app/dashboard/referrals/components/Modal.jsx",
                lineNumber: 19,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/dashboard/referrals/components/Modal.jsx",
            lineNumber: 16,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/dashboard/referrals/components/Modal.jsx",
        lineNumber: 15,
        columnNumber: 5
    }, this);
};
_c = Modal;
const __TURBOPACK__default__export__ = Modal;
var _c;
__turbopack_context__.k.register(_c, "Modal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/dashboard/users/pending/page.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>PendingUsersPage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$dashboard$2f$users$2f$components$2f$DataTable$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/dashboard/users/components/DataTable.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$dashboard$2f$users$2f$components$2f$BulkActions$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/dashboard/users/components/BulkActions.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$dashboard$2f$users$2f$components$2f$StatusBadge$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/dashboard/users/components/StatusBadge.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$dashboard$2f$users$2f$components$2f$ActionButtons$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/dashboard/users/components/ActionButtons.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$LoadingSpinner$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/LoadingSpinner.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$dashboard$2f$users$2f$components$2f$EmptyState$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/dashboard/users/components/EmptyState.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$dashboard$2f$users$2f$components$2f$SearchBar$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/dashboard/users/components/SearchBar.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$3a$8b111f__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/data:8b111f [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$3a$fa6f72__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/data:fa6f72 [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$3a$0b96f0__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/data:0b96f0 [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$3a$418943__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/data:418943 [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$3a$cd63d9__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/data:cd63d9 [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Toast$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Toast.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$dashboard$2f$users$2f$components$2f$Popup$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/dashboard/users/components/Popup.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$dashboard$2f$referrals$2f$components$2f$Modal$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/dashboard/referrals/components/Modal.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader.js [app-client] (ecmascript) <export default as Loader>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$camera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Camera$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/camera.js [app-client] (ecmascript) <export default as Camera>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$video$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Video$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/video.js [app-client] (ecmascript) <export default as Video>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clipboard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clipboard$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clipboard.js [app-client] (ecmascript) <export default as Clipboard>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$flower$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Flower2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/flower-2.js [app-client] (ecmascript) <export default as Flower2>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
;
;
;
;
;
const domainIconsMap = {
    photography: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$camera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Camera$3e$__["Camera"], {
        size: 16
    }, void 0, false, {
        fileName: "[project]/app/dashboard/users/pending/page.jsx",
        lineNumber: 24,
        columnNumber: 16
    }, this),
    videography: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$video$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Video$3e$__["Video"], {
        size: 16
    }, void 0, false, {
        fileName: "[project]/app/dashboard/users/pending/page.jsx",
        lineNumber: 25,
        columnNumber: 16
    }, this),
    florist: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$flower$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Flower2$3e$__["Flower2"], {
        size: 16
    }, void 0, false, {
        fileName: "[project]/app/dashboard/users/pending/page.jsx",
        lineNumber: 26,
        columnNumber: 12
    }, this),
    planner: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clipboard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clipboard$3e$__["Clipboard"], {
        size: 16
    }, void 0, false, {
        fileName: "[project]/app/dashboard/users/pending/page.jsx",
        lineNumber: 27,
        columnNumber: 12
    }, this)
};
function getDomainIcons(domains) {
    return domains.map((domain)=>domainIconsMap[domain.toLowerCase()] || null).filter(Boolean).map((icon, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "mx-1",
            children: icon
        }, i, false, {
            fileName: "[project]/app/dashboard/users/pending/page.jsx",
            lineNumber: 35,
            columnNumber: 7
        }, this));
}
function PendingUsersPage() {
    _s();
    const [users, setUsers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [filteredUsers, setFilteredUsers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [selectedUsers, setSelectedUsers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [bulkLoading, setBulkLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [searchQuery, setSearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [toast, setToast] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [actionLoading, setActionLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [showLimitPopup, setShowLimitPopup] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [limitReachedUserId, setLimitReachedUserId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [showUsageModal, setShowUsageModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [selectedUser, setSelectedUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [usageData, setUsageData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [usageLoading, setUsageLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [expandedEmailId, setExpandedEmailId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const showToast = (message, type = "info")=>{
        setToast({
            message,
            type
        });
    };
    const handleViewReferralUsage = async (user)=>{
        if (!user.referralCodeOwner || user.referralCodeOwner.type === "admin") {
            return;
        }
        try {
            setUsageLoading(true);
            setSelectedUser(user);
            setShowUsageModal(true);
            // Find the user who owns this referral code
            const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$data$3a$418943__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["getUserReferralUsage"])({
                userId: user.referralCodeOwner.id,
                page: 1,
                limit: 50
            });
            setUsageData(response.data.data || []);
        } catch (error) {
            console.error("Error loading usage data:", error);
            showToast("Failed to load referral usage", "error");
            setUsageData([]);
        } finally{
            setUsageLoading(false);
        }
    };
    const setUserActionLoading = (userId, action, isLoading)=>{
        setActionLoading((prev)=>({
                ...prev,
                [`${userId}-${action}`]: isLoading
            }));
    };
    const isUserActionLoading = (userId, action)=>{
        return actionLoading[`${userId}-${action}`] || false;
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PendingUsersPage.useEffect": ()=>{
            loadPendingUsers();
        }
    }["PendingUsersPage.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PendingUsersPage.useEffect": ()=>{
            let filtered = users;
            if (searchQuery.trim()) {
                const query = searchQuery.toLowerCase();
                filtered = filtered.filter({
                    "PendingUsersPage.useEffect": (user)=>user.email?.toLowerCase().includes(query) || user.businessName?.toLowerCase().includes(query) || user.firstName?.toLowerCase().includes(query) || user.lastName?.toLowerCase().includes(query) || user.phone?.toLowerCase().includes(query) || user.website?.toLowerCase().includes(query) || user.instagram?.toLowerCase().includes(query)
                }["PendingUsersPage.useEffect"]);
            }
            setFilteredUsers(filtered);
        }
    }["PendingUsersPage.useEffect"], [
        users,
        searchQuery
    ]);
    const loadPendingUsers = async ()=>{
        try {
            setLoading(true);
            const data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$data$3a$0b96f0__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["getPendingUsers"])();
            const pendingUsers = data.data.users.filter((user)=>user.status === "pending");
            setUsers(pendingUsers);
        } catch (error) {
            console.error("Failed to fetch pending users:", error);
            showToast("Failed to load pending users", "error");
        } finally{
            setLoading(false);
        }
    };
    const handleApprove = async (userId)=>{
        if (isUserActionLoading(userId, "approve")) {
            return;
        }
        try {
            setUserActionLoading(userId, "approve", true);
            const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$data$3a$8b111f__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["approveUser"])(userId);
            if (response.success) {
                setUsers((prev)=>prev.filter((u)=>u.id !== userId));
                setSelectedUsers((prev)=>prev.filter((id)=>id !== userId));
                showToast("User approved successfully", "success");
            }
        } catch (error) {
            console.log("==================== ERROR CAUGHT ====================");
            console.log("Error object:", error);
            console.log("Error.response:", error.response);
            console.log("Error.response.data:", error.response?.data);
            console.log("====================================================");
            const errorData = error.response?.data;
            if (errorData?.errorType === "REFERRAL_LIMIT_REACHED" || errorData?.showAdminPopup === true || errorData?.requiresSignup === true) {
                console.log("✅ SHOWING POPUP!");
                setLimitReachedUserId(userId);
                setShowLimitPopup(true);
            } else {
                console.log("❌ SHOWING TOAST");
                showToast(errorData?.message || "Failed to approve user", "error");
            }
        } finally{
            setUserActionLoading(userId, "approve", false);
        }
    };
    const handleLimitPopupClose = ()=>{
        setShowLimitPopup(false);
        // Remove user from UI
        if (limitReachedUserId) {
            setUsers((prev)=>prev.filter((u)=>u.id !== limitReachedUserId));
            setSelectedUsers((prev)=>prev.filter((id)=>id !== limitReachedUserId));
            setLimitReachedUserId(null);
        }
        // Reload to ensure UI is in sync with backend
        loadPendingUsers();
    };
    const handleReject = async (userId)=>{
        // Prevent double-click
        if (isUserActionLoading(userId, "reject")) {
            return;
        }
        try {
            setUserActionLoading(userId, "reject", true);
            // Immediately remove from UI
            setUsers((prev)=>prev.filter((u)=>u.id !== userId));
            setSelectedUsers((prev)=>prev.filter((id)=>id !== userId));
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$data$3a$cd63d9__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["rejectUser"])(userId);
            showToast("User rejected successfully", "success");
        } catch (error) {
            console.error("Failed to reject user:", error);
            showToast(error.response?.data?.message || "Failed to reject user", "error");
            // Reload users on error
            await loadPendingUsers();
        } finally{
            setUserActionLoading(userId, "reject", false);
        }
    };
    const handleBulkApprove = async ()=>{
        if (selectedUsers.length === 0) return;
        try {
            setBulkLoading(true);
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$data$3a$fa6f72__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["bulkUpdateUserStatus"])({
                userIds: selectedUsers,
                status: "approved"
            });
            setUsers((prev)=>prev.filter((u)=>!selectedUsers.includes(u.id)));
            setSelectedUsers([]);
            showToast(`${selectedUsers.length} users approved successfully`, "success");
        } catch (error) {
            console.error("Failed to bulk approve users:", error);
            showToast("Failed to bulk approve users", "error");
        } finally{
            setBulkLoading(false);
        }
    };
    const handleBulkReject = async ()=>{
        if (selectedUsers.length === 0) return;
        try {
            setBulkLoading(true);
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$data$3a$fa6f72__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["bulkUpdateUserStatus"])({
                userIds: selectedUsers,
                status: "rejected"
            });
            setUsers((prev)=>prev.filter((u)=>!selectedUsers.includes(u.id)));
            setSelectedUsers([]);
            showToast(`${selectedUsers.length} users rejected successfully`, "success");
        } catch (error) {
            console.error("Failed to bulk reject users:", error);
            showToast("Failed to bulk reject users", "error");
        } finally{
            setBulkLoading(false);
        }
    };
    const handleSelectAll = (checked)=>{
        if (checked) {
            setSelectedUsers(filteredUsers.map((user)=>user.id));
        } else {
            setSelectedUsers([]);
        }
    };
    const handleSelectUser = (userId, checked)=>{
        if (checked) {
            setSelectedUsers((prev)=>[
                    ...prev,
                    userId
                ]);
        } else {
            setSelectedUsers((prev)=>prev.filter((id)=>id !== userId));
        }
    };
    const columns = [
        {
            key: "registrationDate",
            header: "Date",
            render: (user)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-gray-600",
                    children: user.createdAt ? new Date(user.createdAt).toLocaleDateString() : "N/A"
                }, void 0, false, {
                    fileName: "[project]/app/dashboard/users/pending/page.jsx",
                    lineNumber: 291,
                    columnNumber: 9
                }, this)
        },
        {
            key: "email",
            header: "Email",
            render: (user)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative inline-block",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-gray-600 cursor-pointer hover:text-blue-600",
                            onClick: ()=>setExpandedEmailId(expandedEmailId === user.id ? null : user.id),
                            children: user.email
                        }, void 0, false, {
                            fileName: "[project]/app/dashboard/users/pending/page.jsx",
                            lineNumber: 303,
                            columnNumber: 11
                        }, this),
                        expandedEmailId === user.id && user.phone && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-1 text-xs text-gray-500 border rounded p-1 bg-gray-50 shadow-lg fixed left-4 right-4 sm:relative sm:left-auto sm:right-auto sm:mt-1 z-50",
                            children: [
                                "📞 ",
                                user.phone
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/dashboard/users/pending/page.jsx",
                            lineNumber: 313,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/dashboard/users/pending/page.jsx",
                    lineNumber: 302,
                    columnNumber: 9
                }, this)
        },
        {
            key: "website",
            header: "Website",
            render: (user)=>user.website ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                    href: user.website,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: "text-blue-600 hover:underline",
                    children: user.website
                }, void 0, false, {
                    fileName: "[project]/app/dashboard/users/pending/page.jsx",
                    lineNumber: 325,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-gray-400",
                    children: "N/A"
                }, void 0, false, {
                    fileName: "[project]/app/dashboard/users/pending/page.jsx",
                    lineNumber: 334,
                    columnNumber: 11
                }, this)
        },
        {
            key: "instagram",
            header: "Instagram",
            render: (user)=>{
                if (!user.instagram) {
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-gray-400",
                        children: "N/A"
                    }, void 0, false, {
                        fileName: "[project]/app/dashboard/users/pending/page.jsx",
                        lineNumber: 342,
                        columnNumber: 18
                    }, this);
                }
                const username = user.instagram.startsWith("@") ? user.instagram.slice(1) : user.instagram;
                const url = `https://instagram.com/${username}`;
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                    href: url,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: "text-blue-600 hover:underline",
                    children: user.instagram
                }, void 0, false, {
                    fileName: "[project]/app/dashboard/users/pending/page.jsx",
                    lineNumber: 352,
                    columnNumber: 11
                }, this);
            }
        },
        {
            key: "creativeDomains",
            header: "Creative Domains",
            render: (user)=>user.creativeDomains?.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-gray-600",
                    children: getDomainIcons(user.creativeDomains)
                }, void 0, false, {
                    fileName: "[project]/app/dashboard/users/pending/page.jsx",
                    lineNumber: 368,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-gray-400",
                    children: "N/A"
                }, void 0, false, {
                    fileName: "[project]/app/dashboard/users/pending/page.jsx",
                    lineNumber: 372,
                    columnNumber: 11
                }, this)
        },
        {
            key: "phone",
            header: "Phone",
            render: (user)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-gray-600",
                    children: user.phone || "N/A"
                }, void 0, false, {
                    fileName: "[project]/app/dashboard/users/pending/page.jsx",
                    lineNumber: 379,
                    columnNumber: 9
                }, this)
        },
        {
            key: "referralCode",
            header: "Referral Code",
            render: (user)=>{
                if (!user.referralCodeOwner) {
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-gray-400",
                        children: "N/A"
                    }, void 0, false, {
                        fileName: "[project]/app/dashboard/users/pending/page.jsx",
                        lineNumber: 387,
                        columnNumber: 18
                    }, this);
                }
                if (user.referralCodeOwner.type === "admin") {
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-gray-600",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "font-semibold",
                            children: "Admin"
                        }, void 0, false, {
                            fileName: "[project]/app/dashboard/users/pending/page.jsx",
                            lineNumber: 393,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/dashboard/users/pending/page.jsx",
                        lineNumber: 392,
                        columnNumber: 13
                    }, this);
                }
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "cursor-pointer hover:bg-gray-50 p-2 rounded transition-colors",
                    onClick: ()=>handleViewReferralUsage(user),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-sm text-gray-600 max-w-[200px] truncate",
                            title: user.referralCodeOwner.email,
                            children: user.referralCodeOwner.email
                        }, void 0, false, {
                            fileName: "[project]/app/dashboard/users/pending/page.jsx",
                            lineNumber: 403,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-sm text-blue-600 truncate max-w-[200px]",
                            title: user.referralCodeOwner.instagram || "N/A",
                            children: user.referralCodeOwner.instagram || "N/A"
                        }, void 0, false, {
                            fileName: "[project]/app/dashboard/users/pending/page.jsx",
                            lineNumber: 409,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/dashboard/users/pending/page.jsx",
                    lineNumber: 399,
                    columnNumber: 11
                }, this);
            }
        },
        {
            key: "actions",
            header: "Actions",
            render: (user)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$dashboard$2f$users$2f$components$2f$ActionButtons$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ActionButtons"], {
                    onApprove: ()=>handleApprove(user.id),
                    onReject: ()=>handleReject(user.id),
                    showApproveReject: true,
                    approveLoading: isUserActionLoading(user.id, "approve"),
                    rejectLoading: isUserActionLoading(user.id, "reject")
                }, void 0, false, {
                    fileName: "[project]/app/dashboard/users/pending/page.jsx",
                    lineNumber: 423,
                    columnNumber: 9
                }, this)
        }
    ];
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen bg-white p-8",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$LoadingSpinner$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LoadingSpinner"], {}, void 0, false, {
                    fileName: "[project]/app/dashboard/users/pending/page.jsx",
                    lineNumber: 438,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/dashboard/users/pending/page.jsx",
                lineNumber: 437,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/dashboard/users/pending/page.jsx",
            lineNumber: 436,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-white p-8",
        children: [
            toast && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Toast$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                message: toast.message,
                type: toast.type,
                onClose: ()=>setToast(null)
            }, void 0, false, {
                fileName: "[project]/app/dashboard/users/pending/page.jsx",
                lineNumber: 447,
                columnNumber: 9
            }, this),
            showLimitPopup && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$dashboard$2f$users$2f$components$2f$Popup$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                message: "Referral code has reached its usage limit, All user data will be deleted",
                buttonText: "OK",
                onClose: handleLimitPopupClose
            }, void 0, false, {
                fileName: "[project]/app/dashboard/users/pending/page.jsx",
                lineNumber: 455,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-3xl font-bold text-black mb-2",
                                children: "Pending User Approvals"
                            }, void 0, false, {
                                fileName: "[project]/app/dashboard/users/pending/page.jsx",
                                lineNumber: 463,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-600",
                                children: "Review and approve or reject pending user registrations"
                            }, void 0, false, {
                                fileName: "[project]/app/dashboard/users/pending/page.jsx",
                                lineNumber: 466,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/dashboard/users/pending/page.jsx",
                        lineNumber: 462,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-6",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$dashboard$2f$users$2f$components$2f$SearchBar$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SearchBar"], {
                            value: searchQuery,
                            onChange: setSearchQuery,
                            placeholder: "Search users by email, name, business, phone, website, or Instagram...",
                            className: "w-full max-w-md"
                        }, void 0, false, {
                            fileName: "[project]/app/dashboard/users/pending/page.jsx",
                            lineNumber: 472,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/dashboard/users/pending/page.jsx",
                        lineNumber: 471,
                        columnNumber: 9
                    }, this),
                    selectedUsers.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-6",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$dashboard$2f$users$2f$components$2f$BulkActions$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BulkActions"], {
                            selectedCount: selectedUsers.length,
                            onBulkApprove: handleBulkApprove,
                            onBulkReject: handleBulkReject,
                            loading: bulkLoading
                        }, void 0, false, {
                            fileName: "[project]/app/dashboard/users/pending/page.jsx",
                            lineNumber: 482,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/dashboard/users/pending/page.jsx",
                        lineNumber: 481,
                        columnNumber: 11
                    }, this),
                    filteredUsers.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$dashboard$2f$users$2f$components$2f$DataTable$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DataTable"], {
                        data: filteredUsers,
                        columns: columns,
                        selectedRows: selectedUsers,
                        onSelectAll: handleSelectAll,
                        onSelectRow: handleSelectUser,
                        className: "bg-white border border-gray-200 rounded-lg shadow-sm"
                    }, void 0, false, {
                        fileName: "[project]/app/dashboard/users/pending/page.jsx",
                        lineNumber: 492,
                        columnNumber: 11
                    }, this) : searchQuery ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$dashboard$2f$users$2f$components$2f$EmptyState$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EmptyState"], {
                        title: "No users found",
                        description: "No pending users match your search criteria."
                    }, void 0, false, {
                        fileName: "[project]/app/dashboard/users/pending/page.jsx",
                        lineNumber: 501,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$dashboard$2f$users$2f$components$2f$EmptyState$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EmptyState"], {
                        title: "No pending users",
                        description: "There are no users waiting for approval at the moment."
                    }, void 0, false, {
                        fileName: "[project]/app/dashboard/users/pending/page.jsx",
                        lineNumber: 506,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/dashboard/users/pending/page.jsx",
                lineNumber: 461,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$dashboard$2f$referrals$2f$components$2f$Modal$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                isOpen: showUsageModal,
                onClose: ()=>{
                    setShowUsageModal(false);
                    setSelectedUser(null);
                    setUsageData([]);
                },
                title: `Referral Code: ${selectedUser?.referralCodeOwner?.code || "N/A"}`,
                size: "lg",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-4",
                        children: [
                            selectedUser && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-gray-50 p-4 rounded-lg",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-sm font-medium text-gray-700",
                                                    children: "Total Usage:"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/dashboard/users/pending/page.jsx",
                                                    lineNumber: 530,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-2xl font-bold text-gray-900",
                                                    children: Array.isArray(usageData) ? usageData.length : 0
                                                }, void 0, false, {
                                                    fileName: "[project]/app/dashboard/users/pending/page.jsx",
                                                    lineNumber: 533,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/dashboard/users/pending/page.jsx",
                                            lineNumber: 529,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-right",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-sm font-medium text-gray-700",
                                                    children: "Code Owner:"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/dashboard/users/pending/page.jsx",
                                                    lineNumber: 538,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "font-medium text-gray-900  max-w-[340px] break-words",
                                                    children: selectedUser.referralCodeOwner?.email || "N/A"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/dashboard/users/pending/page.jsx",
                                                    lineNumber: 541,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/dashboard/users/pending/page.jsx",
                                            lineNumber: 537,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/dashboard/users/pending/page.jsx",
                                    lineNumber: 528,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/dashboard/users/pending/page.jsx",
                                lineNumber: 527,
                                columnNumber: 13
                            }, this),
                            usageLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-center py-8",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader$3e$__["Loader"], {
                                        className: "h-6 w-6 animate-spin mr-2"
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/users/pending/page.jsx",
                                        lineNumber: 551,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Loading usage data..."
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/users/pending/page.jsx",
                                        lineNumber: 552,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/dashboard/users/pending/page.jsx",
                                lineNumber: 550,
                                columnNumber: 13
                            }, this) : !Array.isArray(usageData) || usageData.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-center py-8",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-gray-500 mb-2",
                                        children: "No usage data found for this referral code"
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/users/pending/page.jsx",
                                        lineNumber: 556,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-sm text-gray-400",
                                        children: "This code hasn't been used by any users yet."
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/users/pending/page.jsx",
                                        lineNumber: 559,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/dashboard/users/pending/page.jsx",
                                lineNumber: 555,
                                columnNumber: 13
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-sm font-medium text-gray-700 mb-3",
                                        children: "Users who used this code:"
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/users/pending/page.jsx",
                                        lineNumber: 565,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-2 max-h-[400px] overflow-y-auto",
                                        children: usageData.map((usage, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex-1",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "font-medium text-sm text-gray-900 truncate",
                                                                children: usage.user?.email || "No email"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/dashboard/users/pending/page.jsx",
                                                                lineNumber: 575,
                                                                columnNumber: 23
                                                            }, this),
                                                            (usage.user?.firstName || usage.user?.lastName) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-xs text-gray-600 mt-1",
                                                                children: [
                                                                    usage.user?.firstName,
                                                                    usage.user?.lastName
                                                                ].filter(Boolean).join(" ")
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/dashboard/users/pending/page.jsx",
                                                                lineNumber: 579,
                                                                columnNumber: 25
                                                            }, this),
                                                            usage.referralLevel && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "inline-block mt-2 text-xs bg-orange-100 text-orange-700 px-2 py-1 rounded",
                                                                children: [
                                                                    "Level ",
                                                                    usage.referralLevel
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/dashboard/users/pending/page.jsx",
                                                                lineNumber: 586,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/dashboard/users/pending/page.jsx",
                                                        lineNumber: 574,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-right space-y-1",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-xs text-gray-500",
                                                                children: usage.usedAt ? new Date(usage.usedAt).toLocaleDateString("en-US", {
                                                                    year: "numeric",
                                                                    month: "short",
                                                                    day: "numeric"
                                                                }) : "Unknown"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/dashboard/users/pending/page.jsx",
                                                                lineNumber: 592,
                                                                columnNumber: 23
                                                            }, this),
                                                            parseFloat(usage.pointsToUser) > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-xs text-green-600 font-medium",
                                                                children: [
                                                                    "+",
                                                                    parseFloat(usage.pointsToUser).toFixed(1),
                                                                    " pts"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/dashboard/users/pending/page.jsx",
                                                                lineNumber: 602,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/dashboard/users/pending/page.jsx",
                                                        lineNumber: 591,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, usage.id || `usage-${index}`, true, {
                                                fileName: "[project]/app/dashboard/users/pending/page.jsx",
                                                lineNumber: 570,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/users/pending/page.jsx",
                                        lineNumber: 568,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/dashboard/users/pending/page.jsx",
                                lineNumber: 564,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/dashboard/users/pending/page.jsx",
                        lineNumber: 525,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-6",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>{
                                setShowUsageModal(false);
                                setSelectedUser(null);
                                setUsageData([]);
                            },
                            className: "w-full bg-gray-300 hover:bg-gray-400 shadow-sm px-5 py-2 rounded-xl cursor-pointer transition-colors",
                            children: "Close"
                        }, void 0, false, {
                            fileName: "[project]/app/dashboard/users/pending/page.jsx",
                            lineNumber: 614,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/dashboard/users/pending/page.jsx",
                        lineNumber: 613,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/dashboard/users/pending/page.jsx",
                lineNumber: 514,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/dashboard/users/pending/page.jsx",
        lineNumber: 445,
        columnNumber: 5
    }, this);
}
_s(PendingUsersPage, "Iomd2FfsNJ8BuSskQPQwaxG3p2Q=");
_c = PendingUsersPage;
var _c;
__turbopack_context__.k.register(_c, "PendingUsersPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=_0780d8a0._.js.map