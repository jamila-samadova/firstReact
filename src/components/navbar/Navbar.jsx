import styles from './navbar.module.css';

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <ul>
                <li><a href="#">Əsas Səhif</a></li>
                <li><a href="#">Haqqimizda</a></li>
                <li><a href="#">Xidmetler</a></li>
                <li><a href="#">Elaqe</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;
