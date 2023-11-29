import ReactTyped from "react-typed";


function Home() {

    return (
        <div className="">
            <section id="home" class="text-center">
                <span className="text-white text-[5vh]">
                    <b>Hi, I'm </b>
                    <span className="nama">
                        <b>
                            <ReactTyped 
                                strings={["Benedict Aurelius"]}
                                typeSpeed={100}
                                backSpeed={50}
                                loop
                                cursorChar=" "
                                showCursor={true}
                            />
                        </b>
                    </span>
                </span>
            </section>
        </div>
    );
}

export default Home;