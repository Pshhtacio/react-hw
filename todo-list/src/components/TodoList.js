import React, { useState } from "react";
import TodoListGroup from "./TodoListGroup.js";
import TodoListGenerator from "./TodoListGenerator.js";

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    if (text.trim() !== "") {
      const newTodo = {
        id: Date.now(),
        text: text,
      };
      setTodos([...todos, newTodo]);
    }
  };

  return (
    <div className="container">
      <h1>Todo List</h1>
      <TodoListGroup todos={ todos } />
      <TodoListGenerator onSubmit={ addTodo } />
    </div>
  );
};

export default TodoList;
