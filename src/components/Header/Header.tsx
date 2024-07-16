import Nav from '../Nav/Nav';
import { NavLink } from 'react-router-dom';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useAppSelector } from '../../hooks/redux';
import './Header.scss';

// Components
import IconBreadcrumbs from '../Breadcrumbs/Breadcrumbs';
import NavTel from '../Nav/NavTel';

// Le composant actuel
function Header() {
  // Récupération des états provenants du store que l'on stocke en copie locale
  const isLogged = useAppSelector((state) => state.userConnection.isLogged);
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
          to={isLogged ? '/mon-compte' : '/connexion'}
        >
          {isLogged ? 'Mon compte' : 'Se connecter'}
        </NavLink>
      )}

      {/* Logo O'rando */}
      <NavLink to={'/'}>
        <img
          src="/logo_fond_blanc.webp"
          alt="logo du site o'rando"
          className="header__top-logo"
        />
      </NavLink>

      {/* Menu de navigation en fonction de si mobile ou non*/}
      {isMobile ? <NavTel /> : <Nav />}
      <IconBreadcrumbs />
    </header>
  );
}

export default Header;
