import React from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { MovieDetailsProps } from "../../types/interfaces"; 

const styles = {
    root: {  
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    flexWrap: "wrap",
    padding: 1.5,
  },

};

const MovieHeader: React.FC<MovieDetailsProps> = (movie) => {
  return (
    <Paper component="div" sx={styles.root}>
      <Typography variant="h4" component="h3">
        {movie.title}{"   "}
        <br />
        <span>{`${movie.tagline}`} </span>
      </Typography>
    </Paper>
  );
};

export default MovieHeader;