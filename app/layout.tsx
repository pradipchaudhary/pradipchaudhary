import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
<<<<<<< HEAD
import CustomScroller from "@/components/shared/CustomScroller";
import { StoreProvider } from "./StoreProvider";
=======
import { DataProvider } from "@/context/DataContext";
import Stars from "@/components/shared/Stars";
import CustomScroller from "@/components/shared/CustomScroller";
import Footer from "@/components/shared/Footer";
>>>>>>> 377f9ee246fe13d105dbf942f4f33b239451a758

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
                <CustomScroller />
                <div className="relative min-h-screen w-full">
<<<<<<< HEAD
                    {/* Main Content */}
                    <div className="relative">
                        <StoreProvider>{children}</StoreProvider>
                        {/* <Provider store={store}>{children}</Provider> */}
                        {/* {children} */}

                        {/* <Provider store={store}>
                            <Component {...pageProps} />
                        </Provider> */}
=======
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

                        {/* Star Animation Layers */}
                        <div className="fixed inset-0 z-0 overflow-hidden">
                            <div className="stars-small" />
                            <div className="stars-medium" />
                            <div className="stars-large" />
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
                    <Stars />

                    {/* Main Content */}
                    <div className="relative">
                        <DataProvider>{children}</DataProvider>
>>>>>>> 377f9ee246fe13d105dbf942f4f33b239451a758
                    </div>
                </div>
            </body>
        </html>
    );
}
