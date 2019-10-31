import React from 'react';
import './FilmsFilter.css';
import MovieCard from './MovieCard';

function FilmsFilter ({items, americanFilter, americanonly, frenchFilter, frenchonly, spainFilter, spainonly, year2019Filter, year2019, year2018Filter, year2018, year2010Filter, year2010, onChangeHandler, input}) {

	const inputFilter = input.replace(' ', '_').substr(0,1).toUpperCase()+input.substr(1).replace(' ', '_')

	return (
		<div className='filmsfilter'>
			<div className='filter'>
				<div className='filter_title'>
					<label htmlFor='title ' className='text_label'>Nom du film :</label>
					<input id='title' type='text' value={input} onChange={onChangeHandler} className='title'/>
				</div>
				<div className='filter_origin'>
					<p className='title_filter'>Origin :</p>
					<button className='button_origin' onClick={americanFilter}>American</button>
					<button className='button_origin' onClick={frenchFilter}>French</button>
					<button className='button_origin' onClick={spainFilter}>Spanish</button>
				</div>
				<div className='filter_year'>
					<p className='title_filter'>Years :</p>
					<button className='button_year' onClick={year2019Filter}>2019</button>
					<button className='button_year' onClick={year2018Filter}>2011</button>
					<button className='button_year' onClick={year2010Filter}>2010</button>
				</div>
			</div>
			<div className='testcard'>
				{americanonly
					? items.movies
						.filter(movie => movie.country === 'United_States')
						.map((movie, index) => <MovieCard {...movie} />)
					: frenchonly
					? items.movies
						.filter(movie => movie.country === 'French')
						.map((movie, index) => <MovieCard {...movie} />)
					: spainonly
					? items.movies
						.filter(movie => movie.country === 'Spain')
						.map((movie, index) => <MovieCard {...movie} />)
					: year2019
					? items.movies
						.filter(movie => movie.year === 2019)
						.map((movie, index) => <MovieCard {...movie} />)
					: year2018
					? items.movies
						.filter(movie => movie.year === 2011)
						.map((movie, index) => <MovieCard {...movie} />)
					: year2010
					? items.movies
						.filter(movie => movie.year === 2010)
						.map((movie, index) => <MovieCard {...movie} />)
					: items.movies
						.filter(movie => input === '' || movie.title.includes(inputFilter))
						.map((movie, index) => (
							<MovieCard {...movie} />
						))
				}
			</div>
		</div>
	)
}

export default FilmsFilter;
