import styles from "./LandingSection.module.css"
import video from "../../assets/landing.mp4"
import Button from "../Button/button";

const LandingSection = () => {
    return (
        <div className={styles.landing}>
            <video src={video} type="video/mp4" autoPlay controls={false} muted loop/>
            <div className={styles.landingText}>
                <h1>Zoo Scandinavia</h1>
                <h2>We're the biggest Zoo in all of Scandinavia</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, sint alias beatae minima et cumque ab officiis soluta suscipit modi iusto obcaecati repudiandae tempore. Vel praesentium cupiditate aliquam mollitia cumque!</p>
                <Button text={"Meet our animals"}/>
            </div>
        </div>
    )
}

export default LandingSection;