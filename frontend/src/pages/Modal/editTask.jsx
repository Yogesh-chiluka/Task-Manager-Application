import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { editTaskClose} from '../../Features/TaskManagement/AddViewUpdateTask.jsx'

const Modal = () => {
  const isAddModalOpen = useSelector(state => state.modal.edit);
  const dispatch = useDispatch()

    if (!isAddModalOpen) {
      return null;
    }
  
    return (
      <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
        <div className="bg-white p-4 rounded shadow-lg">
          <h2 className="text-xl mb-4">Edit Task</h2>
          <p
            className="border p-2 mb-4 w-full"
          ></p>
          <p
            className="border p-2 mb-4 w-full"
          ></p>
          
          <button onClick={() => dispatch(editTaskClose())} className="bg-gray-500 text-white px-4 py-2 rounded">
            close
          </button>
        </div>
      </div>
    );
  };

  export default Modal;