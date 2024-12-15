import React from "react";
import { ReactNode } from "react";
import Header from "../shared/Header";
import Footer from "../shared/Footer";

export default function MainLayout({ children }: { children: ReactNode }) {
    return (
        <div className="relative z-10 mx-auto min-h-screen max-w-6xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0">
            <div className="lg:flex lg:justify-between lg:gap-6">
                <Header />
                <main
                    id="content"
                    className="lg:w-full lg:pb-24 lg:pl-2 lg:pr-1"
                >
                    <header className="sticky top-0 left-0 w-full bg-gradient-to-b from-[#0f1026]/100 to-[#1b183c]/5 flex justify-between items-center"></header>
                    <div className="pt-[100px]">{children}</div>
                    <Footer />
                </main>
            </div>
        </div>
    );
}