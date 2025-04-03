import { Link, useParams, useNavigate } from "react-router-dom";
import animals from "../../data/animals"
import styles from "./animalInfo.module.css"
import MaxWidthLayout from "../Layout/MaxWidthLayout/maxWidthLayout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";


const AnimalInfo = () => {

    const [toggle, setToggle] = useState(null);
    const navigate = useNavigate();
    const { id } = useParams();
    const animal = animals.find((animal) => animal.id === parseInt(id));

    if (!animal) return <p>Animal not found</p>


    return (
        <div className={styles.centerWrapper}>

            <div className={styles.animalInfo}>
                <div className={styles.horizontal}>
                    <button onClick={() => navigate(-1)}><FontAwesomeIcon icon={faArrowLeft} /> Close</button>
                    <p>{animal.name}</p>
                </div>
                <div>
                    <div>
                        <div onMouseEnter={() => setToggle(true)} onMouseLeave={() => setToggle(false)} >
                            {toggle ? (
                                <iframe
                                    width="400"
                                    height="315"
                                    src={animal.youtubeLink}
                                    title="YouTube video player"
                                    frameborder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    referrerpolicy="strict-origin-when-cross-origin"
                                    allowfullscreen
                                ></iframe>
                            ) : (
                                <img src={animal.imagePath} />
                            )}
                        </div>
                        <div className={styles.infoBox}>
                            <div>
                                <p><strong>Family: </strong>{animal.group}</p>
                            </div>
                            <div>
                                <p><strong>Habitat: </strong>{animal.found}</p>
                            </div>
                            <div>
                                <p><strong>Weight: </strong>{animal.weight}</p>
                            </div>
                            <div>
                                <p><strong>Length: </strong>{animal.length}</p>
                            </div>
                            <div>
                                <p><strong>Food: </strong>{animal.food}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.animalDescription}>
                <p className={styles.description}>{animal.description}</p>
                </div>
            </div>

        </div>
    )
}

export default AnimalInfo;