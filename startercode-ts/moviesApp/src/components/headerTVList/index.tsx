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
        marginBottom: 1.5,
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
                <Link to="/tv">
                <Button variant="outlined" size="medium" color="primary">
                    Discover TV
                </Button>
                </Link>
                <Link to="/tv/favourites">
                <Button variant="outlined" size="medium" color="primary">
                    My Favourites
                </Button>
                </Link>
                <Link to="/tv/trendingNow">
                <Button variant="outlined" size="medium" color="primary">
                    Trending Now...
                </Button>
                </Link>
                <Link to="/tv/mustwatch">
                <Button variant="outlined" size="medium" color="primary">
                    My Must Watch
                </Button>
                </Link>
            </ButtonGroup>
        </Paper>
        
    );
};

export default MovieHeader;