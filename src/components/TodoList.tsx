import { NewTask } from "./NewTask";
import Logo from "/public/todo-logo.svg";

export function TodoList() {
  return (
    <div className="h-screen bg-gray-600">
      <header className="flex flex-col items-center h-[200px] bg-gray-700 ">
        <img src={Logo} alt="todo logo" className="h-12 mt-[72px] mb-[53px]" />
        <NewTask />
      </header>
    </div>
  );
}
