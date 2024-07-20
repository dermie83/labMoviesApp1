import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AddTaskIcon from '@mui/icons-material/AddTask';
import { CastDetailsProps } from "../../types/interfaces"; 

const styles = {
    root: {  
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    flexWrap: "wrap",
    padding: 1.5,
  },
  avatar: {
    backgroundColor: "rgb(255, 0, 0)",
  },
};



const CastHeader: React.FC<CastDetailsProps> = (cast) => {
  
  return (
    <Paper component="div" sx={styles.root}>
      <Typography variant="h4" component="h3">
        {cast.name}{"   "}
        <br />
        <span>{`${cast.cast}`} </span>
      </Typography>
      <IconButton aria-label="go forward">
        <ArrowForwardIcon color="primary" fontSize="large" />
      </IconButton>
    </Paper>
  );
};

export default CastHeader;