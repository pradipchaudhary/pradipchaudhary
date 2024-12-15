import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { uploadToCloudinary } from "@/lib/cloudinary";
import { z } from "zod";

// Validation schema for project data
const ProjectSchema = z.object({
    title: z.string().min(1),
    description: z.string().min(1),
    content: z.string(),
    technologies: z.array(z.string()),
    liveUrl: z.string().url().optional().nullable(),
    githubUrl: z.string().url().optional().nullable(),
    featured: z.boolean(),
    challenges: z.array(z.string()),
    solutions: z.array(z.string()),
    timeline: z.string(),
    role: z.string(),
    team: z.array(z.string()),
    slug: z.string(),
    status: z.enum(["planned", "in-progress", "completed"]),
});

export async function POST(request: Request) {
    try {
        const formData = await request.formData();

        // Handle image uploads
        const mainImage = formData.get("mainImage") as File;
        const galleryImages = formData.getAll("galleryImages") as File[];

        // Parse and validate project data
        const rawProjectData = JSON.parse(
            formData.get("projectData") as string
        );
        const projectData = ProjectSchema.parse(rawProjectData);

        // Upload images to Cloudinary
        let mainImageUrl = "";
        if (mainImage) {
            const buffer = Buffer.from(await mainImage.arrayBuffer());
            mainImageUrl = await uploadToCloudinary(buffer, {
                folder: "projects",
                resource_type: "image",
            });
        }

        const galleryUrls = await Promise.all(
            galleryImages.map(async (img) => {
                const buffer = Buffer.from(await img.arrayBuffer());
                return uploadToCloudinary(buffer, {
                    folder: "projects",
                    resource_type: "image",
                });
            })
        );

        // Create project in database
        const project = await prisma.project.create({
            data: {
                ...projectData,
                image: mainImageUrl,
                gallery: galleryUrls,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        });

        return NextResponse.json({
            message: "Project created successfully",
            project,
        });
    } catch (error) {
        console.error("Error creating project:", error);
        if (error instanceof z.ZodError) {
            return NextResponse.json(
                { error: "Invalid project data", details: error.errors },
                { status: 400 }
            );
        }
        return NextResponse.json(
            { error: "Failed to create project" },
            { status: 500 }
        );
    }
}

export async function GET() {
    try {
        const projects = await prisma.project.findMany({
            orderBy: {
                createdAt: "desc",
            },
        });

        return NextResponse.json({ projects });
    } catch (error) {
        console.error("Error fetching projects:", error);
        return NextResponse.json(
            { error: "Failed to fetch projects" },
            { status: 500 }
        );
    }
}
