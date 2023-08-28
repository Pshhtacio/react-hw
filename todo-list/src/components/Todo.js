import {useState} from "react";

const Todo = (props) => {
    return (
        <div>
            <span>{props.text}</span>
        </div>
    );

};

export default Todo;