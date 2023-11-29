import { Link } from "react-router-dom";


function Experiences () {
    return (
        <section id="experiences">
            <p className="text-center text-white text-4xl experience"><b>Experiences</b></p>
            <div className="justify-evenly flex-wrap flex experience">
            <div className="card">
                <div className="align">
                <span className="red" />
                <span className="yellow" />
                <span className="green" />
                </div>
                <h1>KOMPETISI SAINS NASIONAL</h1>
                <p>I was a participant of National Science Olympiad of Informatics from <b>2021 - 2022</b>.
                <img src="src/assets/OSN.png" alt="KSN" width={300} height={300} className="bg-center" />
                </p>
            </div>
            <div className="card">
                <div className="align">
                <span className="red" />
                <span className="yellow" />
                <span className="green" />
                </div>
                <h1>GOOGLE DEVELOPER STUDENT CLUB</h1>
                <p>I am currently joining a community groups for students with an interest as a developer.
                <img src="src/assets/gdsc.png" alt="GDSC" width={300} height={300} className="bg-center" />
                </p>
            </div>
            <div className="card">
                <div className="align">
                <span className="red" />
                <span className="yellow" />
                <span className="green" />
                </div>
                <h1>EXERCISE FTUI INTERNSHIP</h1>
                <p>I am currently doing an internship at Exercise as a Software Intern.
                <img src="src/assets/exercise.png" alt="Exercise" width={300} height={300} className="bg-center" />
                </p>
            </div>
            </div>
            <div className="experience center">
                <a href="src/assets/CVs.pdf" target="_blank" rel="noreferrer"><button className="Btn">See More</button></a>
            </div>
        </section>
    )
}

export default Experiences;