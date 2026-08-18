import { useMemo, useState } from "react";
import { useTasks } from "../../context/TaskContext";
import { Icons } from "../icons/Icons";
import { IconButton } from "../ui/IconButton";
import { Input } from "../ui/Input";
import "./SearchOverlay.css";

interface SearchOverlayProps {
  open: boolean;
  onClose: () => void;
}

export function SearchOverlay({ open, onClose }: SearchOverlayProps) {
  const { tasks, projects } = useTasks();
  const [query, setQuery] = useState("");

  const results = useMemo(() => {
    const needle = query.trim().toLowerCase();
    if (!needle) return tasks.slice(0, 5);
    return tasks.filter(
      (task) =>
        task.title.toLowerCase().includes(needle) ||
        task.tags.some((tag) => tag.includes(needle)),
    );
  }, [query, tasks]);

  if (!open) return null;

  return (
    <div className="nw-search-backdrop" onClick={onClose} role="presentation">
      <div
        className="nw-search"
        role="dialog"
        aria-label="Search tasks"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="nw-search-bar">
          <Icons.search />
          <Input
            autoFocus
            placeholder="Search tasks, tags, or titles"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
          <IconButton label="Close search" onClick={onClose}>
            <Icons.close />
          </IconButton>
        </div>
        <ul>
          {results.map((task) => {
            const project = projects.find((item) => item.id === task.projectId);
            return (
              <li key={task.id}>
                <strong>{task.title}</strong>
                <span>
                  {project?.name} · {task.priority}
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
