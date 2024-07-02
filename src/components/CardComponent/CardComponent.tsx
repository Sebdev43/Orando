import { NavLink } from 'react-router-dom';
import { Hike } from '../../@types/hike';

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

function CardComponent(hike: Hike) {
  // Put some color depends of the difficulty
  function renderDificulty() {
    switch (hike.difficulty) {
      case 'Facile':
        return (
          <Typography color="success" level="body-sm">
            {hike.difficulty}
          </Typography>
        );
      case 'Moyenne':
        return (
          <Typography color="warning" level="body-sm">
            {hike.difficulty}
          </Typography>
        );
      case 'Difficile':
        return (
          <Typography color="danger" level="body-sm">
            {hike.difficulty}
          </Typography>
        );
      default:
        return <Typography level="body-sm">{hike.difficulty}</Typography>;
    }
  }

  return (
    <NavLink to={`/randonnees/${hike.slug}`} className="no-decoration">
      <Card variant="outlined" sx={{ width: 360, height: 500 }}>
        <CardOverflow>
          {/* Image */}
          <AspectRatio ratio="1">
            <img
              src={hike.pictures[1]}
              srcSet="https://images.unsplash.com/photo-1532614338840-ab30cf10ed36?auto=format&fit=crop&w=318&dpr=2 2x"
              loading="lazy"
              alt=""
            />
          </AspectRatio>
          {/* Booksmarks button */}
          <IconButton
            aria-label="Like minimal photography"
            size="sm"
            variant="plain"
            sx={{
              position: 'absolute',
              zIndex: 2,
              borderRadius: '50%',
              right: '0.5rem',
              bottom: 330,
              transform: 'translateY(50%)',
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
          <h3 className="card__title">{hike.title}</h3>
        </CardContent>
        {/* Card footer */}
        <CardOverflow variant="soft">
          <Divider inset="context" />
          {/* Card tags */}
          <CardContent orientation="horizontal">
            <Typography level="body-sm">{hike.localisation}</Typography>
            <Divider orientation="vertical" />
            <Typography level="body-sm">{hike.distance} km</Typography>
            <Divider orientation="vertical" />
            {renderDificulty()}
          </CardContent>
        </CardOverflow>
      </Card>
    </NavLink>
  );
}
export default CardComponent;
