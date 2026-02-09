import { skills } from "../data/skills";
import SEO from "../components/SEO";
import { TerminalIcon, DatabaseIcon, WrenchIcon, UserCheckIcon } from "../components/Icons";
import "../styles/skills.css";

// Helper to map category to icon
const getIconForCategory = (category) => {
    if (category.includes("Langages")) return <TerminalIcon width="24" height="24" />;
    if (category.includes("Développement")) return <DatabaseIcon width="24" height="24" />;
    if (category.includes("Outils")) return <WrenchIcon width="24" height="24" />;
    return <UserCheckIcon width="24" height="24" />;
};

export default function Skills() {
    return (
        <>
            <SEO title="Compétences" description="Liste de mes compétences techniques et méthodologiques." />
            <div className="container" style={{ padding: "4rem 0" }}>
                <div style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto 3rem auto" }}>
                    <h1 className="section-title">Mes Compétences</h1>
                    <p style={{ fontSize: "1.2rem", color: "var(--text-secondary)" }}>
                        Un aperçu de mon bagage technique et de mes outils de prédilection.
                    </p>
                </div>

                <div className="skills-grid">
                    {skills.map((skillGroup) => (
                        <div key={skillGroup.category} className="skill-card">
                            <div className="skill-header">
                                <div className="skill-icon-wrapper">
                                    {getIconForCategory(skillGroup.category)}
                                </div>
                                <h3 className="skill-title">{skillGroup.category}</h3>
                            </div>

                            <ul className="skill-list">
                                {skillGroup.items.map((skill) => (
                                    <li key={skill} className="skill-item">
                                        <svg className="skill-check" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                            <polyline points="20 6 9 17 4 12" />
                                        </svg>
                                        {skill}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
