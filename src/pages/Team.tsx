import { AppShell } from "../components/layout/AppShell";
import { Avatar } from "../components/ui/Avatar";
import { Badge } from "../components/ui/Badge";
import { useTasks } from "../context/TaskContext";
import "./Team.css";

export function TeamPage() {
  const { users, tasks } = useTasks();

  return (
    <AppShell title="Team" kicker="People">
      <div className="nw-team-grid">
        {users.map((user) => {
          const assigned = tasks.filter((task) =>
            task.assigneeIds.includes(user.id),
          );
          return (
            <article key={user.id} className="nw-person">
              <Avatar user={user} size="lg" />
              <div>
                <h3>{user.name}</h3>
                <p>{user.role}</p>
                <p className="nw-muted">{user.email}</p>
              </div>
              <Badge tone={user.online ? "forest" : "ink"}>
                {user.online ? "Online" : "Away"}
              </Badge>
              <span>{assigned.length} open assignments</span>
            </article>
          );
        })}
      </div>
    </AppShell>
  );
}
