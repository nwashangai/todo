import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Filter from './';
import { useTodo } from '../../providers/Todo';

// Mock the useTodo provider
jest.mock('../../providers/Todo', () => ({
  useTodo: jest.fn(),
}));

describe('Filter component', () => {
  it('should render the Filter component with options and invoke filterByCategory', () => {
    const filterByCategory = jest.fn();

    // Set up the mock context values for useTodo
    (useTodo as jest.Mock).mockReturnValue({
      filterByCategory,
    });

    render(<Filter />);

    const selectElement = screen.getByRole('combobox');

    expect(selectElement).toBeInTheDocument();

    const allCategoriesOption = screen.getByText('All Categories');
    const workOption = screen.getByText('Work');
    const personalOption = screen.getByText('Personal');
    const shoppingOption = screen.getByText('Shopping');

    expect(allCategoriesOption).toBeInTheDocument();
    expect(workOption).toBeInTheDocument();
    expect(personalOption).toBeInTheDocument();
    expect(shoppingOption).toBeInTheDocument();

    fireEvent.change(selectElement, { target: { value: 'Work' } });

    expect(filterByCategory).toHaveBeenCalledWith('Work');
  });
});
