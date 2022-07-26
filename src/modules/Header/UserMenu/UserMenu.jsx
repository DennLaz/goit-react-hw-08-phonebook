import { useSelector, useDispatch } from "react-redux";

import { getUser } from "redux/auth/authSelectors";

import { logout } from "redux/auth/authOperations";

const UserMenu = () => {
    const  {email}  = useSelector(getUser);

    const dispatch = useDispatch();

    const onLogout = () => {
        dispatch(logout())
    }

    return (
        <div>
            {email} | <button onClick={onLogout}>Logout</button>
        </div>
    )
}

export default UserMenu;