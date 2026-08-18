import type { ButtonHTMLAttributes, ReactNode } from "react";
import "./IconButton.css";

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  children: ReactNode;
}

export function IconButton({
  label,
  children,
  className = "",
  ...props
}: IconButtonProps) {
  return (
    <button
      type="button"
      aria-label={label}
      className={`nw-icon-btn ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
