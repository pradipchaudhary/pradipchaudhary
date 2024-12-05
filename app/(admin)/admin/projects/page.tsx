"use client";

import React from "react";
import { Card } from "@/components/ui/card";
import {
    Clock,
    Users,
    MoreVertical,
    Plus,
    Search,
    Filter,
    ArrowUpRight,
    ListFilter,
    Grid,
    Calendar,
} from "lucide-react";
import Link from "next/link";

interface Project {
    id: number;
    name: string;
    description: string;
    status: "In Progress" | "Completed" | "Planning";
    progress: number;
    members: number;
    dueDate: string;
    priority: "High" | "Medium" | "Low";
    tags?: string[];
}

const projects: Project[] = [
    {
        id: 1,
        name: "Website Redesign",
        description: "Redesigning the main company website with modern UI",
        status: "In Progress",
        progress: 65,
        members: 4,
        dueDate: "2024-04-15",
        priority: "High",
        tags: ["Design", "Frontend"],
    },
    {
        id: 2,
        name: "Mobile App Development",
        description: "Building a new mobile app for iOS and Android",
        status: "Planning",
        progress: 25,
        members: 6,
        dueDate: "2024-05-20",
        priority: "Medium",
        tags: ["Mobile", "React Native"],
    },
    {
        id: 3,
        name: "Database Migration",
        description: "Migrating from MySQL to PostgreSQL",
        status: "Completed",
        progress: 100,
        members: 3,
        dueDate: "2024-03-10",
        priority: "High",
        tags: ["Backend", "Database"],
    },
];

export default function ProjectsPage() {
    return (
        <div className="min-h-screen bg-[#0f1c31] p-6 space-y-6">
            {/* Header Section */}
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                <div>
                    <h1 className="text-2xl font-semibold text-gray-200">
                        Projects Overview
                    </h1>
                    <p className="text-gray-400 mt-1">
                        Track and manage your active projects
                    </p>
                </div>
                <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2 px-4 py-2 bg-[#1a2942] rounded-lg border border-[#243656]">
                        <Calendar className="h-4 w-4 text-gray-400" />
                        <select className="bg-transparent text-gray-300 text-sm focus:outline-none">
                            <option value="week">This Week</option>
                            <option value="month">This Month</option>
                            <option value="year">This Year</option>
                        </select>
                    </div>
                    <Link
                        href="/admin/projects/create-new"
                        className="flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition-colors"
                    >
                        <Plus className="h-4 w-4" />
                        <span>New Project</span>
                    </Link>
                </div>
            </div>

            {/* Filter Section */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
                <div className="md:col-span-6 lg:col-span-4">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Search projects..."
                            className="w-full rounded-lg border border-[#243656] bg-[#1a2942] pl-10 pr-4 py-2.5 text-sm text-gray-200 placeholder:text-gray-500 focus:border-indigo-500/50 focus:outline-none focus:ring-1 focus:ring-indigo-500/50"
                        />
                    </div>
                </div>
                <div className="md:col-span-6 lg:col-span-8 flex items-center justify-end gap-3">
                    <button className="flex items-center gap-2 px-4 py-2.5 border border-[#243656] text-gray-300 rounded-lg hover:bg-[#1a2942] transition-colors">
                        <ListFilter className="h-4 w-4" />
                        <span>Filter</span>
                    </button>
                    <div className="flex items-center bg-[#1a2942] rounded-lg border border-[#243656] p-1">
                        <button className="p-1.5 rounded hover:bg-[#243656] transition-colors">
                            <Grid className="h-4 w-4 text-gray-400" />
                        </button>
                        <button className="p-1.5 rounded bg-[#243656]">
                            <Filter className="h-4 w-4 text-gray-300" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Stats Overview */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                    { label: "Total Projects", value: "12" },
                    { label: "In Progress", value: "5" },
                    { label: "Completed", value: "4" },
                    { label: "On Hold", value: "3" },
                ].map((stat, index) => (
                    <Card
                        key={index}
                        className="bg-[#1a2942] border-[#243656] p-4 flex items-center justify-between"
                    >
                        <div>
                            <p className="text-sm text-gray-400">
                                {stat.label}
                            </p>
                            <p className="text-xl font-semibold text-gray-200 mt-1">
                                {stat.value}
                            </p>
                        </div>
                        <div className="h-12 w-12 rounded-lg bg-[#243656] flex items-center justify-center">
                            <ArrowUpRight className="h-5 w-5 text-indigo-400" />
                        </div>
                    </Card>
                ))}
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </div>
    );
}

function ProjectCard({ project }: { project: Project }) {
    const getStatusColor = (status: string) => {
        switch (status) {
            case "In Progress":
                return "text-amber-400 bg-amber-400/10 border border-amber-400/20";
            case "Completed":
                return "text-emerald-400 bg-emerald-400/10 border border-emerald-400/20";
            default:
                return "text-indigo-400 bg-indigo-400/10 border border-indigo-400/20";
        }
    };

    const getProgressColor = (progress: number) => {
        if (progress >= 80) return "bg-emerald-500";
        if (progress >= 40) return "bg-amber-500";
        return "bg-indigo-500";
    };

    return (
        <Card className="bg-[#1a2942] border-[#243656] p-6 hover:shadow-lg transition-all duration-200 group">
            {/* Header */}
            <div className="flex justify-between items-start">
                <div className="space-y-1.5">
                    <div className="flex items-center gap-3">
                        <h3 className="font-medium text-gray-200 text-lg">
                            {project.name}
                        </h3>
                        <div
                            className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(
                                project.status
                            )}`}
                        >
                            {project.status}
                        </div>
                    </div>
                    <p className="text-sm text-gray-400 line-clamp-2">
                        {project.description}
                    </p>
                </div>
                <div className="flex items-center gap-2">
                    <button className="p-2 hover:bg-[#243656] rounded-lg transition-colors opacity-0 group-hover:opacity-100">
                        <Clock className="h-4 w-4 text-gray-400" />
                    </button>
                    <button className="p-2 hover:bg-[#243656] rounded-lg transition-colors">
                        <MoreVertical className="h-4 w-4 text-gray-400" />
                    </button>
                </div>
            </div>

            {/* Progress Section */}
            <div className="mt-6 space-y-3">
                <div className="flex justify-between items-center text-sm">
                    <div className="flex items-center gap-2">
                        <span className="text-gray-400">Progress</span>
                        <span
                            className={`px-1.5 py-0.5 rounded-md text-xs font-medium ${
                                project.progress === 100
                                    ? "bg-emerald-400/10 text-emerald-400"
                                    : "bg-[#243656] text-gray-300"
                            }`}
                        >
                            {project.progress}%
                        </span>
                    </div>
                    <span className="text-gray-400">
                        Due {new Date(project.dueDate).toLocaleDateString()}
                    </span>
                </div>
                <div className="h-2 bg-[#243656] rounded-full overflow-hidden">
                    <div
                        className={`h-full transition-all duration-300 ${getProgressColor(
                            project.progress
                        )}`}
                        style={{ width: `${project.progress}%` }}
                    ></div>
                </div>
            </div>

            {/* Team Members */}
            <div className="mt-6 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className="flex -space-x-2">
                        {[...Array(Math.min(3, project.members))].map(
                            (_, i) => (
                                <div
                                    key={i}
                                    className="h-8 w-8 rounded-full bg-[#243656] border-2 border-[#1a2942] flex items-center justify-center ring-2 ring-[#243656] hover:ring-indigo-500/30 transition-all"
                                >
                                    <Users className="h-4 w-4 text-gray-400" />
                                </div>
                            )
                        )}
                        {project.members > 3 && (
                            <div className="h-8 w-8 rounded-full bg-[#243656] border-2 border-[#1a2942] flex items-center justify-center">
                                <span className="text-xs font-medium text-gray-300">
                                    +{project.members - 3}
                                </span>
                            </div>
                        )}
                    </div>
                    <button className="p-1 hover:bg-[#243656] rounded-full transition-colors opacity-0 group-hover:opacity-100">
                        <Plus className="h-4 w-4 text-gray-400" />
                    </button>
                </div>
                <button className="flex items-center gap-2 py-2 px-4 text-sm text-gray-300 hover:text-gray-200 hover:bg-[#243656] rounded-lg transition-all group/btn">
                    View Details
                    <ArrowUpRight className="h-4 w-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                </button>
            </div>
        </Card>
    );
}
