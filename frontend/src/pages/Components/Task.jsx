import React from 'react';
import { useDispatch } from 'react-redux'
import { viewTaskOpen, editTaskOpen} from '../../Features/TaskManagement/AddViewUpdateTask.jsx'

const Task = ({ item, onDragStart, column, onDeleteTask }) => {
  const dispatch = useDispatch();

  const handleDeleteTask = (e) => {
    onDeleteTask(item,column);
  };

  return (
    <div
      draggable
      onDragStart={(event) => onDragStart(event, item, column)}
      key={item.title}
      className="relative w-full h-40 mb-2 mx-auto border rounded outline-0 drop-shadow-sm bg-blueCard py-2 px-4"
    >
      <h3 className='text-black text-lg'>{item.title}</h3>
      <p className='line-clamp-2 h-16 text-gray-900'>{item.description}</p>
      <small className=' bottom-0 left-0 text-gray-800'>{item.timestamp}</small>
      <div className='absolute bottom-0 right-0 justify-around'>
      <button
          onClick={handleDeleteTask}
          className="text-white text-center  border rounded outline-0 drop-shadow-sm border-gray-300 bg-delete py-1 px-2 text-sm m-2"
        >
          Delete
        </button>

        <button
          onClick={() => dispatch(editTaskOpen())}
          className="text-white text-center border rounded outline-0 drop-shadow-sm border-gray-300 bg-edit py-1 px-2 text-sm m-2"
        >
          Edit
        </button>

        <button
          onClick={() => dispatch(viewTaskOpen())}
          className="text-white text-center border rounded outline-0 drop-shadow-sm border-gray-300 bg-details py-1 px-2 text-sm m-2"
        >
          View Details
        </button>
      </div>
     
    </div>
  );
};

export default Task;
