import React, { useState } from "react";
import TodoListGroup from "./TodoListGroup.js";
import TodoListGenerator from "./TodoListGenerator.js";

const TodoList = () => {
  const [text, setText] = useState("");
  const [size, setSize] = useState(0);
  const [todos, setTodos] = useState([]);

  const todoTextInput = (inputText) => {
    setText(inputText);
  };

  const onSubmit = () => {
    const newTodo = { id: size, text: text };
    setTodos([...todos, newTodo]);
    setSize(size + 1);
  };

  return (
    <div>
      <TodoListGroup todos={todos} />
      <TodoListGenerator
        todoTextInput={todoTextInput}
        onSubmit={onSubmit}
      />
    </div>
  );
};

export default TodoList;
