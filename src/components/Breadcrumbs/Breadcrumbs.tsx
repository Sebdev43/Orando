import './styles.scss';

import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import { NavLink, useLocation } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import FollowTheSignsSharpIcon from '@mui/icons-material/FollowTheSignsSharp';
import GrainIcon from '@mui/icons-material/Grain';
import { useState, useEffect } from 'react';

export default function IconBreadcrumbs() {
  const location = useLocation();
  const [previousLocation, setPreviousLocation] = useState(location);

  useEffect(() => {
    if (previousLocation.pathname !== location.pathname) {
      setPreviousLocation(location);
    }
  }, [location, previousLocation]);

  const generateBreadcrumbs = () => {
    const pathnames = location.pathname.split('/').filter((x) => x);
    console.log(pathnames);
    return (
      <Breadcrumbs aria-label="breadcrumb">
        <NavLink
          to="/"
          style={({ isActive }) => ({
            display: 'flex',
            alignItems: 'center',
            textDecoration: isActive ? 'underline' : 'none',
            color: isActive ? 'grey' : 'inherit',
          })}
        >
          <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
          Accueil
        </NavLink>

        {pathnames.map((value, index) => {
          const to = `/${pathnames.slice(0, index + 1).join('/')}`;
          const isLast = index === pathnames.length - 1;

          return isLast ? (
            <Typography
              key={to}
              sx={{ display: 'flex', alignItems: 'center' }}
              color="text.primary"
            >
              {index === 1 ? (
                <GrainIcon sx={{ mr: 0.5 }} fontSize="inherit" />
              ) : (
                <FollowTheSignsSharpIcon sx={{ mr: 0.5 }} fontSize="inherit" />
              )}
              {value.charAt(0).toUpperCase() + value.slice(1)}
            </Typography>
          ) : (
            <NavLink
              key={to}
              to={to}
              style={({ isActive }) => ({
                display: 'flex',
                alignItems: 'center',
                textDecoration: isActive ? 'underline' : 'none',
                color: isActive ? 'blue' : 'inherit',
              })}
            >
              {index === 1 ? (
                <WhatshotIcon sx={{ mr: 0.5 }} fontSize="inherit" />
              ) : (
                <GrainIcon sx={{ mr: 0.5 }} fontSize="inherit" />
              )}
              {value.charAt(0).toUpperCase() + value.slice(1)}
            </NavLink>
          );
        })}
      </Breadcrumbs>
    );
  };

  return (
    <div role="presentation">
      <Breadcrumbs aria-label="breadcrumb">{generateBreadcrumbs()}</Breadcrumbs>
    </div>
  );
}
