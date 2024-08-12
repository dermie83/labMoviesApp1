import React from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { Button, ButtonGroup } from "@mui/material";
import { Link } from "react-router-dom";


const styles = {
    root: {
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        flexWrap: "wrap",
        marginBottom: 5,
    },
};

interface HeaderProps {
    title: string;
}

const MovieHeader: React.FC<HeaderProps> = (headerProps) => {
    const title = headerProps.title

    return (
        <Paper component="div" sx={styles.root}>
            <Typography variant="h4" component="h3">
                {title}
            </Typography>
            <ButtonGroup variant="contained" aria-label="Basic button group">
                <Link to="/movies">
                <Button variant="outlined" size="medium" color="primary">
                    Discover Movies
                </Button>
                </Link>
                <Link to="/movies/favourites">
                <Button variant="outlined" size="medium" color="primary">
                    My Favourites
                </Button>
                </Link>
                <Link to="/movies/upcoming">
                <Button variant="outlined" size="medium" color="primary">
                    Upcoming Movies
                </Button>
                </Link>
                <Link to="/movies/mustwatch">
                <Button variant="outlined" size="medium" color="primary">
                    My Must Watch
                </Button>
                </Link>
            </ButtonGroup>
        </Paper>
        
    );
};

export default MovieHeader;