import { TodoList } from "./TodoList";
import { TodoListHeader } from "./TodoListHeader";

export function TodoListContainer() {
  return (
    <div className="h-screen bg-gray-600">
      <TodoListHeader />

      <TodoList items={[]} />
    </div>
  );
}
