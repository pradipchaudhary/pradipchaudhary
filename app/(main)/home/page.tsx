import React from "react";
import AboutMe from "../components/AboutMe";
import Experience from "../components/Experience";
import Skills from "../components/Skills";
import Certifications from "../components/Certifications";

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
