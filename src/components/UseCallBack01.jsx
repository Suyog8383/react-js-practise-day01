import { useCallback, useState } from "react";
import UseCallBack02 from "./UseCallBack02";

function UseCallBack01() {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);

  const increase = () => {
    setCount((count) => count + 1);
  };

  const todoList = useCallback(() => {
    setTodos((t) => [...t, "new todo"]);
  }, []);

  return (
    <div>
      <p>Count={count}</p>
      <UseCallBack02 todos={todos} todoList={todoList} />
      <button onClick={increase}>Increase</button>
    </div>
  );
}

export default UseCallBack01;
