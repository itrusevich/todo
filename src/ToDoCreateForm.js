import React, { useState } from 'react';
import './App.css';

function ToDoCreateForm(props) {
  const [task, setTask] = useState('');
  const addTask = () => {
    console.log(task);
    props.onTaskCreate(task);
    setTask('');
  }

  return (

    <div>
      ToDoCreateForm
      <input type="text" value={task} onChange={e => setTask(e.target.value)}></input>
      <button disabled={task.trim() === ''} onClick={addTask}>Add Task</button>
    </div>
  );
}

export default ToDoCreateForm;
