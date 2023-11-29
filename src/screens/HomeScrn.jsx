import About from "../components/About";
import Contact from "../components/Contact";
import Experiences from "../components/Experiences";
import Footer from "../components/Footer";
import Home from "../components/Home";
import Navbar from "../components/Navbar";


function HomeScrn () {
    return (
        <div className="body">
            <Navbar />
            <Home />
            <About />
            <Experiences />
            <Contact />
            <Footer />
        </div>
    )
}

export default HomeScrn
