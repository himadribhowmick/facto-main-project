import React from "react";

type ButtonProps = {
  label?: string; // now optional
  children?: React.ReactNode; // allows text inside <Button>...</Button>
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
};

const Button: React.FC<ButtonProps> = ({
  label,
  children,
  onClick,
  className = "",
  type = "button",
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`
        flex items-center justify-center gap-2
        px-10 py-4
        rounded-full
        bg-[#0F4E23]
        opacity-100
        text-white text-[20px] font-semibold leading-[26px]
        transition-all duration-200
        hover:bg-[#0d441e]
        active:scale-95
        ${className}
      `}
    >
      {label || children}
    </button>
  );
};

export default Button;
