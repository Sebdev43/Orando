import { useForm } from 'react-hook-form';
import { Errors } from '../../../@types/form';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { postLoginDatas } from '../../../store/reducers/userConnection';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './FormLogin.scss';

// Le typage des données
export type FormData = {
  email: string;
  password: string;
  errors?: Errors;
};

// Le composant actuel
export default function FormLogin() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const messageResponse = useAppSelector(
    (state) => state.userConnection.messageResponse
  );
  const isLogged = useAppSelector((state) => state.userConnection.isLogged);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    dispatch(postLoginDatas(data as any));
    console.log('je suis onSubmit', data);
  };

  // Redirige l'utilisateur vers la page d'accueil si le state change a true
  // "navigate" provient du hook useNavigate
  useEffect(() => {
    if (isLogged) {
      navigate('/randonnees');
    }
  }, [isLogged]);

  // Le rendu, en fonction de si l'utilisateur est connecté ou non
  return isLogged ? (
    ''
  ) : (
    <form className="form__login" onSubmit={handleSubmit(onSubmit)}>
      <span>{messageResponse}</span>

      <span className="error__email">{errors?.email?.message}</span>
      <input
        type="text"
        placeholder="Adresse Email"
        {...register('email', {
          required: "L'email est obligatoire",
          pattern: {
            value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i,
            message: "L'email n'est pas valide",
          },
        })}
      />

      <span className="error__password">{errors?.password?.message}</span>
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
