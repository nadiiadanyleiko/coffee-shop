import styles from './Footer.module.scss';
import { Link } from "react-router-dom";
import logoFooter from '../../assets/beans_logo_black.png'
import logoBeans from '../../assets/coffee-beans-black.png'

const Footer = () => {
    return (
        <div className={styles.root}>
            <ul className={styles.wrapper}>
                <li>
                    <Link to="/home">
                        <img src={logoBeans} alt={"logoBeans"} className={styles.logo}/>
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
            <img src={logoFooter} alt={"logo"} className={styles.logo}/>
        </div>
    )
}

export default Footer;