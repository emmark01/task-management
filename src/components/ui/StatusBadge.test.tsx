import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { PriorityBadge, StatusBadge } from "./StatusBadge";

describe("status badges", () => {
  it("labels a status in plain language", () => {
    render(<StatusBadge status="in-progress" />);
    expect(screen.getByText("In progress")).toHaveClass("nw-badge-gold");
  });

  it("shows priority as a rose badge when urgent", () => {
    render(<PriorityBadge priority="urgent" />);
    expect(screen.getByText("urgent")).toHaveClass("nw-badge-rose");
  });
});
