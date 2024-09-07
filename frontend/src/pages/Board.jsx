import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from './Modal/addTask.jsx'

const Board = () => {
  const [columns, setColumns] = useState({
    column1: { name: 'To Do', items: ['item1', 'item2'] },
    column2: { name: 'In Progress', items: ['item3', 'item4'] },
    column3: { name: 'Done', items: ['item5', 'item6'] },
  });
  const [showModal, setShowModal] = useState(false);
  const [selectedColumn, setSelectedColumn] = useState('');

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

  const handleOpenModal = (column) => {
    setSelectedColumn(column);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleAddTask = (task) => {
    setColumns((prev) => ({
      ...prev,
      [selectedColumn]: {
        ...prev[selectedColumn],
        items: [...prev[selectedColumn].items, task],
      },
    }));
  };

  return (
    <div className="min-h-screen bg-green-400 p-10">
        <div className='w-full flex justify-between bg-blueBar border-b-2 border-gray-100 '>
                <div className='mr-7 ml-2 px-4 py-2 flex font-extrabold text-2xl tracking-tight '>
                <img src='/src/assets/calender.png' className='mr-2 invert brightness-0 ' width="35px"/>
                </div>
                <div className='bg-gray-800'></div>
                <div className='flex justify-end'>
                    <button className='border rounded border-transparent mr-2 ml-2 my-2 px-4 py-2 bg-white flex text-blueBar'>Login </button>
                    <Link to="/register"><button className='border rounded border-transparent text-white ml-2 mr-7 my-2 px-4 py-2'>SignUp</button></Link>
                </div>
            </div>
      <div className="bg-white grid grid-cols-3 gap-4">
        {Object.keys(columns).map((column) => (
          <div
            key={column}
            className="mr-4 bg-blue-600 p-2"
            onDrop={(event) => onDrop(event, column)}
            onDragOver={onDragOver}
          >
            <h2 className="text-white text-center mb-4">{columns[column].name}</h2>
            {columns[column].items.map((item) => (
              <div
                draggable
                onDragStart={(event) => onDragStart(event, item, column)}
                key={item}
                className="w-24 h-8 bg-green-600 mb-2"
              >
                {item}
              </div>
            ))}
            <button
              onClick={() => handleOpenModal(column)}
              className="bg-white text-blue-600 px-4 py-2 rounded mt-4"
            >
              Add Task
            </button>
          </div>
        ))}
      </div>
      <Modal show={showModal} onClose={handleCloseModal} onAddTask={handleAddTask} />
    </div>
  );
};

export default Board;
