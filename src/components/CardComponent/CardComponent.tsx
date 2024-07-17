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
export default function CardComponent(hike: Hike) {
  function actionToBookmarks(id: number) {
    console.log(id);
  }

  return (
    <>
      <NavLink to={`/randonnees/${hike.id}`} className="no-decoration">
        <Card
          className="card"
          variant="outlined"
          sx={{ width: 400, height: 640 }}
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
            <div className="card__description">
              <Typography level="body-sm">
                {cutText(hike.description)}
              </Typography>
            </div>
          </CardContent>

          {/* Card footer */}
          <CardOverflow variant="soft">
            <Divider inset="context" />

            {/* Card tags */}
            <CardContent
              orientation="horizontal"
              className="card__tags"
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '10px',
                backgroundColor: '#f5f5f5',
                borderRadius: '8px',

                '& .column': {
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  '& .MuiTypography-root': {
                    fontSize: '14px',
                    color: '#555',
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                  },
                },
                '& .localisation-column': {
                  flexBasis: '50%',
                  flexGrow: 2,
                  textAlign: 'left',
                },
                '&.other-column': {
                  flexBasis: '25%',
                  flexGrow: 1,
                },
              }}
            >
              <div className="column localisation-column">
                <Typography level="body-sm">Localisation:</Typography>
                <Typography level="body-sm">{hike.localisation}</Typography>
              </div>

              <div className="column other-column">
                <Typography level="body-sm">Marche:</Typography>
                <Typography level="body-sm">
                  {formatHikeTime(hike.time)}
                </Typography>
              </div>

              <div className="column other-column">
                <Typography level="body-sm">Difficulté:</Typography>
                <div className="column other-column">
                  {RenderDifficulty(hike)}
                </div>
              </div>

              {/* <Typography level="body-sm">Localisation :</Typography>

              <Typography level="body-sm">{hike.localisation}</Typography>

              <Typography level="body-sm">Marche :</Typography>

              <Typography level="body-sm">
                {formatHikeTime(hike.time)}
              </Typography>
              <Typography level="body-sm">Difficulté :</Typography>
              {RenderDifficulty(hike)} */}
            </CardContent>
          </CardOverflow>
        </Card>
      </NavLink>
    </>
  );
}
