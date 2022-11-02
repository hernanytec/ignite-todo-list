import { useState } from "react";
import { v4 as uuid } from "uuid";
import { ITodoListItem, TodoList } from "./TodoList";
import { TodoListHeader } from "./TodoListHeader";

export function TodoListContainer() {
  const [todoItems, setTodoItems] = useState<ITodoListItem[]>([]);

  return (
    <div className="h-screen bg-gray-600">
      <TodoListHeader
        onAddTodo={(text) =>
          setTodoItems((items) => [
            ...items,
            { id: uuid(), text, isCompleted: false },
          ])
        }
      />

      <TodoList items={todoItems} />
    </div>
  );
}
