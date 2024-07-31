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

const Header: React.FC<HeaderProps> = (headerProps) => {
    const title = headerProps.title

    return (
        <Paper component="div" sx={styles.root}>
            <Typography variant="h4" component="h3">
                {title}
            </Typography>
            <ButtonGroup variant="contained" aria-label="Basic button group">
            <Link to="/movies">
                <Button variant="outlined" size="medium" color="primary">
                    Movies Info ...
                </Button>
                </Link>
                <Link to="/tv/trendingNow">
                <Button variant="outlined" size="medium" color="primary">
                    TV Info ...
                </Button>
                </Link>
                <Link to="/cast">
                <Button variant="outlined" size="medium" color="primary">
                    Cast Info ...
                </Button>
                </Link>
            </ButtonGroup>
        </Paper>
        
    );
};

export default Header;