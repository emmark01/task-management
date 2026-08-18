import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { Button } from "./Button";

describe("Button", () => {
  it("renders its label and calls onClick", async () => {
    const onClick = vi.fn();
    const user = userEvent.setup();

    render(<Button onClick={onClick}>New task</Button>);

    const button = screen.getByRole("button", { name: "New task" });
    expect(button).toHaveClass("nw-btn-primary");

    await user.click(button);
    expect(onClick).toHaveBeenCalledOnce();
  });

  it("can be quiet and disabled", () => {
    render(
      <Button variant="quiet" disabled>
        Save
      </Button>,
    );

    const button = screen.getByRole("button", { name: "Save" });
    expect(button).toBeDisabled();
    expect(button).toHaveClass("nw-btn-quiet");
  });
});
