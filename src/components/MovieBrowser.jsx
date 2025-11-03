import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "../features/movies/moviesSlice";
import { selectMovie, clearSelectedMovie } from "../features/ui/uiSlice";
import MovieCard from "./MovieCard";
import MovieDetails from "./MovieDetails";

export default function MovieBrowser() {
  const dispatch = useDispatch();

  const { movies, loading, error } = useSelector((state) => state.movies);
  const { selectedMovie } = useSelector((state) => state.ui);

  useEffect(() => {
    dispatch(fetchMovies("avengers")); // Fetch movies when page loads
  }, [dispatch]);

  if (loading) return <p>Loading movies...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="movie-browser">
      <h2>Movie Browser (Redux)</h2>

      <div className="movie-list">
        {movies?.map((movie) => (
          <MovieCard
            key={movie.imdbID}
            movie={movie}
            onClick={() => dispatch(selectMovie(movie))}
          />
        ))}
      </div>

      {selectedMovie && (
        <MovieDetails
          movie={selectedMovie}
          onClose={() => dispatch(clearSelectedMovie())}
        />
      )}
    </div>
  );
}
