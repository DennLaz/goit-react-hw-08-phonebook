import useForm from 'shared/hooks/useForm';

import TextField from 'shared/components/TextField';
import { initialState } from './initialState';
import { fields } from './fields';

const LoginForm = ({ onSubmit }) => {
  const { state, handleChange, handleSubmit } = useForm({
    onSubmit,
    initialState,
  });
  const { password, email } = state;

  return (
    <form onSubmit={handleSubmit}>
      <TextField onChange={handleChange} value={email} {...fields.email} />
      <TextField onChange={handleChange} value={password}{...fields.password} />
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
