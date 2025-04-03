import animals from "../../data/animals"
import styles from "./sidebar.module.css";

const Sidebar = ({group, onSelectAnimal}) => {

    const filteredAnimals = group 
    ? animals.filter(animal => animal.group.toLowerCase() === group.toLowerCase())
    : animals;

    return (
        <sidebar className={styles.sidebar}>
            {filteredAnimals.map((item, index) => 
            <button key={index} onClick={() => onSelectAnimal(item)}>{item.name}</button>
            )}
        </sidebar>
    )
}

export default Sidebar;