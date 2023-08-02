import * as actions from "../actionTypes";
import { fetchAPITodos } from "../../utils/api";

export function setError(message) {
  return { type: actions.SET_ERROR, payload: { message } };
}

export function addTodo(task) {
  return { type: actions.ADD_TODO, payload: { task } };
}

export function fetchTodo() {
  return async (dispatch) => {
    try {
      const task = await fetchAPITodos();
      dispatch(addTodo(task.data.title));
    } catch (e) {
      dispatch(setError(e.message));
    }
  };
}
