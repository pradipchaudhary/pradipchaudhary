import type { Config } from "tailwindcss";

export default {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
            },
            animation: {
                "move-stars": "move 50s linear infinite",
                "move-stars2": "move 100s linear infinite",
                "move-stars3": "move 150s linear infinite",
                "fade-in": "fadeIn 0.3s ease-out",
                "bounce-slow": "bounce 2s infinite",
            },
            keyframes: {
                move: {
                    "0%": { transform: "translateY(0)" },
                    "100%": { transform: "translateY(-2000px)" },
                },
                fadeIn: {
                    "0%": { opacity: "0", transform: "translateY(10px)" },
                    "100%": { opacity: "1", transform: "translateY(0)" },
                },
                bounce: {
                    "0%, 100%": {
                        transform: "translateY(-25%)",
                        animationTimingFunction: "cubic-bezier(0.8, 0, 1, 1)",
                    },
                    "50%": {
                        transform: "translateY(0)",
                        animationTimingFunction: "cubic-bezier(0, 0, 0.2, 1)",
                    },
                },
            },
            boxShadow: {
                stars: "0 0 1px #FFF, 100px 200px #FFF, 150px 300px #FFF, 200px 400px #FFF",
                stars2: "0 0 2px #FFF, 200px 400px #FFF, 300px 600px #FFF",
                stars3: "0 0 3px #FFF, 300px 600px #FFF, 400px 800px #FFF",
            },
        },
    },
    plugins: [],
} satisfies Config;
