import styles from './HomeHeader.module.scss'
import Button from "../../../common/Button/Button";
import logo from "../../../assets/beans-under.png";

const HomeHeader = () => {
    return (
        <div className={styles.root}>
            <div className={styles.wrapper}>
                <h1 className={styles.title}>
                    Everything You Love About Coffee
                </h1>
                <img src={logo} alt={"logo"}/>
                <div className={styles.subtitles}>
                    <p>
                        We make every day full of energy and taste
                    </p>
                    <p>
                        Want to try our beans?
                    </p>
                </div>
                <Button/>
            </div>
        </div>
    )
}

export default HomeHeader;