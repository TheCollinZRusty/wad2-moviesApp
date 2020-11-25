import React, {useContext, useState, useEffect } from "react";
import StubAPI from "../api/stubAPI";
import PageTemplate from '../components/templateMovieListPage'
import {MoviesContext} from '../contexts/moviesContext'
import AddToWatchListButton from '../components/buttons/addToWatchList'

const TopRatedMoviePage = () => {
  const context = useContext(MoviesContext);
  const top_rated = context.top_rated.filter((m) => {
    return !("watchlist" in m);
  });

return (
    <PageTemplate 
      title='Top Rated Movies'
      movies={top_rated}  
      action={(movie) => {
        return <AddToWatchListButton movie={movie} /> 
      }}
    />
);
};

export default TopRatedMoviePage;
