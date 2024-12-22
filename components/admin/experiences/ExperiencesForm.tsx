"use client";
import React, { useState } from "react";

interface Experience {
    title: string;
    company: string;
    companyUrl?: string;
    period: string;
    responsibilities: string[];
}

const ExperienceForm: React.FC = () => {
    const [formData, setFormData] = useState<Experience>({
        title: "",
        company: "",
        companyUrl: "",
        period: "",
        responsibilities: [],
    });

    const [newResponsibility, setNewResponsibility] = useState<string>("");

    // Handle form input changes
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    // Handle adding a new responsibility
    const handleAddResponsibility = () => {
        if (newResponsibility.trim()) {
            setFormData((prevState) => ({
                ...prevState,
                responsibilities: [
                    ...prevState.responsibilities,
                    newResponsibility,
                ],
            }));
            setNewResponsibility("");
        }
    };

    // Handle form submission
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
        // Here you can send the form data to an API or save it elsewhere
    };

    return (
        <div className="">
            <h1 className="text-3xl  text-gray-800 mb-6">Experience Form</h1>
            <form onSubmit={handleSubmit}>
                {/* Job Title */}
                <div className="mb-4">
                    <label
                        htmlFor="title"
                        className="block text-gray-700 font-medium mb-2"
                    >
                        Job Title
                    </label>
                    <input
                        id="title"
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleInputChange}
                        required
                        className="w-full rounded-lg border border-[#2d2854] bg-[#1d193e] px-4 py-3    text-sm text-slate-200 placeholder:text-slate-500    focus:border-[#6f49d8]/50 focus:outline-none focus:ring-1 focus:ring-[#6f49d8]/50   transition-all duration-300"
                        placeholder="Enter your job title"
                    />
                </div>

                {/* Company Name */}
                <div className="mb-4">
                    <label
                        htmlFor="company"
                        className="block text-gray-700 font-medium mb-2"
                    >
                        Company Name
                    </label>
                    <input
                        id="company"
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        required
                        className="w-full rounded-lg border border-[#2d2854] bg-[#1d193e] px-4 py-3    text-sm text-slate-200 placeholder:text-slate-500    focus:border-[#6f49d8]/50 focus:outline-none focus:ring-1 focus:ring-[#6f49d8]/50   transition-all duration-300"
                        placeholder="Enter company name"
                    />
                </div>

                {/* Company URL */}
                <div className="mb-4">
                    <label
                        htmlFor="companyUrl"
                        className="block text-gray-700 font-medium mb-2"
                    >
                        Company URL (Optional)
                    </label>
                    <input
                        id="companyUrl"
                        type="url"
                        name="companyUrl"
                        value={formData.companyUrl || ""}
                        onChange={handleInputChange}
                        className="w-full rounded-lg border border-[#2d2854] bg-[#1d193e] px-4 py-3    text-sm text-slate-200 placeholder:text-slate-500    focus:border-[#6f49d8]/50 focus:outline-none focus:ring-1 focus:ring-[#6f49d8]/50   transition-all duration-300"
                        placeholder="Enter company URL (optional)"
                    />
                </div>

                {/* Period */}
                <div className="mb-4">
                    <label
                        htmlFor="period"
                        className="block text-gray-700 font-medium mb-2"
                    >
                        Period
                    </label>
                    <input
                        id="period"
                        type="text"
                        name="period"
                        value={formData.period}
                        onChange={handleInputChange}
                        required
                        className="w-full rounded-lg border border-[#2d2854] bg-[#1d193e] px-4 py-3    text-sm text-slate-200 placeholder:text-slate-500    focus:border-[#6f49d8]/50 focus:outline-none focus:ring-1 focus:ring-[#6f49d8]/50   transition-all duration-300"
                        placeholder="e.g., Jan 2020 - Dec 2022"
                    />
                </div>

                {/* Responsibilities */}
                <div className="mb-4">
                    <label className="block text-gray-700 font-medium mb-2">
                        Responsibilities
                    </label>
                    <div className="flex mb-2">
                        <input
                            type="text"
                            value={newResponsibility}
                            onChange={(e) =>
                                setNewResponsibility(e.target.value)
                            }
                            className="w-full rounded-lg border border-[#2d2854] bg-[#1d193e] px-4 py-3    text-sm text-slate-200 placeholder:text-slate-500    focus:border-[#6f49d8]/50 focus:outline-none focus:ring-1 focus:ring-[#6f49d8]/50   transition-all duration-300"
                            placeholder="Add a responsibility"
                        />
                        <button
                            type="button"
                            onClick={handleAddResponsibility}
                            className=" bg-gray-200 text-gray-700 py-2 px-4 rounded hover:bg-gray-300 flex items-center gap-2 mt-4"
                        >
                            Add
                        </button>
                    </div>
                    <ul className="space-y-2">
                        {formData.responsibilities.map((resp, index) => (
                            <li
                                key={index}
                                className="p-3 bg-gray-100 rounded-md"
                            >
                                {resp}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Submit Button */}
                <div className="mt-6 flex justify-end gap-4">
                    <button
                        type="submit"
                        className="px-4 py-2 text-gray-300 hover:text-gray-200 hover:bg-[#1a2942] rounded-lg transition-colors"
                    >
                        Cancel
                    </button>
                    {/* <button
                        type="submit"
                        className="py-3 bg-green-500 text-white rounded-md hover:bg-green-600"
                    >
                        Submit
                    </button> */}
                    <button className="flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition-colors">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            className="lucide lucide-save h-4 w-4"
                        >
                            <path d="M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"></path>
                            <path d="M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7"></path>
                            <path d="M7 3v4a1 1 0 0 0 1 1h7"></path>
                        </svg>
                        <span>Save Experience</span>
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ExperienceForm;
