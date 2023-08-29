import React from "react";
import Todo from "./Todo";

const TodoListGroup = (props) => {
  return (
    <div className="todo-list">
      { props.todos.map((item, index) => {
          return (
            < Todo
              key={ item.id }
              index={ index }
              todoText={ item.text }
              done={ item.done }
            />
          );
        }) 
      }
    </div>
  );
};

export default TodoListGroup;
