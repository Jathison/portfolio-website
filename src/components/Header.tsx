import './Header.css'

export default function Header() {
    return (
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