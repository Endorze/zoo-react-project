import { Link, useParams, useNavigate } from "react-router-dom";
import animals from "../../data/animals"
import styles from "./animalInfo.module.css"

const AnimalInfo = () => {

    const navigate = useNavigate();
    const { id } = useParams();
    const animal = animals.find((animal) => animal.id === parseInt(id));

    if (!animal) return <p>Animal not found</p>

    return (
        <div>
            <div className={styles.animalInfo}>
                <button onClick={() => navigate(-1)}>Back</button>
                <div>
                <img src={animal.imagePath} />
                <p>{animal.name}</p>
                <div>{animal.description}</div>
                </div>
            </div>
        </div>
    )
}

export default AnimalInfo;