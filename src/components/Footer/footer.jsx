import Logo from "../Logo/logo";
import styles from "./footer.module.css";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div>
                <Logo />
            </div>
        </footer>
    )
}

export default Footer;