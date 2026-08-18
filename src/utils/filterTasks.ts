import type { Task } from "../types";
import type { TaskFilterState } from "../components/tasks/TaskFilters";

export function filterTasks(tasks: Task[], filters: TaskFilterState) {
  const needle = filters.query.trim().toLowerCase();
  return tasks.filter((task) => {
    const matchesQuery =
      !needle ||
      task.title.toLowerCase().includes(needle) ||
      task.tags.some((tag) => tag.toLowerCase().includes(needle));
    const matchesProject =
      !filters.projectId || task.projectId === filters.projectId;
    const matchesPriority =
      !filters.priority || task.priority === filters.priority;
    return matchesQuery && matchesProject && matchesPriority;
  });
}
