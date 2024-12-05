import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { generateToken } from "@/lib/auth";
import bcrypt from "bcryptjs";

export async function POST(req: Request) {
    try {
        let body;
        try {
            body = await req.json();
        } catch {
            return NextResponse.json(
                { error: "Invalid request body" },
                { status: 400 }
            );
        }

        const { email, password } = body;

        if (!email || !password) {
            return NextResponse.json(
                { error: "Email and password are required" },
                { status: 400 }
            );
        }

        // Find user
        const user = await prisma.user.findUnique({
            where: { email },
        });

        if (!user) {
            return NextResponse.json(
                { error: "Invalid credentials" },
                { status: 401 }
            );
        }

        // Verify password
        const isValid = await bcrypt.compare(password, user.password);
        if (!isValid) {
            return NextResponse.json(
                { error: "Invalid credentials" },
                { status: 401 }
            );
        }

        // Generate token
        const tokenResult = await generateToken(user);
        if (!tokenResult.success || !tokenResult.token) {
            return NextResponse.json(
                { error: "Login failed" },
                { status: 500 }
            );
        }

        const response = NextResponse.json({
            message: "Login successful",
            user: {
                id: user.id,
                email: user.email,
                role: user.role,
            },
        });

        // Set cookie in response
        response.cookies.set("admin-token", tokenResult.token, {
            httpOnly: true,
            secure: false,
            sameSite: "lax",
            path: "/",
            maxAge: 24 * 60 * 60,
        });

        return response;
    } catch (error) {
        console.error("[LOGIN]", error);
        return NextResponse.json({ error: "Login failed" }, { status: 500 });
    }
}
