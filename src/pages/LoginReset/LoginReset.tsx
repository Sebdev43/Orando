import './LoginReset.scss';

// components
import FormLoginReset from '../../components/Forms/FormLoginReset/FormLoginReset';
import { NavLink } from 'react-router-dom';

// Le composant actuel est la page Réinitialiser le mot de passe
export default function Login() {
  return (
    <div className="login__container">
      <h1 className="page_title">Se connecter</h1>
      <FormLoginReset />
      <h4 className="title__no-account">
        Si vous ne possédez pas de compte, {''}
        <NavLink to="/inscription">créez votre compte</NavLink>
      </h4>
    </div>
  );
}
