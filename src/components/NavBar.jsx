import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchMovies } from "../features/movies/moviesSlice";

//  Top navbar with search bar to fetch movies dynamically
export default function Navbar() {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");

  //  Handles form submission
  const handleSearch = (e) => {
    e.preventDefault();

    // Prevent empty search
    if (searchTerm.trim() === "") return;

    //  Dispatch Redux async thunk to fetch movies
    dispatch(fetchMovies(searchTerm));
  };

  return (
    <header className="header">
      <nav className="navbar">
        <h2 className="heading">Movie Finder</h2>
        <form className="search-bar" onSubmit={handleSearch}>
          <input
            type="search"
            placeholder="Search for movies..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button type="submit">Search</button>
        </form>
      </nav>
    </header>
  );
}
