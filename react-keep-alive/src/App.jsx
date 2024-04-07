import { useState } from "react";
import {
  RouterProvider,
  createBrowserRouter,
  Outlet,
  Link,
} from "react-router-dom";

function Layout() {
  return (
    <div>
      <h1>this is layout</h1>
      <Outlet />
    </div>
  );
}

function Aaa() {
  return (
    <div>
      <h1>this is Aaa</h1>
      <Link to="/bbb">go to bbb</Link>
      <br />
      <Link to="/ccc">go to ccc</Link>
    </div>
  );
}

function Bbb() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>this is Bbb</h1>
      <Link to="/">go to home</Link>
      <div>count:{count}</div>
      <button onClick={() => setCount(count + 1)}>add</button>
    </div>
  );
}


function Ccc() {
  return (
    <div>
      <h1>this is Ccc</h1>
      <Link to="/">go to home</Link>
    </div>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Aaa />,
      },
      {
        path: "/bbb",
        element: <Bbb />,
      },
      {
        path: "/ccc",
        element: <Ccc />,
      },
    ],
  },
]);

function App() {
  return (
    <div>
      <h1>this is home</h1>
      <hr />
      <RouterProvider router={router} />
    </div>
  );
}
export default App;
