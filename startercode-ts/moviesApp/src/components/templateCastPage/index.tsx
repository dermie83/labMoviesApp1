import React from "react";
import CastHeader from "../headerCast";
import Grid from "@mui/material/Grid";
import { BaseCastMembersProps } from "../../types/interfaces";
import { ImageListItem } from "@mui/material";


interface TemplateCastPageProps {
    cast: BaseCastMembersProps;
    children: React.ReactElement;
}


const TemplateCastPage: React.FC<TemplateCastPageProps> = ({cast, children}) => {

    return (
        <>
            <CastHeader {...cast} />

            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 3, md: 3 }}>
                <Grid item xs={4} md={4}>
                    <div>
                        <ImageListItem
                            key={cast.profile_path}
                            cols={1}
                            >
                            <img
                                src={`https://image.tmdb.org/t/p/w500/${cast.profile_path}`}
                                alt={'Image alternative'}
                            />
                        </ImageListItem>
                    </div>
                </Grid>
                <Grid item xs={8} md={8}>
                    {children}
                </Grid>
            </Grid>
        </>
    );
};

export default TemplateCastPage;