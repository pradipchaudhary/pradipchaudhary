"use client";

import React from "react";
import { Card } from "@/components/ui/card";
import {
    ArrowLeft,
    Image as ImageIcon,
    Tag,
    X,
    Plus,
    Eye,
    Save,
} from "lucide-react";
import Link from "next/link";

export default function CreateBlogPage() {
    return (
        <div className="min-h-screen bg-[#0f1c31] p-6 space-y-6">
            {/* Header */}
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <Link
                        href="/admin/blog"
                        className="p-2 hover:bg-[#1a2942] rounded-lg transition-colors group"
                    >
                        <ArrowLeft className="h-5 w-5 text-gray-400 group-hover:text-gray-300" />
                    </Link>
                    <div>
                        <h1 className="text-2xl font-semibold text-gray-200">
                            Create New Blog Post
                        </h1>
                        <p className="text-gray-400 mt-1">
                            Write and publish a new blog post
                        </p>
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <button className="flex items-center gap-2 px-4 py-2 text-gray-300 hover:text-gray-200 hover:bg-[#1a2942] rounded-lg transition-colors">
                        <Eye className="h-4 w-4" />
                        <span>Preview</span>
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition-colors">
                        <Save className="h-4 w-4" />
                        <span>Publish</span>
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Main Editor */}
                <div className="lg:col-span-2 space-y-6">
                    <Card className="bg-[#1a2942] border-[#243656] p-6">
                        <div className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-2">
                                    Blog Title
                                </label>
                                <input
                                    type="text"
                                    className="w-full rounded-lg border border-[#243656] bg-[#0f1c31] px-4 py-3 text-gray-200 focus:border-indigo-500/50 focus:outline-none focus:ring-1 focus:ring-indigo-500/50"
                                    placeholder="Enter blog title"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-2">
                                    Excerpt
                                </label>
                                <textarea
                                    rows={2}
                                    className="w-full rounded-lg border border-[#243656] bg-[#0f1c31] px-4 py-3 text-gray-200 focus:border-indigo-500/50 focus:outline-none focus:ring-1 focus:ring-indigo-500/50"
                                    placeholder="Brief description of the blog post"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-2">
                                    Content
                                </label>
                                <textarea
                                    rows={12}
                                    className="w-full rounded-lg border border-[#243656] bg-[#0f1c31] px-4 py-3 text-gray-200 focus:border-indigo-500/50 focus:outline-none focus:ring-1 focus:ring-indigo-500/50"
                                    placeholder="Write your blog content here..."
                                />
                            </div>
                        </div>
                    </Card>
                </div>

                {/* Sidebar */}
                <div className="space-y-6">
                    <Card className="bg-[#1a2942] border-[#243656] p-6">
                        <h2 className="text-lg font-semibold text-gray-200 mb-6">
                            Blog Settings
                        </h2>
                        <div className="space-y-6">
                            {/* Cover Image Upload */}
                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-2">
                                    Cover Image
                                </label>
                                <div className="border-2 border-dashed border-[#243656] rounded-lg p-6 text-center hover:border-indigo-500/30 transition-colors cursor-pointer">
                                    <ImageIcon className="h-8 w-8 text-gray-400 mx-auto mb-3" />
                                    <p className="text-sm text-gray-400">
                                        Drop an image or{" "}
                                        <span className="text-indigo-400 hover:text-indigo-300">
                                            browse
                                        </span>
                                    </p>
                                    <p className="text-xs text-gray-500 mt-1">
                                        Recommended: 1200x630px
                                    </p>
                                </div>
                            </div>

                            {/* Tags */}
                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-2">
                                    Tags
                                </label>
                                <div className="space-y-3">
                                    <div className="relative">
                                        <Tag className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                                        <input
                                            type="text"
                                            className="w-full rounded-lg border border-[#243656] bg-[#0f1c31] pl-10 pr-4 py-3 text-gray-200 focus:border-indigo-500/50 focus:outline-none focus:ring-1 focus:ring-indigo-500/50"
                                            placeholder="Add tags (press Enter)"
                                        />
                                    </div>
                                    <div className="flex flex-wrap gap-2">
                                        {["Next.js", "React"].map((tag) => (
                                            <span
                                                key={tag}
                                                className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm bg-indigo-500/10 text-indigo-400 border border-indigo-500/20"
                                            >
                                                {tag}
                                                <button className="hover:text-indigo-300">
                                                    <X className="h-3 w-3" />
                                                </button>
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* URL Slug */}
                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-2">
                                    URL Slug
                                </label>
                                <input
                                    type="text"
                                    className="w-full rounded-lg border border-[#243656] bg-[#0f1c31] px-4 py-3 text-gray-200 focus:border-indigo-500/50 focus:outline-none focus:ring-1 focus:ring-indigo-500/50"
                                    placeholder="blog-post-url"
                                />
                            </div>

                            {/* Publication Status */}
                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-2">
                                    Status
                                </label>
                                <select className="w-full rounded-lg border border-[#243656] bg-[#0f1c31] px-4 py-3 text-gray-200 focus:border-indigo-500/50 focus:outline-none focus:ring-1 focus:ring-indigo-500/50">
                                    <option value="draft">Draft</option>
                                    <option value="published">Published</option>
                                </select>
                            </div>
                        </div>
                    </Card>

                    <div className="p-4 rounded-lg bg-amber-400/10 border border-amber-400/20">
                        <div className="flex gap-3">
                            <Plus className="h-5 w-5 text-amber-400 flex-shrink-0" />
                            <p className="text-sm text-amber-200">
                                Save as draft to preview before publishing.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
