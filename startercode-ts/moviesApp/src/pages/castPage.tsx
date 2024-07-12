import PageTemplate from '../components/templateCastListPage';
import {  DiscoverCast } from "../types/interfaces";
import { getCast } from "../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";
import useFiltering from "../hooks/useFiltering";
import CastFilterUI, { castFilter } from "../components/castFilterUI";

const castFiltering = {
  name: "Cast",
  value: "0",
  condition: castFilter,
};

const CastPage: React.FC = () => {
  const { data, error, isLoading, isError } = useQuery<DiscoverCast, Error>("discover cast", getCast);
  const { filterValues, setFilterValues, filterFunction } = useFiltering(
    [castFiltering]
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

  const cast = data ? data.results : [];
  const popularPersons = filterFunction(cast);
  

  return (
    <>
      <PageTemplate
        title='Persons'
        cast={popularPersons}
      />
      <CastFilterUI
        onFilterValuesChange={changeFilterValues}
        castFilter={filterValues[0].value}
      />
    </>
  );
};
export default CastPage;