import useForm from 'shared/hooks/useForm';

import TextField from 'shared/components/TextField';
import { initialState } from './initialState';
import { fields } from './fields';

import styles from './loginForm.module.css'

const LoginForm = ({ onSubmit }) => {
  const { state, handleChange, handleSubmit } = useForm({
    onSubmit,
    initialState,
  });
  const { password, email } = state;

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <TextField onChange={handleChange} value={email} {...fields.email} />
      <TextField onChange={handleChange} value={password}{...fields.password} />
      <button className={styles.btn} type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
