import React, { useState } from "react";
import FilterCard from "../filterTrendingTVCard";
import Fab from "@mui/material/Fab";
import Drawer from "@mui/material/Drawer";
import { BaseTrendingTVProps } from "../../types/interfaces";

export const titleFilter = (trendingTV: BaseTrendingTVProps, value: string): boolean => {
    return trendingTV.name.toLowerCase().search(value.toLowerCase()) !== -1;
};

export const genreFilter = (trendingTV: BaseTrendingTVProps, value: string) => {
    const genreId = Number(value);
    const genreIds = trendingTV.genre_ids;
    return genreId > 0 && genreIds ? genreIds.includes(genreId) : true;
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

interface TrendingTVFilterUIProps {
    onFilterValuesChange: (f: string, s: string) => void;
    titleFilter: string;
    genreFilter: string;
}


const TrendingTVFilterUI: React.FC<TrendingTVFilterUIProps> = ({ onFilterValuesChange, titleFilter, genreFilter }) => {
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
                <FilterCard
                    onUserInput={onFilterValuesChange}
                    titleFilter={titleFilter}
                    genreFilter={genreFilter}
                />
            </Drawer>
        </>
    );
};

export default TrendingTVFilterUI;