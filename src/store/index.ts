import { configureStore } from "@reduxjs/toolkit";
import popularMoviesReducer from "./reducers/popularMoviesReducer";
import movieDetailsReducer from "./reducers/movieDetailsReducer";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas";
import searchMoviesReducer from "./reducers/searchMoviesReducer";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    movies: popularMoviesReducer,
    searchMovies: searchMoviesReducer,
    movieDetails: movieDetailsReducer,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
