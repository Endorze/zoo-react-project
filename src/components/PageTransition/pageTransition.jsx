import { useLocation } from "react-router-dom";
import styles from "./pageTransition.module.css";
import { useEffect, useRef } from "react";

const PageTransition = ({children}) => {

    const wrapperRef = useRef()

    let location = useLocation()
    useEffect(() => {
        if (wrapperRef.current) {
            wrapperRef.current.classList.remove(styles.visible)

            //utan den här offsetWidth så tvingas inte sidan att rendera om, alltså förstår den inte att vi har tagit bort visible, och lagt till visible, så inget funkar utan offsetWidth.
            wrapperRef.current.offsetWidth
            wrapperRef.current.classList.add(styles.visible)
        }

    }, [location, wrapperRef.current]);

    return (
        <div ref={wrapperRef} className={`${styles.transition}`}>
            {children}
        </div>
    )
}

export default PageTransition;