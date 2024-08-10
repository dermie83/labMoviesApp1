import React, { useContext } from "react"
import PageTemplate from "../components/templateTVListPage";
import { SiteContext } from "../contexts/siteContext";
import { useQueries } from "react-query";
import { getTVShow } from "../api/tmdb-api";
import Spinner from "../components/spinner";
import useFiltering from "../hooks/useFiltering";
import TVFilterUI, {
  titleFilter,
  genreFilter,
} from "../components/tVFilterUI";
import RemoveFromMustWatch from "../components/cardIcons/removeFromMustWatchTV";

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

const MustWatchTrendingTVPage: React.FC = () => {
  const { mustWatchTV: trendingTVIds } = useContext(SiteContext);
  const { filterValues, setFilterValues, filterFunction } = useFiltering(
    [titleFiltering, genreFiltering]
  );

  // Create an array of queries and run them in parallel.
  const mustWatchTRendingTVQueries = useQueries(
    trendingTVIds.map((trendingTVId) => {
      return {
        queryKey: ["must watch", trendingTVId],
        queryFn: () => getTVShow(trendingTVId.toString()),
      };
    })
  );

  // Check if any of the parallel queries is still loading.
  const isLoading = mustWatchTRendingTVQueries.find((m) => m.isLoading === true);

  if (isLoading) {
    return <Spinner />;
  }

  const mustWatchTV = mustWatchTRendingTVQueries.map((q) => q.data);
  const displayedTVShows = mustWatchTV
    ? filterFunction(mustWatchTV)
    : [];

  const changeFilterValues = (type: string, value: string) => {
    const changedFilter = { name: type, value: value };
    const updatedFilterSet =
      type === "title" ? [changedFilter, filterValues[1]] : [filterValues[0], changedFilter];
    setFilterValues(updatedFilterSet);
  };

  return (
    <>
      <PageTemplate
        title="Must Watch Trending TV"
        tvShow={displayedTVShows}
        action={(trendingTV) => {
          return (
            <>
              <RemoveFromMustWatch {...trendingTV} />
            </>
          );
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

export default MustWatchTrendingTVPage;