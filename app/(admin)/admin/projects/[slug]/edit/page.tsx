"use client";

import React from "react";
import { useData } from "@/context/DataContext";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { Project } from "@/types";

const FormInput = ({
    label,
    ...props
}: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) => (
    <div className="space-y-2">
        <label className="block text-sm font-medium text-slate-300">
            {label}
        </label>
        <input
            {...props}
            className={`w-full p-3 rounded-lg border border-[#6f49d8]/20 
                     bg-[#2d2854]/50 text-slate-200
                     focus:ring-2 focus:ring-[#6f49d8]/50 focus:border-transparent 
                     transition-all duration-200
                     hover:bg-[#2d2854]/70 placeholder:text-slate-500 ${
                         props.className || ""
                     }`}
        />
    </div>
);

const FormTextarea = ({
    label,
    ...props
}: { label: string } & React.TextareaHTMLAttributes<HTMLTextAreaElement>) => (
    <div className="space-y-2">
        <label className="block text-sm font-medium text-slate-300">
            {label}
        </label>
        <textarea
            {...props}
            className={`w-full p-3 rounded-lg border border-[#6f49d8]/20 
                     bg-[#2d2854]/50 text-slate-200
                     focus:ring-2 focus:ring-[#6f49d8]/50 focus:border-transparent 
                     transition-all duration-200
                     hover:bg-[#2d2854]/70 placeholder:text-slate-500
                     resize-none ${props.className || ""}`}
        />
    </div>
);

export default function EditProjectPage() {
    const { slug } = useParams();
    const router = useRouter();
    const { getProjectBySlug } = useData();
    const project = getProjectBySlug(slug as string);

    const [formData, setFormData] = React.useState<Project | null>(
        project || null
    );

    if (!project) {
        return (
            <div className="min-h-screen bg-[#1d193e] p-6">
                <div className="text-center text-slate-400">
                    Project not found
                </div>
            </div>
        );
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!formData) return;

        try {
            const response = await fetch(`/api/projects/${slug}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error("Failed to update project");
            }

            router.push("/admin/projects");
        } catch (error) {
            console.error("Error updating project:", error);
        }
    };

    return (
        <div className="min-h-screen bg-[#1d193e] p-6 space-y-8">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
                <div className="flex items-center gap-4">
                    <Link
                        href="/admin/projects"
                        className="p-2 hover:bg-[#2d2854]/70 rounded-lg transition-all duration-300 
                                 group ring-1 ring-[#2d2854] hover:ring-[#6f49d8]/50"
                    >
                        <ArrowLeft className="h-5 w-5 text-slate-400 group-hover:text-[#6f49d8]" />
                    </Link>
                    <div>
                        <h1 className="text-2xl font-bold text-slate-200">
                            Edit Project
                        </h1>
                        <p className="text-slate-400 mt-2">{project.title}</p>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <Link
                        href="/admin/projects"
                        className="px-4 py-2 text-slate-400 hover:text-slate-300 
                                 hover:bg-[#2d2854]/70 rounded-lg transition-all duration-300
                                 ring-1 ring-[#2d2854] hover:ring-[#6f49d8]/50"
                    >
                        Cancel
                    </Link>
                    <button
                        onClick={handleSubmit}
                        className="px-6 py-2 bg-[#6f49d8] hover:bg-[#6f49d8]/90 text-white 
                                 rounded-lg transition-all duration-300 font-medium
                                 shadow-lg shadow-[#6f49d8]/20 hover:shadow-[#6f49d8]/30
                                 hover:translate-y-[-1px]"
                    >
                        Save Changes
                    </button>
                </div>
            </div>

            {/* Form Container */}
            <div className="bg-[#2d2854]/30 rounded-xl border border-[#2d2854] backdrop-blur-sm">
                <div className="p-6">
                    <form
                        onSubmit={handleSubmit}
                        className="space-y-12 max-w-5xl mx-auto"
                    >
                        {/* Basic Information */}
                        <div
                            className="bg-[#2d2854]/40 backdrop-blur-sm p-8 rounded-xl 
                                      border border-[#6f49d8]/10 hover:border-[#6f49d8]/20
                                      shadow-lg hover:shadow-xl transition-all duration-300
                                      hover:bg-[#2d2854]/50"
                        >
                            <div className="flex items-center gap-4 border-b border-[#6f49d8]/10 pb-4 mb-8">
                                <div className="bg-[#6f49d8]/10 p-2.5 rounded-lg">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 text-[#a893e9]"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                                    </svg>
                                </div>
                                <h2 className="text-xl font-bold text-slate-200">
                                    Basic Information
                                </h2>
                            </div>

                            <div className="space-y-8">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <FormInput
                                        label="Title"
                                        value={formData?.title ?? ""}
                                        onChange={(e) =>
                                            setFormData((prev) => ({
                                                ...prev!,
                                                title: e.target.value,
                                            }))
                                        }
                                        required
                                    />
                                    <FormInput
                                        label="Slug"
                                        value={formData?.slug ?? ""}
                                        onChange={(e) =>
                                            setFormData((prev) => ({
                                                ...prev!,
                                                slug: e.target.value,
                                            }))
                                        }
                                        required
                                    />
                                </div>

                                <FormTextarea
                                    label="Description"
                                    value={formData?.description ?? ""}
                                    onChange={(e) =>
                                        setFormData((prev) => ({
                                            ...prev!,
                                            description: e.target.value,
                                        }))
                                    }
                                    rows={3}
                                    required
                                />

                                <FormTextarea
                                    label="Content (HTML)"
                                    value={formData?.content ?? ""}
                                    onChange={(e) =>
                                        setFormData((prev) => ({
                                            ...prev!,
                                            content: e.target.value,
                                        }))
                                    }
                                    rows={10}
                                    className="font-mono text-sm"
                                    required
                                />
                            </div>
                        </div>

                        {/* Links & Technologies */}
                        <div
                            className="bg-[#2d2854]/40 backdrop-blur-sm p-8 rounded-xl 
                                      border border-[#6f49d8]/10 hover:border-[#6f49d8]/20
                                      shadow-lg hover:shadow-xl transition-all duration-300
                                      hover:bg-[#2d2854]/50"
                        >
                            <div className="flex items-center gap-4 border-b border-[#6f49d8]/10 pb-4 mb-8">
                                <div className="bg-[#6f49d8]/10 p-2.5 rounded-lg">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 text-[#a893e9]"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                                    </svg>
                                </div>
                                <h2 className="text-xl font-bold text-slate-200">
                                    Links & Technologies
                                </h2>
                            </div>

                            <div className="space-y-8">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <FormInput
                                        label="Live URL"
                                        value={formData?.liveUrl ?? ""}
                                        onChange={(e) =>
                                            setFormData((prev) => ({
                                                ...prev!,
                                                liveUrl: e.target.value,
                                            }))
                                        }
                                        type="url"
                                    />
                                    <FormInput
                                        label="GitHub URL"
                                        value={formData?.githubUrl ?? ""}
                                        onChange={(e) =>
                                            setFormData((prev) => ({
                                                ...prev!,
                                                githubUrl: e.target.value,
                                            }))
                                        }
                                        type="url"
                                    />
                                </div>

                                <FormInput
                                    label="Technologies (comma-separated)"
                                    value={
                                        formData?.technologies.join(", ") ?? ""
                                    }
                                    onChange={(e) =>
                                        setFormData((prev) => ({
                                            ...prev!,
                                            technologies: e.target.value
                                                .split(",")
                                                .map((t) => t.trim())
                                                .filter((t) => t),
                                        }))
                                    }
                                    className="form-input"
                                    placeholder="Next.js, React, TypeScript"
                                />
                            </div>
                        </div>

                        {/* Project Details */}
                        <div
                            className="bg-[#2d2854]/40 backdrop-blur-sm p-8 rounded-xl 
                                      border border-[#6f49d8]/10 hover:border-[#6f49d8]/20
                                      shadow-lg hover:shadow-xl transition-all duration-300
                                      hover:bg-[#2d2854]/50"
                        >
                            <div className="flex items-center gap-4 border-b border-[#6f49d8]/10 pb-4 mb-8">
                                <div className="bg-[#6f49d8]/10 p-2.5 rounded-lg">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 text-[#a893e9]"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                                    </svg>
                                </div>
                                <h2 className="text-xl font-bold text-slate-200">
                                    Project Details
                                </h2>
                            </div>

                            <div className="space-y-8">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <FormInput
                                        label="Role"
                                        value={formData?.role ?? ""}
                                        onChange={(e) =>
                                            setFormData((prev) => ({
                                                ...prev!,
                                                role: e.target.value,
                                            }))
                                        }
                                        required
                                    />
                                    <FormInput
                                        label="Timeline"
                                        value={formData?.timeline ?? ""}
                                        onChange={(e) =>
                                            setFormData((prev) => ({
                                                ...prev!,
                                                timeline: e.target.value,
                                            }))
                                        }
                                        required
                                    />
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-slate-300">
                                            Challenges (one per line)
                                        </label>
                                        <textarea
                                            value={
                                                formData?.challenges.join(
                                                    "\n"
                                                ) ?? ""
                                            }
                                            onChange={(e) =>
                                                setFormData((prev) => ({
                                                    ...prev!,
                                                    challenges: e.target.value
                                                        .split("\n")
                                                        .filter((c) =>
                                                            c.trim()
                                                        ),
                                                }))
                                            }
                                            rows={4}
                                            className="form-input"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-slate-300">
                                            Solutions (one per line)
                                        </label>
                                        <textarea
                                            value={
                                                formData?.solutions.join(
                                                    "\n"
                                                ) ?? ""
                                            }
                                            onChange={(e) =>
                                                setFormData((prev) => ({
                                                    ...prev!,
                                                    solutions: e.target.value
                                                        .split("\n")
                                                        .filter((s) =>
                                                            s.trim()
                                                        ),
                                                }))
                                            }
                                            rows={4}
                                            className="form-input"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-slate-300">
                                        Team Members (one per line)
                                    </label>
                                    <textarea
                                        value={formData?.team.join("\n") ?? ""}
                                        onChange={(e) =>
                                            setFormData((prev) => ({
                                                ...prev!,
                                                team: e.target.value
                                                    .split("\n")
                                                    .filter((t) => t.trim()),
                                            }))
                                        }
                                        rows={3}
                                        className="form-input"
                                    />
                                </div>

                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <input
                                            type="checkbox"
                                            checked={
                                                formData?.featured ?? false
                                            }
                                            onChange={(e) =>
                                                setFormData((prev) => ({
                                                    ...prev!,
                                                    featured: e.target.checked,
                                                }))
                                            }
                                            className="form-checkbox"
                                        />
                                        <label className="text-sm font-medium text-slate-300">
                                            Featured Project
                                        </label>
                                    </div>

                                    <div className="space-y-2">
                                        <select
                                            value={formData?.status ?? ""}
                                            onChange={(e) =>
                                                setFormData((prev) => ({
                                                    ...prev!,
                                                    status: e.target.value,
                                                }))
                                            }
                                            className="form-select"
                                        >
                                            <option value="planned">
                                                Planned
                                            </option>
                                            <option value="in-progress">
                                                In Progress
                                            </option>
                                            <option value="completed">
                                                Completed
                                            </option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
