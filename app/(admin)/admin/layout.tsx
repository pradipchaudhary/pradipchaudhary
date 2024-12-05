import React from "react";
import Sidebar from "./components/Sidebar";
import TopBar from "./components/TopBar";

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex  mx-auto min-h-screen max-w-7xl px-6 py-12 md:px-12 md:py-20 lg:py-0">
            {/* Sidebar */}
            <div className="g:flex lg:justify-between lg:gap-6 ">
                <Sidebar />
            </div>

            {/* Main Content */}
            <main className=" flex-1">
                <TopBar />
                <div className=" lg:w-full lg:pr-1">{children}</div>
            </main>
        </div>
    );
}
