import React from "react";
// import Header from "../headerMovieList";
import Grid from "@mui/material/Grid";
import CastList from "../castList";
import { CastListPageTemplateProps } from "../../types/interfaces";

const styles = {
  root: { 
    backgroundColor: "#bfbfbf",
  }
};

const CastListPageTemplate: React.FC<CastListPageTemplateProps> = ({ cast })=> {
  return (
    <Grid container sx={styles.root}>
      {/* <Grid item xs={12}>
        <Header title={title} />
      </Grid> */}
      <Grid item container spacing={5}>
        <CastList
          cast={cast}
        ></CastList>
      </Grid>
    </Grid>
  );
}
export default CastListPageTemplate;