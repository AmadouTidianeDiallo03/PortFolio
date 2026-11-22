const GITHUB = "https://github.com/AmadouTidianeDiallo03";

export const projects = [
    {
        title: "NouveauDépart – Plateforme d'intégration",
        slug: "nouveau-depart",
        category: "Fullstack / IA",
        shortDescription:
            "Plateforme web intelligente qui accompagne les étudiants internationaux dans leur intégration au Québec.",
        longDescription:
            "Projet universitaire réalisé seul, de l'idée au déploiement. NouveauDépart guide l'étudiant international à chaque étape de son arrivée (permis d'études, logement, transport, vie universitaire) grâce à un parcours personnalisé, une checklist dynamique et un assistant intelligent qui répond à ses questions à partir d'une base de connaissances dédiée.",
        context: "Projet universitaire individuel – conception, développement et déploiement",
        problem:
            "À leur arrivée, les étudiants internationaux font face à une multitude de démarches dispersées sur de nombreux sites et ne savent pas par où commencer.",
        solution:
            "Une application full stack (React + Django REST Framework) qui centralise l'information, adapte le parcours au profil de l'étudiant et intègre NordikBot, un assistant basé sur Gemini avec une approche inspirée du RAG.",
        tech: [
            "React",
            "Vite",
            "Python",
            "Django REST Framework",
            "JWT",
            "Gemini AI",
            "SQLite / PostgreSQL",
            "Leaflet",
            "Railway",
        ],
        features: [
            "Authentification sécurisée par jetons JWT",
            "Onboarding et tableau de bord personnalisés selon le profil",
            "Checklist dynamique de suivi des démarches d'installation",
            "Assistant intelligent NordikBot (Gemini + base de connaissances)",
            "Reconnaissance et synthèse vocale pour l'accessibilité",
            "Carte interactive des services (Leaflet)",
            "Mentorat avec prise de rendez-vous, budget, événements et glossaire",
            "Panneau d'administration",
        ],
        highlights: [
            "Projet mené seul de bout en bout",
            "Intégration d'IA générative dans une application réelle",
            "Application déployée en production",
        ],
        screenshots: [],
        githubUrl: `${GITHUB}/NouveauDepart`,
        demoUrl: "https://nouveau-depart-one.vercel.app",
    },
    {
        title: "Gestion des Ventes de Véhicules",
        slug: "gestion-ventes-vehicules",
        category: "Fullstack",
        shortDescription:
            "Application full stack de gestion de l'inventaire et des ventes d'un concessionnaire automobile.",
        longDescription:
            "Plateforme permettant de gérer l'inventaire de véhicules, les clients et les utilisateurs d'un concessionnaire. Le frontend React communique avec une API REST Django sécurisée par JWT, et la qualité du code est suivie grâce à une intégration continue GitLab et SonarQube.",
        context: "Projet académique en équipe",
        problem:
            "Les concessionnaires ont besoin d'un outil simple pour suivre leur stock et leurs ventes en temps réel.",
        solution:
            "Architecture séparée : interface React avec Redux Toolkit d'un côté, API REST Django avec authentification JWT et base MongoDB de l'autre.",
        tech: ["React", "Redux Toolkit", "Python", "Django REST Framework", "JWT", "MongoDB", "GitLab CI", "SonarQube"],
        features: [
            "Gestion de l'inventaire des véhicules (CRUD)",
            "Inscription, connexion et gestion des utilisateurs",
            "Suivi du stock et des ventes",
            "Pipeline d'intégration continue avec analyse de code",
        ],
        highlights: ["Travail d'équipe et analyse des besoins", "Qualité du code suivie avec SonarQube"],
        screenshots: [],
        githubUrl: `${GITHUB}/ApplicationDeGestionDesVentesVehicule`,
        demoUrl: null,
    },
    {
        title: "Boutique En Ligne (.NET 9)",
        slug: "boutique-en-ligne",
        category: "E-commerce / Web",
        shortDescription: "Plateforme e-commerce complète avec ASP.NET Core MVC et paiement en ligne Stripe.",
        longDescription:
            "Boutique en ligne développée avec .NET 9 et le patron MVC. Elle couvre tout le parcours d'achat : catalogue, panier, commande, paiement sécurisé avec Stripe et génération de factures, avec une gestion des comptes basée sur ASP.NET Identity.",
        context: "Projet académique",
        problem: "Mettre en place une solution de vente en ligne performante, sécurisée et évolutive.",
        solution:
            "Application ASP.NET Core MVC avec Entity Framework Core et SQL Server pour la persistance, ASP.NET Identity pour l'authentification et Stripe pour les paiements.",
        tech: ["C#", "ASP.NET Core MVC", ".NET 9", "Entity Framework Core", "SQL Server", "ASP.NET Identity", "Stripe"],
        features: [
            "Catalogue de produits par catégories",
            "Panier et gestion des commandes",
            "Paiement en ligne avec Stripe",
            "Génération de factures",
            "Comptes utilisateurs et authentification",
        ],
        highlights: ["Intégration d'un vrai service de paiement", "Architecture MVC respectée"],
        screenshots: [],
        githubUrl: `${GITHUB}/BoutiqueEnLigne`,
        demoUrl: null,
    },
    {
        title: "Architecture Microservices : Réservation",
        slug: "reservation-microservice",
        category: "Backend / Cloud",
        shortDescription: "Système de réservation distribué en microservices .NET, conteneurisé avec Docker.",
        longDescription:
            "Plateforme de réservation découpée en services autonomes (utilisateurs, ressources, réservations, paiements, notifications), exposés derrière une passerelle API Ocelot. Chaque service est conteneurisé avec Docker et possède sa propre base de données.",
        context: "Projet académique en équipe – Architecture logicielle",
        problem:
            "Les applications monolithiques deviennent difficiles à faire évoluer et à maintenir quand la charge et la complexité augmentent.",
        solution:
            "Découpage du domaine en microservices indépendants communiquant par API REST, avec une passerelle unique, une authentification JWT et une documentation Swagger.",
        tech: ["C#", ".NET 9", "API REST", "Ocelot (API Gateway)", "JWT", "Docker", "SQL Server", "Swagger", "Stripe"],
        features: [
            "6 services : passerelle, utilisateurs, ressources, réservations, paiements, notifications",
            "Passerelle API Ocelot avec documentation Swagger centralisée",
            "Authentification par jetons JWT",
            "Une base de données par service",
            "Conteneurisation Docker de chaque service",
        ],
        highlights: ["Architecture distribuée", "Services indépendants et déployables séparément"],
        screenshots: [],
        githubUrl: `${GITHUB}/ReservationMicroservice/tree/main/ReservationMicroservice_Tidiane_Yasmina`,
        demoUrl: null,
    },
    {
        title: "Système de Réservation (MVC)",
        slug: "reservation-mvc",
        category: "Web",
        shortDescription: "Application web ASP.NET MVC de réservation d'offres, avec paiement et factures PDF.",
        longDescription:
            "Version monolithique du système de réservation, structurée selon le patron Modèle-Vue-Contrôleur. Elle propose un catalogue d'offres, un panier, le paiement en ligne, la génération de factures PDF et un espace d'administration.",
        context: "Projet académique en équipe – comparaison d'architectures",
        problem:
            "Développer rapidement une application métier avec une interface cohérente et une logique centralisée.",
        solution:
            "Patron MVC pour séparer interface, logique et données dans une seule application, avec Entity Framework Core et ASP.NET Identity.",
        tech: ["C#", "ASP.NET Core MVC", ".NET 9", "Entity Framework Core", "SQL Server / MySQL", "Stripe", "iTextSharp (PDF)"],
        features: [
            "Catalogue d'offres et panier de réservation",
            "Paiement en ligne avec Stripe",
            "Génération de factures PDF",
            "Gestion des profils et authentification",
            "Espace d'administration et import de données",
        ],
        highlights: ["Fonctionnalités métier complètes", "Comparaison monolithe vs microservices"],
        screenshots: [],
        githubUrl: `${GITHUB}/ReservationMVC/tree/main/ReservationMVC_Tidiane_Yasmina`,
        demoUrl: null,
    },
    {
        title: "OGSL – Plateforme de Données",
        slug: "ogsl-gestion",
        category: "Fullstack / Data",
        shortDescription:
            "Plateforme full stack de collecte, de stockage et de visualisation de données, avec API REST et GraphQL.",
        longDescription:
            "Plateforme client-serveur qui collecte et structure des données provenant de différentes sources, les stocke dans MySQL et les expose de façon sécurisée via une API REST et GraphQL. Une interface React en TypeScript permet de les explorer sous forme de tableaux de bord et de graphiques, et de les exporter en PDF.",
        context: "Travail pratique – Développement full stack",
        problem: "Centraliser, sécuriser et visualiser des données provenant de sources hétérogènes.",
        solution:
            "Backend Django exposant REST et GraphQL, frontend React/TypeScript avec Redux Toolkit, Tailwind CSS et Recharts.",
        tech: ["React", "TypeScript", "Redux Toolkit", "Tailwind CSS", "Django REST Framework", "GraphQL", "MySQL", "Recharts"],
        features: [
            "Collecte et structuration de données multi-sources",
            "API REST et GraphQL documentées",
            "Tableaux de bord et graphiques interactifs",
            "Export des données en PDF",
            "Tests du frontend avec Vitest",
        ],
        highlights: ["Deux styles d'API (REST et GraphQL)", "Visualisation de données"],
        screenshots: [],
        githubUrl: `${GITHUB}/OGSL`,
        demoUrl: null,
    },
    {
        title: "Système d'Authentification OTP",
        slug: "otp-auth-system",
        category: "Sécurité",
        shortDescription:
            "Application d'authentification à deux facteurs par mot de passe à usage unique, simulant un système bancaire.",
        longDescription:
            "Application client-serveur en Python avec interface graphique Tkinter. Le client génère un code à usage unique basé sur le temps (OTP) à partir d'un hachage cryptographique, et le serveur vérifie l'identifiant, le mot de passe puis le code OTP avant d'autoriser l'accès.",
        context: "Cours de sécurité informatique",
        problem:
            "Un mot de passe statique seul ne suffit pas à protéger l'accès à des comptes sensibles comme des comptes bancaires.",
        solution:
            "Ajout d'un second facteur : un code OTP renouvelé toutes les 60 secondes, avec limitation du nombre de tentatives.",
        tech: ["Python", "Tkinter", "hashlib (SHA)", "OTP basé sur le temps"],
        features: [
            "Authentification en deux étapes (mot de passe + OTP)",
            "Code renouvelé automatiquement toutes les 60 secondes",
            "Blocage après 5 tentatives échouées",
            "Exécutables client et serveur (PyInstaller) et guide d'utilisation",
        ],
        highlights: ["Principes de l'authentification forte", "Interface graphique en Python"],
        screenshots: [],
        githubUrl: `${GITHUB}/Syst-me-d-Authentification-par-OTP-pour-une-Banque-Mondiale-`,
        demoUrl: null,
    },
    {
        title: "Assistant conversationnel Gemini",
        slug: "llm-integration",
        category: "Intelligence Artificielle",
        shortDescription:
            "Assistant conversationnel en Python connecté à l'API Gemini de Google, accompagné d'un rapport sur les LLM.",
        longDescription:
            "Exploration des grands modèles de langage (LLM) : rédaction d'un rapport sur leur fonctionnement et développement d'un assistant conversationnel en ligne de commande qui interroge le modèle Gemini de Google.",
        context: "Projet de recherche sur les LLM",
        problem: "Comprendre le fonctionnement des LLM et savoir les intégrer dans une application.",
        solution:
            "Script Python utilisant le SDK Google Generative AI, avec une boucle de conversation, une gestion des erreurs et une animation pendant la génération (multithreading).",
        tech: ["Python", "Gemini API", "Google Generative AI SDK", "Multithreading"],
        features: [
            "Conversation en continu avec le modèle Gemini",
            "Gestion des erreurs et des interruptions",
            "Animation d'attente avec un thread séparé",
            "Rapport de recherche sur les LLM",
        ],
        highlights: ["Première intégration d'IA générative", "Base du futur assistant NordikBot"],
        screenshots: [],
        githubUrl: `${GITHUB}/LLM`,
        demoUrl: null,
    },
    {
        title: "Gestionnaire de mémoire en Assembleur (MASM)",
        slug: "masm-assembly",
        category: "Systèmes / Bas Niveau",
        shortDescription:
            "Simulation d'un gestionnaire de programmes et de mémoire (RAM / mémoire virtuelle) en assembleur x64.",
        longDescription:
            "Programme bas niveau écrit en assembleur MASM x64 qui simule la gestion des programmes par un système d'exploitation : chargement depuis des fichiers, allocation en RAM, va-et-vient (swap) vers la mémoire virtuelle et suivi de l'état de chaque programme.",
        context: "Cours d'architecture des ordinateurs",
        problem: "Comprendre comment un système d'exploitation gère la mémoire et les programmes en cours d'exécution.",
        solution:
            "Programme modulaire (main, mémoire, programmes) qui manipule directement registres et adresses mémoire et fait appel aux fonctions de la bibliothèque C.",
        tech: ["Assembleur x64", "MASM", "Visual Studio", "Bibliothèque C (printf, fopen…)"],
        features: [
            "Chargement de programmes depuis des fichiers",
            "Allocation de la RAM et de la mémoire virtuelle",
            "Swap : déplacement de programmes entre RAM et mémoire virtuelle",
            "Suivi de l'état des programmes (fermé, ouvert, en cours, swappé)",
        ],
        highlights: ["Compréhension fine du matériel", "Code modulaire en assembleur"],
        screenshots: [],
        githubUrl: `${GITHUB}/Masm`,
        demoUrl: null,
    },
    {
        title: "Portfolio Web Personnel",
        slug: "portfolio",
        category: "Web",
        shortDescription: "Ce site : un portfolio responsive en React pour présenter mes projets et compétences.",
        longDescription:
            "Site portfolio conçu et développé avec React et Vite, déployé sur Vercel. Il présente mon parcours, mes projets et mes documents professionnels, avec un mode clair/sombre et une navigation fluide.",
        context: "Projet personnel",
        problem: "Présenter mon parcours et mes réalisations de façon claire et professionnelle aux recruteurs.",
        solution:
            "Application React monopage avec routage, composants réutilisables, données centralisées et déploiement continu sur Vercel.",
        tech: ["React", "Vite", "JavaScript", "CSS3", "React Router", "Vercel"],
        features: [
            "Design responsive (mobile, tablette, ordinateur)",
            "Mode clair / sombre",
            "Pages de détail pour chaque projet",
            "CV et lettre de présentation téléchargeables",
        ],
        highlights: ["Déploiement continu", "Code organisé et maintenable"],
        screenshots: [],
        githubUrl: `${GITHUB}/PortFolio`,
        demoUrl: "https://port-folio-lyart-alpha.vercel.app",
    },
];
