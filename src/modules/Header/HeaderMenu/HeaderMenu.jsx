import { NavLink } from 'react-router-dom'

import { items } from './items'

import styles from './headerMenu.module.css'

const getActiveLink = ({ isActive }) => {
    return isActive ? styles.linkActive : styles.link;
}

const headerMenu = ({isLogin}) => {
    const selectItems = isLogin ? items : items.filter(item => !item.private)
    const elements = selectItems.map(({ id, to, text }) => 
        <li key={id}>
            <NavLink className={getActiveLink} to={to} >{text}</NavLink>
    </li>
    )

    return (<ul className={styles.menu}>
        {elements}
    </ul>)
}

export default headerMenu;