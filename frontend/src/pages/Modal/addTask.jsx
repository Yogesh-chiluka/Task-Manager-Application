import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { addTaskClose, editTaskClose } from '../../Features/TaskManagement/AddViewUpdateTask.jsx'


const Modal = ({onAddTask}) => {
  const isAddModalOpen = useSelector(state => state.modal.add);
  const dispatch = useDispatch()

 

    const [task, setTask] = useState( {
        title:'', 
        description:''} );
  
    const handleAddTask = (e) => {
      onAddTask(task);
      const { name , value } = e.target;
      setTask({...task, [name]: value});
      dispatch(addTaskClose());
    };
  
    if (!isAddModalOpen) {
      document.body.style.overflow = 'unset';
      return null;
    }else{
        document.body.style.overflow = 'hidden';
    }
  
    return (
      <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
        <div className="bg-white p-4 rounded shadow-lg">
          <h2 className="text-xl mb-4">Add New Task</h2>
          <input
            type="text"
            value={task.title}
            onChange={(e) => setTask(e.target.value)}
            className="border p-2 mb-4 w-full"
            placeholder="Enter task"
          />

          <textarea rows="4"
            value={task.description}
            onChange={(e) => setTask(e.target.value)}
            className="border p-2 mb-4 w-full"
            placeholder="Enter description"
          />
          <div className='flex justify-end '>
          <button onClick={handleAddTask} className="bg-blue-500 text-white px-4 py-2 rounded mr-2">
            Add Task
          </button>
          <button onClick={() => dispatch(addTaskClose())} className="bg-delete text-white px-4 py-2 rounded">
            Cancel
          </button>
          </div>
        </div>
      </div>
    );
  };

  export default Modal;