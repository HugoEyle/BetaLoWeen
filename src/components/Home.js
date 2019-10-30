import React from 'react';
import FilmsFilter from './FilmsFilter';

class Home extends React.Component {
    
  constructor(props) {
    super(props);
    this.state = {
      items: [],  
      isLoaded: false,
      americanonly: false,
      frenchonly: false,
      spainonly: false,
    }
    this.americanFilter = this.americanFilter.bind(this)
    this.frenchFilter = this.frenchFilter.bind(this)
    this.spainFilter = this.spainFilter.bind(this)
  }

  americanFilter() {
    this.setState({ americanonly : !this.state.americanonly })
  }

  frenchFilter() {
    this.setState({ frenchonly : !this.state.frenchonly })
  }

  spainFilter() {
    this.setState({ spainonly : !this.state.spainonly })
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
    
    const { isLoaded, items, americanonly, frenchonly, spainonly} = this.state
    console.log(items)
    if (!isLoaded) {
      return <h2>Loading...</h2>;
    } else {
      
      return (
          <div className='Home'>
            <p>{items.movies[0].title}</p>
            <FilmsFilter items={items} americanFilter={this.americanFilter} americanonly={americanonly} frenchFilter={this.frenchFilter} frenchonly={frenchonly} spainFilter={this.spainFilter} spainonly={spainonly} />
          </div>
      )
    }
  }
}

export default Home;
