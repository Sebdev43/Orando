import { Location } from '../../@types/hike';
import './Breadcrumbs.scss';

import { NavLink, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { useAppDispatch } from '../../hooks/redux';
import { changeLocation } from '../../store/reducers/breadcrumbsReducer';

// import react component from MUI
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import HomeIcon from '@mui/icons-material/Home';
import FollowTheSignsSharpIcon from '@mui/icons-material/FollowTheSignsSharp';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

// Component name
export default function IconBreadcrumbs() {
  // Preparation to use the actions of the reducer
  const dispatch = useAppDispatch();
  // Get the URL location with useLocation()
  const location: Location = useLocation();

  // Set the state when the URL location changes
  useEffect(() => {
    dispatch(changeLocation(location.pathname));
  }, [location]);

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
          <HomeIcon sx={{ mr: 0.5, mb: 0.5 }} fontSize="inherit" />
          Accueil
        </NavLink>

        {pathnames.map((value, index) => {
          const to = ``;
          const isLast = index === pathnames.length - 1;

          return isLast ? (
            <Typography
              key={to}
              sx={{ display: 'flex', alignItems: 'center' }}
              color="text.primary"
            >
              <FollowTheSignsSharpIcon
                sx={{ mr: 0.5, mb: 0.5 }}
                fontSize="inherit"
              />
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
                color: isActive ? 'grey' : 'inherit',
              })}
            >
              {/* Just an exemple to manage the icons about the positions on the index */}
              {/* {index === 1 ? (
                <ArrowRightIcon sx={{ mr: 0.5 }} fontSize="inherit" />
              ) : ( */}
              <ArrowRightIcon sx={{ mr: 0.5, mb: 0.5 }} fontSize="inherit" />
              {/* )} */}
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
      <Breadcrumbs className="breadcrumbs" aria-label="breadcrumb">
        {generateBreadcrumbs()}
      </Breadcrumbs>
    </div>
  );
}
