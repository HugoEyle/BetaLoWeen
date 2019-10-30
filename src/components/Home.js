import React from 'react';
import FilmsFilter from './FilmsFilter';

class Home extends React.Component {
    
  constructor(props) {
    super(props);
    this.state = {
      items: [],  
      isLoaded: false,
      americanonly: false,
    }
    this.americanFilter = this.americanFilter.bind(this)
  }

  americanFilter() {
    // const american = !this.state.americanonly;
    this.setState({ americanonly : !this.state.americanonly })
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
    
    const { isLoaded, items, americanonly} = this.state
    console.log(items)
    if (!isLoaded) {
      return <h2>Loading...</h2>;
    } else {
      
      return (
          <div className='Home'>
            <p>{items.movies[0].title}</p>
            <FilmsFilter items={items} americanFilter={this.americanFilter} americanonly={americanonly} />
          </div>
      )
    }
  }
}

export default Home;
