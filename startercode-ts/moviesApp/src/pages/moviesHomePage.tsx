import React, { useState } from "react";
import PageTemplate from "../components/templateMovieListPage";
import { getMovies } from "../api/tmdb-api";
import useFiltering from "../hooks/useFiltering";
import MovieFilterUI, {
  titleFilter,
  genreFilter,
} from "../components/movieFilterUI";
import { BaseMovieProps, DiscoverMovies } from "../types/interfaces";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";
import AddToFavouritesIcon from '../components/cardIcons/addToFavourites'
import { Grid } from "@mui/material";


const titleFiltering = {
  name: "title",
  value: "",
  condition: titleFilter,
};
const genreFiltering = {
  name: "genre",
  value: "0",
  condition: genreFilter,
};

const MoviesHomePage: React.FC = () => {

  const [page, setPage] = useState(1);
  const { isLoading, isError, error, data, isPreviousData } =
    useQuery<DiscoverMovies, Error>({
      queryKey: ["/movies", page],
      queryFn: () => getMovies(page),
      keepPreviousData: true,
    });
  const { filterValues, setFilterValues, filterFunction } = useFiltering(
    [titleFiltering, genreFiltering]
  );
  
  

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }


  const changeFilterValues = (type: string, value: string) => {
    const changedFilter = { name: type, value: value };
    const updatedFilterSet =
      type === "title"
        ? [changedFilter, filterValues[1]]
        : [filterValues[0], changedFilter];
    setFilterValues(updatedFilterSet);
  };

  const movies = data ? data.results : [];
  const displayedMovies = filterFunction(movies);

  const prevPage = () => setPage((prev) => prev - 1);
  const nextPage = () => setPage((next) => next + 1);

  return (
    <>
    <Grid container direction="row" justifyContent="center" alignItems="center">
      <div className="pages__section">
          <button onClick={prevPage} disabled={isPreviousData || page === 1}>
            prev
          </button>
      </div>
      <div>
          <p>Page{page}</p>
      </div>
      <div>
          <button onClick={nextPage} disabled={isPreviousData || page === data?.total_pages}>
            Next
          </button>
      </div>
    </Grid>
      <PageTemplate
        title="Discover Movies"
        movies={displayedMovies}
        action={(movie: BaseMovieProps) => {
          return <AddToFavouritesIcon {...movie} />
        }}
      />
      <MovieFilterUI
        onFilterValuesChange={changeFilterValues}
        titleFilter={filterValues[0].value}
        genreFilter={filterValues[1].value}
      />
       <Grid container direction="row" justifyContent="center" alignItems="center">
          <div className="pages__section">
              <button onClick={prevPage} disabled={isPreviousData || page === 1}>
                prev
              </button>
          </div>
          <div>
              <p>Page{page}</p>
          </div>
          <div>
              <button onClick={nextPage} disabled={isPreviousData || page === data?.total_pages}>
                Next
              </button>
          </div>
      </Grid>
    </>
  );
};
export default MoviesHomePage;