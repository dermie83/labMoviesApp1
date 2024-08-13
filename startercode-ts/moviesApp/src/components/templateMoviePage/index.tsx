import React from "react";
import MovieHeader from "../headerMovie";
import Grid from "@mui/material/Grid";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { getMovieImages } from "../../api/tmdb-api";
import { MovieImage, MovieDetailsProps } from "../../types/interfaces";
import { useQuery } from "react-query";
import Spinner from '../spinner';
import { Box } from "@mui/material";


interface TemplateMoviePageProps {
    movie: MovieDetailsProps;
    children: React.ReactElement;
}


const TemplateMoviePage: React.FC<TemplateMoviePageProps> = ({movie, children}) => {
    const { data, error, isLoading, isError } = useQuery<MovieImage[], Error>(
        ["images", movie.id],
        () => getMovieImages(movie.id)
    );

    if (isLoading) {
        return <Spinner />;
    }

    if (isError) {
        return <h1>{(error

        ).message}</h1>;
    }

    const images = data as MovieImage[];

    return (
        <>
            <MovieHeader {...movie} />

            <Grid container spacing={1} style={{ padding: "15px" }}>
                <Grid item xs={5}>
                    <Box sx={{ width: 500, height: 450, overflowY: 'scroll' }}>
                        <ImageList variant="masonry" cols={3} gap={8}>
                            {images.map((image: MovieImage) => (
                            <ImageListItem key={image.file_path}>
                                <img
                                    src={`https://image.tmdb.org/t/p/w500/${image.file_path}`}
                                    alt={'Image alternative'}
                                    loading="lazy"
                                    />
                            </ImageListItem>
                            ))}
                        </ImageList>
                    </Box>
                </Grid>
                <Grid item xs={5}>
                    {children}
                </Grid>
            </Grid>
        </>
    );
};

export default TemplateMoviePage;