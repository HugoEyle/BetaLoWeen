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
      input: '',
    }
    this.americanFilter = this.americanFilter.bind(this)
    this.frenchFilter = this.frenchFilter.bind(this)
    this.spainFilter = this.spainFilter.bind(this)
    this.year2019Filter = this.year2019Filter.bind(this)
    this.year2018Filter = this.year2018Filter.bind(this)
    this.year2010Filter = this.year2010Filter.bind(this)
    this.onChangeHandler = this.onChangeHandler.bind(this)
  }

  americanFilter() {
    this.setState({ americanonly : !this.state.americanonly })
    this.setState({ frenchonly : false })
    this.setState({ spainonly : false })
  }

  frenchFilter() {
    this.setState({ frenchonly : !this.state.frenchonly })
    this.setState({ americanonly : false })
    this.setState({ spainonly : false })
  }

  spainFilter() {
    this.setState({ spainonly : !this.state.spainonly })
    this.setState({ frenchonly : false })
    this.setState({ americanonly : false })
  }

  year2019Filter() {
    this.setState({ year2019 : !this.state.year2019 })
    this.setState({ year2018 : false })
    this.setState({ year2010 : false })
  }

  year2018Filter() {
    this.setState({ year2018 : !this.state.year2018 })
    this.setState({ year2010 : false })
    this.setState({ year2019 : false })
  }

  year2010Filter() {
    this.setState({ year2010 : !this.state.year2010 })
    this.setState({ year2018 : false })
    this.setState({ year2019 : false })
  }

  onChangeHandler(event) {
    this.setState({ input : event.target.value })
    this.setState({ frenchonly : false })
    this.setState({ spainonly : false })
    this.setState({ americanonly : false })
    this.setState({ year2010 : false })
    this.setState({ year2019 : false })
    this.setState({ year2018 : false })
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
    
    const { isLoaded, items, americanonly, frenchonly, spainonly, year2019, year2018, year2010, input} = this.state

    if (!isLoaded) {
      return <h2>Loading...</h2>;
    } else {
      
      return (
          <div className='Home'>
            <FilmsFilter items={items} americanFilter={this.americanFilter} americanonly={americanonly} frenchFilter={this.frenchFilter} frenchonly={frenchonly} spainFilter={this.spainFilter} spainonly={spainonly} year2019Filter={this.year2019Filter} year2019={year2019} year2018Filter={this.year2018Filter} year2018={year2018} year2010Filter={this.year2010Filter} year2010={year2010} onChangeHandler={this.onChangeHandler} input={input} />
          </div>
      )
    }
  }
}

export default Home;
