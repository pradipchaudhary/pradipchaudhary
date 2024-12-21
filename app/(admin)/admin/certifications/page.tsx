"use client";

import {
    deleteCertification,
    fetchCertifications,
} from "@/features/certifications/certificationSlice";
import { AppDispatch, RootState } from "@/store/store";
import Link from "next/link";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function CertificationsPage() {
    const dispatch = useDispatch<AppDispatch>();

    const { certificates, loading, error } = useSelector(
        (state: RootState) => state.certifications // Ensure this matches your store slice
    );

    useEffect(() => {
        dispatch(fetchCertifications());
    }, [dispatch]);

    console.log("certifications", certificates);
    const handleDelete = async (id: number) => {
        try {
            await dispatch(deleteCertification(id)).unwrap();
        } catch (error) {
            console.error("Failed to delete certification:", error);
        }
    };

    return (
        <div>
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-2xl font-bold text-white">
                    Certifications
                </h1>
                <Link
                    href="/admin/certifications/new"
                    className="px-4 py-2 bg-[#1a2942] text-white rounded-lg hover:bg-[#243656] transition-colors"
                >
                    Add Certification
                </Link>
            </div>

            {loading ? (
                <p className="text-white">Loading...</p>
            ) : error ? (
                <p className="text-red-500">Error: {error}</p>
            ) : certificates.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {certificates.map((cert: any) => (
                        <div
                            key={cert.id}
                            className="p-4 bg-[#1a2942] rounded-lg shadow-lg text-white"
                        >
                            <h2 className="text-xl font-semibold">
                                {cert.certificationYear || "No Year Provided"}
                            </h2>

                            <div className="mb-4">
                                {cert.achieveCertifications.length > 0 && (
                                    <ul className="mt-2">
                                        {cert.achieveCertifications.map(
                                            (skill: string, index: number) => (
                                                <li
                                                    key={index}
                                                    className="text-gray-400 text-sm"
                                                >
                                                    {skill}
                                                </li>
                                            )
                                        )}
                                    </ul>
                                )}
                            </div>
                            <Link
                                href={`/admin/certifications/${cert.id}/edit`}
                                className="px-4 py-2 bg-[#1a2942] text-white rounded-lg hover:bg-[#243656] transition-colors mr-2"
                            >
                                Edit
                            </Link>
                            <button
                                onClick={() => handleDelete(cert.id)}
                                className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                            >
                                Delete
                            </button>
                        </div>
                    ))}
                </div>
            ) : (
                <p className="text-gray-400">No certifications available.</p>
            )}
        </div>
    );
}
