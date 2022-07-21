import React, { useReducer } from 'react';
import FormTodo from './FormTodo';
import {
  initialValueReducer,
  todoTaskReducer,
} from './reducer/todoTaskReducer';
import TaskTodo from './TaskTodo';

const TodoList = () => {
  const [state, dispatch] = useReducer(todoTaskReducer, initialValueReducer);

  const handleAddTask = (e, todoTask) => {
    e.preventDefault();
    dispatch({ type: 'ADD_TODO_TASK', payload: todoTask });
  };

  const handleDeleteTask = () => {
    dispatch({ type: 'ADD_DELETE_TASK' });
  };

  const handleClearTodo = () => {
    dispatch({ type: 'CLEAR_TODO' });
  };
  return (
    <main>
      <FormTodo handleAddTask={handleAddTask} />
      {state && state.map((task) => <TaskTodo key={task.id} task={task} />)}
    </main>
  );
};

export default TodoList;
