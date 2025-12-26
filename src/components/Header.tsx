import './Header.css'

// test
export default function Header({visible} : {visible: boolean}) {
    return visible && (
        <div className="header-container">
            <span className="name">Jathison Vasudevan</span>
            <div className="wrapper">
                <span className="about-nav">About</span>
                <span className="projects-nav">Projects</span>
                <span className="contact-nav">Contact</span>
            </div>
        </div>
    );
}