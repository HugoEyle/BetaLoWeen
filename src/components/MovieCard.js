import React from 'react';
import './MovieCard.css';

function MovieCard (movie) {
  
  //let random = Math.floor(Math.random() * Math.floor(56))
  //const item = items.items.items
  //const americanMovies = item.movies.filter(movies => movies.country === 'United_States')
  //console.log(americanMovies[random].posterUrl)
  return (
    <div className='movieCard'>
      <img 
      src={movie.posterUrl}
      alt={movie.title}
      />
    </div>
  )
}

export default MovieCard;