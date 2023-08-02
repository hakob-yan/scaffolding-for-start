import { useDispatch } from "react-redux";
import { shallowEqual, useSelector } from "react-redux";
import { addTodo, fetchTodo } from "../../redux/actions";
import "./styles.scss";

function Home() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.rootReducer.todos, shallowEqual);
//   const error = useSelector((state) => state.rootReducer.error, shallowEqual);
 
  const handleClick = () => dispatch(addTodo(new Date().toString()));
  const handleAsyncClick = () => dispatch(fetchTodo());

  return (
    <div className="Home">
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

export default Home;
