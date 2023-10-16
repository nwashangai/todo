import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Search from './';
import { useTodo } from '../../providers/Todo';
import { debounce } from '../../helpers/debounce';

// Mock the debounce function to avoid time delays in tests
jest.mock('../../helpers/debounce', () => ({
  debounce: (func: Function) => func,
}));

// Mock the useTodo provider
jest.mock('../../providers/Todo', () => ({
  useTodo: jest.fn(),
}));

describe('Search component', () => {
  it('should call the debouncedSearchUpdate function on input change', () => {
    const search = jest.fn();

    // Set up the mock context values for useTodo
    (useTodo as jest.Mock).mockReturnValue({
      search,
    });

    render(<Search />);

    const inputElement = screen.getByPlaceholderText('Search');

    fireEvent.change(inputElement, { target: { value: 'test query' } });

    expect(search).toHaveBeenCalledWith('test query');
  });
});
