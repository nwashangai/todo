import { renderHook } from '@testing-library/react-hooks';
import useFilter, { FilterOptions } from './useFilter';

const todos = [
  { id: '1', value: 'Todo 1', category: 'Work' },
  { id: '2', value: 'Todo 2', category: 'Personal' },
  { id: '3', value: 'Todo 3', category: 'Shopping' },
];

describe('useFilter hook', () => {
  it('filters todos by searchTerm', () => {
    const filterOptions: FilterOptions = { searchTerm: 'todo 1', category: '' };

    const { result } = renderHook(() => useFilter(todos, filterOptions));

    expect(result.current.length).toBe(1);
    expect(result.current[0].value).toBe('Todo 1');
  });

  it('filters todos by category', () => {
    const filterOptions: FilterOptions = { searchTerm: '', category: 'Work' };

    const { result } = renderHook(() => useFilter(todos, filterOptions));

    expect(result.current.length).toBe(1);
    expect(result.current[0].category).toBe('Work');
  });

  it('filters todos by both searchTerm and category', () => {
    const filterOptions: FilterOptions = {
      searchTerm: 'todo',
      category: 'Work',
    };

    const { result } = renderHook(() => useFilter(todos, filterOptions));

    expect(result.current.length).toBe(1);
    expect(result.current[0].value).toBe('Todo 1');
  });

  it('returns all todos when filter options are empty', () => {
    const filterOptions: FilterOptions = { searchTerm: '', category: '' };

    const { result } = renderHook(() => useFilter(todos, filterOptions));

    expect(result.current.length).toBe(3);
  });
});
