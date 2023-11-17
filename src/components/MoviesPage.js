import React from "react";
import { Route, useRouteMatch, Switch } from "react-router-dom";
import MoviesList from "./MoviesList";
import MovieShow from "./MovieShow";

function MoviesPage({ movies }) {
  return (
    <div>
      <MoviesList movies={movies} />
      <Switch>
        <Route exact path={match.url}>
          <h3>Choose a movie</h3>
        </Route>
        <Route path={`${match.url}/:movieId`}>
          <MovieShow movies={movies}/>
        </Route>
      </Switch>
    </div>
  );
}
export default MoviesPage;
