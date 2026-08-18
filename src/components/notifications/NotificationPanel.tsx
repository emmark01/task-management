import { useTasks } from "../../context/TaskContext";
import { formatDateTime } from "../../utils/format";
import { Button } from "../ui/Button";
import "./NotificationPanel.css";

interface NotificationPanelProps {
  onClose: () => void;
}

export function NotificationPanel({ onClose }: NotificationPanelProps) {
  const { notifications, toggleNotification, markAllNotificationsRead } =
    useTasks();

  return (
    <div className="nw-notes" role="dialog" aria-label="Notifications">
      <header>
        <strong>Signals</strong>
        <button type="button" onClick={markAllNotificationsRead}>
          Mark all read
        </button>
      </header>
      <ul>
        {notifications.map((item) => (
          <li key={item.id} className={item.read ? "is-read" : ""}>
            <button type="button" onClick={() => toggleNotification(item.id)}>
              <b>{item.title}</b>
              <span>{item.body}</span>
              <small>{formatDateTime(item.createdAt)}</small>
            </button>
          </li>
        ))}
      </ul>
      <Button variant="ghost" size="sm" onClick={onClose}>
        Close
      </Button>
    </div>
  );
}
