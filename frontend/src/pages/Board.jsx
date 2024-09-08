import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from './Modal/addTask.jsx';
import Task from './Components/Task.jsx';

const Board = () => {
  const [columns, setColumns] = useState({
    column1: { name: 'To Do', items: [
      { title: 'Task 1', description: 'Nulla dolor velit adipisicing duis excepteur esse in duis nostrud occaecat mollit incididunt deserunt sunt. Ut ut sunt laborum ex occaecatNulla dolor velit adipisicing duis excepteur esse in duis nostrud occaecat mollit incididunt deserunt sunt. Ut ut sunt laborum ex occa', timestamp: new Date().toLocaleString() },
      { title: 'Task 2', description: 'Description 2', timestamp: new Date().toLocaleString() }
    ]},
    column2: { name: 'In Progress', items: [
      { title: 'Task 3', description: 'Description 3', timestamp: new Date().toLocaleString() },
      { title: 'Task 4', description: 'Description 4', timestamp: new Date().toLocaleString() }
    ]},
    column3: { name: 'Done', items: [
      { title: 'Task 5', description: 'Description 5', timestamp: new Date().toLocaleString() },
      { title: 'Task 6', description: 'Description 6', timestamp: new Date().toLocaleString() }
    ]},
  });
  const [showModalAddTask, setshowModalAddTask] = useState(false);

  const onDrop = (event, toColumn) => {
    const item = JSON.parse(event.dataTransfer.getData('item'));
    const fromColumn = event.dataTransfer.getData('fromColumn');

    if (toColumn === fromColumn) return;

    setColumns((prev) => {
      const fromData = prev[fromColumn].items.filter((order) => order.title !== item.title);
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
    event.dataTransfer.setData('item', JSON.stringify(item));
    event.dataTransfer.setData('fromColumn', fromColumn);
  };

  const handleOpenModalAddTask = () => {
    setshowModalAddTask(true);
  };

  const handleCloseModalAddTask = () => {
    setshowModalAddTask(false);
  };

  const handleAddTask = (task) => {
    const newTask = {
      title: task.title,
      description: task.description,
      timestamp: new Date().toLocaleString(),
    };

    setColumns((prev) => ({
      ...prev,
      column1: {
        ...prev.column1,
        items: [...prev.column1.items, newTask],
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


      {/* Add Taks button */}
      <div className='m-4'>
        <button
          onClick={handleOpenModalAddTask}
          className="text-white text-center mx-auto border rounded outline-0 drop-shadow-sm border-gray-300 bg-blueBar py-2 px-4"
        >
          Add Task
        </button>

        <div className="bg-white grid grid-row-3 md:grid-cols-3 gap-2">
            {/* Three Columns */}
          {Object.keys(columns).map((column) => (
            <div
              key={column}
              className="mr-4 bg-whp-2 border rounded  outline-0 drop-shadow-sm border-gray-300 my-2 p-4"
              onDrop={(event) => onDrop(event, column)}
              onDragOver={onDragOver}
            >
              <h2 className="text-white text-center mb-4 mx-auto border rounded  outline-0 drop-shadow-sm border-gray-300
                  bg-blueBar  py-2 px-4">{columns[column].name}</h2>
                   {/* Tasks in each */}
              {columns[column].items.map((item) => (
                <Task item ={item} onDragStart={onDragStart} column={column}  />
              ))}
            </div>
          ))}
        </div>
        <Modal show={showModalAddTask} onClose={handleCloseModalAddTask} onAddTask={handleAddTask} />
      </div>
    </div>
  );
};


export default Board;
