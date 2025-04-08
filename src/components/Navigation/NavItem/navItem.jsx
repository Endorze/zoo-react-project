import { NavLink } from "react-router-dom"
import styles from "./navItem.module.css"

const NavItem = ({path}) => {

    const link = path.toLowerCase() === "home" ? "/" : `/${path.toLowerCase()}`;

    return (
        <NavLink to={link} className={({ isActive }) => isActive ? styles.active : ""
          }>{path}</NavLink>
    )
}

export default NavItem;