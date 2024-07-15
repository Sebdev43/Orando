import { useForm } from 'react-hook-form';
import { useAppDispatch } from '../../../hooks/redux';
import { postReinitDatas } from '../../../store/reducers/userConnection';
import { useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import './FormLoginReinit.scss';

// MUI
import { Button } from '@mui/joy';

// Le typage des données
export type FormReinitData = {
  newPassword: string;
  confirmPassword?: string;
  token?: string | null;
};

//---------------------------------------------------------- Le composant actuel
export default function FormReinit() {
  const dispatch = useAppDispatch();

  // je récupère le token dans l'URL
  const location = useLocation();
  // console.log(location);
  const searchParams = new URLSearchParams(location.search);
  // console.log(searchParams);
  const urlToken = searchParams.get('token');
  // console.log(urlToken);

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
      return;
    } else {
      const dataPack = { token: urlToken, newPassword: data.newPassword };
      console.log(dataPack);
      dispatch(postReinitDatas(dataPack));
    }
  };

  // Le rendu final du composant
  return (
    <section className="form-login-reinit">
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Password */}
        <section className="form-login-reinit__wrapper">
          <label>Mot de passe :</label>

          {/* 1er input : nouveau mot de passe*/}
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
            sx={{ width: '25%' }}
          >
            OK
          </Button>
        </section>
      </form>
    </section>
  );
}
