import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Pradip Chaudhary",
    description: "Frontend Engineer",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={inter.className}>
                {/* Fixed Background */}
                <div className="fixed inset-0 overflow-hidden">
                    {/* Base Gradient */}
                    <div className="fixed inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-[#1a1333]" />

                    {/* Mesh Gradient */}
                    <div className="fixed inset-0 opacity-30">
                        <div className="fixed inset-0 bg-[radial-gradient(circle_800px_at_100%_200px,#6f49d8,transparent)]" />
                        <div className="fixed inset-0 bg-[radial-gradient(circle_600px_at_0%_300px,#432a84,transparent)]" />
                        <div className="fixed inset-0 bg-[radial-gradient(circle_1000px_at_50%_-100px,#2d1f54,transparent)]" />
                    </div>

                    {/* Floating Elements */}
                    <div className="fixed inset-0">
                        <div className="fixed top-[20%] left-[10%] w-64 h-64 bg-[#6f49d8] rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-float-slow" />
                        <div className="fixed bottom-[30%] right-[15%] w-72 h-72 bg-[#432a84] rounded-full mix-blend-multiply filter blur-[128px] opacity-15 animate-float-slower" />
                    </div>

                    {/* Noise Texture */}
                    <div className="fixed inset-0 bg-[url('/patterns/noise.png')] opacity-[0.02]" />

                    {/* Vignette Effect */}
                    <div className="fixed inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.3)_100%)]" />
                </div>

                {/* Main Content */}
                <div className="relative min-h-screen">{children}</div>
            </body>
        </html>
    );
}
