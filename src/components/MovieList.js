import React from 'react';
import MovieCard from './MovieCard';
import './MovieList.css';

function MovieList (items) {
  return (
    <div className='americanList'>
      <MovieCard items={items} />
      <MovieCard items={items} />
      <MovieCard items={items} />
      <MovieCard items={items} />
      <MovieCard items={items} />
      <MovieCard items={items} />
      <MovieCard items={items} />
    </div>
  );
}

export default MovieList;