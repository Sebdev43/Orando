import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import {
  changeDifficulty,
  changeLocalisation,
  changeTime,
} from '../../store/reducers/hikesFiltersReducer';

// utils
import { formatHikeTime } from '../../utils/regEx';

// components from MUI
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';

export default function HikesFilters() {
  const dispatch = useAppDispatch();
  const currentLocation = useAppSelector(
    (state) => state.hikesFilters.localisation
  );
  const currentDifficulty = useAppSelector(
    (state) => state.hikesFilters.difficulty
  );
  const currentTime = useAppSelector((state) => state.hikesFilters.time);

  // on reprend les données du store pour les randonnées
  const hikes = useAppSelector((state) => state.hikes.list);
  // 1er select : récupérer toutes les localisations dans un tableau
  const locations = [...new Set(hikes.map((hike) => hike.localisation))];
  // 2e select : récupérer toutes les difficultés
  const difficulties = [...new Set(hikes.map((hike) => hike.difficulty))];
  // 3e select : récupérer tous les temps de marche
  const times = [...new Set(hikes.map((hike) => hike.time))];

  return (
    <>
      <div className="hikes__filter-localisation">
        <Box sx={{ width: 250, mt: 3 }}>
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
              <MenuItem value={''}>Aucun</MenuItem>

              {locations?.map((location, index) => (
                <MenuItem key={index} value={location as string}>
                  {location as string}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
      </div>

      <div className="hikes__filter-difficulty">
        <Box sx={{ width: 250, mt: 3 }}>
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
              <MenuItem value={''}>Aucune</MenuItem>

              {difficulties?.map((location, index) => (
                <MenuItem key={index} value={location}>
                  {location}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
      </div>

      <div className="hikes__filter-time">
        <Box sx={{ width: 250, mt: 3 }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">
              Temps de marche approximatif
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={currentTime}
              label="Temps de marche approximatif"
              onChange={(event) =>
                dispatch(changeTime(event.target.value as number))
              }
            >
              <MenuItem value={''}>Aucun</MenuItem>

              {times?.map((time, index) => (
                <MenuItem key={index} value={time}>
                  {formatHikeTime(time)}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
      </div>
    </>
  );
}
