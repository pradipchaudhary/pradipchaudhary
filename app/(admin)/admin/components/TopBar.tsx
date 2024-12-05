import React from "react";
import {
    Search,
    Bell,
    User,
    ChevronDown,
    Menu,
    MessageSquare,
} from "lucide-react";
import Link from "next/link";

export default function TopBar() {
    return (
        <div className="sticky top-0 z-50 p-[0.38rem] bg-[#0a1428] border-b border-[#243656]/30 shadow-xl">
            <div className="flex h-16 items-center justify-between px-6">
                {/* Left Section */}
                <div className="flex items-center gap-4">
                    <button className="lg:hidden p-2 hover:bg-[#1a2942] rounded-lg transition-colors">
                        <Menu className="h-5 w-5 text-gray-400" />
                    </button>
                    <div className="relative hidden md:block">
                        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Search..."
                            className="w-72 rounded-lg border border-[#243656] bg-[#0f1c31] pl-10 pr-4 py-2 text-sm text-gray-200 placeholder:text-gray-500 focus:border-indigo-500/50 focus:outline-none focus:ring-1 focus:ring-indigo-500/50"
                        />
                    </div>
                </div>

                {/* Right Section */}
                <div className="flex items-center gap-4">
                    {/* Quick Actions */}
                    <div className="hidden md:flex items-center gap-2">
                        <Link
                            href="/admin/messages"
                            className="relative p-2 text-gray-400 hover:text-gray-200 hover:bg-[#1a2942] rounded-lg transition-colors"
                        >
                            <MessageSquare className="h-5 w-5" />
                            <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-indigo-500"></span>
                        </Link>
                        <Link
                            href="/admin/notifications"
                            className="relative p-2 text-gray-400 hover:text-gray-200 hover:bg-[#1a2942] rounded-lg transition-colors"
                        >
                            <Bell className="h-5 w-5" />
                            <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-indigo-500"></span>
                        </Link>
                    </div>

                    {/* Divider */}
                    <div className="hidden md:block h-6 w-px bg-[#243656]"></div>

                    {/* Profile Dropdown */}
                    <button className="flex items-center gap-3 p-1.5 hover:bg-[#1a2942] rounded-lg transition-colors group">
                        <div className="flex items-center gap-3">
                            <div className="relative">
                                <div className="h-9 w-9 rounded-full bg-indigo-600/20 ring-2 ring-indigo-600/50 flex items-center justify-center">
                                    <User className="h-5 w-5 text-indigo-400" />
                                </div>
                                <div className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-[#0a1428] bg-emerald-500"></div>
                            </div>
                            <div className="hidden md:block text-left">
                                <div className="text-sm font-medium text-gray-200">
                                    Admin User
                                </div>
                                <div className="text-xs text-gray-400">
                                    admin@example.com
                                </div>
                            </div>
                        </div>
                        <ChevronDown className="h-4 w-4 text-gray-400 group-hover:text-gray-200 transition-colors" />
                    </button>
                </div>
            </div>

            {/* Mobile Search - Shown below header on mobile */}
            <div className="md:hidden px-4 pb-4">
                <div className="relative">
                    <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Search..."
                        className="w-full rounded-lg border border-[#243656] bg-[#0f1c31] pl-10 pr-4 py-2 text-sm text-gray-200 placeholder:text-gray-500 focus:border-indigo-500/50 focus:outline-none focus:ring-1 focus:ring-indigo-500/50"
                    />
                </div>
            </div>
        </div>
    );
}
