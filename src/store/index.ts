import { configureStore } from "@reduxjs/toolkit";
import popularMoviesReducer from "./reducers/popularMoviesReducer";
import movieDetailsReducer from "./reducers/movieDetailsReducer";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas";
import searchMoviesReducer from "./reducers/searchMoviesReducer";
import {
  createRouterMiddleware,
  createRouterReducerMapObject,
} from "@lagunovsky/redux-react-router";
import { createBrowserHistory } from "history";

export const history = createBrowserHistory();
const routerMiddleware = createRouterMiddleware(history);

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    movies: popularMoviesReducer,
    searchMovies: searchMoviesReducer,
    movieDetails: movieDetailsReducer,
    ...createRouterReducerMapObject(history),
  },
  middleware: [sagaMiddleware, routerMiddleware],
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
