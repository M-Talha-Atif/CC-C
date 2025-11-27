import { useState } from "react";

const LoadingDots = ({ className = "" }) => (
  <div className={`flex space-x-1 ${className}`}>
    <div
      className="w-1 h-1 bg-current rounded-full animate-pulse"
      style={{ animationDelay: "0ms" }}
    ></div>
    <div
      className="w-1 h-1 bg-current rounded-full animate-pulse"
      style={{ animationDelay: "150ms" }}
    ></div>
    <div
      className="w-1 h-1 bg-current rounded-full animate-pulse"
      style={{ animationDelay: "300ms" }}
    ></div>
  </div>
);

export function ActionButtons({
  onApprove,
  onReject,
  onBlock,
  onDelete,
  showApproveReject = false,
  showBlockDelete = false,
  showDeleteOnly = false,
  loading = false, // Legacy prop for backward compatibility
  approveLoading = false,
  rejectLoading = false,
  blockLoading = false,
  deleteLoading = false,
}) {
  return (
    <div className="flex flex-col space-y-2">
      {showApproveReject && (
        <>
          <button
            onClick={onApprove}
            disabled={approveLoading || loading}
            className="px-3 py-1 text-xs font-medium text-green-700 bg-green-100 border border-green-300 rounded-md hover:bg-green-200 focus:outline-none focus:ring-2 focus:ring-green-500 disabled:opacity-50 disabled:cursor-not-allowed min-w-[70px] flex items-center justify-center"
          >
            {approveLoading || loading ? <LoadingDots /> : "✔️"}
          </button>
          <button
            onClick={onReject}
            disabled={rejectLoading || loading}
            className="px-3 py-1 text-xs font-medium text-red-700 bg-red-100 border border-red-300 rounded-md hover:bg-red-200 focus:outline-none focus:ring-2 focus:ring-red-500 disabled:opacity-50 disabled:cursor-not-allowed min-w-[60px] flex items-center justify-center"
          >
            {rejectLoading || loading ? <LoadingDots /> : "❌"}
          </button>
        </>

      )}

      {showBlockDelete && (
        <>
          <button
            onClick={onBlock}
            disabled={blockLoading || loading}
            className="px-3 py-1 text-xs font-medium text-orange-700 bg-orange-100 border border-orange-300 rounded-md hover:bg-orange-200 focus:outline-none focus:ring-2 focus:ring-orange-500 disabled:opacity-50 disabled:cursor-not-allowed min-w-[60px] flex items-center justify-center"
          >
            {blockLoading || loading ? <LoadingDots /> : "Block"}
          </button>
          <button
            onClick={onDelete}
            disabled={deleteLoading || loading}
            className="px-3 py-1 text-xs font-medium text-red-700 bg-red-100 border border-red-300 rounded-md hover:bg-red-200 focus:outline-none focus:ring-2 focus:ring-red-500 disabled:opacity-50 disabled:cursor-not-allowed min-w-[60px] flex items-center justify-center"
          >
            {deleteLoading || loading ? <LoadingDots /> : "Delete"}
          </button>
        </>
      )}

      {showDeleteOnly && (
        <button
          onClick={onDelete}
          disabled={deleteLoading || loading}
          className="px-3 py-1 text-xs font-medium text-red-700 bg-red-100 border border-red-300 rounded-md hover:bg-red-200 focus:outline-none focus:ring-2 focus:ring-red-500 disabled:opacity-50 disabled:cursor-not-allowed min-w-[60px] flex items-center justify-center"
        >
          {deleteLoading || loading ? <LoadingDots /> : "Delete"}
        </button>
      )}
    </div>
  );
}
