import classNames from "classnames";
import { Trash } from "phosphor-react";
import { ITodoListItem } from "./TodoList";

interface TodoListItemProps {
  item: ITodoListItem;
  onComplete: (id: string) => void;
  onDelete: (id: string) => void;
}

export function TodoListItem({
  item,
  onComplete,
  onDelete,
}: TodoListItemProps) {
  return (
    <div className="flex justify-between items-center bg-gray-500 py-4 px-5 rounded-lg">
      <input
        id={item.id}
        type="checkbox"
        onChange={() => onComplete(item.id)}
        className="rounded-full w-5 h-5 bg-transparent focus:border-0 focus:ring-0 checked:bg-purple checked:hover:bg-purple-dark border-2 border-blue-dark hover:border-blue transition-colors"
      />

      <label
        htmlFor={item.id}
        className={classNames(
          "text-gray-100 text-start ml-3 w-full cursor-pointer overflow-hidden text-ellipsis",
          {
            "line-through": item.isCompleted,
            "text-gray-300": item.isCompleted,
          }
        )}
      >
        {item.text}
      </label>

      <Trash
        className="text-gray-300 rounded-md p-1 cursor-pointer hover:bg-gray-400  hover:text-danger transition-colors"
        size={32}
        onClick={() => onDelete(item.id)}
      />
    </div>
  );
}
