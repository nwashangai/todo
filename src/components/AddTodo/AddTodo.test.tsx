import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import AddTodo from './';

describe('AddTodo component', () => {
  it('renders without errors', () => {
    render(
      <AddTodo
        addTodo={() => {}}
        modalIsOpen={true}
        setModalIsOpen={() => {}}
      />
    );
  });

  it('displays the "Add Todo" modal when opened', () => {
    render(
      <AddTodo
        addTodo={() => {}}
        modalIsOpen={true}
        setModalIsOpen={() => {}}
      />
    );
    expect(screen.getByText('Add Todo')).toBeInTheDocument();
  });

  it('allows entering a new todo', () => {
    render(
      <AddTodo
        addTodo={() => {}}
        modalIsOpen={true}
        setModalIsOpen={() => {}}
      />
    );
    const input = screen.getByPlaceholderText('Add a new todo');
    fireEvent.change(input, { target: { value: 'Test Todo' } });
    expect(input).toHaveValue('Test Todo');
  });

  it('allows selecting a category', () => {
    render(
      <AddTodo
        addTodo={() => {}}
        modalIsOpen={true}
        setModalIsOpen={() => {}}
      />
    );
    const select = screen.getByLabelText('Select Category:');
    fireEvent.change(select, { target: { value: 'Work' } });
    expect(select).toHaveValue('Work');
  });

  it('calls the addTodo function when the "Add" button is clicked', () => {
    const addTodoMock = jest.fn();
    render(
      <AddTodo
        addTodo={addTodoMock}
        modalIsOpen={true}
        setModalIsOpen={() => {}}
      />
    );
    const addButton = screen.getByRole('button', {
      name: /Add/i,
    });
    expect(addButton.tagName).not.toBe('button');
    const inputField = screen.getByPlaceholderText('Add a new todo');
    const selectElement = screen.getByLabelText('Select Category:');
    fireEvent.change(inputField, { target: { value: 'New Todo Text' } });
    fireEvent.change(selectElement, { target: { value: 'Work' } });
    fireEvent.click(addButton);
    expect(addTodoMock).toHaveBeenCalled();
  });

  it('calls the setModalIsOpen function when the "Cancel" button is clicked', () => {
    const setModalIsOpenMock = jest.fn();
    render(
      <AddTodo
        addTodo={() => {}}
        modalIsOpen={true}
        setModalIsOpen={setModalIsOpenMock}
      />
    );
    const cancelButton = screen.getByRole('button', {
      name: /Cancel/i,
    });
    fireEvent.click(cancelButton);
    expect(setModalIsOpenMock).toHaveBeenCalled();
  });

  it('hides the modal when closed', () => {
    render(
      <AddTodo
        addTodo={() => {}}
        modalIsOpen={false}
        setModalIsOpen={() => {}}
      />
    );
    expect(screen.queryByText('Add Todo')).not.toBeInTheDocument();
  });
});
