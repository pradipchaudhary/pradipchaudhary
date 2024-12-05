"use client";

import React from "react";
import { Card } from "@/components/ui/card";
import {
    Users,
    Eye,
    FileText,
    Briefcase,
    Award,
    ArrowUpRight,
    ArrowUp,
    ArrowDown,
    MessageSquare,
    Clock,
} from "lucide-react";
import Link from "next/link";

export default function AdminDashboard() {
    return (
        <div className="min-h-screen bg-[#0f1c31] p-6 space-y-6">
            {/* Header */}
            <div>
                <h1 className="text-2xl font-semibold text-gray-200">
                    Dashboard Overview
                </h1>
                <p className="text-gray-400 mt-1">
                    Monitor and manage your portfolio content
                </p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                    {
                        label: "Total Projects",
                        value: "12",
                        change: "+2",
                        icon: <Briefcase className="h-5 w-5 text-indigo-400" />,
                    },
                    {
                        label: "Blog Posts",
                        value: "24",
                        change: "+5",
                        icon: <FileText className="h-5 w-5 text-emerald-400" />,
                    },
                    {
                        label: "Certifications",
                        value: "8",
                        change: "+1",
                        icon: <Award className="h-5 w-5 text-amber-400" />,
                    },
                    {
                        label: "Total Views",
                        value: "2.4K",
                        change: "+12%",
                        icon: <Eye className="h-5 w-5 text-violet-400" />,
                    },
                ].map((stat, index) => (
                    <Card
                        key={index}
                        className="bg-[#1a2942] border-[#243656] p-5 hover:shadow-lg transition-all duration-200"
                    >
                        <div className="flex items-center justify-between">
                            <div className="h-12 w-12 rounded-lg bg-[#243656] flex items-center justify-center">
                                {stat.icon}
                            </div>
                            <span className="flex items-center gap-1 text-xs font-medium text-emerald-400 bg-emerald-400/10 px-2 py-1 rounded-full">
                                <ArrowUp className="h-3 w-3" />
                                {stat.change}
                            </span>
                        </div>
                        <div className="mt-3">
                            <h3 className="text-2xl font-semibold text-gray-200">
                                {stat.value}
                            </h3>
                            <p className="text-sm text-gray-400 mt-0.5">
                                {stat.label}
                            </p>
                        </div>
                    </Card>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Recent Activity */}
                <Card className="bg-[#1a2942] border-[#243656] p-6">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-lg font-semibold text-gray-200">
                            Recent Activity
                        </h2>
                        <button className="text-sm text-gray-400 hover:text-gray-300">
                            View all
                        </button>
                    </div>
                    <div className="space-y-4">
                        {[
                            {
                                title: "New Project Added",
                                description: "Portfolio Website Redesign",
                                time: "2 hours ago",
                                icon: <Briefcase className="h-4 w-4" />,
                            },
                            {
                                title: "Blog Post Published",
                                description: "Getting Started with Next.js 14",
                                time: "5 hours ago",
                                icon: <FileText className="h-4 w-4" />,
                            },
                            {
                                title: "New Certification",
                                description: "AWS Cloud Practitioner",
                                time: "1 day ago",
                                icon: <Award className="h-4 w-4" />,
                            },
                        ].map((activity, index) => (
                            <div
                                key={index}
                                className="flex items-start gap-4 p-3 rounded-lg hover:bg-[#243656] transition-colors"
                            >
                                <div className="p-2 rounded-lg bg-[#0f1c31]">
                                    {activity.icon}
                                </div>
                                <div className="flex-1 min-w-0">
                                    <h3 className="font-medium text-gray-200">
                                        {activity.title}
                                    </h3>
                                    <p className="text-sm text-gray-400">
                                        {activity.description}
                                    </p>
                                </div>
                                <span className="text-sm text-gray-500 whitespace-nowrap">
                                    {activity.time}
                                </span>
                            </div>
                        ))}
                    </div>
                </Card>

                {/* Quick Actions */}
                <Card className="bg-[#1a2942] border-[#243656] p-6">
                    <h2 className="text-lg font-semibold text-gray-200 mb-6">
                        Quick Actions
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {[
                            {
                                title: "Add Project",
                                description: "Create a new project",
                                icon: <Briefcase className="h-5 w-5" />,
                                href: "/admin/projects/create-new",
                                color: "bg-indigo-500/10",
                            },
                            {
                                title: "New Blog Post",
                                description: "Write an article",
                                icon: <FileText className="h-5 w-5" />,
                                href: "/admin/blog/create-new",
                                color: "bg-emerald-500/10",
                            },
                            {
                                title: "Add Experience",
                                description: "Update work history",
                                icon: <Briefcase className="h-5 w-5" />,
                                href: "/admin/experience/create-new",
                                color: "bg-amber-500/10",
                            },
                            {
                                title: "Add Certification",
                                description: "Add new certification",
                                icon: <Award className="h-5 w-5" />,
                                href: "/admin/certifications/create-new",
                                color: "bg-violet-500/10",
                            },
                        ].map((action, index) => (
                            <Link
                                key={index}
                                href={action.href}
                                className="p-4 rounded-lg border border-[#243656] hover:bg-[#243656] transition-all group"
                            >
                                <div
                                    className={`w-10 h-10 rounded-lg ${action.color} flex items-center justify-center mb-3`}
                                >
                                    {action.icon}
                                </div>
                                <h3 className="font-medium text-gray-200">
                                    {action.title}
                                </h3>
                                <p className="text-sm text-gray-400 mt-1">
                                    {action.description}
                                </p>
                            </Link>
                        ))}
                    </div>
                </Card>
            </div>
        </div>
    );
}
