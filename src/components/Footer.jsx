

function Footer() {
    return (
        <footer className="footer bg-black">
            <ul className="social-icon">
                <li className="social-icon__item"><a className="social-icon__link" href="https://www.linkedin.com/in/benedict-aurelius-9b1b3b1b2/" target="_blank">
                    <ion-icon name="logo-linkedin" />
                    </a></li>
                <li className="social-icon__item"><a className="social-icon__link" href="https://www.instagram.com/benedictaurel_/" target="_blank">
                    <ion-icon name="logo-instagram" />
                    </a></li>
                <li className="social-icon__item"><a className="social-icon__link" href="https://github.com/benedictaurel"target="_blank">
                    <ion-icon name="logo-github" />
                    </a></li>
            </ul>
            <p>©2023 Benedict Aurelius | All Rights Reserved</p>
        </footer>
    )
}

export default Footer