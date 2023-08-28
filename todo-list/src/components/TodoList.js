import React, { useState } from "react";
import TodoListGroup from "./TodoListGroup.js";
import TodoListGenerator from "./TodoListGenerator.js";

const TodoList = () => {
    const [ text, setText ] = useState("");
    const [ size, setSize ] = useState(0);

    const todoTextInput = (inputText) => {
        setText(inputText);
    };

    const onSubmit = () => {
        setSize(size + 1);
    };

    return (
        <div>
            <TodoListGroup size={size} text={text} />
            <TodoListGenerator
                todoTextInput={todoTextInput}
                onSubmit={onSubmit}
            />
        </div>
    );
};

export default TodoList;
