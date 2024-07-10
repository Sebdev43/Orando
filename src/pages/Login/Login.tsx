// components
import FormLogin from '../../components/Forms/FormLogin/FormLogin';

// Actual (page) component
export default function Login() {
  return (
    <div className="signUp__container">
      <header>
        <h1>Se connecter</h1>
      </header>
      <main>
        <FormLogin />
      </main>
    </div>
  );
}
