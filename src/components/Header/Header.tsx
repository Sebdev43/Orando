import './styles.scss';
import Nav from '../Nav/Nav';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <div className="header">
      <div className="header-top">
        <NavLink to={'/'}>
          <img
            src="./src/assets/logo.svg"
            alt="logo du site o'rando"
            className="header-top-logo"
          />
        </NavLink>
        <NavLink className="header-top-button" to={'/connexion'}>
          Se connecter
        </NavLink>
      </div>
      <Nav />
    </div>
  );
}

export default Header;
