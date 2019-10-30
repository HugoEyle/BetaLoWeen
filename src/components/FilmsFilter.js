import React from 'react';
import './FilmsFilter.css';
import Card from './Card';

function FilmsFilter ({items, americanFilter, americanonly}) {
	return (
		<div className='filmsfilter'>
			<div className='filter_title'>
				<label htmlFor='title '>Nom du film :</label>
				<input id='title' type='text' />
			</div>
			<div className='filter_origin'>
				<p>Origin :</p>
				<button className='button_origin' onClick={americanFilter}>American</button>
				<button className='button_origin'>French</button>
				<button className='button_origin'>Spanish</button>
			</div>
			<div className='filter_year'>
				<p>Years :</p>
				<button className='button_year'>2019</button>
				<button className='button_year'>2018</button>
				<button className='button_year'>2017</button>
			</div>
			{/* { americanonly ? '' : <img src={items.items.movies[14].posterUrl} alt='test' />} */}
			<div className='testcard'>
				{americanonly
					? items.movies
						.filter(movie => movie.country === 'United_States')
						.map((movie, index) => <Card {...movie} />)
					: items.movies.map((movie, index) => (
							<Card {...movie} />
						))
				}
			</div>




		</div>
	)


}



export default FilmsFilter;
