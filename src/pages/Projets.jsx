import { projects } from "../data/projects";
import CarteProjet from "../components/CarteProjet";
import SEO from "../components/SEO";

export default function Projects() {
    return (
        <>
            <SEO
                title="Mes Projets"
                description="Découvrez mes projets académiques et personnels en développement web, data et systèmes."
            />
            <div className="container">
                <h1 className="section-title">Mes Projets</h1>

                <div className="projects-grid">
                    {projects.map((project) => (
                        <CarteProjet key={project.slug} project={project} />
                    ))}
                </div>
            </div>
        </>
    );
}
