import React, { useState } from 'react';
import InputTaskTodo from '../components/InputTaskTodo';

const initialTask = {
  todotask: '',
};

const FormTodo = ({ handleAddTask, handleClearTodo }) => {
  const [todoTask, setTodoTask] = useState(initialTask);

  return (
    <form onSubmit={(e) => handleAddTask(e, todoTask, setTodoTask)}>
      <InputTaskTodo
        todoTask={todoTask}
        setTodoTask={setTodoTask}
        handleClearTodo={handleClearTodo}
      />
    </form>
  );
};

export default FormTodo;
