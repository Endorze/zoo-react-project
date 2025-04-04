import { Link, useLocation } from "react-router-dom";
import MaxWidthLayout from "../Layout/MaxWidthLayout/maxWidthLayout";
import Sidebar from "../Sidebar/sidebar";
import styles from "./mainContent.module.css";
import { useState } from "react";

const MainContent = ({ animalType }) => {

    const location = useLocation();
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
                <Sidebar group={animalType} onSelectAnimal={handleSelectAnimal} reset />


                {/*
                a small image of the animal​
                the name of the animal​
                the first 200 characters of the description (or a similar solution)​
                what the animal eats​
                which group it belongs to WITH a link to the group page (eg mammal, bird or reptile)
                Clicking on Read More button for any animal on the home page should show all the animal details*/}
                {info ? (
                    <>
                        {location.pathname === "/" ? (
                            <div className={styles.infoBox}>
                                <div className="horizontal">
                                    <div>
                                        <img src={info.imagePath} />
                                    </div>
                                    <div className={styles.verticalGap}>
                                        <h2>{info.name}</h2>
                                        {location.pathname === "/" && (
                                            <Link to={`${info.group}`}>{info.group}</Link>
                                        )}
                                        <p>The {info.name} eats {info.food}.</p>
                                        <p>{showFullDesc
                                            ? info.description
                                            : `${info.description.slice(0, 199)}...`}</p>
                                        <Link to={`/animal/${info.id}`}>Read more</Link>
                                    </div>
                                </div>
                                <div className={styles.buttonWrap}>
                                    <button>Previous</button>
                                    <p><strong>{info.name}</strong></p>
                                    <button>Next</button>
                                </div>
                            </div>
                        ) : (
                            <div>
                                <div className={styles.infoBox}>
                                    <div className="horizontal">
                                        <div>
                                            <img src={info.imagePath} />
                                        </div>
                                        <div>
                                            <h2>{info.name}</h2>
                                            <p>The {info.name} eats {info.food}.</p>
                                            <p>{info.description}</p>
                                            <p>{info.lifespan}</p>
                                            <p>{info.length}</p>
                                            <p>{info.weight}</p>
                                            <p>{info.found}</p>
                                        </div>
                                    </div>
                                    <div className={styles.buttonWrap}>
                                        <button>Previous</button>
                                        <p>{info.name}</p>
                                        <button>Next</button>
                                    </div>
                                </div>
                            </div>
                        )}
                    </>
                ) : (
                    <div className={styles.welcome}>
                        <h2>Welcome to Zoo Scandinavia</h2>
                        <p>Please interact with the sidebar to display information about any animal you're interested in.</p>
                    </div>
                )}
            </div>
        </MaxWidthLayout>
    );
};

export default MainContent;