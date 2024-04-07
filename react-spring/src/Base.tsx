import { animated, useSpring } from "@react-spring/web";

function App() {
  const [springs, api] = useSpring(() => {
    return {
      from: { x: 0 },
      // to: { x: 100 },
      delay: 1000,
    };
  });

  const handleClick = () => {
    api.start({
      from: {
        x: 0,
      },
      to: {
        x: 100,
      },
    });
  };
  return (
    <animated.div
      onClick={handleClick}
      style={{
        width: 80,
        height: 80,
        background: "#ff6d6d",
        borderRadius: 8,
        ...springs,
      }}
    />
  );
}

export default App;
