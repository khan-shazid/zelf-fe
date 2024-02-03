import { ReactComponent as Logo } from '../assets/logo.svg';
import styles from './Topbar.module.css';

export const Topbar = () => {
    return (
        <div className={`container ${styles['topbar-container']}`}>
            <Logo/>
            <img src={require('../assets/images/user-icon.png')} height={32} width={32} className={styles['user-icon']} alt={'name'} />
        </div>
    )
}