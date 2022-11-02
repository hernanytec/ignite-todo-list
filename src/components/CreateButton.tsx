import { PlusCircle } from "phosphor-react";
import { ButtonHTMLAttributes } from "react";

interface CreateButton extends ButtonHTMLAttributes<HTMLButtonElement> {}

export function CreateButton(props: CreateButton) {
  return (
    <button
      className="bg-blue-dark hover:bg-blue transition-colors flex gap-2 items-center text-gray-100 rounded-lg p-4"
      {...props}
    >
      <span>Criar</span>
      <PlusCircle size={16} />
    </button>
  );
}
