export interface TodoItemProps {
  todo: string;
  onRemove: () => void;
}

export interface TodoListProps {
  todos: string[];
  removeTodo: (index: number) => void;
}
