import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import {
  changeDifficulty,
  changeLocalisation,
} from '../../store/reducers/hikesFiltersReducer';
import './HikeFilters.scss';

// components from MUI
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

function HikeFilters() {
  const dispatch = useAppDispatch();
  const currentLocation = useAppSelector(
    (state) => state.hikesFilters.localisation
  );
  const currentDifficulty = useAppSelector(
    (state) => state.hikesFilters.difficulty
  );

  // on reprend les données du store pour les randonnées
  const hikes = useAppSelector((state) => state.hikes.hikesList);
  // 1er select : récupérer toutes les localisations
  const locations = [...new Set(hikes.map((hike) => hike.localisation))];
  // 2e select : récupérer toutes les difficultés
  const difficulties = [...new Set(hikes.map((hike) => hike.difficulty))];

  return (
    <>
      <div className="hikes__filter">
        <Box sx={{ width: 200, mt: 3 }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Difficulté</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={currentDifficulty}
              label="Difficulté"
              onChange={(event) =>
                dispatch(changeDifficulty(event.target.value))
              }
            >
              <MenuItem value={''}>
                <ArrowRightIcon />
                TOUTES
              </MenuItem>

              {difficulties?.map((location, index) => (
                <MenuItem key={index} value={location}>
                  {location}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
      </div>
      <div className="hikes__filter">
        <Box sx={{ width: 200, mt: 3 }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Département</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={currentLocation}
              label="Département"
              onChange={(event) =>
                dispatch(changeLocalisation(event.target.value))
              }
            >
              <MenuItem value={''}>
                <ArrowRightIcon />
                TOUS
              </MenuItem>

              {locations?.map((location, index) => (
                <MenuItem key={index} value={location as string}>
                  {location as string}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
      </div>
    </>
  );
}

export default HikeFilters;
