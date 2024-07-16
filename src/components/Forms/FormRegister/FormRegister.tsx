import { useForm } from 'react-hook-form';
import { Errors } from '../../../@types/form';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { postRegisterDatas } from '../../../store/reducers/userRegistration';
import { useEffect } from 'react';

import locations from '../../../data/departements.json';
import './FormRegister.scss';

// Le typage des données
export type FormData = {
  nickname: string;
  localisation: string;
  email: string;
  password: string;
  errors?: Errors;
};

// The actual component
export default function FormRegister() {
  const dispatch = useAppDispatch();

  // On récupère nos states venant du store qu'on stock dans une variable locale
  const isRegistered = useAppSelector(
    (state) => state.userRegistration.isRegistered
  );
  const messagesResponse = useAppSelector(
    (state) => state.userRegistration.messagesResponse
  );
  const sucessMessage = useAppSelector(
    (state) => state.userRegistration.successMessage
  );

  // Le register permet de recuperer les valeurs des champs du formulaire
  // afin de voir si elles sont valides ou non (dans la console)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  // envoi des données au reducer (direction le server back)
  const onSubmit = (data: FormData) => {
    dispatch(postRegisterDatas(data as any));
  };

  // création des messages d'erreurs pour mail et nickname
  const errorMessagesFromApi = messagesResponse.map((message, index) => {
    return (
      <span key={index}>
        {message}
        <br />
      </span>
    );
  });

  return (
    <>
      {isRegistered ? (
        sucessMessage
      ) : (
        <form className="form__register" onSubmit={handleSubmit(onSubmit)}>
          <span
            style={{ color: 'red', textAlign: 'center' }}
            className="form__register__server-response-message"
          >
            {messagesResponse ? errorMessagesFromApi : sucessMessage}
          </span>
          {/* <p>{messageResponse}</p> */}
          <span className="error__nickname">
            {errors.nickname?.message as string}
          </span>
          <input
            // doit avoir 1 chiffre et 1 caractère spécial + pas d'espace au début et à la fin
            type="text"
            placeholder="Pseudo"
            {...register('nickname', {
              required: 'Vous devez choisir un pseudo',
              min: {
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

          <span className="error__localisation">
            {errors.localisation?.message as string}
          </span>
          <select
            defaultValue="placeholder"
            {...register('localisation', {
              required: 'Vous devez choisir un departement',
            })}
          >
            <option disabled value="placeholder">
              Choisissez un département
            </option>
            {/* data qui vient du dossier data */}
            {locations.map((location, index) => (
              <option key={index} value="option">
                {location.nom}
              </option>
            ))}
          </select>

          <span className="error__email">
            {errors.email?.message as string}
          </span>
          <input
            type="text"
            placeholder="Adresse Email"
            {...register('email', {
              required: "L'email est obligatoire",
              pattern: {
                value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
                message: "L'email n'est pas valide",
              },
            })}
          />

          <span className="error__password">
            {errors.password?.message as string}
          </span>

          <input
            type="text"
            placeholder="Mot de passe"
            {...register('password', {
              required: 'Vous devez choisir un mot de passe',
              min: {
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
          {isRegistered ? null : (
            <input className="form__register__submit" type="submit" />
          )}
        </form>
      )}
    </>
  );
}
