import { useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";

import useAuth from "shared/hooks/useAuth";

import RegisterForm from "modules/RegisterForm";

import { signup } from "redux/auth/authOperations";

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
                <h2>Register Page</h2>
                <RegisterForm onSubmit={onSubmit}/>
            </div>
        </main>
    )
}

export default RegisterPage;