import React, { useState } from "react";
import CastCard from "../filterCastCard";
import Fab from "@mui/material/Fab";
import Drawer from "@mui/material/Drawer";
import { CastMember } from "../../types/interfaces";

// eslint-disable-next-line react-refresh/only-export-components
export const castFilter = (cast: CastMember, value: string) => {
    const castId = Number(value);
    const castIds = cast.cast_id;
    return castId > 0 && castIds ? castIds.includes(castId) : true;
};

const styles = {
    root: {
        backgroundColor: "#bfbfbf",
    },
    fab: {
        marginTop: 8,
        position: "fixed",
        top: 20,
        right: 2,
    },
};

interface MovieCastUIProps {
    onFilterValuesChange: (f: string, s: string) => void;
    castFilter: string;
}


const MovieCastUI: React.FC<MovieCastUIProps> = ({ onFilterValuesChange, castFilter }) => {
    const [drawerOpen, setDrawerOpen] = useState(false);

    return (
        <>
            <Fab
                color="secondary"
                variant="extended"
                onClick={() => setDrawerOpen(true)}
                sx={styles.fab}
            >
                Filter
            </Fab>
            <Drawer
                anchor="left"
                open={drawerOpen}
                onClose={() => setDrawerOpen(false)}
            >
                <CastCard
                    onUserInput={onFilterValuesChange}
                    castFilter={castFilter}
                />
            </Drawer>
        </>
    );
};

export default MovieCastUI;