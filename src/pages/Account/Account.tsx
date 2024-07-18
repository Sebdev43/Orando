import FormAccount from '../../components/Forms/FormAccount/FormAccount';
import { isTokenExpired } from '../../utils/decodeJwt';
import { NavLink, useNavigate } from 'react-router-dom';

// Le composant actuel est la page Mon compte
function Account() {
  const token = localStorage.getItem('token') as string;
  const expiredToken = isTokenExpired(token);

  return (
    <section>
      {expiredToken ? (
        <p className="bookmarks__not-logged">
          Vous devez vous <NavLink to="/connexion">connecter</NavLink>
          &nbsp;pour voir vos Favoris
        </p>
      ) : (
        <FormAccount />
      )}
    </section>
  );
}

export default Account;
