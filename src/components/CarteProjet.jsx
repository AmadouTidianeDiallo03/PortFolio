import { Link } from "react-router-dom";
import { TerminalIcon, GlobeIcon, DatabaseIcon, LockIcon, CpuIcon, MonitorIcon, CodeIcon } from "./Icons";
import "../styles/projects.css";

const getProjectIcon = (category) => {
    const cat = category.toLowerCase();
    if (cat.includes("web") || cat.includes("e-commerce") || cat.includes("fullstack")) return <GlobeIcon />;
    if (cat.includes("sécurité") || cat.includes("otp")) return <LockIcon />;
    if (cat.includes("intelligence") || cat.includes("ia")) return <CpuIcon />;
    if (cat.includes("système") || cat.includes("bas niveau")) return <TerminalIcon />;
    if (cat.includes("desktop") || cat.includes("gestion")) return <MonitorIcon />;
    return <CodeIcon />;
};

export default function CarteProjet({ project }) {
    return (
        <article className="project-card">
            <div className="card-header">
                <div className="project-icon-wrapper">
                    {getProjectIcon(project.category)}
                </div>
                <span className="project-category">{project.category.split('/')[0].trim()}</span>
            </div>

            <div className="card-body">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">
                    {project.shortDescription}
                </p>

                <div className="project-tags">
                    {project.tech.slice(0, 3).map((t) => (
                        <span key={t} className="tech-tag">
                            {t}
                        </span>
                    ))}
                    {project.tech.length > 3 && <span className="tech-tag">+{project.tech.length - 3}</span>}
                </div>
            </div>

            <div className="card-footer">
                <Link to={`/projets/${project.slug}`} className="learn-more-btn">
                    Voir les détails
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                </Link>
            </div>
        </article>
    );
}
