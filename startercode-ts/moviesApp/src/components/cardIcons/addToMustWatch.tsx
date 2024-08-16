import React, {MouseEvent, useContext} from "react";
import { SiteContext } from "../../contexts/siteContext";
import IconButton from "@mui/material/IconButton";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import {BaseMovieProps} from "../../types/interfaces"

const AddToPlaylistIcon: React.FC<BaseMovieProps> = (movie) => {
  const context = useContext(SiteContext);
  

  const onUserSelect = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    context.addToMustWatch(movie);
  };
  return (
    <IconButton aria-label="add to must watch" onClick={onUserSelect}>
      <PlaylistAddIcon color="primary" fontSize="medium" />
    </IconButton>
  );
};

export default AddToPlaylistIcon;