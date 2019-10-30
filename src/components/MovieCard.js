import React from 'react';
import './MovieCard.css';

function MovieCard (items) {
  let random = Math.floor(Math.random() * Math.floor(82))
  return (
    <div className='movieCard'>
      <img 
      src={items.items.items.movies[random].posterUrl}
      alt={items.items.items.movies[random].title}
      />
    </div>
  )
}

export default MovieCard;