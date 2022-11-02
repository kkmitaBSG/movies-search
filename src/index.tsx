import React from "react";
import { Route, Routes } from "react-router-dom";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { ReduxRouter } from "@lagunovsky/redux-react-router";
import reportWebVitals from "./reportWebVitals";
import MoviesPage from "./modules/MoviesPage/MoviesPage";
import DetailsPage from "./modules/DetailsPage/DetailsPage";
import { store } from "./store";
import { history } from "./store/index";
import "./index.css";

const container = document.getElementById("root");
const root = createRoot(container!);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ReduxRouter history={history}>
        <Routes>
          <Route path={"/"} element={<MoviesPage />} />
          <Route path={"/details/:id"} element={<DetailsPage />} />
        </Routes>
      </ReduxRouter>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
