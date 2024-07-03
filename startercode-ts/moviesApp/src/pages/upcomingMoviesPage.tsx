import React, { useState, useEffect } from "react";
import PageTemplate from '../components/templateMovieListPage';
import { BaseMovieProps } from "../types/interfaces";
import { getUpcomingMovies } from "../api/tmdb-api";
import AddToFavouritesIcon from "../components/cardIcons/addToFavourites";

const UpcomingMoviesPage: React.FC = () => {
  const [upcomingmovies, setUpcomingMovies] = useState<BaseMovieProps[]>([]);
  

  useEffect(() => {
    getUpcomingMovies().then(upcomingmovies => {
      setUpcomingMovies(upcomingmovies);
      console.log(upcomingmovies);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <PageTemplate
      title='Upcoming Movies'
      movies={upcomingmovies}
      action={(movie: BaseMovieProps) => {
        return <AddToFavouritesIcon {...movie} />
      }}
    />
  );
};
export default UpcomingMoviesPage;