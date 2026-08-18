import type { SelectHTMLAttributes } from "react";
import "./Field.css";

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
}

export function Select({ label, id, children, ...props }: SelectProps) {
  return (
    <label className="nw-field" htmlFor={id}>
      {label ? <span>{label}</span> : null}
      <select id={id} className="nw-select" {...props}>
        {children}
      </select>
    </label>
  );
}
