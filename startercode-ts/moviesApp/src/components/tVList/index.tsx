import React from "react";
import TVCard from "../tVCard";
import Grid from "@mui/material/Grid";
import { BaseTVListProps } from "../../types/interfaces";

const TVList: React.FC<BaseTVListProps> = ({tvShow, action}) => {
  const TVCards = tvShow.map((m) => (
    <Grid key={m.id} item xs={12} sm={6} md={4} lg={3} xl={2}>
      <TVCard key={m.id} tvShow={m} action={action} />
    </Grid>
  ));
  return TVCards;
}

  export default TVList;