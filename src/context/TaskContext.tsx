import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import {
  activity as seedActivity,
  currentUserId,
  notifications as seedNotifications,
  projects as seedProjects,
  tasks as seedTasks,
  users,
} from "../data/mock";
import type {
  ActivityItem,
  NotificationItem,
  Project,
  Task,
  TaskStatus,
  User,
} from "../types";

interface TaskContextValue {
  users: User[];
  currentUser: User;
  projects: Project[];
  tasks: Task[];
  activity: ActivityItem[];
  notifications: NotificationItem[];
  addTask: (task: Omit<Task, "id" | "comments" | "createdAt">) => void;
  updateTask: (id: string, patch: Partial<Task>) => void;
  moveTask: (id: string, status: TaskStatus) => void;
  toggleNotification: (id: string) => void;
  markAllNotificationsRead: () => void;
}

const TaskContext = createContext<TaskContextValue | null>(null);

function nextId(prefix: string) {
  return `${prefix}-${Math.random().toString(36).slice(2, 8)}`;
}

export function TaskProvider({ children }: { children: ReactNode }) {
  const [projects] = useState(seedProjects);
  const [tasks, setTasks] = useState(seedTasks);
  const [activity, setActivity] = useState(seedActivity);
  const [notifications, setNotifications] = useState(seedNotifications);
  const currentUser = users.find((user) => user.id === currentUserId)!;

  const addTask = useCallback(
    (input: Omit<Task, "id" | "comments" | "createdAt">) => {
      const task: Task = {
        ...input,
        id: nextId("t"),
        comments: [],
        createdAt: new Date().toISOString(),
      };
      setTasks((current) => [task, ...current]);
      setActivity((current) => [
        {
          id: nextId("a"),
          actorId: currentUserId,
          verb: "created",
          target: task.title,
          createdAt: task.createdAt,
        },
        ...current,
      ]);
    },
    [],
  );

  const updateTask = useCallback((id: string, patch: Partial<Task>) => {
    setTasks((current) =>
      current.map((task) => (task.id === id ? { ...task, ...patch } : task)),
    );
  }, []);

  const moveTask = useCallback((id: string, status: TaskStatus) => {
    setTasks((current) =>
      current.map((task) => (task.id === id ? { ...task, status } : task)),
    );
  }, []);

  const toggleNotification = useCallback((id: string) => {
    setNotifications((current) =>
      current.map((item) =>
        item.id === id ? { ...item, read: !item.read } : item,
      ),
    );
  }, []);

  const markAllNotificationsRead = useCallback(() => {
    setNotifications((current) =>
      current.map((item) => ({ ...item, read: true })),
    );
  }, []);

  const value = useMemo(
    () => ({
      users,
      currentUser,
      projects,
      tasks,
      activity,
      notifications,
      addTask,
      updateTask,
      moveTask,
      toggleNotification,
      markAllNotificationsRead,
    }),
    [
      currentUser,
      projects,
      tasks,
      activity,
      notifications,
      addTask,
      updateTask,
      moveTask,
      toggleNotification,
      markAllNotificationsRead,
    ],
  );

  return <TaskContext.Provider value={value}>{children}</TaskContext.Provider>;
}

export function useTasks() {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error("useTasks must be used inside TaskProvider");
  }
  return context;
}
