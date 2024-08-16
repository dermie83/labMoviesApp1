import React from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { TVDetailsProps } from "../../types/interfaces"; 

const styles = {
    root: {  
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    flexWrap: "wrap",
    padding: 1.5,
  },

};

const TVShowHeader: React.FC<TVDetailsProps> = (tvShow) => {
  return (
    <Paper component="div" sx={styles.root}>
      <Typography variant="h4" component="h3">
        {tvShow.name}{"   "}
      </Typography>
    </Paper>
  );
};

export default TVShowHeader;