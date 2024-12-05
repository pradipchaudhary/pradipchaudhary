"use client";

import React, { useState } from "react";
import axios from "axios";

interface ExperienceFormData {
    title: string;
    company: string;
    location: string;
    startDate: string;
    endDate: string;
    current: boolean;
    description: string;
    type: "WORK" | "EDUCATION";
}

export default function ExperienceForm() {
    const [formData, setFormData] = useState<ExperienceFormData>({
        title: "",
        company: "",
        location: "",
        startDate: "",
        endDate: "",
        current: false,
        description: "",
        type: "WORK",
    });

    const handleChange = (
        e: React.ChangeEvent<
            HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
        >
    ) => {
        const { name, value, type } = e.target;
        if (type === "checkbox") {
            const checked = (e.target as HTMLInputElement).checked;
            setFormData((prev) => ({
                ...prev,
                [name]: checked,
                ...(checked ? { endDate: "" } : {}),
            }));
        } else {
            setFormData((prev) => ({ ...prev, [name]: value }));
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await axios.post("/api/experiences", formData);
            alert("Experience added successfully!");
            console.log(response.data);
        } catch (error) {
            console.error("Error adding experience:", error);
            alert("Failed to add experience.");
        }
    };

    return (
        <div className="max-w-4xl mx-auto pb-12">
            {/* Header */}
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-white">
                    Add New Experience
                </h1>
                <p className="text-gray-400 mt-2 text-lg">
                    Add your work experience or education details
                </p>
            </div>

            <form onSubmit={handleSubmit}>
                <div className="bg-[#0a1428] rounded-xl shadow-lg overflow-hidden">
                    <div className="p-8">
                        <div className="space-y-6">
                            {/* Experience Type */}
                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-2">
                                    Experience Type*
                                </label>
                                <select
                                    name="type"
                                    value={formData.type}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 bg-[#1a2942] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 border border-[#243656]"
                                    required
                                >
                                    <option value="WORK">
                                        Work Experience
                                    </option>
                                    <option value="EDUCATION">Education</option>
                                </select>
                            </div>

                            {/* Title/Position */}
                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-2">
                                    {formData.type === "WORK"
                                        ? "Job Title*"
                                        : "Degree/Course*"}
                                </label>
                                <input
                                    name="title"
                                    type="text"
                                    value={formData.title}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 bg-[#1a2942] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 border border-[#243656] placeholder-gray-500"
                                    placeholder={
                                        formData.type === "WORK"
                                            ? "e.g., Senior Software Engineer"
                                            : "e.g., Bachelor of Science in Computer Science"
                                    }
                                    required
                                />
                            </div>

                            {/* Company/Institution */}
                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-2">
                                    {formData.type === "WORK"
                                        ? "Company*"
                                        : "Institution*"}
                                </label>
                                <input
                                    name="company"
                                    type="text"
                                    value={formData.company}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 bg-[#1a2942] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 border border-[#243656] placeholder-gray-500"
                                    placeholder={
                                        formData.type === "WORK"
                                            ? "e.g., Google"
                                            : "e.g., Stanford University"
                                    }
                                    required
                                />
                            </div>

                            {/* Location */}
                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-2">
                                    Location
                                </label>
                                <input
                                    name="location"
                                    type="text"
                                    value={formData.location}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 bg-[#1a2942] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 border border-[#243656] placeholder-gray-500"
                                    placeholder="e.g., San Francisco, CA"
                                />
                            </div>

                            {/* Dates */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-300 mb-2">
                                        Start Date*
                                    </label>
                                    <input
                                        name="startDate"
                                        type="date"
                                        value={formData.startDate}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 bg-[#1a2942] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 border border-[#243656]"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-300 mb-2">
                                        End Date
                                    </label>
                                    <input
                                        name="endDate"
                                        type="date"
                                        value={formData.endDate}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 bg-[#1a2942] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 border border-[#243656]"
                                        disabled={formData.current}
                                    />
                                </div>
                            </div>

                            {/* Current Position Checkbox */}
                            <div className="flex items-center">
                                <input
                                    name="current"
                                    type="checkbox"
                                    checked={formData.current}
                                    onChange={handleChange}
                                    className="rounded bg-[#243656] border-[#243656] text-blue-500 focus:ring-blue-500 h-4 w-4"
                                />
                                <label className="ml-2 text-sm text-gray-300">
                                    I currently{" "}
                                    {formData.type === "WORK"
                                        ? "work"
                                        : "study"}{" "}
                                    here
                                </label>
                            </div>

                            {/* Description */}
                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-2">
                                    Description
                                </label>
                                <textarea
                                    name="description"
                                    value={formData.description}
                                    onChange={handleChange}
                                    rows={4}
                                    className="w-full px-4 py-3 bg-[#1a2942] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 border border-[#243656] placeholder-gray-500"
                                    placeholder={
                                        formData.type === "WORK"
                                            ? "Describe your responsibilities and achievements..."
                                            : "Describe your field of study, achievements, etc..."
                                    }
                                />
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
                        Add Experience
                    </button>
                </div>
            </form>
        </div>
    );
}
