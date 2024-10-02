import React, { SelectHTMLAttributes } from "react";

export type SelectDropdownProps = SelectHTMLAttributes<HTMLSelectElement> & {
  options: { value: string; label: string }[];
  width?: string;
};

const SelectDropdown = ({ options, width, ...props }: SelectDropdownProps) => {
  return (
    <select
      {...props}
      style={{ width }}
      className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default SelectDropdown;
