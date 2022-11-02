import Logo from "../assets/todo-logo.svg";
import { NewTask } from "./NewTask";

interface TodoListHeaderProps {
  onAddTodo: (text: string) => void;
}

export function TodoListHeader({ onAddTodo }: TodoListHeaderProps) {
  return (
    <header className="flex flex-col items-center h-[200px] bg-gray-700 ">
      <img src={Logo} alt="todo logo" className="h-12 mt-[72px] mb-[53px]" />
      <NewTask onAddTodo={onAddTodo} />
    </header>
  );
}
