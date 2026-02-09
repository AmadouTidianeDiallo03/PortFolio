import { Link } from "react-router-dom";
import { PERSON } from "../data/constants";
import SEO from "../components/SEO";
import "../styles/home.css";

export default function Home() {
    return (
        <>
            <SEO
                title="Accueil"
                description={`Bienvenue sur le portfolio de ${PERSON.name}. ${PERSON.tagline}`}
            />

            <section className="hero-section">
                <div className="hero-content">
                    <h1 className="hero-title">
                        Bonjour, je suis {PERSON.name}
                    </h1>
                    <p className="hero-subtitle">
                        {PERSON.tagline}
                    </p>
                    <div className="hero-actions">
                        <Link to="/projets" className="btn hero-btn hero-btn-primary">
                            Voir mes projets
                        </Link>
                        <Link to="/contact" className="btn hero-btn hero-btn-secondary">
                            Me contacter
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
