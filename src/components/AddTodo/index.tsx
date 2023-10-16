import React, { useRef } from 'react';
import Modal from 'react-modal';
import { v4 as uuidv4 } from 'uuid';
import { AddTodoProps, ModalStyles } from './types';

// Style for the modal overlay
const customStyles: ModalStyles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    position: 'relative',
    top: 'auto',
    left: 'auto',
    right: 'auto',
    bottom: 'auto',
    border: '1px solid #ccc',
    background: '#fff',
    overflow: 'auto',
    WebkitOverflowScrolling: 'touch',
    borderRadius: '4px',
    outline: 'none',
    padding: '20px',
    width: '95%',
    maxWidth: '700px',
  },
};

const AddTodo: React.FC<AddTodoProps> = ({
  addTodo,
  modalIsOpen,
  setModalIsOpen,
}) => {
  const ref = useRef<HTMLInputElement>(null);
  const selectRef = useRef<HTMLSelectElement>(null);

  const handleAddTodo = () => {
    const value = ref.current?.value;
    const category = selectRef.current?.value;

    if (value && category) {
      const id = uuidv4();
      const newTodo = { id, value, category };

      addTodo(newTodo);
      ref.current.value = '';
      selectRef.current.value = '';
    }
  };

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={() => setModalIsOpen(false)}
      contentLabel="Add Todo Modal"
      style={customStyles}
    >
      <h2 className="text-2xl font-bold mb-4">Add Todo</h2>
      <input
        ref={ref}
        className="p-2 border rounded w-full mb-2"
        placeholder="Add a new todo"
      />
      <label htmlFor="cateegory" className="text-[#808080]">
        Select Category:
      </label>
      <select
        name="cateegory"
        ref={selectRef}
        className="w-full border border-gray-300 rounded-md py-2 px-3 mb-2 focus:outline-none focus:ring focus:border-blue-500"
      >
        <option value="">select-category</option>
        <option value="Work">Work</option>
        <option value="Personal">Personal</option>
        <option value="Shopping">Shopping</option>
      </select>
      <div className="flex w-full">
        <button
          className="flex justify-center items-center gap-3 mt-3 md:mt-0 w-full rounded-md bg-blue-500 text-white p-2"
          onClick={handleAddTodo}
        >
          Add
        </button>
        <button
          className="flex justify-center items-center gap-3 m-auto mt-3 md:mt-0 w-full rounded-md bg-gray-500 text-white p-2 ml-2"
          onClick={() => setModalIsOpen(false)}
        >
          Cancel
        </button>
      </div>
    </Modal>
  );
};

export default AddTodo;
