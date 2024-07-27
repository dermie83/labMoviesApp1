import React, { ChangeEvent } from "react";
import { FilterOption } from "../../types/interfaces";
import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import FilterAltIcon from '@mui/icons-material/FilterAlt';

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
  nameFilter: string;
  genderFilter: string;
}

const genders = [
  { id: '0', name: 'All' },
  { id: '1', name: 'Female' },
  { id: '2', name: 'Male' },
  { id: '3', name: 'Non-binary' },
  { id: '4', name: 'Unknown' }
];


const FilterCastCard: React.FC<FilterCastCardProps> = ({ nameFilter, genderFilter, onUserInput }) => {
  

  const handleChange = (e: SelectChangeEvent, type: FilterOption, value: string) => {
    e.preventDefault()
      onUserInput(type, value)
  };

  const handleTextChange = (e: ChangeEvent<HTMLInputElement>) => {
    handleChange(e, "cast", e.target.value)
  };

  const handleGenderChange = (e: SelectChangeEvent) => {
    handleChange(e, "gender", e.target.value)
  };

  return (
    <>
    <Card sx={styles.root} variant="outlined">
      <CardContent>
        <Typography variant="h5" component="h1">
          <FilterAltIcon fontSize="large" />
          Filter the Cast.
        </Typography>
        <TextField
          sx={styles.formControl}
          id="filled-search"
          label="Search field"
          type="search"
          value={nameFilter}
          variant="filled"
          onChange={handleTextChange}
        />
        <FormControl sx={styles.formControl}>
          <InputLabel id="gender-label">Gender</InputLabel>
          <Select
            labelId="gender-label"
            id="gender-select"
            value={genderFilter}
            onChange={handleGenderChange}
          >
            {genders.map((gender) => {
              return (
                <MenuItem key={gender.id} value={gender.id}>
                  {gender.name}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
      </CardContent>
    </Card>
      </>
  );
}

export default FilterCastCard;