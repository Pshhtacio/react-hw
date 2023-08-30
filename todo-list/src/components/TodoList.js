import {useEffect} from "react";
import {useTodos} from "../hooks/useTodos";
import TodoGroup from "./TodoGroup.js";
import TodoListGenerator from "./TodoListGenerator.js";
import "../css/TodoList.css";

const TodoList = () => {
  const { loadTodos } = useTodos();
  useEffect(() => {
    loadTodos();
  }, []);

  return (
    <div className="container">
      <h1>Todo List</h1>
      <TodoGroup />
      <TodoListGenerator />
    </div>
  );
};

export default TodoList;
