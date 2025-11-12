import { useState } from "react";

export function BulkActions({
  selectedCount,
  onBulkApprove,
  onBulkReject,
  loading,
}) {
  const [showConfirmation, setShowConfirmation] = useState(null); // 'approve' | 'reject'

  const handleConfirmAction = () => {
    if (showConfirmation === "approve") {
      onBulkApprove();
    } else if (showConfirmation === "reject") {
      onBulkReject();
    }
    setShowConfirmation(null);
  };

  return (
    <>
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="text-sm font-medium text-gray-900">
              {selectedCount} user{selectedCount !== 1 ? "s" : ""} selected
            </div>
            <div className="h-4 w-px bg-gray-300" />
            <div className="flex space-x-2">
              <button
                onClick={() => setShowConfirmation("approve")}
                disabled={loading}
                className="inline-flex items-center px-3 py-1.5 border border-black text-sm font-medium rounded-md text-black bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                {loading ? (
                  <div className="w-4 h-4 border-2 border-gray-300 border-t-black rounded-full animate-spin mr-2" />
                ) : (
                  <svg
                    className="w-4 h-4 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                )}
                Bulk Approve
              </button>
              <button
                onClick={() => setShowConfirmation("reject")}
                disabled={loading}
                className="inline-flex items-center px-3 py-1.5 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                {loading ? (
                  <div className="w-4 h-4 border-2 border-gray-300 border-t-gray-700 rounded-full animate-spin mr-2" />
                ) : (
                  <svg
                    className="w-4 h-4 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
                Bulk Reject
              </button>
            </div>
          </div>
          <div className="text-xs text-gray-500">
            Select users to perform bulk actions
          </div>
        </div>
      </div>

      {/* Confirmation Modal */}
      {showConfirmation && (
        <div className="fixed inset-0 bg-[#000000a0] bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
            <div className="flex items-center mb-4">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center mr-3 ${
                  showConfirmation === "approve" ? "bg-green-100" : "bg-red-100"
                }`}
              >
                {showConfirmation === "approve" ? (
                  <svg
                    className="w-5 h-5 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-5 h-5 text-red-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </div>
              <h3 className="text-lg font-medium text-gray-900">
                Confirm Bulk{" "}
                {showConfirmation === "approve" ? "Approval" : "Rejection"}
              </h3>
            </div>
            <p className="text-sm text-gray-600 mb-6">
              Are you sure you want to {showConfirmation} {selectedCount} user
              {selectedCount !== 1 ? "s" : ""}? This action cannot be undone.
            </p>
            <div className="flex justify-end space-x-3">
              <button
                onClick={() => setShowConfirmation(null)}
                className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
              >
                Cancel
              </button>
              <button
                onClick={handleConfirmAction}
                className={`px-4 py-2 text-sm font-medium text-white rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                  showConfirmation === "approve"
                    ? "bg-green-600 hover:bg-green-700 focus:ring-green-500"
                    : "bg-red-600 hover:bg-red-700 focus:ring-red-500"
                }`}
              >
                {showConfirmation === "approve" ? "Approve" : "Reject"} Users
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
