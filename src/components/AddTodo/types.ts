import { NewTodo } from '../../providers/Todo/types';

export interface AddTodoProps {
  addTodo: (newTodo: NewTodo) => void;
  modalIsOpen: boolean;
  setModalIsOpen: (isOpen: boolean) => void;
}

export interface ModalStyles {
  content?: React.CSSProperties | undefined;
  overlay?: React.CSSProperties | undefined;
}
