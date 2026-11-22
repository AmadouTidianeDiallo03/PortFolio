import { Link } from "react-router-dom";
import { PERSON } from "../data/constants";
import { projects } from "../data/projects";
import SEO from "../components/SEO";
import {
    CodeIcon,
    DatabaseIcon,
    GlobeIcon,
    LockIcon,
    MonitorIcon,
    TargetIcon,
    GraduationCapIcon,
    MapPinIcon,
    BriefcaseIcon,
    UserCheckIcon,
} from "../components/Icons";
import "../styles/home.css";

const DOMAINS = [
    {
        icon: <CodeIcon width="22" height="22" />,
        title: "Développement",
        text: "Applications web et logicielles",
        tools: "C# • .NET • React • Python",
    },
    {
        icon: <MonitorIcon width="22" height="22" />,
        title: "Soutien technique",
        text: "Postes de travail, utilisateurs et outils",
        tools: "Windows • Linux • Office 365",
    },
    {
        icon: <GlobeIcon width="22" height="22" />,
        title: "Réseaux & systèmes",
        text: "Configuration, virtualisation et diagnostic",
        tools: "TCP/IP • VPN • VirtualBox • Wireshark",
    },
    {
        icon: <LockIcon width="22" height="22" />,
        title: "Sécurité informatique",
        text: "Accès, authentification et bonnes pratiques",
        tools: "Contrôle d'accès • 2FA • Vulnérabilités",
    },
    {
        icon: <DatabaseIcon width="22" height="22" />,
        title: "Bases de données",
        text: "Modélisation, requêtes et intégrité",
        tools: "MySQL • SQL Server • SQL",
    },
    {
        icon: <TargetIcon width="22" height="22" />,
        title: "Projet & qualité",
        text: "Analyse des besoins, tests et documentation",
        tools: "Scrum • UML • Plans de tests",
    },
];

export default function Home() {
    return (
        <>
            <SEO title="Accueil" description={`Bienvenue sur le portfolio de ${PERSON.name}.`} />

            <section className="hero-section">
                <div className="container hero-container">
                    <div className="hero-content">
                        <span className="availability-badge">
                            <span className="availability-dot" aria-hidden="true"></span>
                            {PERSON.availability} · Ouvert à tous les métiers des TI
                        </span>

                        <h1 className="hero-title">
                            Bonjour, je suis <br />
                            <span className="highlight-text">{PERSON.name}</span>
                        </h1>

                        <p className="hero-hook">
                            Une base solide en TI, une grande envie d'apprendre,
                            et la motivation de faire mes preuves dès le premier jour.
                        </p>

                        <p className="hero-subtitle">
                            {PERSON.tagline} Développement, soutien technique, réseaux,
                            sécurité ou bases de données : je suis prêt à mettre ma
                            polyvalence au service de votre équipe.
                        </p>

                        <div className="hero-actions">
                            <Link to="/projets" className="btn btn-primary">
                                Voir mes projets
                            </Link>
                            <a href={PERSON.cvPath} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                                Consulter mon CV
                            </a>
                            <Link to="/contact" className="btn btn-link">
                                Me contacter →
                            </Link>
                        </div>
                    </div>

                    <div className="hero-visual">
                        <div className="hero-blob"></div>
                        <aside className="profile-card" aria-label="Profil en bref">
                            <div className="profile-avatar" aria-hidden="true">ATD</div>
                            <p className="profile-name">{PERSON.name}</p>
                            <p className="profile-role">Diplômé en informatique · Profil TI polyvalent</p>
                            <ul className="profile-facts">
                                <li>
                                    <GraduationCapIcon width="18" height="18" />
                                    <span>Baccalauréat en informatique, UQAR (2026)</span>
                                </li>
                                <li>
                                    <BriefcaseIcon width="18" height="18" />
                                    <span>{projects.length} projets réalisés, du web à la sécurité</span>
                                </li>
                                <li>
                                    <MapPinIcon width="18" height="18" />
                                    <span>{PERSON.location} · Véhiculé</span>
                                </li>
                                <li>
                                    <UserCheckIcon width="18" height="18" />
                                    <span>Disponible à temps plein, dès maintenant</span>
                                </li>
                            </ul>
                        </aside>
                    </div>
                </div>
            </section>

            <section className="domains-section">
                <div className="container">
                    <div className="domains-header">
                        <p className="domains-eyebrow">Polyvalence</p>
                        <h2 className="domains-title">Là où je peux vous être utile</h2>
                        <p className="domains-intro">
                            Ma formation généraliste m'a fait toucher à toutes les facettes des TI.
                            Je suis ouvert à une première opportunité dans chacun de ces domaines.
                        </p>
                    </div>

                    <div className="domains-grid">
                        {DOMAINS.map((d) => (
                            <article key={d.title} className="domain-card">
                                <div className="domain-icon">{d.icon}</div>
                                <h3>{d.title}</h3>
                                <p>{d.text}</p>
                                <span className="domain-tools">{d.tools}</span>
                            </article>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
