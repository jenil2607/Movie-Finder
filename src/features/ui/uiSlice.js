import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: {
    selectedMovie: null, // no movie selected at first
  },
  reducers: {
    selectMovie: (state, action) => {
      state.selectedMovie = action.payload; // set clicked movie
    },
    clearSelectedMovie: (state) => {
      state.selectedMovie = null; // clear on close
    },
  },
});

export const { selectMovie, clearSelectedMovie } = uiSlice.actions;
export default uiSlice.reducer;

// fetching movies (API calls)

// storing the movie list

// handling loading and error states
