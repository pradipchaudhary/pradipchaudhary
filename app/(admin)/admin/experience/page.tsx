"use client";

import React from "react";
import { Card } from "@/components/ui/card";
import {
    Plus,
    Search,
    Building2,
    MapPin,
    Calendar,
    ExternalLink,
    Edit2,
    Trash2,
    BriefcaseIcon,
} from "lucide-react";
import Link from "next/link";

const experiences = [
    {
        id: 1,
        position: "Senior Frontend Developer",
        company: "Tech Corp",
        location: "San Francisco, CA",
        type: "Full-time",
        startDate: "2022-01",
        endDate: null,
        current: true,
        description:
            "Leading the frontend development team and architecting scalable solutions.",
        skills: ["React", "Next.js", "TypeScript", "TailwindCSS"],
        logo: "/company-1.png",
    },
    // Add more experiences...
];

export default function ExperiencePage() {
    return (
        <div className="min-h-screen bg-[#0f1c31] p-6 space-y-6">
            {/* Header */}
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                <div>
                    <h1 className="text-2xl font-semibold text-gray-200">
                        Experience
                    </h1>
                    <p className="text-gray-400 mt-1">
                        Manage your professional experience
                    </p>
                </div>
                <Link
                    href="/admin/experience/create-new"
                    className="flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition-colors"
                >
                    <Plus className="h-4 w-4" />
                    <span>Add Experience</span>
                </Link>
            </div>

            {/* Search and Filters */}
            <div className="flex gap-4 items-center">
                <div className="flex-1 max-w-md">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Search experiences..."
                            className="w-full rounded-lg border border-[#243656] bg-[#1a2942] pl-10 pr-4 py-2.5 text-sm text-gray-200 placeholder:text-gray-500 focus:border-indigo-500/50 focus:outline-none focus:ring-1 focus:ring-indigo-500/50"
                        />
                    </div>
                </div>
            </div>

            {/* Experience List */}
            <div className="grid grid-cols-1 gap-6">
                {experiences.map((exp) => (
                    <Card
                        key={exp.id}
                        className="bg-[#1a2942] border-[#243656] p-6 hover:shadow-lg transition-all duration-200"
                    >
                        <div className="flex items-start gap-6">
                            {/* Company Logo */}
                            <div className="w-16 h-16 rounded-lg bg-[#243656] flex items-center justify-center flex-shrink-0">
                                {exp.logo ? (
                                    <img
                                        src={exp.logo}
                                        alt={exp.company}
                                        className="w-12 h-12 object-contain"
                                    />
                                ) : (
                                    <Building2 className="w-8 h-8 text-gray-400" />
                                )}
                            </div>

                            {/* Content */}
                            <div className="flex-1">
                                <div className="flex items-start justify-between gap-4">
                                    <div>
                                        <h3 className="text-lg font-medium text-gray-200">
                                            {exp.position}
                                        </h3>
                                        <div className="mt-2 space-y-2">
                                            <div className="flex items-center gap-4 text-sm text-gray-400">
                                                <div className="flex items-center gap-1.5">
                                                    <BriefcaseIcon className="h-4 w-4" />
                                                    <span>{exp.company}</span>
                                                </div>
                                                <div className="flex items-center gap-1.5">
                                                    <MapPin className="h-4 w-4" />
                                                    <span>{exp.location}</span>
                                                </div>
                                                <div className="flex items-center gap-1.5">
                                                    <Calendar className="h-4 w-4" />
                                                    <span>
                                                        {exp.startDate} -{" "}
                                                        {exp.current
                                                            ? "Present"
                                                            : exp.endDate}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <button className="p-2 hover:bg-[#243656] rounded-lg transition-colors">
                                            <Edit2 className="h-4 w-4 text-gray-400" />
                                        </button>
                                        <button className="p-2 hover:bg-[#243656] rounded-lg transition-colors">
                                            <Trash2 className="h-4 w-4 text-red-400" />
                                        </button>
                                    </div>
                                </div>

                                <p className="mt-3 text-sm text-gray-400 line-clamp-2">
                                    {exp.description}
                                </p>

                                {/* Skills */}
                                <div className="mt-4 flex flex-wrap gap-2">
                                    {exp.skills.map((skill) => (
                                        <span
                                            key={skill}
                                            className="px-2.5 py-1 rounded-full text-xs bg-indigo-500/10 text-indigo-400 border border-indigo-500/20"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </Card>
                ))}
            </div>
        </div>
    );
}
