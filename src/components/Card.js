import React from 'react';

function Card (movie) {
	return (  
		<figure className="Card">
			<img src={movie.posterUrl} alt='test' />
		</figure>
  )
};

export default Card;