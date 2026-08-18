import type { Task } from "../types";

export function makeTask(overrides: Partial<Task> = {}): Task {
  return {
    id: "t-test",
    title: "Draft launch narrative",
    description: "Write the story.",
    status: "todo",
    priority: "high",
    projectId: "p1",
    assigneeIds: ["u1"],
    dueDate: "2026-08-20",
    tags: ["copy", "launch"],
    estimateHours: 6,
    comments: [],
    createdAt: "2026-08-10T09:00:00Z",
    ...overrides,
  };
}
