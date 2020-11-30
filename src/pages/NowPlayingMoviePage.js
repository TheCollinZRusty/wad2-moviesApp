import React, {useContext } from "react";
import PageTemplate from '../components/templateMovieListPage'
import {MoviesContext} from '../contexts/moviesContext'
import AddToWatchListButton from '../components/buttons/addToWatchList'

const NowPlayingMoviesPage = () => {
  const context = useContext(MoviesContext);
  const nowplaying = context.nowplaying.filter((m) => {
    return !("watchlist" in m);
  });

return (
    <PageTemplate 
      title='Now Playing'
      movies={nowplaying}  
      action={(movie) => {
        return <AddToWatchListButton movie={movie} /> 
      }}
    />
);
};

export default NowPlayingMoviesPage;
