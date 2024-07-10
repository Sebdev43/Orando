import { useForm } from 'react-hook-form';
import './FormRegister.scss';

export default function App() {
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
    <form className="form__register" onSubmit={handleSubmit(onSubmit)}>
      <label>Votre pseudo : </label>
      <input
        // doit avoir 1 chiffre et 1 caractère spécial + pas d'espace au début et à la fin
        type="text"
        placeholder="Pseudo"
        {...register('Pseudo', {
          min: 5,
          maxLength: 20,
          pattern:
            /^(?! )(?!.* $)(?!.* {2})(?=.{1,20}$)(?=(?:[^a-zA-Z0-9]*[a-zA-Z0-9]){5})[\w\W]*$/i,
        })}
      />

      <label>Votre département : </label>
      <select
        defaultValue="option0"
        {...register('Département', { required: true })}
      >
        <option disabled value="option0">
          Choisissez un département
        </option>
        {/* se bra,cher à l'api de geoportail pour les départements */}
        <option value="option1">Bouches du rhone</option>
        <option value="option2">Le Nord</option>
        <option value="option3">L'ouest du pays</option>
        <option value="option4">Cote d'azure</option>
      </select>

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
  );
}
