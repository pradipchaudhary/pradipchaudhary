import { NextResponse } from "next/server";
import { compare } from "bcryptjs";
import { prisma } from "@/lib/prisma";
import { sign } from "jsonwebtoken";

export async function POST(req: Request) {
    try {
        const { email, password } = await req.json();

        // Find user by email
        const user = await prisma.user.findUnique({
            where: { email },
        });

        if (!user) {
            return NextResponse.json(
                { message: "Invalid credentials" },
                { status: 401 }
            );
        }

        // Verify password
        const isValidPassword = await compare(password, user.password);
        if (!isValidPassword) {
            return NextResponse.json(
                { message: "Invalid credentials" },
                { status: 401 }
            );
        }

        // Create JWT token
        const token = sign(
            { userId: user.id, email: user.email, role: user.role },
            process.env.JWT_SECRET || "fallback-secret-key",
            { expiresIn: "1d" }
        );

        // Remove password from the user object
        const { password: _, ...userWithoutPassword } = user;

        // Set HttpOnly cookie for the token
        return NextResponse.json(
            {
                message: "Login successful",
                user: userWithoutPassword,
                token,
            },
            {
                status: 200,
                headers: {
                    "Set-Cookie": `token=${token}; Path=/; HttpOnly; SameSite=Strict; Secure`,
                },
            }
        );
    } catch (error) {
        console.error("Login error:", error);
        return NextResponse.json(
            { message: "Login failed, please try again" },
            { status: 500 }
        );
    }
}
