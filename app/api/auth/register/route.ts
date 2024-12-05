import { NextResponse } from "next/server";
import { hash } from "bcryptjs";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
    try {
        const { username, email, password } = await req.json();

        // Check if user exists
        const existingUser = await prisma.user.findFirst({
            where: {
                OR: [{ email }, { username }],
            },
        });

        if (existingUser) {
            return NextResponse.json(
                { message: "User already exists" },
                { status: 400 }
            );
        }

        // Hash password
        const hashedPassword = await hash(password, 12);

        // Create admin user
        const user = await prisma.user.create({
            data: {
                username,
                email,
                password: hashedPassword,
                role: "ADMIN", // Set role as ADMIN
            },
        });

        const result = {
            id: user.id,
            username: user.username,
            email: user.email,
            role: user.role,
        };

        return NextResponse.json(
            {
                message: "Admin user created successfully",
                user: result,
            },
            { status: 201 }
        );
    } catch (error) {
        console.error("Registration error:", error);
        return NextResponse.json(
            { message: "Error creating user" },
            { status: 500 }
        );
    }
}
