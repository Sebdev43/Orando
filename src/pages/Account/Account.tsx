import { NavLink } from 'react-router-dom';
import FormAccount from '../../components/Forms/FormAccount/FormAccount';
import { isTokenExpired } from '../../utils/decodeJwt';

// Le composant actuel est la page Mon compte
function Account() {
  const token = localStorage.getItem('token') as string;
  const expiredToken = isTokenExpired(token);

  return (
    <section>
      {expiredToken ? (
        <p className="bookmarks__not-logged" style={{ textAlign: 'center' }}>
          Vous devez vous <NavLink to="/connexion">connecter</NavLink>
          &nbsp;pour voir la page de votre compte
        </p>
      ) : (
        <FormAccount />
      )}
    </section>
  );
}

export default Account;
