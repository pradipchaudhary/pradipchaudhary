"use client";

import React, { useState } from "react";
import axios from "axios";
import Image from "next/image";

interface CertificationFormData {
    name: string;
    issuer: string;
    issueDate: string;
    expiryDate: string;
    credentialId: string;
    credentialUrl: string;
    image: File | null;
    imagePreview: string;
}

export default function CertificationForm() {
    const [formData, setFormData] = useState<CertificationFormData>({
        name: "",
        issuer: "",
        issueDate: "",
        expiryDate: "",
        credentialId: "",
        credentialUrl: "",
        image: null,
        imagePreview: "",
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setFormData({
                ...formData,
                image: file,
                imagePreview: URL.createObjectURL(file),
            });
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Validate required fields
        if (!formData.name || !formData.issuer || !formData.issueDate) {
            alert("Please fill in all required fields");
            return;
        }

        try {
            const formDataToSend = new FormData();
            formDataToSend.append("name", formData.name);
            formDataToSend.append("issuer", formData.issuer);
            formDataToSend.append("issueDate", formData.issueDate);
            if (formData.expiryDate)
                formDataToSend.append("expiryDate", formData.expiryDate);
            if (formData.credentialId)
                formDataToSend.append("credentialId", formData.credentialId);
            if (formData.credentialUrl)
                formDataToSend.append("credentialUrl", formData.credentialUrl);
            if (formData.image) {
                formDataToSend.append("image", formData.image);
            }

            const response = await axios.post(
                "/api/certifications",
                formDataToSend
            );

            if (response.data.message) {
                alert(response.data.message);
                // Reset form or redirect
            }
        } catch (error) {
            console.error("Error adding certification:", error);
            if (axios.isAxiosError(error) && error.response?.data?.error) {
                alert(error.response.data.error);
            } else {
                alert("Failed to add certification. Please try again later.");
            }
        }
    };

    return (
        <div className="max-w-4xl mx-auto pb-12">
            {/* Header */}
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-white">
                    Add New Certification
                </h1>
                <p className="text-gray-400 mt-2 text-lg">
                    Add your certifications and credentials
                </p>
            </div>

            <form onSubmit={handleSubmit}>
                <div className="bg-[#0a1428] rounded-xl shadow-lg overflow-hidden">
                    {/* Basic Details Section */}
                    <div className="p-8 border-b border-[#243656]">
                        <h2 className="text-xl font-semibold text-white mb-6">
                            Certification Details
                        </h2>
                        <div className="space-y-6">
                            {/* Certification Name */}
                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-2">
                                    Certification Name*
                                </label>
                                <input
                                    name="name"
                                    type="text"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 bg-[#1a2942] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 border border-[#243656] placeholder-gray-500"
                                    placeholder="e.g., AWS Solutions Architect"
                                    required
                                />
                            </div>

                            {/* Issuer */}
                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-2">
                                    Issuing Organization*
                                </label>
                                <input
                                    name="issuer"
                                    type="text"
                                    value={formData.issuer}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 bg-[#1a2942] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 border border-[#243656] placeholder-gray-500"
                                    placeholder="e.g., Amazon Web Services"
                                    required
                                />
                            </div>

                            {/* Dates */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-300 mb-2">
                                        Issue Date*
                                    </label>
                                    <input
                                        name="issueDate"
                                        type="date"
                                        value={formData.issueDate}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 bg-[#1a2942] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 border border-[#243656]"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-300 mb-2">
                                        Expiry Date
                                    </label>
                                    <input
                                        name="expiryDate"
                                        type="date"
                                        value={formData.expiryDate}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 bg-[#1a2942] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 border border-[#243656]"
                                    />
                                </div>
                            </div>

                            {/* Credential Details */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-300 mb-2">
                                        Credential ID
                                    </label>
                                    <input
                                        name="credentialId"
                                        type="text"
                                        value={formData.credentialId}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 bg-[#1a2942] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 border border-[#243656] placeholder-gray-500"
                                        placeholder="Enter credential ID"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-300 mb-2">
                                        Credential URL
                                    </label>
                                    <input
                                        name="credentialUrl"
                                        type="url"
                                        value={formData.credentialUrl}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 bg-[#1a2942] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 border border-[#243656] placeholder-gray-500"
                                        placeholder="https://..."
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Certificate Image Section */}
                    <div className="p-8 bg-[#0d1830]">
                        <h2 className="text-xl font-semibold text-white mb-6">
                            Certificate Image
                        </h2>
                        <div className="flex items-start gap-8">
                            <div className="flex-1">
                                <div className="flex items-center justify-center w-full">
                                    <label className="flex flex-col items-center justify-center w-full h-48 border-2 border-dashed border-[#243656] rounded-lg cursor-pointer hover:border-blue-500/50 transition-colors">
                                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                            <svg
                                                className="w-8 h-8 mb-4 text-gray-500"
                                                aria-hidden="true"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 20 16"
                                            >
                                                <path
                                                    stroke="currentColor"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                                                />
                                            </svg>
                                            <p className="mb-2 text-sm text-gray-400">
                                                <span className="font-semibold">
                                                    Click to upload
                                                </span>{" "}
                                                or drag and drop
                                            </p>
                                            <p className="text-xs text-gray-500">
                                                PNG or JPG (MAX. 800x400px)
                                            </p>
                                        </div>
                                        <input
                                            type="file"
                                            accept="image/*"
                                            onChange={handleImageChange}
                                            className="hidden"
                                        />
                                    </label>
                                </div>
                            </div>
                            {formData.imagePreview && (
                                <div className="relative w-48 h-48 rounded-lg overflow-hidden border-2 border-[#243656]">
                                    <Image
                                        src={formData.imagePreview}
                                        alt="Preview"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            )}
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
                        Add Certification
                    </button>
                </div>
            </form>
        </div>
    );
}
