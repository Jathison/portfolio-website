import './Header.css'

// test
export default function Header({visible} : {visible: boolean}) {
    return visible && (
        <div className="header-container">
            <span className="name">Jathison Vasudevan</span>
            <div className="wrapper">
                <span className="nav about-nav">About</span>
                <span className="nav projects-nav">Projects</span>
                <span className="nav contact-nav">Contact</span>
            </div>
        </div>
    );
}