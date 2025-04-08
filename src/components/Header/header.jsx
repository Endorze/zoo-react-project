import styles from "./header.module.css"
import { headerLinks } from "../../data/headerLinks"
import NavItem from "../Navigation/NavItem/navItem"
import Logo from "../Logo/logo"
import LinkedIn from "../../assets/linkedin.png"
import { useEffect, useRef } from "react"

const Header = () => {

    const ref = useRef()

    useEffect(() => {
        const listener = () => {
            if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
                if (ref.current) {
                    ref.current.classList.add(styles['scroll-header'])
                }
            } else {
                if (ref.current) {
                    ref.current.classList.remove(styles['scroll-header'])
                }
            }
        }
    
        window.addEventListener('scroll', listener)
    
        return () => {
            window.removeEventListener('scroll', listener)
        }
    }, [])
    

    return (
        <header ref={ref} className={styles.header}>
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