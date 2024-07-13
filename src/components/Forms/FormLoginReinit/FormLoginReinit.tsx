import { useForm } from 'react-hook-form';
import { Errors } from '../../../@types/form';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import './FormLoginReinit.scss';
import { useState } from 'react';

// Le typage des données
export type FormData = {
  nickname: string;
  localisation: string;
  email: string;
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
};

// Le composant actuel
export default function FormReinit() {
  // récupération du token depuis le store
  const token = useAppSelector((state) => state.userConnection.token);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<FormData>();

  // Etat local pour le formulaire
  const [editingField, setEditingField] = useState<string | null>(null);
  const [passwordError, setPasswordError] = useState<string | null>(null);

  const onSubmit = (data: FormData) => {
    if (data.newPassword !== data.confirmPassword) {
      setPasswordError('Les nouveaux mots de passe ne correspondent pas');
      return;
    }

    // Logique pour vérifier le mot de passe actuel et changer pour le nouveau mot de passe
    console.log('Current Password:', data.currentPassword);
    console.log('New Password:', data.newPassword);
    handleCancel();
  };

  const handleEdit = (field: string) => {
    setEditingField(field);
  };

  const handleCancel = () => {
    setEditingField(null);
    setValue('currentPassword', '');
    setValue('newPassword', '');
    setValue('confirmPassword', '');
    setPasswordError(null);
  };

  // Le rendu final du composant
  return (
    <section className="form-account">
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Password */}
        <section className="form-account__field">
          <label>Mot de passe :</label>
          {editingField === 'password' ? (
            <section>
              {/* 1er input : nouveau mot de passe*/}
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
                    message:
                      'Le mot de passe doit avoir moins de 20 caractères',
                  },
                  pattern: {
                    value:
                      /^(?! )(?!.* $)(?!.* {2})(?=.{1,20}$)(?=(?:[^a-zA-Z0-9]*[a-zA-Z0-9]){8})(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[\w\W]*$/i,
                    message:
                      'Le mot de passe doit contenir au moins 1 majuscule, 1 minuscule, 1 chiffre et un caractère speciaux',
                  },
                })}
              />

              {/* 2e input : validation du nouveau mot de passe */}
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

              <button type="button" onClick={handleSubmit(onSubmit)}>
                OK
              </button>
              <button type="button" onClick={handleCancel}>
                Annuler
              </button>
            </section>
          ) : (
            <section>
              <span>********</span>
              <button type="button" onClick={() => handleEdit('password')}>
                Modifier
              </button>
            </section>
          )}
        </section>
      </form>
    </section>
  );
}
