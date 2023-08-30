import {useSelector} from 'react-redux';
import DoneGroup from "./DoneGroup.js";

const DoneList = () => {
  const todos = useSelector((state) => state.todo.todoList.filter(task => task.done));


  return (
    <div className="container">
      <h1>Todo List</h1>
      <DoneGroup
        todos={todos}
      />
    </div>
  );
};

export default DoneList;
