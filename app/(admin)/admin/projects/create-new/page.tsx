"use client";

import React from "react";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useState, useRef } from "react";
import { Project } from "@/app/types";
import Image from "next/image";

type ImagePreview = {
    url: string;
    file: File;
};

export default function CreateProjectPage() {
    const [formData, setFormData] = useState<Partial<Project>>({
        title: "",
        description: "",
        content: "",
        image: "",
        technologies: [],
        liveUrl: "",
        githubUrl: "",
        featured: false,
        gallery: [],
        challenges: [],
        solutions: [],
        timeline: "",
        role: "",
        team: [],
        status: "planned",
        slug: "",
    });

    const [mainImagePreview, setMainImagePreview] =
        useState<ImagePreview | null>(null);
    const [galleryPreviews, setGalleryPreviews] = useState<ImagePreview[]>([]);

    const mainImageRef = useRef<HTMLInputElement>(null);
    const galleryImageRef = useRef<HTMLInputElement>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const formDataToSend = new FormData();

            // Add project data
            formDataToSend.append("projectData", JSON.stringify(formData));

            // Add main image if exists
            if (mainImagePreview?.file) {
                formDataToSend.append("mainImage", mainImagePreview.file);
            }

            // Add gallery images
            galleryPreviews.forEach((preview) => {
                formDataToSend.append("galleryImages", preview.file);
            });

            const response = await fetch("/api/projects", {
                method: "POST",
                body: formDataToSend,
            });

            if (!response.ok) {
                const error = await response.json();
                throw new Error(error.message || "Failed to create project");
            }

            // Reset form or redirect
            alert("Project created successfully!");
            // Optional: Redirect to projects list
            // router.push("/admin/projects");
        } catch (error) {
            console.error("Error creating project:", error);
            alert(
                error instanceof Error
                    ? error.message
                    : "Failed to create project"
            );
        }
    };

    const handleMainImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setMainImagePreview({ url: imageUrl, file });
            setFormData({ ...formData, image: file.name }); // Will be updated with actual URL after upload
        }
    };

    const handleGalleryUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        if (files) {
            const newPreviews = Array.from(files).map((file) => ({
                url: URL.createObjectURL(file),
                file,
            }));
            setGalleryPreviews([...galleryPreviews, ...newPreviews]);
            setFormData({
                ...formData,
                gallery: [
                    ...(formData.gallery || []),
                    ...Array.from(files).map((f) => f.name),
                ],
            });
        }
    };

    const removeMainImage = () => {
        if (mainImagePreview) {
            URL.revokeObjectURL(mainImagePreview.url);
            setMainImagePreview(null);
            setFormData({ ...formData, image: "" });
            if (mainImageRef.current) mainImageRef.current.value = "";
        }
    };

    const removeGalleryImage = (index: number) => {
        URL.revokeObjectURL(galleryPreviews[index].url);
        const newPreviews = galleryPreviews.filter((_, i) => i !== index);
        setGalleryPreviews(newPreviews);
        setFormData({
            ...formData,
            gallery: newPreviews.map((preview) => preview.file.name),
        });
    };
    return (
        <div className="min-h-screen bg-[#1d193e] p-6 space-y-8">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
                <div className="flex items-center gap-4">
                    <Link
                        href="/admin/projects"
                        className="p-2 hover:bg-[#2d2854]/70 rounded-lg transition-all duration-300 
                                 group ring-1 ring-[#2d2854] hover:ring-[#6f49d8]/50"
                    >
                        <ArrowLeft className="h-5 w-5 text-slate-400 group-hover:text-[#6f49d8]" />
                    </Link>
                    <div>
                        <h1 className="text-2xl font-bold text-slate-200">
                            Create New Project
                        </h1>
                        <p className="text-slate-400 mt-2">
                            Add a new project to your portfolio
                        </p>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <Link
                        href="/admin/projects"
                        className="px-4 py-2 text-slate-400 hover:text-slate-300 
                                 hover:bg-[#2d2854]/70 rounded-lg transition-all duration-300
                                 ring-1 ring-[#2d2854] hover:ring-[#6f49d8]/50"
                    >
                        Cancel
                    </Link>
                    <button
                        className="px-6 py-2 bg-[#6f49d8] hover:bg-[#6f49d8]/90 text-white 
                                 rounded-lg transition-all duration-300 font-medium
                                 shadow-lg shadow-[#6f49d8]/20 hover:shadow-[#6f49d8]/30
                                 hover:translate-y-[-1px]"
                    >
                        Create Project
                    </button>
                </div>
            </div>

            {/* Form Container */}
            <div className="bg-[#2d2854]/30 rounded-xl border border-[#2d2854] backdrop-blur-sm">
                <div className="p-8">
                    <form onSubmit={handleSubmit} className="space-y-12">
                        {/* Basic Information */}
                        <div className="space-y-8">
                            <div className="flex items-center gap-3 border-b border-[#4a3f80]/20 pb-4">
                                <div className="bg-indigo-900/30 p-2.5 rounded-lg shadow-inner">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 text-indigo-300"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                                    </svg>
                                </div>
                                <h2 className="text-xl font-semibold text-gray-100">
                                    Basic Information
                                </h2>
                            </div>

                            <div className="space-y-8">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="space-y-2">
                                        <label className="block text-sm font-medium text-gray-300">
                                            Title
                                        </label>
                                        <input
                                            type="text"
                                            value={formData.title}
                                            onChange={(e) =>
                                                setFormData({
                                                    ...formData,
                                                    title: e.target.value,
                                                })
                                            }
                                            className="w-full p-3 border border-[#4a3f80]/30 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition-all duration-200 bg-[#2d2456]/50 hover:bg-[#2d2456]/70 placeholder-gray-400/60 text-gray-100 shadow-inner"
                                            placeholder="Enter project title"
                                            required
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label className="block text-sm font-medium text-gray-300">
                                            Slug
                                        </label>
                                        <input
                                            type="text"
                                            value={formData.slug}
                                            onChange={(e) =>
                                                setFormData({
                                                    ...formData,
                                                    slug: e.target.value,
                                                })
                                            }
                                            className="w-full p-3 border border-[#4a3f80]/30 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition-all duration-200 bg-[#2d2456]/50 hover:bg-[#2d2456]/70 placeholder-gray-400/60 text-gray-100 shadow-inner"
                                            placeholder="project-title-slug"
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="space-y-6">
                                    <label className="block text-sm font-medium text-gray-300">
                                        Description
                                    </label>
                                    <textarea
                                        value={formData.description}
                                        onChange={(e) =>
                                            setFormData({
                                                ...formData,
                                                description: e.target.value,
                                            })
                                        }
                                        className="w-full p-3 border border-[#4a3f80]/30 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition-all duration-200 bg-[#2d2456]/50 hover:bg-[#2d2456]/70 placeholder-gray-400/60 text-gray-100 shadow-inner resize-none"
                                        rows={3}
                                        placeholder="Brief description of the project"
                                        required
                                    />

                                    <label className="block text-sm font-medium text-gray-300">
                                        Content (HTML)
                                    </label>
                                    <textarea
                                        value={formData.content}
                                        onChange={(e) =>
                                            setFormData({
                                                ...formData,
                                                content: e.target.value,
                                            })
                                        }
                                        className="w-full p-3 border border-[#4a3f80]/30 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition-all duration-200 bg-[#2d2456]/50 hover:bg-[#2d2456]/70 placeholder-gray-400/60 text-gray-100 shadow-inner resize-none font-mono text-sm"
                                        rows={10}
                                        placeholder="<p>Detailed project content in HTML format...</p>"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Media Section */}
                        <div className="space-y-8">
                            <div className="flex items-center gap-3 border-b border-[#4a3f80]/20 pb-4">
                                <div className="bg-indigo-900/30 p-2.5 rounded-lg shadow-inner">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 text-indigo-300"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </div>
                                <h2 className="text-xl font-semibold text-gray-100">
                                    Media
                                </h2>
                            </div>

                            {/* Main Image Upload */}
                            <div className="space-y-4">
                                <label className="block text-sm font-medium text-gray-300">
                                    Main Image
                                </label>
                                <div className="flex flex-col gap-4">
                                    <div className="flex items-center gap-4">
                                        <button
                                            type="button"
                                            onClick={() =>
                                                mainImageRef.current?.click()
                                            }
                                            className="px-4 py-2 bg-indigo-500/20 hover:bg-indigo-500/30 text-indigo-300 rounded-lg transition-colors flex items-center gap-2"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-5 w-5"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                            Choose Image
                                        </button>
                                        <input
                                            ref={mainImageRef}
                                            type="file"
                                            accept="image/*"
                                            onChange={handleMainImageUpload}
                                            className="hidden"
                                        />
                                    </div>
                                    {mainImagePreview && (
                                        <div className="relative w-full max-w-[300px] aspect-video">
                                            <Image
                                                src={mainImagePreview.url}
                                                alt="Main image preview"
                                                fill
                                                className="object-cover rounded-lg"
                                            />
                                            <button
                                                type="button"
                                                onClick={removeMainImage}
                                                className="absolute -top-2 -right-2 bg-red-500 text-white p-1 rounded-full hover:bg-red-600 transition-colors"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-4 w-4"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                            </button>
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Gallery Images Upload */}
                            <div className="space-y-4">
                                <label className="block text-sm font-medium text-gray-300">
                                    Gallery Images
                                </label>
                                <div className="flex flex-col gap-4">
                                    <div className="flex items-center gap-4">
                                        <button
                                            type="button"
                                            onClick={() =>
                                                galleryImageRef.current?.click()
                                            }
                                            className="px-4 py-2 bg-indigo-500/20 hover:bg-indigo-500/30 text-indigo-300 rounded-lg transition-colors flex items-center gap-2"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-5 w-5"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                            >
                                                <path d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" />
                                            </svg>
                                            Add Gallery Images
                                        </button>
                                        <input
                                            ref={galleryImageRef}
                                            type="file"
                                            accept="image/*"
                                            multiple
                                            onChange={handleGalleryUpload}
                                            className="hidden"
                                        />
                                    </div>
                                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                                        {galleryPreviews.map(
                                            (preview, index) => (
                                                <div
                                                    key={preview.url}
                                                    className="relative aspect-video"
                                                >
                                                    <Image
                                                        src={preview.url}
                                                        alt={`Gallery image ${
                                                            index + 1
                                                        }`}
                                                        fill
                                                        className="object-cover rounded-lg"
                                                    />
                                                    <button
                                                        type="button"
                                                        onClick={() =>
                                                            removeGalleryImage(
                                                                index
                                                            )
                                                        }
                                                        className="absolute -top-2 -right-2 bg-red-500 text-white p-1 rounded-full hover:bg-red-600 transition-colors"
                                                    >
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            className="h-4 w-4"
                                                            viewBox="0 0 20 20"
                                                            fill="currentColor"
                                                        >
                                                            <path
                                                                fillRule="evenodd"
                                                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                                                clipRule="evenodd"
                                                            />
                                                        </svg>
                                                    </button>
                                                </div>
                                            )
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Links & Technologies */}
                        <div className="space-y-8">
                            <div className="flex items-center gap-3 border-b border-[#4a3f80]/20 pb-4">
                                <div className="bg-indigo-900/30 p-2.5 rounded-lg shadow-inner">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 text-indigo-300"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </div>
                                <h2 className="text-xl font-semibold text-gray-100">
                                    Links & Technologies
                                </h2>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="block text-sm font-medium text-gray-300">
                                        Live URL
                                    </label>
                                    <input
                                        type="url"
                                        value={formData.liveUrl}
                                        onChange={(e) =>
                                            setFormData({
                                                ...formData,
                                                liveUrl: e.target.value,
                                            })
                                        }
                                        className="w-full p-3 border border-[#4a3f80]/30 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition-all duration-200 bg-[#2d2456]/50 hover:bg-[#2d2456]/70 placeholder-gray-400/60 text-gray-100 shadow-inner"
                                        placeholder="https://example.com"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="block text-sm font-medium text-gray-300">
                                        GitHub URL
                                    </label>
                                    <input
                                        type="url"
                                        value={formData.githubUrl}
                                        onChange={(e) =>
                                            setFormData({
                                                ...formData,
                                                githubUrl: e.target.value,
                                            })
                                        }
                                        className="w-full p-3 border border-[#4a3f80]/30 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition-all duration-200 bg-[#2d2456]/50 hover:bg-[#2d2456]/70 placeholder-gray-400/60 text-gray-100 shadow-inner"
                                        placeholder="https://github.com/username/repo"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="block text-sm font-medium text-gray-300">
                                    Technologies (comma-separated)
                                </label>
                                <input
                                    type="text"
                                    value={formData.technologies?.join(", ")}
                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            technologies: e.target.value
                                                .split(",")
                                                .map((t) => t.trim())
                                                .filter((t) => t),
                                        })
                                    }
                                    className="w-full p-3 border border-[#4a3f80]/30 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition-all duration-200 bg-[#2d2456]/50 hover:bg-[#2d2456]/70 placeholder-gray-400/60 text-gray-100 shadow-inner"
                                    placeholder="Next.js, React, TypeScript"
                                />
                            </div>
                        </div>

                        {/* Project Details */}
                        <div className="space-y-8">
                            <div className="flex items-center gap-3 border-b border-[#4a3f80]/20 pb-4">
                                <div className="bg-indigo-900/30 p-2.5 rounded-lg shadow-inner">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 text-indigo-300"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                                        <path
                                            fillRule="evenodd"
                                            d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </div>
                                <h2 className="text-xl font-semibold text-gray-100">
                                    Project Details
                                </h2>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="block text-sm font-medium text-gray-300">
                                        Challenges (one per line)
                                    </label>
                                    <textarea
                                        value={formData.challenges?.join("\n")}
                                        onChange={(e) =>
                                            setFormData({
                                                ...formData,
                                                challenges: e.target.value
                                                    .split("\n")
                                                    .filter((c) => c.trim()),
                                            })
                                        }
                                        className="w-full p-3 border border-[#4a3f80]/30 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition-all duration-200 bg-[#2d2456]/50 hover:bg-[#2d2456]/70 placeholder-gray-400/60 text-gray-100 shadow-inner resize-none"
                                        rows={3}
                                        placeholder="Challenge 1&#10;Challenge 2"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="block text-sm font-medium text-gray-300">
                                        Solutions (one per line)
                                    </label>
                                    <textarea
                                        value={formData.solutions?.join("\n")}
                                        onChange={(e) =>
                                            setFormData({
                                                ...formData,
                                                solutions: e.target.value
                                                    .split("\n")
                                                    .filter((s) => s.trim()),
                                            })
                                        }
                                        className="w-full p-3 border border-[#4a3f80]/30 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition-all duration-200 bg-[#2d2456]/50 hover:bg-[#2d2456]/70 placeholder-gray-400/60 text-gray-100 shadow-inner resize-none"
                                        rows={3}
                                        placeholder="Solution 1&#10;Solution 2"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="block text-sm font-medium text-gray-300">
                                        Timeline
                                    </label>
                                    <input
                                        type="text"
                                        value={formData.timeline}
                                        onChange={(e) =>
                                            setFormData({
                                                ...formData,
                                                timeline: e.target.value,
                                            })
                                        }
                                        className="w-full p-3 border border-[#4a3f80]/30 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition-all duration-200 bg-[#2d2456]/50 hover:bg-[#2d2456]/70 placeholder-gray-400/60 text-gray-100 shadow-inner"
                                        placeholder="6 weeks"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="block text-sm font-medium text-gray-300">
                                        Role
                                    </label>
                                    <input
                                        type="text"
                                        value={formData.role}
                                        onChange={(e) =>
                                            setFormData({
                                                ...formData,
                                                role: e.target.value,
                                            })
                                        }
                                        className="w-full p-3 border border-[#4a3f80]/30 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition-all duration-200 bg-[#2d2456]/50 hover:bg-[#2d2456]/70 placeholder-gray-400/60 text-gray-100 shadow-inner"
                                        placeholder="Full Stack Developer"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="block text-sm font-medium text-gray-300">
                                    Team Members (one per line)
                                </label>
                                <textarea
                                    value={formData.team?.join("\n")}
                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            team: e.target.value
                                                .split("\n")
                                                .filter((t) => t.trim()),
                                        })
                                    }
                                    className="w-full p-3 border border-[#4a3f80]/30 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition-all duration-200 bg-[#2d2456]/50 hover:bg-[#2d2456]/70 placeholder-gray-400/60 text-gray-100 shadow-inner resize-none"
                                    rows={3}
                                    placeholder="Team Member 1&#10;Team Member 2"
                                />
                            </div>

                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2 hover:bg-[#2d2456]/70 p-2.5 rounded-lg transition-colors cursor-pointer group">
                                    <input
                                        type="checkbox"
                                        checked={formData.featured}
                                        onChange={(e) =>
                                            setFormData({
                                                ...formData,
                                                featured: e.target.checked,
                                            })
                                        }
                                        className="w-4 h-4 rounded text-indigo-400 focus:ring-indigo-400 border-[#4a3f80]/30 cursor-pointer bg-[#2d2456]/50 shadow-inner"
                                    />
                                    <label className="text-sm font-medium text-gray-300 cursor-pointer group-hover:text-gray-200">
                                        Featured Project
                                    </label>
                                </div>

                                <div className="space-y-2">
                                    <label className="block text-sm font-medium text-gray-300">
                                        Status
                                    </label>
                                    <select
                                        value={formData.status}
                                        onChange={(e) =>
                                            setFormData({
                                                ...formData,
                                                status: e.target.value as
                                                    | "planned"
                                                    | "in-progress"
                                                    | "completed",
                                            })
                                        }
                                        className="p-3 border border-[#4a3f80]/30 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition-all duration-200 bg-[#2d2456]/50 hover:bg-[#2d2456]/70 text-gray-100 cursor-pointer shadow-inner appearance-none min-w-[150px]"
                                        style={{
                                            backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%239ca3af' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`,
                                            backgroundPosition:
                                                "right 0.5rem center",
                                            backgroundRepeat: "no-repeat",
                                            backgroundSize: "1.5em 1.5em",
                                            paddingRight: "2.5rem",
                                        }}
                                    >
                                        <option
                                            className="bg-[#2d2456]"
                                            value="planned"
                                        >
                                            Planned
                                        </option>
                                        <option
                                            className="bg-[#2d2456]"
                                            value="in-progress"
                                        >
                                            In Progress
                                        </option>
                                        <option
                                            className="bg-[#2d2456]"
                                            value="completed"
                                        >
                                            Completed
                                        </option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        {/* Submit Button */}
                        <div className="flex justify-end pt-4">
                            <button
                                type="submit"
                                className="bg-indigo-500 text-white px-8 py-3 rounded-lg hover:bg-indigo-600 focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 focus:ring-offset-[#1f1a40] transition-all duration-200 font-medium shadow-md hover:shadow-lg flex items-center gap-2 hover:translate-y-[-1px] active:translate-y-[1px]"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                Create Project
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
