import MaxWidthLayout from "../Layout/MaxWidthLayout/maxWidthLayout";
import Sidebar from "../Sidebar/sidebar";
import styles from "./mainContent.module.css";
import { useState } from "react";
import {NavItem} from "../../components/Navigation/NavItem/navItem"

const MainContent = ({ animalType }) => {
    const [info, setInfo] = useState(null);
    const [showFullDesc, setShowFullDesc] = useState(false);

    const handleSelectAnimal = (animal) => {
        if (info && info.name === animal.name) {
            setInfo(null);
            setShowFullDesc(false);
        } else {
            setInfo(animal);
            setShowFullDesc(false);
        }
    }


    return (
        <MaxWidthLayout>
            <div className={styles.wrap}>
                <Sidebar group={animalType} onSelectAnimal={handleSelectAnimal} reset/>

                {info ? (
                        <div className={styles.infoBox}>
                            <div className="horizontal">
                                <div>
                                    <img src="https://media.istockphoto.com/id/998425430/photo/echidna.jpg?s=612x612&w=0&k=20&c=35WRZo5dcGxjTIGTwy7ihum1r2kl5gX97J-1Xn-eQ8k="></img>
                                </div>
                                <div>
                                    <h2>{info.name}</h2>
                                    <NavItem path={info.group}/>
                                    <p>{info.food}</p>
                                    <p>{showFullDesc
                                        ? info.description
                                        : `${info.description.slice(0, 199)}...`}</p>
                                    <p>{info.lifespan}</p>
                                    <p>{info.length}</p>
                                    <p>{info.weight}</p>
                                    <p>{info.found}</p>
                                        <button onClick={() => setShowFullDesc(!showFullDesc)}>
                                            {showFullDesc ? "Show less" : "Read more"}
                                        </button>
                                </div>
                            </div>
                            <div className={styles.buttonWrap}>
                                <button>Previous</button>
                                <p>{info.name}</p>
                                <button>Next</button>
                                </div>
                        </div>
        
                ) : (
                    <div>
                        <h2>Welcome!</h2>
                    </div>
                )}
            </div>
        </MaxWidthLayout>
    );
};

export default MainContent;