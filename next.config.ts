import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    /* config options here */
<<<<<<< HEAD
    // reactStrictMode: false,
    async redirects() {
        return [
            {
                source: "/admin",
                destination: "/admin/dashboard",
                permanent: true, // Use `true` for 301 redirect or `false` for 302 redirect
            },
        ];
=======
    images: {
        domains: ["res.cloudinary.com"],
>>>>>>> 377f9ee246fe13d105dbf942f4f33b239451a758
    },
};

export default nextConfig;
