import { useContext } from "react";
import { Appcontext } from "./MainContext";

function Login() {
  const { name, setSurName, surname } = useContext(Appcontext);

  return (
    <div>
      <h3>LOGIN PAGE</h3>
      <input
        type="text"
        value={surname}
        onChange={(e) => setSurName(e.target.value)}
      />
      <h4>{name}</h4>
      <h4>{surname}</h4>
    </div>
  );
}

export default Login;
