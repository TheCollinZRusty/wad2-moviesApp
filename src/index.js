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
import Login from "./components/firebase/Login"
import PrivateRoute from "./components/firebase/PrivateRoute"
// import ForgotPassword from "./firebase/ForgotPassword"
// import UpdateProfile from "./firebase/UpdateProfile"
import Signup from "./components/firebase/Signup"
import { AuthProvider } from "./contexts/AuthContext"

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
              <PrivateRoute exact path="/" component={HomePage} />
              {/* <Route path="/update-profile" component={UpdateProfile} /> */}
              <Route path="/signup" component={Signup} />
              <Route path="/login" component={Login} />
              {/* <Route path="/forgot-password" component={ForgotPassword} /> */}
              <Route exact path="/reviews/form" component={AddMovieReviewPage} />
              <Route path="/reviews/:id" component={MovieReviewPage} />
              <Route exact path="/movies/favorites" component={FavoriteMoviesPage} />
              <Route exact path="/movies/watchlist" component={WatchListMoviesPage} />
              <Route exact path="/movies/Upcoming" component={UpcomingMoviesPage} />
              <Route exact path="/movies/Popular" component={PopularMoviePage} />
              <Route exact path="/movies/Top_Rated" component={TopRatedMoviePage} />
              <Route exact path="/movies/Now_Playing" component={NowPlayingMoviePage} />
              <Route path="/movies/:id" component={MoviePage} />
          <Redirect from="*" to="/" />
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