import '../css/App.css';
import { useDispatch } from 'react-redux';
import { toggleTodo } from './todoSlice';

const Todo = (props) => {
  const dispatch = useDispatch();
  const isDone = props.done ? 'done' : '';

  const handleOnToggle = () => {
    dispatch(toggleTodo(props.index));
  };

  return (
    <div className="todo-item">
      <span
        className={isDone}
        onClick={handleOnToggle}
      >
        {props.todoText}
      </span>
    </div>
  );
};

export default Todo;
