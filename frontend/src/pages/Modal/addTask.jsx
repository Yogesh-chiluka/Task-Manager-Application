import React, { useState } from 'react';
const Modal = ({ show, onClose, onAddTask }) => {
    const [task, setTask] = useState('');
  
    const handleAddTask = () => {
      onAddTask(task);
      setTask('');
      onClose();
    };
  
    if (!show) {
      return null;
    }
  
    return (
      <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
        <div className="bg-white p-4 rounded shadow-lg">
          <h2 className="text-xl mb-4">Add New Task</h2>
          <input
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            className="border p-2 mb-4 w-full"
            placeholder="Enter task"
          />
          <button onClick={handleAddTask} className="bg-blue-500 text-white px-4 py-2 rounded mr-2">
            Add Task
          </button>
          <button onClick={onClose} className="bg-gray-500 text-white px-4 py-2 rounded">
            Cancel
          </button>
        </div>
      </div>
    );
  };

  export default Modal;