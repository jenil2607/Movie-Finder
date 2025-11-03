import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "../features/movies/moviesSlice";
import uiReducer from "../features/ui/uiSlice";

const store = configureStore({
  reducer: {
    movies: moviesReducer, //  handles list and fetching
    ui: uiReducer, //  handles selected movie
  },
});

export default store;
