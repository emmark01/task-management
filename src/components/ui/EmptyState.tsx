import type { ReactNode } from "react";
import "./EmptyState.css";

interface EmptyStateProps {
  title: string;
  body: string;
  action?: ReactNode;
}

export function EmptyState({ title, body, action }: EmptyStateProps) {
  return (
    <div className="nw-empty">
      <h3>{title}</h3>
      <p>{body}</p>
      {action}
    </div>
  );
}
