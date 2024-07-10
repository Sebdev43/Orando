import Nav from '../Nav/Nav';
import { NavLink } from 'react-router-dom';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useSelector } from 'react-redux';
import './Header.scss';

// Components
import IconBreadcrumbs from '../Breadcrumbs/Breadcrumbs';
import NavTel from '../Nav/NavTel';

function Header() {
  const widthMediaScreen = useSelector(
    (state: any) => state.websiteSettings.widthMediaScreen
  );

  const isMobile = useMediaQuery(`(max-width:${widthMediaScreen}px)`);

  return (
    <header className="header">
      {isMobile ? (
        ''
      ) : (
        <NavLink
          className={({ isActive }) =>
            isActive
              ? 'menu-link menu-link--active header__top-button'
              : 'menu-link header__top-button'
          }
          to={'/inscription'}
        >
          Se connecter
        </NavLink>
      )}
      <NavLink to={'/'}>
        <img
          src="/logo_fond_blanc.png"
          alt="logo du site o'rando"
          className="header__top-logo"
        />
      </NavLink>

      {isMobile ? <NavTel /> : <Nav />}
      <IconBreadcrumbs />
    </header>
  );
}

export default Header;
