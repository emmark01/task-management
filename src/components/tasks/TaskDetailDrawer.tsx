import type { Task, TaskStatus } from "../../types";
import { useTasks } from "../../context/TaskContext";
import { formatDate, formatDateTime } from "../../utils/format";
import { Icons } from "../icons/Icons";
import { Avatar, AvatarGroup } from "../ui/Avatar";
import { Badge } from "../ui/Badge";
import { IconButton } from "../ui/IconButton";
import { Select } from "../ui/Select";
import { PriorityBadge } from "../ui/StatusBadge";
import "./TaskDetailDrawer.css";

interface TaskDetailDrawerProps {
  task: Task | null;
  onClose: () => void;
}

export function TaskDetailDrawer({ task, onClose }: TaskDetailDrawerProps) {
  const { users, projects, updateTask, moveTask } = useTasks();
  if (!task) return null;

  const project = projects.find((item) => item.id === task.projectId);
  const assignees = users.filter((user) => task.assigneeIds.includes(user.id));

  return (
    <div className="nw-drawer-backdrop" onClick={onClose} role="presentation">
      <aside
        className="nw-drawer"
        role="dialog"
        aria-label={task.title}
        onClick={(event) => event.stopPropagation()}
      >
        <header>
          <Badge tone="ink">{project?.name ?? "Project"}</Badge>
          <IconButton label="Close task" onClick={onClose}>
            <Icons.close />
          </IconButton>
        </header>
        <h2>{task.title}</h2>
        <p>{task.description}</p>
        <div className="nw-drawer-grid">
          <Select
            label="Status"
            value={task.status}
            onChange={(event) =>
              moveTask(task.id, event.target.value as TaskStatus)
            }
          >
            <option value="backlog">Backlog</option>
            <option value="todo">To do</option>
            <option value="in-progress">In progress</option>
            <option value="review">Review</option>
            <option value="done">Done</option>
          </Select>
          <div>
            <span className="nw-field-label">Priority</span>
            <PriorityBadge priority={task.priority} />
          </div>
          <div>
            <span className="nw-field-label">Due</span>
            <strong>{formatDate(task.dueDate)}</strong>
          </div>
          <div>
            <span className="nw-field-label">Estimate</span>
            <strong>{task.estimateHours}h</strong>
          </div>
        </div>
        <div>
          <span className="nw-field-label">Assignees</span>
          <AvatarGroup users={assignees} max={5} />
        </div>
        <div className="nw-tags">
          {task.tags.map((tag) => (
            <Badge key={tag} tone="forest">
              {tag}
            </Badge>
          ))}
        </div>
        <section>
          <h3>Comments</h3>
          {task.comments.length === 0 ? (
            <p className="nw-muted">No comments yet.</p>
          ) : (
            task.comments.map((comment) => {
              const author = users.find((user) => user.id === comment.authorId);
              return (
                <div key={comment.id} className="nw-comment">
                  {author ? <Avatar user={author} size="sm" /> : null}
                  <div>
                    <strong>{author?.name}</strong>
                    <p>{comment.body}</p>
                    <small>{formatDateTime(comment.createdAt)}</small>
                  </div>
                </div>
              );
            })
          )}
        </section>
        <label className="nw-field">
          <span>Add a note</span>
          <textarea
            className="nw-textarea"
            placeholder="Leave a comment"
            onKeyDown={(event) => {
              if (event.key === "Enter" && !event.shiftKey) {
                event.preventDefault();
                const body = event.currentTarget.value.trim();
                if (!body) return;
                updateTask(task.id, {
                  comments: [
                    ...task.comments,
                    {
                      id: `c-${Date.now()}`,
                      authorId: users[0].id,
                      body,
                      createdAt: new Date().toISOString(),
                    },
                  ],
                });
                event.currentTarget.value = "";
              }
            }}
          />
        </label>
      </aside>
    </div>
  );
}
