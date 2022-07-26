import { useDispatch} from "react-redux";
import { Navigate } from "react-router-dom";

import { login } from "redux/auth/authOperations";
import useAuth from "shared/hooks/useAuth";
import LoginForm from "modules/LoginForm";

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
                <h2>Login Page</h2>
                <LoginForm onSubmit={onSubmit}/>
            </div>
        </main>
    )
}

export default LoginPage;