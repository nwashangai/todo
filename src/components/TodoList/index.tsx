import React from 'react';
import TodoItem from './TodoItem';
import { TodoListProps } from './types';

const TodoList: React.FC<TodoListProps> = ({ todos, removeTodo }) => {
  return (
    <ul>
      {todos.map((todo, index) => (
        <TodoItem key={index} todo={todo} onRemove={() => removeTodo(index)} />
      ))}
    </ul>
  );
};

export default TodoList;
