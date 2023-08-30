import { useDispatch } from "react-redux";
import * as todoApi from "../api/todoApi";
import { resetTodoTask } from "../components/todoSlice";

export const useTodos = () => {
  const dispatch = useDispatch();

  async function loadTodos() {
    const response = await todoApi.getTodoTasks();
    dispatch(resetTodoTask(response.data));
  }

  const addTodo = async (todoItem) => {
    await todoApi.createTodotask(todoItem);
    loadTodos();
  };

  const toggleTodo = async (id, todoItem) => {
    await todoApi.updateTodoTask(id, todoItem);
    loadTodos();
  };
  
  const updateTodo = async (id, todoItem) => {
    await todoApi.updateTodoTask(id, todoItem);
    loadTodos();
  };

  const deleteTodo = async (id) => {
    await todoApi.deleteTodoTask(id);
    loadTodos();
  };

  return {
    loadTodos,
    addTodo,
    toggleTodo,
    updateTodo,
    deleteTodo,
  };
};
