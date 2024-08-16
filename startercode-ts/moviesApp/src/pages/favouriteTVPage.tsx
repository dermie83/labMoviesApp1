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
import RemoveFromFavouriteTV from "../components/cardIcons/removeFromFavouriteTV";

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

const FavouriteTVPage: React.FC = () => {
  const { favouriteTV: tvShowIds } = useContext(SiteContext);
  const { filterValues, setFilterValues, filterFunction } = useFiltering(
    [titleFiltering, genreFiltering]
  );

  // Create an array of queries and run them in parallel.
  const favouriteTVQueries = useQueries(
    tvShowIds.map((tvShowId) => {
      return {
        queryKey: ["/tv/favourites", tvShowId],
        queryFn: () => getTVShow(tvShowId.toString()),
      };
    })
  );

  // Check if any of the parallel queries is still loading.
  const isLoading = favouriteTVQueries.find((m) => m.isLoading === true);

  if (isLoading) {
    return <Spinner />;
  }

  const allFavourites = favouriteTVQueries.map((q) => q.data);
  const displayedTVShows = allFavourites
    ? filterFunction(allFavourites)
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
        title="Favourite TV Shows"
        tvShow={displayedTVShows}
        action={(tvShow) => {
          return (
            <>
              <RemoveFromFavouriteTV {...tvShow} />
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

export default FavouriteTVPage;