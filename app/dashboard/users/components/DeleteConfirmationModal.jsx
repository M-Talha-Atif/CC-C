import { useState } from 'react';

export default function DeleteConfirmationModal({ 
  isOpen, 
  onClose, 
  onConfirm, 
  userName, 
  userEmail,
  loading = false 
}) {
  const [confirmText, setConfirmText] = useState('');
  const requiredText = 'DELETE';

  if (!isOpen) return null;

  const handleConfirm = () => {
    if (confirmText === requiredText) {
      onConfirm();
    }
  };

  const isConfirmDisabled = confirmText !== requiredText || loading;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-[#0006] bg-opacity-50 transition-opacity"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="flex min-h-full items-center justify-center p-4">
        <div className="relative bg-white rounded-lg shadow-xl max-w-md w-full mx-4">
          {/* Header */}
          <div className="px-6 py-4 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <svg 
                    className="h-6 w-6 text-red-600" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.464 0L4.35 16.5c-.77.833.192 2.5 1.732 2.5z" 
                    />
                  </svg>
                </div>
                <h3 className="ml-3 text-lg font-medium text-gray-900">
                  Delete User
                </h3>
              </div>
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-gray-600"
              >
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>

          {/* Body */}
          <div className="px-6 py-4">
            <div className="mb-4">
              <p className="text-sm text-gray-600 mb-2">
                You are about to permanently delete the following user:
              </p>
              <div className="bg-gray-50 p-3 rounded-md">
                <p className="font-medium text-gray-900">{userName || 'N/A'}</p>
                <p className="text-sm text-gray-600">{userEmail}</p>
              </div>
            </div>

            <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-md">
              <h4 className="text-sm font-medium text-red-800 mb-2">⚠️ Warning</h4>
              <ul className="text-xs text-red-700 space-y-1">
                <li>• This action cannot be undone</li>
                <li>• All user data will be permanently deleted</li>
                <li>• Posts, comments, and interactions will be removed</li>
                <li>• Referral codes and points will be deleted</li>
                <li>• Payment history will be lost</li>
              </ul>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Type <span className="font-mono bg-gray-100 px-2 py-1 rounded text-red-600">DELETE</span> to confirm:
              </label>
              <input
                type="text"
                value={confirmText}
                onChange={(e) => setConfirmText(e.target.value)}
                placeholder="Type DELETE to confirm"
                className="block w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
                disabled={loading}
              />
            </div>
          </div>

          {/* Footer */}
          <div className="px-6 py-4 border-t border-gray-200 flex justify-end space-x-3">
            <button
              onClick={onClose}
              disabled={loading}
              className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Cancel
            </button>
            <button
              onClick={handleConfirm}
              disabled={isConfirmDisabled}
              className="px-4 py-2 text-sm font-medium text-white bg-red-600 border border-transparent rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? (
                <div className="flex items-center">
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Deleting...
                </div>
              ) : (
                'Delete User'
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}