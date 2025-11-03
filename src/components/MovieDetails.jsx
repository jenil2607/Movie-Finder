import React from "react";

export default function MovieDetails({ movie, onClose }) {
  if (!movie) return null; // Don't show if nothing selected

  return (
    <div className="side-panel">
      {/* Movie Poster */}
      <img src={movie.Poster} alt={movie.Title} />

      {/* Movie Info */}
      <h2>{movie.Title}</h2>
      <p>Year: {movie.Year}</p>
      <p>Type: {movie.Type}</p>
      <p>IMDB ID: {movie.imdbID}</p>

      {/* Close Button */}
      <button onClick={onClose}>Close</button>
    </div>
  );
}
