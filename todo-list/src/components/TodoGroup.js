import Todo from "./Todo";
import { useSelector } from 'react-redux'

const TodoGroup = () => {
  const todos = useSelector((state) => state.todo.todoList);
  return (
    <div>
      {todos.map(((item) => 
        <Todo 
          item={item}
        />
      ))}
    </div>
  );
};

export default TodoGroup;
