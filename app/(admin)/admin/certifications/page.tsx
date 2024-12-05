"use client";

import Link from "next/link";

export default function CertificationsPage() {
    const certifications = [
        {
            id: 1,
            name: "AWS Certified Developer",
            issuer: "Amazon Web Services",
            date: "2023",
            status: "Active",
        },
        {
            id: 2,
            name: "Professional Scrum Master",
            issuer: "Scrum.org",
            date: "2022",
            status: "Active",
        },
    ];

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-bold text-white">
                    Certifications
                </h1>
                <Link
                    href={"/admin/certifications/create-new"}
                    className="px-4 py-2 bg-[#1a2942] text-white rounded-lg hover:bg-[#243656] transition-colors"
                >
                    Add Certification
                </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {certifications.map((cert) => (
                    <div key={cert.id} className="bg-[#0a1428] p-6 rounded-xl">
                        <div className="flex justify-between items-start mb-4">
                            <div>
                                <h3 className="text-lg font-medium text-white">
                                    {cert.name}
                                </h3>
                                <p className="text-gray-400">{cert.issuer}</p>
                                <p className="text-sm text-gray-500">
                                    {cert.date}
                                </p>
                            </div>
                            <span className="px-2 py-1 text-xs bg-green-500/10 text-green-500 rounded-full">
                                {cert.status}
                            </span>
                        </div>
                        <div className="flex gap-2">
                            <button className="px-3 py-1 text-sm bg-[#1a2942] text-white rounded-lg hover:bg-[#243656] transition-colors">
                                Edit
                            </button>
                            <button className="px-3 py-1 text-sm bg-red-500/10 text-red-500 rounded-lg hover:bg-red-500/20 transition-colors">
                                Delete
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
