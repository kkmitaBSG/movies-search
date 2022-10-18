export const api_key = "92b418e837b833be308bbfb1fb2aca1e";

export enum MoviesActionType {
  getMovies = "GET_MOVIES",
  getMoviesFail = "GET_MOVIES_FAIL",
  getSearchMovies = "GET_SEARCH_MOVIES",
  getMoviesNextPage = "GET_MOVIES_NEXT_PAGE",
  getMovieDetails = "GET_MOVIE_DETAILS",
}

export interface Movie {
  id: string;
  title: string;
  overview: string;
  poster_path?: string;
  poster?: string;
}

export interface Movies {
  results?: Movie[];
  page: number;
}

export interface MovieDetails {
  id?: string;
  backdrop_path?: string;
  title?: string;
  backdrop?: string;
  overview?: string;
  production_countries?: Array<{ name: string }>;
  release_date?: string;
  genres?: Array<{ name: string }>;
}

export interface MovieDetailsState {
  [id: string]: MovieDetails;
}

export interface State {
  movies: Movies;
  movieDetails: MovieDetails;
}

export const moviePosterOriginalPath = "https://image.tmdb.org/t/p/w500";
