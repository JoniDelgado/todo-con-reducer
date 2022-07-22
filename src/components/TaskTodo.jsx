import React, { useState } from 'react';
import '../styles/TaskTodo.css';

const TaskTodo = ({ task, handleDeleteTask }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleIsActive = (e) => {
    setIsChecked(!isChecked);
  };

  const checked = isChecked ? ' checked' : '';

  console.log(checked);

  return (
    <section className='todo-task'>
      <input onChange={handleIsActive} type='checkbox' checked={isChecked} />
      <h3 className={'unchecked' + checked}>{task.todotask}</h3>
      <button className='btn' onClick={(e) => handleDeleteTask(e, task.id)}>
        Eliminar
      </button>
    </section>
  );
};

export default TaskTodo;
