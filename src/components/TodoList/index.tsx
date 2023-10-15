import React from 'react';
import TodoItem from './TodoItem';
import { TodoListProps } from './types';

const TodoList: React.FC<TodoListProps> = ({ todos, removeTodo }) => {
  return (
    <ul>
      {!todos.length ? (
        <p className="text-center text-gray-500 mt-5">No todo items</p>
      ) : (
        todos.map((todo, index) => (
          <TodoItem
            key={index}
            todo={todo}
            onRemove={() => removeTodo(index)}
          />
        ))
      )}
    </ul>
  );
};

export default TodoList;
