import type { User } from "../../types";
import "./Avatar.css";

interface AvatarProps {
  user: User;
  size?: "sm" | "md" | "lg";
}

export function Avatar({ user, size = "md" }: AvatarProps) {
  return (
    <span
      className={`nw-avatar nw-avatar-${size}`}
      style={{ background: user.color }}
      title={user.name}
    >
      {user.initials}
      {user.online ? <i className="nw-avatar-dot" /> : null}
    </span>
  );
}

interface AvatarGroupProps {
  users: User[];
  max?: number;
}

export function AvatarGroup({ users, max = 3 }: AvatarGroupProps) {
  const shown = users.slice(0, max);
  const extra = users.length - shown.length;

  return (
    <div className="nw-avatar-group">
      {shown.map((user) => (
        <Avatar key={user.id} user={user} size="sm" />
      ))}
      {extra > 0 ? <span className="nw-avatar-extra">+{extra}</span> : null}
    </div>
  );
}
