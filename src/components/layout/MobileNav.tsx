import { NavLink } from "react-router-dom";
import { Icons } from "../icons/Icons";
import "./MobileNav.css";

const links = [
  { to: "/", label: "Home", icon: Icons.home },
  { to: "/board", label: "Board", icon: Icons.board },
  { to: "/tasks", label: "Tasks", icon: Icons.list },
  { to: "/projects", label: "Projects", icon: Icons.folder },
  { to: "/calendar", label: "Calendar", icon: Icons.calendar },
];

export function MobileNav() {
  return (
    <nav className="nw-mobile-nav" aria-label="Primary">
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
  );
}
