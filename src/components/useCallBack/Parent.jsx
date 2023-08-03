import { useCallback, useState } from "react";
import Child from "./Child";

const Parent = () => {
  const [count, setCount] = useState(0);
  console.log("@SN parent");
  const demo = useCallback(() => {
    console.log("@SN ");
  }, []);
  return (
    <>
      <div>
        <h2>{count}</h2>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <Child name={"suyog"} demo={demo} />
      </div>
    </>
  );
};

export default Parent;
