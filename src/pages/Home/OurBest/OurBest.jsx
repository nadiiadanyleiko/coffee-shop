import styles from "./OurBest.module.scss"
import CoffeeItem from "../../../components/CoffeeItem/CoffeeItem";

const OurBest = () => {
    return(
        <div className={styles.root}>
            <div className={styles.container}>
                <h2>
                    Our best
                </h2>
                <div className={styles.wrapper}>
                    <CoffeeItem/>
                    <CoffeeItem/>
                    <CoffeeItem/>
                </div>
            </div>
        </div>
    )
}

export default OurBest;