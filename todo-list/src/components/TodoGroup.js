import Todo from "./Todo";
import { useSelector } from 'react-redux'

const TodoGroup = () => {
  const todos = useSelector((state) => state.todo.todoList);
  return (
    <div className="todo-list-container">
      {todos.map(((item) => 
        <Todo 
          key={item.id}
          todo={item}
        />
      ))}
    </div>
  );
};

export default TodoGroup;
