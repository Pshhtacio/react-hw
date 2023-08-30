import {DeleteOutlined, EditOutlined} from "@ant-design/icons";
import {Button, Input, Modal, Space, Tooltip} from "antd";
import React, {useState} from "react";
import "../css/Todo.css";
import {useTodos} from "../hooks/useTodos";

const Todo = (props) => {
  const { deleteTodo, toggleTodo, updateTodo } = useTodos();
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [task, setTask] = useState(props.todo.text);

  const showModal = () => {
    setOpen(true);
  };

  const handleOk = () => {
    handleUpdateTodo(task);
    setConfirmLoading(true);
    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);
    }, 1300);
  };

  const handleInputChange = (taskUpdateInput) => {
    setTask(taskUpdateInput.target.value);
  };

  const handleCancel = () => {
    setTask(props.todo.text);
    setOpen(false);
  };

  const handleUpdateTodo = (textInput) => {
    updateTodo(props.todo.id, { text: textInput });
  };

  const handleOnToggle = () => {
    toggleTodo(props.todo.id, { done: !props.todo.done });
  };

  const handleDelete = () => {
    deleteTodo(props.todo.id);
  };

  return (
    <div className="todo-item">
      <Space direction="horizontal">
        <span
          className={props.todo.done ? "done" : ""}
          onClick={handleOnToggle}
        >
          {props.todo.text}
        </span>
        <Tooltip title="Delete">
          <Button
            type="primary"
            danger
            shape="circle"
            icon={<DeleteOutlined />}
            onClick={handleDelete}
          />
        </Tooltip>
        <Tooltip title="Edit">
          <Button
            type="primary"
            shape="circle"
            icon={<EditOutlined />}
            onClick={showModal}
          />
        </Tooltip>
      </Space>

      <Modal
        title="Update Task"
        open={open}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        <br />
        <Input
          style={{
            width: "100%",
          }}
          placeholder="What's on your mind... "
          value={task}
          onChange={handleInputChange}
        />
        <br />
      </Modal>
    </div>
  );
};

export default Todo;
