import { Outlet } from "react-router-dom"
import Header from "../../Header/header"

const HeaderLayout = () => {
    return (
        <>
            <Header />
            <Outlet />
        </>
    )
}

export default HeaderLayout;