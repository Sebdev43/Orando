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

import './CardComponent.scss';

function CardComponent(hike: Hike) {
  return (
    <NavLink to={`/randonnees/${hike.slug}`} className="no-decoration">
      <Card variant="outlined" sx={{ width: 340 }}>
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
            variant="solid"
            color="danger"
            sx={{
              position: 'absolute',
              zIndex: 2,
              borderRadius: '50%',
              right: '0.5rem',
              bottom: 24,
              transform: 'translateY(50%)',
            }}
          >
            <Favorite />
          </IconButton>
        </CardOverflow>
        {/* Card content */}
        <CardContent>
          <h3>{hike.title}</h3>
        </CardContent>
        {/* Card footer */}
        <CardOverflow variant="soft">
          <Divider inset="context" />
          {/* Card tags */}
          <CardContent orientation="horizontal">
            <Typography level="body-xs">{hike.localisation}</Typography>
            <Divider orientation="vertical" />
            <Typography level="body-xs">{hike.difficulty}</Typography>
            <Divider orientation="vertical" />
            <Typography level="body-xs">Environ {hike.distance} km</Typography>
          </CardContent>
        </CardOverflow>
      </Card>
    </NavLink>
  );
}
export default CardComponent;
