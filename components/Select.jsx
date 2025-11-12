import React from "react";

const Select = ({ label, options, ...props }) => (
  <div className="space-y-2">
    {label && (
      <label className="block text-sm font-medium text-gray-800">{label}</label>
    )}
    <select
      {...props}
      className="w-full px-3 py-2 bg-gray-100 rounded-lg focus:ring-0 focus:outline-none transition-all"
    >
      {options.map((option, index) => (
        <option key={index} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  </div>
);

export default Select;
