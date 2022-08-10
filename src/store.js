import { configureStore, createSlice } from "@reduxjs/toolkit";

if (!localStorage.getItem("toDos")) {
  window.localStorage.setItem("toDos", JSON.stringify([]));
}

const initState = JSON.parse(localStorage.getItem("toDos"));

const toDos = createSlice({
  name: "toDosReducer",
  initialState: initState,
  reducers: {
    addToDo: (state, action) => {
      state.push({ text: action.payload.text, id: action.payload.id });
      localStorage.setItem("toDos", JSON.stringify(state));
    },
    deleteToDo: (state, action) => {
      const delList = state.filter((toDo) => toDo.id !== action.payload);
      localStorage.setItem("toDos", JSON.stringify(delList));
      return delList;
    },
  },
});

const store = configureStore({ reducer: toDos.reducer });

export const { addToDo, deleteToDo } = toDos.actions;

export default store;
