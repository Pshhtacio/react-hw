const Todo = (props) => {
    return (
        <div className="todo-item">
            <span>{ props.todoText }</span>
        </div>
    );

};

export default Todo;