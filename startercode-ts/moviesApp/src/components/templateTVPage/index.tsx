import React from "react";
import TVShowHeader from "../headerTV";
import Grid from "@mui/material/Grid";
import ImageListItem from "@mui/material/ImageListItem";
import { TVDetailsProps } from "../../types/interfaces";


const styles = {
    gridListRoot: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
    },
    gridListTile: {
        width: 450,
        height: '100vh',
    },
};

interface TemplateTVPageProps {
    tvShow: TVDetailsProps;
    children: React.ReactElement;
}


const TemplateTVPage: React.FC<TemplateTVPageProps> = ({tvShow, children}) => {

    return (
        <>
            <TVShowHeader {...tvShow} />

            <Grid container spacing={1} style={{ padding: "15px" }}>
                <Grid item xs={5}>
                <ImageListItem
                            key={tvShow.backdrop_path}
                            sx={styles.gridListTile}
                            cols={1}
                            >
                            <img
                                src={`https://image.tmdb.org/t/p/w500/${tvShow.backdrop_path}`}
                                alt={'Image alternative'}
                            />
                        </ImageListItem>
                </Grid>
                <Grid item xs={5}>
                    {children}
                </Grid>
            </Grid>
        </>
    );
};

export default TemplateTVPage;