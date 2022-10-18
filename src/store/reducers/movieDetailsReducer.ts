import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MovieDetails, MovieDetailsState } from "../types";
import { transformMovieDetailsData } from "../helpers";

const initialState: MovieDetailsState = {};

export const movieDetailsReducer = createSlice({
  name: "movieDetails",
  initialState,
  reducers: {
    getMovieDetailsSuccess: (state, action: PayloadAction<MovieDetails>) => {
      state[action.payload.id!] = transformMovieDetailsData(action.payload);
    },
  },
});

export const { getMovieDetailsSuccess } = movieDetailsReducer.actions;

export default movieDetailsReducer.reducer;
