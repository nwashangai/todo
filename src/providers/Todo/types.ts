export interface TodoContextType {
  todos: string[];
  addTodo: (newTodo: string) => void;
  removeTodo: (index: number) => void;
  modalIsOpen: boolean;
  setModalIsOpen: (isOpen: boolean) => void;
  search: (value: string) => void;
}

export interface TodoProviderProps {
  children: React.ReactNode;
}
