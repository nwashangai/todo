import { NewTodo } from '../../providers/Todo/types';

export interface TodoItemProps {
  todo: NewTodo;
  onRemove: () => void;
}

export interface TodoListProps {
  todos: NewTodo[];
  removeTodo: (id: string) => void;
}
