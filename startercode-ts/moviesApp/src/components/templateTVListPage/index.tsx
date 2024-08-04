import React from "react";
import Header from "../headerTVList";
import Grid from "@mui/material/Grid";
import TVList from "../tVList";
import { TVListPageTemplateProps } from "../../types/interfaces";

const styles = {
  root: { 
    backgroundColor: "#bfbfbf",
  }
};

const TVListPageTemplate: React.FC<TVListPageTemplateProps> = ({ tV, title, action })=> {
  return (
    <Grid container sx={styles.root}>
      <Grid item xs={12}>
        <Header title={title} />
      </Grid>
      <Grid item container spacing={5}>
        <TVList
          action={action}
          tV={tV}
        ></TVList>
      </Grid>
    </Grid>
  );
}
export default TVListPageTemplate;