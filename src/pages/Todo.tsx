import React from 'react';
import TodoList from '../components/TodoList';
import AddTodo from '../components/AddTodo';
import { useTodo } from '../providers/Todo';

const TodoPage: React.FC = () => {
  const { todos, addTodo, removeTodo, modalIsOpen, setModalIsOpen } = useTodo();

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col items-center md:flex-row justify-between w-full mb-4">
        <h1 className="text-2xl font-bold">To-Do List</h1>
        <button
          className="flex justify-center items-center gap-3 mt-2 w-full md:w-[20%] rounded-md bg-[#188e06] text-white md:ml-2 p-2"
          onClick={() => setModalIsOpen(true)}
        >
          <span>Add</span>
          <svg
            width="18"
            height="18"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.4375 17.9375H14.0625V29.5625C14.0625 30.631 14.9315 31.5 16 31.5C17.0685 31.5 17.9375 30.631 17.9375 29.5625V17.9375H29.5625C30.631 17.9375 31.5 17.0685 31.5 16C31.5 14.9315 30.631 14.0625 29.5625 14.0625H17.9375V2.4375C17.9375 1.36896 17.0685 0.5 16 0.5C14.9315 0.5 14.0625 1.36896 14.0625 2.4375V14.0625H2.4375C1.36896 14.0625 0.5 14.9315 0.5 16C0.5 17.0685 1.36896 17.9375 2.4375 17.9375Z"
              fill="#ffffff"
            />
          </svg>
        </button>
      </div>
      <AddTodo
        addTodo={addTodo}
        modalIsOpen={modalIsOpen}
        setModalIsOpen={setModalIsOpen}
      />
      <TodoList todos={todos} removeTodo={removeTodo} />
    </div>
  );
};

export default TodoPage;
