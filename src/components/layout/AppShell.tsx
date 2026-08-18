import type { ReactNode } from "react";
import { Sidebar } from "./Sidebar";
import { Header } from "./Header";
import { MobileNav } from "./MobileNav";
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
        <MobileNav />
      </div>
    </div>
  );
}
