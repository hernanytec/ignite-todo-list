import { Trash } from "phosphor-react";
import { ITodoListItem } from "./TodoList";

interface TodoListItemProps {
  item: ITodoListItem;
}

export function TodoListItem({ item }: TodoListItemProps) {
  return (
    <div className="flex justify-between bg-gray-500 py-4 px-5 rounded-lg">
      <input type="checkbox" />

      <p className="text-gray-100 text-start ml-3 w-full">{item.text}</p>

      <Trash
        className="text-gray-300 cursor-pointer hover:text-danger transition-colors"
        size={24}
      />
    </div>
  );
}
