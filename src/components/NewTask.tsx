import { FormEvent, useState } from "react";
import { CreateButton } from "./CreateButton";
import { Input } from "./Input";
interface NewTaskProps {
  onAddTodo: (text: string) => void;
}
export function NewTask({ onAddTodo }: NewTaskProps) {
  const [text, setText] = useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    if (!text) return;

    onAddTodo(text);
    setText("");
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 w-[736px]">
      <Input
        placeholder="Adicione uma nova tarefa"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <CreateButton type="submit" />
    </form>
  );
}
