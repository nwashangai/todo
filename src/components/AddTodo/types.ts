export interface AddTodoProps {
  addTodo: (newTodo: string) => void;
  modalIsOpen: boolean;
  setModalIsOpen: (isOpen: boolean) => void;
}

export interface ModalStyles {
  content?: React.CSSProperties | undefined;
  overlay?: React.CSSProperties | undefined;
}
