import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { viewTaskClose} from '../../Features/TaskManagement/AddViewUpdateTask.jsx'


const Modal = ({task}) => {
  const isAddModalOpen = useSelector(state => state.modal.view);
  const dispatch = useDispatch()
  if (!isAddModalOpen) {
    document.body.style.overflow = 'unset';
    return null;
  }else{
      document.body.style.overflow = 'hidden';
  }
  
    return (
      <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-4 rounded shadow-lg">
        <h2 className="text-xl mb-4">View Task</h2>
        <input
          type="text"
          disabled
          value={task.title}
          className="border p-2 mb-4 w-full"
          placeholder="Enter task"
        />

        <textarea rows="6"
          value={task.description}
          disabled
          className="border p-2 mb-4 w-full"
          placeholder="Enter description"
        />
        <div className='flex justify-end '>
        <button onClick={() => dispatch(viewTaskClose())} className="bg-delete text-white px-4 py-2 rounded">
          Close
        </button>
        </div>
      </div>
    </div>
    );
  };

  export default Modal;