import { PERSON } from "../data/constants";

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="container">
                <div style={{ marginTop: "0.5rem", display: "flex", justifyContent: "center", gap: "1.5rem", alignItems: "center" }}>
                    <a href={PERSON.github} target="_blank" rel="noopener noreferrer">
                        GitHub
                    </a>
                    <a href={PERSON.linkedin} target="_blank" rel="noopener noreferrer">
                        LinkedIn
                    </a>
                    <a href={`mailto:${PERSON.email}`}>
                        {PERSON.email}
                    </a>
                </div>
            </div>
        </footer>
    );
}
