import React from "react";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import MovieIcon from "@mui/icons-material/Movie";
import Typography from "@mui/material/Typography";
import XIcon from '@mui/icons-material/X';
import FacebookIcon from '@mui/icons-material/Facebook';
import CalendarIcon from "@mui/icons-material/CalendarTodayTwoTone";
import { BaseCastMembersProps } from "../../types/interfaces";


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
        position: "fixed",
        top: 50,
        right: 2,
    },
};

const TikTokIcon = ({ color = "#000000" }) => {
    return (
      <svg
        fill={color}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 50 50"
        width="100%"
        height="100%"
      >
        <path d="M41,4H9C6.243,4,4,6.243,4,9v32c0,2.757,2.243,5,5,5h32c2.757,0,5-2.243,5-5V9C46,6.243,43.757,4,41,4z M37.006,22.323 c-0.227,0.021-0.457,0.035-0.69,0.035c-2.623,0-4.928-1.349-6.269-3.388c0,5.349,0,11.435,0,11.537c0,4.709-3.818,8.527-8.527,8.527 s-8.527-3.818-8.527-8.527s3.818-8.527,8.527-8.527c0.178,0,0.352,0.016,0.527,0.027v4.202c-0.175-0.021-0.347-0.053-0.527-0.053 c-2.404,0-4.352,1.948-4.352,4.352s1.948,4.352,4.352,4.352s4.527-1.894,4.527-4.298c0-0.095,0.042-19.594,0.042-19.594h4.016 c0.378,3.591,3.277,6.425,6.901,6.685V22.323z" />
      </svg>
    );
  };

const CastDetails: React.FC<BaseCastMembersProps> = (cast) => {

    return (
        <>
            <Typography variant="h4" component="h3">
                Overview
            </Typography>
            <Typography variant="h6" component="p">
                {cast.biography}
            </Typography>

            <Paper component="ul" sx={styles.chipSet}>
                <a href={cast.homepage} target="_blank">
                    <MovieIcon color="info"  fontSize="large"/>
                </a>
            </Paper>
            <Paper component="ul" sx={styles.chipSet}>
                <Chip
                    icon={<TikTokIcon />}
                    />
                <Chip
                     icon={<XIcon />}
                />
                <Chip
                     icon={<FacebookIcon />}
                />
                 <Chip
                   label = {`Birth Place: ${cast.place_of_birth}`}
                />
                <CalendarIcon fontSize="medium"></CalendarIcon> 
                    {`Birthday: ${cast.birthday}`}{" "}
                <CalendarIcon fontSize="medium"></CalendarIcon>
                    {`Deathday: ${cast.deathday}`}
            </Paper>
        </>
    );
};
export default CastDetails;