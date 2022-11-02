import { CreateButton } from "./CreateButton";
import { Input } from "./Input";

export function NewTask() {
  return (
    <div className="flex gap-2 w-[736px]">
      <Input placeholder="Adicione uma nova tarefa" />
      <CreateButton />
    </div>
  );
}
