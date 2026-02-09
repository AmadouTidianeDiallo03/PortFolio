import { Link } from "react-router-dom";
import { PERSON } from "../data/constants";
import SEO from "../components/SEO";
import "../styles/home.css";

export default function Home() {
    return (
        <>
            <SEO title="Accueil" description={`Bienvenue sur le portfolio de ${PERSON.name}.`} />

            <section className="hero-section">
                <div className="container hero-container">
                    <div className="hero-content">
                        <h1 className="hero-title">
                            Bonjour, je suis <span className="highlight-text">{PERSON.name}</span>
                        </h1>
                        <p className="hero-subtitle">
                            {PERSON.tagline}
                        </p>

                        <div className="hero-cta">
                            <Link to="/projets" className="btn btn-primary shimmer-btn">
                                Voir mes projets
                            </Link>
                            <Link to="/contact" className="btn btn-outline">
                                Me contacter
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
