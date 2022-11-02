import { NewTask } from "./NewTask";
import Logo from "/public/todo-logo.svg";

export function TodoListHeader() {
  return (
    <header className="flex flex-col items-center h-[200px] bg-gray-700 ">
      <img src={Logo} alt="todo logo" className="h-12 mt-[72px] mb-[53px]" />
      <NewTask />
    </header>
  );
}
