import { useState } from 'react';
import { useForm } from 'react-hook-form';
import './FormAccount.scss';
import { Button } from '@mui/joy';

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
export default function FormAccount() {
  const [editingField, setEditingField] = useState<string | null>(null);
  const [passwordError, setPasswordError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    getValues,
  } = useForm<FormData>({
    defaultValues: {
      nickname: 'Heike13',
      localisation: '13 - Bouches du Rhône',
      email: 'matthias@schooloclock.com',
      currentPassword: 'Henricour16!',
      newPassword: '',
      confirmPassword: '',
    },
  });

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
      <h2>Précisez vos informations pour créer un compte</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
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
              <span className="error__nickname">
                {errors.nickname?.message}
              </span>
              <button type="button" onClick={() => setEditingField(null)}>
                OK
              </button>
              <button type="button" onClick={handleCancel}>
                Annuler
              </button>
            </section>
          ) : (
            <section>
              <span>{getValues('nickname')}</span>
              <button type="button" onClick={() => handleEdit('nickname')}>
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
              <input
                type="text"
                {...register('localisation', {
                  required: 'Vous devez choisir un département',
                })}
              />
              <span className="error__localisation">
                {errors.localisation?.message}
              </span>
              <button type="button" onClick={() => setEditingField(null)}>
                OK
              </button>
              <button type="button" onClick={handleCancel}>
                Annuler
              </button>
            </section>
          ) : (
            <section>
              <span>{getValues('localisation')}</span>
              <button type="button" onClick={() => handleEdit('localisation')}>
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
              <button type="button" onClick={() => setEditingField(null)}>
                OK
              </button>
              <button type="button" onClick={handleCancel}>
                Annuler
              </button>
            </section>
          ) : (
            <section>
              <span>{getValues('email')}</span>
              <button type="button" onClick={() => handleEdit('email')}>
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
              <span>********</span>
              <button type="button" onClick={() => handleEdit('password')}>
                Modifier
              </button>
            </section>
          )}
        </section>
      </form>
      <button className="form-account__favorites">Accéder à mes favoris</button>
      <button className="form-account__delete">SUPPRIMER LE COMPTE</button>
    </section>
  );
}
