import React from 'react';
import { Switch, Route } from 'react-router-dom';
import MovieList from './MovieList';
import { isTemplateElement } from '@babel/types';
//import FilmsFilter from './FilmsFilter';

function RouterNav() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={MovieList} />
        {/* <Route exact path='/filmsfilter' component={FilmsFilter} /> */}
      </Switch>
    </div>
  )
}

export default RouterNav;