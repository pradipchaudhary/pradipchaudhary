"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    Braces,
    FolderKanban,
    LayoutDashboard,
    Notebook,
    Rss,
    Settings,
    ShieldCheck,
} from "lucide-react";

export default function Sidebar() {
    const pathname = usePathname();

    const menuItems = [
        {
            icon: <LayoutDashboard />,
            label: "Dashboard",
            href: "/admin/dashboard",
        },
        {
            icon: <FolderKanban />,
            label: "Projects",
            href: "/admin/projects",
            badge: "3",
        },
        {
            icon: <Rss />,
            label: "Blog",
            href: "/admin/blog",
            badge: "5",
        },
        {
            icon: <Braces />,
            label: "Experience",
            href: "/admin/experience",
        },
        {
            icon: <Notebook />,
            label: "Skills",
            href: "/admin/skills",
        },
        {
            icon: <ShieldCheck />,
            label: "Certifications",
            href: "/admin/certifications",
        },
        {
            icon: <Settings />,
            label: "Settings",
            href: "/admin/settings",
        },
    ];

    const bottomMenuItems = [
        {
            icon: "🌐",
            label: "View Site",
            href: "/",
        },
    ];

    return (
        <aside className="lg:sticky min-w-[260px] top-0 h-screen bg-[#1d193e] overflow-y-auto border-r border-[#2d2854]/50">
            <div className="flex flex-col h-full">
                {/* Logo */}
                <div className="p-6">
                    <h1 className="text-xl font-bold text-white flex items-center gap-2">
                        <span className="text-[#6f49d8]">⚡</span>
                        Admin Panel
                    </h1>
                </div>

                {/* Main Menu */}
                <nav className="flex-1 p-4">
                    <div className="space-y-1">
                        {menuItems.map((item) => {
                            const isActive = pathname === item.href;
                            return (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className={`flex items-center justify-between px-4 py-3 rounded-lg transition-all duration-200
                                        ${
                                            isActive
                                                ? "bg-[#2d2854] text-white shadow-lg"
                                                : "text-slate-400 hover:bg-[#2d2854]/50 hover:text-white"
                                        }`}
                                >
                                    <div className="flex items-center gap-3">
                                        <span
                                            className={`text-xl ${
                                                isActive
                                                    ? "opacity-100"
                                                    : "opacity-75"
                                            }`}
                                        >
                                            {item.icon}
                                        </span>
                                        <span className="font-medium">
                                            {item.label}
                                        </span>
                                    </div>
                                    {item.badge && (
                                        <span
                                            className={`px-2 py-1 text-xs rounded-full ${
                                                isActive
                                                    ? "bg-[#6f49d8]/20 text-[#a893e9]"
                                                    : "bg-[#2d2854] text-slate-400"
                                            }`}
                                        >
                                            {item.badge}
                                        </span>
                                    )}
                                </Link>
                            );
                        })}
                    </div>
                </nav>

                {/* Bottom Section */}
                <div className="p-4 border-t border-[#2d2854]/50">
                    <div className="space-y-1 mb-4">
                        {bottomMenuItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className="flex items-center px-4 py-3 rounded-lg text-slate-400 hover:bg-[#2d2854]/50 hover:text-white transition-all duration-200"
                            >
                                <span className="text-xl opacity-75 mr-3">
                                    {item.icon}
                                </span>
                                <span className="font-medium">
                                    {item.label}
                                </span>
                            </Link>
                        ))}
                    </div>

                    {/* Profile Section */}
                    <div className="p-4 rounded-lg bg-[#2d2854]">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-[#6f49d8]/20 flex items-center justify-center text-[#a893e9] text-lg">
                                👤
                            </div>
                            <div>
                                <p className="text-sm font-medium text-white">
                                    Admin User
                                </p>
                                <p className="text-xs text-slate-400">
                                    Administrator
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </aside>
    );
}
