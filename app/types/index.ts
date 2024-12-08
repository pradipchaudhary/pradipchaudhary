export interface Author {
    name: string;
    avatar: string;
}

export interface BlogPost {
    id: string;
    title: string;
    content: string;
    date: string;
    readTime: string;
    author: Author;
    category?: string;
    thumbnail: string;
    slug: string;
    excerpt: string;
}
export interface Project {
    id: string;
    title: string;
    description: string;
    content?: string; // Optional HTML-like string
    image: string; // Main image for the project
    technologies: string[]; // List of technologies used
    liveUrl?: string; // Optional live URL for the project
    githubUrl?: string; // Optional GitHub URL for the source code
    featured?: boolean; // Optional flag for featured projects
    gallery?: string[]; // Optional array of additional images
    challenges?: string[]; // Optional list of challenges
    solutions?: string[]; // Optional list of solutions
    timeline?: string; // Optional timeline for the project
    role?: string; // Optional role of the contributor
    team?: string[]; // Optional list of team members
    slug: string; // Unique slug for routing or identification
    status?: "completed" | "in-progress" | "planned";
}
