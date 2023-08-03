import { memo } from "react";

const Child = () => {
  console.log("@SN Child");
  return (
    <>
      <h3>Child component</h3>
    </>
  );
};
export default memo(Child);
