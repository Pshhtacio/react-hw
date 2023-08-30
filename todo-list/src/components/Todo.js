import "../css/Todo.css";
import { useTodos } from "../hooks/useTodos";

const Todo = (props) => {
  const { deleteTodo, toggleTodo } = useTodos();

  const handleOnToggle = () => {
    toggleTodo(props.todo.id, { done: !props.todo.done });
  };

  const handleDelete = () => {
    deleteTodo(props.todo.id);
  };

  return (
    <div className="todo-item">
      <span className={props.todo.done ? "done" : ""} onClick={handleOnToggle}>
        {props.todo.text}
      </span>
      <button className="delete-button" onClick={handleDelete}>
        x
      </button>
    </div>
  );
};

export default Todo;
