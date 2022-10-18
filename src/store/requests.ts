import axios from "axios";
import { api_key, Movie, Movies } from "./types";
import {
  MOVIE_DETAILS_PATH,
  MOVIE_POPULAR_PATH,
  SEARCH_MOVIE_PATH,
} from "./path";

export const getMovies = (pageNum: number) =>
  axios.get<Movies[]>(
    MOVIE_POPULAR_PATH + `?api_key=${api_key}&page=${pageNum}`
  );

export const getSearchMovies = (searchPhrase: string, pageNum: number) =>
  axios.get<Movies[]>(
    SEARCH_MOVIE_PATH +
      `?api_key=${api_key}&page=${pageNum}&query=${searchPhrase}`
  );

export const getMovieDetails = (movieId: string) =>
  axios.get<Movie>(
    MOVIE_DETAILS_PATH.replace("[id]", movieId) + `?api_key=${api_key}`
  );
