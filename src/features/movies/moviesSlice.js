import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

//  Thunk to fetch movies
const API_KEY = import.meta.env.VITE_OMDB_API_KEY;

export const fetchMovies = createAsyncThunk(
  "movies/fetchMovies",
  async (searchTerm = "avengers") => {
    const response = await axios.get(
      `https://www.omdbapi.com/?apikey=${API_KEY}&s=${encodeURIComponent(
        searchTerm
      )}`
    );

    return response.data.Search || [];
  }
);

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    movies: [],
    loading: false,
    error: null,
    selectedMovie: null, //  add this to track selected movie
  },
  reducers: {
    //  select a movie for side panel
    selectMovie: (state, action) => {
      state.selectedMovie = action.payload;
    },
    //  clear the selected movie
    clearSelectedMovie: (state) => {
      state.selectedMovie = null;
    },
  },
  extraReducers: (builder) => {
    builder

      //  When the request STARTS
      .addCase(fetchMovies.pending, (state) => {
        state.loading = true; // show loading spinner or message
        state.error = null; // clear any old error
      })

      //  When the request SUCCEEDS
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.loading = false; // stop loading
        state.movies = action.payload; // save movies to state
      })

      //  When the request FAILS
      .addCase(fetchMovies.rejected, (state, action) => {
        state.loading = false; // stop loading
        state.error = action.error.message; // save error message
      });
  },
});

//  Export actions
export const { selectMovie, clearSelectedMovie } = moviesSlice.actions;

//  Export reducer
export default moviesSlice.reducer;
