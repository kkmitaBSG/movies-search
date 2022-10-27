import { Movie, MovieDetails, moviePosterOriginalPath } from "./types";

export const transformMovieData = (movies: Movie[] = []) =>
  movies
    .filter((movie) => movie.poster_path && movie.backdrop_path)
    .map((movie) => ({
      ...movie,
      poster: moviePosterOriginalPath + movie.poster_path,
    }));

export const transformMovieDetailsData = (movieDetail?: MovieDetails) => ({
  ...movieDetail,
  backdrop: moviePosterOriginalPath + movieDetail?.backdrop_path,
});
