"use client";

import React, { useState } from "react";
import axios from "axios";

interface SkillFormData {
    name: string;
    category: SkillCategory;
    proficiency: number;
}

type SkillCategory =
    | "EXPERIENCED"
    | "FAMILIAR"
    | "FRONTEND"
    | "BACKEND"
    | "TOOLS";

const categories: { value: SkillCategory; label: string }[] = [
    { value: "EXPERIENCED", label: "Experienced" },
    { value: "FAMILIAR", label: "Familiar" },
    { value: "FRONTEND", label: "Frontend" },
    { value: "BACKEND", label: "Backend" },
    { value: "TOOLS", label: "Tools" },
];

export default function SkillForm() {
    const [formData, setFormData] = useState<SkillFormData>({
        name: "",
        category: "EXPERIENCED",
        proficiency: 80,
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: name === "proficiency" ? parseInt(value) : value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await axios.post("/api/skills", formData);
            alert("Skill added successfully!");
            console.log(response.data);
        } catch (error) {
            console.error("Error adding skill:", error);
            alert("Failed to add skill.");
        }
    };

    return (
        <div className="max-w-4xl mx-auto pb-12">
            {/* Header */}
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-white">Add New Skill</h1>
                <p className="text-gray-400 mt-2 text-lg">
                    Add a new skill to your portfolio
                </p>
            </div>

            <form onSubmit={handleSubmit}>
                <div className="bg-[#0a1428] rounded-xl shadow-lg overflow-hidden">
                    <div className="p-8">
                        <div className="space-y-6">
                            {/* Skill Name */}
                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-2">
                                    Skill Name*
                                </label>
                                <input
                                    name="name"
                                    type="text"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 bg-[#1a2942] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 border border-[#243656] placeholder-gray-500"
                                    placeholder="e.g., React.js, Node.js, Docker"
                                    required
                                />
                            </div>

                            {/* Category */}
                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-2">
                                    Category*
                                </label>
                                <select
                                    name="category"
                                    value={formData.category}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 bg-[#1a2942] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 border border-[#243656]"
                                    required
                                >
                                    {categories.map(({ value, label }) => (
                                        <option key={value} value={value}>
                                            {label}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            {/* Proficiency */}
                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-2">
                                    Proficiency Level*
                                </label>
                                <div className="space-y-3">
                                    <input
                                        name="proficiency"
                                        type="range"
                                        min="0"
                                        max="100"
                                        value={formData.proficiency}
                                        onChange={handleChange}
                                        className="w-full h-2 bg-[#243656] rounded-lg appearance-none cursor-pointer accent-blue-500"
                                    />
                                    <div className="flex justify-between text-sm text-gray-400">
                                        <span>Beginner</span>
                                        <span className="text-blue-400">
                                            {formData.proficiency}%
                                        </span>
                                        <span>Expert</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Form Actions */}
                <div className="mt-6 flex justify-end gap-4">
                    <button
                        type="button"
                        className="px-6 py-3 text-gray-400 hover:text-white transition-colors font-medium"
                    >
                        Cancel
                    </button>
                    <button
                        type="submit"
                        className="px-8 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors font-medium"
                    >
                        Add Skill
                    </button>
                </div>
            </form>
        </div>
    );
}
