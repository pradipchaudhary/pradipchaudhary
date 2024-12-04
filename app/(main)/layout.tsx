import React from "react";
import { ReactNode } from "react";
import Header from "./components/Header";

export default function MainLayout({ children }: { children: ReactNode }) {
    return (
        <div className="relative">
            {/* Main Content Container */}
            <div className="mx-auto min-h-screen max-w-6xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0">
                <div className="lg:flex lg:justify-between lg:gap-6">
                    {/* Header Section */}
                    <Header />
                    <main
                        id="content"
                        className="pt-24 lg:w-full lg:py-24 lg:pl-10 lg:pr-1"
                    >
                        {children}
                    </main>
                </div>
            </div>
        </div>
    );
}
