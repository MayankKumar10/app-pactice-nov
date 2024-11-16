import { createSlice } from "@reduxjs/toolkit";

export const TodoState = {
  id: "",
  title: "",
  info: "",
}

const initialState = {
  data: [
    {
      id: 1,
      title: "First Task",
      info: "finish it before 10pm",
    }
  ],
  todoForm: TodoState,
  status: "idle",
  error: null,
}

const TodoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action)=> {
      state.data.push(action.payload)
      localStorage.setItem("todo1", JSON.stringify(state.data))
    },

    editTodo: (state, action) => {
      let { id } = action.payload

      let todoId = state.data.find((todo)=> todo.id === id)

      if(todoId){
        state.todoForm = todoId
      }
    },

    updateTodo: (state, action) => {
      let { id } = action.payload

      let index = state.data.findIndex((todo)=> todo.id === id)

      if(index >=0){
        state.data[index] = action.payload
      }
      localStorage.setItem("todo1", JSON.stringify(state.data))
    },

    removeTodo: (state, action) => {
      state.data = state.data.filter((todo)=> todo.id !== action.payload.id)
      
      localStorage.setItem('todo1', JSON.stringify(state.data))
    }

  }
})

export const { addTodo, editTodo, updateTodo, removeTodo } = TodoSlice.actions
export const TodoReducer = TodoSlice.reducer