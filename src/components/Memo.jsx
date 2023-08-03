import { useMemo, useState } from "react";

function Memo() {
  const [search, setSearch] = useState("");

  const counter = useMemo(() => {
    let counter = 0;
    for (let i = 0; i < 5; i++) {
      console.log("@SN ", i);
      counter += i;
    }
    return counter;
  }, []);

  // let counter = 0;
  // for (let i = 0; i < 5; i++) {
  //   console.log("@SN ", i);
  //   counter += i;
  // }

  return (
    <div>
      <h2>Home Component</h2>
      <h3>{counter}</h3>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
}

export default Memo;
