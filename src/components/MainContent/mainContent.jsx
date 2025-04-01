import MaxWidthLayout from "../Layout/MaxWidthLayout/maxWidthLayout";
import Sidebar from "../Sidebar/sidebar";
import styles from "./mainContent.module.css";
import { useState } from "react";

const MainContent = ({ animalType }) => {
    const [info, setInfo] = useState(null);

    return (
        <MaxWidthLayout>
            <div className={styles.wrap}>
                <Sidebar group={animalType} onSelectAnimal={setInfo} />

                <div className={styles.mainContent}>

                    {info ? (
                        <div className={styles.infoBox}>
                            <h2>{info.name}</h2>
                            <p>{info.description}</p>
                            <p>Group: {info.group}</p>
                            <p>{info.food}</p>
                            <p>{info.lifespan}</p>
                            <p>{info.length}</p>
                            <p>{info.weight}</p>
                            <p>{info.found}</p>
                        </div>
                    ) : (
                        <div>
                            <h2>Welcome!</h2>
                        </div>
                    )}
                </div>
            </div>
        </MaxWidthLayout>
    );
};

export default MainContent;