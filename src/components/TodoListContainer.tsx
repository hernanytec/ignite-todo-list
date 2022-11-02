import { useState } from "react";
import { v4 as uuid } from "uuid";
import { ITodoListItem, TodoList } from "./TodoList";
import { TodoListHeader } from "./TodoListHeader";

export function TodoListContainer() {
  const [todoItems, setTodoItems] = useState<ITodoListItem[]>([]);

  const handleCompleteItem = (id: string) =>
    setTodoItems((items) =>
      items.map((item) => {
        if (item.id === id) {
          return { ...item, isCompleted: !item.isCompleted };
        }
        return item;
      })
    );

  const handleDeleteItem = (id: string) =>
    setTodoItems((items) => items.filter((item) => item.id !== id));

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

      <TodoList
        items={todoItems}
        onCompleteItem={handleCompleteItem}
        onDeleteItem={handleDeleteItem}
      />
    </div>
  );
}
