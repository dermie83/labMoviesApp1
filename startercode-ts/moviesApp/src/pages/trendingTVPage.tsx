import React, { useState } from "react";
import PageTemplate from "../components/templateTVListPage";
import { getTrendingTV } from "../api/tmdb-api";
import useFiltering from "../hooks/useFiltering";
import TVFilterUI, {
  titleFilter,
  genreFilter,
} from "../components/tVFilterUI";
import { BaseTVProps, DiscoverTV } from "../types/interfaces";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";
import AddToMustWatchTV from "../components/cardIcons/addToMustWatchTV";


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

const TrendingTVPage: React.FC = () => {
  
  const [page, setPage] = useState(1);
  const { data, error, isLoading, isError, isPreviousData } = useQuery<DiscoverTV, Error>({
    queryKey: ["/tv/trendingNow", page],
      queryFn: () => getTrendingTV(page),
    keepPreviousData: true
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

  const trendingTV = data ? data.results : [];
  const displayedTrendingTV = filterFunction(trendingTV);

  const prevPage = () => setPage((prev) => prev - 1);
  const pageOne = () => setPage(1);
  const pageTwo = () => setPage(2);
  const pageThree = () => setPage(3);
  const pageFour = () => setPage(4);
  const pageFive = () => setPage(5);
  const pageTen = () => setPage(10);
  const nextPage = () => setPage((next) => next + 1);

  return (
    <>
    <div className="pages__section">
        <button onClick={prevPage} disabled={isPreviousData || page === 1}>
          prev
        </button>
        <button onClick={pageOne}>1</button>
        <button onClick={pageTwo}>2</button>
        <button onClick={pageThree}>3</button>
        <p>Page {page}</p>
        <button onClick={pageFour}>4</button>
        <button onClick={pageFive}>5</button>
        <p>...</p>
        <button onClick={pageTen}>10</button>
        <button onClick={nextPage} disabled={isPreviousData || page === data?.total_pages}>
          Next
        </button>
    </div>
      <PageTemplate
        title="Trending On TV NOW"
        tV={displayedTrendingTV}
        action={(trendingTV: BaseTVProps) => {
          return <AddToMustWatchTV {...trendingTV} />
        }}
      />
      <TVFilterUI
        onFilterValuesChange={changeFilterValues}
        titleFilter={filterValues[0].value}
        genreFilter={filterValues[1].value}
      />
    </>
  );
};
export default TrendingTVPage;