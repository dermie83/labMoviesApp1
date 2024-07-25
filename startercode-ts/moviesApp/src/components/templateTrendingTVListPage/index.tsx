import React from "react";
import Header from "../headerMovieList";
import Grid from "@mui/material/Grid";
import TrendingTVList from "../trendingTVList";
import { TrendingTVListPageTemplateProps } from "../../types/interfaces";

const styles = {
  root: { 
    backgroundColor: "#bfbfbf",
  }
};

const TrendingTVListPageTemplate: React.FC<TrendingTVListPageTemplateProps> = ({ trendingTV, title, action })=> {
  return (
    <Grid container sx={styles.root}>
      <Grid item xs={12}>
        <Header title={title} />
      </Grid>
      <Grid item container spacing={5}>
        <TrendingTVList
          action={action}
          trendingTV={trendingTV}
        ></TrendingTVList>
      </Grid>
    </Grid>
  );
}
export default TrendingTVListPageTemplate;