import type { InputHTMLAttributes } from "react";
import "./Field.css";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export function Input({ label, id, className = "", ...props }: InputProps) {
  return (
    <label className="nw-field" htmlFor={id}>
      {label ? <span>{label}</span> : null}
      <input id={id} className={`nw-input ${className}`} {...props} />
    </label>
  );
}
