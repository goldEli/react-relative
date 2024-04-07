import { animated, useSpring, useSpringValue } from "@react-spring/web";
import { useEffect } from "react";

function App() {
  // const [springs, api] = useSpring({
  //   from: { x: 0 },
  //   to: { x: 100 },
  //   delay: 1000,
  // });
  // const [springs, api] = useSpring(() => ({
  //   from: { x: 0 },
  // }))
  // const handleClick = () => {
  //   api.start({
  //     from: {
  //       x: 0,
  //     },
  //     to: {
  //       x: 100,
  //     },
  //   });
  // };
  const width = useSpringValue(0, {
    config: {
      mass: 2,
      friction: 10,
      tension: 200,
    },
  });

  useEffect(() => {
    width.start(300)
  }, [])
  return (
    <animated.div
      // onClick={handleClick}
      style={{
        width: width,
        height: 80,
        background: "#ff6d6d",
        borderRadius: 8,
        // ...springs,
      }}
    />
  );
}

export default App;
