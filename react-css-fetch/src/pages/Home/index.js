import React, { useState, useEffect } from "react";
import { fetchAPITodos } from "../../utils/api";
import "./styles.css";

function Home() {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    (async function () {
      const resp = await fetchAPITodos();
      const data=await resp.json();
      setTodos([...todos,data.title]);
    })();
  }, []);

  const handleClick = () => setTodos([...todos, (new Date()).toDateString()]);

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
    </div>
  );
}

export default Home;
