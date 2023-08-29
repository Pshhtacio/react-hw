import TodoListGroup from "./TodoListGroup.js";
import TodoListGenerator from "./TodoListGenerator.js";
import { useSelector } from 'react-redux';

const TodoList = () => {
  const todos = useSelector((state) => state.todo.todoList);

  const addTodo = (text) => {
    if (text.trim() !== "") {
      const newTodo = {
        id: Date.now(),
        text: text,
      };
      setTodos([...todos, newTodo]);
    }
  };

  return (
    <div className="container">
      <h1>Todo List</h1>
      <TodoListGroup todos={ todos } />
      <TodoListGenerator onSubmit={ addTodo } />
    </div>
  );
};

export default TodoList;
