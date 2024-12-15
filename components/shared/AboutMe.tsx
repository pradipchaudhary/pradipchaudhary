"use client";
import Link from "next/link";

export default function AboutMe() {
    return (
        <section id="introduction" className="space-y-8">
            {/* Header Section */}
            <div className="space-y-2">
                <div className="inline-block">
                    <h1 className="text-3xl sm:text-3xl font-bold text-slate-300 mb-2">
                        Hi there{" "}
                        <span className="wave inline-block ml-2 transform hover:scale-110 transition-transform">
                            👋
                        </span>
                    </h1>
                    <div className="h-0.5 w-1/2 bg-gradient-to-r from-[#6f49d8] to-transparent rounded-full"></div>
                </div>
                <h2
                    className="text-xs sm:text-sm lg:text-base text-slate-400 leading-relaxed
                                      max-w-sm"
                >
                    Frontend Engineer based in{" "}
                    <Link
                        href="https://en.wikipedia.org/wiki/Nepal"
                        target="_blank"
                        className="text-[#6f49d8] hover:text-[#8b6ae5] transition-colors duration-300 
                                     border-b border-[#6f49d8]/30 hover:border-[#8b6ae5]"
                    >
                        Nepal
                    </Link>
                </h2>
            </div>

            {/* Content Section */}
            <div className="space-y-8 text-base sm:text-lg text-slate-400 leading-relaxed max-w-2xl">
                {/* Introduction */}
                <div className="group">
                    <p className="transition-colors duration-300 text-xs sm:text-sm lg:text-base">
                        I&apos;m an enthusiastic{" "}
                        <Link
                            href="https://reactjs.org/"
                            className="text-[#6f49d8] hover:text-[#8b6ae5] transition-colors duration-300 
                                     border-b border-[#6f49d8]/30 hover:border-[#8b6ae5]"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            React Developer
                        </Link>{" "}
                        dedicated to crafting intuitive and dynamic web
                        applications. With expertise in modern web technologies,
                        I excel in transforming complex concepts into seamless
                        digital solutions.
                    </p>
                </div>

                {/* Main Experience */}
                <div className="group">
                    <p className="text-xs sm:text-sm lg:text-base">
                        As a{" "}
                        <span className="text-slate-300 font-medium">
                            Full-Time React Developer
                        </span>
                        , my expertise lies in creating{" "}
                        <span className="text-slate-300 font-medium">
                            seamless and responsive UIs
                        </span>{" "}
                        and{" "}
                        <span className="text-slate-300 font-medium">
                            designs
                        </span>{" "}
                        into engaging web experiences. Currently focusing on{" "}
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
        </section>
    );
}

// Helper component for tech links
function TechLink({ href, text }: { href: string; text: string }) {
    return (
        <Link
            href={href}
            className="inline-flex items-center text-[#6f49d8] hover:text-[#8b6ae5] 
                     transition-colors duration-300 border-b border-[#6f49d8]/30 
                     hover:border-[#8b6ae5] font-medium"
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
