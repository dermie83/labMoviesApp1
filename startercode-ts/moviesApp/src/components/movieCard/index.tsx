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
import FavoriteIcon from "@mui/icons-material/Favorite";
import AddTaskIcon from '@mui/icons-material/AddTask';
import StarRateIcon from "@mui/icons-material/StarRate";
import Grid from "@mui/material/Grid";
import img from '../../images/film-poster-placeholder.png';
import Avatar from "@mui/material/Avatar";
import { BaseMovieProps } from "../../types/interfaces"; 

const styles = {
  card: { maxWidth: 345 },
  media: { height: 500 },
  favouriteAvatar: {
    backgroundColor: "rgb(255, 0, 0)",
    width: 30, 
    height: 30
  },
  mustWatchAvatar: {
    backgroundColor: "rgb(0, 200, 0)",
  },
};

interface MovieCardProps  {
  movie: BaseMovieProps;
  action: (m: BaseMovieProps) => React.ReactNode;
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

const MovieCard: React.FC<MovieCardProps> = ({movie, action}) => {
  const { favourites } = useContext(SiteContext);
  const isFavourite = favourites.find((id) => id === movie.id)? true : false;
  const { mustWatch } = useContext(SiteContext);
  const isMustWatch = mustWatch.find((id) => id === movie.id)? true : false;

  return (

    <Card>
      <CardMedia
        sx={styles.media}
        image={
          movie.poster_path
            ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
            : img
        }
      />
      <CardContent>
        <Grid container>
          <Grid item xs={12}>
            <Typography variant="h6" component="p">
              <StarRateIcon fontSize="large" style={{ color: `${setVoteClass(movie.vote_average)}` }}/>
              {"Rating: "} {movie.vote_average}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
      <CardHeader
        avatar={
          isFavourite ? (
          <Avatar sx={styles.favouriteAvatar}>
            <FavoriteIcon fontSize="small"/>
          </Avatar>) : null}
          title={
            <Typography variant="h5" component="p">
              {movie.title.substring(0, 8)}{" "}
                </Typography>
          }

      />
      <CardHeader
        avatar={
          isMustWatch ? (
          <Avatar sx={styles.mustWatchAvatar}>
            <AddTaskIcon fontSize="small"/>
          </Avatar>) : null}
      />
      <CardActions disableSpacing>
        {action(movie)}
        <Link to={`/movies/${movie.id}`}>
          <Button variant="outlined" size="medium" color="primary">
            More Info ...
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
}

export default MovieCard;