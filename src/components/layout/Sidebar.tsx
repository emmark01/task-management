import { NavLink } from "react-router-dom";
import { Icons } from "../icons/Icons";
import { Avatar } from "../ui/Avatar";
import { useTasks } from "../../context/TaskContext";
import "./Sidebar.css";

const links = [
  { to: "/", label: "Home", icon: Icons.home },
  { to: "/board", label: "Board", icon: Icons.board },
  { to: "/tasks", label: "Tasks", icon: Icons.list },
  { to: "/projects", label: "Projects", icon: Icons.folder },
  { to: "/calendar", label: "Calendar", icon: Icons.calendar },
  { to: "/team", label: "Team", icon: Icons.people },
  { to: "/settings", label: "Settings", icon: Icons.settings },
];

export function Sidebar() {
  const { currentUser } = useTasks();

  return (
    <aside className="nw-sidebar">
      <div className="nw-brand">
        <Icons.tree />
        <div>
          <strong>Northwood</strong>
          <span>Workspace</span>
        </div>
      </div>
      <nav>
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            end={link.to === "/"}
            className={({ isActive }) => (isActive ? "is-active" : "")}
          >
            <link.icon />
            {link.label}
          </NavLink>
        ))}
      </nav>
      <div className="nw-sidebar-user">
        <Avatar user={currentUser} />
        <div>
          <strong>{currentUser.name}</strong>
          <span>{currentUser.role}</span>
        </div>
      </div>
    </aside>
  );
}
