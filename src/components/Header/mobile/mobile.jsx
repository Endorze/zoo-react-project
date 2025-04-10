import { headerLinks } from "../../../data/headerLinks"
import NavItem from "../../Navigation/NavItem/navItem"
import linkedIn from "../../../assets/linkedin.png"
import { useState } from "react"
import { List } from "@phosphor-icons/react"
import styles from "../header.module.css";
import { Link } from "react-router-dom"

const Mobile = () => {

    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className={styles.mobile}>
            <List size={32} color="white" onClick={() => setMenuOpen(!menuOpen)}/>
            {menuOpen && (
                <div className={styles.overlay} onClick={() => setMenuOpen(false)}></div>
            )}

            <div className={`${styles.menu} ${menuOpen ? styles.active : ""}`}>
                <div className={styles.links}>
                    {headerLinks.map((link, index) =>
                        <NavItem path={link} key={index} onClick={() => setMenuOpen(false)} />
                    )}
                </div>
                <div className={styles.menuSubsection}>
                <p><strong>Carlex Designs</strong> <br/> New innovative solutions, for better prices, become a follower today!</p>
                <Link to={"https://www.linkedin.com/in/alexander-hallgren-5a4a501aa/"}><img src={linkedIn}></img></Link>
                </div>
            </div>
        </header>
    )
}

export default Mobile;