import { PERSON } from "../data/constants";
import SEO from "../components/SEO";
import { Link } from "react-router-dom";

export default function About() {
    return (
        <>
            <SEO title="À Propos" description={`En savoir plus sur ${PERSON.name}.`} />
            <div className="container" style={{ maxWidth: "800px" }}>
                <h1 className="section-title">À Propos de Moi</h1>

                <div className="card" style={{ padding: "2rem" }}>
                    <p style={{ marginBottom: "1rem", fontSize: "1.1rem" }}>
                        Bonjour ! Je m'appelle <strong>{PERSON.name}</strong>.
                    </p>
                    <p style={{ marginBottom: "1rem" }}>
                        <strong>Étudiant en fin de cycle de baccalauréat en informatique</strong> à l’Université du Québec à Rimouski (campus de Lévis), je suis actuellement à la recherche active d’un stage ou d’un emploi étudiant en informatique.
                    </p>
                    <p style={{ marginBottom: "1rem" }}>
                        Mon objectif est clair : mettre en pratique mes compétences techniques dans un environnement professionnel réel, tout en continuant à apprendre auprès de développeurs et de spécialistes expérimentés.
                    </p>
                    <p style={{ marginBottom: "1rem" }}>
                        Au fil de mon parcours universitaire, j’ai travaillé sur des projets concrets en développement logiciel et web, notamment avec C#, Python, ASP.NET, HTML, CSS et JavaScript, ainsi qu’en bases de données relationnelles (MySQL). Ces expériences m’ont appris à structurer des solutions fiables, à respecter des exigences fonctionnelles et à appliquer de bonnes pratiques de développement.
                    </p>
                    <p style={{ marginBottom: "1rem" }}>
                        Je m’intéresse également aux aspects plus techniques de l’informatique tels que les réseaux, la sécurité, les environnements Linux, la virtualisation et la configuration de VPN, avec une approche rigoureuse axée sur la qualité et la fiabilité des systèmes.
                    </p>
                    <p style={{ marginBottom: "1rem" }}>
                        Sérieux, motivé et doté d’un bon esprit d’équipe, je m’adapte rapidement à de nouveaux environnements et je m’investis pleinement dans chaque projet. Je cherche aujourd’hui une opportunité qui me permettra de contribuer concrètement, d’apprendre sur le terrain et de bâtir une solide expérience professionnelle en informatique.
                    </p>

                    <div style={{ marginTop: "2rem", textAlign: "center" }}>
                        <Link to="/contact" className="btn btn-primary">Discutons-en !</Link>
                    </div>
                </div>
            </div>
        </>
    );
}
