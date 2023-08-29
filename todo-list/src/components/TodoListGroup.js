import Todo from "./Todo";

const TodoListGroup = (props) => {
  return (
    <div>
      {props.todos.map((item, index) => (
        <Todo
          key={item.id}
          index={index}
          todoText={item.text}
          done={item.done}
        />
      ))}
    </div>
  );
};

export default TodoListGroup;
