import { PERSON } from "../data/constants";
import SEO from "../components/SEO";

export default function Contact() {
    const mailtoLink = `mailto:${PERSON.email}?subject=${encodeURIComponent("Contact depuis Portfolio")}`;

    return (
        <>
            <SEO title="Me Contacter" description="Envoyez-moi un message pour discuter de votre projet." />
            <div className="container" style={{ maxWidth: "600px", textAlign: "center", padding: "4rem 0" }}>
                <h1 className="section-title">Contacter {PERSON.name}</h1>

                <div className="card" style={{ padding: "3rem 2rem", display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <p style={{ fontSize: "1.2rem", marginBottom: "2rem", color: "var(--text-secondary)" }}>
                        Vous avez un projet en tête ou vous souhaitez simplement discuter ?<br />
                        N'hésitez pas à m'envoyer un courriel directement.
                    </p>

                    <a
                        href={mailtoLink}
                        className="btn btn-primary"
                        style={{
                            fontSize: "1.1rem",
                            padding: "1rem 2rem",
                            marginBottom: "2rem",
                            boxShadow: "var(--shadow-lg)"
                        }}
                    >
                        📧 Envoyer un message
                    </a>

                    <div style={{ padding: "1rem", background: "var(--bg-body)", borderRadius: "var(--radius-md)", width: "100%" }}>
                        <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)", marginBottom: "0.5rem" }}>
                            ou écrivez-moi à :
                        </p>
                        <strong style={{ color: "var(--primary-color)", fontSize: "1.1rem", userSelect: "all" }}>
                            {PERSON.email}
                        </strong>
                    </div>
                </div>
            </div>
        </>
    );
}
