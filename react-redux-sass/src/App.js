import "./App.scss";
import { useDispatch } from "react-redux";
import { shallowEqual, useSelector } from "react-redux";
import { addTodo ,fetchTodo} from "./redux/actions";

function App() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.rootReducer.todos, shallowEqual);
  const handleClick = () => dispatch(addTodo(new Date().toString()));
  const handleAsyncClick = () => dispatch(fetchTodo());


  return (
    <div className="App">
      {todos.map((el) => (
        <h1 key={el}>{el}</h1>
      ))}
      <input
        style={{ maxWidth: "120px", cursor: "pointer" }}
        onClick={handleClick}
        type="button"
        value={"Date now"}
      />
      <input
        style={{ maxWidth: "120px", cursor: "pointer" }}
        onClick={handleAsyncClick}
        type="button"
        value={"async button"}
      />
    </div>
  );
}

export default App;
