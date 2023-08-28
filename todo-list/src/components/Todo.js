import {useState} from "react";

const Todo = (props) => {
    return (
        <div className="todo-item">
            <span>{props.text}</span>
        </div>
    );

};

export default Todo;