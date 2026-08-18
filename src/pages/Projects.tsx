import { AppShell } from "../components/layout/AppShell";
import { ProjectCard } from "../components/projects/ProjectCard";
import { useTasks } from "../context/TaskContext";
import "./Projects.css";

export function ProjectsPage() {
  const { projects } = useTasks();

  return (
    <AppShell title="Projects" kicker="Workstreams">
      <div className="nw-project-grid">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </AppShell>
  );
}
