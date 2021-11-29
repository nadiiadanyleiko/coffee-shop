import styles from './Layout.module.scss';
import Header from "../header/Header";

const Layout = ({ children }) => {
    console.log(children, 'children')
    return (
        <div className={styles.root}>
            <Header />
            {children}
            <div>footer</div>
        </div>
    )
}

export default Layout;