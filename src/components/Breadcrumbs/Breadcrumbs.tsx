import './styles.scss';

import { NavLink, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

// import react component from MUI
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import HomeIcon from '@mui/icons-material/Home';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import FollowTheSignsSharpIcon from '@mui/icons-material/FollowTheSignsSharp';
import GrainIcon from '@mui/icons-material/Grain';

// Component name
export default function IconBreadcrumbs() {
  // Get the URL location with useLocation()
  const location = useLocation();

  // Set the state for the previous location which is gonna change
  const [previousLocation, setPreviousLocation] = useState(location);

  // Set the state when the URL location changes
  useEffect(() => {
    if (previousLocation.pathname !== location.pathname) {
      setPreviousLocation(location);
    }
  }, [location, previousLocation]);

  // Generate the final breadcrumbs
  const generateBreadcrumbs = () => {
    const pathnames = location.pathname.split('/').filter((x) => x);

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

  // Return the breadcrumbs component
  return (
    <div role="presentation">
      <Breadcrumbs aria-label="breadcrumb">{generateBreadcrumbs()}</Breadcrumbs>
    </div>
  );
}
