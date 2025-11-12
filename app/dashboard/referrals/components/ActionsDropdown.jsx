import { List, Loader, MoreVertical, Pause, Trash2, UserPlus, UserMinus } from "lucide-react";
import React, { useState } from "react";

const ActionsDropdown = ({
  onPause,
  onList,
  onDelete,
  onAssign,
  onUnassign,
  isPaused = false,
  loading = false,
  hasAssignedUser = false,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleAction = (action) => {
    setIsOpen(false);
    action();
  };

  return (
    <div className="relative">
      <button
        onClick={(e) => {
          e.stopPropagation();
          setIsOpen(!isOpen);
        }}
        className="p-1 hover:bg-gray-100 rounded-full transition-colors"
        disabled={loading}
      >
        {loading ? (
          <Loader className="h-4 w-4 animate-spin" />
        ) : (
          <MoreVertical className="h-4 w-4" />
        )}
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-10"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg border border-gray-200 z-20">
            <div className="py-1">
              <button
                onClick={() => handleAction(onPause)}
                className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                <Pause className="h-4 w-4 mr-2" />
                {isPaused ? "Resume" : "Pause"}
              </button>
              <button
                onClick={() => handleAction(onList)}
                className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                <List className="h-4 w-4 mr-2" />
                View Usage
              </button>
              <button
                onClick={() => handleAction(onDelete)}
                className="flex items-center w-full px-4 py-2 text-sm text-red-600 hover:bg-red-50"
              >
                <Trash2 className="h-4 w-4 mr-2" />
                Delete
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

          // {hasAssignedUser ? (
          //       <button
          //         onClick={() => handleAction(onUnassign)}
          //         className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          //       >
          //         <UserMinus className="h-4 w-4 mr-2" />
          //         Unassign User
          //       </button>
          //     ) : (
          //       <button
          //         onClick={() => handleAction(onAssign)}
          //         className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          //       >
          //         <UserPlus className="h-4 w-4 mr-2" />
          //         Assign User
          //       </button>
          //     )}

export default ActionsDropdown;