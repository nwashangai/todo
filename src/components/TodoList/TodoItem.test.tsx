import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import TodoItem from './TodoItem';
const mockCopyText = jest.fn();

// Mock the useClipboard hook
jest.mock('../../hooks/useClipboard', () => ({
  __esModule: true,
  default: (text: string) => {
    return {
      copyText: mockCopyText,
    };
  },
}));

describe('TodoItem component', () => {
  it('should render and handle copy functionality', () => {
    // Mock the useClipboard hook to simulate the copyText function

    render(
      <TodoItem
        todo={{ id: '1', value: 'Test Todo', category: '' }}
        onRemove={() => {}}
      />
    );

    const copyButton = screen.getByTestId('copy-text-1');
    fireEvent.click(copyButton);

    expect(mockCopyText).toHaveBeenCalled();
  });

  it('should render and handle remove functionality', () => {
    const mockRemove = jest.fn();

    render(
      <TodoItem
        todo={{ id: '2', value: 'Another Todo', category: '' }}
        onRemove={mockRemove}
      />
    );

    const removeButton = screen.getByTestId('delete-todo-2');
    fireEvent.click(removeButton);

    expect(mockRemove).toHaveBeenCalled();
  });
});
