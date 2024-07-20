import React from "react";
// import { MoviesContext } from "../../contexts/moviesContext";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
// import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardHeader from "@mui/material/CardHeader";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
// import FavoriteIcon from "@mui/icons-material/Favorite";
// import AddTaskIcon from '@mui/icons-material/AddTask';
import CalendarIcon from "@mui/icons-material/CalendarTodayTwoTone";
import StarRateIcon from "@mui/icons-material/StarRate";
import Grid from "@mui/material/Grid";
// import img from '../../images/film-poster-placeholder.png';
// import Avatar from "@mui/material/Avatar";
import {CastMembers} from "../../types/interfaces"; 
import { CardActions } from "@mui/material";

const styles = {
  card: { maxWidth: 345 },
  media: { height: 500 },
  favouriteAvatar: {
    backgroundColor: "rgb(255, 0, 0)",
  },
  mustWatchAvatar: {
    backgroundColor: "rgb(0, 200, 0)",
  },
};

interface CastCardProps  {
    cast: CastMembers;
    action: (m: CastMembers) => React.ReactNode;
  }

const CastMemberCard: React.FC<CastCardProps> = ({cast, action}) => {
    const imageSrc = `https://image.tmdb.org/t/p/w500/${cast.profile_path}`


  return (
    <Card sx={styles.card}>
      <CardHeader 
        title={
          <Typography variant="h5" component="p">
            {cast.name}{" "}
              </Typography>
        }
        />
      <CardMedia
        sx={styles.media}
        image={imageSrc}
      />
      <Grid container>
     </Grid>
      <CardContent>
        <Grid container>
          <Grid item xs={6}>
            <Typography variant="h6" component="p">
              <CalendarIcon fontSize="small" />
              {}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h6" component="p">
              <StarRateIcon fontSize="small" />
              {"  "} {}{" "}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
      {/* <CardActions disableSpacing>
      {action(cast)}
        <Link to={`/castmember/${cast.id}`}>
          <Button variant="outlined" size="medium" color="primary">
            More Info ...
          </Button>
        </Link>
      </CardActions> */}
    </Card>
  );
}

export default CastMemberCard;