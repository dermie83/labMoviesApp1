import React from "react";
import CastHeader from "../headerCast";
import Grid from "@mui/material/Grid";


import { CastMembers } from "../../types/interfaces";


// const styles = {
//     gridListRoot: {
//         display: "flex",
//         flexWrap: "wrap",
//         justifyContent: "space-around",
//     },
//     gridListTile: {
//         width: 450,
//         height: '100vh',
//     },
// };

interface TemplateCastPageProps {
    cast: CastMembers;
    children: React.ReactElement;
}


const TemplateCastPage: React.FC<TemplateCastPageProps> = ({cast, children}) => {

    return (
        <>
            <CastHeader {...cast} />

            <Grid container spacing={5} style={{ padding: "15px" }}>
                <Grid item xs={3}>
                    <div>
                        {/* <ImageList cols={1}>
                            {images.map((image: MovieImage) => (
                                <ImageListItem
                                    key={image.file_path}
                                    sx={styles.gridListTile}
                                    cols={1}
                                >
                                    <img
                                        src={`https://image.tmdb.org/t/p/w500/${image.file_path}`}
                                        alt={'Image alternative'}
                                    />
                                </ImageListItem>
                            ))}
                        </ImageList> */}
                    </div>
                </Grid>

                <Grid item xs={9}>
                    {children}
                </Grid>
            </Grid>
        </>
    );
};

export default TemplateCastPage;