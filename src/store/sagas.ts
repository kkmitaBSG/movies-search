import { call, put, select, takeLatest } from "redux-saga/effects";
import { SagaIterator } from "redux-saga";
import { AnyAction } from "@reduxjs/toolkit";
import { MoviesActionType } from "./types";
import {
  getPopularMoviesNextPageSuccess,
  getPopularMoviesSuccess,
} from "./reducers/popularMoviesReducer";
import {
  getMovieDetails,
  getMoviesPage,
  getMoviesResults,
  getSearchFromLocationSearch,
  getSearchMoviesPage,
} from "./selectors";
import { getMovieDetailsSuccess } from "./reducers/movieDetailsReducer";
import {
  getSearchMoviesNextPageSuccess,
  getSearchMoviesSuccess,
} from "./reducers/searchMoviesReducer";
import * as api from "./requests";

export function* moviesWorker(): SagaIterator<void> {
  try {
    const moviesResults = yield select(getMoviesResults);

    if (moviesResults.length) {
      return;
    }

    const searchPhrase = yield select(getSearchFromLocationSearch);

    let response;
    if (searchPhrase) {
      response = yield call(api.getSearchMovies, searchPhrase, 1);
      yield put(getSearchMoviesSuccess(response.data));
    } else {
      response = yield call(api.getMovies, 1);
      yield put(getPopularMoviesSuccess(response.data));
    }
  } catch (err) {
    yield put({ type: MoviesActionType.getMoviesFail, message: err.message });
  }
}

export function* searchMoviesWorker(): SagaIterator<void> {
  try {
    const searchPhrase = yield select(getSearchFromLocationSearch);
    const response = yield call(api.getSearchMovies, searchPhrase, 1);
    yield put(getSearchMoviesSuccess(response.data));
  } catch (err) {
    yield put({ type: MoviesActionType.getMoviesFail, message: err.message });
  }
}

export function* moviesNextPageWorker(): SagaIterator<void> {
  try {
    const searchPhrase = yield select(getSearchFromLocationSearch);
    let response;
    if (searchPhrase) {
      const page: number = yield select(getSearchMoviesPage);
      response = yield call(api.getSearchMovies, searchPhrase, page + 1);
      yield put(getSearchMoviesNextPageSuccess(response.data));
    } else {
      const page: number = yield select(getMoviesPage);
      response = yield call(api.getMovies, page + 1);
      yield put(getPopularMoviesNextPageSuccess(response.data));
    }
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
  yield takeLatest(MoviesActionType.getSearchMovies, searchMoviesWorker);
  yield takeLatest(MoviesActionType.getMoviesNextPage, moviesNextPageWorker);
  yield takeLatest(MoviesActionType.getMovieDetails, movieDetailsWorker);
}
