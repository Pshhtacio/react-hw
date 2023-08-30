import '../css/Todo.css';
import { useDispatch } from 'react-redux';
import { deleteTodo, toggleTodo } from './todoSlice';

const Todo = (props) => {
  const dispatch = useDispatch();

  const handleOnToggle = () => {
    dispatch(toggleTodo(props.item.id));
  };
  
  const handleDelete = () => {
    dispatch(deleteTodo(props.item.id));
  };

  return (
    <div className="todo-item">
      <span 
        className={props.item.done ? 'done' : ''}
        onClick={handleOnToggle}
      >
        {props.item.text}
      </span>
        <button 
        className='delete-button'
        onClick={handleDelete}
        >x</button>
    </div>
  );
};

export default Todo;
