import { Icons } from "../icons/Icons";
import { Select } from "../ui/Select";
import "./TaskFilters.css";

export interface TaskFilterState {
  query: string;
  projectId: string;
  priority: string;
}

interface TaskFiltersProps {
  value: TaskFilterState;
  projects: { id: string; name: string }[];
  onChange: (value: TaskFilterState) => void;
}

export function TaskFilters({ value, projects, onChange }: TaskFiltersProps) {
  return (
    <div className="nw-filters">
      <label className="nw-filter-search">
        <Icons.search />
        <input
          value={value.query}
          onChange={(event) =>
            onChange({ ...value, query: event.target.value })
          }
          placeholder="Filter by title or tag"
        />
      </label>
      <Select
        value={value.projectId}
        onChange={(event) =>
          onChange({ ...value, projectId: event.target.value })
        }
      >
        <option value="">All projects</option>
        {projects.map((project) => (
          <option key={project.id} value={project.id}>
            {project.name}
          </option>
        ))}
      </Select>
      <Select
        value={value.priority}
        onChange={(event) =>
          onChange({ ...value, priority: event.target.value })
        }
      >
        <option value="">All priorities</option>
        <option value="urgent">Urgent</option>
        <option value="high">High</option>
        <option value="medium">Medium</option>
        <option value="low">Low</option>
      </Select>
    </div>
  );
}
