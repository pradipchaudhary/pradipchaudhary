"use client";

import React from "react";
import { Card } from "@/components/ui/card";
import { useData } from "@/context/DataContext";
import {
    Plus,
    Search,
    Filter,
    ArrowUpRight,
    ListFilter,
    Grid,
    Calendar,
    Edit,
} from "lucide-react";
import Link from "next/link";
import { Project } from "@/types";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";

export default function ProjectsPage() {
    const { projects } = useData();
    useSmoothScroll();

    return (
        <div className="min-h-screen bg-[#1d193e] p-6 space-y-8">
            {/* Header Section */}
            <div className="scroll-fade opacity-0 translate-y-10">
                <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                    <div>
                        <h1 className="text-2xl font-bold text-slate-200">
                            Projects Overview
                        </h1>
                        <p className="text-slate-400 mt-2">
                            Track and manage your active projects
                        </p>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2 px-4 py-2 bg-[#2d2854]/50 rounded-lg border border-[#2d2854] backdrop-blur-sm">
                            <Calendar className="h-4 w-4 text-slate-400" />
                            <select className="bg-transparent text-slate-300 text-sm focus:outline-none">
                                <option value="week">This Week</option>
                                <option value="month">This Month</option>
                                <option value="year">This Year</option>
                            </select>
                        </div>
                        <Link
                            href="/admin/projects/create-new"
                            className="flex items-center gap-2 px-4 py-2 bg-[#6f49d8] hover:bg-[#6f49d8]/90 
                                     text-white rounded-lg transition-all duration-300"
                        >
                            <Plus className="h-4 w-4" />
                            <span>New Project</span>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Filter Section */}
            <div className="scroll-fade opacity-0 translate-y-10 delay-[200ms]">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
                    <div className="md:col-span-6 lg:col-span-4">
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                            <input
                                type="text"
                                placeholder="Search projects..."
                                className="w-full rounded-lg border border-[#2d2854] bg-[#2d2854]/50 pl-10 pr-4 py-2.5 
                                         text-sm text-slate-200 placeholder:text-slate-500 
                                         focus:border-[#6f49d8]/50 focus:outline-none focus:ring-1 focus:ring-[#6f49d8]/50
                                         transition-all duration-300 backdrop-blur-sm"
                            />
                        </div>
                    </div>
                    <div className="md:col-span-6 lg:col-span-8 flex items-center justify-end gap-3">
                        <button
                            className="flex items-center gap-2 px-4 py-2.5 border border-[#2d2854] 
                                         text-slate-300 rounded-lg hover:bg-[#2d2854]/50 transition-all duration-300"
                        >
                            <ListFilter className="h-4 w-4" />
                            <span>Filter</span>
                        </button>
                        <div className="flex items-center bg-[#2d2854]/50 rounded-lg border border-[#2d2854] p-1">
                            <button className="p-1.5 rounded hover:bg-[#2d2854] transition-all duration-300">
                                <Grid className="h-4 w-4 text-slate-400" />
                            </button>
                            <button className="p-1.5 rounded bg-[#2d2854]">
                                <Filter className="h-4 w-4 text-slate-300" />
                            </button>
                        </div>
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
                        className={`scroll-fade opacity-0 translate-y-10 delay-[${
                            index * 100
                        }ms]
                                 bg-[#2d2854]/50 border-[#2d2854] p-4 flex items-center justify-between
                                 backdrop-blur-sm hover:bg-[#2d2854]/70 transition-all duration-300`}
                    >
                        <div>
                            <p className="text-sm text-slate-400">
                                {stat.label}
                            </p>
                            <p className="text-xl font-bold text-slate-200 mt-1">
                                {stat.value}
                            </p>
                        </div>
                        <div className="h-12 w-12 rounded-lg bg-[#2d2854] flex items-center justify-center">
                            <ArrowUpRight className="h-5 w-5 text-[#6f49d8]" />
                        </div>
                    </Card>
                ))}
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {projects.map((project, index) => (
                    <div
                        key={project.id}
                        className={`scroll-fade opacity-0 translate-y-10 delay-[${
                            index * 100
                        }ms]`}
                    >
                        <ProjectCard project={project} />
                    </div>
                ))}
            </div>
        </div>
    );
}

function ProjectCard({ project }: { project: Project }) {
    const getStatusColor = (status: string) => {
        switch (status.toLowerCase()) {
            case "in-progress":
                return "text-[#6f49d8] bg-[#6f49d8]/10 border border-[#6f49d8]/20";
            case "completed":
                return "text-emerald-400 bg-emerald-400/10 border border-emerald-400/20";
            default:
                return "text-slate-400 bg-slate-400/10 border border-slate-400/20";
        }
    };

    return (
        <Card
            className="bg-[#2d2854]/50 border-[#2d2854] p-6 backdrop-blur-sm
                      hover:bg-[#2d2854]/70 transition-all duration-300 group
                      hover:border-[#6f49d8]/20 hover:shadow-lg"
        >
            {/* Header */}
            <div className="flex justify-between items-start mb-6">
                <div className="space-y-2">
                    <div className="flex items-center gap-3">
                        <h3 className="font-semibold text-slate-200 text-lg">
                            {project.title}
                        </h3>
                        <div
                            className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(
                                project.status
                            )}`}
                        >
                            {project.status}
                        </div>
                    </div>
                    <p className="text-sm text-slate-400 line-clamp-2">
                        {project.description}
                    </p>
                </div>
                <div className="flex items-center gap-2">
                    <Link
                        href={`/admin/projects/${project.slug}/edit`}
                        className="p-2 hover:bg-[#2d2854] rounded-lg transition-colors group/btn
                                 hover:shadow-md hover:-translate-y-0.5"
                    >
                        <Edit className="h-4 w-4 text-slate-400 group-hover/btn:text-[#6f49d8]" />
                    </Link>
                    <Link
                        href={`/admin/projects/${project.slug}`}
                        className="p-2 hover:bg-[#2d2854] rounded-lg transition-colors group/btn
                                 hover:shadow-md hover:-translate-y-0.5"
                    >
                        <ArrowUpRight className="h-4 w-4 text-slate-400 group-hover/btn:text-[#6f49d8]" />
                    </Link>
                </div>
            </div>

            {/* Content */}
            <div className="grid grid-cols-2 gap-8">
                {/* Left Column */}
                <div className="space-y-6">
                    <div>
                        <h4 className="text-sm font-medium text-slate-300 mb-3">
                            Technologies
                        </h4>
                        <div className="flex flex-wrap gap-2">
                            {project.technologies
                                .slice(0, 3)
                                .map((tech, index) => (
                                    <span
                                        key={index}
                                        className="px-2.5 py-1 text-xs rounded-md bg-[#2d2854] text-slate-300
                                             border border-[#6f49d8]/10 hover:border-[#6f49d8]/20
                                             transition-colors"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            {project.technologies.length > 3 && (
                                <span
                                    className="px-2.5 py-1 text-xs rounded-md bg-[#2d2854] text-slate-300
                                               border border-[#6f49d8]/10 hover:border-[#6f49d8]/20"
                                >
                                    +{project.technologies.length - 3}
                                </span>
                            )}
                        </div>
                    </div>
                    <div>
                        <h4 className="text-sm font-medium text-slate-300 mb-2">
                            Role
                        </h4>
                        <p className="text-sm text-slate-400">{project.role}</p>
                    </div>
                </div>

                {/* Right Column */}
                <div className="space-y-6">
                    <div>
                        <h4 className="text-sm font-medium text-slate-300 mb-3">
                            Links
                        </h4>
                        <div className="flex gap-4">
                            {project.liveUrl && (
                                <a
                                    href={project.liveUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-sm text-[#6f49d8] hover:text-[#8b6ae5] transition-colors
                                             flex items-center gap-1.5"
                                >
                                    <span>Live Demo</span>
                                    <ArrowUpRight className="h-3.5 w-3.5" />
                                </a>
                            )}
                            {project.githubUrl && (
                                <a
                                    href={project.githubUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-sm text-[#6f49d8] hover:text-[#8b6ae5] transition-colors
                                             flex items-center gap-1.5"
                                >
                                    <span>GitHub</span>
                                    <ArrowUpRight className="h-3.5 w-3.5" />
                                </a>
                            )}
                        </div>
                    </div>
                    <div>
                        <h4 className="text-sm font-medium text-slate-300 mb-2">
                            Created
                        </h4>
                        <p className="text-sm text-slate-400">
                            {new Date(project.createdAt).toLocaleDateString()}
                        </p>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <div className="mt-6 pt-4 border-t border-[#2d2854] flex justify-between items-center">
                <div className="text-xs text-slate-400 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-slate-400"></span>
                    {project.team.length} Team Member
                    {project.team.length !== 1 ? "s" : ""}
                </div>
                {project.featured && (
                    <span
                        className="text-[#6f49d8] bg-[#6f49d8]/10 px-3 py-1 rounded-md text-xs
                                   border border-[#6f49d8]/20"
                    >
                        Featured
                    </span>
                )}
            </div>
        </Card>
    );
}
