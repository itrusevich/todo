import React, { useState } from 'react';
import './App.css';
import ToDoCreateForm from './ToDoCreateForm';
import ToDoList from './ToDoList';

const initialTodos = [
  { id: '1', name: 'Test-1', done: false },
  { id: '2', name: 'Test-2', done: true },
  { id: '3', name: 'Test-3', done: false },
];

function App() {
  const [todos, setTodos] = useState(initialTodos);

  const onTaskCreate = (task) => {
    const updatedTodos = [...todos];
    updatedTodos.push({ id: Math.random(), name: task, done: false })
    setTodos(updatedTodos);
  };

  const onTaskDelete = (id) => {
    const updatedTodos = todos.filter(el => el.id !== id)
    setTodos(updatedTodos);
  };

  const onTaskDoneToggle = (id) => {
    const updatedTodos = todos.map(el=> {
      if(el.id === id) return {...el, done: !el.done}
      else return el;
    })
    setTodos(updatedTodos);
  };

  const onTaskSave = (task) => {
    const updatedTodos = todos.map(el=> {
      if(el.id === task.id) return {...el, name: task.name}
      else return el;
    })
    setTodos(updatedTodos);
  };

  return (
    <div className="App">
      <ToDoCreateForm onTaskCreate={onTaskCreate} />
      <ToDoList todos={todos}
        onTaskDelete={onTaskDelete} 
        onTaskSave={onTaskSave}
        onTaskDoneToggle={onTaskDoneToggle} />
    </div>
  );
}

export default App;
