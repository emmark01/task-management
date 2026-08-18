import type { TextareaHTMLAttributes } from "react";
import "./Field.css";

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
}

export function Textarea({
  label,
  id,
  className = "",
  ...props
}: TextareaProps) {
  return (
    <label className="nw-field" htmlFor={id}>
      {label ? <span>{label}</span> : null}
      <textarea id={id} className={`nw-textarea ${className}`} {...props} />
    </label>
  );
}
