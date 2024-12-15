import React from "react";
import AboutMe from "@/components/shared/AboutMe";
import Experience from "@/components/shared/Experience";
import Skills from "@/components/shared/Skills";
import Certifications from "@/components/shared/Certifications";

export default function HomePage() {
    return (
        <div className="space-y-8">
            <AboutMe />

            <Experience />
            <Skills />
            <Certifications />
        </div>
    );
}
