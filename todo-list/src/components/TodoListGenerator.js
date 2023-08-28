import React, { useState } from "react";

const TodoListGenerator = (props) => {
    const [ text, setText ] = useState("");

    const onInputChange = (event) => {
        setText(event.target.value);
    };

    const onSubmit = () => {
        props.onSubmit();
        setText("");
    };

    return (
        <div>
            <input
                type="text"
                value={text}
                onChange={onInputChange}
            />
            <button onClick={onSubmit}>Submit</button>
        </div>
    );
};

export default TodoListGenerator;
