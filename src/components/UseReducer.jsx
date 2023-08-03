import { useReducer } from "react";
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1, toggle: state.toggle };
    case "toggleText":
      return { count: state.count, toggle: !state.toggle };
  }
};
function UseReducer() {
  const [state, dispatch] = useReducer(reducer, { count: 0, toggle: true });
  return (
    <div>
      <h3>{state.count}</h3>
      <button
        onClick={() => {
          dispatch({ type: "increment" });
          dispatch({ type: "toggleText" });
        }}
      >
        Click here
      </button>
      {state.toggle && <h3>Hello there</h3>}
    </div>
  );
}

export default UseReducer;
