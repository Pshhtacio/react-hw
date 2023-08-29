import { useRef } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "./todoSlice";

const TodoListGenerator = () => {
    const addTodoRef = useRef();
    const dispatch = useDispatch();

    const addNewTodo = () => {
        const todo = addTodoRef.current.value;
        if (!todo) {
            return;
        } else {
            const newTodo = {
                id: Date.now(),
                text: todo,
                done: false,
            };
            dispatch(addTodo(newTodo));
            addTodoRef.current.value = null;
        }
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Enter a task"
                ref={addTodoRef}
            />
            <button onClick={addNewTodo}>Add</button>
        </div>
    );
};

export default TodoListGenerator;
