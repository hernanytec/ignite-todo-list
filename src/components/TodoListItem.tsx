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
    <div className="flex justify-between bg-gray-500 py-4 px-5 rounded-lg">
      <input
        id={item.id}
        type="checkbox"
        onChange={() => onComplete(item.id)}
      />

      <label
        htmlFor={item.id}
        className={classNames(
          "text-gray-100 text-start ml-3 w-full cursor-pointer",
          {
            "line-through": item.isCompleted,
            "text-gray-300": item.isCompleted,
          }
        )}
      >
        {item.text}
      </label>

      <Trash
        className="text-gray-300 cursor-pointer hover:text-danger transition-colors"
        size={24}
        onClick={() => onDelete(item.id)}
      />
    </div>
  );
}
