"use client";

import React, { useState } from "react";
import axios from "axios";
import Image from "next/image";

interface ProjectFormData {
    name: string;
    description: string;
    languages: string[];
    image: File | null;
    imagePreview: string;
    liveLink: string;
    githubLink: string;
    tags: string;
}

type ProjectStatus = "COMPLETED" | "IN_PROGRESS" | "PLANNING";

const technologyCategories = {
    "Core Technologies": ["JavaScript", "TypeScript", "HTML", "CSS"],
    "Frontend Frameworks/Libraries": [
        "React",
        "Next.js",
        "Vue.js",
        "Angular",
        "Svelte",
        "Redux",
        "React Query",
    ],
    "CSS Frameworks/Tools": [
        "Tailwind CSS",
        "SASS/SCSS",
        "Styled Components",
        "Material UI",
        "Chakra UI",
        "Bootstrap",
    ],
    "Backend Technologies": [
        "Node.js",
        "Express.js",
        "Nest.js",
        "GraphQL",
        "REST API",
        "Socket.io",
    ],
    Database: ["MongoDB", "PostgreSQL", "MySQL", "Redis", "Prisma", "Mongoose"],
    Testing: [
        "Jest",
        "Cypress",
        "React Testing Library",
        "Vitest",
        "Playwright",
    ],
    "Build Tools": ["Webpack", "Vite", "Babel", "ESLint", "Prettier"],
    Animation: [
        "Framer Motion",
        "GSAP",
        "Three.js",
        "Lottie",
        "CSS Animations",
    ],
    Services: ["AWS", "Vercel", "Firebase", "Supabase", "Cloudinary", "Stripe"],
};

export default function ProjectForm() {
    const [formData, setFormData] = useState<ProjectFormData>({
        name: "",
        description: "",
        languages: [],
        image: null,
        imagePreview: "",
        liveLink: "",
        githubLink: "",
        tags: "",
    });

    const [status, setStatus] = useState<ProjectStatus>("PLANNING");

    const handleChange = (
        e: React.ChangeEvent<
            HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
        >
    ) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setFormData({
                ...formData,
                image: file,
                imagePreview: URL.createObjectURL(file),
            });
        }
    };

    const handleLanguageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value, checked } = e.target;
        setFormData((prev) => ({
            ...prev,
            languages: checked
                ? [...prev.languages, value]
                : prev.languages.filter((lang) => lang !== value),
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const formDataToSend = new FormData();
            formDataToSend.append("name", formData.name);
            formDataToSend.append("description", formData.description);
            formDataToSend.append(
                "languages",
                JSON.stringify(formData.languages)
            );
            if (formData.image) {
                formDataToSend.append("image", formData.image);
            }
            formDataToSend.append("liveLink", formData.liveLink);
            formDataToSend.append("githubLink", formData.githubLink);
            formDataToSend.append(
                "tags",
                JSON.stringify(
                    formData.tags.split(",").map((tag) => tag.trim())
                )
            );
            formDataToSend.append("status", status);

            const response = await axios.post("/api/projects", formDataToSend, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });
            alert("Project created successfully!");
            console.log(response.data);
        } catch (error) {
            console.error("Error creating project:", error);
            alert("Failed to create project.");
        }
    };

    return (
        <div className="max-w-5xl mx-auto pb-12">
            {/* Header */}
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-white">
                    Create New Project
                </h1>
                <p className="text-gray-400 mt-2 text-lg">
                    Showcase your work by adding a new project to your portfolio
                </p>
            </div>

            <form onSubmit={handleSubmit}>
                {/* Main Form Content */}
                <div className="bg-[#0a1428] rounded-xl shadow-lg overflow-hidden">
                    {/* Project Basics Section */}
                    <div className="p-8 border-b border-[#243656]">
                        <h2 className="text-xl font-semibold text-white mb-6">
                            Project Details
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {/* Left Column */}
                            <div className="space-y-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-300 mb-2">
                                        Project Name*
                                    </label>
                                    <input
                                        name="name"
                                        type="text"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 bg-[#1a2942] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 border border-[#243656] placeholder-gray-500"
                                        placeholder="Enter project name"
                                        required
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-300 mb-2">
                                        Description
                                    </label>
                                    <textarea
                                        name="description"
                                        value={formData.description}
                                        onChange={handleChange}
                                        rows={5}
                                        className="w-full px-4 py-3 bg-[#1a2942] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 border border-[#243656] placeholder-gray-500"
                                        placeholder="Describe your project..."
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-300 mb-2">
                                        Tags
                                    </label>
                                    <input
                                        name="tags"
                                        type="text"
                                        value={formData.tags}
                                        onChange={handleChange}
                                        placeholder="react, typescript, web"
                                        className="w-full px-4 py-3 bg-[#1a2942] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 border border-[#243656] placeholder-gray-500"
                                    />
                                    <p className="mt-2 text-xs text-gray-500">
                                        Separate tags with commas (e.g., nextjs,
                                        react, typescript)
                                    </p>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-300 mb-2">
                                        Project Status
                                    </label>
                                    <select
                                        name="status"
                                        value={status}
                                        onChange={(e) =>
                                            setStatus(
                                                e.target.value as ProjectStatus
                                            )
                                        }
                                        className="w-full px-4 py-3 bg-[#1a2942] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 border border-[#243656]"
                                    >
                                        <option value="COMPLETED">
                                            Completed
                                        </option>
                                        <option value="IN_PROGRESS">
                                            In Progress
                                        </option>
                                        <option value="PLANNING">
                                            Planning
                                        </option>
                                    </select>
                                </div>
                            </div>

                            {/* Right Column - Technologies */}
                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-2">
                                    Technologies Used*
                                </label>
                                <div className="space-y-4 max-h-[400px] overflow-y-auto p-4 bg-[#1a2942] rounded-lg border border-[#243656] custom-scrollbar">
                                    {Object.entries(technologyCategories).map(
                                        ([category, techs]) => (
                                            <div
                                                key={category}
                                                className="space-y-2"
                                            >
                                                <h3 className="text-sm font-semibold text-blue-400 mb-2 sticky top-0 bg-[#1a2942] py-1">
                                                    {category}
                                                </h3>
                                                <div className="grid grid-cols-2 gap-3 pl-2">
                                                    {techs.map((tech) => (
                                                        <label
                                                            key={tech}
                                                            className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors"
                                                        >
                                                            <input
                                                                type="checkbox"
                                                                value={tech}
                                                                checked={formData.languages.includes(
                                                                    tech
                                                                )}
                                                                onChange={
                                                                    handleLanguageChange
                                                                }
                                                                className="rounded bg-[#243656] border-[#243656] text-blue-500 focus:ring-blue-500"
                                                            />
                                                            <span className="text-sm">
                                                                {tech}
                                                            </span>
                                                        </label>
                                                    ))}
                                                </div>
                                            </div>
                                        )
                                    )}
                                </div>
                                {formData.languages.length > 0 && (
                                    <div className="mt-3 p-3 bg-[#243656]/50 rounded-lg">
                                        <p className="text-sm text-gray-300 mb-2">
                                            Selected Technologies:{" "}
                                            {formData.languages.length}
                                        </p>
                                        <div className="flex flex-wrap gap-2">
                                            {formData.languages.map((lang) => (
                                                <span
                                                    key={lang}
                                                    className="px-2 py-1 text-xs bg-blue-500/20 text-blue-300 rounded-lg"
                                                >
                                                    {lang}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Image Upload Section */}
                    <div className="p-8 border-b border-[#243656] bg-[#0d1830]">
                        <h2 className="text-xl font-semibold text-white mb-6">
                            Project Image
                        </h2>
                        <div className="flex items-start gap-8">
                            <div className="flex-1">
                                <div className="flex items-center justify-center w-full">
                                    <label className="flex flex-col items-center justify-center w-full h-48 border-2 border-dashed border-[#243656] rounded-lg cursor-pointer hover:border-blue-500/50 transition-colors">
                                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                            <svg
                                                className="w-8 h-8 mb-4 text-gray-500"
                                                aria-hidden="true"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 20 16"
                                            >
                                                <path
                                                    stroke="currentColor"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                                                />
                                            </svg>
                                            <p className="mb-2 text-sm text-gray-400">
                                                <span className="font-semibold">
                                                    Click to upload
                                                </span>{" "}
                                                or drag and drop
                                            </p>
                                            <p className="text-xs text-gray-500">
                                                PNG, JPG or GIF (MAX. 800x400px)
                                            </p>
                                        </div>
                                        <input
                                            type="file"
                                            accept="image/*"
                                            onChange={handleImageChange}
                                            className="hidden"
                                        />
                                    </label>
                                </div>
                            </div>
                            {formData.imagePreview && (
                                <div className="relative w-48 h-48 rounded-lg overflow-hidden border-2 border-[#243656]">
                                    <Image
                                        src={formData.imagePreview}
                                        alt="Preview"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Links Section */}
                    <div className="p-8">
                        <h2 className="text-xl font-semibold text-white mb-6">
                            Project Links
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-2">
                                    Live Demo URL
                                </label>
                                <input
                                    name="liveLink"
                                    type="url"
                                    value={formData.liveLink}
                                    onChange={handleChange}
                                    placeholder="https://your-project.com"
                                    className="w-full px-4 py-3 bg-[#1a2942] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 border border-[#243656] placeholder-gray-500"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-2">
                                    GitHub Repository
                                </label>
                                <input
                                    name="githubLink"
                                    type="url"
                                    value={formData.githubLink}
                                    onChange={handleChange}
                                    placeholder="https://github.com/username/repo"
                                    className="w-full px-4 py-3 bg-[#1a2942] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 border border-[#243656] placeholder-gray-500"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Form Actions */}
                <div className="mt-6 flex justify-end gap-4">
                    <button
                        type="button"
                        className="px-6 py-3 text-gray-400 hover:text-white transition-colors font-medium"
                    >
                        Cancel
                    </button>
                    <button
                        type="submit"
                        className="px-8 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors font-medium"
                    >
                        Create Project
                    </button>
                </div>
            </form>
        </div>
    );
}
