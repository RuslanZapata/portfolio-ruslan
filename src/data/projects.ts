import { Project } from "../types";

export const projects: Project[] = [
  {
    id: "bible-web-app",
    title: "Bible Web App",
    image: "./src/assets/image/bible-web-app.png",
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
    liveUrl: "",
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
    id: "ecommerce-platform",
    title: "E-commerce Platform",
    image:
      "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
    technologies: [
      "React",
      "Node.js",
      "MongoDB",
      "Stripe",
      "Socket.io",
      "Redux",
    ],
    liveUrl: "https://ecommerce-demo.com",
    githubUrl: "https://github.com/username/ecommerce-platform",
    category: "fullstack",
    es: {
      description:
        "Solución moderna de e-commerce con características avanzadas",
      longDescription:
        "Una plataforma de e-commerce completa construida con React y Node.js, que incluye gestión de inventario en tiempo real, procesamiento seguro de pagos y un panel de administración intuitivo. La plataforma soporta múltiples métodos de pago y proporciona análisis para obtener información comercial.",
      features: [
        "Autenticación y autorización de usuarios",
        "Catálogo de productos con búsqueda y filtros",
        "Carrito de compras y proceso de pago",
        "Integración de pagos con Stripe",
        "Seguimiento y gestión de pedidos",
        "Panel de administración con análisis",
      ],
    },
    en: {
      description: "Modern e-commerce solution with advanced features",
      longDescription:
        "A comprehensive e-commerce platform built with React and Node.js, featuring real-time inventory management, secure payment processing, and an intuitive admin dashboard. The platform supports multiple payment methods and provides analytics for business insights.",
      features: [
        "User authentication and authorization",
        "Product catalog with search and filters",
        "Shopping cart and checkout process",
        "Payment integration with Stripe",
        "Order tracking and management",
        "Admin dashboard with analytics",
      ],
    },
  },
  {
    id: "task-management-app",
    title: "Task Management App",
    image:
      "https://images.pexels.com/photos/3153201/pexels-photo-3153201.jpeg?auto=compress&cs=tinysrgb&w=800",
    technologies: ["React Native", "Firebase", "Redux", "Expo", "TypeScript"],
    liveUrl: "https://taskmanager-demo.com",
    githubUrl: "https://github.com/username/task-management",
    category: "mobile",
    es: {
      description: "Solución de gestión de tareas colaborativa",
      longDescription:
        "Una aplicación de gestión de tareas colaborativa que ayuda a los equipos a organizar proyectos, asignar tareas y realizar un seguimiento del progreso. Construido con React Native para soporte móvil multiplataforma e incluye funciones de colaboración en tiempo real.",
      features: [
        "Aplicación móvil multiplataforma",
        "Colaboración en tiempo real",
        "Task assignment and tracking",
        "Project organization",
        "Push notifications",
        "Offline support",
      ],
    },
    en: {
      description: "Collaborative task management solution",
      longDescription:
        "A collaborative task management app that helps teams organize projects, assign tasks, and track progress. Built with React Native for cross-platform mobile support and includes real-time collaboration features.",
      features: [
        "Cross-platform mobile app",
        "Real-time collaboration",
        "Task assignment and tracking",
        "Project organization",
        "Push notifications",
        "Offline support",
      ],
    },
  },
  {
    id: "restaurant-booking",
    title: "Restaurant Booking System",
    image:
      "https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?auto=compress&cs=tinysrgb&w=800",
    technologies: [
      "Next.js",
      "PostgreSQL",
      "Prisma",
      "Tailwind CSS",
      "NextAuth",
    ],
    liveUrl: "https://restaurant-booking-demo.com",
    githubUrl: "https://github.com/username/restaurant-booking",
    category: "web",
    es: {
      description: "Plataforma de reservas en línea para restaurantes",
      longDescription:
        "Un sistema de reservas de restaurantes completo que permite a los clientes hacer reservas en línea mientras proporciona a los propietarios de restaurantes una potente interfaz de gestión. Las características incluyen gestión de mesas, perfiles de clientes y análisis.",

      features: [
        "Sistema de reservas en línea",
        "Gestión de mesas",
        "Perfiles de clientes",
        "Notificaciones por correo electrónico",
        "Panel de análisis",
        "Diseño responsive",
      ],
    },
    en: {
      description: "Online reservation platform for restaurants",
      longDescription:
        "A comprehensive restaurant booking system that allows customers to make reservations online while providing restaurant owners with a powerful management interface. Features include table management, customer profiles, and analytics.",
      features: [
        "Online reservation system",
        "Table management",
        "Customer profiles",
        "Email notifications",
        "Analytics dashboard",
        "Mobile responsive design",
      ],
    },
  },
  {
    id: "social-media-dashboard",
    title: "Social Media Dashboard",
    image:
      "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800",
    technologies: ["React", "Chart.js", "Express", "MySQL", "JWT", "Axios"],
    liveUrl: "https://social-dashboard-demo.com",
    githubUrl: "https://github.com/username/social-dashboard",
    category: "web",
    es: {
      description: "Panel de control para gestión de redes sociales",
      longDescription:
        "Un panel de control integral para la gestión de redes sociales que agrega datos de múltiples plataformas. Incluye programación de publicaciones, análisis de participación y herramientas de colaboración en equipo.",
      features: [
        "Integración multiplataforma",
        "Programación de publicaciones",
        "Análisis y estadísticas",
        "Colaboración en equipo",
        "Informes personalizados",
        "Actualizaciones en tiempo real",
      ],
    },
    en: {
      description: "Dashboard for social media management",
      longDescription:
        "A comprehensive dashboard for social media management that aggregates data from multiple platforms. Features include post scheduling, engagement analytics, and team collaboration tools.",
      features: [
        "Multi-platform integration",
        "Post scheduling",
        "Analytics and insights",
        "Team collaboration",
        "Custom reports",
        "Real-time updates",
      ],
    },
  },
  {
    id: "fitness-tracker",
    title: "Fitness Tracker Mobile App",
    image:
      "https://images.pexels.com/photos/416778/pexels-photo-416778.jpeg?auto=compress&cs=tinysrgb&w=800",
    technologies: [
      "React Native",
      "SQLite",
      "AsyncStorage",
      "Charts",
      "Camera API",
    ],
    liveUrl: "https://fitness-tracker-demo.com",
    githubUrl: "https://github.com/username/fitness-tracker",
    category: "mobile",
    es: {
      description: "Aplicación móvil de seguimiento de fitness",
      longDescription:
        "Una aplicación móvil de fitness que ayuda a los usuarios a realizar un seguimiento de sus entrenamientos, monitorear el progreso y alcanzar sus objetivos de fitness. Incluye una biblioteca de ejercicios, seguimiento del progreso y planes de entrenamiento personalizados.",
      features: [
        "Seguimiento de entrenamientos",
        "Monitoreo del progreso",
        "Biblioteca de ejercicios",
        "Objetivos personales",
        "Fotos de progreso",
        "Historial de entrenamientos",
      ],
    },
    en: {
      description: "Mobile fitness tracking application",
      longDescription:
        "A mobile fitness application that helps users track workouts, monitor progress, and achieve their fitness goals. Features include exercise library, progress tracking, and personalized workout plans.",
      features: [
        "Workout tracking",
        "Progress monitoring",
        "Exercise library",
        "Personal goals",
        "Progress photos",
        "Workout history",
      ],
    },
  },
  {
    id: "real-estate-platform",
    title: "Real Estate Platform",
    image:
      "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=800",
    technologies: ["Vue.js", "Laravel", "MySQL", "MapBox", "AWS S3", "Pusher"],
    liveUrl: "https://realestate-demo.com",
    githubUrl: "https://github.com/username/real-estate",
    category: "fullstack",
    es: {
      description: "Plataforma de listado y gestión de propiedades",
      longDescription:
        "Una plataforma moderna de bienes raíces que conecta compradores, vendedores y agentes. Las características incluyen listados de propiedades, recorridos virtuales, calculadoras hipotecarias y herramientas de gestión de agentes.",
      features: [
        "Listados de propiedades",
        "Filtros de búsqueda avanzados",
        "Recorridos virtuales",
        "Calculadora hipotecaria",
        "Perfiles de agentes",
        "Favoritos y búsquedas guardadas",
      ],
    },
    en: {
      description: "Property listing and management system",
      longDescription:
        "A modern real estate platform that connects buyers, sellers, and agents. Features include property listings, virtual tours, mortgage calculators, and agent management tools.",
      features: [
        "Property listings",
        "Advanced search filters",
        "Virtual tours",
        "Mortgage calculator",
        "Agent profiles",
        "Favorites and saved searches",
      ],
    },
  },
];
