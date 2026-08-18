export type TaskStatus = "backlog" | "todo" | "in-progress" | "review" | "done";
export type TaskPriority = "low" | "medium" | "high" | "urgent";
export type ProjectStatus = "on-track" | "at-risk" | "paused";

export interface User {
  id: string;
  name: string;
  role: string;
  email: string;
  initials: string;
  color: string;
  online: boolean;
}

export interface Comment {
  id: string;
  authorId: string;
  body: string;
  createdAt: string;
}

export interface Task {
  id: string;
  title: string;
  description: string;
  status: TaskStatus;
  priority: TaskPriority;
  projectId: string;
  assigneeIds: string[];
  dueDate: string;
  tags: string[];
  estimateHours: number;
  comments: Comment[];
  createdAt: string;
}

export interface Project {
  id: string;
  name: string;
  description: string;
  status: ProjectStatus;
  color: string;
  dueDate: string;
  memberIds: string[];
  progress: number;
}

export interface ActivityItem {
  id: string;
  actorId: string;
  verb: string;
  target: string;
  createdAt: string;
}

export interface NotificationItem {
  id: string;
  title: string;
  body: string;
  read: boolean;
  createdAt: string;
}
