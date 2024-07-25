import React from "react";
import TrendingTV from "../trendingTVCard";
import Grid from "@mui/material/Grid";
import { TrendingTVListProps } from "../../types/interfaces";

const TrendingTVList: React.FC<TrendingTVListProps> = ({trendingTV, action}) => {
  const trendingTVCards = trendingTV.map((m) => (
    <Grid key={m.id} item xs={12} sm={6} md={4} lg={3} xl={2}>
      <TrendingTV key={m.id} trendingTV={m} action={action} />
    </Grid>
  ));
  return trendingTVCards;
}

  export default TrendingTVList;