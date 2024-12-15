"use client";
import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import React from "react";

export async function GET(
    request: Request,
    { params }: { params: { id: string } }
) {
    try {
        // Await the resolution of params
        const { id } = await params;

        // asynchronous access of `params.id`.
        // const { id } = React.use(params);

        const skill = await prisma.skill.findUnique({
            where: { id: Number(id) },
        });
        if (!skill) {
            throw new Error("Skill not found");
        }

        // Return the found skill in JSON format
        return NextResponse.json({ skill });
    } catch (error) {
        console.error("Error fetching skill:", error);
        return NextResponse.json(
            { error: "Failed to fetch skill" },
            { status: 500 }
        );
    }
}

export async function PUT(
    request: Request,
    { params }: { params: { id: string } }
) {
    try {
        // Await params and validate the `id`
        const id = params?.id;

        if (!id || isNaN(Number(id))) {
            return NextResponse.json(
                { error: "Invalid or missing ID in request parameters" },
                { status: 400 }
            );
        }
        console.log("Received ID:", id);

        // Parse the request body
        const body = await request.json();
        if (!body || typeof body !== "object") {
            return NextResponse.json(
                { error: "Invalid or missing request body" },
                { status: 400 }
            );
        }
        console.log("Request body:", body);

        // Extract and validate fields from the request body
        const { name, percentage, iconUrl, isHighlighted } = body;
        const updateData: { [key: string]: any } = {};

        if (name && typeof name === "string") updateData.name = name;
        if (percentage !== undefined && !isNaN(Number(percentage))) {
            updateData.percentage = Number(percentage);
        }
        if (iconUrl && typeof iconUrl === "string")
            updateData.iconUrl = iconUrl;
        if (isHighlighted !== undefined && typeof isHighlighted === "boolean") {
            updateData.isHighlighted = isHighlighted;
        }

        if (Object.keys(updateData).length === 0) {
            return NextResponse.json(
                { error: "No valid fields provided for update" },
                { status: 400 }
            );
        }

        // Perform the database update
        const updatedSkill = await prisma.skill.update({
            where: { id: Number(id) },
            data: updateData,
        });

        return NextResponse.json({
            message: "Skill updated successfully",
            skill: updatedSkill,
        });
    } catch (error: any) {
        console.error("Error updating skill:", error);

        if (error.code === "P2025") {
            return NextResponse.json(
                { error: "Skill not found for the given ID" },
                { status: 404 }
            );
        }

        return NextResponse.json(
            { error: "Failed to update skill" },
            { status: 500 }
        );
    }
}

export async function DELETE(
    request: Request,
    { params }: { params: { id: string } }
) {
    try {
        // Await and fetch the id from params
        const { id } = await params;
        // Delete the skill from the database
        await prisma.skill.delete({
            where: { id: Number(id) },
        });

        return NextResponse.json({ message: "Skill deleted successfully" });
    } catch (error) {
        console.error("Error deleting skill:", error);
        return NextResponse.json(
            { error: "Failed to delete skill" },
            { status: 500 }
        );
    }
}
