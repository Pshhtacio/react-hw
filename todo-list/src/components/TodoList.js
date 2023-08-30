import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useTodos } from "../hooks/useTodos";
import TodoGroup from "./TodoGroup.js";
import TodoListGenerator from "./TodoListGenerator.js";

const TodoList = () => {
  const { loadTodos } = useTodos();
  const dispatch = useDispatch();
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
