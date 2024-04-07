import { animated, useSpring, useSprings } from "@react-spring/web";
import { useEffect } from "react";

function App() {
  const [springs, api] = useSprings(3,() => {
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
    <div>
      {springs.map((styles, index) => {
        return (
          <animated.div
            onClick={handleClick}
            style={{
              ...styles,
              background: "#ff6d6d",
              borderRadius: 8,
              // ...springs,
            }}
          />
        );
      })}
    </div>
  );
}

export default App;
