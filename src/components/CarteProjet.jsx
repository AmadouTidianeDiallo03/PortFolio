import { Link } from "react-router-dom";

export default function CarteProjet({ project }) {
    // Fallback styling for placeholder images usually involves a colored div if src fails, 
    // but here we assume local placeholder paths or we can use a generic placeholder service if needed.
    // For now, we render whatever string is passed, or a div if empty.

    return (
        <article className="card project-card">
            <div className="card-content">
                <span className="tag" style={{ marginBottom: "0.5rem", display: "inline-block" }}>
                    {project.category}
                </span>
                <h3>{project.title}</h3>
                <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem", margin: "0.5rem 0" }}>
                    {project.shortDescription}
                </p>
                <div className="project-tags">
                    {project.tech.slice(0, 3).map((t) => (
                        <span key={t} className="tag" style={{ background: "#f1f5f9", color: "#475569", fontSize: "0.8rem" }}>
                            {t}
                        </span>
                    ))}
                    {project.tech.length > 3 && <span className="tag" style={{ background: "#f1f5f9", color: "#475569", fontSize: "0.8rem" }}>+</span>}
                </div>
                <div style={{ marginTop: "1rem" }}>
                    <Link to={`/projets/${project.slug}`} className="btn btn-outline" style={{ width: "100%", padding: "0.5rem" }}>
                        Voir détails
                    </Link>
                </div>
            </div>
        </article>
    );
}
