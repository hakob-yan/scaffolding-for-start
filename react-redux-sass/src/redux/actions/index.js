import * as actions from "../actionTypes";

export function addTodo(task) {
  return { type: actions.ADD_TODO, payload: { task } };
}
