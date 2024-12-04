import React from "react";
import Sidebar from "./components/Sidebar";
export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex min-h-screen bg-[#111e40]">
            {/* Sidebar */}
            <Sidebar />

            {/* Main Content */}
            <main className="ml-64 flex-1">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    {/* Hero Section */}
                    {children}
                </div>
            </main>
        </div>
    );
}
