import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Movies } from "../types";
import { transformMovieData } from "../helpers";

const initialState: Movies = {
  results: [],
  page: 1,
};

export const moviesReducer = createSlice({
  name: "movies",
  initialState,
  reducers: {
    getMoviesSuccess: (state, action: PayloadAction<Movies>) => {
      state.page = action.payload.page;
      state.results = transformMovieData(action.payload.results);
    },
    getMoviesNextPageSuccess: (state, action: PayloadAction<Movies>) => {
      state.page = action.payload.page;
      state.results = state.results!.concat(
        transformMovieData(action.payload.results)!
      );
    },

    getMovieDetailsSuccess: (state, action: PayloadAction<Movies>) => {
      state.results = transformMovieData(action.payload.results);
    },
  },
});

export const {
  getMoviesSuccess,
  getMoviesNextPageSuccess,
  getMovieDetailsSuccess,
} = moviesReducer.actions;

export default moviesReducer.reducer;
