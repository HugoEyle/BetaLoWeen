import React from 'react';
import './FilmsFilter.css';
import Card from './Card';

function FilmsFilter ({items, americanFilter, americanonly, frenchFilter, frenchonly, spainFilter, spainonly, year2019Filter, year2019, year2018Filter, year2018, year2010Filter, year2010}) {
	return (
		<div className='filmsfilter'>
			<div className='filter_title'>
				<label htmlFor='title '>Nom du film :</label>
				<input id='title' type='text' />
			</div>
			<div className='filter_origin'>
				<p>Origin :</p>
				<button className='button_origin' onClick={americanFilter}>American</button>
				<button className='button_origin' onClick={frenchFilter}>French</button>
				<button className='button_origin' onClick={spainFilter}>Spanish</button>
			</div>
			<div className='filter_year'>
				<p>Years :</p>
				<button className='button_year' onClick={year2019Filter}>2019</button>
				<button className='button_year' onClick={year2018Filter}>2018</button>
				<button className='button_year' onClick={year2010Filter}>2010</button>
			</div>
			{/* { americanonly ? '' : <img src={items.items.movies[14].posterUrl} alt='test' />} */}
			<div className='testcard'>
				{console.log(items.movies)}
				{americanonly
					? items.movies
						.filter(movie => movie.country === 'United_States')
						.map((movie, index) => <Card {...movie} />)
					: frenchonly
					? items.movies
						.filter(movie => movie.country === 'French')
						.map((movie, index) => <Card {...movie} />)
					: spainonly
					? items.movies
						.filter(movie => movie.country === 'Spain')
						.map((movie, index) => <Card {...movie} />)
					: year2019
					? items.movies
						.filter(movie => movie.year === 2019)
						.map((movie, index) => <Card {...movie} />)
					: year2018
					? items.movies
						.filter(movie => movie.year === 2018)
						.map((movie, index) => <Card {...movie} />)
					: year2010
					? items.movies
						.filter(movie => movie.year === 2010)
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