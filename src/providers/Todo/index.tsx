import React, { createContext, useContext, useState } from 'react';
import { NewTodo, TodoContextType, TodoProviderProps } from './types';
import useFilter, { FilterOptions } from '../../hooks/useFilter';

const TodoContext = createContext<TodoContextType | undefined>(undefined);

export const useTodo = () => {
  const context = useContext(TodoContext);
  if (!context) {
    throw new Error('useTodo must be used within a TodoProvider');
  }
  return context;
};

const TodoProvider: React.FC<TodoProviderProps> = ({ children }) => {
  const [todos, setTodos] = useState<NewTodo[]>(
    JSON.parse(localStorage.getItem('todos') || '[]')
  );
  const [filterOptions, setFilterOption] = useState<FilterOptions>({
    searchTerm: '',
    category: '',
  });
  const filteredTodo = useFilter(todos, filterOptions);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const addTodo = (newTodo: NewTodo) => {
    const newTodos = [...todos, newTodo];
    setTodos(newTodos);
    setModalIsOpen(false);
    localStorage.setItem('todos', JSON.stringify(newTodos));
  };

  const search = (value: string) => {
    setFilterOption({ ...filterOptions, searchTerm: value });
  };

  const filterByCategory = (category: string) => {
    setFilterOption({ ...filterOptions, category });
  };

  const removeTodo = (id: string) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
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
        filterByCategory,
        setModalIsOpen,
        search,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;
