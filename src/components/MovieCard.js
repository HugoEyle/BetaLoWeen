import React from 'react';
import './MovieCard.css';

function MovieCard (movie) {
  
  //let random = Math.floor(Math.random() * Math.floor(56))
  //const item = items.items.items
  //const americanMovies = item.movies.filter(movies => movies.country === 'United_States')
  //console.log(americanMovies[random].posterUrl)
  return (
    <div className='movieCard'>
      <div className = "box">
        <div className = "imgBx">
          <img 
          src={movie.posterUrl}
          alt={movie.title}
          />
        </div>
        <div className = "content">
          <div className = "containerInfo">
            <div className = "infoMovies">
              <h6 className = "titleMovies titleTitle">{movie.title.replace('_', ' ')}</h6>
              <h6 className = "titleMovies">{movie.director.replace('_', ' ')}</h6>
              <p>{movie.year}</p>
            </div> 
          </div>
        </div>
      </div>
    </div>
  )
}

export default MovieCard;