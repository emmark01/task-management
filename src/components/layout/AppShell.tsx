import type { ReactNode } from "react";
import { Sidebar } from "./Sidebar";
import { Header } from "./Header";
import "./AppShell.css";

interface AppShellProps {
  title: string;
  kicker?: string;
  children: ReactNode;
}

export function AppShell({ title, kicker, children }: AppShellProps) {
  return (
    <div className="nw-shell">
      <Sidebar />
      <div className="nw-main">
        <Header title={title} kicker={kicker} />
        {children}
      </div>
    </div>
  );
}
