import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import Divider from '@mui/joy/Divider';
import Typography from '@mui/joy/Typography';
import IconButton from '@mui/joy/IconButton';
import Link from '@mui/joy/Link';
import Favorite from '@mui/icons-material/Favorite';
import { NavLink } from 'react-router-dom';

function CardComponent() {
  return (
    <NavLink to={'/randonnees/:slug'}>
      <Card variant="outlined" sx={{ width: 280 }}>
        <CardOverflow>
          <AspectRatio ratio="2">
            <img
              src="https://images.unsplash.com/photo-1532614338840-ab30cf10ed36?auto=format&fit=crop&w=318"
              srcSet="https://images.unsplash.com/photo-1532614338840-ab30cf10ed36?auto=format&fit=crop&w=318&dpr=2 2x"
              loading="lazy"
              alt=""
            />
          </AspectRatio>
          <IconButton
            aria-label="Like minimal photography"
            size="sm"
            variant="solid"
            color="danger"
            sx={{
              position: 'absolute',
              zIndex: 2,
              borderRadius: '50%',
              right: '1rem',
              bottom: 0,
              transform: 'translateY(50%)',
            }}
          >
            <Favorite />
          </IconButton>
        </CardOverflow>
        <CardContent>
          <Typography level="title-md">
            <Link overlay underline="none">
              Titre de la Rando
            </Link>
          </Typography>
        </CardContent>
        <CardOverflow variant="soft">
          <Divider inset="context" />
          <CardContent orientation="horizontal">
            <Typography level="body-xs">Difficulté</Typography>
            <Divider orientation="vertical" />
            <Typography level="body-xs">Distance</Typography>
            <Divider orientation="vertical" />
            <Typography level="body-xs">13-Bouches du Rhône</Typography>
          </CardContent>
        </CardOverflow>
      </Card>
    </NavLink>
  );
}
export default CardComponent;
