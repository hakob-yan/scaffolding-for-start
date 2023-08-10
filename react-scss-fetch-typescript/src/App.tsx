import { ReactElement, useEffect, useState } from 'react';
import { fetchAPITodos } from "./utils/api"
import { ITodo } from './utils/api/types';
import './App.scss';

function App(): ReactElement {
  const [data, setData] = useState<ITodo>()
  useEffect(() => {
    (async function () {
      const data = await fetchAPITodos();
      setData(data)
    })()
  }, [])
  return (
    <div className="App">
      {data && data.title}
    </div>
  );
}

export default App;
