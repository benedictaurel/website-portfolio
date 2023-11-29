import { Link } from "react-router-dom";


function Navbar () {
    return (
        <nav id="navbar" className="bg-black p-4 fixed-top">
            <div className="flex items-center justify-between">
                <a href="#home">
                    <img src="src/assets/LOGO_BA_TRANS.png" width="40" href="#home" height="40" className="margin" />
                </a>
                <ul className="flex space-x-4">
                    <li><a href="#about" className="text-white">About</a></li>
                    <li><a href="#experiences" className="text-white">Experiences</a></li>
                    <li><a href="#contact" className="text-white">Contact</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;