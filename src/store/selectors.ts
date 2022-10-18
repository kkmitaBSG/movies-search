import { createSelector } from "reselect";
import { RootState } from ".";

export const getMovies = (state: RootState) => state.movies;

export const getMovieDetails = (movieId: string) => (state: RootState) =>
  state.movieDetails[movieId];

export const getMoviesPage = createSelector(getMovies, (movies) => movies.page);
