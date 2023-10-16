import React, { useState } from 'react';
import { TodoItemProps } from './types';
import useClipboard from '../../hooks/useClipboard';

const TodoItem: React.FC<TodoItemProps> = ({ todo, onRemove }) => {
  const [showTooltip, setShowTooltip] = useState(false);
  const { copyText } = useClipboard(todo.value);

  const notify = () => {
    setShowTooltip(true);

    // Hide the tooltip after a few seconds
    setTimeout(() => {
      setShowTooltip(false);
    }, 2000);
  };

  return (
    <li className="relative flex items-center justify-between p-2 border-b">
      <div className="flex items-center">
        <span className="text-lg">{todo.value}</span>
      </div>
      <span>
        <button
          className="text-gray-500"
          data-testid={`copy-text-${todo.id}`}
          onClick={() => copyText(notify)}
        >
          <svg
            viewBox="64 64 896 896"
            focusable="false"
            data-icon="copy"
            width="1em"
            height="1em"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M832 64H296c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h496v688c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V96c0-17.7-14.3-32-32-32zM704 192H192c-17.7 0-32 14.3-32 32v530.7c0 8.5 3.4 16.6 9.4 22.6l173.3 173.3c2.2 2.2 4.7 4 7.4 5.5v1.9h4.2c3.5 1.3 7.2 2 11 2H704c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32zM350 856.2L263.9 770H350v86.2zM664 888H414V746c0-22.1-17.9-40-40-40H232V264h432v624z"></path>
          </svg>
        </button>
        <button
          className="text-blue-500 ml-2"
          data-testid={`delete-todo-${todo.id}`}
          onClick={onRemove}
        >
          <svg
            viewBox="64 64 896 896"
            focusable="false"
            data-icon="delete"
            width="1em"
            height="1em"
            fill="#da4810"
            aria-hidden="true"
          >
            <path d="M360 184h-8c4.4 0 8-3.6 8-8v8h304v-8c0 4.4 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72v-72zm504 72H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM731.3 840H292.7l-24.2-512h487l-24.2 512z"></path>
          </svg>
        </button>
        {showTooltip && <div className="tooltip">Todo copied!</div>}
      </span>
    </li>
  );
};

export default TodoItem;
