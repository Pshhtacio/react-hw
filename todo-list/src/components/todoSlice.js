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
    },
});

export const { addTodo, onToggle, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;