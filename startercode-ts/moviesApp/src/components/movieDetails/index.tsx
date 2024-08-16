import React, { useState } from "react";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import MonetizationIcon from "@mui/icons-material/MonetizationOn";
import MovieIcon from "@mui/icons-material/Movie";
import StarRate from "@mui/icons-material/StarRate";
import Typography from "@mui/material/Typography";
import { MovieDetailsProps } from "../../types/interfaces";
import NavigationIcon from "@mui/icons-material/Navigation";
import Fab from "@mui/material/Fab";
import Drawer from "@mui/material/Drawer";
import MovieReviews from '../movieReviews'

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
        marginTop: 8,
        position: "fixed",
        top: 20,
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

  const setCountClass = (vote: number) => {
    if (vote >= 1200) {
      return "green";
    } else if (vote >= 1000) {
      return "orange";
    } else {
      return "red";
    }
  };

const MovieDetails: React.FC<MovieDetailsProps> = (movie) => {

    const [drawerOpen, setDrawerOpen] = useState(false);
    // console.log(movie.videos.results[0].key)

    return (
        <>
            <Typography variant="h5" component="h3">
                Overview
            </Typography>

            <Typography variant="h6" component="p">
                {movie.overview}
            </Typography>

            <Paper component="ul" sx={styles.chipSet}>
                <li>
                    <Chip label="Genres" sx={styles.chipLabel} color="primary" />
                </li>
                {movie.genres.map((g) => (
                    <li key={g.name}>
                        <Chip label={g.name} />
                    </li>
                ))}
                <a href={movie.homepage}>
                    <MovieIcon color="info"  fontSize="large"/>
                </a>
                <a href = {`https://www.youtube.com/watch?v=${movie.videos.results[0].key}`}>
                    <MovieIcon color="info"  fontSize="large"/>
                </a>
            </Paper>
            <Paper component="ul" sx={styles.chipSet}>
                <Chip icon={<AccessTimeIcon />} label={`${movie.runtime} min.`} />
                <Chip
                    icon={<MonetizationIcon />}
                    label={`$${movie.revenue.toLocaleString()}`}
                />
                <Chip
                    icon={<StarRate style={{ color: `${setVoteClass(movie.vote_average)}` }}/>}
                    label={`Rating ${movie.vote_average}`}
                />
                <Chip
                    icon={<StarRate style={{ color: `${setCountClass(movie.vote_count)}` }}/>}
                    label={`Vote Count ${movie.vote_count}`}
                />
                <Chip label={`Released: ${movie.release_date}`} />
            </Paper>
            <Fab
                color="secondary"
                variant="extended"
                onClick={() => setDrawerOpen(true)}
                sx={styles.fab}
            >
                <NavigationIcon />
                Reviews
            </Fab>
            <Drawer anchor="top" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
                <MovieReviews {...movie} />
            </Drawer>
        </>
    );
};
export default MovieDetails;