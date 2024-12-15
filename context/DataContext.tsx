"use client";
import React, {
    createContext,
    useContext,
    ReactNode,
    useEffect,
    useState,
} from "react";
import { BlogPost, Project } from "@/types";
import { blogPosts } from "@/data/blogPosts";

interface DataContextType {
    blogs: BlogPost[];
    projects: Project[];
    loading: boolean;
    getBlogBySlug: (slug: string) => BlogPost | undefined;
    getProjectBySlug: (slug: string) => Project | undefined;
    getFeaturedProjects: () => Project[];
    getRecentBlogs: (count?: number) => BlogPost[];
    getBlogsByCategory: (category: string) => BlogPost[];
    getProjectsByTechnology: (tech: string) => Project[];
}

const DataContext = createContext<DataContextType | undefined>(undefined);

export function DataProvider({ children }: { children: ReactNode }) {
    const [projects, setProjects] = useState<Project[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await fetch("/api/projects");
                const data = await response.json();
                setProjects(data.projects);
            } catch (error) {
                console.error("Error fetching projects:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchProjects();
    }, []);

    // Utility functions
    const getBlogBySlug = (slug: string) => {
        return blogPosts.find((post) => post.slug === slug);
    };

    const getProjectBySlug = (slug: string) => {
        return projects.find((project) => project.slug === slug);
    };

    const getFeaturedProjects = () => {
        return projects.filter((project) => project.featured);
    };

    const getRecentBlogs = (count: number = 3) => {
        return [...blogPosts]
            .sort(
                (a, b) =>
                    new Date(b.date).getTime() - new Date(a.date).getTime()
            )
            .slice(0, count);
    };

    const getBlogsByCategory = (category: string) => {
        return blogPosts.filter(
            (post) => post.category?.toLowerCase() === category.toLowerCase()
        );
    };

    const getProjectsByTechnology = (tech: string) => {
        return projects.filter((project) =>
            project.technologies.some(
                (t) => t.toLowerCase() === tech.toLowerCase()
            )
        );
    };

    const value = {
        blogs: blogPosts,
        projects,
        loading,
        getBlogBySlug,
        getProjectBySlug,
        getFeaturedProjects,
        getRecentBlogs,
        getBlogsByCategory,
        getProjectsByTechnology,
    };

    return (
        <DataContext.Provider value={value}>{children}</DataContext.Provider>
    );
}

export function useData() {
    const context = useContext(DataContext);
    if (context === undefined) {
        throw new Error("useData must be used within a DataProvider");
    }
    return context;
}
