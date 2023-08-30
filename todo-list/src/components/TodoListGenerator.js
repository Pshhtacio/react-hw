import { useRef } from "react";
import "../css/Todo.css";
import { useTodos } from "../hooks/useTodos";

const TodoListGenerator = () => {
  const { addTodo } = useTodos();
  const addTodoRef = useRef();

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
      addTodo(newTodo);
      addTodoRef.current.value = null;
    }
  };

  return (
    <div>
      <input type="text" placeholder="Enter a task" ref={addTodoRef} />
      <button onClick={addNewTodo}>Add</button>
    </div>
  );
};

export default TodoListGenerator;
