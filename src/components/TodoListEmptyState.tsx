import clipboard from "/public/clipboard.svg";

export function TodoListEmptyState() {
  return (
    <div className="w-full flex flex-col items-center text-gray-300 text-lg py-16 rounded-lg border-t border-gray-300/50">
      <img src={clipboard} alt="clipboard empty state img" className="mb-4" />

      <strong>Você ainda não tem tarefas cadastradas</strong>
      <span>Crie tarefas e organize seus itens a fazer</span>
    </div>
  );
}
