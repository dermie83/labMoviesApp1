import React from "react";
import { FilterOption, CastData } from "../../types/interfaces";
import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { getCastMembers } from "../../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from '../spinner';

const styles = {
  root: {
    maxWidth: 345,
  },
  media: { height: 300 },
 
  formControl: {
    margin: 1,
    minWidth: 220,
    backgroundColor: "rgb(255, 255, 255)",
  },
};

interface FilterCastCardProps {
  onUserInput: (f: FilterOption, s: string)  => void;
  castFilter: string;
}


const FilterCastCard: React.FC<FilterCastCardProps> = ({ castFilter, onUserInput }) => {
  const { data, error, isLoading, isError } = useQuery<CastData, Error>("get cast", getCastMembers);

  if (isLoading) {
    return <Spinner />;
  }
  if (isError) {
    return <h1>{(error as Error).message}</h1>;
  }

  const cast = data?.results || [];
  if (cast[0].popularity >= 144) {
    cast.unshift({ id: "0", name:"Actor", known_for_department: "Acting", popularity:3});
  }
  

  const handleChange = (e: SelectChangeEvent, type: FilterOption, value: string) => {
    e.preventDefault()
      onUserInput(type, value)
  };

  const handleCastChange = (e: SelectChangeEvent) => {
    handleChange(e, "cast", e.target.value)
  };

  return (
    <>
    <Card sx={styles.root} variant="outlined">
      <CardContent>
        <FormControl sx={styles.formControl}>
          <InputLabel id="cast-label">Cast</InputLabel>
          <Select
            labelId="cast-label"
            id="cast-select"
            value={castFilter}
            onChange={handleCastChange}
          >
            {cast.map((castFilter) => {
              return (
                <MenuItem key={castFilter.id} value={castFilter.id}>
                  {castFilter.known_for_department}
                </MenuItem>
              );
            })}
            <div>
        </div>
          </Select>
        </FormControl>
        
      </CardContent>
    </Card>
      </>
  );
}

export default FilterCastCard;