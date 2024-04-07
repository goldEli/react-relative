import { useContext } from "react";
import { useNumStore } from "./App";

function ComTwo() {
  // const { two, setTwo } = useContext(AppContext);
  const setTwo = useNumStore(state => state.setTwo);
  const two = useNumStore((state) => state.two);
  console.log("two render");

  return (
    <div
      onClick={(e) => {
        setTwo(two + 1);
      }}
    >
      ComTwo: {two}
    </div>
  );
}

export default ComTwo;
