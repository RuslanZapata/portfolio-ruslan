import { Project } from "../types";

export const projects: Project[] = [
  {
    id: "bible-web-app",
    title: "Bible Web App",
    image:
      "https://raw.githubusercontent.com/RuslanZapata/my-cdn/refs/heads/main/portfolio-ruslan/bible-web-app.png",
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Bible API",
      "Firebase Auth",
      "IndexedDB",
      "Jest",
      "Cypress",
      "Responsive Design",
    ],
    liveUrl: "https://biblia-abierta.vercel.app/",
    githubUrl: "",
    category: "web",
    es: {
      description:
        "Aplicación web para estudio bíblico con funciones avanzadas",
      longDescription:
        "Interfaz frontend para lectura bíblica con búsqueda, marcadores, notas personales y plan de lectura. Utiliza una API bíblica pública y almacena datos localmente para acceso offline.",
      features: [
        "Interfaz responsive con React 18 y TypeScript",
        "Sistema de búsqueda avanzada (por libro, capítulo, palabra clave)",
        "Notas personales y marcadores con IndexedDB (offline)",
        "Autenticación con Firebase Auth",
        "Modo nocturno y ajuste de tamaño de fuente",
        "Integración con Bible API (multiple versiones)",
        "Animaciones fluidas entre capítulos",
        "Pruebas unitarias (Jest) y E2E (Cypress)",
      ],
    },
    en: {
      description: "Bible study web app with advanced features",
      longDescription:
        "Frontend interface for Bible reading with search, bookmarks, personal notes and reading plan. Uses a public Bible API and stores data locally for offline access.",
      features: [
        "Responsive UI with React 18 and TypeScript",
        "Advanced search (by book, chapter, keyword)",
        "Personal notes and bookmarks with IndexedDB (offline)",
        "Firebase Auth integration",
        "Dark mode and font size adjustment",
        "Bible API integration (multiple versions)",
        "Smooth animations between chapters",
        "Unit testing (Jest) and E2E (Cypress)",
      ],
    },
  },
  {
    id: "esg-community",
    title: "Comunidad ESG",
    image:
      "https://gestion.pe/resizer/v2/VJBPMXVFJBHBNNLICUQHAYHUBQ.jpg?auth=384c012ace33313636705a0da44e4b7ea159c0e49a3df8e0d3295f94364058ea&width=1200&height=800",
    technologies: [
      "React",
      "Node.js",
      "ArcXP",
      "AWS S3",
      "Sass",
      "Jest",
      "Responsive Design",
    ],
    liveUrl: "https://gestion.pe/comunidad-esg/",
    githubUrl: "",
    category: "fullstack",
    es: {
      description: "Sección de noticias ESG para diario Gestion",
      longDescription:
        "Maquetación y desarrollo frontend de la sección 'Comunidad ESG' en el diario Gestion, integrada con ArcXP para la gestión de contenidos. Diseño responsive y optimizado para SEO.",
      features: [
        "Componentes React reutilizables (cards de noticias, filtros, entradas destacadas, etc.)",
        "Estilos con Sass y metodología BEM",
        "Integración con API de ArcXP para fetch de artículos",
        "Despliegue estático en AWS CloudFront + S3",
        "Pruebas unitarias (Jest) de componentes clave",
        "Sistema de comentarios para usuarios (frontend-only)",
      ],
    },
    en: {
      description: "ESG news section for Gestion newspaper",
      longDescription:
        "Frontend development and layout for the 'ESG Community' section in Gestion newspaper, integrated with ArcXP for content management. Responsive design and SEO optimized.",
      features: [
        "Reusable React components (news cards, filters, featured posts, etc.)",
        "Styling with Sass and BEM methodology",
        "ArcXP API integration for article fetching",
        "Static deployment on AWS CloudFront + S3",
        "Unit testing (Jest) for key components",
        "Frontend-only comment system for users",
      ],
    },
  },
  {
    id: "trivia-elcomercio",
    title: "Trivias El Comercio",
    image:
      "https://d1ts5g4ys243sh.cloudfront.net/proyectos_especiales_prod/especiales/cine-participa-trivia-cinefila-demuestra-conocimientos-ecvisual-ecpm/img/portada.jpg",
    technologies: [
      "React 18",
      "TypeScript",
      "Node.js (Express)",
      "ArcXP CMS",
      "AWS (Lambda, S3, DynamoDB)",
      "MongoDB",
      "Redis",
      "Styled Components",
      "Jest",
      "Cypress",
      "Docker",
      "Google Analytics 4",
      "WebSockets",
    ],
    liveUrl:
      "https://especiales.elcomercio.pe/?q=especiales/trivias-el-comercio-ecpm/index.html",
    githubUrl: "",
    category: "fullstack",
    es: {
      description:
        "Plataforma completa de trivias interactivas con ranking en tiempo real",
      longDescription:
        "Solución Full Stack para trivias diarias con sistema de puntuación, perfiles de usuario y ranking en vivo. Integrado con ArcXP para gestión de preguntas y desplegado en AWS con arquitectura serverless.",
      features: [
        "Frontend: Componentes interactivos con React 18 y TypeScript",
        "Backend: API REST con Node.js/Express + MongoDB para datos de usuarios",
        "Base de datos: Redis para ranking en tiempo real (WebSockets)",
        "CI/CD: Pipelines automatizadas con Docker y AWS CodeBuild",
        "CMS: Integración con ArcXP para edición de preguntas no técnicas",
        "Analítica: Trackeo de participación con Google Analytics 4",
        "Testing: Jest (unit) + Cypress (E2E) con 85% coverage",
        "Escalabilidad: Arquitectura serverless (AWS Lambda)",
      ],
    },
    en: {
      description: "Complete interactive trivia platform with live rankings",
      longDescription:
        "Full Stack solution for daily trivia with scoring system, user profiles and live leaderboards. Integrated with ArcXP for question management and deployed on AWS with serverless architecture.",
      features: [
        "Frontend: Interactive components with React 18 + TypeScript",
        "Backend: REST API with Node.js/Express + MongoDB for user data",
        "Database: Redis for real-time rankings (WebSockets)",
        "CI/CD: Automated pipelines with Docker and AWS CodeBuild",
        "CMS: ArcXP integration for non-technical question editing",
        "Analytics: Participation tracking with Google Analytics 4",
        "Testing: Jest (unit) + Cypress (E2E) with 85% coverage",
        "Scalability: Serverless architecture (AWS Lambda)",
      ],
    },
  },
  {
    id: "kpop-kdrama-word-app",
    title: "Kpop-Kdrama Word App",
    image:
      "https://raw.githubusercontent.com/RuslanZapata/my-cdn/refs/heads/main/portfolio-ruslan/kpop-kdrama-word-app.png",
    technologies: [
      "React Native",
      "Expo",
      "TypeScript",
      "Firebase Firestore",
      "Jest",
      "Detox",
      "NativeWind",
      "AdMob",
      "async-storage",
      "Lucide",
    ],
    liveUrl: "",
    githubUrl: "https://github.com/RuslanZapata/kpop-kdrama-word-game",
    category: "mobile",
    es: {
      description: "Juego de charadas sobre Kpop y Kdramas",
      longDescription:
        "Aplicación móvil interactiva con miles de palabras relacionadas al Kpop y dramas coreanos. Incluye modos competitivos, ranking de jugadores y actualizaciones diarias de contenido.",
      features: [
        "Más de 5,000 palabras (grupos, canciones, dramas y actores)",
        "Modos de juego: Clásico, Contra Reloj y Multijugador",
        "Autenticación con Google para guardar progreso",
        "Animaciones fluidas con Lottie",
        "Sistema de logros y recompensas",
        "Integración con Firebase para rankings globales",
        "Monetización con AdMob (banners intersticiales)",
        "Notificaciones push para eventos especiales",
      ],
    },
    en: {
      description: "Kpop and Kdrama charades word game",
      longDescription:
        "Interactive mobile game featuring thousands of Kpop and Korean drama related words. Includes competitive modes, player rankings and daily content updates.",
      features: [
        "5,000+ words (groups, songs, dramas and actors)",
        "Game modes: Classic, Time Attack and Multiplayer",
        "Google authentication to save progress",
        "Smooth animations with Lottie",
        "Achievements and reward system",
        "Firebase integration for global rankings",
        "AdMob monetization (interstitial banners)",
        "Push notifications for special events",
      ],
    },
  },
  {
    id: "taskify-web",
    title: "Taskify - MVP",
    image:
      "https://raw.githubusercontent.com/RuslanZapata/my-cdn/refs/heads/main/portfolio-ruslan/taskify-web.png",
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Redux Toolkit",
      "Vercel",
    ],
    liveUrl: "https://taskify-rho-two.vercel.app/",
    githubUrl: "",
    category: "web",
    es: {
      description: "Plataforma de gestión de proyectos y tareas",
      longDescription:
        "Aplicación web completa para organizar proyectos y tareas con equipos. Incluye tableros Kanban, asignación de tareas, fechas límite y seguimiento de progreso con análisis visual.",
      features: [
        "Creación de proyectos con equipos colaborativos",
        "Temas personalizables (light/dark) con Tailwind CSS",
        "Sistema de comentarios en tareas",
        "Generación de reportes PDF/CSV",
        "API REST con Node.js y Express",
        "Despliegue continuo con Vercel + Netlify Functions",
      ],
    },
    en: {
      description: "Project and task management platform",
      longDescription:
        "Complete web application for organizing projects and tasks with teams. Features Kanban boards, task assignment, deadlines, and progress tracking with visual analytics.",
      features: [
        "Project creation with collaborative teams",
        "Customizable themes (light/dark) using Tailwind CSS",
        "Task comment system",
        "PDF/CSV report generation",
        "REST API with Node.js and Express",
        "Continuous deployment with Vercel + Netlify Functions",
      ],
    },
  },
  {
    id: "machu-games",
    title: "Machu Games",
    image:
      "https://raw.githubusercontent.com/RuslanZapata/my-cdn/refs/heads/main/portfolio-ruslan/machu-games-app.png",
    technologies: [
      "React Native",
      "Expo",
      "TypeScript",
      "React Native Reanimated",
      "React Native Gesture Handler",
      "Firebase (Analytics)",
      "Jest",
      "Detox",
      "Styled Components",
      "AdMob",
    ],
    liveUrl: "",
    githubUrl: "https://github.com/RuslanZapata/machu-games",
    category: "mobile",
    es: {
      description: "Colección de juegos clásicos para móviles",
      longDescription:
        "Aplicación con 4 juegos clásicos: Snake (serpiente), Shooter (disparos), Puzzle (rompecabezas) y Bounce (rebotes). Desarrollada con React Native para un rendimiento nativo en iOS y Android.",
      features: [
        "Snake: Versión moderna del clásico juego de la serpiente",
        "Shooter: Juego de disparos en 2D con distintos niveles",
        "Puzzle: Rompecabezas deslizantes con 3 dificultades",
        "Bounce: Juego de pelota que rebota con física realista",
        "Sistema de puntuaciones locales y globales",
        "Diseño adaptado a móviles con controles táctiles",
        "Animaciones fluidas con React Native Reanimated",
        "Monetización con anuncios no intrusivos (AdMob)",
      ],
    },
    en: {
      description: "Collection of classic mobile games",
      longDescription:
        "App featuring 4 classic games: Snake, Shooter, Puzzle and Bounce. Built with React Native for native performance on both iOS and Android.",
      features: [
        "Snake: Modern version of the classic snake game",
        "Shooter: 2D shooting game with multiple levels",
        "Puzzle: Sliding tile puzzles with 3 difficulties",
        "Bounce: Ball bouncing game with realistic physics",
        "Local and global scoring system",
        "Mobile-first design with touch controls",
        "Smooth animations with React Native Reanimated",
        "Non-intrusive ad monetization (AdMob)",
      ],
    },
  },
];
