import React from "react";
import Todo from "./Todo";

const TodoListGroup = (props) => {
  return (
    <div className="todo-list">
      {props.todos.map((todo) => (
        <Todo key={todo.id} text={todo.text} />
      ))}
    </div>
  );
};

export default TodoListGroup;
