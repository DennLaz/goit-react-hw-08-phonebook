import useForm from 'shared/hooks/useForm';

import TextField from 'shared/components/TextField';

import { initialState } from './initialState';
import { fields } from './fields';

import styles from './registerForm.module.css'

const RegisterForm = ({onSubmit}) => {

    const { state, handleChange, handleSubmit } = useForm({ onSubmit, initialState })
    
    const { name, email, password } = state;

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <TextField onChange={handleChange} value={name} {...fields.name} />
            <TextField onChange={handleChange} value={email} {...fields.email} />
            <TextField onChange={handleChange} value={password} {...fields.password} />
            <button className={styles.btn} type='submit'>Register</button>
        </form>
    )
 }

export default RegisterForm;