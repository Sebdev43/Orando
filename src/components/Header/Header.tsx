import Nav from '../Nav/Nav';
import { NavLink } from 'react-router-dom';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useAppSelector } from '../../hooks/redux';
import './Header.scss';

// Components
import IconBreadcrumbs from '../Breadcrumbs/Breadcrumbs';
import NavTel from '../Nav/NavTel';

// utils
import { isTokenExpired } from '../../utils/decodeJwt';

// Le composant actuel
function Header() {
  const token = localStorage.getItem('token');
  const expiredToken = isTokenExpired(token as string) as boolean;

  // Récupération des états provenants du store que l'on stocke en copie locale
  const widthMediaScreen = useAppSelector(
    (state: any) => state.websiteSettings.widthMediaScreen
  );

  const isMobile = useMediaQuery(`(max-width:${widthMediaScreen}px)`);

  return (
    <header className="header">
      {/* Bouton connexion et compte en fonction de si connecté ou non */}
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
          {expiredToken ? 'Se connecter' : 'Mon compte'}
        </NavLink>
      )}

      {/* Logo O'rando */}
      <NavLink to={'/'}>
        <img
          src="/logo_fond_blanc.webp"
          alt="logo du site o'rando"
          className="header__top-logo"
          loading="lazy"
        />
      </NavLink>

      {/* Menu de navigation en fonction de si mobile ou non*/}
      {isMobile ? <NavTel /> : <Nav />}
      <IconBreadcrumbs />
    </header>
  );
}

export default Header;
