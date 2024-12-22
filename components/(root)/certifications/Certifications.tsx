"use client";

import React, { useEffect } from "react";
import { AppDispatch, RootState } from "@/store/store";
import { useDispatch, useSelector } from "react-redux";
import { fetchCertifications } from "@/features/certifications/certificationSlice";

const Certifications: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();

    const {
        certificates = [],
        loading,
        error,
    } = useSelector((state: RootState) => state.certifications);

    useEffect(() => {
        dispatch(fetchCertifications());
    }, [dispatch]);

    // Sort certificates by certificationYear in descending order
    const sortedCertificates = certificates.slice().sort((a, b) => {
        return parseInt(b.certificationYear) - parseInt(a.certificationYear);
    });

    return (
        <section id="certifications" className="py-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-200 mb-6">
                📜 Certifications
            </h2>
            {loading && (
                <p className="text-sm text-gray-400 animate-pulse">
                    Loading certifications...
                </p>
            )}
            {error && (
                <p className="text-sm text-red-400">
                    Failed to load certifications. Please try again later.
                </p>
            )}
            {!loading && !error && sortedCertificates.length > 0 && (
                <div className="relative border-l border-gray-600 pl-6 ml-[1.4rem]">
                    {sortedCertificates.map((item, index) => (
                        <div
                            key={index}
                            className={`mb-8 relative fade-up fade-up-delayed-${index}`}
                        >
                            {/* Timeline Bullet */}
                            <div className="w-[.75rem] h-[.75rem] bg-gradient-to-r from-blue-500 to-purple-500 rounded-full absolute top-[.4rem] left-[-1.94rem] animate-beat"></div>
                            <div className="w-[.75rem] h-[.75rem] bg-gradient-to-r from-blue-500 to-purple-500 rounded-full absolute top-[.4rem] left-[-1.94rem] animate-echo"></div>
                            {/* Year */}
                            <h6 className="text-lg font-semibold text-gray-300 mb-4">
                                {item.certificationYear}
                            </h6>
                            {/* Certifications */}
                            <ul className="list-disc ml-6 space-y-2">
                                {item.achieveCertifications.map(
                                    (certification, certIndex) => (
                                        <li
                                            key={certIndex}
                                            className="text-xs sm:text-sm text-slate-400 leading-relaxed group-hover:text-slate-300"
                                        >
                                            {certification}
                                        </li>
                                    )
                                )}
                            </ul>
                        </div>
                    ))}
                </div>
            )}
            {!loading && !error && sortedCertificates.length === 0 && (
                <p className="text-sm text-gray-400">
                    No certifications available.
                </p>
            )}
        </section>
    );
};

export default Certifications;
