import React from "react";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import MoviesPage from "./modules/MoviesPage/MoviesPage";
import DetailsPage from "./modules/DetailsPage/DetailsPage";
import { store } from "./store";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MoviesPage />,
  },
  {
    path: "/details/:id",
    element: <DetailsPage />,
  },
]);

const container = document.getElementById("root");
const root = createRoot(container!);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider
        router={router}
        // TODO: fallback spinner
        // fallbackElement=""
      />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
