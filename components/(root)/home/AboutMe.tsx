"use client";
import Link from "next/link";

export default function AboutMe() {
    return (
        <section
            id="introduction"
            className="space-y-8 h-screen text-slate-500 "
        >
            {/* Header Section */}
            <div className="space-y-1">
                <div className="inline-block">
                    <h1 className="text-3xl sm:text-2xl font-semibold text-slate-500 mb-2 ">
                        Hi there{" "}
                        <span className="wave inline-block ml-2 transform hover:scale-110 transition-transform">
                            👋
                        </span>
                    </h1>
                    {/* <div className="h-0.5 w-1/2 bg-gradient-to-r from-[#6f49d8] to-transparent rounded-full"></div> */}
                </div>
                <h2
                    className="text-xs sm:text-sm lg:text-base text-slate-500 leading-relaxed
                                      max-w-sm"
                >
                    I&apos;m Pradip, a developer based in{" "}
                    <Link
                        href="https://en.wikipedia.org/wiki/Nepal"
                        target="_blank"
                        className="text-slate-500 hover:text-slate-400 transition-colors duration-300 
                                     border-b border-slate-500/30 hover:border-slate-400"
                    >
                        Nepal.
                    </Link>
                </h2>
            </div>

            {/* Content Section */}
            <div className="space-y-6 text-base sm:text-lg text-slate-500 leading-relaxed max-w-2xl">
                {/* Introduction */}
                <div className="group">
                    <p className="transition-colors duration-300 text-xs sm:text-sm lg:text-base">
                        I&apos;m an enthusiastic{" "}
                        <Link
                            href="https://reactjs.org/"
                            className="text-slate-500 hover:text-slate-400 transition-colors duration-300 
                                     border-b border-slate-500/30 hover:border-slate-400"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            React Developer{" "}
                        </Link>{" "}
                        dedicated to crafting intuitive and dynamic web
                        applications. With expertise in modern web technologies,
                        I excel in transforming complex concepts into seamless
                        digital solutions.
                    </p>
                </div>

                {/* Main Experience */}
                <div className="group">
                    <p className="text-sm sm:text-sm lg:text-base">
                        As a Full-Time React Developer , my expertise lies in
                        creating seamless and responsive UIs and designs into
                        engaging web experiences. Currently focusing on{" "}
                        <TechStack
                            technologies={[
                                "Next.js",
                                "TypeScript",
                                "UI/UX Design",
                            ]}
                        />
                        .
                    </p>
                </div>

                {/* Technologies */}
                <div className="group">
                    <p className="text-xs sm:text-sm lg:text-base">
                        Proficient in modern CSS frameworks including{" "}
                        <TechStack
                            technologies={[
                                "Tailwind CSS",
                                "Bootstrap",
                                "Bulma",
                            ]}
                        />{" "}
                        for crafting visually stunning applications.
                    </p>
                </div>
            </div>

            {/* about footer  */}
            <div className="space-y-2 mt-20 ">
                <div>
                    <ul className="flex gap-8 max-w-md text-sm flex-wrap">
                        <Link
                            href="mailto:chaudharypradip678@gmail.com"
                            className="flex items-center gap-1 text-[.89rem]"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="18"
                                height="18"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                className="lucide lucide-mails text-slate-600 hover:text-slate-500 transition-colors duration-300"
                            >
                                <rect
                                    width="16"
                                    height="13"
                                    x="6"
                                    y="4"
                                    rx="2"
                                />
                                <path d="m22 7-7.1 3.78c-.57.3-1.23.3-1.8 0L6 7" />
                                <path d="M2 8v11c0 1.1.9 2 2 2h14" />
                            </svg>
                            <span>chaudharypradip678</span>
                        </Link>
                        <Link
                            href="https://github.com/chaudharypradip678"
                            className="flex items-center gap-1 text-[.89rem]"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="18"
                                height="18"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                className="lucide lucide-github text-slate-600 hover:text-slate-500 transition-colors duration-300"
                            >
                                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                                <path d="M9 18c-4.51 2-5-2-7-2" />
                            </svg>
                            <span>github/pradipchaudhary</span>
                        </Link>

                        <Link
                            href="https://www.linkedin.com/in/pradipchaudhary/"
                            className="flex items-center gap-1 text-[.89rem]"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="18"
                                height="18"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                className="lucide lucide-linkedin  text-slate-600 hover:text-slate-500 transition-colors duration-300"
                            >
                                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                                <rect width="4" height="12" x="2" y="9" />
                                <circle cx="4" cy="4" r="2" />
                            </svg>
                            <span>in/pradipchaudhary</span>
                        </Link>
                    </ul>
                </div>

                <div className="pt-10 flex gap-10">
                    <button>hire me</button>
                    <button>resume</button>
                </div>
            </div>
        </section>
    );
}

// Helper component for tech links
function TechLink({ href, text }: { href: string; text: string }) {
    return (
        <Link
            href={href}
            className="text-slate-500 hover:text-slate-400 transition-colors duration-300 
                                     border-b border-slate-500/30 hover:border-slate-400"
            target="_blank"
            rel="noopener noreferrer"
        >
            {text}
        </Link>
    );
}

// Helper component for technology stacks
function TechStack({ technologies }: { technologies: string[] }) {
    return (
        <span className="space-x-1">
            {technologies.map((tech, index) => (
                <span key={tech}>
                    <TechLink href={getTechUrl(tech)} text={tech} />
                    {index < technologies.length - 1 &&
                        index !== technologies.length - 2 &&
                        ", "}
                    {index === technologies.length - 2 && " and "}
                </span>
            ))}
        </span>
    );
}

// Helper function to get technology URLs
function getTechUrl(tech: string): string {
    const urls: { [key: string]: string } = {
        "Next.js": "https://nextjs.org/",
        TypeScript: "https://www.typescriptlang.org/",
        "UI/UX Design": "https://www.smashingmagazine.com/category/uiux",
        "Tailwind CSS": "https://tailwindcss.com/",
        Bootstrap: "https://getbootstrap.com/",
        Bulma: "https://bulma.io/",
    };
    return urls[tech] || "#";
}
