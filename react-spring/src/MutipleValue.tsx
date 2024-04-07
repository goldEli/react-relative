import { animated, useSpring } from "@react-spring/web";
import { useEffect } from "react";

function App() {
  const [springs, api] = useSpring(() => {
    return {
      from: { width: 100, height: 100 },
      // to: { width: 200, height: 200 },
      config: {
        // duration: 2000,
        mass: 2,
        friction: 10,
        tension: 400,
      },
    };
  });
  const handleClick = () => {
    api.start({ width: 200, height: 200 });
  };
  return (
    <animated.div
      onClick={handleClick}
      style={{
        ...springs,
        background: "#ff6d6d",
        borderRadius: 8,
        // ...springs,
      }}
    />
  );
}

export default App;
