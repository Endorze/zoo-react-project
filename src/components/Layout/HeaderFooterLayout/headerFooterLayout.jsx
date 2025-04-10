import { Outlet } from "react-router-dom";
import Header from "../../Header/header";
import Footer from "../../Footer/footer";
import PageTransition from "../../PageTransition/pageTransition"
import Mobile from "../../Header/mobile/mobile";

const HeaderFooterLayout = () => {
    return (
        <>
            <Header />
            <Mobile />
            <PageTransition>
                <Outlet />
            </PageTransition>
            <Footer />
        </>
    )
}

export default HeaderFooterLayout;