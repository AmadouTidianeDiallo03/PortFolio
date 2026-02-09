export const projects = [
    {
        title: "Gestion des Ventes de Véhicules",
        slug: "gestion-ventes-vehicules",
        category: "Fullstack",
        shortDescription: "Création d'une application fullstack pour la gestion d'un inventaire de véhicules.",
        longDescription:
            "Développement d'un système complet permettant la gestion d'un inventaire de véhicules, le suivi des ventes et l'administration des stocks. L'application intègre des pratiques DevOps modernes avec analyse de code et conteneurisation.",
        context: "Projet Académique / Groupe",
        problem:
            "Optimiser la gestion des stocks de véhicules et faciliter le processus de vente pour les concessionnaires.",
        solution:
            "Développement d'une architecture séparée (Frontend React / Backend Java) assurant maintenabilité et performance.",
        tech: ["React", "Redux Toolkit", "Java 17", "Spring Boot", "Docker", "SonarQube"],
        features: [
            "Gestion des stocks véhicules",
            "Tableau de bord des ventes",
            "Authentification et rôles",
            "Analyse de code (SonarQube)",
            "Déploiement Docker",
        ],
        highlights: ["Architecture Clean", "CI/CD avec GitLab & SonarQube"],
        screenshots: [],
        githubUrl: "https://github.com/AmadouTidianeDiallo03/ApplicationDeGestionDesVentesVehicule",
        demoUrl: null,
    },
    {
        title: "Boutique En Ligne (.NET 9)",
        slug: "boutique-en-ligne",
        category: "E-commerce / Web",
        shortDescription: "Création d'une plateforme e-commerce complète avec ASP.NET Core MVC.",
        longDescription:
            "Développement d'une boutique en ligne moderne exploitant la puissance de .NET 9 et l'architecture MVC. Le système gère l'intégralité du processus de vente, de la navigation catalogue à la gestion du panier et des commandes.",
        context: "Projet Personnel / Portfolio",
        problem:
            "Mettre en place une solution de vente en ligne performante, sécurisée et évolutive.",
        solution:
            "Implémentation d'une application monolithique modulaire avec Entity Framework pour la persistance et une interface reactive avec jQuery.",
        tech: ["C#", "ASP.NET Core MVC", ".NET 9", "SQL Server", "Entity Framework", "jQuery"],
        features: [
            "Catalogue produits dynamique",
            "Système de panier et commande",
            "Gestion des catégories",
            "Interface d'administration",
        ],
        highlights: ["Utilisation de .NET 9", "Architecture MVC Respectée"],
        screenshots: [],
        githubUrl: "https://github.com/AmadouTidianeDiallo03/BoutiqueEnLigne",
        demoUrl: null,
    },
    {
        title: "Architecture Microservices : Réservation",
        slug: "reservation-microservice",
        category: "Backend / Cloud",
        shortDescription: "Conception d'un système distribué pour la réservation en ligne de services.",
        longDescription:
            "Implémentation d'une plateforme de réservation robuste reposant sur une architecture microservices pour assurer une scalabilité maximale. Chaque domaine métier (Utilisateurs, Réservations, Paiements) est géré par un service autonome.",
        context: "Projet Avancé - Architecture Logicielle",
        problem:
            "Les architectures monolithiques deviennent difficiles à maintenir et à scaler avec l'augmentation de la charge et de la complexité.",
        solution:
            "Découpage du domaine en microservices indépendants communiquant via API REST, permettant un déploiement et une maintenance agiles.",
        tech: ["C#", ".NET Core", "API REST", "Docker", "SQL Server"],
        features: [
            "Services découplés",
            "Base de données par service",
            "Communication inter-service",
            "Tolérance aux pannes",
        ],
        highlights: ["Scalabilité horizontale", "Indépendance des services"],
        screenshots: [],
        githubUrl: "https://github.com/AmadouTidianeDiallo03/ReservationMicroservice/tree/main/ReservationMicroservice_Tidiane_Yasmina",
        demoUrl: null,
    },
    {
        title: "Système de Réservation (MVC)",
        slug: "reservation-mvc",
        category: "Web",
        shortDescription: "Développement d'une application web monolithique pour la gestion centralisée des réservations.",
        longDescription:
            "Réalisation d'une version monolithique du système de réservation, structurée selon le patron de conception Modèle-Vue-Contrôleur. Ce projet vise à offrir une interface utilisateur intégrée et une gestion centralisée de la logique métier.",
        context: "Comparaison d'Architectures",
        problem:
            "Développer rapidement une application métier avec une interface utilisateur cohérente et une logique centralisée.",
        solution:
            "Utilisation du pattern MVC pour séparer les responsabilités (UI, Logique, Données) au sein d'une seule application déployable.",
        tech: ["C#", "ASP.NET MVC", "Entity Framework", "Bootstrap"],
        features: [
            "Interface Utilisateur Razor",
            "Gestion de base de données relationnelle",
            "Authentification centralisée",
            "Validation des données",
        ],
        highlights: ["Développement rapide", "Cohérence des données"],
        screenshots: [],
        githubUrl: "https://github.com/AmadouTidianeDiallo03/ReservationMVC/tree/main/ReservationMVC_Tidiane_Yasmina",
        demoUrl: null,
    },
    {
        title: "Système d'Authentification OTP",
        slug: "otp-auth-system",
        category: "Sécurité / Réseaux",
        shortDescription: "Développement d'un système d'authentification à deux facteurs sécurisé.",
        longDescription:
            "Conception d'une application client-serveur sécurisée simulant un système bancaire. Utilisation de sockets Python pour la communication réseau et implémentation d'un algorithme de génération de mots de passe à usage unique (OTP) pour renforcer l'authentification.",
        context: "Sécurité Informatique & Réseaux",
        problem:
            "Sécuriser l'accès aux comptes bancaires contre les tentatives d'intrusion basiques par mot de passe statique.",
        solution:
            "Implémentation d'une couche 2FA via OTP et chiffrement des communications entre le client et le serveur.",
        tech: ["Python", "Sockets TCP/IP", "Cryptographie", "Algorithmes OTP"],
        features: [
            "Communication Client-Serveur sécurisée",
            "Génération d'OTP",
            "Validation en temps réel",
            "Simulation de transactions",
        ],
        highlights: ["Programmation Socket", "Renforcement Sécurité"],
        screenshots: [],
        githubUrl: "https://github.com/AmadouTidianeDiallo03/Syst-me-d-Authentification-par-OTP-pour-une-Banque-Mondiale-",
        demoUrl: null,
    },
    {
        title: "Intégration LLM (AI)",
        slug: "llm-integration",
        category: "Intelligence Artificielle",
        shortDescription: "Développement de scripts Python pour l'exploitation de modèles de langage (LLM).",
        longDescription:
            "Exploration et mise en œuvre de modèles de langage (Large Language Models) pour des tâches de traitement du langage naturel. Ce projet se concentre sur l'interaction programmatique avec des modèles d'IA via des scripts Python.",
        context: "Projet de Recherche & Développement",
        problem:
            "Exploiter la puissance de l'IA générative pour automatiser ou améliorer des processus basés sur le texte.",
        solution:
            "Développement de scripts modulaires permettant d'interroger et d'utiliser des LLMs pour diverses applications.",
        tech: ["Python", "Hugging Face Transformers", "PyTorch", "NLP"],
        features: [
            "Chargement de modèles pré-entraînés",
            "Génération de texte contextuelle",
            "Traitement du langage naturel (NLP)",
            "Optimisation des prompts",
        ],
        highlights: ["Intelligence Artificielle", "Innovation Technologique"],
        screenshots: [],
        githubUrl: "https://github.com/AmadouTidianeDiallo03/LLM",
        demoUrl: null,
    },
    {
        title: "OGSL - Plateforme de Données",
        slug: "ogsl-gestion",
        category: "Fullstack / Web",
        shortDescription: "Développement d'une plateforme Fullstack React pour la collecte, le stockage et la visualisation de données.",
        longDescription:
            "L’objectif de ce projet est de développer une plateforme complète (Client/Serveur) permettant de collecter, structurer et stocker des données provenant de différentes sources. Ces données sont rendues accessibles de manière sécurisée via une API REST ou GraphQL, avec un mécanisme d’authentification. Une interface graphique en React offre la possibilité de visualiser les informations.",
        context: "Travail Pratique - Développement Fullstack",
        problem:
            "Centraliser, sécuriser et visualiser des données provenant de sources hétérogènes.",
        solution:
            "Architecture Client-Serveur séparant le frontend (React) du backend (API), assurant flexibilité et sécurité.",
        tech: ["React", "Node.js", "API REST / GraphQL", "SQL", "Authentification"],
        features: [
            "Collecte de données multi-sources",
            "API sécurisée (REST/GraphQL)",
            "Interface de visualisation React",
            "Authentification utilisateur",
        ],
        highlights: ["Architecture Séparée", "Sécurité des données"],
        screenshots: [],
        githubUrl: "https://github.com/AmadouTidianeDiallo03/OGSL",
        demoUrl: null,
    },
    {
        title: "Projet Bas Niveau (MASM)",
        slug: "masm-assembly",
        category: "Systèmes / Bas Niveau",
        shortDescription: "Programmation de routines en Assembleur (MASM) pour l'interaction directe avec le matériel.",
        longDescription:
            "Écriture de programmes bas niveau en Assembleur pour explorer les fondements de l'informatique. Ce projet implique la manipulation directe des registres processeur (CPU), la gestion de la mémoire (Stack/Heap) et l'optimisation des instructions critiques.",
        context: "Architecture des Ordinateurs",
        problem:
            "Comprendre le fonctionnement interne de la machine et écrire du code à haute performance proche du matériel.",
        solution:
            "Développement de routines bas niveau pour le traitement de données et l'interaction matérielle directe.",
        tech: ["Assembly (x86)", "MASM", "CPU Registers", "Low-level Logic"],
        features: [
            "Manipulation de la pile (Stack)",
            "Opérations arithmétiques binaires",
            "Gestion des interruptions",
            "Optimisation de boucles",
        ],
        highlights: ["Performance maximale", "Contrôle total du matériel"],
        screenshots: [],
        githubUrl: "https://github.com/AmadouTidianeDiallo03/Masm",
        demoUrl: null,
    },
];
