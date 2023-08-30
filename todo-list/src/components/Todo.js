import React, { useState } from "react";
import { Button, Input, Modal, Space, Tooltip } from "antd";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { useTodos } from "../hooks/useTodos";
import "../css/Todo.css";

const Todo = (props) => {
  const { deleteTodo, toggleTodo, updateTodo } = useTodos();
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [task, setTask] = useState(props.todo.text);
  const [deleteConfirmVisible, setDeleteConfirmVisible] = useState(false);

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
    setDeleteConfirmVisible(true);
  };

  const handleDeleteConfirm = () => {
    deleteTodo(props.todo.id);
    setDeleteConfirmVisible(false);
  };

  const handleDeleteCancel = () => {
    setDeleteConfirmVisible(false);
  };

  return (
    <div className={`todo-item ${props.todo.done ? "done" : ""}`}>
      <Space direction="horizontal">
        <div onClick={handleOnToggle} className="todo-text">
          {props.todo.text}
        </div>
      </Space>
      
      <div className="todo-buttons">
        <Tooltip title="Edit">
          <Button
            shape="circle"
            icon={<EditOutlined />}
            onClick={showModal}
          />
        </Tooltip>
        <Tooltip title="Delete">
          <Button
            danger
            shape="circle"
            icon={<DeleteOutlined />}
            onClick={handleDelete}
          />
        </Tooltip>
      </div>

      <Modal
        title="Update Task"
        visible={open}
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

      <Modal
        title="Confirm Delete"
        visible={deleteConfirmVisible}
        onOk={handleDeleteConfirm}
        onCancel={handleDeleteCancel}
        okText="Delete"
        cancelText="Cancel"
      >
        Are you sure you want to delete this task?
      </Modal>
    </div>
  );
};

export default Todo;
