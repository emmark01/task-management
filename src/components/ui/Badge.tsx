import "./Badge.css";

interface BadgeProps {
  tone?: "forest" | "rust" | "gold" | "sky" | "rose" | "ink";
  children: string;
}

export function Badge({ tone = "forest", children }: BadgeProps) {
  return <span className={`nw-badge nw-badge-${tone}`}>{children}</span>;
}
