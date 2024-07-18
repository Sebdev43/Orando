import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { useNavigate } from 'react-router-dom';
import {
  actionToLogout,
  changeEditingField,
  clearErrorUserDatas,
  deleteAccount,
  getUserDatas,
  patchUserDatas,
} from '../../../store/reducers/userAccount';
import './FormAccount.scss';

// Local datas
import locations from '../../../data/departements.json';

// Le typage des données
import { tokenLogout } from '../../../store/reducers/userConnection';
import { Button } from '@mui/material';

// ----------------------------------  Le composant actuel
export default function FormAccount() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  // on récupère les propriétés du state userAccount dans userAccountReducer
  const credentials = useAppSelector((state) => state.userAccount.credentials);
  const errorUserDatas = useAppSelector(
    (state) => state.userAccount.errorUserDatas
  );

  // on récupère les infos dans le reducer (qui viennent de la BDD)
  useEffect(() => {
    dispatch(getUserDatas());
  }, [credentials, dispatch]);

  // TODO button ok

  // TODO button cancel
  const handleCancel = () => {
    dispatch(changeEditingField(null));
  };
  // button logout
  const handleLogout = () => {
    localStorage.removeItem('token');
    dispatch(tokenLogout());
    dispatch(actionToLogout());
    navigate('/');
  };
  //  button delete account
  const handleDeleteAccount = () => {
    dispatch(deleteAccount());
    dispatch(actionToLogout());
    localStorage.removeItem('token');
    navigate('/');
  };

  // button réinit
  const handleReinitPassword = () => {
    navigate('/connexion/reset');
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>, field?: string) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const testValue = formData.get(`${field}`);
    const data = {
      [`${field}`]: testValue,
    };
    console.log(data);
    dispatch(patchUserDatas(data));
    dispatch(clearErrorUserDatas());
  };

  // Le rendu final du composant
  return (
    <section className="form">
      <h2>Modifier le compte</h2>
      <p className="form__error-message">
        {errorUserDatas ? errorUserDatas : ''}
      </p>

      <form
        className="form__container"
        onSubmit={(e) => onSubmit(e, 'nickname')}
      >
        <label className="form__labels-form" htmlFor="test">
          Pseudo :
        </label>
        <input
          className="form__field"
          type="text"
          placeholder={credentials.nickname}
          name="nickname"
          id="test"
          // value={credentials.nickname}
        />
        <input type="submit" className="form__update-button" />
      </form>

      <form
        className="form__container"
        onSubmit={(e) => onSubmit(e, 'localisation')}
      >
        <label className="form__labels-form" htmlFor="localisation">
          Localisation :{' '}
        </label>
        <select name="localisation" id="">
          <option value={credentials.localisation}>
            {credentials.localisation}
          </option>
          {locations.map((location) => (
            <option key={location.code} value={location.nom}>
              {location.nom}
            </option>
          ))}
        </select>
        <input type="submit" className="form__update-button" />
      </form>

      <form className="form__container" onSubmit={(e) => onSubmit(e, 'email')}>
        <label className="form__labels-form" htmlFor="email">
          Email :
        </label>
        <input
          className="form__field"
          type="mail"
          placeholder={credentials.email}
          name="email"
          id="test"
          // value={credentials.email}
        />
        <input type="submit" className="form__update-button" />
      </form>

      <button className="form__reinit-button" onClick={handleReinitPassword}>
        Réinitialiser le mot de passe
      </button>
      <button className="form__send-button" onClick={handleLogout}>
        Se déconnecter
      </button>
      <br />

      <Button
        className="delete-button"
        onClick={handleDeleteAccount}
        variant="contained"
        color="error"
        sx={{ width: '160px', margin: '0 auto', marginTop: '4rem' }}
      >
        Supprimer mon compte
      </Button>
    </section>
  );
}
