import { TodoListEmptyState } from "./TodoListEmptyState";
import { TodoListItem } from "./TodoListItem";

export interface ITodoListItem {
  id: string;
  text: string;
  isCompleted: boolean;
}

interface TodoListProps {
  items: ITodoListItem[];
  onCompleteItem: (id: string) => void;
  onDeleteItem: (id: string) => void;
}

export function TodoList({
  items,
  onCompleteItem,
  onDeleteItem,
}: TodoListProps) {
  const totalItems = items.length;
  const checkedItems = items.filter(({ isCompleted }) => isCompleted).length;

  const TodoListInfo = () => (
    <div className="flex w-full justify-between mb-6">
      <div className="flex items-center gap-2 text-md">
        <p className="text-blue">Tarefas criadas</p>
        <span className="text-sm bg-gray-400 px-2 rounded-full text-gray-100 font-bold">
          {totalItems}
        </span>
      </div>

      <div className="flex items-center gap-2 text-md">
        <p className="text-purple">Concluídas</p>
        <span className="block text-sm  bg-gray-400 px-2 rounded-full text-gray-100 font-bold">
          {checkedItems === 0 ? "0" : `${checkedItems} de ${totalItems}`}
        </span>
      </div>
    </div>
  );

  return (
    <div className="mt-16 flex flex-col items-center w-[736px] mx-auto ">
      <TodoListInfo />

      {totalItems === 0 ? (
        <TodoListEmptyState />
      ) : (
        <div className="flex flex-col gap-3 w-full">
          {items.map((item) => (
            <TodoListItem
              key={item.id}
              item={item}
              onComplete={onCompleteItem}
              onDelete={onDeleteItem}
            />
          ))}
        </div>
      )}
    </div>
  );
}
