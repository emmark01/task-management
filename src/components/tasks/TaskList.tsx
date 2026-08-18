import type { Task } from "../../types";
import { useTasks } from "../../context/TaskContext";
import { formatDate } from "../../utils/format";
import { AvatarGroup } from "../ui/Avatar";
import { Checkbox } from "../ui/Checkbox";
import { PriorityBadge, StatusBadge } from "../ui/StatusBadge";
import "./TaskList.css";

interface TaskListProps {
  tasks: Task[];
  onOpen: (task: Task) => void;
  onToggleDone: (task: Task) => void;
}

export function TaskList({ tasks, onOpen, onToggleDone }: TaskListProps) {
  const { users, projects } = useTasks();

  return (
    <div className="nw-task-list">
      {tasks.map((task) => {
        const assignees = users.filter((user) =>
          task.assigneeIds.includes(user.id),
        );
        const project = projects.find((item) => item.id === task.projectId);
        return (
          <article key={task.id} className="nw-task-row">
            <Checkbox
              checked={task.status === "done"}
              onChange={() => onToggleDone(task)}
              aria-label={`Mark ${task.title} complete`}
            />
            <button type="button" onClick={() => onOpen(task)}>
              <h3>{task.title}</h3>
              <p>
                {project?.name} · {formatDate(task.dueDate)}
              </p>
            </button>
            <StatusBadge status={task.status} />
            <PriorityBadge priority={task.priority} />
            <AvatarGroup users={assignees} />
          </article>
        );
      })}
    </div>
  );
}
