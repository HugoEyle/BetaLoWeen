import React from 'react';
import MovieList from './MovieList';

class Home extends React.Component {
    
  constructor(props) {
    super(props);
    this.state = {
      items: [],  
      isLoaded: false,
    }
  }

  componentDidMount () {
    fetch('http://hackathon-wild-hackoween.herokuapp.com/movies')
      .then(res => res.json())
      .then(json =>
        this.setState({
          isLoaded : true,
          items : json,
        }))
  }

  render() {

    const { isLoaded, items } = this.state

    if (!isLoaded) {
      return <h2>Loading...</h2>;
    } else {
      console.log(items.movies)
      return (
          <div className='Home'>
            <MovieList items={items} />
          </div>
      )
    }
  }
}

export default Home;