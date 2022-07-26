import { NavLink } from 'react-router-dom'

import styles from './headerAuth.module.css'

const getClassName = ({ isActive }) => {
    return isActive ? `${styles.link} ${styles.active}` : styles.link;
}

const HeaderAyth = () => {
    return (
        <div>
            <NavLink to="/login" className={getClassName}>Login</NavLink> | <NavLink to='/register' className={getClassName}>Register</NavLink>
        </div>
    )
}

export default HeaderAyth;