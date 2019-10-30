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
      year2019: false,
      year2018: false,
      year2010: false,
    }
    this.americanFilter = this.americanFilter.bind(this)
    this.frenchFilter = this.frenchFilter.bind(this)
    this.spainFilter = this.spainFilter.bind(this)
    this.year2019Filter = this.year2019Filter.bind(this)
    this.year2018Filter = this.year2018Filter.bind(this)
    this.year2010Filter = this.year2010Filter.bind(this)
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

  year2019Filter() {
    this.setState({ year2019 : !this.state.year2019 })
  }

  year2018Filter() {
    this.setState({ year2018 : !this.state.year2018 })
  }

  year2010Filter() {
    this.setState({ year2010 : !this.state.year2010 })
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
    
    const { isLoaded, items, americanonly, frenchonly, spainonly, year2019, year2018, year2010} = this.state
    console.log(items)
    if (!isLoaded) {
      return <h2>Loading...</h2>;
    } else {
      
      return (
          <div className='Home'>
            <p>{items.movies[0].title}</p>
            <FilmsFilter items={items} americanFilter={this.americanFilter} americanonly={americanonly} frenchFilter={this.frenchFilter} frenchonly={frenchonly} spainFilter={this.spainFilter} spainonly={spainonly} year2019Filter={this.year2019Filter} year2019={year2019} year2018Filter={this.year2018Filter} year2018={year2018} year2010Filter={this.year2010Filter} year2010={year2010} />
          </div>
      )
    }
  }
}

export default Home;
