import { Link } from "react-router-dom";
import { PERSON } from "../data/constants";
import SEO from "../components/SEO";
import { CodeIcon, DatabaseIcon, GlobeIcon } from "../components/Icons";
import "../styles/home.css";

export default function Home() {
    return (
        <>
            <SEO title="Accueil" description={`Bienvenue sur le portfolio de ${PERSON.name}.`} />

            <section className="hero-section">
                <div className="container hero-container">
                    <div className="hero-content">
                        <h1 className="hero-title">
                            Bonjour, je suis <br />
                            <span className="highlight-text">{PERSON.name}</span>
                        </h1>
                        <p className="hero-subtitle">
                            {PERSON.tagline}
                        </p>

                        <div className="hero-actions">
                            <Link to="/projets" className="btn btn-primary">
                                Voir mes projets
                            </Link>
                            <Link to="/contact" className="btn btn-outline">
                                Me contacter
                            </Link>
                        </div>

                        <div className="hero-stats">
                            <div className="stat-item">
                                <div className="stat-icon">
                                    <GlobeIcon width="24" height="24" />
                                </div>
                                <h4>Web & App</h4>
                                <p>React • .NET • Node</p>
                            </div>
                            <div className="stat-item">
                                <div className="stat-icon">
                                    <DatabaseIcon width="24" height="24" />
                                </div>
                                <h4>Data & IA</h4>
                                <p>Python • SQL • NLP</p>
                            </div>
                            <div className="stat-item">
                                <div className="stat-icon">
                                    <CodeIcon width="24" height="24" />
                                </div>
                                <h4>Système</h4>
                                <p>C# • Bash • Réseaux</p>
                            </div>
                        </div>
                    </div>

                    <div className="hero-visual">
                        <div className="hero-blob"></div>
                        <div className="floating-elements">
                            <div className="float-icon">
                                <CodeIcon width="32" height="32" />
                            </div>
                            <div className="float-icon">
                                <DatabaseIcon width="24" height="24" />
                            </div>
                            <div className="float-icon">
                                <GlobeIcon width="20" height="20" />
                            </div>
                        </div>
                        {/* Placeholder for Profile Image if desired, currently using abstract shapes/icons */}
                        <div style={{ position: "relative", zIndex: 1, textAlign: "center" }}>
                            <img
                                src="/og-image.png"
                                alt="Profile Placeholder"
                                style={{
                                    width: "280px",
                                    height: "280px",
                                    borderRadius: "50%",
                                    objectFit: "cover",
                                    border: "4px solid white",
                                    boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                                    opacity: 0.9
                                }}
                                onError={(e) => {
                                    e.target.style.display = 'none'; // Hide if no image found, showing only icons/blob
                                }}
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
