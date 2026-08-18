import type { Task, TaskStatus } from "../../types";
import { TaskCard } from "./TaskCard";
import "./KanbanBoard.css";

const columns: { id: TaskStatus; label: string }[] = [
  { id: "backlog", label: "Backlog" },
  { id: "todo", label: "To do" },
  { id: "in-progress", label: "In progress" },
  { id: "review", label: "Review" },
  { id: "done", label: "Done" },
];

interface KanbanBoardProps {
  tasks: Task[];
  onOpen: (task: Task) => void;
  onMove: (id: string, status: TaskStatus) => void;
}

export function KanbanBoard({ tasks, onOpen, onMove }: KanbanBoardProps) {
  return (
    <div className="nw-board">
      {columns.map((column) => {
        const cards = tasks.filter((task) => task.status === column.id);
        return (
          <section
            key={column.id}
            className="nw-column"
            onDragOver={(event) => event.preventDefault()}
            onDrop={(event) => {
              const id = event.dataTransfer.getData("text/plain");
              if (id) onMove(id, column.id);
            }}
          >
            <header>
              <h2>{column.label}</h2>
              <span>{cards.length}</span>
            </header>
            <div className="nw-column-cards">
              {cards.map((task) => (
                <div
                  key={task.id}
                  draggable
                  onDragStart={(event) =>
                    event.dataTransfer.setData("text/plain", task.id)
                  }
                >
                  <TaskCard task={task} onOpen={onOpen} />
                </div>
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}
