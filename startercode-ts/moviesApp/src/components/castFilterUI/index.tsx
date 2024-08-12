import React, { useState } from "react";
import FilterCard from "../filterCastCard";
import Fab from "@mui/material/Fab";
import Drawer from "@mui/material/Drawer";
import { BaseCastMembersProps } from "../../types/interfaces";

export const nameFilter = (cast: BaseCastMembersProps, value: string): boolean => {
    return cast.name.toLowerCase().search(value.toLowerCase()) !== -1;
};

export const genderFilter = (cast: BaseCastMembersProps, value: string): boolean => {
    const genderId = Number(value);
    return genderId > 0 ? genderId === cast.gender : true;
};

const styles = {
    root: {
        backgroundColor: "#bfbfbf",
    },
    fab: {
        marginTop: 10,
        position: "fixed",
        top: 20,
        right: 2,
    },
};

interface CastFilterUIProps {
    onFilterValuesChange: (f: string, s: string) => void;
    nameFilter: string;
    genderFilter: string;
}


const CastFilterUI: React.FC<CastFilterUIProps> = ({ onFilterValuesChange, nameFilter, genderFilter }) => {
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
                    nameFilter={nameFilter}
                    genderFilter={genderFilter}
                />
            </Drawer>
        </>
    );
};

export default CastFilterUI;