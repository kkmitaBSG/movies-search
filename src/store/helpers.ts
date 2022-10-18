import { Movie, MovieDetails, moviePosterOriginalPath } from "./types";

export const transformMovieData = (movies?: Movie[]) =>
  movies?.map((movie) => ({
    ...movie,
    poster: moviePosterOriginalPath + movie.poster_path,
  }));

export const transformMovieDetailsData = (movieDetail?: MovieDetails) => ({
  ...movieDetail,
  backdrop: moviePosterOriginalPath + movieDetail?.backdrop_path,
});
