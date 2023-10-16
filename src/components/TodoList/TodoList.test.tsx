import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import TodoList from './';
import { NewTodo } from '../../providers/Todo/types';

describe('TodoList component', () => {
  it('should render "No todo items" when no todos are provided', () => {
    const todos: NewTodo[] = []; // An empty array of todos

    render(<TodoList todos={todos} removeTodo={() => {}} />);

    const noTodoText = screen.getByText('No todo items');
    expect(noTodoText).toBeInTheDocument();
  });

  it('should render a list of todo items', () => {
    const todos = [
      { id: '1', value: 'Todo 1', category: '' },
      { id: '2', value: 'Todo 2', category: '' },
    ];

    render(<TodoList todos={todos} removeTodo={() => {}} />);

    const todo1 = screen.getByText('Todo 1');
    const todo2 = screen.getByText('Todo 2');

    expect(todo1).toBeInTheDocument();
    expect(todo2).toBeInTheDocument();
  });

  it('should call the "removeTodo" function when a todo is removed', () => {
    const todos = [
      { id: '3', value: 'Todo 1', category: '' },
      { id: '4', value: 'Todo 2', category: '' },
    ];

    const mockRemoveTodo = jest.fn(); // Mock the removeTodo function

    render(<TodoList todos={todos} removeTodo={mockRemoveTodo} />);

    const removeButton = screen.getByTestId('delete-todo-4');
    fireEvent.click(removeButton);

    expect(mockRemoveTodo).toHaveBeenCalledWith('4');
  });
});
