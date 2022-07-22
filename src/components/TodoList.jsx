import React, { useReducer } from 'react';
import {
  initialValueReducer,
  todoTaskReducer,
} from '../reducer/todoTaskReducer';
import FormTodo from '../components/FormTodo';
import TaskTodo from '../components/TaskTodo';
import '../styles/TodoList.css';

const TodoList = () => {
  const [state, dispatch] = useReducer(todoTaskReducer, initialValueReducer);

  const handleAddTask = (e, todoTask, setTodoTask) => {
    e.preventDefault();
    dispatch({ type: 'ADD_TODO_TASK', payload: todoTask });
    setTodoTask('');
  };

  const handleDeleteTask = (e, taskId) => {
    dispatch({ type: 'DELETE_TODO_TASK', payload: taskId });
  };

  const handleClearTodo = () => {
    dispatch({ type: 'CLEAR_TODO' });
  };
  return (
    <main className='app-wrapper'>
      <div className='title'>
        <h1>Todo List con useReducer</h1>
      </div>
      <FormTodo
        handleAddTask={handleAddTask}
        handleClearTodo={handleClearTodo}
      />
      {state &&
        state.map((task) => (
          <TaskTodo
            key={task.id}
            task={task}
            handleDeleteTask={handleDeleteTask}
          />
        ))}
    </main>
  );
};

export default TodoList;
