import { skills } from "../data/skills";
import SEO from "../components/SEO";

export default function Skills() {
    return (
        <>
            <SEO title="Compétences" description="Liste de mes compétences techniques et méthodologiques." />
            <div className="container">
                <h1 className="section-title">Mes Compétences</h1>

                <div className="project-grid">
                    {/* Reusing project-grid for layout, or create a specific grid */}
                    {skills.map((skillGroup) => (
                        <div key={skillGroup.category} className="card">
                            <h3 style={{ color: "var(--primary-color)", marginBottom: "1rem" }}>{skillGroup.category}</h3>
                            <ul style={{ listStyle: "none" }}>
                                {skillGroup.items.map((skill) => (
                                    <li key={skill} style={{ marginBottom: "0.5rem", display: "flex", alignItems: "center" }}>
                                        <span style={{ marginRight: "0.5rem", color: "var(--success-color)" }}>✔</span>
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
