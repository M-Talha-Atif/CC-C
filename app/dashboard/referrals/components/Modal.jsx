import { X } from "lucide-react";
import React from "react";

const Modal = ({ isOpen, onClose, title, children, size = "md" }) => {
  if (!isOpen) return null;

  const sizeClasses = {
    sm: "max-w-sm",
    md: "max-w-md",
    lg: "max-w-lg",
    xl: "max-w-xl",
  };

  return (
    <div className="fixed inset-0 bg-[#0000004a] bg-opacity-75 flex items-center justify-center p-4 z-50">
      <div
        className={`bg-gray-200 rounded-lg shadow-2xl ${sizeClasses[size]} w-full`}
      >
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold">{title}</h3>
            <button
              onClick={onClose}
              className="hover:text-gray-300 transition-colors cursor-pointer"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
