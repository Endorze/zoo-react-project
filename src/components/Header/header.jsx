import styles from "./header.module.css"
import { headerLinks } from "../../data/headerLinks"
import NavItem from "../Navigation/NavItem/navItem"
import Logo from "../Logo/logo"
import LinkedIn from "../../assets/linkedin.png"

const Header = () => {
    return (
        <header className={styles.header}>
            <Logo />
            <div className={styles.links}>
                {headerLinks.map((link, index) =>
                    <NavItem path={link} key={index} />
                )}
            </div>
            <a href="https://www.linkedin.com/in/alexander-hallgren-5a4a501aa/"><img src={LinkedIn}/></a>
        </header>
    )
}

export default Header;