import React, { useEffect } from "react";
import { createRoot } from "react-dom/client";
import {
  createHashRouter,
  RouterProvider,
  Link,
  useRouteError,
  Outlet
} from "react-router-dom";
import Premieres from "./pages/Premieres";

import "../public/assets/css/style.css";

const App = () => (
  <>
    <header id="site-header">
      <div className="container">
        <div className="pull-left logo">
          REACTJS <span className="alt">BY</span> EXAMPLE
        </div>
        <ul className="pull-right menu">
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/premieres">PREMIERES</Link>
          </li>
          <li>
            <Link to="/popular">POPULAR</Link>
          </li>
          <li>
            <Link to="/search">SEARCH</Link>
          </li>
        </ul>
      </div>
    </header>

    <Outlet />
  </>
);

function ErrorBoundary() {
  let error = useRouteError();
  console.error(error);
  return <div>Dang!</div>;
}

function Loading() {
  return <div>Loading...</div>;
}

const redirectToAngularJs = (route = "") => {
  if (window.location.href.includes("localhost")) {
    window.location.assign(`http://localhost:8282/#/${route}`);
  } else {
    document.cookie = "origin=B";
    window.location.assign(`/#/${route}`);
    document.location.reload();
  }
  return null;
};

const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorBoundary />,
    children: [
      {
        path: "",
        element: <Loading />,
        loader: () => redirectToAngularJs()
      },
      {
        path: "premieres",
        element: <Premieres />
      },
      {
        path: "popular",
        element: <Loading />,
        loader: () => redirectToAngularJs("popular")
      },
      {
        path: "search",
        element: <Loading />,
        loader: () => redirectToAngularJs("search")
      }
    ]
  }
]);

createRoot(document.getElementById("app")).render(
  <RouterProvider router={router} />
);
