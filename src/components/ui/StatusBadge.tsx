import type { TaskPriority, TaskStatus } from "../../types";
import { Badge } from "./Badge";

const statusTone = {
  backlog: "ink",
  todo: "sky",
  "in-progress": "gold",
  review: "rust",
  done: "forest",
} as const;

const priorityTone = {
  low: "ink",
  medium: "sky",
  high: "rust",
  urgent: "rose",
} as const;

const statusLabel: Record<TaskStatus, string> = {
  backlog: "Backlog",
  todo: "To do",
  "in-progress": "In progress",
  review: "Review",
  done: "Done",
};

export function StatusBadge({ status }: { status: TaskStatus }) {
  return <Badge tone={statusTone[status]}>{statusLabel[status]}</Badge>;
}

export function PriorityBadge({ priority }: { priority: TaskPriority }) {
  return <Badge tone={priorityTone[priority]}>{priority}</Badge>;
}
