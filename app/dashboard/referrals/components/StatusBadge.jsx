import React from "react";

const StatusBadge = ({ status, variant = "default" }) => {
  const variants = {
    success: "bg-green-900 text-green-300 border-green-700",
    warning: "bg-yellow-900 text-yellow-300 border-yellow-700",
    default: "bg-gray-800 text-gray-300 border-gray-600",
    active: "bg-blue-900 text-blue-300 border-blue-700",
    paused: "bg-red-900 text-red-300 border-red-700",
  };

  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${variants[variant]}`}
    >
      {status}
    </span>
  );
};

export default StatusBadge;
