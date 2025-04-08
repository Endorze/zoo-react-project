import styles from "./maxWidthLayout.module.css";

const MaxWidthLayout = ({children}) => {
    return (
        <div className={styles.layout}>
            {children}
        </div>
    )
}

export default MaxWidthLayout;