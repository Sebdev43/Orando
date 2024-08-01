import { NavLink } from 'react-router-dom';
import AspectRatio from '@mui/joy/AspectRatio';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import Divider from '@mui/joy/Divider';
import Typography from '@mui/joy/Typography';
import Bookmarks from '../BookmarkActions/BookmarkActions';
import { useAppSelector } from '../../hooks/redux';
import isTokenExpired from '../../utils/decodeJwt';
import './CardComponent.scss';

// Components
import RenderDifficulty from '../RenderTagDifficulty/RenderTagDifficultyStyle';

// Utils
import { cutText, formatHikeTime } from '../../utils/regEx';
import { Hike } from '../../@types/hike';

// Le composant actuel
export default function CardComponent(hike: Hike) {
  const token = useAppSelector((state) => state.userConnection.token) as string;
  const tokenVerified = isTokenExpired(token);

  return (
    <>
      {' '}
      <Card className="card" variant="outlined" sx={{ width: 400 }}>
        <CardOverflow>
          {/* Bookmark button */}
          {tokenVerified ? null : <Bookmarks id={hike?.id} />}

          {/* Photos */}
          <AspectRatio ratio="1">
            <img src={hike?.pictures[0]} loading="lazy" alt="" />
          </AspectRatio>
        </CardOverflow>

        {/* Le nav link qui permet de voyager vers la page de la randonne */}
        <NavLink to={`/randonnees/${hike?.id}`} className="no-decoration">
          {/* Card content */}
          <CardContent
            className="card__content"
            sx={{ maxHeight: 'fit-content' }}
          >
            <h3 className="card__title">{hike?.title}</h3>
            <div className="card__description">
              <Typography
                level="body-sm"
                sx={{
                  minHeight: '6rem',
                  marginTop: '1rem',
                }}
              >
                {cutText(hike?.description)}
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
            sx={{
              minHeight: '6rem',
              display: 'flex',
              flexWrap: 'wrap',
              backgroundColor: '#f5f5f5',
              borderRadius: '8px',
              '& .column': {
                display: 'flex',
                flexDirection: 'column',
                margin: 'auto',
                textAlign: 'center',
                marginBottom: '1rem',
              },
            }}
          >
            <div className="column">
              <Typography level="body-sm">Localisation :</Typography>
              <Typography level="body-sm">{hike?.localisation}</Typography>
            </div>

            <div className="column">
              <Typography level="body-sm">Marche :</Typography>
              <Typography level="body-sm">
                {formatHikeTime(hike?.time)}
              </Typography>
            </div>

            <div className="column">
              <Typography level="body-sm">Difficulté :</Typography>
              {RenderDifficulty(hike)}
            </div>
          </CardContent>
        </CardOverflow>
      </Card>
    </>
  );
}
