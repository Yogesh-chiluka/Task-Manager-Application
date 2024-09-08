import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { editTaskClose } from '../../Features/TaskManagement/AddViewUpdateTask.jsx';

const Modal = ({ item, column, onSaveTask }) => {
  const isEditModalOpen = useSelector(state => state.modal.edit);
  const dispatch = useDispatch();

  const [task, setTask] = useState({ title: '', description: '' });

  useEffect(() => {
    if (item) {
      setTask(item);
    }
  }, [item]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTask({ ...task, [name]: value });
  };

  const handleSaveTask = () => {    
    onSaveTask(task, column);
    dispatch(editTaskClose());
  };

  if (!isEditModalOpen) {
    document.body.style.overflow = 'unset';
    return null;
  } else {
    document.body.style.overflow = 'hidden';
  }

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-4 rounded shadow-lg">
        <h2 className="text-xl mb-4">Edit Task</h2>
        <input
          type="text"
          name="title"
          value={task.title}
          onChange={handleInputChange}
          className="border p-2 mb-4 w-full"
          placeholder="Enter task"
        />
        <textarea
          name="description"
          rows="4"
          value={task.description}
          onChange={handleInputChange}
          className="border p-2 mb-4 w-full"
          placeholder="Enter description"
        />
        <div className="flex justify-end">
          <button onClick={handleSaveTask} className="bg-green-600 text-white px-4 py-2 rounded mr-2">
            Save
          </button>
          <button onClick={() => dispatch(editTaskClose())} className="bg-delete text-white px-4 py-2 rounded">
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
