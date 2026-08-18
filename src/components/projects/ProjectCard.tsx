import type { Project } from "../../types";
import { useTasks } from "../../context/TaskContext";
import { formatDate } from "../../utils/format";
import { AvatarGroup } from "../ui/Avatar";
import { Badge } from "../ui/Badge";
import { ProgressBar } from "../ui/ProgressBar";
import "./ProjectCard.css";

const statusTone = {
  "on-track": "forest",
  "at-risk": "rust",
  paused: "gold",
} as const;

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const { users, tasks } = useTasks();
  const members = users.filter((user) => project.memberIds.includes(user.id));
  const count = tasks.filter((task) => task.projectId === project.id).length;

  return (
    <article className="nw-project-card">
      <div className="nw-project-swatch" style={{ background: project.color }} />
      <div className="nw-project-card-body">
        <div className="nw-task-card-top">
          <h3>{project.name}</h3>
          <Badge tone={statusTone[project.status]}>
            {project.status.replace("-", " ")}
          </Badge>
        </div>
        <p>{project.description}</p>
        <ProgressBar value={project.progress} />
        <div className="nw-project-meta">
          <AvatarGroup users={members} />
          <span>
            {count} tasks · due {formatDate(project.dueDate)}
          </span>
        </div>
      </div>
    </article>
  );
}
