import { createSelector } from "reselect";
import { RootState } from ".";
import { locationSearchParameterName } from "./types";

export const getMovies = (state: RootState) => state.movies;

export const getSearchMovies = (state: RootState) => state.searchMovies;

const getLocationSearch = (state: RootState) => state.router.location.search;

export const getMoviesPage = createSelector(getMovies, (movies) => movies.page);

export const getSearchFromLocationSearch = createSelector(
  getLocationSearch,
  (locationSearch) => new URLSearchParams(locationSearch).get(locationSearchParameterName)
);

export const getSearchMoviesPage = createSelector(
  getSearchMovies,
  (movies) => movies.page
);

export const getSearchMoviesResults = createSelector(
  getSearchMovies,
  (movies) => movies.results
);

export const getMovieDetails = (movieId: string) => (state: RootState) =>
  state.movieDetails[movieId];

export const getMoviesResults = createSelector(
  getSearchFromLocationSearch,
  getMovies,
  getSearchMovies,
  (searchPhrase, movies, searchMovies) =>
    searchPhrase ? searchMovies.results : movies.results
);
