import styles from "./CoffeeItem.module.scss";
import img from "../../assets/coffee_item_1.jpg";

const CoffeeItem = () => {
    return (
        <div className={styles.root}>
            <img src={img} alt={img}/>
            <h4>
                Solimo Coffee Beans 2 kg
            </h4>
            {/*<span>
                Brazil
            </span>*/}
            <span className={styles.price}>
                10.73$
            </span>
        </div>
    )
}

export default CoffeeItem;