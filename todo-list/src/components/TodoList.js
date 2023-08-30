import { useSelector } from 'react-redux';
import TodoListGenerator from "./TodoListGenerator.js";
import TodoGroup from "./TodoGroup.js";


const TodoList = () => {
  const todos = useSelector((state) => state.todo.todoList);


  return (
    <div className="container">
      <h1>Todo List</h1>
      <TodoGroup 
        todos={todos}/>
      <TodoListGenerator />
    </div>
  );
};

export default TodoList;
