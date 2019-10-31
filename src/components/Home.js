import React from "react";
import MovieList from "./MovieList";
import NavHeader from "./NavHeader";
import { Switch, Route } from "react-router-dom";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false
    };
  }

  componentDidMount() {
    fetch("http://hackathon-wild-hackoween.herokuapp.com/movies")
      .then(res => res.json())
      .then(json =>
        this.setState({
          isLoaded: true,
          items: json
        })
      );
  }

  render() {
    const { isLoaded, items } = this.state;

    if (!isLoaded) {
      return <h2>Loading...</h2>;
    } else {
      //console.log(items.movies.filter(movies => movies.country === 'United_States'))
      return (
        <div className="Home">
          <NavHeader />
          <Switch>
            <Route exact path="/" component={() => <MovieList items={items} />} />
            {/* <Route exact path='/filmsfilter' component={FilmsFilter} /> */}
          </Switch>
        </div>
      );
    }
  }
}

export default Home;
