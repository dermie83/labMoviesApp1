import React from "react";
import TVShowHeader from "../headerTV";
import Grid from "@mui/material/Grid";
import ImageListItem from "@mui/material/ImageListItem";
import { TVDetailsProps } from "../../types/interfaces";


interface TemplateTVPageProps {
    tvShow: TVDetailsProps;
    children: React.ReactElement;
}


const TemplateTVPage: React.FC<TemplateTVPageProps> = ({tvShow, children}) => {

    return (
        <>
            <TVShowHeader {...tvShow} />

            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 3, md: 4 }}>
                <Grid item xs={8} md={6}>
                <ImageListItem
                            key={tvShow.backdrop_path}
                            cols={1}
                            >
                            <img
                                src={`https://image.tmdb.org/t/p/w500/${tvShow.backdrop_path}`}
                                alt={'../../images/film-poster-placeholder.png'}
                            />
                        </ImageListItem>
                </Grid>
                <Grid item xs={4} md={6}>
                    {children}
                </Grid>
            </Grid>
        </>
    );
};

export default TemplateTVPage;