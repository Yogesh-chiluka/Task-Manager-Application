import React from 'react';

const Task = ({ item, onDragStart, column }) => {
  return (
    <div
      draggable
      onDragStart={(event) => onDragStart(event, item, column)}
      key={item.title}
      className="relative w-full h-40 mb-2 text-white mx-auto border rounded outline-0 drop-shadow-sm bg-blueCard py-2 px-4"
    >
      <h3>{item.title}</h3>
      <p className='line-clamp-2 h-16'>{item.description}</p>
      <small className=' bottom-0 left-0 '>{item.timestamp}</small>
      <div className='absolute bottom-0 right-0 justify-around'>
      <button
          className="text-white text-center  border rounded outline-0 drop-shadow-sm border-gray-300 bg-blueBar py-1 px-2 text-sm m-2"
        >
          Delete
        </button>

        <button

          className="text-white text-center  border rounded outline-0 drop-shadow-sm border-gray-300 bg-blueBar py-1 px-2 text-sm m-2"
        >
          Edit
        </button>

        <button

          className="text-white text-center border rounded outline-0 drop-shadow-sm border-gray-300 bg-blueBar py-1 px-2 text-sm m-2"
        >
          View Details
        </button>
      </div>
      
    </div>
  );
};

export default Task;
