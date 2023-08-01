import * as actions from "../actionTypes";
import { fetchAPITodos } from "../../utils/api";

export function addTodo(task) {
  return { type: actions.ADD_TODO, payload: { task } };
}

export  function fetchTodo() {
  return async (dispatch) => {
    const task = await fetchAPITodos();
    dispatch({ type: actions.ADD_TODO, payload: { task: task.data.title } });
  };
}
