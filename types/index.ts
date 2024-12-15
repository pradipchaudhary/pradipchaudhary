<<<<<<< HEAD
export interface Skill {
    id?: number;
    name: string;
    percentage?: number;
    iconUrl?: string;
    isHighlighted: boolean;
=======
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
>>>>>>> 377f9ee246fe13d105dbf942f4f33b239451a758
}
