import React from "react";

const Input = ({ label, ...props }) => (
  <div className="space-y-2">
    {label && (
      <label className="block text-sm font-medium text-gray-900">{label}</label>
    )}
    <input
      {...props}
      className="w-full px-3 py-2 bg-gray-100 rounded-lg placeholder-gray-400 focus:ring-0 focus:outline-none transition-all"
    />
  </div>
);

export default Input;
