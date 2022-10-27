import { createSelector } from "reselect";
import { RootState } from ".";

export const getMovies = (state: RootState) => state.movies;

export const getSearchMovies = (state: RootState) => state.searchMovies;

export const getMoviesPage = createSelector(getMovies, (movies) => movies.page);

export const getSearchMoviesPage = createSelector(
  getSearchMovies,
  (movies) => movies.page
);

export const getMoviesResults = createSelector(
  getMovies,
  (movies) => movies.results
);

export const getSearchMoviesResults = createSelector(
  getSearchMovies,
  (movies) => movies.results
);

export const getMovieDetails = (movieId: string) => (state: RootState) =>
  state.movieDetails[movieId];
