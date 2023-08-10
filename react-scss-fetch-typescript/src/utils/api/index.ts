import { ITodo } from "./types";
  export async function fetchAPITodos(): Promise<ITodo> {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  
    if (!response.ok) {
      throw new Error(`Network response was not ok: ${response.status}`);
    }
  
    const data: ITodo = await response.json();
    return data;
  }
  