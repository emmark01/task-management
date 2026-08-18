import type { ButtonHTMLAttributes, ReactNode } from "react";
import "./Button.css";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "quiet" | "ghost" | "danger";
  size?: "sm" | "md";
  icon?: ReactNode;
}

export function Button({
  variant = "primary",
  size = "md",
  icon,
  children,
  className = "",
  ...props
}: ButtonProps) {
  return (
    <button
      className={`nw-btn nw-btn-${variant} nw-btn-${size} ${className}`}
      {...props}
    >
      {icon}
      {children}
    </button>
  );
}
