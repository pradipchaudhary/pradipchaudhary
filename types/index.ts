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
    content: string;
    image: string;
    technologies: string[];
    liveUrl?: string;
    githubUrl?: string;
    featured: boolean;
    gallery: string[];
    challenges: string[];
    solutions: string[];
    timeline: string;
    role: string;
    team: string[];
    slug: string;
    status: string;
    createdAt: Date;
    updatedAt: Date;
}
