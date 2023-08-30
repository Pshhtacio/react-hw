import {useNavigate} from "react-router-dom";

const DoneItem = (props) => {

  const navigate = useNavigate();
  const onClickTodoItem = () => {
    navigate("/done/" + props.item.id);

  };

  return (
    <>
      <div className="todo-item">
        <span onClick={onClickTodoItem}>{props.item.text}</span>
      </div>
    </>
  );
};

export default DoneItem;