"use client";

import React from "react";
import { Card } from "@/components/ui/card";
import {
    ArrowLeft,
    Building2,
    Calendar,
    Link as LinkIcon,
    Upload,
    Plus,
    Save,
    X,
} from "lucide-react";
import Link from "next/link";

export default function CreateExperiencePage() {
    return (
        <div className="min-h-screen bg-[#0f1c31] p-6 space-y-6">
            {/* Header */}
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <Link
                        href="/admin/experience"
                        className="p-2 hover:bg-[#1a2942] rounded-lg transition-colors group"
                    >
                        <ArrowLeft className="h-5 w-5 text-gray-400 group-hover:text-gray-300" />
                    </Link>
                    <div>
                        <h1 className="text-2xl font-semibold text-gray-200">
                            Add New Experience
                        </h1>
                        <p className="text-gray-400 mt-1">
                            Add your professional experience details
                        </p>
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <Link
                        href="/admin/experience"
                        className="px-4 py-2 text-gray-300 hover:text-gray-200 hover:bg-[#1a2942] rounded-lg transition-colors"
                    >
                        Cancel
                    </Link>
                    <button className="flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition-colors">
                        <Save className="h-4 w-4" />
                        <span>Save Experience</span>
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Main Form */}
                <div className="lg:col-span-2 space-y-6">
                    <Card className="bg-[#1a2942] border-[#243656] p-6">
                        <div className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-2">
                                    Position Title
                                </label>
                                <input
                                    type="text"
                                    className="w-full rounded-lg border border-[#243656] bg-[#0f1c31] px-4 py-3 text-gray-200 focus:border-indigo-500/50 focus:outline-none focus:ring-1 focus:ring-indigo-500/50"
                                    placeholder="e.g. Senior Frontend Developer"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-2">
                                    Company Name
                                </label>
                                <input
                                    type="text"
                                    className="w-full rounded-lg border border-[#243656] bg-[#0f1c31] px-4 py-3 text-gray-200 focus:border-indigo-500/50 focus:outline-none focus:ring-1 focus:ring-indigo-500/50"
                                    placeholder="e.g. Tech Corp"
                                />
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-300 mb-2">
                                        Start Date
                                    </label>
                                    <div className="relative">
                                        <input
                                            type="month"
                                            className="w-full rounded-lg border border-[#243656] bg-[#0f1c31] px-4 py-3 text-gray-200 focus:border-indigo-500/50 focus:outline-none focus:ring-1 focus:ring-indigo-500/50"
                                        />
                                        <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-300 mb-2">
                                        End Date
                                    </label>
                                    <div className="relative">
                                        <input
                                            type="month"
                                            className="w-full rounded-lg border border-[#243656] bg-[#0f1c31] px-4 py-3 text-gray-200 focus:border-indigo-500/50 focus:outline-none focus:ring-1 focus:ring-indigo-500/50"
                                        />
                                        <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
                                    </div>
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-2">
                                    Description
                                </label>
                                <textarea
                                    rows={4}
                                    className="w-full rounded-lg border border-[#243656] bg-[#0f1c31] px-4 py-3 text-gray-200 focus:border-indigo-500/50 focus:outline-none focus:ring-1 focus:ring-indigo-500/50"
                                    placeholder="Describe your role and achievements..."
                                />
                            </div>
                        </div>
                    </Card>
                </div>

                {/* Sidebar */}
                <div className="space-y-6">
                    <Card className="bg-[#1a2942] border-[#243656] p-6">
                        <h2 className="text-lg font-semibold text-gray-200 mb-6">
                            Additional Details
                        </h2>
                        <div className="space-y-6">
                            {/* Company Logo Upload */}
                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-2">
                                    Company Logo
                                </label>
                                <div className="border-2 border-dashed border-[#243656] rounded-lg p-6 text-center hover:border-indigo-500/30 transition-colors cursor-pointer">
                                    <Building2 className="h-8 w-8 text-gray-400 mx-auto mb-3" />
                                    <p className="text-sm text-gray-400">
                                        Drop logo here or{" "}
                                        <span className="text-indigo-400 hover:text-indigo-300">
                                            browse
                                        </span>
                                    </p>
                                    <p className="text-xs text-gray-500 mt-1">
                                        SVG, PNG or JPG (max. 800x400px)
                                    </p>
                                </div>
                            </div>

                            {/* Location */}
                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-2">
                                    Location
                                </label>
                                <input
                                    type="text"
                                    className="w-full rounded-lg border border-[#243656] bg-[#0f1c31] px-4 py-3 text-gray-200 focus:border-indigo-500/50 focus:outline-none focus:ring-1 focus:ring-indigo-500/50"
                                    placeholder="e.g. San Francisco, CA"
                                />
                            </div>

                            {/* Employment Type */}
                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-2">
                                    Employment Type
                                </label>
                                <select className="w-full rounded-lg border border-[#243656] bg-[#0f1c31] px-4 py-3 text-gray-200 focus:border-indigo-500/50 focus:outline-none focus:ring-1 focus:ring-indigo-500/50">
                                    <option value="full-time">Full-time</option>
                                    <option value="part-time">Part-time</option>
                                    <option value="contract">Contract</option>
                                    <option value="freelance">Freelance</option>
                                    <option value="internship">
                                        Internship
                                    </option>
                                </select>
                            </div>

                            {/* Skills */}
                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-2">
                                    Skills
                                </label>
                                <div className="space-y-3">
                                    <div className="relative">
                                        <input
                                            type="text"
                                            className="w-full rounded-lg border border-[#243656] bg-[#0f1c31] px-4 py-3 text-gray-200 focus:border-indigo-500/50 focus:outline-none focus:ring-1 focus:ring-indigo-500/50"
                                            placeholder="Add skills (press Enter)"
                                        />
                                    </div>
                                    <div className="flex flex-wrap gap-2">
                                        {["React", "TypeScript"].map(
                                            (skill) => (
                                                <span
                                                    key={skill}
                                                    className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm bg-indigo-500/10 text-indigo-400 border border-indigo-500/20"
                                                >
                                                    {skill}
                                                    <button className="hover:text-indigo-300">
                                                        <X className="h-3 w-3" />
                                                    </button>
                                                </span>
                                            )
                                        )}
                                    </div>
                                </div>
                            </div>

                            {/* Company Website */}
                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-2">
                                    Company Website
                                </label>
                                <div className="relative">
                                    <LinkIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                                    <input
                                        type="url"
                                        className="w-full rounded-lg border border-[#243656] bg-[#0f1c31] pl-10 pr-4 py-3 text-gray-200 focus:border-indigo-500/50 focus:outline-none focus:ring-1 focus:ring-indigo-500/50"
                                        placeholder="https://example.com"
                                    />
                                </div>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    );
}
