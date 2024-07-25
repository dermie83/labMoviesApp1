import React, {MouseEvent, useContext} from "react";
import { TrendingTVContext } from "../../contexts/trendingTVContext";
import IconButton from "@mui/material/IconButton";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import {BaseTrendingTVProps} from "../../types/interfaces"

const AddToPlaylistIcon: React.FC<BaseTrendingTVProps> = (trendingTV) => {
  const context = useContext(TrendingTVContext);

  const onUserSelect = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    context.addToMustWatch(trendingTV);
  };
  return (
    <IconButton aria-label="add to must watch" onClick={onUserSelect}>
      <PlaylistAddIcon color="primary" fontSize="large" />
    </IconButton>
  );
};

export default AddToPlaylistIcon;