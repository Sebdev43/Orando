import { useForm } from 'react-hook-form';

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);

    // TODO : envoyer les données au serveur via un dispatch sur le reducer user

    // TODO : indiquer les erreurs de validation au moment de l'envoi

    // TODO : rediriger l'utilisateur si validation OK (de la requête)
  };

  console.log(errors);

  return (
    <>
      <h1>Se connecter</h1>
      <form className="form__register" onSubmit={handleSubmit(onSubmit)}>
        <label>Adresse mail : </label>
        <input
          type="email"
          placeholder="Email"
          {...register('Email', {
            required: true,
            pattern: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
          })}
        />

        <label>Mot de passe : </label>
        <input
          type="password"
          placeholder="Password"
          {...register('Password', {
            required: true,
            max: 20,
            min: 8,
            maxLength: 20,
            pattern:
              /^(?! )(?!.* $)(?!.* {2})(?=.{1,20}$)(?=(?:[^a-zA-Z0-9]*[a-zA-Z0-9]){8})(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[\w\W]*$/i,
          })}
        />

        <input type="submit" />
      </form>
    </>
  );
}
