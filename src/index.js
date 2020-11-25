import React from "react";
import ReactDOM from "react-dom";
// import { BrowserRouter, Route, Redirect, Switch} from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import HomePage from "./pages/homePage";
import WatchListMoviesPage from "./pages/WatchListMoviePage"
import MoviePage from './pages/movieDetailsPage'
import { BrowserRouter, Route, Redirect, Switch, Link } from "react-router-dom"    // CHANGED
import FavoriteMoviesPage from './pages/favoritesMoviesPage'       // NEW
import MovieReviewPage from "./pages/movieReviewPage";
import SiteHeader from './components/siteHeader'
import UpcomingMoviesPage from "./pages/UpcomingMoviePage"
import TopRatedMoviePage from "./pages/TopRatedMoviePage"

import MoviesContextProvider from "./contexts/moviesContext";
import GenresContextProvider from "./contexts/genresContext";
import AddMovieReviewPage from './pages/addMovieReviewPage'
import PopularMoviePage from './pages/PopularMoviePage'

const App = () => {
  return (
      <BrowserRouter>
        <div className="jumbotron">
          <SiteHeader />      {/* New Header  */}
          <div className="container-fluid">
          <MoviesContextProvider>     {/* NEW  */}
          <GenresContextProvider>
            <Switch>
          <Route exact path="/reviews/form" component={AddMovieReviewPage} />
          <Route path="/reviews/:id" component={MovieReviewPage} />
          <Route exact path="/movies/favorites" component={FavoriteMoviesPage} />
          <Route exact path="/movies/watchlist" component={WatchListMoviesPage} />
          <Route exact path="/movies/Upcoming" component={UpcomingMoviesPage} />
          <Route exact path="/movies/Popular" component={PopularMoviePage} />
          <Route exact path="/movies/Top_Rated" component={TopRatedMoviePage} />
          <Route path="/movies/:id" component={MoviePage} />
          <Route path="/" component={HomePage} />
          <Redirect from="*" to="/" />
        </Switch>
        </GenresContextProvider>    {/* NEW */}
        </MoviesContextProvider>     {/* NEW */}
      </div>
    </div>
  </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));