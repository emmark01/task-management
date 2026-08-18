import type { ReactNode } from "react";
import "./StatCard.css";

interface StatCardProps {
  label: string;
  value: string;
  hint: string;
  icon: ReactNode;
}

export function StatCard({ label, value, hint, icon }: StatCardProps) {
  return (
    <article className="nw-stat">
      <div className="nw-stat-icon">{icon}</div>
      <span>{label}</span>
      <strong>{value}</strong>
      <p>{hint}</p>
    </article>
  );
}
