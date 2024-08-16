import React, {MouseEvent, useContext, useState} from "react";
import { SiteContext } from "../../contexts/siteContext";
import IconButton from "@mui/material/IconButton";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import {BaseMovieProps} from "../../types/interfaces"

const AddToPlaylistIcon: React.FC<BaseMovieProps> = (movie) => {
  const context = useContext(SiteContext);
  const [mustWatch, setMustWatch]=useState(false)

  const onUserSelect = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    context.addToMustWatch(movie);
    setMustWatch(true);
  };
  return (
    <IconButton aria-label="add to must watch" onClick={onUserSelect}  style={{backgroundColor:mustWatch==true?"green":""}}>
      <PlaylistAddIcon color="primary" fontSize="large" />
    </IconButton>
  );
};

export default AddToPlaylistIcon;