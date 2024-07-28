import React, { useContext } from "react"
import PageTemplate from "../components/templateTrendingTVListPage";
import { SiteContext } from "../contexts/siteContext";
import { useQueries } from "react-query";
import { getTVShow } from "../api/tmdb-api";
import Spinner from "../components/spinner";
import useFiltering from "../hooks/useFiltering";
import TrendingTVFilterUI, {
  titleFilter,
  genreFilter,
} from "../components/trendingTVFilterUI";
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

  const allTrendingTV = mustWatchTRendingTVQueries.map((q) => q.data);
  const displayedTrendingTV = allTrendingTV
    ? filterFunction(allTrendingTV)
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
        trendingTV={displayedTrendingTV}
        action={(trendingTV) => {
          return (
            <>
              <RemoveFromMustWatch {...trendingTV} />
            </>
          );
        }}
      />
      <TrendingTVFilterUI
        onFilterValuesChange={changeFilterValues}
        titleFilter={filterValues[0].value}
        genreFilter={filterValues[1].value}
      />
    </>
  );
};

export default MustWatchTrendingTVPage;