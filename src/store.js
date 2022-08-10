import { createStore } from "redux";

const ADD = "ADD";
const DELETE = "DELETE";

if (!localStorage.getItem("toDos")) {
  window.localStorage.setItem("toDos", JSON.stringify([]));
}

export const addToDo = (text) => {
  return {
    type: ADD,
    text,
    id: Date.now(),
  };
};

export const deleteToDo = (id) => {
  return { type: DELETE, id: parseInt(id) };
};

const initState = JSON.parse(localStorage.getItem("toDos"));

const reducer = (state = initState, action) => {
  switch (action.type) {
    case ADD:
      const addToDo = [{ text: action.text, id: action.id }, ...state];
      localStorage.setItem("toDos", JSON.stringify(addToDo));
      return addToDo;
    case DELETE:
      const delToDo = state.filter((toDo) => toDo.id !== action.id);
      localStorage.setItem("toDos", JSON.stringify(delToDo));
      return delToDo;
    default:
      return state;
  }
};
const store = createStore(reducer);

export default store;
