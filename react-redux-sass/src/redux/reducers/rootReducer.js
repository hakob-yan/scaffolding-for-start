import * as actions from "../actionTypes";
const defaultState = { todos: ["Go shoping", "Do homeworks"] };

export default function rootReducer(state = defaultState, action) {
  switch (action.type) {
    case actions.ADD_TODO: {
      const { task } = action.payload;
      const newTodos = [...state.todos, task];
      return {
        ...state,
        todos: newTodos,
      };
    }

    default:
      return defaultState;
  }
}
