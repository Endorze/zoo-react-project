import { useParams } from "react-router-dom";
import animals from "../../data/animals"
import styles from "./animalInfo.module.css"

const AnimalInfo = () => {

    const { id } = useParams();
    const animal = animals.find((animal) => animal.id === parseInt(id));

    if (!animal) return <p>Animal not found</p>

    return (
        <div className={styles.animalInfo}>
            <img src={animal.imagePath} />
            <p>{animal.name}</p>
            <div>{animal.description}</div>
        </div>
    )
}

export default AnimalInfo;