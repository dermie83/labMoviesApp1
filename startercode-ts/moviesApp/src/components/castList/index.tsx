import React from "react";
import Cast from "../castCard";
import Grid from "@mui/material/Grid";
import { CastCardProps } from "../../types/interfaces";



const CastList: React.FC<CastCardProps> = ({cast}) => {
  const castCards = cast.map((m) => (
    <Grid key={m.id} item xs={12} sm={6} md={4} lg={3} xl={2}>
      <Cast key={m.id} cast={m} />
    </Grid>
  ));
  return castCards;
}

  export default CastList;