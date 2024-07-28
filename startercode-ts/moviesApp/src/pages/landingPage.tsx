import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import {Link} from 'react-router-dom';



const LandingPage: React.FC = () => {
  


  return (
    <>
      <ButtonGroup variant="contained" aria-label="Basic button group">
       <Link to="/movies">
          <Button variant="outlined" size="medium" color="primary">
            Movies Info ...
          </Button>
        </Link>
        <Link to="/tv/trendingNow">
          <Button variant="outlined" size="medium" color="primary">
            TV Info ...
          </Button>
        </Link>
        <Link to="/movies/persons">
          <Button variant="outlined" size="medium" color="primary">
            Cast Info ...
          </Button>
        </Link>
      </ButtonGroup>
    </>
  );
};
export default LandingPage;