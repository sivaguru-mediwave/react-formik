import React from "react";

interface ButtonProps {
  label: string;
  type: "button" | "submit" | "reset" | undefined;
  disabled?: boolean;
  addClass: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export const Button: React.FC<ButtonProps> = (props) => {
  const { label, type, disabled, addClass, onClick } = props;
  return (
    <div>
      <button
        disabled={disabled}
        className={`btn ${addClass}`}
        type={type}
        onClick={onClick}
      >
        {label}
      </button>
    </div>
  );
};
