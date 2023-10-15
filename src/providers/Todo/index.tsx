import React, { createContext, useContext, useState } from 'react';
import { TodoContextType, TodoProviderProps } from './types';

const TodoContext = createContext<TodoContextType | undefined>(undefined);

export const useTodo = () => {
  const context = useContext(TodoContext);
  if (!context) {
    throw new Error('useTodo must be used within a TodoProvider');
  }
  return context;
};

const TodoProvider: React.FC<TodoProviderProps> = ({ children }) => {
  const [todos, setTodos] = useState<string[]>([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const addTodo = (newTodo: string) => {
    setTodos([...todos, newTodo]);
    setModalIsOpen(false);
  };

  const removeTodo = (index: number) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <TodoContext.Provider
      value={{ todos, addTodo, removeTodo, modalIsOpen, setModalIsOpen }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;
