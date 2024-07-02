import { Typography } from '@mui/material';
import { Hike } from '../@types/hike';

// Put some color depends of the difficulty
// Attraper les couleurs qui coincident avec la difficulté
export const difficultyStyles: { [key: string]: { color: string } } = {
  Facile: { color: 'green' },
  Moyenne: { color: 'orange' },
  Difficile: { color: 'red' },
};

export const RenderDifficulty = (hike: Hike) => {
  const style = difficultyStyles[hike.difficulty] || {};
  return <Typography style={style}>{hike.difficulty}</Typography>;
};
