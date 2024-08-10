import React from "react"; // replace existing react import
import { useParams } from "react-router-dom";
import TVDetails from "../components/tvDetails";
import PageTemplate from "../components/templateTVPage";
import { getTVShow } from '../api/tmdb-api'
import { useQuery } from "react-query";
import Spinner from '../components/spinner';
import { TVDetailsProps } from "../types/interfaces";

const MovieDetailsPage: React.FC= () => {
  const { id } = useParams();
  const { data: tvShow, error, isLoading, isError } = useQuery<TVDetailsProps, Error>(
    ["tvShow", id],
    ()=> getTVShow(id||"")
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{(error as Error).message}</h1>;
  }

  return (
    <>
      {tvShow ? (
        <>
        <PageTemplate tvShow={tvShow}> 
          <TVDetails {...tvShow} />
        </PageTemplate>
      </>
    ) : (
      <p>Waiting for tv Show details</p>
    )}
    </>
  );
};

export default MovieDetailsPage;