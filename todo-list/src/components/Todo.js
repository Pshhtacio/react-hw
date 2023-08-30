import {useDispatch} from 'react-redux';
import * as todoApi from '../api/todoApi';
import '../css/Todo.css';
import { resetTodoTask} from './todoSlice';

const Todo = (props) => {
  const dispatch = useDispatch();

  const handleOnToggle = async () => {
    await todoApi.updateTodoTask(props.todo.id, {done: !props.todo.done});
    const response = await todoApi.getTodoTasks();
    dispatch(resetTodoTask(response.data));
  };

  const handleDelete =async () => {
    await todoApi.deleteTodoTask(props.todo.id);
    const response = await todoApi.getTodoTasks();
    dispatch(resetTodoTask(response.data));
  };

  return (
    <div className="todo-item">
      <span
        className={props.todo.done ? 'done' : ''}
        onClick={handleOnToggle}
      >
        {props.todo.text}
      </span>
      <button
        className='delete-button'
        onClick={handleDelete}
      >x</button>
    </div>
  );
};

export default Todo;
