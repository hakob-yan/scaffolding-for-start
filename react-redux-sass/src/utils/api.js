import axiosInstance from "../lib"

export async function fetchAPITodos() {
    return await axiosInstance.get("todos/1");
  }
  