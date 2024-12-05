import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { verifyAuth } from "../../../lib/auth";
import { uploadToCloudinary } from "@/lib/cloudinary";

export async function POST(req: Request) {
    try {
        // Check authentication using custom auth
        const authResult = await verifyAuth();
        if (!authResult.success) {
            return NextResponse.json(
                {
                    error: "Authentication failed. Please check your credentials.",
                },
                { status: 401 }
            );
        }

        const formData = await req.formData();
        console.log("Received form data:", Object.fromEntries(formData));

        const name = formData.get("name") as string;
        const issuer = formData.get("issuer") as string;
        const issueDate = formData.get("issueDate") as string;
        const expiryDate = formData.get("expiryDate") as string;
        const credentialId = formData.get("credentialId") as string;
        const credentialUrl = formData.get("credentialUrl") as string;
        const image = formData.get("image") as File | null;

        if (!name || !issuer || !issueDate) {
            return NextResponse.json(
                { error: "Missing required fields" },
                { status: 400 }
            );
        }

        // Handle image upload
        let imageUrl = null;
        if (image) {
            try {
                const bytes = await image.arrayBuffer();
                const buffer = Buffer.from(bytes);

                imageUrl = await uploadToCloudinary(buffer, {
                    folder: "certifications",
                    resource_type: "image",
                });
            } catch (uploadError) {
                console.error("[IMAGE_UPLOAD_ERROR]", uploadError);
                return NextResponse.json(
                    { error: "Failed to upload image" },
                    { status: 500 }
                );
            }
        }

        const certification = await prisma.certification.create({
            data: {
                name,
                issuer,
                issueDate: new Date(issueDate),
                expiryDate: expiryDate ? new Date(expiryDate) : null,
                credentialId: credentialId || null,
                credentialUrl: credentialUrl || null,
                imageUrl,
            },
        });

        return NextResponse.json({
            message: "Certification created successfully",
            data: certification,
        });
    } catch (error) {
        console.error("[CERTIFICATIONS_POST]", error);
        return NextResponse.json(
            { error: "Failed to add certification. Please try again later." },
            { status: 500 }
        );
    }
}
