import { useState } from "react";
import { Icons } from "../icons/Icons";
import { Button } from "../ui/Button";
import { IconButton } from "../ui/IconButton";
import { NotificationPanel } from "../notifications/NotificationPanel";
import { SearchOverlay } from "../search/SearchOverlay";
import { CreateTaskModal } from "../tasks/CreateTaskModal";
import "./Header.css";

interface HeaderProps {
  title: string;
  kicker?: string;
}

export function Header({ title, kicker = "Northwood" }: HeaderProps) {
  const [createOpen, setCreateOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [notesOpen, setNotesOpen] = useState(false);

  return (
    <header className="nw-header">
      <div>
        <p className="nw-kicker">{kicker}</p>
        <h1>{title}</h1>
      </div>
      <div className="nw-header-actions">
        <IconButton label="Search tasks" onClick={() => setSearchOpen(true)}>
          <Icons.search />
        </IconButton>
        <div className="nw-header-bell">
          <IconButton
            label="Notifications"
            onClick={() => setNotesOpen((open) => !open)}
          >
            <Icons.bell />
          </IconButton>
          {notesOpen ? (
            <NotificationPanel onClose={() => setNotesOpen(false)} />
          ) : null}
        </div>
        <Button icon={<Icons.plus />} onClick={() => setCreateOpen(true)}>
          New task
        </Button>
      </div>
      <CreateTaskModal open={createOpen} onClose={() => setCreateOpen(false)} />
      <SearchOverlay open={searchOpen} onClose={() => setSearchOpen(false)} />
    </header>
  );
}
