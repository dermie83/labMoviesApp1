import React from "react"; // replace existing react import
import { useParams } from "react-router-dom";
import CastDetails from "../components/castDetails";
import PageTemplate from "../components/templateCastPage";
import { getCastMember } from '../api/tmdb-api'
import { useQuery } from "react-query";
import Spinner from '../components/spinner';
import { BaseCastMembersProps } from "../types/interfaces";

const CastDetailsPage: React.FC= () => {
  const { id } = useParams();
  const { data: cast, error, isLoading, isError } = useQuery<BaseCastMembersProps, Error>(
    ["cast", id],
    ()=> getCastMember(id||"")
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{(error as Error).message}</h1>;
  }

  return (
    <>
      {cast ? (
        <>
        <PageTemplate cast={cast}> 
          <CastDetails {...cast} />
        </PageTemplate>
      </>
    ) : (
      <p>Waiting for cast details</p>
    )}
    </>
  );
};

export default CastDetailsPage;