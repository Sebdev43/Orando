import { useForm } from 'react-hook-form';
import { Errors } from '../../../@types/form';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { postResetDatas } from '../../../store/reducers/userConnection';
import './FormLoginReset.scss';

// Le typage des données
export type FormData = {
  email: string;
};

// Le composant actuel
export default function FormLogin() {
  const resetMessage = useAppSelector(
    (state) => state.userConnection.resetMessage
  );
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log(data);
    //TODO corriger car la requête renvoit un password
    dispatch(postResetDatas(data));
  };

  // Le rendu final du composant
  return (
    <>
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
        <input type="submit" />
      </form>

      {/* un message qui rend l'état de la requête */}
      {resetMessage && (
        <p
          style={{ textAlign: 'center', fontWeight: 'bold', color: 'red' }}
          className="form__login__message"
        >
          {resetMessage}
        </p>
      )}
    </>
  );
}
