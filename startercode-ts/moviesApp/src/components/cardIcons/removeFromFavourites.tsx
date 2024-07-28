import React, { MouseEvent, useContext } from "react";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { SiteContext } from "../../contexts/siteContext";
import {BaseMovieProps} from "../../types/interfaces";

const RemoveFromFavouritesIcon: React.FC<BaseMovieProps> = (movie) => {
  const context = useContext(SiteContext);

  const onUserRequest = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    context.removeFromFavourites(movie);
  };

return (
  <IconButton
    aria-label="remove from favorites"
    onClick={onUserRequest}
  >
    <DeleteIcon color="primary" fontSize="large" />
  </IconButton>
);
};

export default RemoveFromFavouritesIcon;