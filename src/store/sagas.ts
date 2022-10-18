import { call, put, select, takeLatest } from "redux-saga/effects";
import { SagaIterator } from "redux-saga";
import { AnyAction } from "@reduxjs/toolkit";
import { MoviesActionType } from "./types";
import {
  getMoviesNextPageSuccess,
  getMoviesSuccess,
} from "./reducers/moviesReducer";
import { getMovieDetails, getMoviesPage } from "./selectors";
import { getMovieDetailsSuccess } from "./reducers/movieDetailsReducer";
import * as api from "./requests";

export function* moviesWorker(action: AnyAction): SagaIterator<void> {
  try {
    let response;
    if (action.searchPhrase) {
      response = yield call(api.getSearchMovies, action.searchPhrase, 1);
    } else {
      response = yield call(api.getMovies, 1);
    }

    yield put(getMoviesSuccess(response.data));
  } catch (err) {
    yield put({ type: MoviesActionType.getMoviesFail, message: err.message });
  }
}

export function* moviesNextPageWorker(action: AnyAction): SagaIterator<void> {
  try {
    const page: number = yield select(getMoviesPage);
    let response;

    if (action.searchPhrase) {
      response = yield call(api.getSearchMovies, action.searchPhrase, page + 1);
    } else {
      response = yield call(api.getMovies, page + 1);
    }

    yield put(getMoviesNextPageSuccess(response.data));
  } catch (err) {
    yield put({ type: MoviesActionType.getMoviesFail, message: err.message });
  }
}

export function* movieDetailsWorker(action: AnyAction): SagaIterator<void> {
  try {
    const movieDetails = yield select(getMovieDetails(action.movieId));
    
    if (movieDetails) return;

    const response = yield call(api.getMovieDetails, action.movieId);

    yield put(getMovieDetailsSuccess(response.data));
  } catch (err) {
    yield put({ type: MoviesActionType.getMoviesFail, message: err.message });
  }
}

export default function* rootSaga() {
  yield takeLatest(MoviesActionType.getMovies, moviesWorker);
  yield takeLatest(MoviesActionType.getMoviesNextPage, moviesNextPageWorker);
  yield takeLatest(MoviesActionType.getMovieDetails, movieDetailsWorker);
}
