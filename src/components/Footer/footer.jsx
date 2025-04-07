import { Link } from "react-router-dom";
import BlackLogo from "../Logo/blackLogo";
import styles from "./footer.module.css";


const Footer = () => {
    return (
        <div>
            <footer className={styles.footer}>
                <div className="vertical">
                    <BlackLogo />
                    <h2>Who are we?</h2>
                    <p>We offer the most modern solutions, and our company consists of very talented consultants with different expertices to ensure we fit your needs.</p>
                </div>
                <div>
                    <h2>My Websites</h2>
                    <Link to={"https://react-mock-webpage.vercel.app/"}>Bethesda Fanpage</Link>
                    <Link to={"https://express-multipage-assignment2.vercel.app/"}>Summoners-War Fanpage</Link>
                    <Link to={"https://group-assignment3.vercel.app/birds.html"}>Zoo page (Bird-section) - group project</Link>
                    <Link to={"https://endorze.github.io/pokemon-game/"}>Pokemon Game</Link>
                    <Link to={"https://kantherm.se/"}>My first freelance consult page</Link>
                    <Link to={"https://group-assignment3.vercel.app/birds.html"}>Zoo page (Bird-section)</Link>
                </div>
                <div>
                    <h2>Animal Pages</h2>
                    <Link to={"/"}>Birds Page</Link>
                    <Link to={"/"}>Reptiles Page</Link>
                    <Link to={"/"}>Mammals Page</Link>
                </div>
                <div className={styles.media}>
                    <h2>Media</h2>
                    <Link to={"/"}>Instagram</Link>
                    <Link to={"/"}>LinkedIn</Link>
                    <Link to={"/"}>Hem</Link>
                </div>
            </footer>
            <div className={styles.copyright}>
                <p>
                    &copy; Copyright 2025 Alexander Hallgren all rights reserved
                </p>
            </div>
        </div>
    )
}

export default Footer;