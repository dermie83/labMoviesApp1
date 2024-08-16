import React from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { BaseCastMembersProps } from "../../types/interfaces"; 

const styles = {
    root: {  
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    flexWrap: "wrap",
    padding: 1.5,
  },
};

const CastHeader: React.FC<BaseCastMembersProps> = (cast) => {
  
  return (
    <Paper component="div" sx={styles.root}>
      <Typography variant="h4" component="h3">
       {cast.name}
      </Typography>
    </Paper>
  );
};

export default CastHeader;