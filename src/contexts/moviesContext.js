import React, { useEffect, createContext, useReducer } from "react";
import { getMovies, getUpcomingMovies, getPopularMovies, getTopRatedMovies } from "../api/tmdb-api";

export const MoviesContext = createContext(null);

const reducer = (state, action) => {
  switch (action.type) {
    case "add-favorite":
      return {
        movies: state.movies.map((m) =>
          m.id === action.payload.movie.id ? { ...m, favorite: true } : m
        ),
        upcoming: [...state.upcoming], popular: [...state.popular] , top_rated: [...state.top_rated]
      };

      case "add-watchlist":
        return {
          movies: state.movies.map((m) =>
            m.id === action.payload.movie.id ? { ...m, watchlist: true } : m
          ),
          upcoming: [...state.upcoming], popular: [...state.popular], top_rated: [...state.top_rated]
        };

    case "load":
      return {  movies: action.payload.movies, 
                upcoming: [...state.upcoming], popular: [...state.popular], top_rated: [...state.top_rated] };

    case "load-upcoming":
      return { upcoming: action.payload.movies, movies: [...state.movies], popular: [...state.popular], top_rated: [...state.top_rated] };


    case "load-popular":
      return { popular: action.payload.movies, movies: [...state.movies], upcoming: [...state.upcoming], top_rated: [...state.top_rated] };

    case "load-top_rated":
      return { top_rated: action.payload.movies, movies: [...state.movies], upcoming: [...state.upcoming], popular: [...state.popular] };

    case "add-review":
      return {
        movies: state.movies.map((m) =>
          m.id === action.payload.movie.id
            ? { ...m, review: action.payload.review }
            : m
        ),
        upcoming: [...state.upcoming],
        popular: [...state.popular],
        top_rated: [...state.top_rated]
      };
    default:
      return state;
  }
};

const MoviesContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, { movies: [], upcoming: [],popular: [], top_rated:[] });

  const addToFavorites = (movieId) => {
    const index = state.movies.map((m) => m.id).indexOf(movieId);
    dispatch({ type: "add-favorite", payload: { movie: state.movies[index] } });
  };

  const addToWatchList = (movieId) => {
    const index = state.movies.map((m) => m.id).indexOf(movieId);
    dispatch({ type: "add-watchlist", payload: { movie: state.movies[index] } });
  };

  const addReview = (movie, review) => {
    dispatch({ type: "add-review", payload: { movie, review } });
  };

  useEffect(() => {
    getMovies().then((movies) => {
      dispatch({ type: "load", payload: { movies } });
    });
  }, []);
  
  useEffect(() => {
    getPopularMovies().then((movies) => {
      dispatch({ type: "load-popular", payload: { movies } });
    });
  }, []);

  useEffect(() => {
    getTopRatedMovies().then((movies) => {
      dispatch({ type: "load-top_rated", payload: { movies } });
    });
  }, []);

  useEffect(() => {
    getUpcomingMovies().then((movies) => {
      dispatch({ type: "load-upcoming", payload: { movies } });
    });
  }, []);

  return (
    <MoviesContext.Provider
      value={{
        movies: state.movies,
        upcoming: state.upcoming,
        popular: state.popular,
        top_rated: state.top_rated,
        addToFavorites: addToFavorites,
        addToWatchList: addToWatchList,
        addReview: addReview,
      }}
    >
      {props.children}
    </MoviesContext.Provider>
  );
};

export default MoviesContextProvider;