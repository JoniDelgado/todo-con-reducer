import React from 'react';
import '../styles/InputTaskTodo.css';

const InputTaskTodo = ({ todoTask, setTodoTask, handleClearTodo }) => {
  const handleTodoTask = (e) => {
    const { name, value } = e.target;
    setTodoTask({ ...todoTask, [name]: value });
  };

  return (
    <section className='inputs'>
      <input
        type='text'
        name='todotask'
        className='todo-input'
        placeholder='Ingresa una tarea'
        autoComplete='off'
        onChange={handleTodoTask}
        value={todoTask.todotask || ''}
      />
      <div className='btns'>
        <button className='btn' type='submit'>
          Agregar
        </button>
        <button className='btn' onClick={handleClearTodo}>
          Vaciar Todo
        </button>
      </div>
    </section>
  );
};

export default InputTaskTodo;
