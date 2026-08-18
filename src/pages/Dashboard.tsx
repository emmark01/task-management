import { useTasks } from "../context/TaskContext";
import { AppShell } from "../components/layout/AppShell";
import { StatCard } from "../components/dashboard/StatCard";
import { Icons } from "../components/icons/Icons";
import { TaskCard } from "../components/tasks/TaskCard";
import { Avatar } from "../components/ui/Avatar";
import { formatDateTime } from "../utils/format";
import { useState } from "react";
import type { Task } from "../types";
import { TaskDetailDrawer } from "../components/tasks/TaskDetailDrawer";
import "./Dashboard.css";

export function DashboardPage() {
  const { tasks, activity, users, projects } = useTasks();
  const [openTask, setOpenTask] = useState<Task | null>(null);
  const openCount = tasks.filter((task) => task.status !== "done").length;
  const reviewCount = tasks.filter((task) => task.status === "review").length;
  const upcoming = [...tasks]
    .filter((task) => task.status !== "done")
    .sort((a, b) => a.dueDate.localeCompare(b.dueDate))
    .slice(0, 4);

  return (
    <AppShell title="Good evening, Mira" kicker="Home">
      <section className="nw-stats">
        <StatCard
          label="Open work"
          value={String(openCount)}
          hint="Across every project"
          icon={<Icons.list />}
        />
        <StatCard
          label="In review"
          value={String(reviewCount)}
          hint="Waiting on a second look"
          icon={<Icons.board />}
        />
        <StatCard
          label="Projects"
          value={String(projects.length)}
          hint="Two due this month"
          icon={<Icons.folder />}
        />
        <StatCard
          label="Team"
          value={String(users.length)}
          hint={`${users.filter((user) => user.online).length} online now`}
          icon={<Icons.people />}
        />
      </section>
      <div className="nw-dash-grid">
        <section>
          <h2>Coming due</h2>
          <div className="nw-upcoming">
            {upcoming.map((task) => (
              <TaskCard key={task.id} task={task} onOpen={setOpenTask} />
            ))}
          </div>
        </section>
        <section className="nw-activity">
          <h2>Trail log</h2>
          <ul>
            {activity.map((item) => {
              const actor = users.find((user) => user.id === item.actorId);
              return (
                <li key={item.id}>
                  {actor ? <Avatar user={actor} size="sm" /> : null}
                  <div>
                    <p>
                      <b>{actor?.name}</b> {item.verb} {item.target}
                    </p>
                    <small>{formatDateTime(item.createdAt)}</small>
                  </div>
                </li>
              );
            })}
          </ul>
        </section>
      </div>
      <TaskDetailDrawer task={openTask} onClose={() => setOpenTask(null)} />
    </AppShell>
  );
}
