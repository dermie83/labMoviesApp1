import React from "react";
import PageTemplate from "../components/templateTrendingTVListPage";
import { getTrendingTV } from "../api/tmdb-api";
import useFiltering from "../hooks/useFiltering";
// import MovieFilterUI, {
//   titleFilter,
//   genreFilter,
// } from "../components/movieFilterUI";
import { BaseTrendingTVProps, DiscoverTrendingTV } from "../types/interfaces";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";
import AddToMustWatch from "../components/cardIcons/addToMustWatchTV";


// const titleFiltering = {
//   name: "title",
//   value: "",
//   condition: titleFilter,
// };
// const genreFiltering = {
//   name: "genre",
//   value: "0",
//   condition: genreFilter,
// };

const HomePage: React.FC = () => {
  const { data, error, isLoading, isError } = useQuery<DiscoverTrendingTV, Error>("discover Trending TV", getTrendingTV);
  // const { filterValues, setFilterValues, filterFunction } = useFiltering(
  //   [titleFiltering, genreFiltering]
  // );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }


  // const changeFilterValues = (type: string, value: string) => {
  //   const changedFilter = { name: type, value: value };
  //   const updatedFilterSet =
  //     type === "title"
  //       ? [changedFilter, filterValues[1]]
  //       : [filterValues[0], changedFilter];
  //   setFilterValues(updatedFilterSet);
  // };

  const trendingTV = data ? data.results : [];
  // const displayedTrendingTV = filterFunction(trendingTV);

  return (
    <>
      <PageTemplate
        title="Trending TV NOW"
        trendingTV={trendingTV}
        action={(trendingTV: BaseTrendingTVProps) => {
          return <AddToMustWatch {...trendingTV} />
        }}
      />
      {/* <MovieFilterUI
        onFilterValuesChange={changeFilterValues}
        titleFilter={filterValues[0].value}
        genreFilter={filterValues[1].value}
      /> */}
    </>
  );
};
export default HomePage;