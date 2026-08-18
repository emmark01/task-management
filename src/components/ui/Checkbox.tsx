import type { InputHTMLAttributes } from "react";
import "./Checkbox.css";

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export function Checkbox({ label, ...props }: CheckboxProps) {
  return (
    <label className="nw-check">
      <input type="checkbox" {...props} />
      <span />
      {label}
    </label>
  );
}
