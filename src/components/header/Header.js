import styles from './Header.module.scss';
import { Link } from "react-router-dom";
import logoHeader from '../../assets/logo.svg'

const Header = () => {
    return (
        <div className={styles.root}>
            <ul className={styles.wrapper}>
                <li>
                    <Link to="/home">
                        <img src={logoHeader} alt={"logo"} className={styles.logo}/>
                        <p>Coffee house</p>
                    </Link>
                </li>
                <li>
                    <Link to="/coffee">
                        Our coffee
                    </Link>
                </li>
                <li>
                    <Link to="/goods">
                        For your pleasure
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default Header;