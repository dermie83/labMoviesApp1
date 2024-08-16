import React from "react";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import StarRate from "@mui/icons-material/StarRate";
import Typography from "@mui/material/Typography";
import { TVDetailsProps } from "../../types/interfaces";

const styles = {
    chipSet: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
        listStyle: "none",
        padding: 1.5,
        margin: 0,
    },
    chipLabel: {
        margin: 0.5,
    },
    fab: {
        position: "fixed",
        top: 50,
        right: 2,
    },
};

const setVoteClass = (vote: number) => {
    if (vote >= 8) {
      return "green";
    } else if (vote >= 6) {
      return "orange";
    } else {
      return "red";
    }
  };

const TVDetails: React.FC<TVDetailsProps> = (tvShow) => {
    return (
        <>
            <Typography variant="h5" component="h3">
                Overview
            </Typography>

            <Typography variant="h6" component="p">
                {tvShow.overview}
            </Typography>

            <Paper component="ul" sx={styles.chipSet}>
                <li>
                    <Chip label="Genres" sx={styles.chipLabel} color="primary" />
                </li>
                {tvShow.genres.map((g) => (
                    <li key={g.name}>
                        <Chip label={g.name} />
                    </li>
                ))}
            </Paper>
            <Paper component="ul" sx={styles.chipSet}>
                <Chip
                    icon={<StarRate style = {{color: `${setVoteClass(tvShow.vote_average)}`}}/>}
                    label={`${tvShow.vote_average}`}
                />
                <Chip label={`First Air Date: ${tvShow.first_air_date}`} />
            </Paper>
        </>
    );
};
export default TVDetails;