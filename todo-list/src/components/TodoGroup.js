import Todo from "./Todo";

const TodoGroup = (props) => {
  return (
    <div>
      {props.todos.map(((item) => 
        <Todo 
          item={item}
        />
      ))}
    </div>
  );
};

export default TodoGroup;
