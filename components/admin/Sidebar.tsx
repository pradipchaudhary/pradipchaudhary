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
            href: "/admin/experiences",
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

    return (
        <aside className="lg:sticky min-w-[260px] top-0 h-screen bg-[#000000]/90 overflow-y-auto border-r border-[#2d2854]/30">
            <div className="flex flex-col h-full">
                {/* Logo */}
                <div className="p-6">
                    <h1 className="text-xl font-bold text-gray-200 flex items-center gap-2">
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
                                                ? "bg-[#0a0a0a]/80 text-gray-200 shadow-lg"
                                                : "text-gray-400 hover:bg-[#0a0a0a]/70 hover:text-white"
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
                                </Link>
                            );
                        })}
                    </div>
                </nav>

                {/* Bottom Section */}
                <div className="p-4 ">
                    {/* Profile Section */}
                    <div className="p-4 rounded-lg bg-[#7777]/10">
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
