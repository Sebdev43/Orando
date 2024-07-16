import FormAccount from '../../components/Forms/FormAccount/FormAccount';

// Le composant actuel est la page Mon compte
function Account() {
  const token = localStorage.getItem('token');
  return (
    token && (
      <section>
        <FormAccount />
      </section>
    )
  );
}

export default Account;
