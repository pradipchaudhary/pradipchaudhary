"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
    const pathname = usePathname();

    const menuItems = [
        {
            icon: "📊",
            label: "Dashboard",
            href: "/admin/dashboard",
        },
        {
            icon: "💼",
            label: "Projects",
            href: "/admin/projects",
            badge: "3",
        },
        {
            icon: "📝",
            label: "Blog",
            href: "/admin/blog",
            badge: "5",
        },
        {
            icon: "⚡",
            label: "Experience",
            href: "/admin/experience",
        },
        {
            icon: "🎯",
            label: "Skills",
            href: "/admin/skills",
        },
        {
            icon: "🏆",
            label: "Certifications",
            href: "/admin/certifications",
        },
        {
            icon: "⚙️",
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
        <aside className="lg:sticky min-w-[260px] top-0 h-screen bg-[#0a1428] overflow-y-auto border-r border-[#243656]/50">
            <div className="flex flex-col h-full">
                {/* Logo */}
                <div className="p-6">
                    <h1 className="text-xl font-bold text-white flex items-center gap-2">
                        <span className="text-blue-500">⚡</span>
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
                                                ? "bg-[#1a2942] text-white shadow-lg"
                                                : "text-gray-400 hover:bg-[#1a2942]/50 hover:text-white"
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
                                                    ? "bg-blue-500/20 text-blue-300"
                                                    : "bg-[#243656] text-gray-400"
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
                <div className="p-4 border-t border-[#243656]/50">
                    {/* Bottom Menu */}
                    <div className="space-y-1 mb-4">
                        {bottomMenuItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className="flex items-center px-4 py-3 rounded-lg text-gray-400 hover:bg-[#1a2942]/50 hover:text-white transition-all duration-200"
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
                    <div className="p-4 rounded-lg bg-[#1a2942]">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-300 text-lg">
                                👤
                            </div>
                            <div>
                                <p className="text-sm font-medium text-white">
                                    Admin User
                                </p>
                                <p className="text-xs text-gray-400">
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
