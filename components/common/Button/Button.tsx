import React, { ButtonHTMLAttributes } from "react";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children?: React.ReactNode;
  transparent?: boolean;
  width?: string;
};

const Button = ({ children, width, transparent, ...props }: ButtonProps) => {
  return (
    <button
      {...props}
      style={{ width }}
      className={` h-[43px] ${
        transparent
          ? "bg-white border border-orange-600 text-orange-600"
          : "bg-gradient-to-r from-orange-500 to-red-500 text-white "
      }   py-2 px-4 rounded-full font-semibold`}
    >
      {children}
    </button>
  );
};

export default Button;
