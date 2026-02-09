import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { PERSON } from "../data/constants";

export default function Navigation() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);
    const closeMenu = () => setIsOpen(false);

    return (
        <nav className="navbar">
            <div className="container navbar-container">
                <Link to="/" className="nav-logo" onClick={closeMenu}>
                    {PERSON.name}
                </Link>

                <button
                    className="menu-toggle"
                    onClick={toggleMenu}
                    aria-label="Toggle navigation"
                    aria-expanded={isOpen}
                >
                    {isOpen ? "✕" : "☰"}
                </button>

                <ul className={`nav-links ${isOpen ? "open" : ""}`}>
                    <li><NavLink to="/" className="nav-link" onClick={closeMenu}>Accueil</NavLink></li>
                    <li><NavLink to="/projets" className="nav-link" onClick={closeMenu}>Projets</NavLink></li>
                    <li><NavLink to="/competences" className="nav-link" onClick={closeMenu}>Compétences</NavLink></li>
                    <li><NavLink to="/a-propos" className="nav-link" onClick={closeMenu}>À propos</NavLink></li>
                    <li><NavLink to="/cv" className="nav-link" onClick={closeMenu}>CV</NavLink></li>
                    <li>
                        <NavLink to="/contact" className="nav-link btn btn-primary" style={{ color: 'white' }} onClick={closeMenu}>
                            Contact
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
