import { useDispatch} from "react-redux";
import { Navigate } from "react-router-dom";

import { login } from "redux/auth/authOperations";
import useAuth from "shared/hooks/useAuth";
import LoginForm from "modules/LoginForm";

import styles from './loginPage.module.css'

const LoginPage = () => {
    const dispatch = useDispatch();

    const isLogin = useAuth();

    const onSubmit = (data) => {
        dispatch(login(data))
    }

    if (isLogin) {
        return <Navigate to="/contacts" />
    }
    
    return (
        <main>
            <div>
                <h2 className={styles.text}>Login</h2>
                <LoginForm onSubmit={onSubmit}/>
            </div>
        </main>
    )
}

export default LoginPage;