import { Outlet } from "react-router-dom";
import Header from "../../Header/header";
import Footer from "../../Footer/footer";

const HeaderFooterLayout = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}

export default HeaderFooterLayout;