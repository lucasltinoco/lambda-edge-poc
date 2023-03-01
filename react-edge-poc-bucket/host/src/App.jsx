import React, { useEffect } from "react";
import { createRoot } from "react-dom/client";
import {
  createHashRouter,
  RouterProvider,
  Link,
  useRouteError,
  Outlet
} from "react-router-dom";

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

    <section id="site-bar">
      <div className="container">
        <h1>"Título"</h1>
        <p>"Descrição"</p>
      </div>
    </section>

    <section id="main">
      <div className="container">
        <Outlet />
      </div>
    </section>
  </>
);

function ErrorBoundary() {
  let error = useRouteError();
  console.error(error);
  // Uncaught ReferenceError: path is not defined
  return <div>Dang!</div>;
}

function Home() {
  useEffect(() => {
    document.cookie = "origin=B";
    document.location.reload();
  }, []);

  return <div>Home</div>;
}

const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorBoundary />,
    // loader: console.log,
    children: [
      {
        path: "",
        element: <Home />
      },
      {
        path: "premieres",
        element: <div>Premieres</div>
        // loader: console.log,
      },
      {
        path: "popular",
        element: <div>Popular</div>
        // loader: console.log,
      },
      {
        path: "search",
        element: <div>Search</div>
        // loader: console.log,
      }
    ]
  }
]);

createRoot(document.getElementById("app")).render(
  <RouterProvider router={router} />
);
