import React, { useState } from "react";
import TodoListGroup from "./components/TodoListGroup";
import TodoListGenerator from "./components/TodoListGenerator";
import "./css/App.css";

const App = () => {
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
            <TodoListGroup todos={todos} />
            <TodoListGenerator onSubmit={addTodo} />
        </div>
    );
};

export default App;
