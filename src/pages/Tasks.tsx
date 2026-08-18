import { useState } from "react";
import { AppShell } from "../components/layout/AppShell";
import { EmptyState } from "../components/ui/EmptyState";
import { TaskDetailDrawer } from "../components/tasks/TaskDetailDrawer";
import { TaskFilters, type TaskFilterState } from "../components/tasks/TaskFilters";
import { TaskList } from "../components/tasks/TaskList";
import { useTasks } from "../context/TaskContext";
import type { Task } from "../types";
import { filterTasks } from "../utils/filterTasks";

export function TasksPage() {
  const { tasks, projects, moveTask } = useTasks();
  const [openTask, setOpenTask] = useState<Task | null>(null);
  const [filters, setFilters] = useState<TaskFilterState>({
    query: "",
    projectId: "",
    priority: "",
  });
  const visible = filterTasks(tasks, filters);

  return (
    <AppShell title="Tasks" kicker="List">
      <TaskFilters value={filters} projects={projects} onChange={setFilters} />
      {visible.length === 0 ? (
        <EmptyState
          title="Nothing on this trail"
          body="Try another project, priority, or search phrase."
        />
      ) : (
        <TaskList
          tasks={visible}
          onOpen={setOpenTask}
          onToggleDone={(task) =>
            moveTask(task.id, task.status === "done" ? "todo" : "done")
          }
        />
      )}
      <TaskDetailDrawer task={openTask} onClose={() => setOpenTask(null)} />
    </AppShell>
  );
}
