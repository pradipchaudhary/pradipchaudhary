"use client";
import React from "react";

interface Skill {
    name: string;
    icon?: string; // For potential skill icons
    proficiency?: number; // Optional proficiency level 1-100
}

interface SkillCategory {
    title: string;
    skills: Skill[];
}

interface SkillsSectionProps {
    title: string;
    skills: Skill[];
}

const SkillsSection: React.FC<SkillsSectionProps> = ({ title, skills }) => {
    return (
        <div className="mb-6 pl-14">
            <h3 className="text-lg font-semibold mb-3">{title}</h3>
            <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                    <span
                        key={index}
                        className="px-3 py-1 bg-slate-800 rounded text-sm"
                    >
                        {skill.name}
                    </span>
                ))}
            </div>
        </div>
    );
};

const Skills: React.FC = () => {
    const skillCategories: SkillCategory[] = [
        {
            title: "Experienced",
            skills: [
                { name: "JavaScript" },
                { name: "TypeScript" },
                { name: "React.js" },
                { name: "Node.js" },
                { name: "PHP" },
                { name: "MySQL" },
                { name: "WordPress" },
                { name: "MongoDB" },
                { name: "Git" },
            ],
        },
        {
            title: "Familiar",
            skills: [
                { name: "Docker" },
                { name: "Next.js" },
                { name: "C++" },
                { name: "Serverless" },
            ],
        },
    ];

    return (
        <section className="py-8" id="skills">
            <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-slate-200">
                🛠️ Skills
            </h2>
            {skillCategories.map((category, index) => (
                <SkillsSection
                    key={index}
                    title={category.title}
                    skills={category.skills}
                />
            ))}
        </section>
    );
};

export default Skills;
