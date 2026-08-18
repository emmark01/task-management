import { AppShell } from "../components/layout/AppShell";
import { Button } from "../components/ui/Button";
import { Checkbox } from "../components/ui/Checkbox";
import { Input } from "../components/ui/Input";
import { Select } from "../components/ui/Select";
import { useTasks } from "../context/TaskContext";
import "./Settings.css";

export function SettingsPage() {
  const { currentUser } = useTasks();

  return (
    <AppShell title="Settings" kicker="Cabin">
      <form className="nw-settings" onSubmit={(event) => event.preventDefault()}>
        <section>
          <h2>Profile</h2>
          <Input label="Name" defaultValue={currentUser.name} />
          <Input label="Email" defaultValue={currentUser.email} />
          <Input label="Role" defaultValue={currentUser.role} />
        </section>
        <section>
          <h2>Workspace</h2>
          <Select label="Week starts on" defaultValue="monday">
            <option value="monday">Monday</option>
            <option value="sunday">Sunday</option>
          </Select>
          <Select label="Default view" defaultValue="board">
            <option value="board">Board</option>
            <option value="list">List</option>
            <option value="calendar">Calendar</option>
          </Select>
          <Checkbox defaultChecked label="Show overdue tasks in rust" />
          <Checkbox defaultChecked label="Digest at 8am local time" />
        </section>
        <Button type="submit">Save changes</Button>
      </form>
    </AppShell>
  );
}
