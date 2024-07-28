import React, {MouseEvent, useContext} from "react";
import { SiteContext } from "../../contexts/siteContext";
import IconButton from "@mui/material/IconButton";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import {BaseTrendingTVProps} from "../../types/interfaces"

const AddToTVPlaylistIcon: React.FC<BaseTrendingTVProps> = (trendingTV) => {
  const context = useContext(SiteContext);

  const onUserSelect = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    context.addToMustWatchTV(trendingTV);
  };
  return (
    <IconButton aria-label="add to must watch TV" onClick={onUserSelect}>
      <PlaylistAddIcon color="primary" fontSize="large" />
    </IconButton>
  );
};

export default AddToTVPlaylistIcon;