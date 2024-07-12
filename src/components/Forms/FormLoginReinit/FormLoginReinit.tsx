import { useForm } from 'react-hook-form';
import { Errors } from '../../../@types/form';
import { useAppDispatch } from '../../../hooks/redux';
import './FormLoginReinit.scss';

export type FormData = {
  email: string;
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
  };

  return (
    <form className="form__login" onSubmit={handleSubmit(onSubmit)}>
      <span className="error__email">{errors.email?.message as string}</span>
      <p>METTRE ICI LES CHAMPS PASSWORD COMME SUR LA PAGE COMPTE</p>
    </form>
  );
}
