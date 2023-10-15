import React, { createContext, useContext, useState } from 'react';
import { TodoContextType, TodoProviderProps } from './types';
import useFilter from '../../hooks/useFilter';

const TodoContext = createContext<TodoContextType | undefined>(undefined);

export const useTodo = () => {
  const context = useContext(TodoContext);
  if (!context) {
    throw new Error('useTodo must be used within a TodoProvider');
  }
  return context;
};

const TodoProvider: React.FC<TodoProviderProps> = ({ children }) => {
  const [todos, setTodos] = useState<string[]>(
    JSON.parse(localStorage.getItem('todos') || '[]')
  );
  const [searchString, setSearchString] = useState<string>('');
  const filteredTodo = useFilter(todos, searchString);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const addTodo = (newTodo: string) => {
    const newTodos = [...todos, newTodo];
    setTodos(newTodos);
    setModalIsOpen(false);
    localStorage.setItem('todos', JSON.stringify(newTodos));
  };

  const removeTodo = (index: number) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
    localStorage.setItem('todos', JSON.stringify(updatedTodos));
  };

  return (
    <TodoContext.Provider
      value={{
        todos: filteredTodo,
        addTodo,
        removeTodo,
        modalIsOpen,
        setModalIsOpen,
        search: setSearchString,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;
