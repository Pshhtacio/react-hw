import React, { useState } from "react";

const TodoListGenerator = (props) => {
    const [text, setText] = useState("");

    const onInputChange = (event) => {
        setText(event.target.value);
    };

    const onSubmit = () => {
        props.onSubmit(text);
        setText("");
    };

    return (
        <div>
            <input
                type="text"
                value={text}
                onChange={onInputChange}
            />
            <button onClick={onSubmit}>Add</button>
        </div>
    );
};

export default TodoListGenerator;
