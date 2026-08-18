import { useMemo, useState } from "react";
import { AppShell } from "../components/layout/AppShell";
import { TaskDetailDrawer } from "../components/tasks/TaskDetailDrawer";
import { useTasks } from "../context/TaskContext";
import type { Task } from "../types";
import "./Calendar.css";

function startOfMonth(date: Date) {
  return new Date(date.getFullYear(), date.getMonth(), 1);
}

function daysInGrid(date: Date) {
  const start = startOfMonth(date);
  const startDay = (start.getDay() + 6) % 7;
  const total = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  const cells: { date: Date; inMonth: boolean }[] = [];
  for (let i = 0; i < startDay; i += 1) {
    const previous = new Date(start);
    previous.setDate(start.getDate() - (startDay - i));
    cells.push({ date: previous, inMonth: false });
  }
  for (let day = 1; day <= total; day += 1) {
    cells.push({
      date: new Date(date.getFullYear(), date.getMonth(), day),
      inMonth: true,
    });
  }
  while (cells.length % 7 !== 0) {
    const last = cells[cells.length - 1].date;
    const next = new Date(last);
    next.setDate(last.getDate() + 1);
    cells.push({ date: next, inMonth: false });
  }
  return cells;
}

function isoDate(date: Date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

export function CalendarPage() {
  const { tasks, projects } = useTasks();
  const [month] = useState(new Date("2026-08-01"));
  const [openTask, setOpenTask] = useState<Task | null>(null);
  const cells = useMemo(() => daysInGrid(month), [month]);
  const monthLabel = month.toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });

  return (
    <AppShell title={monthLabel} kicker="Calendar">
      <div className="nw-cal-head">
        {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => (
          <span key={day}>{day}</span>
        ))}
      </div>
      <div className="nw-cal-grid">
        {cells.map((cell) => {
          const key = isoDate(cell.date);
          const dayTasks = tasks.filter((task) => task.dueDate === key);
          return (
            <div
              key={key}
              className={`nw-cal-cell ${cell.inMonth ? "" : "is-muted"}`}
            >
              <strong>{cell.date.getDate()}</strong>
              {dayTasks.map((task) => {
                const project = projects.find(
                  (item) => item.id === task.projectId,
                );
                return (
                  <button
                    key={task.id}
                    type="button"
                    style={{ borderLeftColor: project?.color }}
                    onClick={() => setOpenTask(task)}
                  >
                    {task.title}
                  </button>
                );
              })}
            </div>
          );
        })}
      </div>
      <TaskDetailDrawer task={openTask} onClose={() => setOpenTask(null)} />
    </AppShell>
  );
}
