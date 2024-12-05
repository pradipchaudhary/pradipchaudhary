"use client";

import Link from "next/link";

export default function SkillsPage() {
    const skills = [
        {
            id: 1,
            category: "Frontend",
            skills: [
                { name: "React", level: "Expert" },
                { name: "Next.js", level: "Advanced" },
                { name: "TypeScript", level: "Advanced" },
            ],
        },
        {
            id: 2,
            category: "Backend",
            skills: [
                { name: "Node.js", level: "Advanced" },
                { name: "Python", level: "Intermediate" },
                { name: "PostgreSQL", level: "Advanced" },
            ],
        },
    ];

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-bold text-white">Skills</h1>
                <Link
                    href={"/admin/skills/create-new"}
                    className="px-4 py-2 bg-[#1a2942] text-white rounded-lg hover:bg-[#243656] transition-colors"
                >
                    Add Skill
                </Link>
            </div>

            <div className="space-y-6">
                {skills.map((category) => (
                    <div
                        key={category.id}
                        className="bg-[#0a1428] p-6 rounded-xl"
                    >
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-lg font-medium text-white">
                                {category.category}
                            </h2>
                            <button className="text-sm text-blue-400 hover:text-blue-300">
                                Add Skill
                            </button>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {category.skills.map((skill, index) => (
                                <div
                                    key={index}
                                    className="flex items-center justify-between p-4 bg-[#1a2942] rounded-lg"
                                >
                                    <div>
                                        <p className="text-white">
                                            {skill.name}
                                        </p>
                                        <p className="text-sm text-gray-400">
                                            {skill.level}
                                        </p>
                                    </div>
                                    <div className="flex gap-2">
                                        <button className="text-gray-400 hover:text-white">
                                            Edit
                                        </button>
                                        <button className="text-red-400 hover:text-red-300">
                                            Delete
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
