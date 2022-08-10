import { createStore } from "redux";
import {
  configureStore,
  createAction,
  createReducer,
  createSlice,
} from "@reduxjs/toolkit";

// const addToDo = createAction("ADD");
// const deleteToDo = createAction("DELETE");

if (!localStorage.getItem("toDos")) {
  window.localStorage.setItem("toDos", JSON.stringify([]));
}

const initState = JSON.parse(localStorage.getItem("toDos"));

// const reducer = (state = initState, action) => {
//   switch (action.type) {
//     case addToDo.type:
//       const addList = [
//         { text: action.payload.text, id: action.payload.id },
//         ...state,
//       ];
//       localStorage.setItem("toDos", JSON.stringify(addList));
//       console.log(action);
//       return addList;
//     case deleteToDo.type:
//       const delList = state.filter((toDo) => toDo.id !== action.payload);
//       localStorage.setItem("toDos", JSON.stringify(delList));
//       return delList;
//     default:
//       return state;
//   }
// };

// const reducer = createReducer(initState, {
//   [addToDo]: (state, action) => {
//     state.push({ text: action.payload.text, id: action.payload.id });
//     localStorage.setItem("toDos", JSON.stringify(state));
//   },
//   [deleteToDo]: (state, action) => {
//     const delList = state.filter((toDo) => toDo.id !== action.payload);
//     localStorage.setItem("toDos", JSON.stringify(delList));
//     return delList;
//   },
// });

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

// export const actionCreators = {
//   addToDo,
//   deleteToDo,
// };

export const { addToDo, deleteToDo } = toDos.actions;

export default store;
