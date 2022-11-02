import { PlusCircle } from "phosphor-react";

export function CreateButton() {
  return (
    <button className="bg-blue-dark hover:bg-blue transition-colors flex gap-2 items-center text-gray-100 rounded-lg p-4">
      <span>Criar</span>
      <PlusCircle size={16} />
    </button>
  );
}
