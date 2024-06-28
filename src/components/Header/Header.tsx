import './styles.scss';
import Nav from '../Nav/Nav';
import { NavLink } from 'react-router-dom';
import IconBreadcrumbs from '../Breadcrumbs/Breadcrumbs';

function Header() {
  return (
    <div className="header">
      <NavLink className="header-top-button" to={'/connexion'}>
        Se connecter
      </NavLink>
      <NavLink to={'/'}>
        <img
          src="./src/assets/logo_fond_blanc.png"
          alt="logo du site o'rando"
          className="header-top-logo"
        />
      </NavLink>

      <Nav />
      <IconBreadcrumbs />
    </div>
  );
}

export default Header;
