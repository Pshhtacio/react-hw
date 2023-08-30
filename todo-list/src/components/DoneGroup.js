import DoneItem from "./DoneItem";

const DoneGroup = (props) => {
  return (
    <div>
      {props.todos.map(((item) => 
        <DoneItem 
          item={item}
        />
      ))}
    </div>
  );
};

export default DoneGroup;
