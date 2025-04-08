import { Link, useLocation } from "react-router-dom";
import MaxWidthLayout from "../Layout/MaxWidthLayout/maxWidthLayout";
import Sidebar from "../Sidebar/sidebar";
import styles from "./mainContent.module.css";
import { useState, useRef } from "react";
import { CSSTransition, SwitchTransition } from "react-transition-group";

const MainContent = ({ animalType }) => {
    const location = useLocation();
    const [info, setInfo] = useState(null);
    const [showFullDesc, setShowFullDesc] = useState(false);

    const nodeRef = useRef(null);

    const handleSelectAnimal = (animal) => {
        if (info && info.name === animal.name) {
            setInfo(null);
            setShowFullDesc(false);
        } else {
            setInfo(animal);
            setShowFullDesc(false);
        }
    };

    return (
        <MaxWidthLayout>
            <div className={styles.wrap}>
                <Sidebar group={animalType} onSelectAnimal={handleSelectAnimal} reset />

                <SwitchTransition mode="out-in">
                    <CSSTransition
                        key={info?.id || "empty"}
                        timeout={300}
                        classNames="fade"
                        unmountOnExit
                        nodeRef={nodeRef}
                    >
                        <div ref={nodeRef} className={`${!info ? styles.welcome : styles.infoBox} fade-base`}>
                            {info ? (
                                location.pathname === "/" ? (
                                    <div className={styles.infoBox}>
                                        <div className="horizontal">
                                            <div>
                                                <img src={info.imagePath} />
                                            </div>
                                            <div className={styles.verticalGap}>
                                                <h2>{info.name}</h2>
                                                <Link to={`${info.group}`}>{info.group}</Link>
                                                <p>The {info.name} eats {info.food}.</p>
                                                <p>
                                                    {showFullDesc
                                                        ? info.description
                                                        : `${info.description.slice(0, 199)}...`}
                                                </p>
                                                <Link to={`/animal/${info.id}`} className={styles.linkButton}>Read more</Link>
                                            </div>
                                        </div>
                                        <div className={styles.buttonWrap}>
                                            <button>Previous</button>
                                            <p><strong>{info.name}</strong></p>
                                            <button>Next</button>
                                        </div>
                                    </div>
                                ) : (
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
                                )
                            ) : (
                                <div className={styles.welcome}>
                                    <h2>Welcome to Zoo Scandinavia</h2>
                                    <p>
                                        Please interact with the sidebar to display information about
                                        any animal you're interested in.
                                    </p>
                                </div>
                            )}
                        </div>
                    </CSSTransition>
                </SwitchTransition>
            </div>
        </MaxWidthLayout>
    );
};

export default MainContent;
