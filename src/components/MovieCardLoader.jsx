import React from "react";

export default function MovieCardLoader() {
  return (
    <div className="movie-card loader">
      <div className="poster-skeleton"></div>
      <div className="title-skeleton"></div>
      <div className="year-skeleton"></div>
    </div>
  );
}
