import React from "react";
import CastHeader from "../headerCast";
import Grid from "@mui/material/Grid";
import { BaseCastMembersProps } from "../../types/interfaces";
import { ImageListItem } from "@mui/material";


const styles = {
    gridListRoot: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
    },
    gridListTile: {
        width: 330,
        height: '100vh',
    },
};

interface TemplateCastPageProps {
    cast: BaseCastMembersProps;
    children: React.ReactElement;
}


const TemplateCastPage: React.FC<TemplateCastPageProps> = ({cast, children}) => {

    return (
        <>
            <CastHeader {...cast} />

            <Grid container spacing={5} style={{ padding: "15px" }}>
                <Grid item xs={3}>
                    <div>
                        <ImageListItem
                            key={cast.profile_path}
                            sx={styles.gridListTile}
                            cols={1}
                            >
                            <img
                                src={`https://image.tmdb.org/t/p/w500/${cast.profile_path}`}
                                alt={'Image alternative'}
                            />
                        </ImageListItem>
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