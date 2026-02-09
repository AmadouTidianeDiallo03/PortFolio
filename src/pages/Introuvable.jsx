import { Link } from "react-router-dom";
import SEO from "../components/SEO";

export default function Introuvable() {
    return (
        <>
            <SEO title="Page Introuvable" />
            <div className="container text-center" style={{ padding: "4rem 0" }}>
                <h1 style={{ fontSize: "4rem", color: "var(--primary-color)", marginBottom: "0" }}>404</h1>
                <p style={{ fontSize: "1.5rem", marginBottom: "2rem" }}>Oups ! La page que vous cherchez n'existe pas.</p>
                <Link to="/" className="btn btn-primary">
                    Retour à l'accueil
                </Link>
            </div>
        </>
    );
}
