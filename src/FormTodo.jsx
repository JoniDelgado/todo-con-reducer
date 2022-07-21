import React, { useState } from 'react';
import InputTaskTodo from './InputTaskTodo';

const initialTask = {
  todotask: '',
};

const FormTodo = ({ handleAddTask }) => {
  const [todoTask, setTodoTask] = useState(initialTask);

  return (
    <form onSubmit={(e) => handleAddTask(e, todoTask)}>
      <InputTaskTodo todoTask={todoTask} setTodoTask={setTodoTask} />
    </form>
  );
};

export default FormTodo;
