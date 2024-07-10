// Components
import { NavLink } from 'react-router-dom';

// components
import FormRegister from '../../components/Forms/FormRegister/FormRegister';

// Actual (page) component
function SignUp() {
  return (
    <div className="signUp__container">
      <header>
        <h1 className="page_title">Créez votre compte</h1>

        <NavLink to="/connexion">
          <h4>
            Si vous possédez déjà un compte, connectez vous en cliquant sur ce
            lien
          </h4>
        </NavLink>
      </header>
      <main>
        <FormRegister />
      </main>
    </div>
  );
}

export default SignUp;
