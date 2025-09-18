import { render, screen, fireEvent } from "@testing-library/react";
import { describe, test, expect } from "vitest";
import TodoForm from "./TodoForm";

describe("TodoForm", () => {
  test("adds a todo when form is submitted", () => {
    const addTodo = vi.fn(); // Use vi.fn() instead of jest.fn() for Vitest
    render(<TodoForm addTodo={addTodo} />);
    fireEvent.change(screen.getByPlaceholderText("Task title"), {
      target: { value: "Test" },
    });
    fireEvent.click(screen.getByText("Add Task"));
    expect(addTodo).toHaveBeenCalledWith(
      expect.objectContaining({ title: "Test" })
    );
  });
});
