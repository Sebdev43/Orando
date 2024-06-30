import { NavLink } from 'react-router-dom';
import './styles.scss';

function Footer() {
  return (
    <div className="footer">
      <section className="footer-nav">
        <NavLink className="footer-nav-links" to="/">
          Accueil
        </NavLink>
        <NavLink className="footer-nav-links" to="/randonnees">
          Voir les Randos
        </NavLink>
        <NavLink className="footer-nav-links" to="/favoris">
          Favoris
        </NavLink>
        <NavLink className="footer-nav-links" to="/mon-compte">
          Mon compte
        </NavLink>
        <NavLink className="footer-nav-links" to="/mentions-legales">
          Mentions légales
        </NavLink>
        <NavLink
          className="footer-nav-links"
          to="/politiques-de-confidentialite"
        >
          Politique de confidentialite
        </NavLink>
      </section>
      <span className="footer-copyright">© 2024 o'rando </span>
    </div>
  );
}

export default Footer;
