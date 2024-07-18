import { isTokenExpired } from '../../utils/decodeJwt';
import { useNavigate } from 'react-router-dom';
import { tokenLogout } from '../../store/reducers/userConnection';
import { actionToLogout } from '../../store/reducers/userAccount';
import { useAppDispatch } from '../../hooks/redux';

import './Account.scss';

// MUI
import { Button } from '@mui/material';

// Le composant actuel est la page Mon compte
export default function AccountDelete() {
  const token = localStorage.getItem('token') as string;
  const expiredToken = isTokenExpired(token);

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  return expiredToken ? (
    navigate('/connexion')
  ) : (
    <main className="delete__account-wrapper">
      <h1>Suppression totale du compte</h1>
      <section className="delete__account-container">
        <h3>Voulez vous vraiment supprimer votre compte ?</h3>
        <span>toutes les infos seront définitivement supprimées</span>
        <Button
          className="delete-button"
          onClick={() => {
            dispatch(tokenLogout());
            dispatch(actionToLogout());
            localStorage.removeItem('token');
          }}
          variant="contained"
          color="error"
          sx={{
            width: '160px',
            margin: '0 auto',
            marginTop: '4rem',
            marginBottom: '1rem',
            fontWeight: 'bold',
          }}
        >
          Supprimer mon compte
        </Button>
      </section>
    </main>
  );
}
