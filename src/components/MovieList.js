import React from "react";
import MovieCard from "./MovieCard";
import "./MovieList.css";

function MovieList(items) {
  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1)); 
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array
  }
  return (
    <div>
      <h2 className="titleAmericanList">Films américains</h2>
      <div className="americanList">
      {shuffle(items.items.movies.filter(movie => movie.country === 'United_States'))
        .slice(0, 8)
        .map(movie => 
        <MovieCard {...movie} />)} 
      </div>
      <h2 className="titleList">Films d'autres pays</h2>
      <div className="frenchList">
      {shuffle(items.items.movies.filter(movie =>
        movie.country !== 'United_States'))
        .slice(0, 8)
        .map(movie =>
        <MovieCard {...movie} />)}
      </div>
    </div>
  );
}

export default MovieList;
