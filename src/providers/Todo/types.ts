export type NewTodo = {
  id: string;
  value: string;
  category: string;
};
export interface TodoContextType {
  todos: NewTodo[];
  addTodo: (newTodo: NewTodo) => void;
  removeTodo: (id: string) => void;
  modalIsOpen: boolean;
  filterByCategory: (value: string) => void;
  setModalIsOpen: (isOpen: boolean) => void;
  search: (value: string) => void;
}

export interface TodoProviderProps {
  children: React.ReactNode;
}
