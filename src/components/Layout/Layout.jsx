import styles from './Layout.module.scss';
import Header from "../header/Header";
import Footer from "../footer/Footer";

const Layout = ({ children }) => {
    console.log(children, 'children')
    return (
        <div className={styles.root}>
            <Header />
            {children}
            <Footer/>
        </div>
    )
}

export default Layout;