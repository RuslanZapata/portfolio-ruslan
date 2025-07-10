import { Project } from '../types';

export const projects: Project[] = [
  {
    id: 'ecommerce-platform',
    title: 'E-commerce Platform',
    description: 'Modern e-commerce solution with advanced features',
    longDescription: 'A comprehensive e-commerce platform built with React and Node.js, featuring real-time inventory management, secure payment processing, and an intuitive admin dashboard. The platform supports multiple payment methods and provides analytics for business insights.',
    image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Socket.io', 'Redux'],
    liveUrl: 'https://ecommerce-demo.com',
    githubUrl: 'https://github.com/username/ecommerce-platform',
    features: [
      'User authentication and authorization',
      'Product catalog with search and filters',
      'Shopping cart and checkout process',
      'Payment integration with Stripe',
      'Order tracking and management',
      'Admin dashboard with analytics'
    ],
    category: 'fullstack'
  },
  {
    id: 'task-management-app',
    title: 'Task Management App',
    description: 'Collaborative task management solution',
    longDescription: 'A collaborative task management application that helps teams organize projects, assign tasks, and track progress. Built with React Native for cross-platform mobile support and includes real-time collaboration features.',
    image: 'https://images.pexels.com/photos/3153201/pexels-photo-3153201.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['React Native', 'Firebase', 'Redux', 'Expo', 'TypeScript'],
    liveUrl: 'https://taskmanager-demo.com',
    githubUrl: 'https://github.com/username/task-management',
    features: [
      'Cross-platform mobile app',
      'Real-time collaboration',
      'Task assignment and tracking',
      'Project organization',
      'Push notifications',
      'Offline support'
    ],
    category: 'mobile'
  },
  {
    id: 'restaurant-booking',
    title: 'Restaurant Booking System',
    description: 'Online reservation platform for restaurants',
    longDescription: 'A comprehensive restaurant booking system that allows customers to make reservations online while providing restaurant owners with a powerful management interface. Features include table management, customer profiles, and analytics.',
    image: 'https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['Next.js', 'PostgreSQL', 'Prisma', 'Tailwind CSS', 'NextAuth'],
    liveUrl: 'https://restaurant-booking-demo.com',
    githubUrl: 'https://github.com/username/restaurant-booking',
    features: [
      'Online reservation system',
      'Table management',
      'Customer profiles',
      'Email notifications',
      'Analytics dashboard',
      'Mobile responsive design'
    ],
    category: 'web'
  },
  {
    id: 'social-media-dashboard',
    title: 'Social Media Dashboard',
    description: 'Analytics dashboard for social media management',
    longDescription: 'A comprehensive social media management dashboard that aggregates data from multiple platforms. Features include post scheduling, engagement analytics, and team collaboration tools.',
    image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['React', 'Chart.js', 'Express', 'MySQL', 'JWT', 'Axios'],
    liveUrl: 'https://social-dashboard-demo.com',
    githubUrl: 'https://github.com/username/social-dashboard',
    features: [
      'Multi-platform integration',
      'Post scheduling',
      'Analytics and insights',
      'Team collaboration',
      'Custom reports',
      'Real-time updates'
    ],
    category: 'web'
  },
  {
    id: 'fitness-tracker',
    title: 'Fitness Tracker Mobile App',
    description: 'Personal fitness tracking and workout planning',
    longDescription: 'A mobile fitness application that helps users track workouts, monitor progress, and achieve their fitness goals. Features include exercise library, progress tracking, and personalized workout plans.',
    image: 'https://images.pexels.com/photos/416778/pexels-photo-416778.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['React Native', 'SQLite', 'AsyncStorage', 'Charts', 'Camera API'],
    liveUrl: 'https://fitness-tracker-demo.com',
    githubUrl: 'https://github.com/username/fitness-tracker',
    features: [
      'Workout tracking',
      'Progress monitoring',
      'Exercise library',
      'Personal goals',
      'Progress photos',
      'Workout history'
    ],
    category: 'mobile'
  },
  {
    id: 'real-estate-platform',
    title: 'Real Estate Platform',
    description: 'Property listing and management system',
    longDescription: 'A modern real estate platform that connects buyers, sellers, and agents. Features include property listings, virtual tours, mortgage calculators, and agent management tools.',
    image: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['Vue.js', 'Laravel', 'MySQL', 'MapBox', 'AWS S3', 'Pusher'],
    liveUrl: 'https://realestate-demo.com',
    githubUrl: 'https://github.com/username/real-estate',
    features: [
      'Property listings',
      'Advanced search filters',
      'Virtual tours',
      'Mortgage calculator',
      'Agent profiles',
      'Favorites and saved searches'
    ],
    category: 'fullstack'
  }
];