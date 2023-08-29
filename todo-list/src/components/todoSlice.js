import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todoList: [],
  },
  reducers: {
    addTodo: (state, action) => {
      state.todoList.push(action.payload);
    },
    toggleTodo: (state, action) => {
      const todoItem = state.todoList[action.payload];
      todoItem.done = !todoItem.done;
    },
  },
});

export const {addTodo, toggleTodo, deleteTodo} = todoSlice.actions;
export default todoSlice.reducer;