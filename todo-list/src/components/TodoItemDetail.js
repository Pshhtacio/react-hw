import {useSelector} from "react-redux";
import {useParams} from "react-router-dom";

const TodoItemDetail = () => {

  const {id} = useParams();
  const todos = useSelector((state) => state.todo.todoList);
  const todoItem = todos.find((item) => item.id == id)
  
  console.log(todoItem)

  return (

    <div className="todo-detail">
      <h1>Todo Item Detail</h1>
      <div>{todoItem?.id}</div>
      <div>{todoItem?.text}</div>
    </div>

  );

};



export default TodoItemDetail;