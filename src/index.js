import React from "react";
import ReactDOM from "react-dom";
// import { BrowserRouter, Route, Redirect, Switch} from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import HomePage from "./pages/homePage";
import WatchListMoviesPage from "./pages/WatchListMoviePage"
import MoviePage from './pages/movieDetailsPage'
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom"    // CHANGED
import FavoriteMoviesPage from './pages/favoritesMoviesPage'       // NEW
import MovieReviewPage from "./pages/movieReviewPage";
import SiteHeader from './components/siteHeader'
import UpcomingMoviesPage from "./pages/UpcomingMoviePage"
import TopRatedMoviePage from "./pages/TopRatedMoviePage"
import NowPlayingMoviePage from "./pages/NowPlayingMoviePage"
import MoviesContextProvider from "./contexts/moviesContext";
import GenresContextProvider from "./contexts/genresContext";
import AddMovieReviewPage from './pages/addMovieReviewPage'
import PopularMoviePage from './pages/PopularMoviePage'
import SplashPage from './pages/SplashPage'

import Dashboard from "./components/firebase/Dashboard";
import Login from "./components/firebase/Login"
import PrivateRoute from "./components/firebase/PrivateRoute"
import ForgotPassword from "./components/firebase/ForgotPassword"
import UpdateProfile from "./components/firebase/UpdateProfile"
import Signup from "./components/firebase/Signup"
import { AuthProvider } from "./contexts/AuthContext"
import 'semantic-ui-css/semantic.min.css';
import 'semantic-ui-react';


const App = () => {
  return (
      <BrowserRouter>
        <AuthProvider>
        <div className="jumbotron">
          <SiteHeader />      {/* New Header  */}
          <div className="container-fluid">
          <MoviesContextProvider>     {/* NEW  */}
          <GenresContextProvider>
            <Switch>
              <Route path="/login" component={Login} />
              <Route path="/update-profile" component={UpdateProfile} />
              <Route path="/signup" component={Signup} />
              <PrivateRoute path="/dashboard" component={Dashboard} />
              <Route path="/forgot-password" component={ForgotPassword} />
              <PrivateRoute exact path="/home" component={HomePage} />
              <PrivateRoute exact path="/welcome" component={SplashPage} />
              <PrivateRoute exact path="/reviews/form" component={AddMovieReviewPage} />
              <PrivateRoute path="/reviews/:id" component={MovieReviewPage} />
              <PrivateRoute exact path="/movies/favorites" component={FavoriteMoviesPage} />
              <PrivateRoute exact path="/dashboard" component={Dashboard} />
              <PrivateRoute exact path="/movies/watchlist" component={WatchListMoviesPage} />
              <PrivateRoute exact path="/movies/Upcoming" component={UpcomingMoviesPage} />
              <PrivateRoute exact path="/movies/Popular" component={PopularMoviePage} />
              <PrivateRoute exact path="/movies/Top_Rated" component={TopRatedMoviePage} />
              <PrivateRoute exact path="/movies/Now_Playing" component={NowPlayingMoviePage} />
              <PrivateRoute path="/movies/:id" component={MoviePage} />
          <Redirect from="*" to="/login" />
        </Switch>
        </GenresContextProvider>    {/* NEW */}
        </MoviesContextProvider>     {/* NEW */}
      </div>
    </div>
    </AuthProvider>
  </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));