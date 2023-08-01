import axios from "../lib/axios"

export async function fetchAPITodos() {
    return await axios.get("todos/1");
  }
  