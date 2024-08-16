import React, {useContext} from "react";
import { SiteContext } from "../../contexts/siteContext";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardHeader from "@mui/material/CardHeader";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import AddTaskIcon from '@mui/icons-material/AddTask';
import StarRateIcon from "@mui/icons-material/StarRate";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Grid from "@mui/material/Grid";
import img from '../../images/film-poster-placeholder.png';
import Avatar from "@mui/material/Avatar";
import { BaseTVProps } from "../../types/interfaces"; 

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

interface TVCardProps  {
  tvShow: BaseTVProps;
  action: (m: BaseTVProps) => React.ReactNode;
}

const setVoteClass = (vote: number) => {
  if (vote >= 8) {
    return "green";
  } else if (vote >= 6) {
    return "orange";
  } else {
    return "red";
  }
};

const TVCard: React.FC<TVCardProps> = ({tvShow, action}) => {
  
  const { favouriteTV } = useContext(SiteContext);
  const isFavouriteTV = favouriteTV.find((id) => id === tvShow.id)? true : false;
  const { mustWatchTV } = useContext(SiteContext);
  const isMustWatchTV = mustWatchTV.find((id) => id === tvShow.id)? true : false;


  return (
    <Card sx={styles.card}>
      <CardMedia
        sx={styles.media}
        image={
          tvShow.poster_path
            ? `https://image.tmdb.org/t/p/w500/${tvShow.poster_path}`
            : img
        }
      />
        <Grid container>
              <CardHeader
               title={
                <Typography variant="h5" component="p">
                  {tvShow.name.substring(0, 8)}{" "}
                    </Typography>
              }
                avatar={
                  isMustWatchTV ? (
                  <Avatar sx={styles.mustWatchAvatar}>
                    <AddTaskIcon fontSize="small"/>
                  </Avatar>) : null }
              />
        </Grid>
      <CardContent>
        <Grid container>
          <Grid item xs={6}>
            <CardHeader
              avatar={
              isFavouriteTV ? (
              <Avatar sx={styles.favouriteAvatar}>
                <FavoriteIcon fontSize="small"/>
            </Avatar>) : null}
          
          />
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h6" component="p">
              <StarRateIcon fontSize="large" style={{ color: `${setVoteClass(tvShow.vote_average)}`}}/>
              {"  "} {tvShow.vote_average}{" "}
            </Typography>
          </Grid>
        </Grid>
        
      </CardContent>
      <CardActions disableSpacing>
      {action(tvShow)}
        <Link to={`/tv/${tvShow.id}`}>
          <Button variant="outlined" size="medium" color="primary">
            More Info ...
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
}

export default TVCard;