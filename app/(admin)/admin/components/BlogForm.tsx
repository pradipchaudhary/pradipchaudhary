"use client";

import React, { useState } from "react";
import axios from "axios";
import Image from "next/image";

interface BlogFormData {
    title: string;
    content: string;
    excerpt: string;
    image: File | null;
    imagePreview: string;
    tags: string;
    category: string;
}

type BlogStatus = "DRAFT" | "PUBLISHED";

const categories = [
    "Web Development",
    "Programming",
    "Technology",
    "Tutorial",
    "Career",
    "Best Practices",
    "DevOps",
    "Mobile Development",
    "AI & Machine Learning",
];

export default function BlogForm() {
    const [formData, setFormData] = useState<BlogFormData>({
        title: "",
        content: "",
        excerpt: "",
        image: null,
        imagePreview: "",
        tags: "",
        category: categories[0],
    });

    const [status, setStatus] = useState<BlogStatus>("DRAFT");

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

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const formDataToSend = new FormData();
            formDataToSend.append("title", formData.title);
            formDataToSend.append("content", formData.content);
            formDataToSend.append("excerpt", formData.excerpt);
            if (formData.image) {
                formDataToSend.append("image", formData.image);
            }
            formDataToSend.append("category", formData.category);
            formDataToSend.append(
                "tags",
                JSON.stringify(
                    formData.tags.split(",").map((tag) => tag.trim())
                )
            );
            formDataToSend.append("status", status);

            const response = await axios.post("/api/blog", formDataToSend, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });
            alert("Blog post created successfully!");
            console.log(response.data);
        } catch (error) {
            console.error("Error creating blog post:", error);
            alert("Failed to create blog post.");
        }
    };

    return (
        <div className="max-w-5xl mx-auto pb-12">
            {/* Header */}
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-white">
                    Create New Blog Post
                </h1>
                <p className="text-gray-400 mt-2 text-lg">
                    Share your knowledge and experiences with the community
                </p>
            </div>

            <form onSubmit={handleSubmit}>
                {/* Main Form Content */}
                <div className="bg-[#0a1428] rounded-xl shadow-lg overflow-hidden">
                    {/* Basic Details Section */}
                    <div className="p-8 border-b border-[#243656]">
                        <h2 className="text-xl font-semibold text-white mb-6">
                            Post Details
                        </h2>
                        <div className="space-y-6">
                            {/* Title */}
                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-2">
                                    Title*
                                </label>
                                <input
                                    name="title"
                                    type="text"
                                    value={formData.title}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 bg-[#1a2942] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 border border-[#243656] placeholder-gray-500"
                                    placeholder="Enter blog post title"
                                    required
                                />
                            </div>

                            {/* Excerpt */}
                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-2">
                                    Excerpt*
                                </label>
                                <textarea
                                    name="excerpt"
                                    value={formData.excerpt}
                                    onChange={handleChange}
                                    rows={2}
                                    className="w-full px-4 py-3 bg-[#1a2942] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 border border-[#243656] placeholder-gray-500"
                                    placeholder="Brief summary of your post..."
                                    required
                                />
                            </div>

                            {/* Main Content */}
                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-2">
                                    Content*
                                </label>
                                <textarea
                                    name="content"
                                    value={formData.content}
                                    onChange={handleChange}
                                    rows={12}
                                    className="w-full px-4 py-3 bg-[#1a2942] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 border border-[#243656] placeholder-gray-500"
                                    placeholder="Write your blog post content here..."
                                    required
                                />
                            </div>

                            {/* Category and Status */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-300 mb-2">
                                        Category
                                    </label>
                                    <select
                                        name="category"
                                        value={formData.category}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 bg-[#1a2942] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 border border-[#243656]"
                                    >
                                        {categories.map((category) => (
                                            <option
                                                key={category}
                                                value={category}
                                            >
                                                {category}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-300 mb-2">
                                        Status
                                    </label>
                                    <select
                                        name="status"
                                        value={status}
                                        onChange={(e) =>
                                            setStatus(
                                                e.target.value as BlogStatus
                                            )
                                        }
                                        className="w-full px-4 py-3 bg-[#1a2942] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 border border-[#243656]"
                                    >
                                        <option value="DRAFT">Draft</option>
                                        <option value="PUBLISHED">
                                            Published
                                        </option>
                                    </select>
                                </div>
                            </div>

                            {/* Tags */}
                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-2">
                                    Tags
                                </label>
                                <input
                                    name="tags"
                                    type="text"
                                    value={formData.tags}
                                    onChange={handleChange}
                                    placeholder="nextjs, react, web-development"
                                    className="w-full px-4 py-3 bg-[#1a2942] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 border border-[#243656] placeholder-gray-500"
                                />
                                <p className="mt-2 text-xs text-gray-500">
                                    Separate tags with commas (e.g., nextjs,
                                    react, typescript)
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Featured Image Section */}
                    <div className="p-8 border-b border-[#243656] bg-[#0d1830]">
                        <h2 className="text-xl font-semibold text-white mb-6">
                            Featured Image
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
                        {status === "DRAFT" ? "Save as Draft" : "Publish Post"}
                    </button>
                </div>
            </form>
        </div>
    );
}
