import { createContext, useState } from "react";
import Login from "./Login";
import Register from "./Register";

export const Appcontext = createContext(null);

function MainContext() {
  const [name, setName] = useState("");
  const [surname, setSurName] = useState("");
  return (
    <div>
      <h3>Main Context</h3>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Appcontext.Provider value={{ name, setSurName, surname }}>
        <Login />
        <Register />
      </Appcontext.Provider>
    </div>
  );
}

export default MainContext;
