import { createStore } from "redux";
import { createAction, createReducer } from "@reduxjs/toolkit";

const addToDo = createAction("ADD");
const deleteToDo = createAction("DELETE");

console.log(addToDo(), deleteToDo());

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

const reducer = createReducer(initState, {
  [addToDo]: (state, action) => {
    state.push({ text: action.payload.text, id: action.payload.id });
    localStorage.setItem("toDos", JSON.stringify(state));
  },
  [deleteToDo]: (state, action) => {
    const delList = state.filter((toDo) => toDo.id !== action.payload);
    localStorage.setItem("toDos", JSON.stringify(delList));
    return delList;
  },
});

const store = createStore(reducer);

export const actionCreators = {
  addToDo,
  deleteToDo,
};

export default store;
