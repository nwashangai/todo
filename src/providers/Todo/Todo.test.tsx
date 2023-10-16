import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import TodoProvider, { useTodo } from './';
import { TodoContextType, NewTodo } from './types';

// Helper component to access and display the todos
function TodoList() {
  const { todos, removeTodo, addTodo } = useTodo() as TodoContextType;
  return (
    <div>
      <button
        data-testid="add-todo"
        onClick={() =>
          addTodo({ id: '1', value: 'New Todo', category: 'Personal' })
        }
      >
        Remove
      </button>
      <ul>
        {todos.map((todo: NewTodo) => (
          <li key={todo.id}>
            {todo.value}{' '}
            <button
              data-testid={`delete-todo-${todo.id}`}
              onClick={() => removeTodo(todo.id)}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

// Mock the local storage
const localStorageMock = (function () {
  let store: Record<string, string> = {};
  return {
    getItem: function (key: string) {
      return store[key] || null;
    },
    setItem: function (key: string, value: string) {
      store[key] = value;
    },
    removeItem: function (key: string) {
      delete store[key];
    },
    clear: function () {
      store = {};
    },
  };
})();

beforeEach(() => {
  Object.defineProperty(window, 'localStorage', {
    value: localStorageMock,
  });
});

describe('TodoProvider', () => {
  it('should render children and manage todos', () => {
    render(
      <TodoProvider>
        <TodoList />
      </TodoProvider>
    );

    const addTodoButton = screen.getByTestId('add-todo');
    userEvent.click(addTodoButton);

    const todoItem = screen.getByText('New Todo');
    expect(todoItem).toBeInTheDocument();

    const removeButton = screen.getByTestId('delete-todo-1');
    userEvent.click(removeButton);
    expect(todoItem).not.toBeInTheDocument();
  });

  it('should save and load todos from localStorage', () => {
    // Set some initial todos in localStorage
    const initialTodos = [
      { id: '1', value: 'Initial Todo 1', category: '' },
      { id: '2', value: 'Initial Todo 2', category: '' },
    ];
    localStorage.setItem('todos', JSON.stringify(initialTodos));

    render(
      <TodoProvider>
        <TodoList />
      </TodoProvider>
    );

    const initialTodo1 = screen.getByText('Initial Todo 1');
    const initialTodo2 = screen.getByText('Initial Todo 2');

    expect(initialTodo1).toBeInTheDocument();
    expect(initialTodo2).toBeInTheDocument();
  });
});
