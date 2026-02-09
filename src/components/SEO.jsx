import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { SITE_CONFIG, PERSON } from "../data/constants";

export default function SEO({ title, description }) {
    const { pathname } = useLocation();

    const siteTitle = title ? `${title} | ${PERSON.name}` : SITE_CONFIG.title;
    const metaDescription = description || SITE_CONFIG.description;
    const url = `${SITE_CONFIG.url}${pathname}`;
    const image = `${SITE_CONFIG.url}${PERSON.ogImagePath}`;

    useEffect(() => {
        document.title = siteTitle;

        // Update meta tags manually
        const metaTags = {
            description: metaDescription,
            "og:title": siteTitle,
            "og:description": metaDescription,
            "og:url": url,
            "og:image": image,
            "twitter:title": siteTitle,
            "twitter:description": metaDescription,
            "twitter:image": image,
        };

        Object.entries(metaTags).forEach(([name, content]) => {
            let element = document.querySelector(`meta[name="${name}"]`) || document.querySelector(`meta[property="${name}"]`);

            if (!element) {
                element = document.createElement("meta");
                if (name.startsWith("og:")) {
                    element.setAttribute("property", name);
                } else {
                    element.setAttribute("name", name);
                }
                document.head.appendChild(element);
            }

            element.setAttribute("content", content);
        });

        // Clean up or inject JSON-LD (Person) on Home only
        if (pathname === "/") {
            const scriptId = "json-ld-person";
            let script = document.getElementById(scriptId);

            if (!script) {
                script = document.createElement("script");
                script.id = scriptId;
                script.type = "application/ld+json";
                script.text = JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "Person",
                    name: PERSON.name,
                    url: SITE_CONFIG.url,
                    jobTitle: PERSON.tagline,
                    image: image,
                    sameAs: [PERSON.linkedin, PERSON.github]
                });
                document.head.appendChild(script);
            }
        }

    }, [siteTitle, metaDescription, pathname, url, image]);

    return null;
}
