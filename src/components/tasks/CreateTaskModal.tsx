import { useState } from "react";
import { useTasks } from "../../context/TaskContext";
import type { TaskPriority, TaskStatus } from "../../types";
import { Button } from "../ui/Button";
import { Input } from "../ui/Input";
import { Modal } from "../ui/Modal";
import { Select } from "../ui/Select";
import { Textarea } from "../ui/Textarea";

interface CreateTaskModalProps {
  open: boolean;
  onClose: () => void;
}

export function CreateTaskModal({ open, onClose }: CreateTaskModalProps) {
  const { projects, users, addTask } = useTasks();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [projectId, setProjectId] = useState(projects[0]?.id ?? "");
  const [status, setStatus] = useState<TaskStatus>("todo");
  const [priority, setPriority] = useState<TaskPriority>("medium");
  const [dueDate, setDueDate] = useState("2026-08-28");

  function handleSubmit() {
    if (!title.trim()) return;
    addTask({
      title: title.trim(),
      description,
      projectId,
      status,
      priority,
      dueDate,
      assigneeIds: [users[0].id],
      tags: ["new"],
      estimateHours: 2,
    });
    setTitle("");
    setDescription("");
    onClose();
  }

  return (
    <Modal
      open={open}
      title="New task"
      onClose={onClose}
      footer={
        <>
          <Button variant="ghost" onClick={onClose}>
            Cancel
          </Button>
          <Button onClick={handleSubmit}>Create task</Button>
        </>
      }
    >
      <Input
        id="task-title"
        label="Title"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        placeholder="What needs to happen?"
      />
      <Textarea
        id="task-body"
        label="Notes"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
        placeholder="Context, links, or constraints"
      />
      <div className="nw-form-row">
        <Select
          id="task-project"
          label="Project"
          value={projectId}
          onChange={(event) => setProjectId(event.target.value)}
        >
          {projects.map((project) => (
            <option key={project.id} value={project.id}>
              {project.name}
            </option>
          ))}
        </Select>
        <Select
          id="task-status"
          label="Status"
          value={status}
          onChange={(event) => setStatus(event.target.value as TaskStatus)}
        >
          <option value="backlog">Backlog</option>
          <option value="todo">To do</option>
          <option value="in-progress">In progress</option>
          <option value="review">Review</option>
          <option value="done">Done</option>
        </Select>
      </div>
      <div className="nw-form-row">
        <Select
          id="task-priority"
          label="Priority"
          value={priority}
          onChange={(event) => setPriority(event.target.value as TaskPriority)}
        >
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
          <option value="urgent">Urgent</option>
        </Select>
        <Input
          id="task-due"
          label="Due date"
          type="date"
          value={dueDate}
          onChange={(event) => setDueDate(event.target.value)}
        />
      </div>
    </Modal>
  );
}
