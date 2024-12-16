import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import CustomScroller from "@/components/shared/CustomScroller";
import { StoreProvider } from "./StoreProvider";

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
                    {/* Main Content */}
                    <div className="relative">
                        <StoreProvider>{children}</StoreProvider>
                        {/* <Provider store={store}>{children}</Provider> */}
                        {/* {children} */}

                        {/* <Provider store={store}>
                            <Component {...pageProps} />
                        </Provider> */}
                    </div>
                </div>
            </body>
        </html>
    );
}
