import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Movies } from "../types";
import { transformMovieData } from "../helpers";

const initialState: Movies = {
  results: [],
  page: 1,
};

export const popularMoviesReducer = createSlice({
  name: "movies",
  initialState,
  reducers: {
    getPopularMoviesSuccess: (state, action: PayloadAction<Movies>) => {
      state.page = action.payload.page;
      state.results = transformMovieData(action.payload.results);
    },
    getPopularMoviesNextPageSuccess: (state, action: PayloadAction<Movies>) => {
      state.page = action.payload.page;
      state.results = state.results!.concat(
        transformMovieData(action.payload.results)!
      );
    },
  },
});

export const { getPopularMoviesSuccess, getPopularMoviesNextPageSuccess } =
  popularMoviesReducer.actions;

export default popularMoviesReducer.reducer;
