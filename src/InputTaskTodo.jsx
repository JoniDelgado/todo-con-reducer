import React from 'react';

const InputTaskTodo = ({ todoTask, setTodoTask }) => {
  const handleTodoTask = (e) => {
    const { name, value } = e.target;
    setTodoTask({ ...todoTask, [name]: value });
  };

  return (
    <>
      <input
        type='text'
        onChange={handleTodoTask}
        name='todotask'
        value={todoTask.todotask}
      />
      <input type='submit' value='Agregar' />
    </>
  );
};

export default InputTaskTodo;
