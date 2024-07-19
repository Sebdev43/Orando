import { NavLink, useNavigate } from 'react-router-dom';
import { Hike } from '../../@types/hike';
import { useAppSelector } from '../../hooks/redux';
import { isTokenExpired } from '../../utils/decodeJwt';
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
import Bookmarks from '../BookmarkActions/BookmarkActions';

// Le composant actuel
export default function CardComponent(hike: Hike) {
  const token = useAppSelector((state) => state.userConnection.token) as string;
  const tokenIsExpired = isTokenExpired(token);

  return (
    <>
      {' '}
      <Card
        className="card"
        variant="outlined"
        sx={{ width: 400, height: 630 }}
      >
        <CardOverflow>
          {/* Bookmarks */}
          {tokenIsExpired ? null : <Bookmarks id={hike.id} />}

          {/* Photo */}
          <AspectRatio ratio="1">
            <img src={hike.pictures[0]} loading="lazy" alt="" />
          </AspectRatio>
        </CardOverflow>

        {/* Le nav link qui permet de voyager vers la page de la randonne */}
        <NavLink to={`/randonnees/${hike.id}`} className="no-decoration">
          {/* Card content */}
          <CardContent
            className="card__content"
            sx={{ maxHeight: 'fit-content' }}
          >
            <h3 className="card__title">{hike.title}</h3>
            <div className="card__description">
              <Typography level="body-sm">
                {cutText(hike.description)}
              </Typography>
            </div>
          </CardContent>
        </NavLink>

        {/* Card footer */}
        <CardOverflow variant="soft">
          <Divider inset="context" />

          {/* Card tags */}
          <CardContent
            orientation="horizontal"
            className="card__tags"
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              // padding: '10px',
              // gap: '1rem 1rem',
              backgroundColor: '#f5f5f5',
              borderRadius: '8px',
              '& .column': {
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                '& .MuiTypography-root': {
                  fontSize: '0.8rem',
                  color: '#555',
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                },
              },
              '& .localisation-column': {
                flexBasis: '33%',
                textAlign: 'left',
              },
              '& .time-column': {
                flexBasis: '33%',
              },
              '& .difficulty-column': {
                flexBasis: '33%',
              },
            }}
          >
            <div className="column localisation-column">
              <Typography level="body-sm">Localisation:</Typography>
              <Typography level="body-sm">{hike.localisation}</Typography>
            </div>

            <div className="column time-column">
              <Typography level="body-sm">Marche:</Typography>
              <Typography level="body-sm">
                {formatHikeTime(hike.time)}
              </Typography>
            </div>

            <div className="column difficulty-column">
              <Typography level="body-sm">Difficulté:</Typography>
              <div className="column other-column">
                {RenderDifficulty(hike)}
              </div>
            </div>
          </CardContent>
        </CardOverflow>
      </Card>
    </>
  );
}
