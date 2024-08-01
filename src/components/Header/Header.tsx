import { NavLink } from 'react-router-dom';
import useMediaQuery from '@mui/material/useMediaQuery';
import Nav from '../Nav/Nav';
import { useAppSelector } from '../../hooks/redux';
import './Header.scss';

// Components
import IconBreadcrumbs from '../Breadcrumbs/Breadcrumbs';
import NavTel from '../Nav/NavTel';

// utils
import isTokenExpired from '../../utils/decodeJwt';

// Le composant actuel
function Header() {
  const token = localStorage.getItem('token');
  const expiredToken = isTokenExpired(token as string) as boolean;

  // Récupération des états provenants du store que l'on stocke en copie locale
  const widthMediaScreen = useAppSelector(
    (state) => state.websiteSettings.widthMediaScreen
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
          to={expiredToken ? '/connexion' : '/mon-compte'}
        >
          {/* Le bouton Se Connecter évolue selon l'état connecté ou non */}
          {expiredToken ? 'Se connecter' : 'Mon compte'}
        </NavLink>
      )}

      {/* Logo O'rando */}
      <NavLink to="/">
        <img
          src="/logo_fond_blanc.webp"
          alt="logo du site o'rando"
          className="header__top-logo"
          loading="lazy"
        />
      </NavLink>

      {/* Menu de navigation en fonction de si mobile ou non */}
      {isMobile ? <NavTel /> : <Nav />}
      <IconBreadcrumbs />
    </header>
  );
}

export default Header;
