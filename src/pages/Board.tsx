import { useState } from "react";
import { AppShell } from "../components/layout/AppShell";
import { KanbanBoard } from "../components/tasks/KanbanBoard";
import { TaskDetailDrawer } from "../components/tasks/TaskDetailDrawer";
import { TaskFilters, type TaskFilterState } from "../components/tasks/TaskFilters";
import { useTasks } from "../context/TaskContext";
import type { Task } from "../types";
import { filterTasks } from "../utils/filterTasks";

export function BoardPage() {
  const { tasks, projects, moveTask } = useTasks();
  const [openTask, setOpenTask] = useState<Task | null>(null);
  const [filters, setFilters] = useState<TaskFilterState>({
    query: "",
    projectId: "",
    priority: "",
  });
  const visible = filterTasks(tasks, filters);

  return (
    <AppShell title="Board" kicker="Flow">
      <TaskFilters value={filters} projects={projects} onChange={setFilters} />
      <KanbanBoard tasks={visible} onOpen={setOpenTask} onMove={moveTask} />
      <TaskDetailDrawer task={openTask} onClose={() => setOpenTask(null)} />
    </AppShell>
  );
}
