function TodoItem({ todo, toggleTodo, deleteTodo }) {
  return (
    <div className="flex items-center justify-between p-2 border-b">
      <div>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleTodo(todo.id)}
          className="mr-2"
        />
        <span className={todo.completed ? "line-through" : ""}>
          {todo.title}
        </span>
        {todo.description && (
          <p className="text-sm text-gray-600">{todo.description}</p>
        )}
        {todo.dueDate && (
          <p className="text-sm text-gray-500">Due: {todo.dueDate}</p>
        )}
      </div>
      <button
        onClick={() => deleteTodo(todo.id)}
        className="text-red-500 hover:text-red-700"
      >
        Delete
      </button>
    </div>
  );
}
export default TodoItem;
