import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import {
  changeEditingField,
  getUserDatas,
  patchUserDatas,
} from '../../../store/reducers/userAccount';
import locations from '../../../data/departements.json';
import './FormAccount.scss';

// Le typage des données
import { FormData } from '../../../@types/form';

// MUI
import { Button } from '@mui/joy';

// Le composant actuel
export default function FormAccount() {
  const dispatch = useAppDispatch();

  // on récupère le state dans userAccountReducer
  const credentials = useAppSelector((state) => state.userAccount.credentials);
  const editingField = useAppSelector(
    (state) => state.userAccount.editingField
  );
  const passwordError = useAppSelector(
    (state) => state.userAccount.passwordError
  );

  // les states locaux pour le formulaire
  // const [editingField, setEditingField] = useState<string | null>(null);
  // const [passwordError, setPasswordError] = useState<string | null>(null);

  useEffect(() => {
    dispatch(getUserDatas());
  }, [dispatch, credentials]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    if (data.nickname === credentials.nickname) {
      return dispatch(changeEditingField(null));
    }
    console.log('Dans le submit : ', data);
    dispatch(patchUserDatas(data as any));
    handleCancel();
  };

  const handleCancel = () => {
    dispatch(changeEditingField(null));
    // setPasswordError(null);
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
            <button type="button" onClick={handleSubmit(onSubmit)}>
              OK
            </button>
            <button type="button" onClick={handleCancel}>
              Annuler
            </button>
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
            <span className="error__localisation">
              {errors.localisation?.message}
            </span>
            <button type="button" onClick={handleSubmit(onSubmit)}>
              OK
            </button>
            <button type="button" onClick={handleCancel}>
              Annuler
            </button>
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
            <span className="error__email">{errors.email?.message}</span>

            <button
              type="button"
              onClick={() => dispatch(changeEditingField(null))}
            >
              OK
            </button>
            <button type="button" onClick={handleCancel}>
              Annuler
            </button>
          </section>
        ) : (
          <section>
            <span>{credentials.email}</span>{' '}
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
              type="password"
              placeholder="Mot de passe actuel"
              {...register('currentPassword', {
                required: 'Vous devez entrer votre mot de passe actuel',
              })}
            />
            <input
              type="password"
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
              type="password"
              placeholder="Confirmer le nouveau mot de passe"
              {...register('confirmPassword', {
                required: 'Vous devez confirmer votre mot de passe',
              })}
            />
            {passwordError && <span className="error">{passwordError}</span>}
            <span className="error__password">
              {errors.currentPassword?.message}
            </span>
            <span className="error__password">
              {errors.newPassword?.message}
            </span>
            <span className="error__password">
              {errors.confirmPassword?.message}
            </span>

            <Button
              onClick={handleSubmit(onSubmit)}
              variant="solid"
              color="primary"
              size="sm"
              sx={{ width: '25%' }}
            >
              OK
            </Button>
            <button type="button" onClick={handleCancel}>
              Annuler
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
          </section>
        )}
      </section>
      {/* 
        
        
        */}
      {/* </form> */}
      {/* 
      
      
      
      */}
      <button className="form-account__favorites">Accéder à mes favoris</button>
      <button className="form-account__delete">SUPPRIMER LE COMPTE</button>
    </section>
  );
}
