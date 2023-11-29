

function Contact() {
    return (
        <>
            <div className="">
                <section id="contact">
                    <p className="text-center text-white text-4xl contact"><b>Contact Me</b></p>
                    <div id="container">
                        <form id="contactForm" action="https://formspree.io/f/xrgwwpdy" method="POST">
                            <div className="form-group">
                                <label htmlFor="name">
                                Name:
                                </label>
                                <input id="name" name="name" placeholder="Your Name" required type="text" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">
                                Email:
                                </label>
                                <input id="email" name="email" placeholder="Your Email" required type="email" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="message">
                                Message:
                                </label>
                                <textarea id="message" style={{resize: 'none'}} name="message" placeholder="Your Message" required defaultValue={""} />
                            </div>
                            <button id="btnform" type="submit">
                                Submit
                            </button>
                        </form>
                    </div>
                </section>
            </div>
        </>
    );
}

export default Contact;