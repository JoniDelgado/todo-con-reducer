import React from 'react';

const TaskTodo = ({ task }) => {
  return (
    <section className='todo-task'>
      <input type='checkbox' />
      <h3>{task.todotask}</h3>
    </section>
  );
};

export default TaskTodo;
