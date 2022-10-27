import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Movies } from "../types";
import { transformMovieData } from "../helpers";

const initialState: Movies = {
  results: [],
  page: 1,
};

export const searchMoviesReducer = createSlice({
  name: "searchMovies",
  initialState,
  reducers: {
    getSearchMoviesSuccess: (state, action: PayloadAction<Movies>) => {
      state.page = action.payload.page;
      state.results = transformMovieData(action.payload.results);
    },
    getSearchMoviesNextPageSuccess: (state, action: PayloadAction<Movies>) => {
      state.page = action.payload.page;
      state.results = state.results!.concat(
        transformMovieData(action.payload.results)!
      );
    },
  },
});

export const { getSearchMoviesSuccess, getSearchMoviesNextPageSuccess } =
  searchMoviesReducer.actions;

export default searchMoviesReducer.reducer;
