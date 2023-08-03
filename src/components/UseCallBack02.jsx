import { memo } from "react";

function UseCallBack02({ todos, todoList }) {
  console.log("child render");
  return (
    <div>
      <h2>My Todos</h2>
      {todos.map((todo, index) => {
        return <p key={index}>{todo}</p>;
      })}
      <button onClick={todoList}>Add todo</button>
    </div>
  );
}

export default memo(UseCallBack02);
