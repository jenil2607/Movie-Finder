import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchMovies } from "../features/movies/moviesSlice";
import { selectMovie, clearSelectedMovie } from "../features/ui/uiSlice";
import MovieCard from "./MovieCard";
import MovieDetails from "./MovieDetails";
import MovieCardLoader from "./MovieCardLoader";

export default function MovieBrowserRedux() {
  const dispatch = useDispatch();

  // Get movies state
  const { movies, loading, error } = useSelector((state) => state.movies);

  // Get selected movie from ui slice
  const selectedMovie = useSelector((state) => state.ui.selectedMovie);

  // Fetch movies when component mounts
  useEffect(() => {
    dispatch(fetchMovies("avengers"));
  }, [dispatch]);

  return (
    <div className="movie-browser">
      {/* LEFT: Movie list section */}
      <div className="movie-grid">
        {/*  Show loader when fetching */}
        {loading && (
          <>
            {Array.from({ length: 8 }).map((_, i) => (
              <MovieCardLoader key={i} />
            ))}
          </>
        )}

        {/*  Show error message */}
        {error && <p className="status error">{error}</p>}

        {/*  Show movies when loaded */}
        {!loading &&
          !error &&
          movies.length > 0 &&
          movies.map((movie) => (
            <MovieCard
              key={movie.imdbID}
              movie={movie}
              onSelect={() => dispatch(selectMovie(movie))}
            />
          ))}
      </div>

      {/* RIGHT: Movie details side panel */}
      {selectedMovie && (
        <MovieDetails
          movie={selectedMovie}
          onClose={() => dispatch(clearSelectedMovie())}
        />
      )}
    </div>
  );
}
