import { useState, useMemo } from 'react';

const useFilter = (todos: string[], searchTerm: string): string[] => {
  const [filteredTodos, setFilteredTodos] = useState<string[]>(todos);

  useMemo(() => {
    if (!searchTerm) {
      setFilteredTodos(todos);
    } else {
      const filtered = todos.filter((todo) =>
        todo.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredTodos(filtered);
    }
  }, [searchTerm, todos]);

  return filteredTodos;
};

export default useFilter;
