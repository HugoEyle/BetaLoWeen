import React from "react";
import MovieCard from "./MovieCard";
import "./MovieList.css";

function MovieList(items) {
  return (
    <div>
      <h2>Films américains</h2>
      <div className="americanList">
      {items.items.movies.filter(movie => movie.country === 'United_States').map(movie => <MovieCard {...movie} />)}
      </div>
      <h2>Films d'autres horizons</h2>
      <div className="frenchList">
      {items.items.movies.filter(movie => movie.country !== 'United_States').map(movie => <MovieCard {...movie} />)}
      </div>
    </div>
  );
}

export default MovieList;
