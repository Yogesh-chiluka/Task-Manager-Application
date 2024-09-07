import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from './Modal/addTask.jsx';

const Board = () => {
  const [columns, setColumns] = useState({
    column1: { name: 'To Do', items: ['item1', 'item2'] },
    column2: { name: 'In Progress', items: ['item3', 'item4'] },
    column3: { name: 'Done', items: ['item5', 'item6'] },
  });
  const [showModal, setShowModal] = useState(false);

  const onDrop = (event, toColumn) => {
    const item = event.dataTransfer.getData('item');
    const fromColumn = event.dataTransfer.getData('fromColumn');

    if (toColumn === fromColumn) return;

    setColumns((prev) => {
      const fromData = prev[fromColumn].items.filter((order) => order !== item);
      const toData = [...prev[toColumn].items, item];

      return {
        ...prev,
        [fromColumn]: { ...prev[fromColumn], items: fromData },
        [toColumn]: { ...prev[toColumn], items: toData },
      };
    });
  };

  const onDragOver = (event) => event.preventDefault();

  const onDragStart = (event, item, fromColumn) => {
    event.dataTransfer.setData('item', item);
    event.dataTransfer.setData('fromColumn', fromColumn);
  };

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleAddTask = (task) => {
    setColumns((prev) => ({
      ...prev,
      column1: {
        ...prev.column1,
        items: [...prev.column1.items, task],
      },
    }));
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Top blue bar with logout button on right */}
      <div className='w-full flex justify-between bg-blueBar border-b-2 border-gray-100 '>
        <div className='mr-7 ml-2 px-4 py-2 flex font-extrabold text-2xl tracking-tight '>
          <img src='/src/assets/calender.png' className='mr-2 invert brightness-0 ' width="35px" />
        </div>
        <div className='bg-gray-800'></div>
        <div className='flex justify-end'>
          <button className='border rounded border-transparent mr-2 ml-2 my-2 px-4 py-2 bg-white flex text-blueBar'>Login </button>
          <Link to="/register"><button className='border rounded border-transparent text-white ml-2 mr-7 my-2 px-4 py-2'>SignUp</button></Link>
        </div>
      </div>
      {/* Top blue bar with logout button on right */}
      <div className='m-4'>
        <button
          onClick={handleOpenModal}
          className="text-white text-center mx-auto border rounded outline-0 drop-shadow-sm border-gray-300 bg-blueBar py-2 px-4"
        >
          Add Task
        </button>

        <div className="bg-white grid grid-cols-3 gap-2">
          {Object.keys(columns).map((column) => (
            <div
              key={column}
              className="mr-4 bg-whp-2 border rounded  outline-0 drop-shadow-sm border-gray-300 my-2 p-4"
              onDrop={(event) => onDrop(event, column)}
              onDragOver={onDragOver}
            >
              <h2 className="text-white text-center mb-4 mx-auto border rounded  outline-0 drop-shadow-sm border-gray-300
                  bg-blueBar  py-2 px-4">{columns[column].name}</h2>
              {columns[column].items.map((item) => (
                <div
                  draggable
                  onDragStart={(event) => onDragStart(event, item, column)}
                  key={item}
                  className="w-full h-40 mb-2 text-white mx-auto border rounded outline-0 drop-shadow-sm bg-blueCard py-2 px-4"
                >
                  {item}
                </div>
              ))}
            </div>
          ))}
        </div>
        <Modal show={showModal} onClose={handleCloseModal} onAddTask={handleAddTask} />
      </div>
    </div>
  );
};

export default Board;
