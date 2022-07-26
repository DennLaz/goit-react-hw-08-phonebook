import { useSelector, useDispatch } from "react-redux";

import { getUser } from "redux/auth/authSelectors";

import { logout } from "redux/auth/authOperations";

import styles from './userMenu.module.css'

const UserMenu = () => {
    const  {email}  = useSelector(getUser);

    const dispatch = useDispatch();

    const onLogout = () => {
        dispatch(logout())
    }

    return (
        <div className={styles.box}>
            <p className={styles.text}>{email}</p> <button className={styles.btn} onClick={onLogout}>Logout</button>
        </div>
    )
}

export default UserMenu;