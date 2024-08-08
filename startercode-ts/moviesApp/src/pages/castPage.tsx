import React, { useState } from "react";
import PageTemplate from "../components/templateCastListPage";
import { getCast } from "../api/tmdb-api";
import useFiltering from "../hooks/useFiltering";
import CastFilterUI, {
  nameFilter, genderFilter
} from "../components/castFilterUI";
import { DiscoverCast } from "../types/interfaces";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";


const nameFiltering = {
  name: "name",
  value: "",
  condition: nameFilter,
};

const genderFiltering = {
  name: "gender",
  value: "",
  condition: genderFilter,
};

const CastMemberPage: React.FC = () => {

  const [page, setPage] = useState(1);
  const { data, error, isLoading, isError, isPreviousData } = 
  useQuery<DiscoverCast, Error>({
      queryKey: ["/cast", page],
      queryFn: () => getCast(page),
      keepPreviousData: true,
  });
  const { filterValues, setFilterValues, filterFunction } = useFiltering(
    [nameFiltering, genderFiltering]
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

  const prevPage = () => setPage((prev) => prev - 1);
  const pageOne = () => setPage(1);
  const pageTwo = () => setPage(2);
  const pageThree = () => setPage(3);
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
        --------
        <button onClick={nextPage} disabled={isPreviousData || page === data?.total_pages}>
          Next
        </button>
        <p>Page {page}</p>
    </div>
      <PageTemplate
        title="Discover Cast"
        cast={displayedCast}
      />
      <CastFilterUI
        onFilterValuesChange={changeFilterValues}
        nameFilter={filterValues[0].value}
        genderFilter={filterValues[1].value}
      />
    </>
  );
};
export default CastMemberPage;