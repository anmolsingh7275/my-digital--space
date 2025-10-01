import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import logo from "../assets/logo.jpg";
export default function Navbar() {
    return (
        <nav className="flex items-center justify-between py-6">
            <div className="flex flex-shrink-0 items-center">
                <a href="/" aria-label="Home">
                    <img src={logo} className="mx-2" width={60} height={43} alt="logo" />
                </a>
            </div>

            <div className="m-8 flex items-center justify-center gap-4 text-2xl">
                <a href="linkedin profile" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <FaLinkedin />
                </a>

                <a href="github profile" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                    <FaGithub />
                </a>

                <a href="instagram profile" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                    <FaInstagram />
                </a>
            </div>
        </nav>
    );
}
