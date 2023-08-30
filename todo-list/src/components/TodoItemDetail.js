import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import "../css/TodoItemDetail.css"; // Import your CSS file

const TodoItemDetail = () => {
  const { id } = useParams();
  const todos = useSelector((state) => state.todo.todoList);
  const todoItem = todos.find((item) => item.id === id);

  return (
    <div className="todo-detail-container">
      <div className="todo-detail-background"></div>
      <div className="todo-detail">
        <h1>Todo Item Detail</h1>
        <div className="todo-id"><b>#</b>{todoItem?.id}</div>
        <div className="todo-text">{todoItem?.text}</div>
      </div>
    </div>
  );
};

export default TodoItemDetail;
