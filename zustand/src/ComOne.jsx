import { useContext } from "react";
import { useNumStore } from "./App";

function ComOne() {
  // const { one, setOne } = useContext(AppContext);
  console.log("one render");
  const { one, setOne } = useNumStore();

  return (
    <div
      onClick={(e) => {
        setOne(one + 1);
      }}
    >
      ComOne: {one}
    </div>
  );
}

export default ComOne;
