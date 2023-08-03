/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { memo } from "react";

const Child = ({ name }) => {
  console.log("Child Re-Render");
  return <p>My name is {name}</p>;
};

export default memo(Child);
