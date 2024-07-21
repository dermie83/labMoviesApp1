import React from "react";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import MovieIcon from "@mui/icons-material/Movie";
import Typography from "@mui/material/Typography";
import { CastMembers } from "../../types/interfaces";

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

const CastDetails: React.FC<CastMembers> = (cast) => {

    return (
        <>
            <Typography variant="h5" component="h3">
                Overview
            </Typography>

            <Typography variant="h6" component="p">
                {cast.biography}
            </Typography>

            <Paper component="ul" sx={styles.chipSet}>
                <li>
                    <Chip label="Genres" sx={styles.chipLabel} color="primary" />
                </li>
                <a href={cast.homepage} target="_blank">
                {/* <a href={cast.homepage}> */}
                    <MovieIcon color="info"  fontSize="large"/>
                </a>
            </Paper>
            {/* <Paper component="ul" sx={styles.chipSet}>
                <Chip icon={<AccessTimeIcon />} label={`${movie.runtime} min.`} />
                <Chip
                    icon={<MonetizationIcon />}
                    label={`${movie.revenue.toLocaleString()}`}
                />
                <Chip
                    icon={<StarRate />}
                    label={`${movie.vote_average} (${movie.vote_count}`}
                />
                <Chip label={`Released: ${movie.release_date}`} />
            </Paper> */}
        </>
    );
};
export default CastDetails;