import React from "react";
import PageTemplate from "../components/templateCastListPage";
import { getCast } from "../api/tmdb-api";
import useFiltering from "../hooks/useFiltering";
import CastFilterUI, {
  nameFilter,
} from "../components/castFilterUI";
import { BaseCastMembersProps, DiscoverCast } from "../types/interfaces";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";


const nameFiltering = {
  name: "name",
  value: "",
  condition: nameFilter,
};


const CastMemberPage: React.FC = () => {
  const { data, error, isLoading, isError } = useQuery<DiscoverCast, Error>("cast", getCast);
  const { filterValues, setFilterValues, filterFunction } = useFiltering(
    [nameFiltering]
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
      type === "cast"
        ? [changedFilter, filterValues[1]]
        : [filterValues[0], changedFilter];
    setFilterValues(updatedFilterSet);
  };

  const castMembers = data ? data.results : [];
  const displayedCast = filterFunction(castMembers);

  return (
    <>
      <PageTemplate
        title="Discover Cast"
        cast={displayedCast}
      />
      <CastFilterUI
        onFilterValuesChange={changeFilterValues}
        nameFilter={filterValues[0].value}
      />
    </>
  );
};
export default CastMemberPage;