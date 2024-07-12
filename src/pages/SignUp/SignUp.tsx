import './SignUp.scss';

// components
import FormRegister from '../../components/Forms/FormRegister/FormRegister';

// Actual (page) component
export default function SignUp() {
  return (
    <div className="signup__container">
      <h1 className="page_title">Créez votre compte</h1>
      <FormRegister />
    </div>
  );
}
