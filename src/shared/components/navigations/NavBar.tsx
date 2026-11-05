import { MdAccountBox, MdLightbulb, MdCall } from "react-icons/md";
import { Navigator } from "./Navigator";

export function NavBar() {
    return (
        <nav className="navbar">
            <Navigator link="/" label="About me" IconComponent={MdAccountBox} />
            <Navigator link="/projects" label="Projects" IconComponent={MdLightbulb} />
            <Navigator link="/contact" label="Contact" IconComponent={MdCall} />
        </nav>
    );
}