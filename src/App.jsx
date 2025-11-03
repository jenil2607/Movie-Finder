// App.jsx
import React from "react";
import Navbar from "./components/Navbar";
import MovieBrowserRedux from "./components/MovieBrowserRedux";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <MovieBrowserRedux />
      </main>
    </>
  );
}
