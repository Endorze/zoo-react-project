import { NavLink } from "react-router-dom"

const NavItem = ({path}) => {
    return (
        <NavLink to={path === "Home" ? "/" : path}>{path}</NavLink>
    )
}

export default NavItem;