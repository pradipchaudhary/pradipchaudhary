export interface Project {
    id: string;
    title: string;
    description: string;
    content: string;
    image: string;
    technologies: string[];
    liveUrl: string;
    githubUrl: string;
    featured: boolean;
    gallery: string[];
    challenges: string[];
    solutions: string[];
    timeline: string;
    role: string;
    team: string[];
    slug: string;
    status: "completed" | "in-progress" | "planned"; // Example, adjust to your needs
}
// Mock data - replace with your actual data fetching logic
export const projects: Project[] = [
    {
        id: "1",
        title: "E-Commerce Platform",
        description:
            "A scalable e-commerce platform built with Next.js 14, Node.js, and Tailwind CSS.",
        content: `
          <p>An advanced e-commerce platform featuring product listings, a shopping cart, and secure checkout functionality.</p>
  
          <h2>Project Overview</h2>
          <p>Built to deliver a seamless online shopping experience with a focus on scalability and performance.</p>
  
          <h2>Technical Implementation</h2>
          <p>The platform leverages:</p>
          <ul>
              <li>Dynamic Routing for product pages</li>
              <li>Secure payment integration with Stripe</li>
              <li>Image Optimization with Next.js</li>
              <li>Responsive design with Tailwind CSS</li>
          </ul>
      `,
        image: "/projects/dashboard.png",
        technologies: ["Next.js", "Node.js", "Tailwind CSS", "Stripe API"],
        liveUrl: "https://example.com",
        githubUrl: "https://github.com/example/e-commerce",
        featured: true,
        gallery: [
            "/projects/e-commerce-1.jpg",
            "/projects/e-commerce-2.jpg",
            "/projects/e-commerce-3.jpg",
        ],
        challenges: [
            "Handling large-scale data operations",
            "Integrating secure payment methods",
            "Maintaining responsive layouts for all devices",
        ],
        solutions: [
            "Optimized backend with MongoDB aggregation",
            "Integrated Stripe for secure transactions",
            "Implemented responsive components using Tailwind CSS",
        ],
        timeline: "6 weeks",
        role: "Full Stack Developer",
        team: ["Alice Johnson", "Bob Clark"],
        slug: "e-commerce-platform",
        status: "completed",
    },
    {
        id: "2",
        title: "Blogging Platform",
        description:
            "A blogging platform with markdown support, user authentication, and real-time previews.",
        content: `
          <p>An intuitive platform for bloggers to write, edit, and share posts with ease.</p>
  
          <h2>Project Overview</h2>
          <p>Designed to provide content creators with tools to publish and manage their articles efficiently.</p>
  
          <h2>Technical Implementation</h2>
          <p>Key features include:</p>
          <ul>
              <li>Markdown editor with live previews</li>
              <li>User authentication and session management</li>
              <li>Dynamic theming options</li>
          </ul>
      `,
        image: "/projects/portfolio.jpg",
        technologies: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
        liveUrl: "https://example.com",
        githubUrl: "https://github.com/example/blogging-platform",
        featured: false,
        gallery: [
            "/projects/thumbnail.svg",
            "/projects/thumbnail.svg",
            "/projects/thumbnail.svg",
        ],
        challenges: [
            "Creating a live markdown preview",
            "Implementing secure user authentication",
            "Supporting dynamic themes",
        ],
        solutions: [
            "Used react-markdown for live previews",
            "Implemented OAuth for user authentication",
            "Developed a theme switcher with Tailwind CSS",
        ],
        timeline: "4 weeks",
        role: "Frontend Developer",
        team: ["Chris Evans", "Dana White"],
        slug: "blogging-platform",
        status: "in-progress",
    },
    {
        id: "3",
        title: "Real Estate Listings",
        description:
            "A real estate listing platform with advanced filtering and map integration.",
        content: `
          <p>An innovative platform for real estate agencies and buyers to find and showcase properties.</p>
  
          <h2>Project Overview</h2>
          <p>Provides comprehensive property details with an intuitive search and filter system.</p>
  
          <h2>Technical Implementation</h2>
          <p>Highlights include:</p>
          <ul>
              <li>Map integration with Google Maps API</li>
              <li>Custom filtering and sorting options</li>
              <li>Dynamic property pages</li>
          </ul>
      `,
        image: "/projects/real-estate.jpg",
        technologies: ["Next.js", "Google Maps API", "Tailwind CSS"],
        liveUrl: "https://example.com",
        githubUrl: "https://github.com/example/real-estate",
        featured: true,
        gallery: [
            "/projects/thumbnail.svg",
            "/projects/thumbnail.svg",
            "/projects/thumbnail.svg",
        ],
        challenges: [
            "Integrating Google Maps API",
            "Building advanced search and filter functionality",
            "Ensuring fast loading times for large datasets",
        ],
        solutions: [
            "Optimized API calls with caching",
            "Used React context for managing filter states",
            "Implemented lazy loading for images",
        ],
        timeline: "5 weeks",
        role: "Frontend Developer",
        team: ["Eve Carter", "Frank Green"],
        slug: "real-estate-listings",
        status: "planned",
    },
    {
        id: "4",
        title: "Fitness Tracking App",
        description:
            "A fitness tracking application with workout plans and progress tracking.",
        content: `
          <p>A feature-rich app for tracking workouts, setting goals, and monitoring progress over time.</p>
  
          <h2>Project Overview</h2>
          <p>Built to help fitness enthusiasts stay motivated and achieve their goals.</p>
  
          <h2>Technical Implementation</h2>
          <p>Main features include:</p>
          <ul>
              <li>Customizable workout plans</li>
              <li>Progress tracking and analytics</li>
              <li>Integration with wearable devices</li>
          </ul>
      `,
        image: "/projects/fitness-tracker.jpg",
        technologies: ["React", "Node.js", "Chart.js", "Tailwind CSS"],
        liveUrl: "https://example.com",
        githubUrl: "https://github.com/example/fitness-tracker",
        featured: false,
        gallery: [
            "/projects/fitness-1.jpg",
            "/projects/fitness-2.jpg",
            "/projects/fitness-3.jpg",
        ],
        challenges: [
            "Developing customizable workout plans",
            "Implementing data visualization for progress tracking",
            "Ensuring compatibility with wearable devices",
        ],
        solutions: [
            "Used Chart.js for data visualization",
            "Integrated APIs for wearable device compatibility",
            "Built a flexible workout builder with React",
        ],
        timeline: "7 weeks",
        role: "Full Stack Developer",
        team: ["George Martin", "Hannah Lee"],
        slug: "fitness-tracking-app",
        status: "completed",
    },
    {
        id: "5",
        title: "Job Portal",
        description:
            "A job portal for employers and job seekers with resume uploads and AI-powered recommendations.",
        content: `
          <p>An intelligent job portal connecting job seekers with employers effectively.</p>
  
          <h2>Project Overview</h2>
          <p>Designed to simplify the hiring process and provide tailored job recommendations to users.</p>
  
          <h2>Technical Implementation</h2>
          <p>Core features include:</p>
          <ul>
              <li>Resume parsing with AI</li>
              <li>Advanced job search and filtering</li>
              <li>Employer dashboard for managing job postings</li>
          </ul>
      `,
        image: "/projects/job-portal.jpg",
        technologies: ["Next.js", "Node.js", "Python (AI)", "Tailwind CSS"],
        liveUrl: "https://example.com",
        githubUrl: "https://github.com/example/job-portal",
        featured: true,
        gallery: [
            "/projects/job-portal-1.jpg",
            "/projects/job-portal-2.jpg",
            "/projects/job-portal-3.jpg",
        ],
        challenges: [
            "Implementing AI-powered recommendations",
            "Handling a large number of concurrent users",
            "Ensuring secure data handling for resumes",
        ],
        solutions: [
            "Used Python and TensorFlow for AI functionality",
            "Implemented server-side rendering for scalability",
            "Secured data with encryption and role-based access control",
        ],
        timeline: "8 weeks",
        role: "Backend Developer",
        team: ["Isabel King", "Jack Wright"],
        slug: "job-portal",
        status: "in-progress",
    },
];
