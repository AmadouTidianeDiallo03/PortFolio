import { PERSON } from "../data/constants";
import SEO from "../components/SEO";
import { Link } from "react-router-dom";
import { GraduationCapIcon, BriefcaseIcon, CodeIcon, TargetIcon } from "../components/Icons";
import "../styles/contact.css"; // Reusing the grid layout from contact (renaming conceptually to shared-grid)

export default function About() {
    return (
        <>
            <SEO title="À Propos" description={`En savoir plus sur ${PERSON.name}.`} />
            <div className="container" style={{ padding: "4rem 0" }}>
                <div style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto 3rem auto" }}>
                    <h1 className="section-title">À Propos de Moi</h1>
                    <p style={{ fontSize: "1.2rem", color: "var(--text-secondary)" }}>
                        Jeune diplômé en informatique, passionné, curieux et déterminé.
                    </p>
                </div>

                <div className="contact-grid">
                    {/* Left Column: Intro & Highlights */}
                    <div className="contact-card">
                        <h2 style={{ fontSize: "1.5rem", marginBottom: "1.5rem", display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <span style={{ fontSize: "1.8rem" }}>👋</span> Qui suis-je ?
                        </h2>
                        <p style={{ marginBottom: "1rem", lineHeight: "1.7", color: "var(--text-secondary)" }}>
                            Bonjour ! Je m'appelle <strong style={{ color: "var(--text-main)" }}>{PERSON.name}</strong>.
                        </p>
                        <p style={{ marginBottom: "1.5rem", lineHeight: "1.7", color: "var(--text-secondary)" }}>
                            Je suis diplômé d’un baccalauréat en informatique de l’<strong>Université du Québec à Rimouski</strong>.
                            Je suis maintenant <strong>à la recherche active d’une première expérience professionnelle</strong> dans les TI : développement, soutien technique, réseaux, sécurité, bases de données ou tout autre poste où je pourrai apprendre et contribuer
                            afin de mettre mes compétences au service d’une équipe et de continuer à progresser.
                        </p>

                        <div style={{ marginTop: "auto", paddingTop: "1rem" }}>
                            <Link to="/contact" className="btn btn-primary" style={{ width: "100%", textAlign: "center", justifyContent: "center", display: "flex" }}>
                                Me contacter
                            </Link>
                        </div>
                    </div>

                    {/* Right Column: Detailed Grid */}
                    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>

                        {/* Target / Objective */}
                        <div className="contact-item" style={{ alignItems: "flex-start" }}>
                            <div className="contact-icon-box">
                                <TargetIcon />
                            </div>
                            <div>
                                <p className="contact-label">Objectif</p>
                                <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem", lineHeight: "1.5" }}>
                                    Décrocher une première opportunité dans les TI, quel que soit le domaine, pour mettre à profit ma formation généraliste, contribuer à des projets concrets et apprendre auprès d'une équipe expérimentée.
                                </p>
                            </div>
                        </div>

                        {/* Tech Interest */}
                        <div className="contact-item" style={{ alignItems: "flex-start" }}>
                            <div className="contact-icon-box">
                                <CodeIcon />
                            </div>
                            <div>
                                <p className="contact-label">Intérêts Techniques</p>
                                <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem", lineHeight: "1.5" }}>
                                    Développement web, bases de données, sécurité réseau, environnements Linux et virtualisation.
                                </p>
                            </div>
                        </div>

                        {/* Education */}
                        <div className="contact-item" style={{ alignItems: "flex-start" }}>
                            <div className="contact-icon-box">
                                <GraduationCapIcon />
                            </div>
                            <div>
                                <p className="contact-label">Formation</p>
                                <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem", lineHeight: "1.5" }}>
                                    Baccalauréat en informatique (Diplômé, 2023 – 2026)<br />
                                    UQAR - Campus de Lévis
                                </p>
                            </div>
                        </div>

                        {/* Soft Skills */}
                        <div className="contact-item" style={{ alignItems: "flex-start" }}>
                            <div className="contact-icon-box">
                                <BriefcaseIcon />
                            </div>
                            <div>
                                <p className="contact-label">Savoir-être</p>
                                <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem", lineHeight: "1.5" }}>
                                    Sérieux, motivé, bon esprit d’équipe et capacité d'adaptation rapide.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}
