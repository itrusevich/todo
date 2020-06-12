import React, { useState } from 'react';
import './App.css';

function ToDoList(props) {

  const [taskEdit, setTaskEdit] = useState({});

  const editMode = (task) => {
    setTaskEdit(task);
  }

  const onEditTaskChange = (e) => {
    setTaskEdit({ ...taskEdit, name: e.target.value });
  };

  const taskSave = () => {
    props.onTaskSave(taskEdit);
    setTaskEdit({});
  }

  return (
    <div>
      {
        props.todos.map(el => (
          <li key={el.id}>
            {el.done && '✅'}
            {
              taskEdit.id === el.id
                ? <>
                  <input type="text" value={taskEdit.name} onChange={onEditTaskChange} />
                  <button onClick={taskSave} disabled={!taskEdit.name.trim()}>Save</button>
                </>
                : <span onClick={() => editMode(el)}> {el.name}</span>
            }

            <button onClick={() => props.onTaskDoneToggle(el.id)}>
              {el.done ? 'Undone' : 'Done'}
            </button>
            <button onClick={() => props.onTaskDelete(el.id)}>Delete</button>
          </li>)
        )}
    </div>
  );
}

export default ToDoList;