import { createContext, useState } from "react";
import ComOne from "./ComOne";
import ComTwo from "./ComTwo";
import { create } from "zustand";

// export const AppContext = createContext();

export const useNumStore = create((set) => ({
  one: 1,
  two: 1,
  setOne: (value) => set((state) => ({ one: value })),
  setTwo: (value) => set((state) => ({ two: value })),
}));

function App() {
  // const [one, setOne] = useState(1);
  // const [two, setTwo] = useState(1);
  // const { one, two } = useNumStore();

  return (
    <div>
      {/* {one}, {two} */}
      <ComOne />
      <ComTwo />
    </div>
  );
  // return (
  //   <AppContext.Provider
  //     value={{
  //       one: one,
  //       two: two,
  //       setOne,
  //       setTwo,
  //     }}
  //   >
  //     <ComOne />
  //     <ComTwo />
  //   </AppContext.Provider>
  // );
}

export default App;
