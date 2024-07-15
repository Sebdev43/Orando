import { NavLink } from 'react-router-dom';
import './Nav.scss';

function Nav() {
  return (
    <nav className="menu">
      <NavLink
        className={({ isActive }) =>
          isActive ? 'menu-link menu-link--active' : 'menu-link'
        }
        to="/"
      >
        Accueil
      </NavLink>

      <NavLink
        className={({ isActive }) =>
          isActive ? 'menu-link menu-link--active' : 'menu-link'
        }
        to="/randonnees"
      >
        Voir les Randos
      </NavLink>

      <NavLink
        className={({ isActive }) =>
          isActive ? 'menu-link menu-link--active' : 'menu-link'
        }
        to="/favoris"
      >
        Favoris
      </NavLink>

      <NavLink
        className="nav-link-ephemere"
        //         to="/connexion/reinit/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjMsImVtYWlsIjoidG90bzQ1QGdtYWlsLmNvbSIsImlhdCI6MTcyMTAyOTg5OCwiZXhwIjoxNzIxMDMzNDk4fQ.06jrQONzHD-hbUQF77Ks63SnfTGkFw1zW9FJuv-h_cc
        // "
        to="/connexion/reinit/?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjYsImlhdCI6MTcyMTA0ODM1NCwiZXhwIjoxNzIxMDUxOTU0fQ.TBmi9zLJAug6NwCz12vWrgCfXXoVSLVNfvD8oD5HnCE
"
      >
        REINIT
      </NavLink>
    </nav>
  );
}

export default Nav;
