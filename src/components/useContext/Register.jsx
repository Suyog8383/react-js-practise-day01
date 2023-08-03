import { useContext } from "react";
import { Appcontext } from "./MainContext";

function Register() {
  const { name, surname } = useContext(Appcontext);
  return (
    <div>
      <h3>REGISTER PAGE</h3>
      <h4>{name}</h4>
      <h4>{surname}</h4>
    </div>
  );
}

export default Register;
