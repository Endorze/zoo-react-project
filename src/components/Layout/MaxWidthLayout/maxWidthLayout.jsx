import { Outlet } from "react-router-dom";
import styles from "./maxWidthLayout.module.css";

const MaxWidthLayout = () => {
    return (
        <div className={styles.layout}>
            <Outlet />
        </div>
    )
}

export default MaxWidthLayout;