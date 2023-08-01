import "./App.scss";
import { useDispatch } from "react-redux";
import { shallowEqual, useSelector } from "react-redux";
import { addTodo } from "./redux/actions";

function App() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.rootReducer.todos, shallowEqual);
  const handleClick = () => {
    dispatch(addTodo((new Date().toString())));
  };
  return (
    <div className="App">
      {todos.map((el) => (
        <h1>{el}</h1>
      ))}
      <input style={{maxWidth:'120px',cursor:'pointer'}} onClick={handleClick} type="button" value={'Date now'}/>
    </div>
  );
}

export default App;
