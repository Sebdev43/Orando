import { NavLink } from 'react-router-dom';
import { Hike } from '../../@types/hike';
import './CardComponent.scss';

// Components
import { RenderDifficulty } from '../RenderTagDifficulty/RenderTagDifficultyStyle';

// Utils
import { cutText, formatHikeTime } from '../../utils/regEx';

// Import des dépendances et composants MUI
import AspectRatio from '@mui/joy/AspectRatio';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import Divider from '@mui/joy/Divider';
import Typography from '@mui/joy/Typography';
import IconButton from '@mui/joy/IconButton';
import Favorite from '@mui/icons-material/Favorite';
import { Box } from '@mui/material';
// import FavoriteBorder from '@mui/icons-material/FavoriteBorder';

// Le composant actuel
function CardComponent(hike: Hike) {
  function actionToBookmarks(id: number) {
    console.log(id);
  }

  return (
    <>
      <NavLink to={`/randonnees/${hike.id}`} className="no-decoration">
        <Card
          className="card"
          variant="outlined"
          sx={{ width: 400, height: 620 }}
        >
          <CardOverflow>
            <IconButton
              onClick={() => actionToBookmarks(hike.id)}
              aria-label="Like minimal photography"
              size="sm"
              variant="plain"
              sx={{
                position: 'absolute',
                zIndex: 20,
                borderRadius: '50%',
                right: '0.3rem',
                bottom: '0.3rem',
                transform: 'translateY(0%)',
                color: 'red',
                '&:hover': { color: '#da7b29' },
              }}
            >
              <Favorite />
            </IconButton>
            {/* Photo */}
            <AspectRatio ratio="1">
              <img src={hike.pictures[0]} loading="lazy" alt="" />
            </AspectRatio>
          </CardOverflow>

          {/* Card content */}
          <CardContent>
            <h3 className="card__title">{hike.title}</h3>
            <Typography level="body-sm">{cutText(hike.description)}</Typography>
          </CardContent>

          {/* Card footer */}
          <CardOverflow variant="soft">
            <Divider inset="context" />

            {/* Card tags */}
            <CardContent orientation="horizontal" className="card__tags">
              <div>
                <Typography level="body-sm">Localisation :</Typography>
                <Typography level="body-sm">{hike.localisation}</Typography>
              </div>

              <div>
                <Typography level="body-sm">Marche :</Typography>
                <Typography level="body-sm">
                  {formatHikeTime(hike.time)}
                </Typography>
              </div>

              <div>
                <Typography level="body-sm">Difficulté :</Typography>
                {RenderDifficulty(hike)}
              </div>
            </CardContent>
          </CardOverflow>
        </Card>
      </NavLink>
    </>
  );
}
export default CardComponent;
