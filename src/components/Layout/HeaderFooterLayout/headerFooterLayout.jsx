import { Outlet } from "react-router-dom";

const HeaderFooterLayout = () => {
    return (
        <>
            <h1>Header</h1>
            <Outlet />
            <footer>Footer</footer>
        </>
    )
}

export default HeaderFooterLayout;