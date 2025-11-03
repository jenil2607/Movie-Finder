// import React from "react";

// export default function MovieCard({ movie, onSelect }) {
//   return (
//     <div className="movie-card" onClick={onSelect}>
//       <img src={movie.Poster} alt={movie.Title} />
//       <h3>{movie.Title}</h3>
//       <p>{movie.Year}</p>
//     </div>
//   );
// }

import React, { useState } from "react";

export default function MovieCard({ movie, onSelect }) {
  const [loaded, setLoaded] = useState(false); // Track when image is ready

  return (
    <div className="movie-card" onClick={onSelect}>
      {/* Show skeleton loader until image loads */}
      {!loaded && <div className="poster-skeleton"></div>}

      {/* Movie Poster with onLoad callback */}
      <img
        src={movie.Poster}
        alt={movie.Title}
        onLoad={() => setLoaded(true)} // Fires when image successfully loads
        onError={() => setLoaded(true)} // Also fires if image fails (to hide loader)
        style={{ display: loaded ? "block" : "none" }}
      />

      {/* Movie Title & Year */}
      <h3>{movie.Title}</h3>
      <p>{movie.Year}</p>
    </div>
  );
}
