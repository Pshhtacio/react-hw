import { useRef } from "react";
import { useDispatch } from "react-redux";
import * as todoApi from '../api/todoApi';
import '../css/Todo.css';
import { resetTodoTask } from './todoSlice';


const TodoListGenerator = () => {
    const addTodoRef = useRef();
    const dispatch = useDispatch();

    const addNewTodo = async () => {

        const todo = addTodoRef.current.value;
        if (!todo) {
            return;
        } else {
            const newTodo = {
                id: Date.now(),
                text: todo,
                done: false,
            };
            await todoApi.createTodotask(newTodo);
            const response = await todoApi.getTodoTasks();
            dispatch(resetTodoTask(response.data));
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
