import React, { InputHTMLAttributes } from "react";

export type ToggleProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
};

const Toggle = ({ label, ...props }: ToggleProps) => {
  return (
    <div className="flex items-center space-x-2">
      <label className="relative inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          className="sr-only peer"
          {...props}
        />
        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:bg-orange-400 peer-focus:ring-2 peer-focus:ring-orange-300"></div>
        <div className="absolute left-[2px] top-[2px] bg-white w-5 h-5 rounded-full transition-transform peer-checked:translate-x-5"></div>
      </label>
      <span>{label}</span>
    </div>
  );
};

export default Toggle;
