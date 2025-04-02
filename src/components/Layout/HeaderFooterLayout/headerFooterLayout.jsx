import { Outlet } from "react-router-dom";
import Header from "../../Header/header";
import Footer from "../../Footer/footer";
import PageTransition from "../../PageTransition/pageTransition"

const HeaderFooterLayout = () => {
    return (
        <>
            <Header />
            <PageTransition>
                <Outlet />
            </PageTransition>
            <Footer />
        </>
    )
}

export default HeaderFooterLayout;