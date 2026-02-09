import { PERSON } from "../data/constants";
import SEO from "../components/SEO";
import { MailIcon, PhoneIcon, MapPinIcon, LinkedInIcon, GitHubIcon } from "../components/Icons";
import "../styles/contact.css";

export default function Contact() {
    const mailtoLink = `mailto:${PERSON.email}?subject=${encodeURIComponent("Contact depuis Portfolio")}`;

    return (
        <>
            <SEO title="Me Contacter" description="Envoyez-moi un message pour discuter de votre projet." />
            <div className="container" style={{ padding: "4rem 0" }}>
                <div style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto" }}>
                    <h1 className="section-title">Prenons contact</h1>
                    <p style={{ fontSize: "1.2rem", color: "var(--text-secondary)" }}>
                        Un projet en tête ou simplement envie de discuter ? <br />
                        Je suis toujours ouvert aux nouvelles opportunités.
                    </p>
                </div>

                <div className="contact-grid">
                    {/* Left Column: Context & CTA */}
                    <div className="contact-card">
                        <h2 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>Envoyez-moi un message</h2>
                        <p style={{ color: "var(--text-secondary)", marginBottom: "2rem" }}>
                            Le moyen le plus rapide de me joindre est par courriel. Je réponds généralement sous 24h.
                        </p>

                        <a href={mailtoLink} className="btn btn-primary contact-cta-btn">
                            <MailIcon width="20" height="20" />
                            M'envoyer un courriel
                        </a>

                        <div className="contact-socials">
                            <a href={PERSON.linkedin} target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <LinkedInIcon width="18" height="18" /> LinkedIn
                            </a>
                            <a href={PERSON.github} target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <GitHubIcon width="18" height="18" /> GitHub
                            </a>
                        </div>
                    </div>

                    {/* Right Column: Contact Details */}
                    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                        <div className="contact-item">
                            <div className="contact-icon-box">
                                <MailIcon />
                            </div>
                            <div>
                                <p className="contact-label">Courriel</p>
                                <p className="contact-value">{PERSON.email}</p>
                            </div>
                        </div>

                        <div className="contact-item">
                            <div className="contact-icon-box">
                                <PhoneIcon />
                            </div>
                            <div>
                                <p className="contact-label">Téléphone</p>
                                <p className="contact-value">{PERSON.phone}</p>
                            </div>
                        </div>

                        <div className="contact-item">
                            <div className="contact-icon-box">
                                <MapPinIcon />
                            </div>
                            <div>
                                <p className="contact-label">Adresse</p>
                                <p className="contact-value">{PERSON.address}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
