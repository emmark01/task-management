import { describe, expect, it } from "vitest";
import { makeTask } from "../test/fixtures";
import { filterTasks } from "./filterTasks";

const tasks = [
  makeTask({ id: "1", title: "Draft launch narrative", tags: ["copy"] }),
  makeTask({
    id: "2",
    title: "Board shortcuts",
    projectId: "p2",
    priority: "low",
    tags: ["a11y"],
  }),
  makeTask({
    id: "3",
    title: "Interview teams",
    priority: "urgent",
    tags: ["research"],
  }),
];

const none = { query: "", projectId: "", priority: "" };

describe("filterTasks", () => {
  it("returns every task when filters are empty", () => {
    expect(filterTasks(tasks, none)).toHaveLength(3);
  });

  it("matches a title substring, ignoring case", () => {
    const result = filterTasks(tasks, { ...none, query: "LAUNCH" });
    expect(result.map((task) => task.id)).toEqual(["1"]);
  });

  it("matches a tag", () => {
    const result = filterTasks(tasks, { ...none, query: "research" });
    expect(result.map((task) => task.id)).toEqual(["3"]);
  });

  it("narrows by project and priority together", () => {
    const result = filterTasks(tasks, {
      query: "",
      projectId: "p2",
      priority: "low",
    });
    expect(result.map((task) => task.id)).toEqual(["2"]);
  });

  it("returns an empty list when nothing matches", () => {
    expect(
      filterTasks(tasks, { ...none, query: "does-not-exist" }),
    ).toEqual([]);
  });
});
