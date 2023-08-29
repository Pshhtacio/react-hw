import '../css/Todo.css';
import { useDispatch } from 'react-redux';
import { deleteTodo, toggleTodo } from './todoSlice';

const Todo = (props) => {
  const dispatch = useDispatch();
  const isDone = props.done ? 'done' : '';

  const handleOnToggle = () => {
    dispatch(toggleTodo(props.index));
  };
  
  const handleDelete = () => {
    dispatch(deleteTodo(props.index));
  };

  return (
    <div className="todo-item">
      <span 
        className={isDone}
        onClick={handleOnToggle}
      >
        {props.todoText}
      </span>
        <button 
        className='delete-button'
        onClick={handleDelete}
        >x</button>
    </div>
  );
};

export default Todo;
