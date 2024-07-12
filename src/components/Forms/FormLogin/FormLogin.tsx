import { useForm } from 'react-hook-form';
import { Errors } from '../../../@types/form';
import './FormLogin.scss';
import { useAppDispatch } from '../../../hooks/redux';
import { postLoginDatas } from '../../../store/reducers/userConnection';

export type FormData = {
  email: string;
  password: string;
  errors?: Errors;
};

// The actual component
export default function FormLogin() {
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log(data);

    // TODO : envoyer les données au serveur via un dispatch sur le reducer user
    // dispatch(postLoginDatas(data));
    // TODO : indiquer les erreurs de validation au moment de l'envoi

    // TODO : rediriger l'utilisateur si validation OK (de la requête)
  };

  console.log(errors);

  return (
    <form className="form__login" onSubmit={handleSubmit(onSubmit)}>
      <span className="error__email">{errors.email?.message as string}</span>
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

      <input type="submit" />
    </form>
  );
}
