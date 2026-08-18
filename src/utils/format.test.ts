import { describe, expect, it } from "vitest";
import { isOverdue } from "./format";

describe("isOverdue", () => {
  it("treats a date far in the past as overdue", () => {
    expect(isOverdue("2000-01-01")).toBe(true);
  });

  it("treats a date far in the future as on time", () => {
    expect(isOverdue("2099-12-31")).toBe(false);
  });
});
