import { useForm } from 'react-hook-form';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button } from '@mui/joy';
import { useState } from 'react';
import { useAppDispatch } from '../../../hooks/redux';
import { postReinitDatas } from '../../../store/reducers/userConnection';
import './FormLoginReinit.scss';

// MUI

// Le typage des données
import { FormReinitData } from '../../../@types/form';
import isTokenExpired from '../../../utils/decodeJwt';

// ------------------------------------------- Le composant actuel
export default function FormReinit() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  // je récupère le token dans l'URL que je décode pour vérifier l'expiration
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const urlToken = searchParams.get('token') as string;

  // TODO a vérifier si ça marche sur le site
  // jwt-decode
  const expired = isTokenExpired(urlToken);

  if (expired) {
    console.log('Token is expired');
  } else {
    console.log('Token is still valid');
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormReinitData>();

  // Etat local pour le formulaire
  const [passwordError, setPasswordError] = useState<string | null>(null);

  const onSubmit = (data: FormReinitData) => {
    if (data.newPassword !== data.confirmPassword) {
      setPasswordError('Les nouveaux mots de passe ne correspondent pas');
    } else {
      const dataPack = { token: urlToken, newPassword: data.newPassword };
      dispatch(postReinitDatas(dataPack));
      navigate('/connexion');
    }
  };

  // Le rendu final du composant
  return (
    <section className="form-login-reinit">
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Password */}
        <section className="form-login-reinit__wrapper">
          <label htmlFor="newPassword">Mot de passe :</label>

          {/* 1er input : nouveau mot de passe */}
          <section className="form-login-reinit__password">
            {errors.newPassword && (
              <span className="error__password">
                {errors.newPassword?.message}
              </span>
            )}
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
          </section>

          {/* 2e input : validation du nouveau mot de passe */}
          <section>
            {errors.confirmPassword && (
              <span className="error__password">
                {errors.confirmPassword?.message}
              </span>
            )}
            <input
              type="password"
              placeholder="Confirmer le nouveau mot de passe"
              {...register('confirmPassword', {
                required: 'Vous devez confirmer votre mot de passe',
              })}
            />
          </section>

          {passwordError && <span className="error">{passwordError}</span>}

          <Button
            onClick={handleSubmit(onSubmit)}
            variant="solid"
            color="primary"
            size="sm"
            className="form-account__favorites"
            sx={{ width: '25%' }}
          >
            OK
          </Button>
        </section>
      </form>
    </section>
  );
}
