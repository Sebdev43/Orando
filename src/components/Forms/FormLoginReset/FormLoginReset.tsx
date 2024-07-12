import { useForm } from 'react-hook-form';
import { Errors } from '../../../@types/form';
import { useAppDispatch } from '../../../hooks/redux';
import './FormLoginReset.scss';

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
  );
}
