import { useState, useMemo } from 'react';
import { NewTodo } from '../providers/Todo/types';

export type FilterOptions = {
  searchTerm: string;
  category: string;
};

const useFilter = (
  todos: NewTodo[],
  filterOptions: FilterOptions
): NewTodo[] => {
  const [filteredTodos, setFilteredTodos] = useState<NewTodo[]>(todos);

  useMemo(() => {
    const filtered = todos.filter(
      (todo) =>
        todo.value
          .toLowerCase()
          .includes(filterOptions.searchTerm.toLowerCase()) &&
        todo.category
          .toLowerCase()
          .includes(filterOptions.category.toLowerCase())
    );
    setFilteredTodos(filtered);
  }, [filterOptions, todos]);

  return filteredTodos;
};

export default useFilter;
