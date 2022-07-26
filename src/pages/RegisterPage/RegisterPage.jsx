import { useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";

import useAuth from "shared/hooks/useAuth";

import RegisterForm from "modules/RegisterForm";

import { signup } from "redux/auth/authOperations";

import styles from './registerPage.module.css'

const RegisterPage = () => {
    const dispatch = useDispatch(); 

    const isLogin = useAuth();

    
    const onSubmit = (data) => {
        dispatch(signup(data));
    }

    if (isLogin) {
    return <Navigate to="/contacts" />    
    }

    return (
        <main>
            <div>
                <h2 className={styles.text}>Register or login to your account</h2>
                <RegisterForm onSubmit={onSubmit}/>
            </div>
        </main>
    )
}

export default RegisterPage;