import { TodoListEmptyState } from "./TodoListEmptyState";

interface TodoListProps {
  items: any[];
}

export function TodoList({ items }: TodoListProps) {
  const TodoListInfo = () => (
    <div className="flex w-full justify-between mb-6">
      <div className="flex gap-2 text-md">
        <p className="text-blue">Tarefas criadas</p>
        <span className="bg-gray-400 px-2 rounded-full text-gray-100 font-bold">
          0
        </span>
      </div>

      <div className="flex gap-2 text-md">
        <p className="text-purple">Concluídas</p>
        <span className="bg-gray-400 px-2 rounded-full text-gray-100 font-bold">
          0
        </span>
      </div>
    </div>
  );

  return (
    <div className="mt-16 flex flex-col items-center w-[736px] mx-auto ">
      <TodoListInfo />

      {items.length === 0 ? <TodoListEmptyState /> : null}
    </div>
  );
}
