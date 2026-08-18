import type { Task } from "../../types";
import { useTasks } from "../../context/TaskContext";
import { formatDate, isOverdue } from "../../utils/format";
import { AvatarGroup } from "../ui/Avatar";
import { Badge } from "../ui/Badge";
import { PriorityBadge } from "../ui/StatusBadge";
import "./TaskCard.css";

interface TaskCardProps {
  task: Task;
  onOpen: (task: Task) => void;
}

export function TaskCard({ task, onOpen }: TaskCardProps) {
  const { users, projects } = useTasks();
  const assignees = users.filter((user) => task.assigneeIds.includes(user.id));
  const project = projects.find((item) => item.id === task.projectId);
  const overdue = isOverdue(task.dueDate) && task.status !== "done";

  return (
    <button type="button" className="nw-task-card" onClick={() => onOpen(task)}>
      <div className="nw-task-card-top">
        <Badge tone="ink">{project?.name ?? "Project"}</Badge>
        <PriorityBadge priority={task.priority} />
      </div>
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <div className="nw-task-card-meta">
        <AvatarGroup users={assignees} />
        <span className={overdue ? "is-overdue" : ""}>
          {formatDate(task.dueDate)}
        </span>
      </div>
    </button>
  );
}
