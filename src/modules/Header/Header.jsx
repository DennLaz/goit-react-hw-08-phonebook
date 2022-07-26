import useAuth from 'shared/hooks/useAuth'

import HeaderAuth from './HeaderAuth'
import HeaderMenu from './HeaderMenu'
import UserMenu from './UserMenu'

import styles from './header.module.css'

const Header = () => {
    const isLogin = useAuth();

    return (
        <header>
            <div className={styles.block}>
                <HeaderMenu isLogin={isLogin} />
                {isLogin ? <UserMenu /> : <HeaderAuth />}
            </div>
        </header>
    )
}

export default Header