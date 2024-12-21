"use client";

import {
    fetchCertificationById,
    updateCertification,
} from "@/features/certifications/certificationSlice";
import { AppDispatch, RootState } from "@/store/store";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// Form State Interface
interface CertificationFormState {
    id?: number;
    certificationYear?: number;
    achieveCertifications: string[];
}

const UpdateCertificationForm: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>(); // Typed dispatch
    const { id } = useParams<{ id: string }>(); // Retrieve ID from the route

    const certification = useSelector(
        (state: RootState) => state.certifications.singleCertificate
    );

    const [formState, setFormState] = useState<CertificationFormState>({
        id: undefined,
        certificationYear: undefined,
        achieveCertifications: [],
    });

    // Fetch certification data when the component mounts
    useEffect(() => {
        const fetchData = async () => {
            try {
                const certificationId = Number(id);
                if (!isNaN(certificationId)) {
                    await dispatch(fetchCertificationById(certificationId));
                }
            } catch (error) {
                console.error("Error fetching certification:", error);
            }
        };
        fetchData();
    }, [dispatch, id]);

    // Sync Redux state with local form state
    useEffect(() => {
        if (certification && certification.id === Number(id)) {
            setFormState({
                id: certification.id,
                certificationYear: certification.certificationYear,
                achieveCertifications:
                    certification.achieveCertifications || [],
            });
            // console.log("Certification:", certification);
            // console.log("certification id:", certification.id);
            // console.log(
            //     "certification year:",
            //     certification.achieveCertifications
            // );
        }
    }, [certification, id]);

    // Handle changes for certificationYear
    const handleYearChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value ? parseInt(e.target.value, 10) : undefined;
        setFormState((prev) => ({ ...prev, certificationYear: value }));
    };

    // Handle changes for achieveCertifications
    const handleCertificationChange = (index: number, value: string) => {
        setFormState((prev) => {
            const updatedCertifications = [...prev.achieveCertifications];
            updatedCertifications[index] = value;
            return { ...prev, achieveCertifications: updatedCertifications };
        });
    };

    // Add a new certification input
    const addCertificationInput = () => {
        setFormState((prev) => ({
            ...prev,
            achieveCertifications: [...prev.achieveCertifications, ""],
        }));
    };

    // Remove a certification input
    const removeCertificationInput = (index: number) => {
        setFormState((prev) => {
            const updatedCertifications = [...prev.achieveCertifications];
            updatedCertifications.splice(index, 1);
            return { ...prev, achieveCertifications: updatedCertifications };
        });
    };

    // Update the dispatch inside handleSubmit
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        console.log("Submit");

        if (
            formState.id &&
            formState.certificationYear !== undefined &&
            formState.achieveCertifications
        ) {
            console.log("all data have");
            // Prepare the certification object to pass to the action
            const certification = {
                certificationYear: formState.certificationYear,
                achieveCertifications: formState.achieveCertifications,
            };

            // Dispatch with the required structure
            dispatch(
                updateCertification({
                    id: formState.id, // Use the formState.id
                    certification, // Pass the certification data as 'certification'
                })
            );
        } else {
            console.error("Form is incomplete or has missing fields");
        }
    };

    return (
        <div>
            <h1>Update Certification</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="certificationYear">
                        Certification Year
                    </label>
                    <input
                        type="number"
                        id="certificationYear"
                        value={formState.certificationYear || ""}
                        onChange={handleYearChange}
                    />
                </div>

                <div>
                    <label>Achieve Certifications</label>
                    {formState.achieveCertifications.map((cert, index) => (
                        <div
                            key={index}
                            style={{
                                display: "flex",
                                alignItems: "center",
                                marginBottom: "8px",
                            }}
                        >
                            <input
                                type="text"
                                value={cert}
                                onChange={(e) =>
                                    handleCertificationChange(
                                        index,
                                        e.target.value
                                    )
                                }
                            />
                            <button
                                type="button"
                                onClick={() => removeCertificationInput(index)}
                                style={{
                                    marginLeft: "8px",
                                    color: "red",
                                    cursor: "pointer",
                                }}
                            >
                                ✕
                            </button>
                        </div>
                    ))}
                    <button
                        type="button"
                        onClick={addCertificationInput}
                        style={{
                            marginTop: "10px",
                            padding: "5px 10px",
                            backgroundColor: "lightblue",
                            cursor: "pointer",
                        }}
                    >
                        + Add Certification
                    </button>
                </div>

                <button
                    type="submit"
                    style={{
                        marginTop: "20px",
                        padding: "10px 20px",
                        backgroundColor: "green",
                        color: "white",
                        border: "none",
                        cursor: "pointer",
                    }}
                >
                    Update Certification
                </button>
            </form>
        </div>
    );
};

export default UpdateCertificationForm;
