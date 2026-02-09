import { PERSON } from "../data/constants";
import SEO from "../components/SEO";

export default function Resume() {
    return (
        <>
            <SEO title="Mon CV & Lettre" description="Consultez et téléchargez mon Curriculum Vitae et ma lettre de présentation." />
            <div className="container text-center" style={{ maxWidth: "1000px", padding: "4rem 1rem" }}>
                <h1 className="section-title">Documents Professionnels</h1>
                <p style={{ marginBottom: "3rem", fontSize: "1.2rem", color: "var(--text-secondary)" }}>
                    Voici les documents officiels retraçant mon parcours et mes motivations.
                </p>

                <div className="cv-grid" style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                    gap: "2rem"
                }}>
                    {/* CV Section */}
                    <div className="card" style={{ padding: "3rem 2rem", display: "flex", flexDirection: "column", alignItems: "center" }}>
                        <div style={{ fontSize: "4rem", marginBottom: "1rem" }}>📄</div>
                        <h2 style={{ marginBottom: "1rem" }}>Curriculum Vitae</h2>
                        <p style={{ color: "var(--text-secondary)", marginBottom: "2rem" }}>
                            Un aperçu détaillé de mes compétences, expériences et formation.
                        </p>

                        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", justifyContent: "center", width: "100%" }}>
                            <a
                                href={PERSON.cvPath}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-outline"
                                style={{ flex: "1" }}
                            >
                                👁️ Voir
                            </a>
                            <a
                                href={PERSON.cvPath}
                                download="CV_Amadou_Tidiane_Diallo.pdf"
                                className="btn btn-primary"
                                style={{ flex: "1" }}
                            >
                                📥 Télécharger
                            </a>
                        </div>
                    </div>

                    {/* Cover Letter Section */}
                    <div className="card" style={{ padding: "3rem 2rem", display: "flex", flexDirection: "column", alignItems: "center" }}>
                        <div style={{ fontSize: "4rem", marginBottom: "1rem" }}>📝</div>
                        <h2 style={{ marginBottom: "1rem" }}>Lettre de Présentation</h2>
                        <p style={{ color: "var(--text-secondary)", marginBottom: "2rem" }}>
                            Mes motivations et ce que je peux apporter à votre équipe.
                        </p>

                        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", justifyContent: "center", width: "100%" }}>
                            <a
                                href={PERSON.coverLetterPath}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-outline"
                                style={{ flex: "1", borderColor: "var(--primary-color)", color: "var(--primary-color)" }}
                            >
                                👁️ Voir
                            </a>
                            <a
                                href={PERSON.coverLetterPath}
                                download="Lettre_Presentation_Amadou_Tidiane_Diallo.pdf"
                                className="btn btn-secondary"
                                style={{ flex: "1", borderColor: "var(--primary-color)", color: "var(--primary-color)" }}
                            >
                                📥 Télécharger
                            </a>
                        </div>
                    </div>
                </div>

                <p style={{ marginTop: "4rem", color: "var(--text-secondary)", fontSize: "0.9rem" }}>
                    * Les fichiers sont au format PDF. Assurez-vous d'avoir un lecteur compatible.
                </p>
            </div>
        </>
    );
}
