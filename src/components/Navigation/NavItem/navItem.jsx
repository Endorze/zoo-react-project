import { NavLink } from "react-router-dom"

const NavItem = ({path}) => {

    const link = path.toLowerCase() === "home" ? "/" : `/${path.toLowerCase()}`;

    return (
        <NavLink to={link}>{path}</NavLink>
    )
}

export default NavItem;