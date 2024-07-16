import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { useNavigate } from 'react-router-dom';

import {
  actionToLogout,
  changeEditingField,
  deleteAccount,
  getUserDatas,
  patchUserDatas,
} from '../../../store/reducers/userAccount';
import './FormAccount.scss';

// Local datas
import locations from '../../../data/departements.json';

// Le typage des données
import { FormData } from '../../../@types/form';
import { tokenLogout } from '../../../store/reducers/userConnection';

// ----------------------------------  Le composant actuel
export default function FormAccount() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  // on récupère les propriétés du state userAccount dans userAccountReducer
  const credentials = useAppSelector((state) => state.userAccount.credentials);
  const editingField = useAppSelector(
    (state) => state.userAccount.editingField
  );

  // on récupère les infos dans le reducer (qui viennent de la BDD)
  useEffect(() => {
    dispatch(getUserDatas());
  }, [dispatch, credentials]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  // button ok
  const onSubmit = (data: FormData) => {
    if (data.nickname === credentials.nickname) {
      return dispatch(changeEditingField(null));
    }
    console.log('Dans le submit : ', data);
    dispatch(patchUserDatas(data as any));
    handleCancel();
  };

  // button cancel
  const handleCancel = () => {
    dispatch(changeEditingField(null));
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    dispatch(tokenLogout());
    dispatch(actionToLogout());
    navigate('/');
  };

  const handleDeleteAccount = () => {
    dispatch(deleteAccount());
    dispatch(actionToLogout());
    localStorage.removeItem('token');
    navigate('/');
  };

  // Le rendu final du composant
  return (
    <section className="form-account">
      <h2>Modifier le compte</h2>

      {/* Nickname */}
      <section className="form-account__field">
        <label>Pseudo :</label>
        {editingField === 'nickname' ? (
          <section>
            <input
              type="text"
              {...register('nickname', {
                required: 'Vous devez choisir un pseudo',
                minLength: {
                  value: 5,
                  message: 'La longueur minimale est de 5 caractères',
                },
                maxLength: {
                  value: 20,
                  message: 'La longueur maximale est de 20 caractères',
                },
                pattern: {
                  value:
                    /^(?! )(?!.* $)(?!.* {2})(?=.{1,20}$)(?=(?:[^a-zA-Z0-9]*[a-zA-Z0-9]){5})[\w\W]*$/i,
                  message: "Le pseudo n'est pas valide",
                },
              })}
            />
            <button className="btn-cancel" type="button" onClick={handleCancel}>
              Annuler
            </button>
            <button type="button" onClick={handleSubmit(onSubmit)}>
              OK
            </button>{' '}
            <br />
            {errors.nickname?.message}
          </section>
        ) : (
          <section>
            <span>{credentials.nickname}</span>
            <button
              type="button"
              onClick={() => dispatch(changeEditingField('nickname'))}
            >
              Modifier
            </button>
          </section>
        )}
      </section>

      {/* Localisation */}
      <section className="form-account__field">
        <label>Département :</label>
        {editingField === 'localisation' ? (
          <section>
            <select
              className="form__field__select"
              {...register('localisation', {
                required: 'Vous devez choisir un département',
              })}
            >
              <option value="">Choisissez un département</option>
              {locations.map((location) => (
                <option key={location.code} value={location.nom}>
                  {location.nom}
                </option>
              ))}
            </select>
            <button className="btn-cancel" type="button" onClick={handleCancel}>
              Annuler
            </button>
            <button type="button" onClick={handleSubmit(onSubmit)}>
              OK
            </button>
            <br />
            {errors.localisation?.message}
          </section>
        ) : (
          <section>
            <span>{credentials.localisation}</span>
            <button
              type="button"
              onClick={() => dispatch(changeEditingField('localisation'))}
            >
              Modifier
            </button>
          </section>
        )}
      </section>

      {/* Email */}
      <section className="form-account__field">
        <label>Adresse mail :</label>
        {editingField === 'email' ? (
          <section>
            <input
              type="email"
              {...register('email', {
                required: "L'email est obligatoire",
                pattern: {
                  value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
                  message: "L'email n'est pas valide",
                },
              })}
            />
            <button className="btn-cancel" type="button" onClick={handleCancel}>
              Annuler
            </button>
            <button type="button" onClick={handleSubmit(onSubmit)}>
              OK
            </button>
            <br />
            {errors.email?.message}
          </section>
        ) : (
          <section>
            <span>{credentials.email}</span>
            <button
              type="button"
              onClick={() => dispatch(changeEditingField('email'))}
            >
              Modifier
            </button>
          </section>
        )}
      </section>

      {/* Password */}
      <section className="form-account__field">
        <label>Mot de passe :</label>
        {editingField === 'password' ? (
          <section>
            <input
              type="text"
              placeholder="Mot de passe actuel"
              {...register('currentPassword', {
                required: 'Vous devez entrer votre mot de passe actuel',
              })}
            />
            <input
              type="text"
              placeholder="Nouveau mot de passe"
              {...register('newPassword', {
                required: 'Vous devez choisir un mot de passe',
                minLength: {
                  value: 8,
                  message: 'Le mot de passe doit avoir au moins 8 caractères',
                },
                maxLength: {
                  value: 20,
                  message: 'Le mot de passe doit avoir moins de 20 caractères',
                },
                pattern: {
                  value:
                    /^(?! )(?!.* $)(?!.* {2})(?=.{1,20}$)(?=(?:[^a-zA-Z0-9]*[a-zA-Z0-9]){8})(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[\w\W]*$/i,
                  message:
                    'Le mot de passe doit contenir au moins 1 majuscule, 1 minuscule, 1 chiffre et un caractère speciaux',
                },
              })}
            />
            <input
              type="text"
              placeholder="Confirmer le nouveau mot de passe"
              {...register('confirmPassword', {
                required: 'Vous devez confirmer votre mot de passe',
              })}
            />

            <button className="btn-cancel" type="button" onClick={handleCancel}>
              Annuler
            </button>
            <button type="button" onClick={handleSubmit(onSubmit)}>
              OK
            </button>
          </section>
        ) : (
          <section>
            <span>***********</span>
            <button
              type="button"
              onClick={() => dispatch(changeEditingField('password'))}
            >
              Modifier
            </button>
            <br />
            {errors.currentPassword?.message}
            {errors.newPassword?.message}
            {errors.confirmPassword?.message}
          </section>
        )}
      </section>

      <button className="form-account__logout" onClick={handleLogout}>
        Se déconnecter
      </button>
      <button className="form-account__delete" onClick={handleDeleteAccount}>
        SUPPRIMER LE COMPTE
      </button>
    </section>
  );
}
