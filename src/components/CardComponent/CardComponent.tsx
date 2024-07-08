import { NavLink } from 'react-router-dom';
import { Hike } from '../../@types/hike';

// utils
import { RenderDifficulty } from '../../utils/renderTagDifficultyStyle';

// Import des dépendances MUI en lien avec les composants appelés
import AspectRatio from '@mui/joy/AspectRatio';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import Divider from '@mui/joy/Divider';
import Typography from '@mui/joy/Typography';
import IconButton from '@mui/joy/IconButton';
import Favorite from '@mui/icons-material/Favorite';
// import FavoriteBorder from '@mui/icons-material/FavoriteBorder';

import './CardComponent.scss';
import { formatHikeTime } from '../../utils/regEx';

function CardComponent(hike: Hike) {
  function actionToBookmarks(id: number) {
    console.log(id);
  }

  return (
    <Card className="card" variant="outlined" sx={{ width: 480, height: 700 }}>
      <CardOverflow>
        {/* Photo */}
        <AspectRatio ratio="1">
          <img src={hike.pictures[0]} loading="lazy" alt="" />
        </AspectRatio>
        {/* Booksmarks button */}
        {/* ligne 64 : la fonction qui va déclencher la logique liée à l'add/del d'un favori  */}
        <IconButton
          onClick={() => actionToBookmarks(hike.id)}
          aria-label="Like minimal photography"
          size="sm"
          variant="plain"
          sx={{
            position: 'absolute',
            zIndex: 2,
            borderRadius: '50%',
            right: '0.5rem',
            bottom: '-5.5rem',
            transform: 'translateY(120%)',
            color: 'red',
            '&:hover': { color: '#da7b29' },
          }}
        >
          {/*@TODO Add to bookmarks : if already in bookmarks, change to Favorite icons */}
          <Favorite />
        </IconButton>
      </CardOverflow>
      {/* Card content */}
      <CardContent>
        <NavLink to={`/randonnees/${hike.slug}`} className="no-decoration">
          <h3 className="card__title">{hike.title}</h3>
        </NavLink>
      </CardContent>
      {/* Card footer */}
      <CardOverflow variant="soft">
        <Divider inset="context" />
        {/* Card tags */}
        <CardContent orientation="horizontal">
          <Typography level="body-sm">{hike.localisation}</Typography>
          <Divider orientation="vertical" />
          <Typography level="body-sm">
            Temps de marche : <br />
            {formatHikeTime(hike.time)}
          </Typography>
          {/*j'appelle la fonction que j'ai déclaré précedemment pour gérer l'afficahge des couleurs fonction de la difficulté  */}
          <Divider orientation="vertical" />
          Difficulté {RenderDifficulty(hike)}
        </CardContent>
      </CardOverflow>
    </Card>
  );
}
export default CardComponent;
