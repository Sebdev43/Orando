import React, { useEffect } from 'react';
import FormAccount from '../../components/Forms/FormAccount/FormAccount';
import { useAppSelector } from '../../hooks/redux';

// Le composant actuel est la page Mon compte
function Account() {
  const token = useAppSelector((state) => state.userConnection.token);

  return (
    <section>
      {token ? (
        <FormAccount />
      ) : (
        <p>Veuillez vous connecter pour accéder à votre compte.</p>
      )}
    </section>
  );
}

export default Account;
