import {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import * as todoApi from "../api/todoApi";
import TodoGroup from "./TodoGroup.js";
import TodoListGenerator from "./TodoListGenerator.js";
import {resetTodoTask} from './todoSlice.js';

const TodoList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const response = todoApi.getTodoTasks().then(response => {
      dispatch(resetTodoTask(response.data));
    });
  }, [])


  return (
    <div className="container">
      <h1>Todo List</h1>
      <TodoGroup />
      <TodoListGenerator />
    </div>
  );
};

export default TodoList;
