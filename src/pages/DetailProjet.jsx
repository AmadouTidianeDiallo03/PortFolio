import { useParams, Link } from "react-router-dom";
import { projects } from "../data/projects";
import SEO from "../components/SEO";
import Introuvable from "./Introuvable";

export default function DetailProjet() {
    const { slug } = useParams();
    const project = projects.find((p) => p.slug === slug);

    if (!project) return <Introuvable />;

    return (
        <>
            <SEO
                title={project.title}
                description={project.shortDescription}
            />
            <div className="container" style={{ maxWidth: "800px" }}>
                <Link to="/projets" className="btn btn-secondary" style={{ marginBottom: "2rem" }}>← Retour aux projets</Link>

                <header style={{ marginBottom: "2rem" }}>
                    <span className="tag" style={{ marginBottom: "0.5rem", display: "inline-block" }}>{project.category}</span>
                    <h1 style={{ fontSize: "2.5rem", marginBottom: "0.5rem" }}>{project.title}</h1>
                    <p style={{ fontSize: "1.25rem", color: "var(--text-secondary)" }}>{project.shortDescription}</p>
                </header>

                <section className="card" style={{ marginBottom: "2rem" }}>
                    <h3>Contexte</h3>
                    <p>{project.context}</p>
                    <div style={{ margin: "1rem 0" }}>
                        <span style={{ fontWeight: "bold" }}>Problème :</span> {project.problem}
                    </div>
                    <div style={{ margin: "1rem 0" }}>
                        <span style={{ fontWeight: "bold" }}>Solution :</span> {project.solution}
                    </div>
                </section>

                <section style={{ marginBottom: "2rem" }}>
                    <h3>Technologies</h3>
                    <div className="project-tags" style={{ marginTop: "0.5rem" }}>
                        {project.tech.map(t => (
                            <span key={t} className="tag" style={{ fontSize: "1rem" }}>{t}</span>
                        ))}
                    </div>
                </section>

                <div className="grid-2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem", marginBottom: "2rem" }}>
                    <section>
                        <h3>Fonctionnalités</h3>
                        <ul style={{ listStyle: "disc", paddingLeft: "1.5rem" }}>
                            {project.features.map((f, i) => <li key={i}>{f}</li>)}
                        </ul>
                    </section>
                    <section>
                        <h3>Points forts</h3>
                        <ul style={{ listStyle: "disc", paddingLeft: "1.5rem" }}>
                            {project.highlights.map((h, i) => <li key={i}>{h}</li>)}
                        </ul>
                    </section>
                </div>

                <div style={{ display: "flex", gap: "1rem", marginTop: "3rem" }}>
                    {project.githubUrl && (
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                            Voir sur GitHub
                        </a>
                    )}
                    {project.demoUrl && (
                        <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                            Voir la Démo
                        </a>
                    )}
                </div>
            </div>
        </>
    );
}
